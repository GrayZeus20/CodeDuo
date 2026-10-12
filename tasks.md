# Tasks — CodeDuo

## Plan: siap production — pisah konten per blok soal + repo public-ready

**Permintaan:** "buat agar siap production dan pisahkan tiap soal materi blok dan lainnya agar mudah di maintenance dan buat agar repo nya bisa public hingga saya siap commit."

**Keputusan struktur (dikunci):**
1. **Split `content.js` per grup blok** (5 grup, ikut separator `/* ==== */` yang ada): `content/html.js` (html, css) · `content/js.js` (js, ds) · `content/sql.js` (sql, db, api) · `content/ts.js` (ts, rest) · `content/web.js` (web). Tiap file `module.exports` array `CONTENT_*`; `content.js` jadi **barrel** yang menyusun `CURRICULUM = [...CONTENT_HTML, ...]` + helper murni (yang sudah ada) dan tetap diekspor → `test.js`/`app.js` **tak berubah API**.
2. **Dual-mode** (browser + Node) tanpa build: tiap `content/*.js` `const CONTENT_X = [...]` + `module.exports` bila ada; `content.js` pilih require (Node) atau global `CONTENT_*` (browser). Urutan load: `content/*.js` → `content.js`.
3. **Production**: `package.json` lengkap (name/version/description/license/repository/engines/scripts/keywords); `.gitignore` root (node_modules, .impeccable, .playwright-mcp, log, OS junk); `sw.js` VERSION → `codeduo-v11`; README seksi production.
4. **Public repo**: LICENSE ✓, metadata package.json, README badge-free jujur, instruksi kontribusi ringkas, `.gitignore` bersih. Repo **tidak** di-commit (chef yang commit).

**Langkah:**
- [x] **1. `content/*.js` (5 file baru)** — tiap grup topik dipindah apa adanya (transkripsi): `html.js`=html(5)+css(5), `js.js`=js(5)+ds(5), `sql.js`=sql(5)+db(5)+api(5), `ts.js`=ts(5)+rest(5), `web.js`=web(5). Tiap file `const CONTENT_X = [...]` + `module.exports`. Files: `content/html.js`, `content/js.js`, `content/sql.js`, `content/ts.js`, `content/web.js`
- [x] **2. `content.js` (barrel)** — `collectContent()` (require di Node / global `CONTENT_*` di browser) → `CURRICULUM`; semua helper dipertahankan. Files: `content.js`
- [x] **3. `index.html`** — 5 `<script src="content/*.js" defer>` sebelum `content.js`. Files: `index.html`
- [x] **4. `sw.js`** — `SHELL` += 5 file content; `VERSION` → `codeduo-v11`. Files: `sw.js`
- [x] **5. `package.json`** — metadata lengkap (private:false, engines, scripts test/check/sri/start, files, keywords); **nol dependency** (hapus `robot-heads` yang tak dipakai runtime); `package-lock.json` dibersihkan. Files: `package.json`, `package-lock.json`
- [x] **6. `.gitignore`** — tambah `node_modules/`, `.impeccable/`, `.playwright-mcp/`, log, OS junk. Files: `.gitignore`
- [x] **7. Docs** — `README.md` (Struktur konten + Siap production & repo publik), `CONTRIBUTING.md` (aturan konten + jalur tes). Files: `README.md`, `CONTRIBUTING.md`
- [x] **8. Verify (GATE)** — `node --check` 5 blok + barrel + `node test.js` → **`84 passed, 0 failed`** ✅
  - **Audit statis (hijau):** edit-hook `node --check` lolos di 5 file baru + barrel; 10 topik ada tepat 1× (grep `id:`); **300 `type:`** total (60+60+90+60+30 = 300); 60 pelajaran (2/tier/topik); `content.js` tak ada sisa konten.
  - **Runtime run (GRAYZEUS):** `node --check content/{html,js,sql,ts,web}.js; node --check content.js; node test.js` → **`84 passed, 0 failed`** ✅ (kurikulum 10 topik/300 soal/tier=10, step & SRS, wajah/animasi head, model ekspresi — semua hijau).

## Status (plan siap-production)
SELESAI — konten dipecah 5 blok + barrel (`content.js` API utuh, engine nol perubahan), nol dependency runtime, metadata + .gitignore + docs production. **84/84 tes hijau** (gate 4/4). Repo tinggal `git init` + commit + push (chef).

