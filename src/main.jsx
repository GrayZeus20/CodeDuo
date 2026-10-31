/* CodeDuo — entry Vite: pasang store, globals dump, unlock audio, hashchange → routeChange,
 * lalu render React root. Service worker didaftarkan setelah UI hidup. */
'use strict';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { initStore, exposeGlobals, routeChange, getSession } from './store.js';
import { SFX } from '../sfx.js';
import { BGM } from '../bgm.js';
import { initNotificationScheduler } from './notifications.js';

/* Store lebih dulu (state+path+SRS+model) — sebelum render pertama. */
const boot = initStore();
SFX.setMuted(!!boot.muted);
BGM.setMuted(!!boot.muted);
BGM.init();
initNotificationScheduler();
exposeGlobals();

/* Autoplay policy: AudioContext butuh gesture pertama user. */
document.addEventListener('pointerdown', () => { SFX.unlock(); BGM.unlock(); }, { once: true });
document.addEventListener('keydown', () => { SFX.unlock(); BGM.unlock(); }, { once: true });

/* Router: hash berubah → store sinkron sesi, lalu bump → React re-render. */
window.addEventListener('hashchange', routeChange);
routeChange(); /* deep-link ke #/lesson/... langsung memulai sesi */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

/* PWA: service worker — auto-update saat versi baru tersedia (http/https saja).
 * Kunci anti-"PWA basi":
 *  - `updateViaCache: 'none'` → sw.js selalu dicek ke network, tidak tertahan cache HTTP.
 *  - update di-defer saat sesi pelajaran aktif (sesi hanya di memori: reload = progres hilang).
 *  - cek versi baru saat app kembali terlihat (PWA terpasang biasanya di-resume, bukan dibuka ulang).
 */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')) {
  const hadController = !!navigator.serviceWorker.controller;
  let refreshing = false;
  let updateReady = false;
  let checkForUpdate = () => {};

  const inLesson = () => {
    const s = getSession();
    return !!s && (s.phase === 'run' || s.phase === 'feedback' || s.phase === 'failed');
  };

  const reloadIfIdle = () => {
    if (!updateReady || refreshing || inLesson()) return;
    refreshing = true;
    window.location.reload();
  };

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    /* Kunjungan pertama (belum ada controller): jangan reload hanya karena SW baru claim. */
    if (!hadController) return;
    updateReady = true;
    reloadIfIdle();
  });

  /* Keluar pelajaran / selesai sesi → hash berubah → aman reload. */
  window.addEventListener('hashchange', () => setTimeout(reloadIfIdle, 80));
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState !== 'visible') return;
    checkForUpdate();
    reloadIfIdle();
  });
  window.addEventListener('online', () => checkForUpdate());

  navigator.serviceWorker.register('sw.js', { scope: './', updateViaCache: 'none' }).then((reg) => {
    let lastCheck = 0;
    checkForUpdate = () => {
      if (Date.now() - lastCheck < 15 * 60 * 1000) return; /* maksimal 1x / 15 menit */
      lastCheck = Date.now();
      reg.update().catch(() => {});
    };
    checkForUpdate();
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      if (!newWorker) return;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          newWorker.postMessage({ type: 'SKIP_WAITING' });
        }
      });
    });
  }).catch((e) => console.warn('[sw] register gagal:', e.message));
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
