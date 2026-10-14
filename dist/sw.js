/* CodeDuo service worker (React + Vite build).
 * Strategi: navigasi = network-first (anti HTML basi, app tetap jalan offline),
 * aset statis ber-hash = cache-first. Bump VERSION saat deploy.
 */
'use strict';

const VERSION = 'codeduo-v20';
const SHELL = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable.png',
];

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(VERSION);
    await Promise.all(SHELL.map((u) => fetch(u)
      .then((r) => (r && r.ok ? cache.put(u, r) : null))
      .catch(() => null)));
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
        return hit || caches.match('index.html') || Response.error();
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