## Plan: kepala Bibit setia ke robot-heads asli (grid 22×14, wajah per-state, bohlam berwarna)

**Permintaan:** "gunakan robot-heads untuk animasi bot nya" — setelah `npm i robot-heads`, paket asli (0.3.0, MIT © Fayaz Ahmed) jadi source of truth lokal (`node_modules/robot-heads/dist/index.js`, 947 baris).

**Beda port lama → asli (dipetakan dari dist):** grid LED 14×8 (nilai 0/1/2) → **22×14 float 0..1**; kolom mata 6 & 13, baris mata 5; wajah per-state pakai glif (blok mata, `^ ^`, `X X`, z naik, equaliser 12 bar, mulut 8 kolom, scan beam, progress bar); warna bohlam antena per-state (idle/speaking/sleeping krem, thinking amber, searching cyan, listening hijau, working biru, happy pink, error merah).

- [x] **1. `robot.js`** — grid `RH_COLS=22`/`RH_ROWS=14`; `_rhBlank/_rhSet` (merge-max, clamp ≤1)/`_rhRect`/`_rhGlyph` (glif `#`/`+`)/`_rhNoise` (port `Ft`)/`_rhEyes` (blok mata: kedip, lirik, mode menengadah)/`_rhFaceGrid` (pola persis `Xt`: idle, thinking 3 titik, searching beam, listening equaliser, speaking mulut, working progress, happy `^ ^`+smile, error `X X`, sleeping pejam+z). `ledMatrixFor` = `_rhFaceGrid` pose diam. `_rhFrame` + `lookX/lookY/side/closed`; `_rhDraw` gambar sel float + bloom; `_rhOverlay` dibuang (logika pindah ke grid); `RH_META` warna LED + bohlam per-state; ekspor `_rhFaceGrid`. Files: `robot.js`
- [x] **2. `test.js`** — update dimensi 8×14→14×22 + nilai float 0..1 + scan ≤22; 5 tes wajah baru (`_rhFaceGrid` dimensi/deterministik, happy `^`+smile, error/tidur z, mulut bergerak, scan bergerak) → 67→72 tes. Files: `test.js`
- [x] **3. `sw.js`** — bump `VERSION` → `codeduo-v9`. Files: `sw.js`
- [x] **4. Docs** — README bagian kepala (22×14 float, wajah per-state, bohlam per-state) + jumlah tes 72 + checklist. Files: `README.md`
- [x] **5. Verify (GATE)** — `node --check robot.js ; node --check test.js ; node test.js` → **72 passed, 0 failed**. Files: —

## Status (plan fidelity robot-heads)
SELESAI — grid 22×14 float, wajah per-state, bohlam RGB; 72/72 tes hijau (gate 4/4).


## Plan: muka Bibit beranimasi (port robot-heads, semua state hidup)

**Permintaan:** "gunakan robot-heads untuk animasi bot nya" (referensi live `?shape=square`).
**Catatan:** URL live tak bisa dibuka sekarang (Playwright/curl/WebFetch kena outage classifier yang sama) → source of truth = port offline di `robot.js` yang sudah pakai bahasa bentuk robot-heads (kotak TV + LED 14×8).

- [x] **1. `robot.js`** — mesin gerak murni `_rhFrame(state,t,seed)` (kedip/lirik/mulut/scan/progress/z/goyang deterministik) + `_rhOverlay` (berkas scan, kilau progress, titik berdenyut, huruf z) + `RH_MOTION` tempo per-state. Dulu HANYA `idle` hidup; sekarang 9 state animasi. `mountRobotHead` auto-seed = hash nama state (fase beda tiap state). Files: `robot.js`
- [x] **2. `sw.js`** — bump `VERSION` → `codeduo-v8`. Files: `sw.js`
- [x] **3. `test.js`** — 7 tes murni mesin gerak: tempo per-state, fallback, determinisme + batas nilai, idle berkedip vs happy tidak, scan bergerak, hash, warna. Files: `test.js`
- [ ] **4. Verify** — `node --check robot.js` + `node test.js` hijau (67 tes). Files: —

