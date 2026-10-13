# Kontribusi — CodeDuo

Terima kasih mau ikut nambah. Proyek ini **offline-first**: React + Vite untuk UI,
Node untuk tes. Mesin logika wajib tetap **murni & Node-testable** (tanpa DOM).

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # hasil ke dist/
npm run preview    # cek hasil build
```

## Tes (wajib hijau sebelum PR)

```bash
node test.js              # 84 tes: checker, kurikulum, step & SRS, wajah/animasi head, model ekspresi
node test-companion.mjs   # planner otonom Bibit (idle-life / proaktif / hint)
npm run build             # gate build: 0 error
```

Target: `84 passed, 0 failed` (test.js) + semua hijau (test-companion) + build sukses.
Tes baru **tidak boleh** menurunkan jumlah yang lulus.

## Arsitektur (jangan dilanggar)

- **Engine tanpa DOM.** State & aksi hanya di `src/store.js`; React membaca via
  `useSyncExternalStore` (`src/useStore.js`). Efek (SFX/motion/DOM) hanya di komponen.
- **Perilaku otonom murni.** `src/companion.js` = state machine tanpa DOM → bisa diuji Node.
  Tambah perilaku = tambah event di sana + tesnya, bukan di komponen.
- **Modul mesin dual-mode.** `content/*.js`, `content.js`, `checkers.js`, `srs.js`,
  `robot.js`, `sfx.js` punya `export {…}` (Vite/ESM **&** `test.js`/`test-companion.mjs`) **dan**
  `module.exports` (Node `require()` legacy). Jangan hapus salah satu.
- **Reuse first.** Cek dulu file yang sudah ada — jangan buat file paralel / `_v2` / duplikat logika.

## Menambah / mengubah soal

Konten **dipecah per blok** biar mudah dirawat — satu file per rumpun topik:

| File | Topik |
|------|-------|
| `content/html.js` | HTML, CSS |
| `content/js.js` | JavaScript, Struktur Data |
| `content/sql.js` | SQL, Database, API |
| `content/ts.js` | TypeScript, REST API |
| `content/web.js` | Blok Web (peta fungsi tiap blok) |

`content.js` = **barrel** yang menyusun semua blok jadi `CURRICULUM` + helper murni
(`stepsForTopic`, `questionKey`, `resolveQuestion`, …). Engine **tidak** perlu disentuh untuk mengubah soal.

**Aturan konten (dijaga tes):**
- Tiap topik = **6 pelajaran**, **2 per tier** (`Dasar`/`Menengah`/`Advance`).
- Tiap tier = **tepat 10 soal** → 1 step = 10 soal. Jadi tiap topik = 30 soal.
- Total kurikulum = **300 soal** (diuji `test.js`).
- Tipe soal: `mc | fill | code | preview | arrange`. Tiap soal wajib punya `q` + `explain`.
- `mc` → `options` (≥2) + `a` (index valid). `fill` → `accept` + `code` memuat `___`.
  `code` → `fn` + `tests` + `solution` (solusi referensi **wajib lolos** `checkCode`).
  `preview` → `lang` (`html`/`css`) + `must`. `arrange` → `blocks` (≥2).

Tambah soal → jalankan `node test.js`. Kalau jumlah per tier jadi ≠ 10, tes akan menolak.

## Gaya kode

- Bahasa Indonesia untuk UI & konten; komentar ringkas.
- Murni & deterministik kalau bisa (biar Node-testable tanpa DOM) — lihat `src/companion.js`, `srs.js`, `robot.js`.
- Jangan inline `<script>`/`<style>` di HTML — JS di `src/`, CSS di `public/styles.css`.
- Tanpa dependensi runtime baru tanpa diskusi. Render kepala = `robot-heads` (MIT, dipakai apa adanya).

## Commit

- Satu commit = satu perubahan bermakna. Pesan jelas, imperatif.
- Sebelum commit: `node test.js` + `node test-companion.mjs` hijau + `npm run build` sukses.

## Lisensi

Dengan berkontribusi, kamu setuju hasil kerjamu dirilis di bawah **MIT** (lihat `LICENSE`).
