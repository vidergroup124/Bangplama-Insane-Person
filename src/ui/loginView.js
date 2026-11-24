// หน้าจอเข้าสู่ระบบ สภ.บางปลาม้า (ตำรวจใช้เบอร์โทรศัพท์ + รหัสโรงพัก / แอดมินใช้บัญชีแอดมิน)
import { el } from '../utils/helpers.js';
import { dataService } from '../services/dataService.js';

export function renderLoginView({ onLoginSuccess }) {
  const errorBox = el('div', {
    class: 'alert-banner error',
    role: 'alert',
    hidden: true,
  });

  const usernameInput = el('input', {
    type: 'text',
    id: 'login-username',
    name: 'username',
    required: true,
    autocomplete: 'username',
    autocorrect: 'off',
    autocapitalize: 'none',
    spellcheck: 'false',
    enterkeyhint: 'next',
    placeholder: 'เช่น 0812345678',
    'aria-describedby': 'login-username-hint',
    'data-error': 'login-username-error',
  });

  const passwordInput = el('input', {
    type: 'password',
    id: 'login-password',
    name: 'password',
    required: true,
    autocomplete: 'current-password',
    enterkeyhint: 'done',
    placeholder: 'กรอกรหัสผ่าน',
    'data-error': 'login-password-error',
  });

  const togglePassBtn = el(
    'button',
    {
      type: 'button',
      class: 'password-toggle',
      'aria-pressed': 'false',
      'aria-label': 'แสดงรหัสผ่าน',
    },
    '👁️'
  );

  togglePassBtn.addEventListener('click', () => {
    const isHidden = passwordInput.type === 'password';
    passwordInput.type = isHidden ? 'text' : 'password';
    togglePassBtn.setAttribute('aria-pressed', isHidden ? 'true' : 'false');
    togglePassBtn.setAttribute('aria-label', isHidden ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน');
    togglePassBtn.textContent = isHidden ? '🙈' : '👁️';
  });

  const submitBtn = el(
    'button',
    {
      type: 'submit',
      class: 'btn btn-maroon btn-full',
    },
    '🔐 เข้าสู่ระบบ'
  );

  const form = el(
    'form',
    {
      class: 'login-body',
      method: 'post',
      'aria-labelledby': 'login-heading',
    },
    errorBox,
    el(
      'div',
      { class: 'field' },
      el('label', { for: 'login-username' }, 'ชื่อผู้ใช้ (เบอร์โทรศัพท์ตำรวจ / แอดมิน)', el('span', { class: 'req-star', 'aria-hidden': 'true' }, '*')),
      el('span', { id: 'login-username-hint', class: 'field-hint' }, 'ข้าราชการตำรวจ สภ.บางปลาม้า กรอกเบอร์โทรศัพท์ 10 หลัก (ใส่หรือไม่ใส่เว้นวรรคก็ได้)'),
      usernameInput,
      el('div', { id: 'login-username-error', class: 'error-msg' }, el('span', { role: 'img', 'aria-label': 'ข้อผิดพลาด' }, '⚠'), ' กรุณากรอกเบอร์โทรศัพท์หรือชื่อผู้ใช้')
    ),
    el(
      'div',
      { class: 'field' },
      el('label', { for: 'login-password' }, 'รหัสผ่าน', el('span', { class: 'req-star', 'aria-hidden': 'true' }, '*')),
      el('div', { class: 'password-wrap' }, passwordInput, togglePassBtn),
      el('div', { id: 'login-password-error', class: 'error-msg' }, el('span', { role: 'img', 'aria-label': 'ข้อผิดพลาด' }, '⚠'), ' กรุณากรอกรหัสผ่าน')
    ),
    submitBtn
  );

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorBox.hidden = true;
    errorBox.textContent = '';

    if (!form.reportValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      firstInvalid?.focus();
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'กำลังตรวจสอบสิทธิ์...';

    try {
      const user = await dataService.login(usernameInput.value, passwordInput.value);
      onLoginSuccess(user);
    } catch (err) {
      errorBox.textContent = err?.message || 'ไม่สามารถเข้าสู่ระบบได้ กรุณาลองใหม่อีกครั้ง';
      errorBox.hidden = false;
      submitBtn.disabled = false;
      submitBtn.textContent = '🔐 เข้าสู่ระบบ';
    }
  });

  const modeNote =
    dataService.getMode() === 'firebase'
      ? 'เชื่อมต่อฐานข้อมูล Firebase Cloud Firestore แล้ว'
      : 'โหมดทดสอบในเครื่อง (ข้อมูลตั้งต้นตำรวจ 85 นาย + รายชื่อ 148 รายการพร้อมใช้งาน)';

  return el(
    'main',
    { class: 'login-page' },
    el(
      'section',
      { class: 'login-card' },
      el(
        'header',
        { class: 'login-header' },
        el('div', { class: 'police-crest', 'aria-hidden': 'true' }, '🛡️'),
        el('h1', { id: 'login-heading' }, 'สถานีตำรวจภูธรบางปลาม้า'),
        el('p', {}, 'ระบบตรวจสอบและจัดการข้อมูลบุคคลวิกลจริต')
      ),
      form,
      el('footer', { class: 'login-footer' }, modeNote)
    )
  );
}
