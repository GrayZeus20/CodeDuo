# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pelajar Indonesia pemula — siswa/mahasiswa yang baru mulai ngoding, belajar mandiri lewat HP (app dirancang portrait-first, PWA).

## Product Purpose

Belajar pemrograman dasar (HTML, CSS, JavaScript, TypeScript, SQL, dll.) dengan gaya Duolingo: pelajaran pendek, latihan interaktif, progres tersimpan. Sukses = pemula menyelesaikan jalur belajar dan benar-benar bisa menulis kode dasar, tanpa perlu akun atau koneksi internet.

## Positioning

Tiga mekanisme yang tidak bisa di-copy tetangga sekaligus:

1. **Fully offline, no account** — PWA jalan tanpa server dan tanpa login; seluruh progres di localStorage. Belajar kapan saja tanpa internet dan tanpa daftar akun.
2. **Personal path per user** — urutan topik di-shuffle dengan seed per user; tiap orang punya jalur belajar unik, bukan kurikulum linear baku.
3. **Latihan nge-code beneran** — bukan cuma pilihan ganda: ada tipe soal editor (HTML preview, JS/SQL code check) yang mengecek kode asli.
4. **Teman yang hidup** — Bibit bukan hiasan: model ekspresi on-device (softmax + SGD) memilih wajahnya tiap interaksi, dan planner otonom memberinya idle-life, baris proaktif, serta hint bertimer — ia hadir walau kamu tidak menyentuhnya.

## Operating Context

- Dipakai mandiri di HP, sesi belajar singkat harian (streak, hearts, jalan berjenjang Dasar→Menengah→Advance mendukung ritme ini). Unit harian = **1 step (10 soal)** atau **sesi ingat** (≤10 soal jatuh tempo).
- Instal sebagai PWA standalone (manifest + service worker sudah ada).
- Konten kurikulum hidup di `content.js` (saat ini 10 topik × 6 pelajaran = 60 pelajaran berjenjang — 2 Dasar / 2 Menengah / 2 Advance per topik — **tepat 10 soal per tier**, total **300 soal** berjenis `mc | fill | code | preview | arrange`) dan boleh diedit/ditambah bebas. Tiap topik dipotong jadi **3 step + 3 ujian** (satu ujian per tier, soal tier yang sama diacak ulang). Topik **"Blok Web"** khusus mengajarkan *fungsi* tiap blok (HTML vs CSS vs JS, server/DB/SQL, API/JSON) — bukan cuma sintaksnya. Pool soal **terbatas** (bukan generatif), jadi tiap step punya ujung nyata: begitu semua tuntas, muncul end-state "semua step tuntas".
- **Ingatan ≥30 hari (spaced repetition):** tiap soal dijadwalkan ulang dengan interval membesar (1→2→4→8→16→32 hari) di `localStorage codeduo_srs_v1`; kartu "Ingat" menampilkan soal jatuh tempo → retensi jangka panjang lewat mengingat ulang (testing effect), bukan baca ulang.
- Self-test checker berjalan via Node (`node test.js`).

## Capabilities and Constraints

- **Konstrain tetap:** fully offline, bahasa Indonesia untuk seluruh UI & konten, progres lokal (localStorage) tanpa backend.
- **Konten kurikulum bebas diubah** — struktur topik/pelajaran/soal tidak dikunci.
- Gamifikasi berjalan saat ini: 3 hearts, streak harian, jalan belajar berjenjang (Dasar/Menengah/Advance), mute SFX dengan konfirmasi audio dua arah — termasuk kemampuan aktif, bukan kommitmen merek.
- Mesin checker: normalisasi jawaban (case, smart-quote, spasi, titik-koma), sandbox `new Function` untuk soal kode (ponytail: upgrade path = Worker + timeout kalau nanti multi-user).
- Library motion (anime.js, canvas-confetti) dibundel Vite — **nol CDN runtime**, offline 100% setelah kunjungan pertama (service worker meng-cache shell + aset).
- Stack: **React 19 + Vite 5** (SPA, hash routing); engine dipisah dari DOM di `src/store.js` (headless, Node-testable), perilaku otonom Bibit di `src/companion.js` (murni), render kepala pakai paket `robot-heads`. Static hosting apa pun (Cloudflare Pages, dst.).

## Evidence on Hand

- Kode lengkap berjalan: `index.html` (entry Vite), `src/` (React + store + companion), `content/*.js` + `content.js`, `checkers.js`, `srs.js`, `robot.js`, `sfx.js`, `public/sw.js`, `public/manifest.json`.
- Ikon PWA: `public/icon-192.png`, `public/icon-512.png`.
- Test checker: `test.js` (happy + edge + error path) + `test-companion.mjs` (planner otonom).
- Tidak ada testimoni, testimonial, press, data pengguna, atau aset merek di luar ikon & tema hijau `#58cc02` yang ada di manifest — kerjaan berikutnya dilarang mengarang bukti sosial.

## Product Principles

1. Pemula dulu — setiap soal dan layar harus bisa diselesaikan orang yang baru mulai ngoding.
2. Offline-first itu janji produk — fitur apa pun tidak boleh butuh server atau login untuk nilai utamanya.
3. Progres tidak pernah hilang — localStorage adalah sumber kebenaran; corrupt data di-backup, bukan dibuang diam-diam.
4. Latihan menulis kode nyata dipertahankan — soal pilihan ganda hanyalah pendahulu, bukan inti.
5. Konten kurikulum murah diubah — struktur data soal harus tetap mudah diedit tanpa menyentuh engine.
