// ระบบแจ้งเตือน Toast ด้วย Popover API (popover="manual") พร้อม fallback สำหรับเบราว์เซอร์รุ่นเก่า
import { el } from '../utils/helpers.js';

let toastCounter = 0;

function announceForScreenReaders(message) {
  if (typeof document.ariaNotify === 'function') {
    try {
      document.ariaNotify(message);
      return;
    } catch {
      // fallback to live region below
    }
  }
  const announcer = document.getElementById('sr-announcer');
  if (announcer) {
    announcer.textContent = '';
    setTimeout(() => {
      announcer.textContent = message;
    }, 30);
  }
}

export function showToast(message, type = 'info', durationMs = 4500) {
  // ไม่แสดง toast ทับขณะมี modal dialog เปิดอยู่
  if (document.querySelector('dialog:modal')) {
    announceForScreenReaders(message);
    return;
  }

  const region = document.getElementById('toast-region');
  if (!region) return;

  const id = `toast-${++toastCounter}`;
  const closeBtn = el(
    'button',
    {
      type: 'button',
      class: 'toast-close',
      'aria-label': 'ปิดการแจ้งเตือน',
      popovertarget: id,
      popovertargetaction: 'hide',
    },
    '✕'
  );

  const toast = el(
    'div',
    {
      id,
      class: `toast-item ${type}`,
    },
    el('span', { class: 'toast-text' }, message),
    closeBtn
  );
  toast.setAttribute('popover', 'manual');

  region.appendChild(toast);

  const supportsPopover = Object.hasOwn(HTMLElement.prototype, 'popover') && typeof toast.showPopover === 'function';
  if (supportsPopover) {
    toast.showPopover();
  } else {
    toast.classList.add(':popover-open');
    closeBtn.addEventListener('click', () => {
      toast.remove();
    });
  }

  announceForScreenReaders(message);

  let timer = null;
  const dismiss = () => {
    if (toast.matches(':focus-within')) {
      timer = setTimeout(dismiss, 2000);
      return;
    }
    if (supportsPopover && toast.isConnected) {
      try {
        toast.hidePopover();
      } catch {
        // ignore if already hidden
      }
    }
    toast.remove();
  };

  toast.addEventListener('toggle', (e) => {
    if (e.newState === 'closed') {
      clearTimeout(timer);
      toast.remove();
    }
  });

  if (durationMs > 0) {
    timer = setTimeout(dismiss, durationMs);
  }
}
