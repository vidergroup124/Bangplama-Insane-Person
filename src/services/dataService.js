// คลาสและฟังก์ชันการเชื่อมต่อ Firebase + โหมดทดสอบในเครื่อง (Fallback เมื่อยังไม่ได้ใส่ Firebase Config)
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  writeBatch,
  query,
  orderBy,
  limit,
  onSnapshot,
} from 'firebase/firestore';

import { firebaseConfig, isFirebaseConfigured } from '../config/firebaseConfig.js';
import { OFFICERS_SEED } from '../data/officersSeed.js';
import { PATIENTS_SEED } from '../data/patientsSeed.js';
import {
  normalizePhone,
  normalizeDigits,
  formatNationalId,
  formatPhone,
  sha256Hex,
  diffPatientRecords,
} from '../utils/helpers.js';

export const ADMIN_USERNAME = 'bangplama001';
const ADMIN_AUTH_EMAIL = 'bangplama001@bangplama.local';
// เก็บเฉพาะแฮช SHA-256 เพื่อตรวจสอบเบื้องต้นบนฝั่ง client (สิทธิ์จริงบน Firebase ตรวจผ่าน Firebase Auth + firestore.rules)
const ADMIN_PASS_HASH = '49073c81ad561de4ba604af5bd155c97216d1c0828fc14dac2e2bad08b6827a2';
const DEFAULT_STATION_PASSWORD = '1234';

function officerAuthEmail(phone) {
  return `p_${normalizePhone(phone)}@bangplama.local`;
}

function deriveOfficerAuthPassword(stationPassword) {
  // Firebase Auth ต้องการรหัสผ่านอย่างน้อย 6 ตัวอักษร
  return `BPM#${stationPassword}#Station2026`;
}

// =========================================================================
// Local Demo Storage (ใช้เมื่อยังไม่ได้เชื่อมโปรเจกต์ Firebase จริง)
// =========================================================================
const LOCAL_KEYS = {
  patients: 'bpm_demo_patients_v1',
  officers: 'bpm_demo_officers_v1',
  logs: 'bpm_demo_logs_v1',
  session: 'bpm_demo_session_v1',
};

