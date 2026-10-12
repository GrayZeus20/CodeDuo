/* CodeDuo — pasang SRI (Subresource Integrity) otomatis.
 * Ambil byte ASLI tiap library dari CDN-nya, hitung sha384, lalu suntikkan
 * attribute integrity ke tag <script> yang cocok di index.html.
 * Jalankan sekali saat online:  node sri.js
 * Idempoten — baris yang sudah punya integrity akan diganti, bukan dobel.
 */
'use strict';

const fs = require('fs');
const crypto = require('crypto');
const https = require('https');
const path = require('path');

const FILE = path.join(__dirname, 'index.html');
const LIBS = [
  'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js',
  'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js',
];

function get(url) {
  return new Promise((res, rej) => {
    https.get(url, (r) => {
      if (r.statusCode !== 200) { rej(new Error('HTTP ' + r.statusCode + ' ' + url)); return; }
      const chunks = [];
      r.on('data', (d) => chunks.push(d));
      r.on('end', () => res(Buffer.concat(chunks)));
    }).on('error', rej);
  });
}

(async () => {
  let html;
  try { html = fs.readFileSync(FILE, 'utf8'); }
  catch (e) { console.error('[sri] tidak bisa baca index.html:', e.message); process.exit(1); }

  let changed = 0;
  for (const url of LIBS) {
    let sri;
    try {
      const buf = await get(url);
      sri = 'sha384-' + crypto.createHash('sha384').update(buf).digest('base64');
      console.log('[sri] ' + url.split('/').slice(-2).join('/') + '  ' + buf.length + ' byte');
      console.log('      integrity="' + sri + '"');
    } catch (e) {
      console.error('[sri] GAGAL ambil ' + url + ' — ' + e.message);
      continue; /* jangan sentuh baris ini; lebih baik tanpa SRI daripada hash salah */
    }
    const before = html;
    html = html.replace(new RegExp('<script\\b[^>]*src="' + url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '"[^>]*>'), (tag) => {
      const clean = tag.replace(/\s+integrity="[^"]*"/, '');       /* buang integrity lama */
      const withCross = /\bcrossorigin=/.test(clean) ? clean : clean.replace(/>$/, ' crossorigin="anonymous">');
      return withCross.replace(/>$/, ' integrity="' + sri + '">');
    });
    if (html !== before) changed++;
  }

  try { fs.writeFileSync(FILE, html); }
  catch (e) { console.error('[sri] gagal tulis index.html:', e.message); process.exit(1); }

  console.log('\n[sri] selesai — ' + changed + '/' + LIBS.length + ' tag diperbarui di index.html');
  if (changed < LIBS.length) {
    console.log('[sri] ADA YANG GAGAL — jalankan lagi saat koneksi stabil.');
    process.exit(1);
  }
})();
