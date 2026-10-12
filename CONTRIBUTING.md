# Kontribusi — CodeDuo

Terima kasih mau ikut nambah. Proyek ini **statis, offline, tanpa framework, tanpa build step** —
HTML/CSS/JS vanilla + Node cuma untuk tes. Jaga tetap begitu.

## Menjalankan

```bash
python -m http.server 8080     # lalu buka http://localhost:8080
# atau: npm start
```

Service worker butuh `http`/`https` (bukan `file://`).

## Tes (wajib hijau sebelum PR)

```bash
node test.js       # 84 tes: checker, kurikulum, step & SRS, wajah/animasi head, model ekspresi
node sri.js        # hanya kalau versi CDN motion berubah (butuh koneksi sekali)
```

Target: `84 passed, 0 failed`. Tes baru **tidak boleh** menurunkan jumlah yang lulus.

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
- Murni & deterministik kalau bisa (biar Node-testable tanpa DOM) — lihat `srs.js`, `robot.js`.
- Tanpa dependensi runtime baru tanpa diskusi. CDN motion (anime.js, canvas-confetti) dikunci SRI.
- Jangan commit `node_modules/` atau `.impeccable/` (sudah di `.gitignore`).

## Commit

- Satu commit = satu perubahan bermakna. Pesan jelas, imperatif.
- Sebelum commit: `node test.js` hijau.

## Lisensi

Dengan berkontribusi, kamu setuju hasil kerjamu dirilis di bawah **MIT** (lihat `LICENSE`).
