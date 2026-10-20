/* CodeDuo service worker (React + Vite build).
 * Strategi:
 *   - navigasi          → network-first (anti HTML basi, fallback cache saat offline)
 *   - aset ber-hash     → cache-first (immutable: nama berubah tiap build)
 *   - nama stabil       → stale-while-revalidate (CSS/manifest/ikon ikut update tanpa bump manual)
 * `BUILD` diisi hash build oleh plugin swBuildId() di vite.config.js → cache lama otomatis dibuang.
 */
'use strict';

const BUILD = '__BUILD_ID__';
const CACHE = 'codeduo-' + BUILD;
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

/* Aset Vite ber-hash (index-CPteohrP.js) → immutable, cache-first. */
const HASHED = /\/assets\/.+-[A-Za-z0-9_-]{8,}\.(?:js|css|png|svg|woff2?)$/;

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await Promise.all(SHELL.map((u) => fetch(new Request(u, { cache: 'reload' }))
      .then((r) => (r && r.ok ? cache.put(u, r) : null))
      .catch(() => null)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.endsWith('/sw.js')) return; /* biar update worker tak pernah di-cache */

  /* Navigasi: network-first, fallback shell dari cache */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const resp = await fetch(req);
        const cache = await caches.open(CACHE);
        cache.put('index.html', resp.clone());
        return resp;
      } catch (_) {
        return (await caches.match('index.html')) || Response.error();
      }
    })());
    return;
  }

  /* Aset ber-hash: cache-first, isi cache saat miss online */
  if (HASHED.test(url.pathname)) {
    e.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      try {
        const resp = await fetch(req);
        if (resp.ok) (await caches.open(CACHE)).put(req, resp.clone());
        return resp;
      } catch (_) {
        return Response.error();
      }
    })());
    return;
  }

  /* Nama stabil: sajikan cache dulu, perbarui di belakang */
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req);
    const network = fetch(req).then((resp) => {
      if (resp && resp.ok) cache.put(req, resp.clone());
      return resp;
    }).catch(() => null);
    if (hit) return hit;
    return (await network) || Response.error();
  })());
});
