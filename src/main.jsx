/* CodeDuo — entry Vite: pasang store, globals dump, unlock audio, hashchange → routeChange,
 * lalu render React root. Service worker didaftarkan setelah UI hidup. */
'use strict';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initStore, exposeGlobals, routeChange } from './store.js';
import { SFX } from '../sfx.js';

/* Store lebih dulu (state+path+SRS+model) — sebelum render pertama. */
const boot = initStore();
SFX.setMuted(!!boot.muted);
exposeGlobals();

/* Autoplay policy: AudioContext butuh gesture pertama user. */
document.addEventListener('pointerdown', () => SFX.unlock(), { once: true });
document.addEventListener('keydown', () => SFX.unlock(), { once: true });

/* Router: hash berubah → store sinkron sesi, lalu bump → React re-render. */
window.addEventListener('hashchange', routeChange);
routeChange(); /* deep-link ke #/lesson/... langsung memulai sesi */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* PWA: service worker — auto-update saat versi baru tersedia (http/https saja). */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')) {
  navigator.serviceWorker.register('sw.js').then((reg) => {
    reg.update().catch(() => {});
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
            newWorker.postMessage({ type: 'SKIP_WAITING' });
          }
        });
      }
    });
  }).catch((e) => console.warn('[sw] register gagal:', e.message));

  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      window.location.reload();
    }
  });
}

/* Garansi Penyimpanan: jika pengguna sebelumnya sudah menerima ('accepted'),
 * pastikan status persistent storage tetap terjaga di sesi ini. */
if (typeof navigator !== 'undefined' && navigator.storage && navigator.storage.persist) {
  try {
    if (localStorage.getItem('codeduo_persist_consent') === 'accepted') {
      navigator.storage.persist().catch(() => {});
    }
  } catch (_) {}
}
