// หน้าตรวจสอบและค้นหาข้อมูลบุคคลวิกลจริต + ตารางรายชื่อทั้งหมด
import {
  el,
  clearNode,
  normalizeDigits,
  getColorMeta,
  formatThaiDateTime,
  BANGPLAMA_SUBDISTRICTS,
} from '../utils/helpers.js';

export function renderSearchView({
  patients,
  isAdmin,
  onSelectDetail,
  onEditPatient,
  onDeletePatient,
  onQuickAdd,
}) {
  let queryText = '';
  let colorFilter = 'ALL';
  let subdistrictFilter = 'ALL';

  const container = el('div', {});
  const statsWrap = el('div', { class: 'stats-grid' });
  const verifyArea = el('div', {});
  const tableTitle = el('h2', { id: 'patients-table-caption' }, 'ทะเบียนรายชื่อบุคคลวิกลจริตทั้งหมด');
  const tbody = el('tbody', {});

  const searchInput = el('input', {
    type: 'search',
    id: 'patient-search-input',
    name: 'q',
    placeholder: 'พิมพ์เลขบัตรประชาชน 13 หลัก หรือ ชื่อ-นามสกุล / ชื่อเล่น เพื่อตรวจสอบ...',
    autocorrect: 'off',
    autocapitalize: 'none',
    spellcheck: 'false',
    enterkeyhint: 'search',
  });

  const colorSelect = el(
    'select',
    { id: 'filter-color', 'aria-label': 'กรองตามกลุ่มสี' },
    el('option', { value: 'ALL' }, 'ทุกกลุ่มสี'),
    el('option', { value: 'แดง' }, '🔴 แดง (อันตรายสูง)'),
    el('option', { value: 'ส้ม' }, '🟠 ส้ม (เฝ้าระวัง)'),
    el('option', { value: 'เหลือง' }, '🟡 เหลือง (ติดตาม)'),
    el('option', { value: 'เขียว' }, '🟢 เขียว (ทั่วไป)'),
    el('option', { value: 'NONE' }, '⚪ ยังไม่ระบุสี')
  );

  const subdistrictSelect = el(
    'select',
    { id: 'filter-subdistrict', 'aria-label': 'กรองตามตำบล' },
    el('option', { value: 'ALL' }, 'ทุกตำบล'),
    ...BANGPLAMA_SUBDISTRICTS.map((sd) => el('option', { value: sd }, sd))
  );

  const clearBtn = el(
    'button',
    {
      type: 'button',
      class: 'btn btn-outline btn-sm',
      onClick: () => {
        queryText = '';
        colorFilter = 'ALL';
        subdistrictFilter = 'ALL';
        searchInput.value = '';
        colorSelect.value = 'ALL';
        subdistrictSelect.value = 'ALL';
        updateDisplay();
      },
    },
    'ล้างตัวกรอง'
  );

  const searchForm = el(
    'search',
    {},
    el(
      'form',
      {
        class: 'search-panel',
        onSubmit: (e) => {
          e.preventDefault();
          queryText = searchInput.value.trim();
          updateDisplay();
        },
      },
      el('h2', {}, '🔍 ตรวจสอบรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า'),
      el(
        'div',
        { class: 'search-row' },
        el(
          'div',
          { class: 'field' },
          el('label', { for: 'patient-search-input' }, 'เลขบัตรประจำตัวประชาชน หรือ ชื่อ-นามสกุล / ชื่อเล่น'),
          searchInput
        ),
        el('button', { type: 'submit', class: 'btn btn-maroon' }, '🔍 ตรวจสอบ')
      ),
      el(
        'div',
        { class: 'filter-row' },
        colorSelect,
        subdistrictSelect,
        clearBtn,
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-navy btn-sm',
            style: 'margin-inline-start: auto;',
            onClick: () => onQuickAdd(''),
          },
          '➕ เพิ่มข้อมูลบุคคลใหม่'
        )
      ),
      verifyArea
    )
  );

  searchInput.addEventListener('input', () => {
    queryText = searchInput.value.trim();
    updateDisplay();
  });

  colorSelect.addEventListener('change', () => {
    colorFilter = colorSelect.value;
    updateDisplay();
  });

  subdistrictSelect.addEventListener('change', () => {
    subdistrictFilter = subdistrictSelect.value;
    updateDisplay();
  });

  function renderStats() {
    clearNode(statsWrap);
    const total = patients.length;
    const redCount = patients.filter((p) => p.colorGroup === 'แดง').length;
    const orangeCount = patients.filter((p) => p.colorGroup === 'ส้ม').length;
    const greenCount = patients.filter((p) => p.colorGroup === 'เขียว').length;

    const cards = [
      { key: 'ALL', label: 'รายชื่อทั้งหมด', val: total, cls: '' },
      { key: 'แดง', label: '🔴 กลุ่มสีแดง (อันตราย)', val: redCount, cls: 'red' },
      { key: 'ส้ม', label: '🟠 กลุ่มสีส้ม (เฝ้าระวัง)', val: orangeCount, cls: 'orange' },
      { key: 'เขียว', label: '🟢 กลุ่มสีเขียว (ทั่วไป)', val: greenCount, cls: 'green' },
    ];

    for (const c of cards) {
      statsWrap.appendChild(
        el(
          'button',
          {
            type: 'button',
            class: `stat-card ${c.cls} ${colorFilter === c.key ? 'active' : ''}`,
            onClick: () => {
              colorFilter = c.key;
              colorSelect.value = c.key;
              updateDisplay();
            },
          },
          el('span', { class: 'stat-label' }, c.label),
          el('span', { class: 'stat-value' }, `${c.val} ราย`)
        )
      );
    }
  }

  function filterPatients() {
    const q = queryText.trim().toLowerCase();
    const qDigits = normalizeDigits(queryText);

    return patients.filter((p) => {
      if (colorFilter === 'NONE') {
        if (p.colorGroup && p.colorGroup.trim()) return false;
      } else if (colorFilter !== 'ALL') {
        if ((p.colorGroup || '').trim() !== colorFilter) return false;
      }

      if (subdistrictFilter !== 'ALL') {
        if (!(p.subdistrict || '').includes(subdistrictFilter.replace(/^ต\./, ''))) return false;
      }

      if (!q) return true;

      const nameMatch = (p.fullName || '').toLowerCase().includes(q);
      const nickMatch = (p.nickname || '').toLowerCase().includes(q);
      const addrMatch = [p.addressNo, p.moo, p.subdistrict, p.note]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(q);
      const idMatch = qDigits.length >= 3 && (p.nationalIdDigits || normalizeDigits(p.nationalId)).includes(qDigits);

      return nameMatch || nickMatch || idMatch || addrMatch;
    });
  }

  function renderVerifyBanner(filtered) {
    clearNode(verifyArea);
    if (!queryText || queryText.length < 2) return;

    if (filtered.length > 0) {
      const box = el(
        'div',
        { class: 'verify-box found', role: 'status' },
        el('h3', {}, `⚠️ พบข้อมูลในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า จำนวน ${filtered.length} รายการ`),
        el(
          'div',
          { class: 'verify-cards' },
          filtered.slice(0, 5).map((p) => {
            const cm = getColorMeta(p.colorGroup);
            const addr = [p.addressNo, p.moo, p.subdistrict, p.district].filter(Boolean).join(' ');
            return el(
              'div',
              { class: 'verify-hit-card' },
              el(
                'div',
                {},
                el('strong', {}, p.fullName || '-'),
                p.nickname ? el('span', { class: 'muted-sub', style: 'display:inline;margin-inline-start:6px;' }, `(${p.nickname})`) : null,
                ' ',
                el('span', { class: `color-badge ${cm.key}` }, cm.label),
                el('div', { class: 'muted-sub' }, `เลขบัตร ปชช.: ${p.nationalId || '-'} | อายุ: ${p.age ? `${p.age} ปี` : '-'} | ที่อยู่: ${addr || '-'}`),
                p.note ? el('div', { style: 'font-size:0.84rem;color:#b91c1c;margin-top:2px;' }, `หมายเหตุ: ${p.note}`) : null,
                isAdmin && p.updatedBy
                  ? el(
                      'div',
                      { style: 'font-size:0.8rem;color:#1e40af;margin-top:2px;' },
                      `ผู้บันทึก/แก้ไขล่าสุด: ${p.updatedBy.fullName} (${p.updatedBy.callsign || '-'}) • ${formatThaiDateTime(p.updatedAt)}`
                    )
                  : null
              ),
              el(
                'div',
                { class: 'table-actions' },
                el('button', { type: 'button', class: 'btn btn-outline btn-sm', onClick: () => onSelectDetail(p) }, 'ดูข้อมูล'),
                el('button', { type: 'button', class: 'btn btn-navy btn-sm', onClick: () => onEditPatient(p) }, 'แก้ไข')
              )
            );
          })
        )
      );
      verifyArea.appendChild(box);
    } else {
      verifyArea.appendChild(
        el(
          'div',
          { class: 'verify-box not-found', role: 'status' },
          el('h3', {}, `✅ ไม่พบ "${queryText}" ในรายชื่อบุคคลวิกลจริต สภ.บางปลาม้า`),
          el(
            'div',
            { style: 'display:flex;flex-wrap:wrap;gap:0.65rem;align-items:center;' },
            el('span', { style: 'font-size:0.9rem;' }, 'หากต้องการบันทึกบุคคลนี้เข้าสู่ระบบฐานข้อมูลโรงพัก สามารถกดปุ่มด้านข้างได้ทันที'),
            el(
              'button',
              {
                type: 'button',
                class: 'btn btn-maroon btn-sm',
                onClick: () => onQuickAdd(queryText),
              },
              '➕ เพิ่มบุคคลนี้เข้าระบบ'
            )
          )
        )
      );
    }
  }

  function updateDisplay() {
    renderStats();
    const filtered = filterPatients();
    renderVerifyBanner(filtered);
    tableTitle.textContent = `ทะเบียนรายชื่อบุคคลวิกลจริต (แสดง ${filtered.length} จาก ${patients.length} รายการ)`;

    clearNode(tbody);
    if (!filtered.length) {
      tbody.appendChild(
        el(
          'tr',
          {},
          el('td', { colspan: isAdmin ? '8' : '7', style: 'text-align:center;padding:2rem;color:#64748b;' }, 'ไม่พบข้อมูลตามเงื่อนไขที่ค้นหา')
        )
      );
      return;
    }

    for (const p of filtered) {
      const cm = getColorMeta(p.colorGroup);
      const addr = [p.addressNo, p.moo, p.subdistrict].filter(Boolean).join(' ');
      const rowCls = cm.key === 'red' ? 'row-red' : cm.key === 'orange' ? 'row-orange' : cm.key === 'green' ? 'row-green' : '';
      const photoCount = (p.photos?.length || 0) + (p.legacyPhotoRef ? 1 : 0);

      const cells = [
        el('td', { 'data-label': 'ลำดับ' }, p.seqNo ? String(p.seqNo) : '-'),
        el(
          'th',
          { scope: 'row' },
          p.fullName || '-',
          p.nickname ? el('span', { class: 'muted-sub' }, `ชื่อเล่น: ${p.nickname}`) : null,
          photoCount > 0 || p.gps
            ? el('span', { class: 'muted-sub' }, `${photoCount > 0 ? `📷 ${photoCount} ` : ''}${p.gps ? '📍 มีพิกัด GPS' : ''}`)
            : null
        ),
        el('td', { 'data-label': 'เลขบัตร ปชช.' }, p.nationalId || '-'),
        el('td', { 'data-label': 'อายุ' }, p.age ? `${p.age} ปี` : '-'),
        el('td', { 'data-label': 'ที่อยู่' }, addr || '-'),
        el('td', { 'data-label': 'กลุ่มสี' }, el('span', { class: `color-badge ${cm.key}` }, cm.short)),
        el('td', { 'data-label': 'หมายเหตุ' }, p.note || '-'),
      ];

      if (isAdmin) {
        const actor = p.updatedBy || p.createdBy;
        cells.push(
          el(
            'td',
            { 'data-label': 'ผู้บันทึกล่าสุด' },
            actor?.fullName || '-',
            actor?.callsign ? el('span', { class: 'muted-sub' }, `${actor.callsign} (${actor.username})`) : null
          )
        );
      }

      cells.push(
        el(
          'td',
          { 'data-label': 'จัดการ' },
          el(
            'div',
            { class: 'table-actions' },
            el('button', { type: 'button', class: 'btn btn-outline btn-sm', onClick: () => onSelectDetail(p) }, 'ดู'),
            el('button', { type: 'button', class: 'btn btn-navy btn-sm', onClick: () => onEditPatient(p) }, 'แก้ไข'),
            el('button', { type: 'button', class: 'btn btn-danger-outline btn-sm', onClick: () => onDeletePatient(p) }, 'ลบ')
          )
        )
      );

      tbody.appendChild(el('tr', { class: rowCls }, ...cells));
    }
  }

  const headCols = [
    el('th', { scope: 'col' }, 'ลำดับ'),
    el('th', { scope: 'col' }, 'ชื่อ-นามสกุล ผู้ป่วย'),
    el('th', { scope: 'col' }, 'เลขบัตรประจำตัวประชาชน'),
    el('th', { scope: 'col' }, 'อายุ'),
    el('th', { scope: 'col' }, 'ที่อยู่'),
    el('th', { scope: 'col' }, 'กลุ่มสี'),
    el('th', { scope: 'col' }, 'หมายเหตุ'),
  ];
  if (isAdmin) {
    headCols.push(el('th', { scope: 'col' }, 'ผู้บันทึกล่าสุด'));
  }
  headCols.push(el('th', { scope: 'col' }, 'จัดการ'));

  const tableCard = el(
    'section',
    { class: 'table-card' },
    el('div', { class: 'table-toolbar' }, tableTitle),
    el(
      'div',
      {
        class: 'table-wrapper',
        tabindex: '0',
        role: 'region',
        'aria-labelledby': 'patients-table-caption',
      },
      el(
        'table',
        { class: 'data-table' },
        el('caption', {}, 'รายชื่อบุคคลวิกลจริต สภ.บางปลาม้า'),
        el('thead', {}, el('tr', {}, ...headCols)),
        tbody
      )
    )
  );

  container.appendChild(statsWrap);
  container.appendChild(searchForm);
  container.appendChild(tableCard);

  updateDisplay();
  return container;
}
