# CodeDuo

Belajar pemrograman gaya Duolingo — pelajaran pendek, latihan interaktif, dan teman
robot **Bibit** yang hidup: dia bergerak, menatap, dan berkomentar sendiri walau kamu
tidak menyentuhnya. Bahasa Indonesia, progres lokal, tanpa akun, jalan offline.

**Stack:** React 19 + Vite 5. Render Bibit pakai paket asli
[`robot-heads`](https://github.com/fayazara/robot-heads) (2D canvas, tanpa WebGL).

## Jalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # hasil ke dist/
npm run preview    # cek hasil build
```

## Struktur

```
index.html            entry Vite (root #root + /src/main.jsx)
vite.config.js        base './', manualChunks (react/robot/vendor/content-*), plugin swBuildId()
public/               aset statis disalin apa adanya ke dist/
                      styles.css, manifest.json, icon*, 404.html, robots.txt, sw.js
src/
  main.jsx            entry React: initStore → hashchange → render
  App.jsx             router hash (home / topic / lesson / review / profile) + topbar + buddy
  store.js            SATU pemilik state; React baca via useSyncExternalStore
  companion.js        planner perilaku otonom Bibit (murni, Node-testable)
  useStore.js         useSyncExternalStore(subscribe, getSnapshot)
  lib/rng.js          mulberry32 / shuffled / MAX_HEARTS
  lib/motion.js       anime.js + canvas-confetti (no-op saat reduced-motion)
  lib/codeRunner.js   jawaban 'code' → Worker + timeout (Node: jalur sinkron)
  lib/codeWorker.js   worker: jalankan checkCode, jauh dari main thread
  components/         Topbar, Buddy, Bib, Home, Topic, Lesson, Profile
content/              kurikulum dipecah per blok (html, js, sql, ts, web)
content.js            barrel: CURRICULUM + helper murni (step/ujian/SRS key)
checkers.js  srs.js  robot.js  sfx.js    mesin murni (ESM)
```

### Engine dipisah dari DOM

`src/store.js` memegang seluruh state dan aksi tanpa menyentuh DOM, jadi bisa diuji
di Node. React hanya *membaca* lewat `useSyncExternalStore(subscribe, getSnapshot)`
(snapshot = nomor versi) dan memanggil aksi. Efek (SFX, animasi, konfeti) dipasang di
komponen, bukan di store — supaya logika tetap murni dan testable.

## Struktur konten (mudah dirawat)

Kurikulum **dipecah per blok** — mengubah soal tak perlu menyentuh engine:

| File | Topik | Soal |
|------|-------|------|
| `content/html.js` | HTML, CSS | 610 |
| `content/js.js` | JavaScript, Struktur Data | 610 |
| `content/sql.js` | SQL, Database, API | 915 |
| `content/ts.js` | TypeScript, REST API | 610 |
| `content/web.js` | Blok Web (peta fungsi tiap blok) | 305 |

`content.js` = **barrel**: menyusun tiap blok jadi `CURRICULUM` + helper murni
(`stepsForTopic`, `questionKey`, `resolveQuestion`, `allQuestionIds`, …).

**Aturan (dijaga `test.js`):** tiap topik = 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance),
total **3.050 soal** across 10 topik kurikulum. Tiap topik dipotong rapi menjadi 31 step + 3 ujian tier (34 node).

## Bibit hidup — otonomi + ekspresi belajar sendiri

Bibit bukan lagi sekadar bereaksi saat diklik. Dia punya dua lapis perilaku:

**1. Perilaku otonom (`src/companion.js`, murni & Node-testable).** State machine
berprioritas dengan guard anti-spam:

| Event | Pemicu | Aksi |
|-------|--------|------|
| `IDLE_FACE` | diam 5–12 dtk | wajah ambien — **`idle` dominan**, sesekali `thinking/searching/listening/working` |
| `SLEEP_DRIFT` | diam > 75 dtk | condong `sleeping` (napas pelan, lampu mati) |
| `WAKE` | user kembali | `happy` + sapaan singkat |
| `PROACTIVE` | diam 45–110 dtk | satu baris komentar sesuai konteks (maks 2 / 3 mnt, backoff ×1.6 bila diabaikan) |
| `HINT` | murid > 25 dtk di 1 soal | satu petunjuk sesuai tipe soal (sekali per posisi) |

Guard: baris proaktif tidak muncul saat fase feedback/done/failed; hint sekali per
posisi; jeda makin panjang bila baris terakhir diabaikan. Timer hidup di `Buddy.jsx`
(interval 1 dtk, `dt` dari jam nyata jadi tetap akurat walau tab di-throttle).

**2. Model ekspresi on-device (dilatih di browser murid).** Wajah Bibit **berubah tiap
interaksi** — dipilih **model machine learning kecil**, bukan `if/else`:

- **Algoritma:** regresi logistik multikelas (softmax) + **SGD online**. Murni JS,
  tanpa library, tanpa server. ML klasik (linear), **bukan** deep learning — jujur soal skalanya.
- **Masukan (14 fitur):** benar/salah, nyawa, progres, jenis interaksi
  (pelajaran/tap/navigasi/pilih), streak, first-try, kecepatan.
- **Keluaran (9 kelas):** state wajah robot-heads (idle, thinking, searching, listening,
  speaking, working, happy, error, sleeping).
- **Cara pakai:** tiap aksi → `exprLearn()` satu langkah SGD → `pickExpression()` mengambil
  sampel wajah (eksplorasi 12% + anti-ulang, jadi muka tak pernah beku).
- **Persistensi:** bobot di `localStorage` `codeduo_expr_v1`; reset profil menghapusnya.
- **Inspeksi (SERT State):** `buddyDump()` di konsol → bobot ringkas + distribusi probabilitas.

## Ingat ≥30 hari — step 10 soal, ujian tiap tier, ulangan berjarak (SRS)

- **1 step = tepat 10 soal.** Tiap topik = **3 step** (Dasar/Menengah/Advance) = 30 soal;
  total = **300 soal**. Tiap tier selesai → **ujian tier** (10 soal tier itu, diacak ulang,
  tanpa bocoran urutan). Unlock berurutan: step → ujian → step berikutnya → …
- **Ulangan berjarak (SRS).** Tiap soal dijadwalkan ulang dengan interval membesar
  **1 → 2 → 4 → 8 → 16 → 32 hari** (kotak Leitner). Benar = naik kotak; salah = reset kotak 0.
  Kartu **"Ingat"** di home menampilkan ≤10 soal jatuh tempo → tiap sesi = **mengingat ulang
  (tes)**. Bank habis = semua soal sudah pernah dikerjakan & terjadwal.
- **Mesin murni** `srs.js`, persistensi `localStorage codeduo_srs_v1`. Inspeksi: `srsDump()`.

**Basis literatur:** Ebbinghaus (1885) — kurva lupa; Cepeda, Pashler, Vul, Wixted & Rohrer
(2006) *Psych. Bulletin* 132(3) & Cepeda dkk (2008) *Psych. Science* 19(11) — jeda optimal
tumbuh; Roediger & Karpicke (2006) *Psych. Science* 17(3) — *testing effect*; Karpicke &
Blunt (2011) *Science* 331 — retrieval > elaborasi; Murre & Dros (2015) *PLoS ONE* 10(7) —
replikasi kurva lupa; Smolen, Zhang & Byrne (2016) *Nat. Rev. Neuroscience* 17 — dosis
spaced learning; Settles & Meeder (2016) *ACL* — preseden SRS (Duolingo).

## Kepala Bibit — `robot-heads` asli

Kepala Bibit dirender komponen `<RobotHead>` dari paket **`robot-heads`** apa adanya:

- **Geometri nyata:** shell dengan tepi bergulung, kuping kenop & kerah antena di-*lathe*
  jadi mesh quad; tiap frame diputar, diproyeksikan, back-face di-cull.
- **Lighting studio:** key light + fill + sky dome + softbox, pantulan clear-coat dengan
  Fresnel, rim cahaya belakang, lalu filmic tone curve.
- **LED bloom:** matriks LED penuh layar, wajah di tengah, digambar tajam lalu di-bloom
  dari citra 1 piksel-per-LED yang diperbesar halus.
- **Antena pegas teredam** yang mencambuk saat kepala melompat/mendarat/miring.
- **Loop animasi sendiri (rAF):** tiap state punya gerak khas — `idle` bernapas & melirik,
  `thinking` menoleh, `searching` menyapu, `listening` mengangguk, `working` menggoyang,
  `happy` melompat cepat, `error` bergetar, `sleeping` bernapas pelan. Kepala bergoyang,
  berkedip, dan antena mencambuk **tiap frame** — bukan animasi sekali-mount.
- **Bentuk kepala Bibit tetap `rectangle`** (TV klasik, warna brand hijau). Bentuk tidak
  berganti-ganti tiap mood — identitas Bibit stabil; yang berubah hanya wajah LED.
- **9 state** dengan glitch + crossfade antar state, glif wajah khas, dan warna bohlam antena
  per state. Di panel bawah ada "napas" CSS pelan (4,2 dtk) biar selalu bergerak.
  `prefers-reduced-motion` → pose diam (loop kanvas + napas dimatikan).

## Tes

```bash
npm test                  # node test.js → checker+runner, kurikulum (10 topik/3050 soal),
                          # step & SRS, store (migrasi path, prefers-reduced-motion),
                          # wajah LED, animasi head, model ekspresi
npm run test:companion    # node test-companion.mjs → planner otonom Bibit (idle/proaktif/hint)
npm run build             # vite build (gate: 0 error)
```

`package.json` = `"type": "module"` → `test.js` & `test-companion.mjs` jalan sebagai ESM
(`import`), sama seperti modul mesin.

## Deploy ke Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy dist --project-name=codeduo
```

Atau lewat dashboard Cloudflare Pages:

| Setelan | Nilai |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | 20+ |

`base: './'` → hasil build aman walau di-host di subfolder. **Rute hash**
(`#/lesson/...`) berarti deep-link aman tanpa aturan rewrite.

Versi cache service worker **tidak perlu di-bump manual**: plugin `swBuildId()` di
`vite.config.js` mengisi `__BUILD_ID__` di `dist/sw.js` dengan hash build, jadi cache
lama otomatis dibuang tiap deploy. Aset ber-hash Vite = cache-first (immutable);
`styles.css`/manifest/ikon = stale-while-revalidate (update ikut terkirim).

## Offline — apa adanya

PWA menyimpan shell + aset yang pernah dibuka, jadi setelah kunjungan pertama app
jalan penuh offline. CDN **sudah tidak dipakai** (anime.js & canvas-confetti kini
dibundel Vite), jadi tidak ada request aset eksternal sama sekali.

## Keamanan

`checkCode` menjalankan jawaban murid lewat `new Function` di **Worker terpisah** di
browser murid sendiri (sandbox = tab user, bukan server), dengan batas waktu 1,2 dtk —
loop tak berujung hanya mematikan worker, bukan membekukan tab. Untuk tool satu-user ini
aman; kalau nanti multi-user daring, jalankan worker di origin terisolasi.

## Atribusi

- Kode & maskot Bibit: © 2026 Grayzeus (MIT, lihat `LICENSE`).
- Kepala Bibit memakai paket [`robot-heads`](https://github.com/fayazara/robot-heads)
  (MIT © [Fayaz Ahmed](https://x.com/fayazara)) — dependency runtime, tanpa modifikasi.

## Checklist launch

- [x] `npm test` hijau (92 tes) + `npm run test:companion` hijau + CI (`.github/workflows/ci.yml`)
- [x] Tiket PWA: icon 192/512 (maskable), manifest, service worker (cache id = hash build)
- [x] `robots.txt`, `404.html`, `LICENSE`, `README.md`
- [x] Meta sosial dasar (og/twitter, tanpa og:image agar tak 404)
- [x] Nol CDN runtime — anime.js & canvas-confetti dibundel Vite (offline 100%)
- [ ] **Lighthouse** (mobile & desktop): Performance / **A11y ≥ AA** / Best-practices / PWA — 0 critical
- [ ] Rendering dites di HP asli (kanvas head 60 fps, service worker, install PWA)
- [ ] Nilai kontras teks sekunder dicek (`--muted` #5c6670 & tombol hijau ≥ 3:1)
- [ ] `og:image` final (1200×630) + `<link rel="canonical">` setelah domain tetap
