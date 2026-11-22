/* CodeDuo service worker (React + Vite build — Tahan Jaringan Lambat / Lie-Fi & 100% Offline).
 * Strategi:
 *   - install           → precache shell + seluruh chunk JS/kurikulum secara bertahap (reuse cache lama untuk hemat kuota!)
 *   - navigasi          → network-first dengan timeout cepat 2.5 detik (anti hang di jaringan jelek / lie-fi) → fallback cache instan
 *   - aset ber-hash     → cache-first (immutable: 0ms dari cache)
 *   - nama stabil       → stale-while-revalidate (CSS/manifest/ikon langsung tampil dari cache, update di belakang)
 * `BUILD` & `PRECACHE_ASSETS` diisi otomatis oleh plugin swBuildId() di vite.config.js.
 */
'use strict';

const BUILD = '__BUILD_ID__';
const CACHE = 'codeduo-' + BUILD;
const NAV_TIMEOUT_MS = 2500;
const ASSET_TIMEOUT_MS = 10000;

const SHELL = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'icon.svg',
  'icon-192.png',
  'icon-512.png',
  'icon-maskable.png',
  'bg-music-manager.html',
  'pixabay-acoustic-catalog.json',
];

const PRECACHE_ASSETS = [];

/* Aset Vite ber-hash (index-CPteohrP.js) → immutable, cache-first. */
const HASHED = /\/assets\/.+-[A-Za-z0-9_-]{8,}\.(?:js|css|png|svg|woff2?)$/;

/* Fetch dengan batas waktu (AbortController) agar jaringan lemot/lie-fi tidak menggantung */
function fetchWithTimeout(req, timeoutMs) {
  if (typeof AbortController === 'undefined') return fetch(req);
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  return fetch(req, { signal: ctrl.signal }).finally(() => clearTimeout(timer));
}

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
  if (e.data && e.data.type === 'SHOW_NOTIFICATION') {
    const { title, options } = e.data;
    self.registration.showNotification(title, options);
  }
});

/* PWA & Web Push / Local Notification click handling */
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.action === 'later') return;

  const targetUrl = (event.notification.data && event.notification.data.url)
    ? event.notification.data.url
    : './';

  event.waitUntil((async () => {
    const clientList = await self.clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of clientList) {
      if ('focus' in client) {
        if (client.navigate && targetUrl !== './') {
          client.navigate(targetUrl).catch(() => {});
        }
        return client.focus();
      }
    }
    if (self.clients.openWindow) {
      return self.clients.openWindow(targetUrl);
    }
  })());
});

self.addEventListener('notificationclose', () => {
  /* Notification dismissed by user */
});

/* Periodic Background Sync (Chromium PWA) — pengingat belajar berkala */
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'codeduo-daily-reminder') {
    event.waitUntil(
      self.registration.showNotification('🔥 Jangan Lupa Belajar Hari Ini!', {
        body: 'Bibit sudah menunggumu! Luangkan 3 menit untuk belajar koding dan jaga streak-mu.',
        icon: './icon-192.png',
        badge: './icon.svg',
        tag: 'codeduo-daily-streak-reminder',
        renotify: true,
        data: { url: './' },
      })
    );
  }
});

self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);

    /* 1. Prioritaskan shell utama terlebih dahulu */
    await Promise.all(SHELL.map((u) =>
      fetchWithTimeout(new Request(u, { cache: 'reload' }), ASSET_TIMEOUT_MS)
        .then((r) => (r && r.ok ? cache.put(u, r) : null))
        .catch(() => null)
    ));

    /* 2. Precache seluruh chunk JS/kurikulum secara bertahap (batch 4) agar ramah jaringan lambat.
     *    Jika chunk ber-hash sudah ada di cache lama, salin langsung tanpa unduh ulang! */
    const BATCH = 4;
    for (let i = 0; i < PRECACHE_ASSETS.length; i += BATCH) {
      const slice = PRECACHE_ASSETS.slice(i, i + BATCH);
      await Promise.all(slice.map(async (u) => {
        try {
          const existing = await caches.match(u);
          if (existing) {
            await cache.put(u, existing.clone());
            return;
          }
          const resp = await fetchWithTimeout(u, ASSET_TIMEOUT_MS);
          if (resp && resp.ok) await cache.put(u, resp);
        } catch (_) {
          /* Jaringan putus saat precache — tetap lanjut, aset akan di-cache saat dibutuhkan */
        }
      }));
    }

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

  /* Navigasi: Network-first dengan timeout cepat 2.5 detik → fallback cache instan (anti blank di jaringan jelek) */
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      const cache = await caches.open(CACHE);
      const cached = (await cache.match('index.html')) || (await caches.match('index.html')) || (await caches.match('./'));

      const networkPromise = fetch(req, { cache: 'no-store' }).then((resp) => {
        if (resp && resp.ok) {
          cache.put('index.html', resp.clone());
          return resp;
        }
        return null;
      }).catch(() => null);

      /* Jika sudah punya cache, beri batas waktu 2.5 detik untuk network agar tidak menggantung di lie-fi */
      if (cached) {
        const fastNetwork = await Promise.race([
          networkPromise,
          new Promise((resolve) => setTimeout(() => resolve(null), NAV_TIMEOUT_MS)),
        ]);
        if (fastNetwork) return fastNetwork;
        return cached;
      }

      /* Kunjungan pertama (belum ada cache): tunggu network */
      return (await networkPromise) || Response.error();
    })());
    return;
  }

  /* Aset ber-hash: cache-first (0ms offline/jaringan jelek), isi cache saat miss online */
  if (HASHED.test(url.pathname)) {
    e.respondWith((async () => {
      const hit = await caches.match(req);
      if (hit) return hit;
      try {
        const resp = await fetchWithTimeout(req, ASSET_TIMEOUT_MS);
        if (resp && resp.ok) (await caches.open(CACHE)).put(req, resp.clone());
        return resp;
      } catch (_) {
        return Response.error();
      }
    })());
    return;
  }

  /* Nama stabil (styles.css, manifest, katalog BGM): sajikan cache dulu, perbarui di belakang */
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = (await cache.match(req)) || (await caches.match(req));
    const network = fetchWithTimeout(req, ASSET_TIMEOUT_MS).then((resp) => {
      if (resp && resp.ok) cache.put(req, resp.clone());
      return resp;
    }).catch(() => null);
    if (hit) return hit;
    return (await network) || Response.error();
  })());
});
