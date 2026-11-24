// Native <dialog> modals ตามแนวทาง modern-web-guidance (`dialog`)
import { el, clearNode, formatThaiDateTime, getColorMeta } from '../utils/helpers.js';

function attachLightDismissFallback(dialog) {
  if ('closedBy' in HTMLDialogElement.prototype) return;
  const outside = (e) => {
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  let pressedOutside = false;
  dialog.addEventListener('pointerdown', (e) => {
    pressedOutside = outside(e);
  });
  dialog.addEventListener('pointerup', (e) => {
    if (pressedOutside && outside(e)) dialog.close('');
  });
}

function isSafeHttpUrl(url) {
  try {
    const u = new URL(url);
    return u.protocol === 'https:' || u.protocol === 'http:';
  } catch {
    return false;
  }
}

let detailDialog = null;
let confirmDialog = null;
let lightboxDialog = null;

function ensureLightboxDialog() {
  if (lightboxDialog) return lightboxDialog;
  lightboxDialog = el('dialog', {
    class: 'lightbox-dialog',
    closedby: 'any',
    'aria-label': 'ดูภาพถ่ายขนาดเต็ม',
  });
  attachLightDismissFallback(lightboxDialog);
  document.body.appendChild(lightboxDialog);
  return lightboxDialog;
}

export function openPhotoLightbox(src, title = 'ภาพถ่าย') {
  const dlg = ensureLightboxDialog();
  clearNode(dlg);
  dlg.appendChild(
    el(
      'div',
      { class: 'dialog-header' },
      el('h1', {}, title),
      el(
        'button',
        {
          type: 'button',
          class: 'dialog-close-btn',
          'aria-label': 'ปิดหน้าต่างภาพถ่าย',
          onClick: () => dlg.close(),
        },
        '✕'
      )
    )
  );
  dlg.appendChild(el('img', { src, alt: title, class: 'lightbox-img' }));
  dlg.showModal();
}

export function openPatientDetailDialog(patient, { isAdmin, onEdit, onDelete }) {
  if (!detailDialog) {
    detailDialog = el('dialog', {
      id: 'patient-detail-dialog',
      closedby: 'any',
      'aria-labelledby': 'patient-detail-title',
    });
    attachLightDismissFallback(detailDialog);
    document.body.appendChild(detailDialog);
  }

  clearNode(detailDialog);
  const colorMeta = getColorMeta(patient.colorGroup);

  const addressParts = [
    patient.addressNo ? `บ้านเลขที่ ${patient.addressNo}` : '',
    patient.moo || '',
    patient.subdistrict || '',
    patient.district || '',
    patient.province || '',
  ].filter(Boolean);

  const items = [
    ['ลำดับในทะเบียน', patient.seqNo ? `#${patient.seqNo}` : '-'],
    ['เลขบัตรประจำตัวประชาชน', patient.nationalId || '-'],
    ['ชื่อ - นามสกุล ผู้ป่วย', patient.fullName || '-'],
    ['ชื่อเล่น', patient.nickname || '-'],
    ['อายุ (ปี)', patient.age ? `${patient.age} ปี` : '-'],
    ['ปี พ.ศ. ที่เริ่มเป็น', patient.startYearBE || '-'],
    ['กลุ่มสีความรุนแรง', colorMeta.label],
    ['วินิจฉัยโรค / รหัส (จากไฟล์เดิม)', [patient.diagnosis, patient.diagnosisCode].filter(Boolean).join(' / ') || '-'],
    ['ที่อยู่ปัจจุบัน', addressParts.join(' ') || '-'],
    ['หมายเหตุ', patient.note || '-'],
  ];

  const bodyChildren = [
    el(
      'div',
      { class: 'detail-grid' },
      items.map(([label, val]) =>
        el(
          'div',
          { class: 'detail-item' },
          el('div', { class: 'detail-label' }, label),
          label === 'กลุ่มสีความรุนแรง'
            ? el('div', { class: 'detail-value' }, el('span', { class: `color-badge ${colorMeta.key}` }, val))
            : el('div', { class: 'detail-value' }, val)
        )
      )
    ),
  ];

  // GPS Section
  if (patient.gps?.lat && patient.gps?.lng) {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      `${patient.gps.lat},${patient.gps.lng}`
    )}`;
    bodyChildren.push(
      el(
        'div',
        { class: 'detail-item' },
        el('div', { class: 'detail-label' }, 'พิกัดสถานที่ (GPS)'),
        el(
          'div',
          { class: 'detail-value' },
          `${Number(patient.gps.lat).toFixed(6)}, ${Number(patient.gps.lng).toFixed(6)} `,
          el(
            'a',
            {
              href: mapsUrl,
              target: '_blank',
              rel: 'noopener noreferrer',
              class: 'btn btn-outline btn-sm',
              style: 'margin-inline-start: 0.5rem;',
            },
            '🗺️ เปิดใน Google Maps'
          )
        )
      )
    );
  }

  // Photos Section
  const photos = Array.isArray(patient.photos) ? patient.photos : [];
  if (photos.length || patient.legacyPhotoRef) {
    const photoNodes = [];
    if (photos.length) {
      photoNodes.push(
        el(
          'div',
          { class: 'photo-preview-grid' },
          photos.map((ph, idx) =>
            el(
              'div',
              { class: 'photo-thumb' },
              el('img', {
                src: ph.dataUrl || ph.url,
                alt: ph.name || `ภาพถ่าย ${idx + 1}`,
                onClick: () => openPhotoLightbox(ph.dataUrl || ph.url, ph.name || `ภาพถ่าย ${idx + 1}`),
              })
            )
          )
        )
      );
    }
    if (patient.legacyPhotoRef) {
      const ref = patient.legacyPhotoRef.trim();
      photoNodes.push(
        el(
          'div',
          { style: 'margin-top: 0.45rem; font-size: 0.85rem;' },
          'อ้างอิงภาพเดิมจากไฟล์โรงพัก: ',
          isSafeHttpUrl(ref)
            ? el('a', { href: ref, target: '_blank', rel: 'noopener noreferrer' }, ref)
            : el('strong', {}, ref)
        )
      );
    }
    bodyChildren.push(
      el(
        'div',
        { class: 'detail-item' },
        el('div', { class: 'detail-label' }, `ภาพถ่าย (${photos.length} ภาพ)`),
        ...photoNodes
      )
    );
  }

  // Admin-only Audit Metadata
  if (isAdmin) {
    const createdBy = patient.createdBy || {};
    const updatedBy = patient.updatedBy || {};
    bodyChildren.push(
      el(
        'div',
        { class: 'audit-box' },
        el('h2', {}, '🛡️ ข้อมูลการลงรายการ (สำหรับแอดมินตรวจสอบ)'),
        el(
          'div',
          {},
          el('strong', {}, 'ผู้บันทึกตั้งต้น: '),
          `${createdBy.fullName || '-'} (${createdBy.callsign || '-'} | บัญชี: ${createdBy.username || '-'})`
        ),
        el('div', {}, el('strong', {}, 'เวลาบันทึกตั้งต้น: '), formatThaiDateTime(patient.createdAt)),
        el(
          'div',
          { style: 'margin-top: 0.35rem;' },
          el('strong', {}, 'ผู้แก้ไขล่าสุด: '),
          `${updatedBy.fullName || '-'} (${updatedBy.callsign || '-'} | บัญชี: ${updatedBy.username || '-'})`
        ),
        el('div', {}, el('strong', {}, 'เวลาแก้ไขล่าสุด: '), formatThaiDateTime(patient.updatedAt))
      )
    );
  }

  detailDialog.appendChild(
    el(
      'div',
      { class: 'dialog-header' },
      el('h1', { id: 'patient-detail-title' }, `ข้อมูลบุคคล: ${patient.fullName || 'ไม่ระบุชื่อ'}`),
      el(
        'button',
        {
          type: 'button',
          class: 'dialog-close-btn',
          'aria-label': 'ปิดหน้าต่าง',
          onClick: () => detailDialog.close(),
        },
        '✕'
      )
    )
  );
  detailDialog.appendChild(el('div', { class: 'dialog-body' }, ...bodyChildren));
  detailDialog.appendChild(
    el(
      'div',
      { class: 'dialog-footer' },
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-danger-outline',
          onClick: () => {
            detailDialog.close();
            onDelete?.(patient);
          },
        },
        '🗑️ ลบข้อมูล'
      ),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-navy',
          onClick: () => {
            detailDialog.close();
            onEdit?.(patient);
          },
        },
        '✏️ แก้ไขข้อมูล'
      ),
      el(
        'button',
        {
          type: 'button',
          class: 'btn btn-outline',
          onClick: () => detailDialog.close(),
        },
        'ปิด'
      )
    )
  );

  detailDialog.showModal();
}

export function openConfirmDialog({ title, message, confirmLabel = 'ยืนยันลบข้อมูล', danger = true }) {
  return new Promise((resolve) => {
    if (!confirmDialog) {
      confirmDialog = el('dialog', {
        id: 'confirm-action-dialog',
        class: 'confirm-dialog',
        'aria-labelledby': 'confirm-dialog-title',
      });
      document.body.appendChild(confirmDialog);
    }

    clearNode(confirmDialog);

    const cancelBtn = el(
      'button',
      {
        type: 'submit',
        value: 'cancel',
        class: 'btn btn-outline',
        autofocus: true,
      },
      'ยกเลิก'
    );
    const okBtn = el(
      'button',
      {
        type: 'submit',
        value: 'confirm',
        class: danger ? 'btn btn-danger' : 'btn btn-navy',
      },
      confirmLabel
    );

    const form = el(
      'form',
      { method: 'dialog' },
      el(
        'div',
        { class: 'dialog-header' },
        el('h1', { id: 'confirm-dialog-title' }, title)
      ),
      el('div', { class: 'dialog-body' }, el('p', { style: 'margin:0;' }, message)),
      el('div', { class: 'dialog-footer' }, cancelBtn, okBtn)
    );

    confirmDialog.appendChild(form);

    const onClose = () => {
      const result = confirmDialog.returnValue === 'confirm';
      // รีเซ็ต returnValue ทุกครั้งตามแนวทาง dialog guide
      confirmDialog.returnValue = '';
      confirmDialog.removeEventListener('close', onClose);
      resolve(result);
    };
    confirmDialog.addEventListener('close', onClose);
    confirmDialog.showModal();
  });
}
