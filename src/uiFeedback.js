/* CodeDuo — uiFeedback.js: Sistem Toast & Dialog Konfirmasi kustom pengganti alert()/confirm().
 * Ringan, tanpa dependensi luar, aman di Node.js, dan ramah PWA mobile. */
'use strict';

let nextToastId = 1;
let toasts = [];
let confirmState = null; // { title, message, confirmLabel, cancelLabel, danger, resolve }
const listeners = new Set();

function emit() {
  listeners.forEach((fn) => {
    try { fn(); } catch (_) {}
  });
}

export function subscribeUiFeedback(fn) {
  listeners.add(fn);
  return () => { listeners.delete(fn); };
}

export function getUiFeedbackState() {
  return { toasts, confirm: confirmState };
}

/**
 * Menampilkan notifikasi toast singkat di layar.
 * @param {string} message
 * @param {{ type?: 'info'|'success'|'warn'|'error', duration?: number }} [opts]
 */
export function showToast(message, opts = {}) {
  if (!message) return null;
  const id = nextToastId++;
  const type = opts.type || 'info';
  const duration = Number.isFinite(opts.duration) ? opts.duration : 4200;

  toasts = [...toasts.slice(-3), { id, message: String(message), type }];
  emit();

  if (typeof window !== 'undefined' && duration > 0) {
    setTimeout(() => dismissToast(id), duration);
  }
  return id;
}

export function dismissToast(id) {
  const prevLen = toasts.length;
  toasts = toasts.filter((t) => t.id !== id);
  if (toasts.length !== prevLen) emit();
}

/**
 * Menampilkan modal konfirmasi kustom yang mengembalikan Promise<boolean>.
 */
export function showConfirm(opts = {}) {
  if (typeof window === 'undefined') return Promise.resolve(false);
  return new Promise((resolve) => {
    if (confirmState && typeof confirmState.resolve === 'function') {
      confirmState.resolve(false);
    }
    confirmState = {
      title: opts.title || 'Konfirmasi',
      message: opts.message || '',
      confirmLabel: opts.confirmLabel || 'Lanjutkan',
      cancelLabel: opts.cancelLabel || 'Batal',
      danger: !!opts.danger,
      resolve,
    };
    emit();
  });
}

export function resolveConfirm(accepted) {
  if (!confirmState) return;
  const res = confirmState.resolve;
  confirmState = null;
  emit();
  if (typeof res === 'function') res(!!accepted);
}
