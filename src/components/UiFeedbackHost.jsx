/* CodeDuo — UiFeedbackHost: Renderer global untuk Toast & Dialog Konfirmasi kustom. */
'use strict';

import { useEffect, useState } from 'react';
import {
  getUiFeedbackState,
  subscribeUiFeedback,
  dismissToast,
  resolveConfirm,
} from '../uiFeedback.js';

const TOAST_ICONS = {
  success: '✓',
  warn: '⚠️',
  error: '✕',
  info: 'ℹ',
};

export default function UiFeedbackHost() {
  const [ui, setUi] = useState(getUiFeedbackState);

  useEffect(() => {
    return subscribeUiFeedback(() => {
      setUi(getUiFeedbackState());
    });
  }, []);

  useEffect(() => {
    if (!ui.confirm) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') resolveConfirm(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [ui.confirm]);

  return (
    <>
      {ui.toasts.length > 0 && (
        <div className="ui-toast-stack" aria-live="polite" aria-atomic="false">
          {ui.toasts.map((t) => (
            <div
              key={t.id}
              className={'ui-toast ui-toast--' + t.type}
              role={t.type === 'error' || t.type === 'warn' ? 'alert' : 'status'}
              onClick={() => dismissToast(t.id)}
              title="Ketuk untuk menutup"
            >
              <span className="ui-toast__ico" aria-hidden="true">{TOAST_ICONS[t.type] || 'ℹ'}</span>
              <span className="ui-toast__msg">{t.message}</span>
            </div>
          ))}
        </div>
      )}

      {ui.confirm && (
        <div
          className="ui-modal-backdrop"
          role="presentation"
          onClick={(e) => {
            if (e.target === e.currentTarget) resolveConfirm(false);
          }}
        >
          <div
            className="ui-modal"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="ui-confirm-title"
            aria-describedby="ui-confirm-desc"
          >
            <h2 id="ui-confirm-title" className="ui-modal__title">{ui.confirm.title}</h2>
            <p id="ui-confirm-desc" className="ui-modal__msg">{ui.confirm.message}</p>
            <div className="ui-modal__actions">
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => resolveConfirm(false)}
              >
                {ui.confirm.cancelLabel}
              </button>
              <button
                type="button"
                className={'btn btn--sm ' + (ui.confirm.danger ? 'btn--danger' : 'btn--primary')}
                autoFocus
                onClick={() => resolveConfirm(true)}
              >
                {ui.confirm.confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
