import './styles/main.css';
import { el, clearNode } from './utils/helpers.js';
import { dataService } from './services/dataService.js';
import { renderLoginView } from './ui/loginView.js';
import { renderSearchView } from './ui/searchView.js';
import { renderPatientFormView } from './ui/patientFormView.js';
import { renderAdminView } from './ui/adminView.js';
import { openPatientDetailDialog, openConfirmDialog } from './ui/dialogs.js';
import { showToast } from './ui/toast.js';

// =========================================================================
// ARIA + :user-invalid Validation Sync (ตามแนวทาง validate-input-after-interaction)
// =========================================================================
function initValidationAccessibility() {
  const supportsUserInvalid = CSS.supports('selector(:user-invalid)');
  const dirtyState = new WeakMap();

  const linkError = (input, shown) => {
    const errorId = input.dataset?.error;
    if (!errorId) return;
    const ids = (input.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .filter((id) => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) input.setAttribute('aria-describedby', ids.join(' '));
    else input.removeAttribute('aria-describedby');
  };

  const syncControl = (input) => {
    if (!input?.matches?.('input, select, textarea')) return;
    const isInvalid = supportsUserInvalid
      ? input.matches(':user-invalid')
      : input.classList.contains('user-invalid-fallback');
    input.setAttribute('aria-invalid', isInvalid ? 'true' : 'false');
    linkError(input, isInvalid);
  };

  const updateFallback = (input) => {
    if (supportsUserInvalid || !input?.validity) return;
    const valid = input.validity.valid;
    input.classList.toggle('user-invalid-fallback', !valid);
    input.classList.toggle('user-valid-fallback', valid);
    syncControl(input);
  };

  document.addEventListener(
    'blur',
    (e) => {
      const target = e.target;
      if (!target?.matches?.('input, select, textarea')) return;
      if (!supportsUserInvalid) {
        const st = dirtyState.get(target) || { interacted: false, blurred: false };
        st.blurred = true;
        dirtyState.set(target, st);
        if (st.interacted) updateFallback(target);
      } else {
        syncControl(target);
      }
    },
    true
  );

  document.addEventListener('input', (e) => {
    const target = e.target;
    if (!target?.matches?.('input, select, textarea')) return;
    if (!supportsUserInvalid) {
      const st = dirtyState.get(target) || { interacted: false, blurred: false };
      st.interacted = true;
      dirtyState.set(target, st);
      if (st.blurred) updateFallback(target);
    } else if (target.hasAttribute('aria-invalid')) {
      syncControl(target);
    }
  });

  document.addEventListener(
    'invalid',
    (e) => {
      const target = e.target;
      if (!supportsUserInvalid) {
        dirtyState.set(target, { interacted: true, blurred: true });
        updateFallback(target);
      } else {
        syncControl(target);
      }
    },
    true
  );
}

// =========================================================================
// Main App State & Controller
// =========================================================================
const appRoot = document.getElementById('app');

const state = {
  user: null,
  authReady: false,
  activeTab: 'search', // 'search' | 'form' | 'admin'
  patients: [],
  officers: [],
  logs: [],
  editingPatient: null,
  prefillQuery: '',
  unsubscribers: [],
};

function cleanupSubscriptions() {
  for (const unsub of state.unsubscribers) {
    try {
      unsub?.();
    } catch {
      // ignore
    }
  }
  state.unsubscribers = [];
}

function startSubscriptions() {
  cleanupSubscriptions();
  if (!state.user) return;

  const unsubPatients = dataService.subscribePatients(
    (list) => {
      state.patients = list;
      if (state.activeTab !== 'form') {
        renderApp();
      }
    },
    () => {
      showToast('ไม่สามารถโหลดข้อมูลจาก Firestore ได้ กรุณาตรวจสอบสิทธิ์การเชื่อมต่อ', 'error');
    }
  );
  state.unsubscribers.push(unsubPatients);

  if (state.user.role === 'admin') {
    const unsubLogs = dataService.subscribeAuditLogs((list) => {
      state.logs = list;
      if (state.activeTab === 'admin') renderApp();
    });
    const unsubOfficers = dataService.subscribeOfficers((list) => {
      state.officers = list;
      if (state.activeTab === 'admin') renderApp();
    });
    state.unsubscribers.push(unsubLogs, unsubOfficers);
  }
}

async function handleDeletePatient(patient) {
  const confirmed = await openConfirmDialog({
    title: 'ยืนยันการลบข้อมูลบุคคลวิกลจริต',
    message: `ต้องการลบข้อมูลของ "${patient.fullName || 'ไม่ระบุชื่อ'}" (เลขบัตร: ${patient.nationalId || '-'}) ออกจากระบบใช่หรือไม่? การลบจะถูกบันทึกไว้ในประวัติผู้ดูแลระบบ`,
    confirmLabel: 'ยืนยันลบข้อมูล',
    danger: true,
  });

  if (!confirmed) return;

  try {
    await dataService.deletePatient(patient);
    if (state.editingPatient?.id === patient.id) {
      state.editingPatient = null;
      state.activeTab = 'search';
    }
    showToast(`ลบข้อมูล "${patient.fullName}" เรียบร้อยแล้ว`, 'success');
    renderApp();
  } catch (err) {
    showToast(err?.message || 'ลบข้อมูลไม่สำเร็จ', 'error');
  }
}

function renderApp() {
  clearNode(appRoot);

  if (!state.authReady) {
    appRoot.appendChild(
      el(
        'main',
        { class: 'login-page' },
        el('div', { style: 'text-align:center;color:#475569;font-weight:600;' }, '⏳ กำลังโหลดระบบ สภ.บางปลาม้า...')
      )
    );
    return;
  }

  if (!state.user) {
    appRoot.appendChild(
      renderLoginView({
        onLoginSuccess: (user) => {
          state.user = user;
          state.activeTab = 'search';
          startSubscriptions();
          renderApp();
          showToast(`ยินดีต้อนรับ ${user.fullName}`, 'success');
        },
      })
    );
    return;
  }

  const isAdmin = state.user.role === 'admin';
  const mode = dataService.getMode();

  // Header
  const header = el(
    'header',
    { class: 'app-header' },
    el(
      'div',
      { class: 'app-header-inner' },
      el(
        'div',
        { class: 'brand-block' },
        el('div', { class: 'brand-icon', 'aria-hidden': 'true' }, '🛡️'),
        el(
          'div',
          {},
          el('h1', { class: 'brand-title' }, 'ระบบข้อมูลบุคคลวิกลจริต สภ.บางปลาม้า'),
          el('p', { class: 'brand-subtitle' }, 'สถานีตำรวจภูธรบางปลาม้า จังหวัดสุพรรณบุรี')
        )
      ),
      el(
        'div',
        { class: 'user-panel' },
        el(
          'span',
          { class: `mode-pill ${mode}` },
          mode === 'firebase' ? '🔥 Firebase Cloud' : '🧪 โหมดทดสอบในเครื่อง'
        ),
        el(
          'div',
          { class: 'user-chip' },
          isAdmin ? el('span', { class: 'role-tag' }, 'ADMIN') : null,
          el(
            'span',
            {},
            isAdmin
              ? `${state.user.fullName} (${state.user.username})`
              : `${state.user.fullName} (${state.user.callsign})`
          )
        ),
        el(
          'button',
          {
            type: 'button',
            class: 'btn btn-logout',
            onClick: async () => {
              cleanupSubscriptions();
              await dataService.logout();
              state.user = null;
              state.patients = [];
              state.logs = [];
              state.officers = [];
              state.editingPatient = null;
              renderApp();
              showToast('ออกจากระบบเรียบร้อยแล้ว', 'info');
            },
          },
          'ออกจากระบบ'
        )
      )
    )
  );

  // Navigation Tabs
  const tabs = [
    { id: 'search', label: `🔍 ตรวจสอบรายชื่อ (${state.patients.length})` },
    {
      id: 'form',
      label: state.editingPatient ? '✏️ แก้ไขข้อมูลบุคคล' : '➕ เพิ่ม / แก้ไขข้อมูล',
    },
  ];
  if (isAdmin) {
    tabs.push({ id: 'admin', label: '🛡️ แผงควบคุมแอดมิน & ประวัติการลงข้อมูล' });
  }

  const nav = el(
    'nav',
    { class: 'app-nav', 'aria-label': 'เมนูหลัก' },
    el(
      'div',
      { class: 'app-nav-inner' },
      tabs.map((t) =>
        el(
          'button',
          {
            type: 'button',
            class: 'nav-tab',
            'aria-current': state.activeTab === t.id ? 'page' : null,
            onClick: () => {
              if (t.id === 'form' && state.activeTab !== 'form') {
                // keep editingPatient only when explicitly triggered
              } else if (t.id !== 'form') {
                state.editingPatient = null;
                state.prefillQuery = '';
              }
              state.activeTab = t.id;
              renderApp();
            },
          },
          t.label
        )
      )
    )
  );

  // Demo Mode Notice Strip
  const demoStrip =
    mode === 'demo'
      ? el(
          'div',
          { class: 'demo-strip' },
          el(
            'div',
            { class: 'alert-banner warning' },
            '⚠️ ขณะนี้ระบบทำงานในโหมดทดสอบในเครื่อง (Local Storage) — เมื่อเชื่อมต่อ Firebase Project ในไฟล์ .env และ Deploy แล้ว ข้อมูลทั้งหมดจะซิงค์ออนไลน์ผ่าน Cloud Firestore อัตโนมัติ'
          )
        )
      : null;

  // Main Content
  let viewNode;
  if (state.activeTab === 'search') {
    viewNode = renderSearchView({
      patients: state.patients,
      isAdmin,
      onSelectDetail: (p) => {
        openPatientDetailDialog(p, {
          isAdmin,
          onEdit: (target) => {
            state.editingPatient = target;
            state.prefillQuery = '';
            state.activeTab = 'form';
            renderApp();
          },
          onDelete: handleDeletePatient,
        });
      },
      onEditPatient: (target) => {
        state.editingPatient = target;
        state.prefillQuery = '';
        state.activeTab = 'form';
        renderApp();
      },
      onDeletePatient: handleDeletePatient,
      onQuickAdd: (prefill) => {
        state.editingPatient = null;
        state.prefillQuery = prefill || '';
        state.activeTab = 'form';
        renderApp();
      },
    });
  } else if (state.activeTab === 'form') {
    viewNode = renderPatientFormView({
      patients: state.patients,
      initialPatient: state.editingPatient,
      prefillQuery: state.prefillQuery,
      onSaved: () => {
        state.editingPatient = null;
        state.prefillQuery = '';
        state.activeTab = 'search';
        renderApp();
      },
      onDeletePatient: handleDeletePatient,
      onResetToNew: () => {
        state.editingPatient = null;
        state.prefillQuery = '';
        renderApp();
      },
    });
  } else if (state.activeTab === 'admin' && isAdmin) {
    viewNode = renderAdminView({
      logs: state.logs,
      officers: state.officers,
      patients: state.patients,
    });
  }

  appRoot.appendChild(header);
  appRoot.appendChild(nav);
  if (demoStrip) appRoot.appendChild(demoStrip);
  appRoot.appendChild(el('main', { class: 'app-main' }, viewNode));
}

initValidationAccessibility();
renderApp();

dataService.initAuthListener((user) => {
  state.user = user;
  state.authReady = true;
  if (user) {
    startSubscriptions();
  } else {
    cleanupSubscriptions();
  }
  renderApp();
});