## Status (plan animasi head)
Kode selesai; runtime gate menunggu Grayzeus jalankan `node test.js` (classifier Bash down).

## Plan: ingat ≥30 hari — step 10 soal, ujian tiap tier (Dasar / Menengah / Advance)

**Basis literatur (spaced repetition + retrieval practice):**
- Ebbinghaus (1885), *Über das Gedächtnis* — kurva lupa eksponensial, dasar semua SRS.
- Cepeda, Pashler, Vul, Wixted & Rohrer (2006), *Psych. Bulletin* 132(3) — meta-analisis 254 studi: jeda antar-ulangan optimal ≈ 10–20% dari interval retensi (retensi 30 hari → jeda optimal ~3–6 hari, makin lama). Cepeda dkk (2008), *Psych. Science* 19(11) — "temporal ridgeline": makin jauh target retensi, makin panjang jeda optimal.
- Roediger & Karpicke (2006), *Psych. Science* 17(3) — **testing effect**: mengingat ulang (tes) mengalahkan baca ulang untuk retensi jangka panjang.
- Karpicke & Blunt (2011), *Science* 331 — retrieval practice mengalahkan elaborasi (concept mapping).
- Murre & Dros (2015), *PLoS ONE* 10(7) — replikasi & fit parametrik kurva lupa Ebbinghaus.
- Smolen, Zhang & Byrne (2016), *Nat. Rev. Neuroscience* 17 — mekanisme & dosis optimal spaced learning.
- Settles & Meeder (2016), *ACL* — Duolingo "half-life regression" (preseden SRS di app bahasa).
- **Keputusan desain dari literatur ini:** interval ulangan membesar 1→2→4→8→16→32 hari (konsisten Cepeda: jeda tumbuh, target 30+ hari); tiap sesi = **tes/ingat ulang** (Roediger–Karpicke), bukan baca.

**Keputusan struktur (dikunci):**
1. **1 step = tepat 10 soal.** Tiap topik = 3 step (satu per tier) = 30 soal; total **300 soal**.
   Rapikan 4 soal dari 302: html Dasar 12→10, js Menengah 11→10, ds Menengah 9→10 (tambah 1 soal baru).
2. **Ujian tiap tier.** Setelah satu tier selesai (2 pelajaran), muncul **ujian tier** = 10 soal (soal tier itu, diacak ulang, tanpa bocoran urutan).
3. **Ingat ≥30 hari (SRS).** Tiap soal dijadwalkan ulang dengan interval membesar; sesi "Ingat" menampilkan **10 soal jatuh tempo** → bank habis = semua soal sudah pernah & terjadwal.
4. **Step = unit progresi** (bukan pelajaran). Engine lama dipakai ulang lewat "pelajaran sintetis" per tier + per ujian (id `topik--tier` dan `topik--tier--test`).

