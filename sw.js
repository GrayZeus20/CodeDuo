/* CodeDuo service worker.
 * Strategi: navigasi = network-first (anti HTML basi, lesson dari cache offline),
 * aset statis = cache-first, CDN runtime-cached. Bump VERSION saat deploy.
 */
'use strict';

const VERSION = 'codeduo-v11';
const SHELL = [
  'index.html',
  'styles.css',
  'app.js',
  'robot.js',
  'content.js',
  'content/html.js',
  'content/js.js',
  'content/sql.js',
  'content/ts.js',
  'content/web.js',
  'checkers.js',
  'srs.js',
  'sfx.js',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
];
const CDN = [
  'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
];

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await cache.addAll(SHELL);
    /* CDN opsional — gagal satu tetap lanjut (graceful offline degrade) */
    await Promise.all(CDN.map((u) => fetch(u)
      .then((r) => cache.put(u, r))
      .catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== VERSION).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* Navigasi: network-first, fallback cache (offline app tetap jalan) */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const resp = await fetch(req);
        const cache = await caches.open(VERSION);
        cache.put(req, resp.clone());
        return resp;
      } catch (_) {
        const hit = await caches.match(req);
        return hit || caches.match('index.html');
      }
    })());
    return;
  }

  /* Aset (same-origin + CDN): cache-first, isi cache saat miss online */
  e.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    try {
      const resp = await fetch(req);
      if (resp.ok || resp.type === 'opaque') {
        const cache = await caches.open(VERSION);
        cache.put(req, resp.clone());
      }
      return resp;
    } catch (_) {
      return Response.error();
    }
  })());
});
