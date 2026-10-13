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

/* PWA: service worker — http/https saja (localhost OK, file:// skip). */
if ('serviceWorker' in navigator && (location.protocol === 'https:' || location.protocol === 'http:')) {
  navigator.serviceWorker.register('sw.js').catch((e) => console.warn('[sw] register gagal:', e.message));
}