**Langkah:**
- [x] **1. `content.js`** — tier dirapikan jadi 10 tepat (hapus 2 soal html Dasar, 1 soal js Menengah; tambah 1 soal arrange ds Menengah); helper murni `stepsForTopic(topic)` (3 step + 3 ujian × 10), `allQuestionIds`, `questionKey`, `resolveQuestion`, `TIER_ORDER`, `STEP_SIZE = 10`. Total 302 → **300**. Kunci soal global `"topicId|lessonId#idx"`. Files: `content.js`
- [x] **2. `srs.js` (baru, murni)** — `SRS_INTERVALS = [1,2,4,8,16,32]`, `schedule`, `dueItems`, `dueCount`, `gradeFromResult`, `isDue`, `toJSON`/`fromJSON` (tolak korup), `isScheduled`, `intervalFor`. Persistensi `localStorage codeduo_srs_v1` (owner `app.js`). Files: `srs.js`
- [x] **3. `app.js`** — `startNode` (step/ujian via `topicNodes`), `startReview` (≤10 soal due), `sessionExercises`/`currentKey`; SRS hook di `onAnswerCheck`; event `STEP_START`/`TIER_TEST`/`REVIEW_START`; render topik = 3 step + 3 ujian (badge kuning); rute `#/review`; migrasi progres lama (lessonId → step tier bila 2 pelajaran tier tuntas); `loadSrs`/`saveSrs`/`srsDump`. Files: `app.js`
- [x] **4. `styles.css`** — `.node--exam` (ujian kuning) + kartu `.recall`/`.card--due`. Files: `styles.css`
- [x] **5. `sw.js`** — `VERSION` → `codeduo-v10` + `srs.js` di SHELL; `index.html` muat `srs.js`. Files: `sw.js`, `index.html`
- [x] **6. `test.js`** — tes tier = 10 & total 300; `stepsForTopic` menutup semua soal; SRS (interval membesar, due terpilih, salah→reset, murni, korup ditolak, round-trip). 72 → 84 tes. Files: `test.js`
- [x] **7. Docs** — `README.md` (bagian "Ingat ≥30 hari" + daftar 8 jurnal), `DESIGN.md` (tier ladder + ujian + kartu Ingat), `PRODUCT.md` (step/ujian/SRS). Files: `README.md`, `DESIGN.md`, `PRODUCT.md`
- [x] **8. Verify** — `node --check content.js srs.js app.js test.js` + `node test.js`. Files: `srs.js`
  - **Runtime run #1 (GRAYZEUS, bash):** `81 passed, 3 failed` — semua 3 di SRS.
  - **Akar:** `schedule()` menghitung `box = min(MAX, max(0, prevBox)+1)`; soal baru (prevBox=-1) → box 1 (due +2 hari), padahal model ingin sukses pertama mendarat di **kotak 0** (due +1 hari, Leitner sukses-1 = interval terpendek). Test mengekspektasi `s.a.box===0`.
  - **Fix:** `box = good ? Math.min(SRS_MAX_BOX, prevBox + 1) : 0;` (soal baru ≡ kotak -1; prevBox hanya -1 bila entri absen). Semua konsumen lain aman (tak ada aritmetika kotak di app.js; cek dueItems pakai `due`, bukan `box`).
  - **Runtime run #2 (GRAYZEUS):** `cd C:\laragon\www\CodeDuo; node --check content.js; node --check srs.js; node --check robot.js; node --check checkers.js; node --check sfx.js; node --check app.js; node --check test.js; node test.js` → **`84 passed, 0 failed`** ✅ (semua 3 SRS hijau setelah fix 1 baris). GATE 4/4.

## Status (plan ingat-30-hari)
SELESAI — 30 step (3/topik × 10 soal) + ujian tiap tier + SRS ≥30 hari; **84/84 tes hijau** (gate 4/4). Fix: `schedule()` soal baru → kotak 0 (due +1 hari).

## Plan: muka Bibit berubah TIAP interaksi — model ekspresi (ML on-device, online SGD)

- [x] **1. `robot.js`** — "expression model": softmax regression (multinomial logistic) murni + SGD online, tanpa lib, offline. Fitur dari sinyal interaksi (benar/salah, nyawa, progres, lesson/tap/nav/pick, streak), kelas = 9 state wajah robot-heads. `exprFeatures`, `exprLabelIndex` (label reward), `createExpressionModel`, `restoreExpressionModel` (tolak JSON korup), `exprLearn` (SGD), `exprProbs`, `pickExpression` (sampling suhu + anti-ulang + eksplorasi 12%), `stateToMood`. Files: `robot.js`
- [x] **2. `app.js`** — glue: `loadExpression`/`saveExpression` (localStorage `codeduo_expr_v1`), `learnExpression` (train 1 langkah, idempoten per sinyal), event `INTERACTION` + `BUDDY_TAP` di registry, hook tiap interaksi (rute, mulai soal, jawab, lanjut, tuntas, pilih opsi, susun blok, tap kepala), `updateBuddy` pakai `buddyFace` (setState pada head hidup = ganti muka segera), `buddyDump` bocorkan model + probs (SERT State). Files: `app.js`
- [x] **3. `styles.css`** — `.buddy__head` pop tetap; tak ada perubahan perlu (muka "ganti" tetap kelihatan via pop). Files: `styles.css`
- [x] **4. `sw.js`** — bump `VERSION` → `codeduo-v7`. Files: `sw.js`
- [x] **5. `test.js`** — 14 tes murni model: fitur deterministik/clamp/firstTry-fast, label valid & memetakan, probs seragam+normal, SGD menurunkan loss + klasifikasi benar vs salah, bobot finite 2000 langkah, `pickExpression` valid + anti-ulang, restore tolak korup + round-trip, `stateToMood` → total 60 tes. Files: `test.js`
- [x] **6. Docs** — `README.md` (bagian "Muka Bibit belajar": softmax+SGD, 14 fitur, 9 kelas, persistensi, jujur "ML linear, bukan deep learning") + header `robot.js`/`app.js` (state manifest `codeduo_expr_v1`). Files: `README.md`, `robot.js`, `app.js`
- [ ] **7. Verify** — `node --check robot.js app.js` + `node test.js` hijau (60 tes). Files: —

