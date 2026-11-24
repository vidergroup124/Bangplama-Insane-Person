# คู่มือเชื่อมต่อ Firebase และ Deploy เว็บ สภ.บางปลาม้า

ระบบนี้พร้อมใช้งานบน **Firebase Spark Plan (ฟรี 100% ไม่ต้องผูกบัตรเครดิต)** โดยใช้บริการ 3 อย่าง:
1. **Firebase Authentication** (เปิดใช้งานผู้ให้บริการ `Email/Password`)
2. **Cloud Firestore** (เก็บรายชื่อบุคคลวิกลจริต + รายชื่อตำรวจ 85 นาย + ประวัติการทำงาน Audit Log + ภาพถ่ายบีบอัด)
3. **Firebase Hosting** (เปิดเว็บไซต์ HTTPS จริงให้ตำรวจเปิดจากมือถือ/คอมได้เลย)

---

## ขั้นตอนการติดตั้งและ Deploy ขึ้นเว็บจริง

### 1. ล็อกอิน Firebase CLI
```bash
npx -y firebase-tools@latest login
```

### 2. สร้างโปรเจกต์ Firebase ใหม่ (หรือเลือกโปรเจกต์ที่มีอยู่)
```bash
# สร้างโปรเจกต์ใหม่ (เปลี่ยนรหัสโปรเจกต์ให้ไม่ซ้ำ เช่น bangplama-police-registry)
npx -y firebase-tools@latest projects:create bangplama-police-registry --display-name "Bangplama Police Registry"

# เลือกโปรเจกต์ใช้งาน
npx -y firebase-tools@latest use bangplama-police-registry
```

### 3. เปิดบริการที่จำเป็นใน Firebase Console
เข้าไปที่ [Firebase Console](https://console.firebase.google.com/) เลือกโปรเจกต์ที่สร้าง แล้วเปิด:
1. **Authentication** → กด Get Started → เปิด **Email/Password** (ไม่ต้องเปิด Email link) → บันทึก
2. **Firestore Database** → กด Create database → เลือก Location `asia-southeast1` (Singapore) → Start in production mode → สร้าง

### 4. สร้าง Web App และดึงค่า Firebase Config ลงไฟล์ `.env`
```bash
# สร้าง Web App บนโปรเจกต์
npx -y firebase-tools@latest apps:create WEB "Bangplama Web"

# ดูค่า config แล้วนำไปใส่ในไฟล์ .env (ดูตัวอย่างจาก .env.example)
npx -y firebase-tools@latest apps:sdkconfig WEB
```

### 5. Build และ Deploy ทั้ง Firestore Rules + Hosting
```bash
npm run build
npx -y firebase-tools@latest deploy --only firestore:rules,firestore:indexes,hosting
```

### 6. นำเข้าข้อมูลตั้งต้นครั้งแรก (สำคัญ!)
1. เปิดลิงก์เว็บที่ Deploy ได้ (เช่น `https://bangplama-police-registry.web.app`)
2. เข้าสู่ระบบด้วย **บัญชีแอดมิน (`bangplama001`)** เป็นครั้งแรก
3. ระบบจะนำเข้า **ข้าราชการตำรวจ สภ.บางปลาม้า 85 นาย** และ **รายชื่อบุคคลวิกลจริต 148 รายการ** ขึ้น Cloud Firestore ให้อัตโนมัติทันที!
4. หลังจากนั้นข้าราชการตำรวจทุกนายสามารถล็อกอินด้วย **เบอร์โทรศัพท์ 10 หลัก** และรหัสผ่าน `1234` ได้ทันที
