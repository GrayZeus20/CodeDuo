# CodeDuo

Belajar pemrograman gaya Duolingo — pelajaran pendek, latihan interaktif, dan teman
robot **Bibit** yang selalu menemani (di pelajaran maupun saat memilih topik).
Bahasa Indonesia, progres lokal, tanpa akun.

## Struktur konten (mudah dirawat)

Kurikulum **dipecah per blok** — mengubah soal tak perlu menyentuh engine:

| File | Topik | Soal |
|------|-------|------|
| `content/html.js` | HTML, CSS | 60 |
| `content/js.js` | JavaScript, Struktur Data | 60 |
| `content/sql.js` | SQL, Database, API | 90 |
| `content/ts.js` | TypeScript, REST API | 60 |
| `content/web.js` | Blok Web (peta fungsi tiap blok) | 30 |

`content.js` = **barrel**: menyusun tiap blok jadi `CURRICULUM` + helper murni
(`stepsForTopic`, `questionKey`, `resolveQuestion`, `allQuestionIds`, …). Urutan muat
wajib: blok dulu, `content.js` paling akhir (didokumentasikan di `index.html` & `sw.js`).

**Aturan (dijaga `test.js`):** tiap topik = 6 pelajaran (2 per tier), tiap tier tepat
**10 soal**, total **300 soal**. Lihat `CONTRIBUTING.md` untuk menambah soal.

## Muka Bibit belajar (model ekspresi on-device)

Wajah Bibit **berubah tiap interaksi**: tiap klik, tiap jawaban, tiap pindah rute.
Yang memilih bukan `if/else` — melainkan **model machine learning kecil yang dilatih
di browser murid sendiri**:

- **Algoritma:** regresi logistik multikelas (softmax) + **SGD online** (gradient descent).
  Murni JavaScript, tanpa library, tanpa server, jalan offline. Ini ML klasik
  (linear), **bukan** deep learning — jujur soal skalanya.
- **Masukan (14 fitur):** benar/salah, nyawa, progres pelajaran, jenis interaksi
  (pelajaran/tap/navigasi/pilih), streak, first-try, kecepatan.
- **Keluaran (9 kelas):** state wajah robot-heads (idle, thinking, searching,
  listening, speaking, working, happy, error, sleeping).
- **Cara pakai:** tiap aksi → `exprLearn()` melatih 1 langkah SGD → `pickExpression()`
  mengambil sampel wajah (ada eksplorasi 12% + anti-ulang, jadi muka **tak pernah diam**).
- **Persistensi:** bobot disimpan di `localStorage` `codeduo_expr_v1`; menua = makin
  halus. Tombol reset profil ikut menghapus model (mulai dari nol).
- **Inspeksi (SERT State):** `buddyDump()` di konsol → bobot ringkas + distribusi
  probabilitas tiap state untuk sinyal terakhir.

## Ingat ≥30 hari — step 10 soal, ujian tiap tier, ulangan berjarak (SRS)

Kurikulum dipotong jadi **unit kecil + diingat ulang** supaya nempel jangka panjang:

- **1 step = tepat 10 soal.** Tiap topik = **3 step** (Dasar/Menengah/Advance) = 30 soal;
  total kurikulum = **300 soal**. Tiap tier selesai → **ujian tier** (10 soal tier itu, diacak
  ulang, tanpa bocoran urutan). Unlock tetap berurutan: step → ujian → step berikutnya → …
- **Ulangan berjarak (SRS).** Tiap soal dijadwalkan ulang dengan interval membesar
  **1 → 2 → 4 → 8 → 16 → 32 hari** (kotak Leitner). Benar = naik kotak; salah = reset ke kotak 0.
  Kartu **"Ingat"** di home menampilkan ≤10 soal jatuh tempo → tiap sesi = **mengingat ulang
  (tes), bukan baca ulang**. Bank habis = semua soal sudah pernah dikerjakan & terjadwal.
- **Mesin murni** `srs.js` (`schedule`, `dueItems`, `toJSON`/`fromJSON`), persistensi
  `localStorage codeduo_srs_v1`; owner state = `app.js`. Inpeksi: `srsDump()` di konsol.