## Status (plan model ekspresi)
Kode selesai; runtime gate menunggu Grayzeus jalankan `node test.js` (classifier Bash down).

## Plan: bot kurang ekspresi → wajah LED hidup (kedip/lirik/senyum/glow)

- [x] **1. `robot.js`** — pola LED lebih tebal & jelas (mata rows 1–4, senyum di idle); animasi mata: `_rhEyesBlink`, `_rhEyesGlance` (kedip tiap ~4s + lirik halus) di _rhDraw; glow LED via 1 gradien radial + `_rhRGBA` (bukan shadowBlur per-LED). Files: `robot.js`
- [x] **2. `app.js`** — default (home/topik/profil) pakai mood `happy` biar langsung ekspresif. Files: `app.js`
- [x] **3. `styles.css`** — `buddyPop` (muka "pop" tiap ganti state) + matikan di reduced-motion. Files: `styles.css`
- [x] **4. Verify** — `node --check robot.js app.js` + `node test.js` hijau (46 passed, 0 failed).

## Plan: kesiapan production & publik — fix semua blocker

- [x] **1. Aset deploy** — `LICENSE` (MIT + atribusi robot-heads), `robots.txt`, `404.html`, `README.md` (jalan/deploy/SRI/offline jujur/checklist). Files: `LICENSE`, `robots.txt`, `404.html`, `README.md`
- [x] **2. `index.html`** — meta sosial (og/twitter, tanpa og:image), `referrerpolicy="no-referrer"` + `crossorigin` di 2 script CDN, `color-scheme`. Files: `index.html`
- [x] **3. `sw.js`** — bump `VERSION` → `codeduo-v6`. Files: `sw.js`
- [x] **4. SRI** — `sri.js` jalan: 2/2 tag ketempel. anime `sha384-fXdIufVb…`, confetti `sha384-sPwMflxq…` (confetti tercocok dengan hash resmi jsdelivr → alatnya terbukti benar). Files: `index.html`, `sri.js`
- [ ] **5. Verifikasi live** — Lighthouse a11y/performance, render HP asli (Playwright/agm mati). Files: —
- [x] **6. Verify** — `node --check robot.js app.js` + `node test.js` hijau (46 passed, 0 failed).

## Plan: topik "Blok Web" — pelajaran apa fungsi tiap blok (HTML/CSS/JS/DB/…)

- [x] **1. `content.js`** — topik baru `web` ("Blok Web", 🧩, 6 pelajaran Dasar→Advance, 30 soal) yang mengajarkan FUNGSI tiap blok: client/server & tiga bahasa inti, divisi tugas HTML vs CSS vs JS, memecah fitur ke blok, blok perancang tampilan (CSS/Tailwind/SASS), sisi server & data (Node/DB/SQL), dan alur end-to-end (API/JSON). Files: `content.js`
- [x] **2. `app.js`** — migrasi path: `ensurePath()` sinkronkan `state.path` tersimpan dgn `CURRICULUM` (tambah topik baru, buang id usang) via `syncPath()` + panggil di `init()`. Files: `app.js`, `content.js`
- [x] **3. `sw.js`** — bump `VERSION` → `codeduo-v5`. Files: `sw.js`
- [x] **4. `test.js`** — 10 topik, total soal → 302; tes `syncPath` (topik baru masuk di akhir, id usang dibuang, deterministik). Files: `test.js`
- [x] **5. Docs** — PRODUCT.md (9→10 topik, 54→60 pelajaran, 302 soal) + header `content.js` + DESIGN.md angka. Files: `PRODUCT.md`, `content.js`, `DESIGN.md`
- [x] **6. Verify** — `node --check content.js app.js` + `node test.js` hijau (46 passed, 0 failed).
- [x] **7. Runtime gate** — 46/46 tes hijau; 10 topik, 302 soal tervalidasi.

