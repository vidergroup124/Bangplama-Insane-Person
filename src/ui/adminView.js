// หน้าผู้ดูแลระบบ (Admin): ตรวจสอบประวัติการลงข้อมูลตำรวจ + จัดการรายชื่อตำรวจ สภ.บางปลาม้า
import { el, clearNode, formatThaiDateTime, formatPhone, normalizePhone } from '../utils/helpers.js';
import { dataService } from '../services/dataService.js';
import { showToast } from './toast.js';

const ACTION_LABELS = {
  CREATE: 'เพิ่มข้อมูล',
  UPDATE: 'แก้ไขข้อมูล',
  DELETE: 'ลบข้อมูล',
  SEED_IMPORT: 'นำเข้าตั้งต้น',
  OFFICER_UPDATE: 'จัดการตำรวจ',
};

export function renderAdminView({ logs, officers, patients }) {
  let subTab = 'logs';
  let logFilterAction = 'ALL';
  let logSearch = '';
  let officerSearch = '';

  const root = el('div', {});
  const body = el('div', {});

  function renderSubTabs() {
    return el(
      'div',
      { class: 'admin-subtabs' },
      el(
        'button',
        {
          type: 'button',
          class: `btn ${subTab === 'logs' ? 'btn-maroon' : 'btn-outline'}`,
          onClick: () => {
            subTab = 'logs';
            renderContent();
          },
        },
        `📋 ประวัติการลงข้อมูลตำรวจ (${logs.length})`
      ),
      el(
        'button',
        {
          type: 'button',
          class: `btn ${subTab === 'officers' ? 'btn-maroon' : 'btn-outline'}`,
          onClick: () => {
            subTab = 'officers';
            renderContent();
          },
        },
        `👮 รายชื่อตำรวจที่มีสิทธิ์เข้าใช้ (${officers.length} นาย)`
      ),
      el(
        'button',
        {
          type: 'button',
          class: `btn ${subTab === 'byOfficer' ? 'btn-maroon' : 'btn-outline'}`,
          onClick: () => {
            subTab = 'byOfficer';
            renderContent();
          },
        },
        '📊 สรุปผู้ลงข้อมูลแต่ละรายชื่อ'
      )
    );
  }

  function renderLogsSection() {
    const searchInput = el('input', {
      type: 'search',
      placeholder: 'ค้นหาชื่อตำรวจ, นามเรียกขาน, เบอร์โทร, หรือชื่อผู้ป่วย...',
      value: logSearch,
    });
    const actionSelect = el(
      'select',
      { 'aria-label': 'กรองตามประเภทการกระทำ' },
      el('option', { value: 'ALL' }, 'ทุกการกระทำ'),
      el('option', { value: 'CREATE' }, 'เพิ่มข้อมูล'),
      el('option', { value: 'UPDATE' }, 'แก้ไขข้อมูล'),
      el('option', { value: 'DELETE' }, 'ลบข้อมูล'),
      el('option', { value: 'OFFICER_UPDATE' }, 'จัดการรายชื่อตำรวจ')
    );
    actionSelect.value = logFilterAction;

    const tbody = el('tbody', {});

    function updateLogsTable() {
      clearNode(tbody);
      const q = logSearch.trim().toLowerCase();
      const filtered = logs.filter((l) => {
        if (logFilterAction !== 'ALL' && l.action !== logFilterAction) return false;
        if (!q) return true;
        const hay = [
          l.actor?.fullName,
          l.actor?.callsign,
          l.actor?.username,
          l.targetName,
          l.targetNationalId,
          l.summary,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      });

      if (!filtered.length) {
        tbody.appendChild(
          el(
            'tr',
            {},
            el(
              'td',
              { colspan: '5', style: 'text-align:center;padding:2rem;color:#64748b;' },
              'ยังไม่มีประวัติการเพิ่ม/แก้ไข/ลบข้อมูลในระบบ'
            )
          )
        );
        return;
      }

      for (const item of filtered) {
        const actor = item.actor || {};
        tbody.appendChild(
          el(
            'tr',
            {},
            el('td', { 'data-label': 'วัน-เวลา' }, formatThaiDateTime(item.timestamp)),
            el(
              'th',
              { scope: 'row' },
              actor.fullName || '-',
              el(
                'span',
                { class: 'muted-sub' },
                `${actor.callsign || '-'} | บัญชี: ${actor.username || '-'}`
              )
            ),
            el(
              'td',
              { 'data-label': 'การดำเนินการ' },
              el('span', { class: `action-badge ${item.action}` }, ACTION_LABELS[item.action] || item.action)
            ),
            el(
              'td',
              { 'data-label': 'บุคคลที่ถูกจัดการ' },
              el('strong', {}, item.targetName || '-'),
              el('span', { class: 'muted-sub' }, `เลขบัตร/อ้างอิง: ${item.targetNationalId || '-'}`)
            ),
            el('td', { 'data-label': 'รายละเอียด' }, item.summary || '-')
          )
        );
      }
    }

    searchInput.addEventListener('input', () => {
      logSearch = searchInput.value;
      updateLogsTable();
    });
    actionSelect.addEventListener('change', () => {
      logFilterAction = actionSelect.value;
      updateLogsTable();
    });

    updateLogsTable();

    const syncBtn =
      dataService.getMode() === 'firebase'
        ? el(
            'button',
            {
              type: 'button',
              class: 'btn btn-outline btn-sm',
              onClick: async (e) => {
                const btn = e.currentTarget;
                btn.disabled = true;
                btn.textContent = '⏳ กำลังซิงค์ข้อมูลตั้งต้น...';
                try {
                  const res = await dataService.ensureFirebaseSeededIfEmpty(true);
                  showToast(
                    `ซิงค์ข้อมูลตั้งต้นสำเร็จ (ตำรวจ ${res.officersSeeded} นาย, รายชื่อ ${res.patientsSeeded} รายการ)`,
                    'success'
                  );
                } catch (err) {
                  showToast(err?.message || 'ซิงค์ข้อมูลไม่สำเร็จ', 'error');
                } finally {
                  btn.disabled = false;
                  btn.textContent = '☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase';
                }
              },
            },
            '☁️ ซิงค์ข้อมูลตั้งต้นขึ้น Firebase'
          )
        : null;

    return el(
      'div',
      {},
      el(
        'div',
        { class: 'search-panel' },
        el(
          'div',
          { style: 'display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.75rem;' },
          el('h2', { style: 'margin:0;' }, '🛡️ ตรวจสอบประวัติการลงข้อมูลของเจ้าหน้าที่ตำรวจ'),
          syncBtn
        ),
        el('div', { class: 'search-row' }, searchInput, actionSelect)
      ),
      el(
        'section',
        { class: 'table-card' },
        el('div', { class: 'table-toolbar' }, el('h2', { id: 'audit-table-caption' }, 'บันทึกกิจกรรมล่าสุด (Audit Log)')),
        el(
          'div',
          { class: 'table-wrapper', tabindex: '0', role: 'region', 'aria-labelledby': 'audit-table-caption' },
          el(
            'table',
            { class: 'data-table' },
            el('caption', {}, 'ประวัติการบันทึก แก้ไข และลบข้อมูลบุคคลวิกลจริต'),
            el(
              'thead',
              {},
              el(
                'tr',
                {},
                el('th', { scope: 'col' }, 'วัน-เวลา'),
                el('th', { scope: 'col' }, 'เจ้าหน้าที่ตำรวจผู้ดำเนินการ'),
                el('th', { scope: 'col' }, 'การกระทำ'),
                el('th', { scope: 'col' }, 'ข้อมูลบุคคล'),
                el('th', { scope: 'col' }, 'รายละเอียดการเปลี่ยนแปลง')
              )
            ),
            tbody
          )
        )
      )
    );
  }

  function renderByOfficerSection() {
    // แสดงรายชื่อบุคคลทั้งหมดพร้อมผู้ลงข้อมูล/แก้ไขล่าสุด (เน้นรายการที่ตำรวจลงหรือแก้ไขจริง)
    const modified = patients.filter(
      (p) => p.updatedBy?.role && p.updatedBy.role !== 'system'
    );

    const tbody = el('tbody', {});
    const list = modified.length ? modified : patients.slice(0, 30);

    for (const p of list) {
      const c = p.createdBy || {};
      const u = p.updatedBy || {};
      tbody.appendChild(
        el(
          'tr',
          {},
          el('th', { scope: 'row' }, p.fullName || '-', el('span', { class: 'muted-sub' }, p.nationalId || '-')),
          el('td', { 'data-label': 'ผู้สร้างรายการ' }, c.fullName || '-', el('span', { class: 'muted-sub' }, `${c.callsign || '-'} (${c.username || '-'})`)),
          el('td', { 'data-label': 'ผู้แก้ไขล่าสุด' }, u.fullName || '-', el('span', { class: 'muted-sub' }, `${u.callsign || '-'} (${u.username || '-'})`)),
          el('td', { 'data-label': 'อัปเดตล่าสุดเมื่อ' }, formatThaiDateTime(p.updatedAt))
        )
      );
    }

    return el(
      'section',
      { class: 'table-card' },
      el(
        'div',
        { class: 'table-toolbar' },
        el(
          'h2',
          { id: 'by-officer-caption' },
          modified.length
            ? `รายการที่เจ้าหน้าที่ตำรวจเพิ่ม/ปรับปรุงข้อมูล (${modified.length} รายการ)`
            : 'ยังไม่มีรายการที่แก้ไขเพิ่มเติมจากไฟล์ตั้งต้น (แสดงตัวอย่าง 30 รายการแรก)'
        )
      ),
      el(
        'div',
        { class: 'table-wrapper', tabindex: '0', role: 'region', 'aria-labelledby': 'by-officer-caption' },
        el(
          'table',
          { class: 'data-table' },
          el('caption', {}, 'สรุปผู้ลงข้อมูลและผู้แก้ไขล่าสุดของบุคคลวิกลจริต'),
          el(
            'thead',
            {},
            el(
              'tr',
              {},
              el('th', { scope: 'col' }, 'ผู้ป่วย'),
              el('th', { scope: 'col' }, 'ผู้บันทึกตั้งต้น'),
              el('th', { scope: 'col' }, 'ผู้แก้ไขล่าสุด'),
              el('th', { scope: 'col' }, 'เวลาล่าสุด')
            )
          ),
          tbody
        )
      )
    );
  }

  function renderOfficersSection() {
    const nameInput = el('input', { type: 'text', required: true, placeholder: 'เช่น ส.ต.ท.สมชาย ใจดี' });
    const phoneInput = el('input', { type: 'text', required: true, inputmode: 'numeric', placeholder: '0812345678' });
    const posInput = el('input', { type: 'text', placeholder: 'เช่น ผบ.หมู่(ป.)ฯ' });
    const callsignInput = el('input', { type: 'text', placeholder: 'เช่น ปลาม้า 2135' });
    const catSelect = el(
      'select',
      {},
      el('option', { value: 'ชั้นสัญญาบัตร' }, 'ชั้นสัญญาบัตร'),
      el('option', { value: 'ชั้นประทวน' }, 'ชั้นประทวน'),
      el('option', { value: 'ช่วยราชการ คฝ.' }, 'ช่วยราชการ คฝ.')
    );
    catSelect.value = 'ชั้นประทวน';

    const addOfficerForm = el(
      'form',
      {
        class: 'officer-form-card',
        onSubmit: async (e) => {
          e.preventDefault();
          try {
            await dataService.saveOfficer({
              fullName: nameInput.value,
              phone: phoneInput.value,
              position: posInput.value,
              callsign: callsignInput.value,
              category: catSelect.value,
              active: true,
            });
            showToast(`บันทึกบัญชีตำรวจ "${nameInput.value}" เรียบร้อยแล้ว`, 'success');
            nameInput.value = '';
            phoneInput.value = '';
            posInput.value = '';
            callsignInput.value = '';
          } catch (err) {
            showToast(err?.message || 'บันทึกไม่สำเร็จ', 'error');
          }
        },
      },
      el('h2', { style: 'margin:0 0 0.75rem;font-size:1rem;' }, '➕ เพิ่ม / อัปเดตข้าราชการตำรวจที่มีสิทธิ์เข้าสู่ระบบ'),
      el(
        'div',
        { class: 'form-grid-3', style: 'margin-bottom:0.75rem;' },
        el('div', { class: 'field' }, el('label', {}, 'ยศ ชื่อ-สกุล *'), nameInput),
        el('div', { class: 'field' }, el('label', {}, 'เบอร์โทรศัพท์ (Username) *'), phoneInput),
        el('div', { class: 'field' }, el('label', {}, 'นามเรียกขาน'), callsignInput)
      ),
      el(
        'div',
        { class: 'form-grid-3', style: 'align-items:end;' },
        el('div', { class: 'field' }, el('label', {}, 'ตำแหน่ง'), posInput),
        el('div', { class: 'field' }, el('label', {}, 'สังกัด/ระดับ'), catSelect),
        el('button', { type: 'submit', class: 'btn btn-navy' }, '💾 บันทึกรายชื่อตำรวจ')
      )
    );

    const searchInput = el('input', {
      type: 'search',
      placeholder: 'ค้นหาชื่อตำรวจ นามเรียกขาน หรือเบอร์โทรศัพท์...',
      value: officerSearch,
      style: 'max-width:360px;',
    });

    const tbody = el('tbody', {});

    function updateOfficersTable() {
      clearNode(tbody);
      const q = officerSearch.trim().toLowerCase();
      const qDigits = normalizePhone(officerSearch);
      const filtered = officers.filter((o) => {
        if (!q) return true;
        return (
          (o.fullName || '').toLowerCase().includes(q) ||
          (o.callsign || '').toLowerCase().includes(q) ||
          (o.position || '').toLowerCase().includes(q) ||
          (qDigits && normalizePhone(o.phone).includes(qDigits))
        );
      });

      for (const o of filtered) {
        const isActive = o.active !== false;
        tbody.appendChild(
          el(
            'tr',
            {},
            el('th', { scope: 'row' }, o.fullName, el('span', { class: 'muted-sub' }, `${o.position || '-'} (${o.category || '-'})`)),
            el('td', { 'data-label': 'เบอร์โทร (Username)' }, o.phoneDisplay || formatPhone(o.phone)),
            el('td', { 'data-label': 'นามเรียกขาน' }, o.callsign || '-'),
            el('td', { 'data-label': 'หมายเหตุ' }, o.note || '-'),
            el(
              'td',
              { 'data-label': 'สถานะ' },
              el('span', { class: `color-badge ${isActive ? 'green' : 'red'}` }, isActive ? 'ใช้งานได้' : 'ระงับสิทธิ์')
            ),
            el(
              'td',
              { 'data-label': 'จัดการ' },
              el(
                'button',
                {
                  type: 'button',
                  class: `btn btn-sm ${isActive ? 'btn-danger-outline' : 'btn-outline'}`,
                  onClick: async () => {
                    try {
                      await dataService.saveOfficer({ ...o, active: !isActive });
                      showToast(`${!isActive ? 'เปิดสิทธิ์' : 'ระงับสิทธิ์'} ${o.fullName} แล้ว`, 'success');
                    } catch (err) {
                      showToast(err?.message || 'ดำเนินการไม่สำเร็จ', 'error');
                    }
                  },
                },
                isActive ? 'ระงับสิทธิ์' : 'เปิดสิทธิ์'
              )
            )
          )
        );
      }
    }

    searchInput.addEventListener('input', () => {
      officerSearch = searchInput.value;
      updateOfficersTable();
    });
    updateOfficersTable();

    return el(
      'div',
      {},
      addOfficerForm,
      el(
        'section',
        { class: 'table-card' },
        el(
          'div',
          { class: 'table-toolbar' },
          el('h2', { id: 'officers-table-caption' }, `บัญชีรายชื่อตำรวจ สภ.บางปลาม้า (${officers.length} นาย)`),
          searchInput
        ),
        el(
          'div',
          { class: 'table-wrapper', tabindex: '0', role: 'region', 'aria-labelledby': 'officers-table-caption' },
          el(
            'table',
            { class: 'data-table' },
            el('caption', {}, 'รายชื่อข้าราชการตำรวจ สภ.บางปลาม้า'),
            el(
              'thead',
              {},
              el(
                'tr',
                {},
                el('th', { scope: 'col' }, 'ยศ ชื่อ-สกุล'),
                el('th', { scope: 'col' }, 'เบอร์โทรศัพท์'),
                el('th', { scope: 'col' }, 'นามเรียกขาน'),
                el('th', { scope: 'col' }, 'หมายเหตุ'),
                el('th', { scope: 'col' }, 'สถานะ'),
                el('th', { scope: 'col' }, 'จัดการ')
              )
            ),
            tbody
          )
        )
      )
    );
  }

  function renderContent() {
    clearNode(root);
    root.appendChild(renderSubTabs());
    clearNode(body);
    if (subTab === 'logs') {
      body.appendChild(renderLogsSection());
    } else if (subTab === 'officers') {
      body.appendChild(renderOfficersSection());
    } else {
      body.appendChild(renderByOfficerSection());
    }
    root.appendChild(body);
  }

  renderContent();
  return root;
}