function loadLocal(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function ensureLocalSeeded() {
  const existingPatients = loadLocal(LOCAL_KEYS.patients, null);
  if (!existingPatients || !existingPatients.length) {
    const now = new Date().toISOString();
    const seeded = PATIENTS_SEED.map((p) => ({
      id: `seed_${String(p.seqNo).padStart(4, '0')}`,
      ...p,
      photos: [],
      gps: null,
      createdBy: {
        username: 'system',
        fullName: 'นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)',
        callsign: 'ระบบ',
        position: 'ข้อมูลตั้งต้น',
        role: 'system',
      },
      createdAt: now,
      updatedBy: {
        username: 'system',
        fullName: 'นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)',
        callsign: 'ระบบ',
        position: 'ข้อมูลตั้งต้น',
        role: 'system',
      },
      updatedAt: now,
    }));
    saveLocal(LOCAL_KEYS.patients, seeded);
  }

  const existingOfficers = loadLocal(LOCAL_KEYS.officers, null);
  if (!existingOfficers || !existingOfficers.length) {
    const seededOfficers = OFFICERS_SEED.map((o) => ({
      ...o,
      active: true,
    }));
    saveLocal(LOCAL_KEYS.officers, seededOfficers);
  }

  const existingLogs = loadLocal(LOCAL_KEYS.logs, null);
  if (!existingLogs) {
    saveLocal(LOCAL_KEYS.logs, []);
  }
}

// =========================================================================
// Unified Data Service (Firebase Firestore + Local Demo Fallback)
// =========================================================================
class DataService {
  constructor() {
    this.useFirebase = isFirebaseConfigured();
    this.app = null;
    this.auth = null;
    this.db = null;
    this.currentUser = null;
    this.localListeners = {
      patients: new Set(),
      officers: new Set(),
      logs: new Set(),
    };

    if (this.useFirebase) {
      this.app = initializeApp(firebaseConfig);
      this.auth = getAuth(this.app);
      this.db = getFirestore(this.app);
    } else {
      ensureLocalSeeded();
    }
  }

  getMode() {
    return this.useFirebase ? 'firebase' : 'demo';
  }

  // เรียกตรวจสอบสถานะล็อกอินเดิม
  initAuthListener(callback) {
    if (!this.useFirebase) {
      const saved = loadLocal(LOCAL_KEYS.session, null);
      this.currentUser = saved;
      callback(saved);
      return () => {};
    }

    return onAuthStateChanged(this.auth, async (fbUser) => {
      if (!fbUser) {
        this.currentUser = null;
        callback(null);
        return;
      }
      try {
        const email = (fbUser.email || '').toLowerCase();
        if (email === ADMIN_AUTH_EMAIL) {
          this.currentUser = {
            uid: fbUser.uid,
            username: ADMIN_USERNAME,
            role: 'admin',
            fullName: 'ผู้ดูแลระบบ สภ.บางปลาม้า',
            callsign: 'ADMIN',
            position: 'ผู้ดูแลระบบ',
            phone: '-',
          };
          callback(this.currentUser);
          return;
        }

        const m = email.match(/^p_(\d{9,10})@bangplama\.local$/);
        if (!m) {
          await signOut(this.auth);
          this.currentUser = null;
          callback(null);
          return;
        }
        const phone = m[1];
        const snap = await getDoc(doc(this.db, 'officers', phone));
        let officer = snap.exists() ? snap.data() : OFFICERS_SEED.find((o) => o.phone === phone);
        if (!officer || officer.active === false) {
          await signOut(this.auth);
          this.currentUser = null;
          callback(null);
          return;
        }
        this.currentUser = {
          uid: fbUser.uid,
          username: phone,
          role: 'officer',
          fullName: officer.fullName,
          callsign: officer.callsign || '-',
          position: officer.position || '-',
          phone: officer.phone || phone,
          phoneDisplay: officer.phoneDisplay || formatPhone(phone),
        };
        callback(this.currentUser);
      } catch (err) {
        console.error('Auth state resolution error:', err);
        this.currentUser = null;
        callback(null);
      }
    });
  }

  // เข้าสู่ระบบด้วยเบอร์โทรศัพท์ตำรวจ (รหัส 1234) หรือแอดมิน (bangplama001)
  async login(rawUsername, password) {
    const trimmedUser = String(rawUsername || '').trim();
    const pass = String(password || '');

    if (!trimmedUser || !pass) {
      throw new Error('กรุณากรอกชื่อผู้ใช้และรหัสผ่านให้ครบถ้วน');
    }

    // 1) กรณีเข้าสู่ระบบด้วยบัญชีแอดมิน
    if (trimmedUser.toLowerCase() === ADMIN_USERNAME) {
      const passHash = await sha256Hex(pass);
      if (passHash !== ADMIN_PASS_HASH) {
        throw new Error('รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง');
      }

      const adminProfile = {
        username: ADMIN_USERNAME,
        role: 'admin',
        fullName: 'ผู้ดูแลระบบ สภ.บางปลาม้า',
        callsign: 'ADMIN',
        position: 'ผู้ดูแลระบบ',
        phone: '-',
      };

      if (!this.useFirebase) {
        this.currentUser = adminProfile;
        saveLocal(LOCAL_KEYS.session, adminProfile);
        return adminProfile;
      }

      let cred;
      try {
        cred = await signInWithEmailAndPassword(this.auth, ADMIN_AUTH_EMAIL, pass);
      } catch (err) {
        if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
          try {
            cred = await createUserWithEmailAndPassword(this.auth, ADMIN_AUTH_EMAIL, pass);
          } catch (createErr) {
            if (createErr.code === 'auth/email-already-in-use') {
              throw new Error('รหัสผ่านผู้ดูแลระบบไม่ถูกต้อง');
            }
            if (createErr.code === 'auth/operation-not-allowed') {
              throw new Error('กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน');
            }
            throw createErr;
          }
        } else {
          throw err;
        }
      }

      this.currentUser = { ...adminProfile, uid: cred.user.uid };
      await this.ensureFirebaseSeededIfEmpty();
      return this.currentUser;
    }

    // 2) กรณีเข้าสู่ระบบด้วยเบอร์โทรศัพท์ข้าราชการตำรวจ
    const phone = normalizePhone(trimmedUser);
    if (phone.length < 9 || phone.length > 10) {
      throw new Error('ไม่พบบัญชีผู้ใช้ กรุณากรอกเบอร์โทรศัพท์ตำรวจ 10 หลักให้ถูกต้อง');
    }

    if (pass !== DEFAULT_STATION_PASSWORD) {
      throw new Error('รหัสผ่านโรงพักไม่ถูกต้อง');
    }

    if (!this.useFirebase) {
      const officers = loadLocal(LOCAL_KEYS.officers, []);
      const officer = officers.find((o) => normalizePhone(o.phone) === phone && o.active !== false);
      if (!officer) {
        throw new Error('ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า');
      }
      const userProfile = {
        username: phone,
        role: 'officer',
        fullName: officer.fullName,
        callsign: officer.callsign || '-',
        position: officer.position || '-',
        phone: officer.phone,
        phoneDisplay: officer.phoneDisplay || formatPhone(phone),
      };
      this.currentUser = userProfile;
      saveLocal(LOCAL_KEYS.session, userProfile);
      return userProfile;
    }

    // Firebase Mode: ตรวจว่ามีในรายชื่อตั้งต้นหรือใน officer_auth registry
    const seedOfficer = OFFICERS_SEED.find((o) => o.phone === phone);
    if (!seedOfficer) {
      const authHash = await sha256Hex(`${phone}:${pass}`);
      const regSnap = await getDoc(doc(this.db, 'officer_auth', authHash));
      if (!regSnap.exists() || regSnap.data().active === false) {
        throw new Error('ไม่พบเบอร์โทรศัพท์นี้ในรายชื่อข้าราชการตำรวจ สภ.บางปลาม้า');
      }
    }

    const email = officerAuthEmail(phone);
    const derivedPass = deriveOfficerAuthPassword(pass);
    let cred;
    try {
      cred = await signInWithEmailAndPassword(this.auth, email, derivedPass);
    } catch (err) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/invalid-credential') {
        try {
          cred = await createUserWithEmailAndPassword(this.auth, email, derivedPass);
        } catch (createErr) {
          if (createErr.code === 'auth/email-already-in-use') {
            throw new Error('รหัสผ่านไม่ถูกต้อง กรุณาติดต่อผู้ดูแลระบบ');
          }
          if (createErr.code === 'auth/operation-not-allowed') {
            throw new Error('กรุณาเปิดใช้งาน Email/Password ใน Firebase Authentication Console ก่อนใช้งาน');
          }
          throw createErr;
        }
      } else {
        throw err;
      }
    }

    // ตรวจสอบข้อมูลตำรวจใน Firestore (หรือสร้างข้อมูลตั้งต้นถ้าเป็นครั้งแรก)
    let officerDoc = await getDoc(doc(this.db, 'officers', phone));
    if (!officerDoc.exists() && seedOfficer) {
      // กรณีเข้าใช้ครั้งแรกก่อนแอดมินกดนำเข้า ให้ตรวจสอบสิทธิ์จาก seed และแจ้งถ้ายังไม่ได้ seed
      officerDoc = null;
    }

    const officerData = officerDoc?.exists() ? officerDoc.data() : seedOfficer;
    if (!officerData || officerData.active === false) {
      await signOut(this.auth);
      throw new Error('บัญชีตำรวจนี้ถูกระงับการใช้งานหรือไม่พบในระบบ');
    }

    this.currentUser = {
      uid: cred.user.uid,
      username: phone,
      role: 'officer',
      fullName: officerData.fullName,
      callsign: officerData.callsign || '-',
      position: officerData.position || '-',
      phone,
      phoneDisplay: officerData.phoneDisplay || formatPhone(phone),
    };
    return this.currentUser;
  }

  async logout() {
    this.currentUser = null;
    if (!this.useFirebase) {
      localStorage.removeItem(LOCAL_KEYS.session);
      return;
    }
    await signOut(this.auth);
  }

  // นำเข้าข้อมูลตั้งต้น (85 ตำรวจ + 148 บุคคลวิกลจริต) ขึ้น Firestore อัตโนมัติเมื่อฐานข้อมูลยังว่าง
  async ensureFirebaseSeededIfEmpty(force = false) {
    if (!this.useFirebase) return { officersSeeded: 0, patientsSeeded: 0 };
    if (this.currentUser?.role !== 'admin') return { officersSeeded: 0, patientsSeeded: 0 };

    let officersSeeded = 0;
    let patientsSeeded = 0;

    const existingOfficers = await getDocs(query(collection(this.db, 'officers'), limit(1)));
    if (force || existingOfficers.empty) {
      const batch = writeBatch(this.db);
      const now = new Date().toISOString();
      for (const o of OFFICERS_SEED) {
        const ref = doc(this.db, 'officers', o.phone);
        batch.set(
          ref,
          {
            ...o,
            active: true,
            updatedAt: now,
          },
          { merge: true }
        );
        const hash = await sha256Hex(`${o.phone}:${DEFAULT_STATION_PASSWORD}`);
        batch.set(doc(this.db, 'officer_auth', hash), { active: true }, { merge: true });
        officersSeeded += 1;
      }
      await batch.commit();
    }

    const existingPatients = await getDocs(query(collection(this.db, 'patients'), limit(1)));
    if (force || existingPatients.empty) {
      const now = new Date().toISOString();
      const systemActor = {
        username: 'system',
        fullName: 'นำเข้าจากไฟล์โรงพัก (บุคคลวิกลจริต)',
        callsign: 'ระบบ',
        position: 'ข้อมูลตั้งต้น',
        role: 'system',
      };
      // แบ่ง batch ทีละ 100 รายการ (จำกัด 500 ต่อ batch)
      for (let i = 0; i < PATIENTS_SEED.length; i += 100) {
        const chunk = PATIENTS_SEED.slice(i, i + 100);
        const batch = writeBatch(this.db);
        for (const p of chunk) {
          const docId = `seed_${String(p.seqNo).padStart(4, '0')}`;
          batch.set(
            doc(this.db, 'patients', docId),
            {
              ...p,
              photos: [],
              gps: null,
              createdBy: systemActor,
              createdAt: now,
              updatedBy: systemActor,
              updatedAt: now,
            },
            { merge: true }
          );
          patientsSeeded += 1;
        }
        await batch.commit();
      }

      if (patientsSeeded > 0) {
        await this.writeAuditLog({
          action: 'SEED_IMPORT',
          targetType: 'patient',
          targetId: 'initial_seed',
          targetName: `นำเข้าข้อมูลตั้งต้น ${patientsSeeded} รายการ และตำรวจ ${officersSeeded} นาย`,
          targetNationalId: '-',
          summary: `นำเข้าข้อมูลตั้งต้นจากไฟล์ สภ.บางปลาม้า (${patientsSeeded} รายชื่อ)`,
          changes: {},
        });
      }
    }

    return { officersSeeded, patientsSeeded };
  }

  // =========================================================================
  // Patients CRUD + Realtime Subscription
  // =========================================================================
  subscribePatients(onData, onError) {
    if (!this.useFirebase) {
      const emit = () => {
        const list = loadLocal(LOCAL_KEYS.patients, []);
        onData([...list].sort((a, b) => (a.seqNo || 99999) - (b.seqNo || 99999)));
      };
      this.localListeners.patients.add(emit);
      emit();
      return () => this.localListeners.patients.delete(emit);
    }

    const q = query(collection(this.db, 'patients'));
    return onSnapshot(
      q,
      (snap) => {
        const items = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        items.sort((a, b) => {
          const sa = Number(a.seqNo || 999999);
          const sb = Number(b.seqNo || 999999);
          if (sa !== sb) return sa - sb;
          return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
        });
        onData(items);
      },
      (err) => {
        console.error('Firestore patients listener error:', err);
        onError?.(err);
      }
    );
  }

  _notifyLocal(channel) {
    for (const fn of this.localListeners[channel]) {
      try {
        fn();
      } catch (e) {
        console.error(e);
      }
    }
  }

  _getActor() {
    const u = this.currentUser;
    if (!u) {
      throw new Error('กรุณาเข้าสู่ระบบก่อนทำรายการ');
    }
    return {
      username: u.username,
      fullName: u.fullName,
      callsign: u.callsign || '-',
      position: u.position || '-',
      role: u.role,
    };
  }

  async savePatient(payload, existingPatient = null) {
    const actor = this._getActor();
    const now = new Date().toISOString();
    const digits = normalizeDigits(payload.nationalId);
    const formattedId = digits ? formatNationalId(digits) : '';

    // ตรวจสอบขนาดข้อมูลไม่ให้เกินขีดจำกัด Firestore 1MB
    const approxSize = new Blob([JSON.stringify(payload.photos || [])]).size;
    if (approxSize > 820 * 1024) {
      throw new Error('ขนาดรูปภาพรวมใหญ่เกินขีดจำกัดฐานข้อมูล (สูงสุดประมาณ 800 KB ต่อรายการ) กรุณาลดจำนวนภาพ');
    }

    const cleanRecord = {
      nationalId: formattedId,
      nationalIdDigits: digits,
      fullName: String(payload.fullName || '').trim(),
      nickname: String(payload.nickname || '').trim(),
      age: String(payload.age || '').trim(),
      startYearBE: String(payload.startYearBE || '').trim(),
      colorGroup: String(payload.colorGroup || '').trim(),
      addressNo: String(payload.addressNo || '').trim(),
      moo: String(payload.moo || '').trim(),
      subdistrict: String(payload.subdistrict || '').trim(),
      district: String(payload.district || '').trim(),
      province: String(payload.province || '').trim(),
      note: String(payload.note || '').trim(),
      diagnosis: existingPatient?.diagnosis || payload.diagnosis || '',
      diagnosisCode: existingPatient?.diagnosisCode || payload.diagnosisCode || '',
      legacyPhotoRef: existingPatient?.legacyPhotoRef || payload.legacyPhotoRef || '',
      photos: Array.isArray(payload.photos) ? payload.photos : [],
      gps: payload.gps || null,
      updatedBy: actor,
      updatedAt: now,
    };

    if (existingPatient?.id) {
      // แก้ไขข้อมูลเดิม
      const { changes, summary } = diffPatientRecords(existingPatient, cleanRecord);
      const updated = {
        ...existingPatient,
        ...cleanRecord,
      };

      if (!this.useFirebase) {
        const list = loadLocal(LOCAL_KEYS.patients, []);
        const idx = list.findIndex((p) => p.id === existingPatient.id);
        if (idx >= 0) {
          list[idx] = updated;
          saveLocal(LOCAL_KEYS.patients, list);
          this._notifyLocal('patients');
        }
      } else {
        const { id, ...docData } = updated;
        await updateDoc(doc(this.db, 'patients', existingPatient.id), docData);
      }

      await this.writeAuditLog({
        action: 'UPDATE',
        targetType: 'patient',
        targetId: existingPatient.id,
        targetName: cleanRecord.fullName,
        targetNationalId: formattedId || '-',
        summary,
        changes,
      });

      return { mode: 'update', patient: updated };
    } else {
      // เพิ่มข้อมูลผู้ป่วยใหม่
      let nextSeq = 1;
      if (!this.useFirebase) {
        const list = loadLocal(LOCAL_KEYS.patients, []);
        nextSeq = list.reduce((m, x) => Math.max(m, Number(x.seqNo || 0)), 0) + 1;
        const newDoc = {
          id: `p_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
          seqNo: nextSeq,
          ...cleanRecord,
          createdBy: actor,
          createdAt: now,
        };
        list.push(newDoc);
        saveLocal(LOCAL_KEYS.patients, list);
        this._notifyLocal('patients');

        await this.writeAuditLog({
          action: 'CREATE',
          targetType: 'patient',
          targetId: newDoc.id,
          targetName: cleanRecord.fullName,
          targetNationalId: formattedId || '-',
          summary: `เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${cleanRecord.colorGroup || 'ไม่ระบุ'})`,
          changes: {},
        });
        return { mode: 'create', patient: newDoc };
      } else {
        const snap = await getDocs(collection(this.db, 'patients'));
        snap.forEach((d) => {
          const s = Number(d.data().seqNo || 0);
          if (s >= nextSeq) nextSeq = s + 1;
        });
        const newData = {
          seqNo: nextSeq,
          ...cleanRecord,
          createdBy: actor,
          createdAt: now,
        };
        const ref = await addDoc(collection(this.db, 'patients'), newData);
        const created = { id: ref.id, ...newData };

        await this.writeAuditLog({
          action: 'CREATE',
          targetType: 'patient',
          targetId: ref.id,
          targetName: cleanRecord.fullName,
          targetNationalId: formattedId || '-',
          summary: `เพิ่มรายชื่อบุคคลวิกลจริตใหม่ (กลุ่มสี: ${cleanRecord.colorGroup || 'ไม่ระบุ'})`,
          changes: {},
        });
        return { mode: 'create', patient: created };
      }
    }
  }

  async deletePatient(patient) {
    this._getActor();
    if (!patient?.id) throw new Error('ไม่พบรหัสเอกสารที่ต้องการลบ');

    if (!this.useFirebase) {
      const list = loadLocal(LOCAL_KEYS.patients, []);
      saveLocal(
        LOCAL_KEYS.patients,
        list.filter((p) => p.id !== patient.id)
      );
      this._notifyLocal('patients');
    } else {
      await deleteDoc(doc(this.db, 'patients', patient.id));
    }

    await this.writeAuditLog({
      action: 'DELETE',
      targetType: 'patient',
      targetId: patient.id,
      targetName: patient.fullName || '(ไม่ระบุชื่อ)',
      targetNationalId: patient.nationalId || '-',
      summary: `ลบรายชื่อออกจากระบบ (ลำดับที่ ${patient.seqNo || '-'})`,
      changes: {},
    });
  }

  // =========================================================================
  // Audit Logs (Admin Read, Any Authenticated Officer/Admin Append)
  // =========================================================================
  async writeAuditLog({ action, targetType, targetId, targetName, targetNationalId, summary, changes }) {
    const actor = this._getActor();
    const entry = {
      action,
      targetType,
      targetId: String(targetId || ''),
      targetName: String(targetName || ''),
      targetNationalId: String(targetNationalId || '-'),
      actor,
      summary: String(summary || ''),
      changes: changes || {},
      timestamp: new Date().toISOString(),
    };

    if (!this.useFirebase) {
      const logs = loadLocal(LOCAL_KEYS.logs, []);
      logs.unshift({ id: `log_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`, ...entry });
      saveLocal(LOCAL_KEYS.logs, logs.slice(0, 1000));
      this._notifyLocal('logs');
      return;
    }

    await addDoc(collection(this.db, 'audit_logs'), entry);
  }

  subscribeAuditLogs(onData, onError) {
    if (this.currentUser?.role !== 'admin') {
      onData([]);
      return () => {};
    }

    if (!this.useFirebase) {
      const emit = () => {
        const logs = loadLocal(LOCAL_KEYS.logs, []);
        onData([...logs]);
      };
      this.localListeners.logs.add(emit);
      emit();
      return () => this.localListeners.logs.delete(emit);
    }

    const q = query(collection(this.db, 'audit_logs'), orderBy('timestamp', 'desc'), limit(300));
    return onSnapshot(
      q,
      (snap) => {
        onData(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (err) => {
        console.error('Audit logs listener error:', err);
        onError?.(err);
      }
    );
  }

  // =========================================================================
  // Officers Management (Admin Only)
  // =========================================================================
  subscribeOfficers(onData, onError) {
    if (this.currentUser?.role !== 'admin') {
      onData([]);
      return () => {};
    }

    if (!this.useFirebase) {
      const emit = () => {
        const list = loadLocal(LOCAL_KEYS.officers, []);
        onData([...list].sort((a, b) => (a.seq || 999) - (b.seq || 999)));
      };
      this.localListeners.officers.add(emit);
      emit();
      return () => this.localListeners.officers.delete(emit);
    }

    return onSnapshot(
      collection(this.db, 'officers'),
      (snap) => {
        const list = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
        list.sort((a, b) => (a.seq || 999) - (b.seq || 999));
        onData(list);
      },
      (err) => onError?.(err)
    );
  }

  async saveOfficer(officerPayload) {
    if (this.currentUser?.role !== 'admin') {
      throw new Error('เฉพาะผู้ดูแลระบบเท่านั้นที่สามารถจัดการรายชื่อตำรวจได้');
    }
    const phone = normalizePhone(officerPayload.phone);
    if (phone.length < 9 || phone.length > 10) {
      throw new Error('กรุณากรอกเบอร์โทรศัพท์ 9-10 หลักให้ถูกต้อง');
    }
    const record = {
      phone,
      phoneDisplay: formatPhone(phone),
      fullName: String(officerPayload.fullName || '').trim(),
      position: String(officerPayload.position || '').trim(),
      callsign: String(officerPayload.callsign || '').trim(),
      category: String(officerPayload.category || 'ชั้นประทวน').trim(),
      note: String(officerPayload.note || '').trim(),
      active: officerPayload.active !== false,
      updatedAt: new Date().toISOString(),
    };
    if (!record.fullName) throw new Error('กรุณากรอกยศ ชื่อ-สกุล');

    if (!this.useFirebase) {
      const list = loadLocal(LOCAL_KEYS.officers, []);
      const idx = list.findIndex((o) => normalizePhone(o.phone) === phone);
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...record };
      } else {
        const maxSeq = list.reduce((m, x) => Math.max(m, Number(x.seq || 0)), 0);
        list.push({ seq: maxSeq + 1, ...record });
      }
      saveLocal(LOCAL_KEYS.officers, list);
      this._notifyLocal('officers');
    } else {
      await setDoc(doc(this.db, 'officers', phone), record, { merge: true });
      const hash = await sha256Hex(`${phone}:${DEFAULT_STATION_PASSWORD}`);
      await setDoc(doc(this.db, 'officer_auth', hash), { active: record.active }, { merge: true });
    }

    await this.writeAuditLog({
      action: 'OFFICER_UPDATE',
      targetType: 'officer',
      targetId: phone,
      targetName: record.fullName,
      targetNationalId: record.phoneDisplay,
      summary: `${record.active ? 'บันทึก/เปิดใช้งาน' : 'ระงับสิทธิ์'} บัญชีตำรวจ (${record.callsign || '-'})`,
      changes: {},
    });
  }
}

export const dataService = new DataService();