**Basis literatur (spaced repetition + retrieval practice):** Ebbinghaus (1885) — kurva lupa;
Cepeda, Pashler, Vul, Wixted & Rohrer (2006) *Psych. Bulletin* 132(3) & Cepeda dkk (2008)
*Psych. Science* 19(11) — jeda optimal tumbuh, target 30 hari → jeda optimal ~3–6 hari;
Roediger & Karpicke (2006) *Psych. Science* 17(3) — *testing effect*; Karpicke & Blunt (2011)
*Science* 331 — retrieval > elaborasi; Murre & Dros (2015) *PLoS ONE* 10(7) — replikasi kurva lupa;
Smolen, Zhang & Byrne (2016) *Nat. Rev. Neuroscience* 17 — dosis spaced learning;
Settles & Meeder (2016) *ACL* — preseden SRS (Duolingo half-life regression).

## Kepala Bibit — animasi robot-heads (semua state hidup)

Kepala Bibit = port bahasa bentuk [robot-heads](https://github.com/fayazara/robot-heads)
(kotak TV glossy + **layar LED matrix 22×14** kecerahan float 0..1, sama seperti paket aslinya),
dirender di `<canvas>`. **Tiap state beranimasi**, bukan cuma `idle`:

- **Wajah LED khas tiap state** (`_rhFaceGrid`, port pola `Xt` robot-heads): `idle` = mata blok
  berkedip & melirik; `thinking` = mata menengadah + tiga titik berdenyut; `searching` = berkas
  scan menyapu kolom; `listening` = equaliser 12 bar; `speaking` = mulut bergerak; `working` =
  progress bar; `happy` = mata `^ ^` + senyum; `error` = mata `X X` berkedip; `sleeping` = mata
  pejam + huruf z naik.
- **Mesin gerak murni** `_rhFrame(state, t, seed)` menurunkan kedip, lirik, sisi pandang, dan
  goyangan — deterministik dari (state, waktu, seed) → bisa diuji di Node tanpa DOM.
- **Bohlam antena berwarna per state** (`RH_META.bulb`, port `Ot`): amber saat berpikir, cyan saat
  mencari, hijau saat mendengar, biru saat bekerja, pink saat senang, merah saat error.
- **Seed per head** = hash nama state (`_rhHash`) → tiap head punya fase sendiri, tak serempak.
- Loop bersama satu `requestAnimationFrame` untuk semua head, berhenti saat tab hidden, hormati
  `prefers-reduced-motion` (frame statis). Tanpa library, offline penuh.

`ledMatrixFor(state)` + `_rhFaceGrid(state, f)` (wajah) + `_rhFrame` (gerak) murni → diuji tanpa DOM.

## Menjalankan

Aplikasi ini statis (HTML/CSS/JS vanilla, **tanpa framework, tanpa build step**).
Cukup sajikan foldernya lewat web server apa pun:

```bash
# dari folder ini
python -m http.server 8080
# atau di Laragon: http://codeduo.test
```

Buka `http://localhost:8080`. Service worker butuh `http`/`https` (bukan `file://`).

## Tes

```bash
npm test            # = node test.js → 84 tes: checker, kurikulum (10 topik / 300 soal / tier = 10), step & SRS, wajah LED 22×14, animasi head, migrasi path, model ekspresi
npm run check       # node --check semua berkas JS (content/*.js, content.js, app.js, dll.)
```

## Siap production & repo publik

Proyek ini **tanpa dependensi runtime** (nol `node_modules` saat jalan). Yang perlu
dipenuhi sebelum deploy/publish:

- **Metadata** — `package.json` (nama, versi, lisensi MIT, engines `node >=18`) + `LICENSE`.
- **Bersih untuk publik** — `.gitignore` menutup `node_modules/`, `.impeccable/`,
  `.playwright-mcp/`, log, dan OS junk. **Jangan** commit `node_modules/`.
- **Offline penuh** — shell di-cache service worker (`codeduo-v11`). Untuk nol request
  eksternal sejak kunjungan pertama, turunkan 2 lib CDN ke `vendor/` (lihat "Offline").
- **SRI** — hash 2 script CDN terkunci (jalankan `npm run sri` bila versi CDN naik).
- **Checklist launch** (di bawah): Lighthouse a11y ≥ AA, render HP asli, `og:image` final.

Inisialisasi repo (sekali):

```bash
git init
git add .
git commit -m "CodeDuo 1.0.0 — belajar coding offline, SRS ≥30 hari, 300 soal"
git branch -M main
git remote add origin https://github.com/<user>/codeduo.git
git push -u origin main
```

## Deploy

Hosting statis apa pun (Netlify, Cloudflare Pages, GitHub Pages, Vercel, nginx).
Semua path relatif → jalan di subfolder juga. **Hash routing** (`#/lesson/...`) berarti
deep-link aman tanpa aturan rewrite; `404.html` disediakan sebagai fallback server.

Ikon di-nomori cache dengan `VERSION` di `sw.js` — **bump `VERSION` tiap deploy**
yang mengubah aset shell.

## SRI (Subresource Integrity) — WAJIB sebelum produksi

Dua library motion dimuat dari CDN dan seharusnya dikunci dengan hash. Karena hash
**harus dihitung dari byte asli** (jangan pernah diketik manual), ada alatnya:

```bash
node sri.js      # ambil dari CDN, hitung sha384, suntik ke index.html (idempoten)
```

Butuh koneksi sekali. Kalau gagal ambil salah satu sumber, `sri.js` **tidak**
menyentuh baris itu (lebih baik tanpa SRI daripada hash salah) dan keluar dengan
kode error — jalankan lagi saat stabil. Verifikasi cepat setelahnya:
`grep integrity index.html` → harus ada dua baris `integrity="sha384-…"`.

Kedua script sudah memakai `crossorigin="anonymous"` (syarat SRI) dan bersifat
**non-esensial**: kalau gagal dimuat, app tetap jalan — animasi degrade mulus.

## Offline — apa adanya

PWA menyimpan seluruh aset shell, jadi setelah kunjungan pertama app **jalan penuh
offline**. Tapi klaim "tanpa request aset eksternal" **tidak akurat** untuk kunjungan
pertama: dua library CDN (anime.js, canvas-confetti) diambil sekali lalu di-cache.
Untuk benar-benar nol request eksternal: turunkan keduanya ke `vendor/`, tambahkan ke
`SHELL` di `sw.js`, dan hapus baris `CDN`. Keduanya hanya untuk motion — boleh hilang.

## Keamanan

`checkCode` menjalankan jawaban murid lewat `new Function` di **browser murid sendiri**
(sandbox = tab user, bukan server). Untuk tool lokal satu-user ini aman; kalau nanti
multi-user daring, pindah ke Web Worker + timeout + iframe sandbox.

## Atribusi

- Kode & maskot Bibit: © 2026 Grayzeus (MIT, lihat `LICENSE`).
- Bentuk kepala kanvas (Bibit) adalah **port orisinal** bahasa desain
  [robot-heads](https://github.com/fayazara/robot-heads) — MIT © Fayaz Ahmed (@fayazara).
  Tidak ada kode/aset pihak ketiga yang disalin.

## Checklist launch

- [x] `node test.js` hijau (72/72 → 84/84 setelah fitur ingat-30-hari)
- [x] Tiket PWA: icon 192/512 (maskable), manifest, service worker
- [x] `robots.txt`, `404.html`, `LICENSE`, `README.md`
- [x] Meta sosial dasar (og/twitter, tanpa og:image agar tak 404)
- [x] **SRI** ditambahkan ke 2 script CDN (lihat bagian SRI)
- [ ] **Lighthouse** (mobile & desktop): Performance / **A11y ≥ AA** / Best-practices / PWA — 0 critical
- [ ] Rendering dites di HP asli (kanvas head 60 fps, service worker, install PWA)
- [ ] Nilai kontras teks sekunder dicek (ink 10.7:1 OK; verifikasi `--muted` #5c6670 & tombol hijau ≥ 3:1)
- [ ] `og:image` final (1200×630) + `<link rel="canonical">` setelah domain tetap
- [x] Diputuskan: turunkan CDN ke `vendor/` untuk offline 100% (opsional, graceful degrade sudah ada)
- [x] Repo public-ready: `.gitignore` (node_modules, .impeccable, .playwright-mcp, log, OS junk), `package.json` ber-metadata, `CONTRIBUTING.md`, `LICENSE` MIT — **tinggal `git init` + push** (chef yang commit)