## Status
Topik "Blok Web" SELESAI — 10 topik, 60 pelajaran, 302 soal; migrasi `syncPath` teruji.

## Plan: robot-heads companion — selalu hadir (port kanvas LED-matrix head)

- [x] **1. Plan + attribution** — catat plan ini + lisensi MIT robot-heads. Files: `tasks.md`
- [x] **2. `robot.js`** — tambah head kanvas (TV glossy + LED matrix) hasil port desain robot-heads: `ROBOT_STATES`, `stateFromMood`, `ledMatrixFor` (murni, Node-testable), `mountRobotHead` (DOM, rAF bersama, reduced-motion pause). Pertahankan API lama (`robotSVG`/`robotSay`/`robotReact`). Fallback ke SVG kalau canvas tak ada. Files: `robot.js`
- [x] **3. `app.js`** — companion mount di SEMUA rute (home/topic/lesson/profile) lewat satu `updateBuddy()`; handle head di-destroy tiap render ulang (no leak); tap-to-talk; bubble tetap `robotSay`. Files: `app.js`
- [x] **4. `styles.css`** — `.buddy` tampil di semua lebar (mobile kompak, tak nabrak check-bar sticky), desktop seperti semula; kanvas head responsif. Files: `styles.css`
- [x] **5. `sw.js`** — bump `VERSION` → `codeduo-v4` (aset JS berubah, cache-first bisa basi). Files: `sw.js`
- [x] **6. `test.js`** — tes murni: `ROBOT_STATES` lengkap, `stateFromMood` menutup semua mood, `ledMatrixFor` deterministik + dimensi valid, fallback mood tak dikenal. Files: `test.js`
- [x] **7. Docs** — atribusi MIT (© Fayaz Ahmed) di header `robot.js` + seksi DESIGN.md. Files: `robot.js`, `DESIGN.md`
- [x] **8. Verify** — `node --check robot.js app.js` + `node test.js` hijau (41 passed, 0 failed).

## Status
Companion robot-heads SELESAI — head kanvas hadir di semua rute & semua lebar. 41/41 tes hijau.

## Plan: tier expansion — many steps per Dasar / Menengah / Advance (2 lessons each), questions finite

- [x] **1. Rebuild `content.js`** — 9 topik × 6 pelajaran (Dasar 2 / Menengah 2 / Advance 2) = 54 pelajaran; tiap pelajaran punya field `level`; 272 soal. Files: `content.js`
- [x] **2. Tier-grouped path (`app.js`)** — ganti `LESSON_LEVELS` → `TIERS`; `renderTopic` merender heading tier + progres per tier, unlock tetap berurutan global. Files: `app.js`
- [x] **3. "Soal habis" end state (`app.js`)** — banner home saat semua pelajaran tuntas menampilkan jumlah pelajaran habis. Files: `app.js`
- [x] **4. CSS tier** — `.tier`, `.tier__head`, `.tier__count`. Files: `styles.css`
- [x] **5. Tests (`test.js`)** — ganti asersi "3 pelajaran/topik" → 6 pelajaran/topik + 2 per tier + level valid; total soal → 272. Files: `test.js`
- [x] **6. Cache bump (`sw.js`)** — `VERSION = codeduo-v3`. Files: `sw.js`
- [x] **7. Design truth** — tier di DESIGN.md + design.json + PRODUCT.md; XP dihapus dari semua doc. Files: `DESIGN.md`, `.impeccable/design.json`, `PRODUCT.md`
- [x] **8. XP purge** — hapus XP dari state/session/render/UI + sisa copy (confirm dialog, Bibit line). Files: `app.js`, `robot.js`
- [x] **9. Verify** — `node --check` + `node test.js` hijau.

## Status
Kode selesai + runtime gate hijau (41/41 tes).

---

# Tasks — CodeDuo: deepscan + robot companion + desktop/mobile (selesai)

- [x] robot.js (Bibit), icon.svg, index.html, app.js, styles.css, sw.js (`codeduo-v2`), manifest.json, test.js, DESIGN.md
- [~] Runtime gate: `node --check` + `node test.js` — blocked by classifier outage; static verification green
