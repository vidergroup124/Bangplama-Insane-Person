// ฟอร์มจัดการข้อมูลบุคคลวิกลจริต (ออกแบบตามรูปแบบและช่องข้อมูลจากภาพตัวอย่างของผู้ใช้)
import {
  el,
  clearNode,
  formatNationalId,
  normalizeDigits,
  compressImageFile,
  BANGPLAMA_SUBDISTRICTS,
} from '../utils/helpers.js';
import { dataService } from '../services/dataService.js';
import { showToast } from './toast.js';
import { openPhotoLightbox } from './dialogs.js';

export function renderPatientFormView({
  patients,
  initialPatient = null,
  prefillQuery = '',
  onSaved,
  onDeletePatient,
  onResetToNew,
}) {
  let editingPatient = initialPatient;
  let photos = Array.isArray(initialPatient?.photos) ? [...initialPatient.photos] : [];
  let gps = initialPatient?.gps ? { ...initialPatient.gps } : null;

  const statusBanner = el('div', { class: 'alert-banner info', hidden: true, role: 'status' });
  const modeLabel = el(
    'p',
    { class: 'form-sheet-mode' },
    editingPatient ? `โหมดแก้ไขข้อมูล: ${editingPatient.fullName} (ลำดับที่ ${editingPatient.seqNo || '-'})` : 'เพิ่มข้อมูลใหม่ หรือค้นหาด้วยเลขบัตรประชาชนเพื่อแก้ไขข้อมูลเดิม'
  );

  // 1) เลขบัตรประจำตัวประชาชน * + ปุ่มค้นหา
  const prefillDigits = !editingPatient ? normalizeDigits(prefillQuery) : '';
  const initialIdValue = editingPatient
    ? editingPatient.nationalId || ''
    : prefillDigits.length >= 5
      ? formatNationalId(prefillDigits)
      : '';

  const nationalIdInput = el('input', {
    type: 'text',
    id: 'pf-national-id',
    name: 'nationalId',
    required: true,
    inputmode: 'numeric',
    autocorrect: 'off',
    autocapitalize: 'none',
    spellcheck: 'false',
    maxlength: '17',
    placeholder: 'X-XXXX-XXXXX-XX-X',
    value: initialIdValue,
    'data-error': 'pf-national-id-error',
  });

  nationalIdInput.addEventListener('input', () => {
    const formatted = formatNationalId(nationalIdInput.value);
    if (nationalIdInput.value !== formatted) {
      nationalIdInput.value = formatted;
    }
    nationalIdInput.setCustomValidity('');
  });

  const lookupBtn = el(
    'button',
    {
      type: 'button',
      class: 'btn btn-slate',
    },
    '🔍 ค้นหา'
  );

  // 2) ชื่อ-นามสกุล ผู้ป่วย | ชื่อเล่น
  const prefillName = !editingPatient && prefillDigits.length < 5 ? prefillQuery : '';
  const fullNameInput = el('input', {
    type: 'text',
    id: 'pf-fullname',
    name: 'fullName',
    required: true,
    autocomplete: 'name',
    placeholder: 'เช่น นายสมชาย ใจดี',
    value: editingPatient?.fullName || prefillName || '',
    'data-error': 'pf-fullname-error',
  });

  const nicknameInput = el('input', {
    type: 'text',
    id: 'pf-nickname',
    name: 'nickname',
    placeholder: 'ชื่อเล่น (ถ้ามี)',
    value: editingPatient?.nickname || '',
  });

  // 3) อายุ (ปี) | ปี พ.ศ. ที่เริ่มเป็น
  const ageInput = el('input', {
    type: 'text',
    id: 'pf-age',
    name: 'age',
    inputmode: 'decimal',
    placeholder: 'เช่น 35',
    value: editingPatient?.age || '',
  });

  const startYearInput = el('input', {
    type: 'text',
    id: 'pf-start-year',
    name: 'startYearBE',
    inputmode: 'numeric',
    maxlength: '4',
    placeholder: 'เช่น 2568',
    value: editingPatient?.startYearBE || '',
  });

  // 4) กลุ่มสี
  const colorSelect = el(
    'select',
    { id: 'pf-color', name: 'colorGroup' },
    el('option', { value: '' }, '- เลือกระดับความรุนแรง -'),
    el('option', { value: 'แดง' }, '🔴 แดง — อันตรายสูง / คลุ่มคลั่ง / เคยก่อเหตุรุนแรง'),
    el('option', { value: 'ส้ม' }, '🟠 ส้ม — เฝ้าระวัง / มีความเสี่ยงสูง'),
    el('option', { value: 'เหลือง' }, '🟡 เหลือง — ติดตามอาการ'),
    el('option', { value: 'เขียว' }, '🟢 เขียว — อาการคงที่ / ทั่วไป'),
    el('option', { value: 'ทดสอบ' }, 'ทดสอบ')
  );
  colorSelect.value = editingPatient?.colorGroup || '';

  // 5) ที่อยู่ (บ้านเลขที่) | หมู่
  const addressNoInput = el('input', {
    type: 'text',
    id: 'pf-address-no',
    name: 'addressNo',
    placeholder: 'เช่น 123/4',
    value: editingPatient?.addressNo || '',
  });

  const mooInput = el('input', {
    type: 'text',
    id: 'pf-moo',
    name: 'moo',
    placeholder: 'เช่น ม.5',
    value: editingPatient?.moo || '',
  });

  // 6) ตำบล | อำเภอ | จังหวัด
  const subdistrictDatalist = el(
    'datalist',
    { id: 'bpm-subdistricts-list' },
    ...BANGPLAMA_SUBDISTRICTS.map((sd) => el('option', { value: sd }))
  );

  const subdistrictInput = el('input', {
    type: 'text',
    id: 'pf-subdistrict',
    name: 'subdistrict',
    list: 'bpm-subdistricts-list',
    placeholder: 'เช่น ต.โคกคราม',
    value: editingPatient?.subdistrict || '',
  });

  const districtInput = el('input', {
    type: 'text',
    id: 'pf-district',
    name: 'district',
    placeholder: 'เช่น อ.บางปลาม้า',
    value: editingPatient?.district || (editingPatient ? '' : 'อ.บางปลาม้า'),
  });

  const provinceInput = el('input', {
    type: 'text',
    id: 'pf-province',
    name: 'province',
    placeholder: 'เช่น จ.สุพรรณบุรี',
    value: editingPatient?.province || (editingPatient ? '' : 'จ.สุพรรณบุรี'),
  });

  // 7) หมายเหตุ
  const noteInput = el('textarea', {
    id: 'pf-note',
    name: 'note',
    placeholder: 'ระบุข้อมูลเพิ่มเติม (ถ้ามี)',
  });
  noteInput.value = editingPatient?.note || '';

  // 8) ภาพถ่าย (เลือกได้หลายภาพ)
  const fileInput = el('input', {
    type: 'file',
    id: 'pf-photos',
    name: 'photos',
    accept: 'image/*',
    multiple: true,
  });

  const photoPreviewGrid = el('div', { class: 'photo-preview-grid' });
  const photoHelpText = el(
    'span',
    { class: 'field-hint' },
    'ระบบจะย่อขนาดภาพอัตโนมัติเพื่อจัดเก็บใน Firestore (แนะนำไม่เกิน 4-5 ภาพต่อรายการ)'
  );

  function renderPhotoPreviews() {
    clearNode(photoPreviewGrid);
    photos.forEach((ph, idx) => {
      photoPreviewGrid.appendChild(
        el(
          'div',
          { class: 'photo-thumb' },
          el('img', {
            src: ph.dataUrl || ph.url,
            alt: ph.name || `ภาพที่ ${idx + 1}`,
            onClick: () => openPhotoLightbox(ph.dataUrl || ph.url, ph.name || `ภาพที่ ${idx + 1}`),
          }),
          el(
            'button',
            {
              type: 'button',
              class: 'photo-remove-btn',
              'aria-label': `ลบภาพ ${ph.name || idx + 1}`,
              onClick: () => {
                photos.splice(idx, 1);
                renderPhotoPreviews();
              },
            },
            '✕'
          )
        )
      );
    });
  }

  fileInput.addEventListener('change', async () => {
    const files = Array.from(fileInput.files || []);
    if (!files.length) return;
    for (const file of files) {
      if (photos.length >= 6) {
        showToast('แนบภาพได้สูงสุด 6 ภาพต่อรายการ', 'error');
        break;
      }
      try {
        const compressed = await compressImageFile(file);
        photos.push(compressed);
      } catch (err) {
        showToast(err.message, 'error');
      }
    }
    fileInput.value = '';
    renderPhotoPreviews();
  });

  // 9) พิกัดสถานที่ (GPS)
  const gpsBtn = el(
    'button',
    {
      type: 'button',
      class: 'btn btn-maroon btn-full',
    },
    '📌 ดึงพิกัด GPS ปัจจุบัน'
  );

  const gpsStatusBox = el('div', { class: 'gps-status-box', role: 'status' });

  function renderGpsStatus() {
    clearNode(gpsStatusBox);
    if (gps && typeof gps.lat === 'number' && typeof gps.lng === 'number') {
      gpsStatusBox.className = 'gps-status-box captured';
      const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${gps.lat},${gps.lng}`)}`;
      gpsStatusBox.appendChild(
        el('span', {}, `📍 พิกัด: ${gps.lat.toFixed(6)}, ${gps.lng.toFixed(6)}`)
      );
      gpsStatusBox.appendChild(
        el(
          'div',
          { style: 'display:flex;gap:0.4rem;' },
          el('a', { href: mapsUrl, target: '_blank', rel: 'noopener noreferrer', class: 'btn btn-outline btn-sm' }, 'เปิดแผนที่'),
          el(
            'button',
            {
              type: 'button',
              class: 'btn btn-danger-outline btn-sm',
              onClick: () => {
                gps = null;
                renderGpsStatus();
              },
            },
            'ล้างพิกัด'
          )
        )
      );
    } else {
      gpsStatusBox.className = 'gps-status-box';
      gpsStatusBox.textContent = 'ยังไม่ได้ดึงพิกัดตำแหน่ง';
    }
  }

  gpsBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
      showToast('อุปกรณ์หรือเบราว์เซอร์นี้ไม่รองรับการดึงพิกัด GPS', 'error');
      return;
    }
    gpsBtn.disabled = true;
    gpsBtn.textContent = '⏳ กำลังดึงพิกัด GPS...';
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        gps = {
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: Math.round(pos.coords.accuracy || 0),
          capturedAt: new Date().toISOString(),
        };
        gpsBtn.disabled = false;
        gpsBtn.textContent = '📌 ดึงพิกัด GPS ปัจจุบัน';
        renderGpsStatus();
        showToast('ดึงพิกัด GPS สำเร็จแล้ว', 'success');
      },
      (err) => {
        gpsBtn.disabled = false;
        gpsBtn.textContent = '📌 ดึงพิกัด GPS ปัจจุบัน';
        const reason =
          err.code === 1
            ? 'กรุณาอนุญาตการเข้าถึงตำแหน่ง (Location) ในเบราว์เซอร์'
            : 'ไม่สามารถรับสัญญาณ GPS ได้ในขณะนี้';
        showToast(reason, 'error');
      },
      { enableHighAccuracy: true, timeout: 12000, maximumAge: 0 }
    );
  });

  // Populate form when searching by National ID
  function loadPatientIntoForm(found) {
    editingPatient = found;
    nationalIdInput.value = found.nationalId || '';
    fullNameInput.value = found.fullName || '';
    nicknameInput.value = found.nickname || '';
    ageInput.value = found.age || '';
    startYearInput.value = found.startYearBE || '';
    colorSelect.value = found.colorGroup || '';
    addressNoInput.value = found.addressNo || '';
    mooInput.value = found.moo || '';
    subdistrictInput.value = found.subdistrict || '';
    districtInput.value = found.district || '';
    provinceInput.value = found.province || '';
    noteInput.value = found.note || '';
    photos = Array.isArray(found.photos) ? [...found.photos] : [];
    gps = found.gps ? { ...found.gps } : null;
    modeLabel.textContent = `โหมดแก้ไขข้อมูล: ${found.fullName} (ลำดับที่ ${found.seqNo || '-'})`;
    renderPhotoPreviews();
    renderGpsStatus();
    renderSecondaryActions();
  }

  lookupBtn.addEventListener('click', () => {
    const digits = normalizeDigits(nationalIdInput.value);
    if (digits.length < 5) {
      statusBanner.className = 'alert-banner warning';
      statusBanner.textContent = 'กรุณากรอกเลขบัตรประจำตัวประชาชนอย่างน้อย 5 หลักเพื่อค้นหา';
      statusBanner.hidden = false;
      nationalIdInput.focus();
      return;
    }

    const found = patients.find((p) => {
      const pDigits = p.nationalIdDigits || normalizeDigits(p.nationalId);
      return pDigits === digits || (digits.length >= 8 && pDigits.includes(digits));
    });

    if (found) {
      loadPatientIntoForm(found);
      statusBanner.className = 'alert-banner warning';
      statusBanner.textContent = `⚠️ พบข้อมูลเดิมในระบบแล้ว: "${found.fullName}" — โหลดข้อมูลเข้าสู่โหมดแก้ไขเรียบร้อย`;
      statusBanner.hidden = false;
    } else {
      editingPatient = null;
      modeLabel.textContent = 'ไม่พบเลขบัตรนี้ในระบบ — พร้อมเพิ่มข้อมูลบุคคลใหม่';
      statusBanner.className = 'alert-banner success';
      statusBanner.textContent = '✅ ไม่พบเลขบัตรประชาชนนี้ในระบบเดิม สามารถกรอกข้อมูลเพื่อเพิ่มรายชื่อใหม่ได้ทันที';
      statusBanner.hidden = false;
      renderSecondaryActions();
      fullNameInput.focus();
    }
  });

  // ปุ่มบันทึกข้อมูล (สีน้ำเงินเข้มเหมือนภาพตัวอย่าง)
  const saveBtn = el(
    'button',
    {
      type: 'submit',
      class: 'btn btn-navy btn-full',
    },
    '💾 บันทึกข้อมูล'
  );

  const secondaryBar = el('div', { class: 'form-secondary-actions' });
  function renderSecondaryActions() {
    clearNode(secondaryBar);
    secondaryBar.appendChild(
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-outline btn-sm',
          onClick: () => onResetToNew?.(),
        },
        '🔄 ล้างฟอร์ม (เพิ่มรายใหม่)'
      )
    );
    if (editingPatient) {
      secondaryBar.appendChild(
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-danger-outline btn-sm',
            onClick: () => onDeletePatient?.(editingPatient),
          },
          '🗑️ ลบข้อมูลผู้ป่วยรายนี้'
        )
      );
    }
  }

  const form = el(
    'form',
    {
      class: 'form-sheet-body',
      method: 'post',
      'aria-labelledby': 'patient-form-heading',
    },
    statusBanner,
    el(
      'div',
      { class: 'field' },
      el('label', { for: 'pf-national-id' }, 'เลขบัตรประจำตัวประชาชน', el('span', { class: 'req-star', 'aria-hidden': 'true' }, '*')),
      el('div', { class: 'input-with-action' }, nationalIdInput, lookupBtn),
      el('div', { id: 'pf-national-id-error', class: 'error-msg' }, el('span', { role: 'img', 'aria-label': 'ข้อผิดพลาด' }, '⚠'), ' กรุณากรอกเลขบัตรประจำตัวประชาชน 13 หลักให้ครบถ้วน')
    ),
    el(
      'div',
      { class: 'form-grid-2' },
      el(
        'div',
        { class: 'field' },
        el('label', { for: 'pf-fullname' }, 'ชื่อ - นามสกุล ผู้ป่วย', el('span', { class: 'req-star', 'aria-hidden': 'true' }, '*')),
        fullNameInput,
        el('div', { id: 'pf-fullname-error', class: 'error-msg' }, el('span', { role: 'img', 'aria-label': 'ข้อผิดพลาด' }, '⚠'), ' กรุณากรอกชื่อ - นามสกุล ผู้ป่วย')
      ),
      el('div', { class: 'field' }, el('label', { for: 'pf-nickname' }, 'ชื่อเล่น'), nicknameInput)
    ),
    el(
      'div',
      { class: 'form-grid-2' },
      el('div', { class: 'field' }, el('label', { for: 'pf-age' }, 'อายุ (ปี)'), ageInput),
      el('div', { class: 'field' }, el('label', { for: 'pf-start-year' }, 'ปี พ.ศ. ที่เริ่มเป็น'), startYearInput)
    ),
    el('div', { class: 'field' }, el('label', { for: 'pf-color' }, 'กลุ่มสี'), colorSelect),
    el(
      'div',
      { class: 'form-grid-2' },
      el('div', { class: 'field' }, el('label', { for: 'pf-address-no' }, 'ที่อยู่ (บ้านเลขที่)'), addressNoInput),
      el('div', { class: 'field' }, el('label', { for: 'pf-moo' }, 'หมู่'), mooInput)
    ),
    el(
      'div',
      { class: 'form-grid-3' },
      el('div', { class: 'field' }, el('label', { for: 'pf-subdistrict' }, 'ตำบล'), subdistrictInput, subdistrictDatalist),
      el('div', { class: 'field' }, el('label', { for: 'pf-district' }, 'อำเภอ'), districtInput),
      el('div', { class: 'field' }, el('label', { for: 'pf-province' }, 'จังหวัด'), provinceInput)
    ),
    el('div', { class: 'field' }, el('label', { for: 'pf-note' }, 'หมายเหตุ'), noteInput),
    el(
      'div',
      { class: 'field' },
      el('label', { for: 'pf-photos' }, 'ภาพถ่าย (เลือกได้หลายภาพ)'),
      photoHelpText,
      el('div', { class: 'file-picker-box' }, fileInput),
      photoPreviewGrid
    ),
    el(
      'div',
      { class: 'field gps-section' },
      el('label', {}, 'พิกัดสถานที่'),
      gpsBtn,
      gpsStatusBox
    ),
    saveBtn,
    secondaryBar
  );

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const digits = normalizeDigits(nationalIdInput.value);
    // ยอมรับเลขบัตร 13 หลัก หรือกรณีไม่มีเลขบัตรเดิมในระบบให้แก้ไขได้ถ้ามีข้อมูลอยู่แล้ว
    if (digits.length > 0 && digits.length !== 13) {
      nationalIdInput.setCustomValidity('กรุณากรอกเลขบัตรประจำตัวประชาชนให้ครบ 13 หลัก');
    } else {
      nationalIdInput.setCustomValidity('');
    }

    if (!form.reportValidity()) {
      const firstInvalid = form.querySelector(':invalid');
      firstInvalid?.focus();
      return;
    }

    // ตรวจสอบว่าถ้าเป็นการเพิ่มใหม่ มีเลขบัตรประชาชนซ้ำกับรายชื่อเดิมหรือไม่
    if (!editingPatient && digits.length === 13) {
      const dup = patients.find((p) => (p.nationalIdDigits || normalizeDigits(p.nationalId)) === digits);
      if (dup) {
        statusBanner.className = 'alert-banner error';
        statusBanner.textContent = `พบเลขบัตรประชาชนนี้ซ้ำกับ "${dup.fullName}" ในระบบแล้ว กรุณากดปุ่ม "🔍 ค้นหา" เพื่อโหลดข้อมูลเดิมมาแก้ไข`;
        statusBanner.hidden = false;
        nationalIdInput.focus();
        return;
      }
    }

    saveBtn.disabled = true;
    saveBtn.textContent = '⏳ กำลังบันทึกข้อมูล...';

    try {
      const res = await dataService.savePatient(
        {
          nationalId: nationalIdInput.value,
          fullName: fullNameInput.value,
          nickname: nicknameInput.value,
          age: ageInput.value,
          startYearBE: startYearInput.value,
          colorGroup: colorSelect.value,
          addressNo: addressNoInput.value,
          moo: mooInput.value,
          subdistrict: subdistrictInput.value,
          district: districtInput.value,
          province: provinceInput.value,
          note: noteInput.value,
          photos,
          gps,
        },
        editingPatient
      );
      showToast(
        res.mode === 'update'
          ? `อัปเดตข้อมูล "${res.patient.fullName}" เรียบร้อยแล้ว`
          : `เพิ่มข้อมูล "${res.patient.fullName}" เข้าสู่ระบบเรียบร้อยแล้ว`,
        'success'
      );
      onSaved?.(res);
    } catch (err) {
      statusBanner.className = 'alert-banner error';
      statusBanner.textContent = err?.message || 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
      statusBanner.hidden = false;
      saveBtn.disabled = false;
      saveBtn.textContent = '💾 บันทึกข้อมูล';
    }
  });

  renderPhotoPreviews();
  renderGpsStatus();
  renderSecondaryActions();

  return el(
    'div',
    { class: 'form-sheet-wrap' },
    el(
      'section',
      { class: 'form-sheet' },
      el(
        'header',
        { class: 'form-sheet-header' },
        el('h1', { id: 'patient-form-heading' }, 'ระบบจัดการข้อมูลบุคคลวิกลจริต'),
        modeLabel
      ),
      form
    )
  );
}
