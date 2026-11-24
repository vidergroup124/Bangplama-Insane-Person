// ยูทิลิตี้สร้าง DOM อย่างปลอดภัย (หลีกเลี่ยง innerHTML เพื่อป้องกัน XSS)
export function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'class' || k === 'className') {
      node.className = v;
    } else if (k === 'dataset' && typeof v === 'object') {
      for (const [dk, dv] of Object.entries(v)) {
        if (dv !== undefined && dv !== null) node.dataset[dk] = String(dv);
      }
    } else if (k.startsWith('on') && typeof v === 'function') {
      node.addEventListener(k.slice(2).toLowerCase(), v);
    } else if (v === true) {
      node.setAttribute(k, '');
    } else {
      node.setAttribute(k, String(v));
    }
  }
  for (const child of children.flat()) {
    if (child === null || child === undefined || child === false) continue;
    if (typeof child === 'string' || typeof child === 'number') {
      node.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      node.appendChild(child);
    }
  }
  return node;
}

export function clearNode(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

// จัดรูปแบบเลขบัตรประจำตัวประชาชน X-XXXX-XXXXX-XX-X
export function normalizeDigits(value) {
  return String(value || '').replace(/\D/g, '');
}

export function formatNationalId(value) {
  const digits = normalizeDigits(value).slice(0, 13);
  const parts = [];
  if (digits.length > 0) parts.push(digits.slice(0, 1));
  if (digits.length > 1) parts.push(digits.slice(1, 5));
  if (digits.length > 5) parts.push(digits.slice(5, 10));
  if (digits.length > 10) parts.push(digits.slice(10, 12));
  if (digits.length > 12) parts.push(digits.slice(12, 13));
  return parts.join('-');
}

// จัดรูปแบบเบอร์โทรศัพท์ 10 หลัก (08 1234 5678)
export function normalizePhone(value) {
  return String(value || '').replace(/\D/g, '');
}

export function formatPhone(value) {
  const d = normalizePhone(value).slice(0, 10);
  if (d.length === 10) return `${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`;
  return value || '';
}

// แสดงวัน-เวลาภาษาไทย พ.ศ.
export function formatThaiDateTime(isoOrDate) {
  if (!isoOrDate) return '-';
  let d;
  if (typeof isoOrDate?.toDate === 'function') {
    d = isoOrDate.toDate();
  } else {
    d = new Date(isoOrDate);
  }
  if (Number.isNaN(d.getTime())) return String(isoOrDate);
  return new Intl.DateTimeFormat('th-TH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  }).format(d);
}

// SHA-256 hex (สำหรับ hash รหัสผ่านตรวจสอบสิทธิ์ใน Firestore)
export async function sha256Hex(text) {
  const data = new TextEncoder().encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// บีบอัดภาพถ่ายด้วย Canvas เพื่อให้เก็บได้หลายภาพใน Firestore (Spark Free Plan)
export async function compressImageFile(file, maxDimension = 900, quality = 0.72) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error(`ไม่สามารถอ่านไฟล์ ${file.name} ได้`));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error(`ไฟล์ ${file.name} ไม่ใช่รูปภาพที่รองรับ`));
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          if (width >= height) {
            height = Math.round((height * maxDimension) / width);
            width = maxDimension;
          } else {
            width = Math.round((width * maxDimension) / height);
            height = maxDimension;
          }
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve({
          name: file.name,
          dataUrl,
          sizeBytes: Math.round((dataUrl.length * 3) / 4),
          uploadedAt: new Date().toISOString(),
        });
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

// เปรียบเทียบข้อมูลก่อน-หลังแก้ไขเพื่อเก็บใน Audit Log
const FIELD_LABELS = {
  nationalId: 'เลขบัตรประชาชน',
  fullName: 'ชื่อ-นามสกุล',
  nickname: 'ชื่อเล่น',
  age: 'อายุ',
  startYearBE: 'ปี พ.ศ. ที่เริ่มเป็น',
  colorGroup: 'กลุ่มสี',
  addressNo: 'บ้านเลขที่',
  moo: 'หมู่',
  subdistrict: 'ตำบล',
  district: 'อำเภอ',
  province: 'จังหวัด',
  note: 'หมายเหตุ',
  diagnosis: 'วินิจฉัยโรค',
  diagnosisCode: 'รหัสโรค',
};

export function diffPatientRecords(before, after) {
  const changes = {};
  const parts = [];
  for (const [key, label] of Object.entries(FIELD_LABELS)) {
    const prevVal = String(before?.[key] ?? '').trim();
    const nextVal = String(after?.[key] ?? '').trim();
    if (prevVal !== nextVal) {
      changes[key] = { from: prevVal, to: nextVal };
      parts.push(`${label}: "${prevVal || '-'}" → "${nextVal || '-'}"`);
    }
  }
  const prevPhotos = Array.isArray(before?.photos) ? before.photos.length : 0;
  const nextPhotos = Array.isArray(after?.photos) ? after.photos.length : 0;
  if (prevPhotos !== nextPhotos) {
    changes.photosCount = { from: prevPhotos, to: nextPhotos };
    parts.push(`ภาพถ่าย: ${prevPhotos} → ${nextPhotos} ภาพ`);
  }
  const prevGps = before?.gps ? `${before.gps.lat.toFixed(5)},${before.gps.lng.toFixed(5)}` : '';
  const nextGps = after?.gps ? `${after.gps.lat.toFixed(5)},${after.gps.lng.toFixed(5)}` : '';
  if (prevGps !== nextGps) {
    changes.gps = { from: prevGps, to: nextGps };
    parts.push(nextGps ? `อัปเดตพิกัด GPS (${nextGps})` : 'ลบพิกัด GPS');
  }
  return {
    changes,
    summary: parts.length ? parts.join(', ') : 'บันทึกข้อมูลซ้ำโดยไม่มีฟิลด์เปลี่ยนแปลง',
  };
}

export function getColorMeta(colorGroup) {
  const val = String(colorGroup || '').trim();
  switch (val) {
    case 'แดง':
      return { key: 'red', label: 'แดง (อันตรายสูง)', short: 'แดง' };
    case 'ส้ม':
      return { key: 'orange', label: 'ส้ม (เฝ้าระวัง)', short: 'ส้ม' };
    case 'เหลือง':
      return { key: 'yellow', label: 'เหลือง (ติดตาม)', short: 'เหลือง' };
    case 'เขียว':
      return { key: 'green', label: 'เขียว (ทั่วไป)', short: 'เขียว' };
    case 'ทดสอบ':
      return { key: 'test', label: 'ทดสอบ', short: 'ทดสอบ' };
    default:
      return { key: 'none', label: 'ยังไม่ระบุสี', short: 'ไม่ระบุ' };
  }
}

export const BANGPLAMA_SUBDISTRICTS = [
  'ต.โคกคราม',
  'ต.บางปลาม้า',
  'ต.ตะค่า',
  'ต.บางใหญ่',
  'ต.สาลี',
  'ต.ไผ่กองดิน',
  'ต.องครักษ์',
  'ต.จรเข้ใหญ่',
  'ต.บ้านแหลม',
  'ต.มะขามล้ม',
  'ต.วังน้ำเย็น',
  'ต.วัดโบสถ์',
  'ต.วัดดาว',
  'ต.กฤษณา',
];
