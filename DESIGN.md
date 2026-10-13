---
name: CodeDuo
description: Belajar pemrograman gaya Duolingo — hijau, tactile, gamifikasi penuh
colors:
  green: "#58cc02"
  green-dark: "#46a302"
  red: "#ff4b4b"
  red-dark: "#ea2b2b"
  blue: "#1cb0f6"
  gold: "#ffc800"
  purple: "#8b5cf6"
  ink: "#3c3c3c"
  muted: "#5c6670"
  line: "#e5e5e5"
  bg: "#ffffff"
  bg-soft: "#f7f9fb"
typography:
  display:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "2.6rem"
    fontWeight: 900
    lineHeight: 1.1
    letterSpacing: "-0.5px"
  headline:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "1.6rem"
    fontWeight: 800
    lineHeight: 1.2
  title:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 800
    lineHeight: 1.35
  body:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif"
    fontSize: "0.8rem"
    fontWeight: 800
    letterSpacing: "1px"
  mono:
    fontFamily: "Consolas, 'Cascadia Mono', monospace"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.55
rounded:
  block: "10px"
  field: "12px"
  button: "14px"
  card: "16px"
  pill: "999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "12px"
  lg: "16px"
  xl: "20px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.bg}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-primary-hover:
    backgroundColor: "{colors.green-dark}"
  button-danger:
    backgroundColor: "{colors.red}"
    textColor: "{colors.bg}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  button-ghost:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.button}"
    padding: "13px 22px"
  chip:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card:
    backgroundColor: "{colors.bg}"
    rounded: "{rounded.card}"
    padding: "16px"
  option:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "14px 16px"
  input:
    backgroundColor: "{colors.bg}"
    textColor: "{colors.ink}"
    rounded: "{rounded.field}"
    padding: "12px 14px"
---

# Design System: CodeDuo

## Overview

**Creative North Star: "The Sprout Lab"**

CodeDuo terasa seperti taman semai kecil yang tumbuh di depan mata: hijau sebagai warna utama, kartu dan node sebagai pottan yang naik satu per satu, node berubah emas saat benih tumbuh. Tapi ini taman yang produktif — di dalamnya ada bengkel. Soal kode punya editor sungguhan, terminal warna gelap, checker yang benar-benar jalan. Dua karakter itu hidup bersama: bagian gamifikasi terasa juicy dan playful, bagian kerja terasa rapi dan tepercaya.

Densitasnya sedang dan lapang. Satu kolom maks 520px, napas antar kartu lebar, tidak ada dua hal penting bersaing dalam satu baris. Setiap layar punya satu aksi utama yang jelas; tombol besar, chunky, dan berteriak "tekan aku". Kartu dan input lebih tenang — border 2px, sudut lembut — supaya mata beristirahat di antara aksi.

Gerak adalah bagian bahasa: background gradient melayang perlahan 28 detik, node membesar saat hover, tombol turun 2px saat ditekan, `prefers-reduced-motion` dimatikan seluruhnya bila diminta sistem. Tidak ada animasi yang sekadar hiasan — semua gerak adalah balasan atas sentuhan atau kemajuan.

**Key Characteristics:**
- Hijau sebagai identitas sekaligus penanda "benar/kemajuan"
- Tombol tactile ber-shadow bawah (aka "press down"), kartu tenang ber-border
- Satu kolom 520px di HP, shell melebar (kartu 2-up) di desktop ≥1024px, portrait-first PWA
- Maskot robot **Bibit** — kepala kanvas `robot-heads` (4 bentuk, 9 state, glossy 3D) + maskot SVG (6 mood); teman belajar yang hidup, bereaksi, dan bergerak sendiri
- Gamifikasi literal: hati, streak, node jalan belajar berjenjang (Dasar → Menengah → Advance)
- Monospace hanya untuk kode; teks UI selalu sans-serif sistem
- Gerak sebagai balasan, bukan dekorasi

## Colors

Paletnya adalah hijau satu nada untuk identitas dan kemajuan, dengan satu aksen fungsional per peran (benar, salah, fokus, pahala). Warna muncul dengan hemat — latar mayoritas putih dan abu sangat muda.

### Primary
- **Hijau (#58cc02):** warna merek dan warna "kemajuan". Tombol utama, node pelajaran terbuka, bar progres, border kartu yang selesai. Ini warna paling sering muncul dan tidak boleh dipakai untuk hal yang bukan pilihan/kemajuan.
- **Hijau Tua (#46a302):** bayangan bawah tombol hijau (`box-shadow: 0 4px 0`) dan teks judul merek. Memberi kesan tombol "turun" dan bisa ditekan.

### Secondary
- **Biru (#1cb0f6):** warna fokus. Outline `:focus-visible` di semua kontrol, border opsi yang terpilih, dan titik soal yang sedang dikerjakan. Biru muncul tepat di tempat perhatian bergerak.

### Tertiary
- **Merah (#ff4b4b):** kesalahan dan hati (nyawa). Tombol danger, border atas panel feedback salah, indikator hati.
- **Merah Tua (#ea2b2b):** bayangan bawah tombol danger.
- **Emas (#ffc800):** pahala. Node yang sudah selesai dan ledakan hasil pelajaran (`result__burst`). Emas = "kamu tuntas sesuatu".
- **Ungu (#8b5cf6):** aksen langka, disimpan untuk aksen tingkat/level bila nanti dibutuhkan; saat ini muncul sangat jarang dan boleh tidak dipakai.

### Neutral
- **Tinta (#3c3c3c):** teks utama dan default kontrol. Hampir-hitam hangat, tidak pernah `#000`.
- **Redam (#5c6670):** teks sekunder,label, deskripsi, dan state non-aktif. Dipakai aktif untuk hirarki, bukan sekadar penghias.
- **Garis (#e5e5e5):** border 2px kartu, input, opsi, dan chip; juga baris pemisah topbar. Garis inilah yang biasanya digantikan warna saat elemen jadi aktif.
- **Latar (#ffffff):** dasar semua kartu, tombol ghost, input, panel terangkat.
- **Latar Lembut (#f7f9fb):** badge streak, kartu terkunci, dan blok netral sekunder.

### Named Rules
**The Green Means Progress Rule.** Hijau hanya untuk merek, aksi utama, dan kemajuan (jawaban benar, kartu selesai, node terbuka). Jangan pakai hijau sebagai hiasan, latar dekoratif, atau warna teks sekunder. Kelangkaan relatifnya yang membuatnya berarti.

**The One Accent Per Role Rule.** Merah = salah/nyawa, biru = fokus/terpilih, emas = pahala. Satu peran, satu warna. Tidak ada warna yang merangkap dua peran dalam satu layar.

## Typography

**Display Font:** Segoe UI, system-ui, -apple-system, sans-serif
**Body Font:** Segoe UI, system-ui, -apple-system, sans-serif
**Label/Mono Font:** Consolas, Cascadia Mono, monospace

**Character:** Satu keluarga sans-serif sistem menangani seluruh UI, diolah lewat berat di sana-sini: 400 untuk tubuh, 600 untuk opsi, 700 untuk judul kecil, 800 untuk aksi dan merek, 900 untuk angka besar. Hasilnya ringan di mesin (tanpa font unduhan, cocok untuk PWA offline) tapi tetap punya nada. Monospace hadir hanya untuk kode dan blok soal — pemisah visual yang jelas antara "teks untuk dibaca" dan "kode untuk ditulis".

### Hierarchy
- **Display (900, 2.6rem):** ledakan hasil pelajaran (`result__burst`). Satu-satunya tempat bobot 900 dan ukuran sebesar ini.
- **Headline (800, 1.6rem):** judul layar hasil dan heading utama layar; juga sapaan home (`1.5rem`).
- **Title (800, 1.25rem–1.3rem):** pertanyaan pelajaran (`lesson__q`), judul topik, nama kartu topik.
- **Body (400, 1rem, line-height 1.5):** teks soal dan isi kartu. Opsi jawaban naik ke bobot 600 karena harus terasa bisa diklik.
- **Label (800, 0.8rem, letter-spacing 1px, uppercase):** tier kartu, meta pelajaran, heading seksi home ("Jalan Belajar"). Semua label seksi di-uppercase dengan jarak huruf, bukan dengan warna berbeda.
- **Mono (400, 0.92rem, line-height 1.55):** blok kode, placeholder isian (`___`), input kode, blok susun (`arr-block`).

### Named Rules
**The Mono Means Code Rule.** Monospace hanya untuk yang benar-benar kode atau jawaban yang diketik. Jangan pakai mono untuk label, tombol, atau angka statistik.

**The Weight Is the Hierarchy Rule.** Hierarki dibangun dari berat dan ukuran, bukan dari font kedua atau warna tambahan. Sebelum menambah elemen visual baru, naikkan dulu bobot atau ukurannya.

## Layout

Model spasialnya **satu kolom terkunci maks 520px**, di-center, portrait-first. Topbar dan check-bar fixed/sticky mengikuti lebar kolom yang sama, jadi konten terasa seperti lembaran/ponsel, bukan kanvas web lebar.

- `#app` padding 20px atas, 16px samping, dan 120px bawah (ruang untuk check-bar fixed + safe-area di iPhone).
- Jarak vertikal antar blok layar: `gap: 14px` (`.screen`), dengan bagian internal memakai 12px (`.lesson__body`) atau 8px untuk daftar rapat.
- Kecepatan napas: elemen berisi teks (kartu, opsi, blok kode) punya padding 14–16px, cukup lega untuk modal tapi tidak boros.
- Puncak layar terpusat (`screen--center`) diangkat `padding-top: 8vh` — ruang udara untuk state kosong/hasil sebelum aksi utama.
- Dua breakpoint: `max-width: 380px` (HP kecil — ikon mengecil 1.7rem, pertanyaan 1.1rem, statistik membungkus) dan `min-width: 1024px` (desktop — lihat Desktop Shell).

### Tier Ladder (Dasar → Menengah → Advance) + ujian tiap tier
Jalan belajar tiap topik punya **6 node** — 3 **step** + 3 **ujian**: Step 1 Dasar → Ujian Dasar → Step 2 Menengah → Ujian Menengah → Step 3 Advance → Ujian Advanced. Tiap step = **tepat 10 soal**; tiap ujian = 10 soal tier yang sama (diacak ulang, tanpa bocoran urutan). Tiap tahap dirender sebagai `.tier` berisi head (`Dasar/Menengah/Advance` + hitungan `selesai/total`) dan `<ol class="lesson-path">` zig-zag miliknya sendiri.
- `.tier__head` memakai `border-left: 4px solid var(--green)` sebagai penanda tahap; tidak ada warna baru — hijau yang sama, bentuk yang berbeda.
- **Ujian = badge kuning** (`.node--exam`, emas `--gold`): emas = "kamu tuntas sesuatu", jadi ujian memakai bahasa pahala yang sama dengan node selesai — beda bentuk, bukan warna baru.
- Unlock berurutan: satu node terbuka hanya bila node sebelumnya tuntas. Ujian tier terbuka setelah step tier itu selesai.
- Topik card home menampilkan `n/3 step · ujian tiap tier`; header topic menampilkan `3 step · 10 soal/step · ujian tiap tier`.
- Semua soal **terbatas** (**300 total**, 10 topik × 3 step × 10 soal): begitu tiap step tuntas, muncul end-state "Semua step tuntas!" — tidak ada soal generatif tanpa ujung.
- **Kartu "Ingat" (home)** = pintu ulangan berjarak (SRS): kartu `.recall` (`.card--due` bila ada yang jatuh tempo, border emas) menampilkan jumlah soal jatuh tempo + tombol `Ulangi N soal`. Menutup loop retensi ≥30 hari tanpa menambah layar baru.

### Desktop Shell (≥1024px)
Mobile tetap satu-kolom 520px; desktop memperlebar jadi shell ber-center maks 1040px (1180px di ≥1400px) tanpa menghilangkan satu-kolom saat belajar:
- **Home** menjadi grid 2 kolom untuk kartu topik; hero robot, banner, statistik, dan tombol profil melebar penuh (`grid-column: 1/-1`).
- **Jalur belajar (topic)** tetap satu kolom, zig-zag kiri-kanan lebih lega (gap 22px); tiap `.tier` menambah pemisah tahap tanpa memperlebar kolom.
- **Pelajaran (lesson)** tetap kolom baca sempit (maks 620px, 680px di ≥1400px) supaya soal tak pernah melebar tak nyaman — check-bar & feedback mengikuti lebar yang sama.
- **Bibit** naik jadi companion floating di kanan-bawah (`position: fixed`) di semua lebar — incl. mobile (bubble dibatasi `min(62vw, 240px)`, di pelajaran diangkat di atas bar Cek/Lanjut).
- Topbar & #app berbagi lebar shell yang sama agar terasa satu lembar, bukan canvass penuh.

### Named Rules
**The One Column Rule.** Di lebar HP, selalu satu kolom 520px. Di desktop home boleh 2 kolom kartu topik, tapi layar pelajaran (baca soal + editor) tetap satu kolom sempit.

**The Tier Ladder Rule.** Tiap topik wajib 6 langkah berjenjang (2 Dasar / 2 Menengah / 2 Advance) dan urutan bukanya berurutan global. Tahap dibedakan oleh struktur + border-left hijau, bukan oleh warna baru — supaya "hijau = kemajuan" tetap utuh.

## Elevation & Depth

Sistem ini **hybrid**: tonjolan datang dari shadow bawah yang keras (bukan blur lembut), digabung dengan lapisan tonal untuk permukaan fixed yang mengambang. Ini bagian dari kesan tactile — tombol dan node terlihat seperti tuts fisik yang berdiri di atas "lantai", bukan kartu melayang di udara.

- Elemen statis (kartu, input, opsi, chip) memakai `--shadow: 0 2px 0 rgba(0,0,0,0.08)` — skirt tipis 2px yang hampir rata, hanya penanda tepi bawah.
- Elemen actionable besar (tombol, node) memakai shadow berwarna solid: `0 4px 0` hijau-tua (primer), `0 4px 0` merah-tua (danger), `0 5px 0` untuk node. Saat `:active`, elemen turun 2px (`translateY(2px)`) — menekan tombol benar-benar menekan.
- Permukaan mengambang fixed (topbar, check-bar, feedback) memakai `rgba(255,255,255,0.86–0.94)` + `backdrop-filter: blur(8px)` — translucent, bukan shadow besar. Kedalaman di sini dari transparansi, bukan dari bayangan.
- Tidak ada shadow besar/lembut ber-blur untuk konten inline. Kedalaman statis dijaga tetap tipis supaya konten yang tersusun rapi tetap tajam.

### Shadow Vocabulary
- **Ambient-hairline** (`0 2px 0 rgba(0, 0, 0, 0.08)`): elemen statis dan control sekunder.
- **Press-primary** (`0 4px 0 #46a302`): tombol hijau; turun 2px saat `:active`.
- **Press-danger** (`0 4px 0 #ea2b2b`): tombol merah; turun 2px saat `:active`.
- **Node-press** (`0 5px 0 #46a302` / `#d4a200` / `#e5e5e5`): node bulat jalan belajar, sesuai state terbuka/selesai/terkunci.
- **Float-glass** (`backdrop-filter: blur(8px)` + rgba putih): topbar, check-bar, feedback panel.

### Named Rules
**The Hard Shadow Rule.** Shadow yang memberi tonjolan selalu `0 Npx 0` (spread solid, tanpa blur). Blur hanya untuk `backdrop-filter` pada permukaan transparan. Jangan mencampur dua bahasa shadow di satu elemen.

**The Press Rule.** Setiap elemen yang tampak berdiri (shadow bawah) wajib turun saat ditekan (`:active` → `translateY(2px)`). Yang berdiri tapi tidak bergerak saat ditekan akan terasa mati.

## Shapes

Bahasa bentuknya **bulat lembut berjenjang**, semua sudut tumpul, tidak ada sudut tajam di UI mana pun:

- Elemen terkecil (blok susun): 10px.
- Bidang input, opsi, blok kode, preview, banner: 12px.
- Tombol: 14px.
- Kartu besar (kartu topik, kartu info): 16px (`--radius`).
- Badge, chip, bar progres, dan titik soal: pill penuh (999px).

Bundaran jadi sinyal: makin bulat → makin kecil/langsung disentuh; makin kotak-lembut → makin besar/papan informasi. Node jalan belajar adalah satu-satunya bentuk lingkaran sempurna (64px), dipakai untuk menandai langkah, bukan sekadar mengikuti tren. Panel feedback naik dari bawah dengan sudut atas membulat saja (`20px 20px 0 0`) karena menempel ke tepi bawah layar.

### Named Rules
**The No-Sharp-Corner Rule.** Tidak ada sudut 0px di UI konten. Nilai terkecil yang diizinkan adalah 10px pada blok susun terkecil.

## Components

Karakter komponennya **hybrid oleh peran**: kontrol yang disentuh (tombol, node, opsi) terasa tactile-chunky; wadah informasi (kartu, panel) terasa tenang dan rata. Momen ledakan (result, feedback) memakai bahasa yang paling playful.

### Buttons
- **Shape:** sudut 14px, tanpa border, padding 13px 22px, font-weight 800, letter-spacing 0.4px.
- **Primary:** latar hijau, teks putih, shadow `0 4px 0` hijau-tua.
- **Hover / Active:** penekanan `:active` menuruni 2px + `filter: brightness(0.95)`. Transisi 80ms transform, 120ms filter — cepat dan respontif, bukan halus-lambat.
- **Ghost:** latar putih, teks tinta, border 2px garis, shadow `0 2px 0` garis. Aksi sekunder.
- **Danger:** latar merah, teks putih, shadow `0 4px 0` merah-tua. Reset/hapus.
- **Disabled:** opacity 0.5, cursor not-allowed, tanpa efek tekan.
- **Wide:** varian `--wide` melebar 100%; dipakai untuk aksi utama di layar terpusat.

### Chips
- **Style:** latar putih, border 2px garis, pill (999px), padding 6px 12px, font-weight 700, 0.85rem.
- **State:** versi selesai (`chip--done`) hanya mengganti warna border dan teks ke hijau — tidak mengisi latar, supaya tetap ringan.

### Cards / Containers
- **Corner Style:** 16px.
- **Background:** putih; kartu terkunci memakai latar lembut (`#f7f9fb`) + opacity 0.75.
- **Shadow Strategy:** ambient-hairline tunggal (`0 2px 0`).
- **Border:** 2px `--line`; state aktif/selesai menggantinya dengan hijau (2px) — border adalah saluran state utama kartu, bukan shadow.
- **Internal Padding:** 16px.

### Inputs / Fields
- **Style:** border 2px garis, radius 12px, latar putih, padding 12px 14px. `.input` dan `.code-input` memakai monospace; `.input` tinggi normal, `.code-input` minimum 140px dan bisa di-resize vertikal.
- **Focus:** `outline: 3px solid` biru, `outline-offset: 2px` — outline tegas, bukan glow. Aturan yang sama berlaku untuk opsi, tombol, dan node.
- **Placeholder kosong:** soal isian menampilkan `___` bergaris bawah emas (`.blank-line`, dashed 2px) sebagai slot visual yang harus diisi.

### Option (soal pilihan ganda)
- **Shape:** radius 12px, border 2px, padding 14px 16px, font-weight 600, shadow `0 2px 0` garis.
- **Hover:** border berubah biru (bukan latar).
- **Selected:** border biru + latar `#e8f7fe` — pilihan terasa "terisi" tanpa kehilangan teksnya.

### Node (jalan belajar)
- Lingkaran 64px, ikon 1.4rem, font-weight 800, shadow bawah 5px.
- **Terbuka:** hijau/putih. **Selesai:** emas/`#6b4e00`. **Terkunci:** abu `--line` + teks redam, cursor not-allowed.
- Hover menaikkan `scale(1.06)` hanya untuk node yang terbuka.

### Robot Companion — "Bibit" (maskot ikonik)
Tiga wajah, satu identitas. (1) **Maskot SVG inline** (`Bib.jsx`, 6 mood) untuk topbar, home hero, dan fallback — tanpa request aset eksternal. (2) **Kepala kanvas** `<RobotHead>` dari paket [`robot-heads`](https://github.com/fayazara/robot-heads) (MIT © Fayaz Ahmed / @fayazara) sebagai companion floating: shell glossy 3D-proyeksi, lighting studio (key/fill/sky/softbox + Fresnel + rim + filmic curve), LED bloom, antena pegas teredam, 4 bentuk, 9 state. Ini **dependency runtime**, dipakai apa adanya. (3) **Maskot Bib SVG** sebagai identitas merek di topbar & hero.
- **Selalu hadir & hidup:** companion floating tampil di semua lebar dan semua rute. Dua lapis gerak: (a) **reaktif** — model ekspresi on-device memilih wajah tiap interaksi (softmax + SGD, lihat README); (b) **otonom** — `src/companion.js` memberi idle-life (wajah ambien tiap 4–9 dtk, tidur setelah 75 dtk diam), baris proaktif (45–110 dtk, maks 2/3 mnt), dan hint bertimer (>25 dtk di satu soal). Guard anti-spam: tak ada baris saat feedback/done/failed, backoff ×1.6 bila diabaikan. Tap kepala = respons.
- **Bentuk (4):** `rectangle` `square` `circle` `hexagon` — dipilih deterministik dari mood (hash FNV) → bentuk ikut berubah saat konteks berganti, jadi wajah terasa beda, bukan satu head statis.
- **Bentuk maskot SVG:** kepala kotak-lembut 76×68 (rx 22) hijau, layar wajah `--bg-soft` (rx 15), antena garis + bola emas yang berkedip. Semua sudut ≥15px — patuh No-Sharp-Corner.
- **Mood SVG (6):** `idle` `happy` `thinking` `excited` `sad` `celebrate`. Mata & mulut diganti per mood; `happy`/`celebrate` menambah pipi blush.
- **Warna:** hanya token yang ada (hijau, hijau-tua, emas, tinta, latar-lembut) + `#ff9a9a` untuk blush — robot adalah pengecualian senyap dari aturan "satu aksen per peran" karena dia makhluk, bukan kontrol UI. Head kanvas memakai hijau merek (`#58cc02`) sebagai warna shell.
- **Gerak sebagai balasan, bukan dekorasi:** kepala memakai satu animasi bersama (tidur saat tab hidden), semua mati di `prefers-reduced-motion` (pose diam). Idle-life & proaktif dijalankan timer 1 dtk yang `dt`-nya dari jam nyata → tetap akurat walau tab di-throttle.

### Topbar & Check-bar (navigation)
- Topbar sticky di atas: maskot head Bibit (34px) + merek hijau-tua 1.25rem/800 di kiri; tombol mute dan badge streak (`🔥 N`, oranye `#c2410c`) di kanan. Latar putih transparan 0.86 + blur.
- Check-bar fixed di bawah (layar pelajaran): tombol aksi utama, latar putih transparan 0.94 + blur, padding menghormati `env(safe-area-inset-bottom)`.
- Keduanya mengunci lebar shell yang sama dengan konten — bukan full-bleed.

### Feedback Panel
- Naik dari bawah (`border-radius: 20px 20px 0 0`), border atas 3px berwarna.
- **Benar:** latar `#d7ffb8`, border hijau, teks `#2d6a00`. **Salah:** latar `#ffdfe0`, border merah, teks `#8f1d1d`.
- Saat panel muncul, tubuh pelajaran diredupkan (`opacity: 0.45`) dan di-nonaktifkan (`pointer-events: none`) — panel mengambil alih, tidak bersaing.

### Progress Bar & Dots
- Bar: tinggi 10px, pill, track `--line`, isi hijau, animasi `scaleX` 0.5s dari kiri saat maju.
- Dots (di dalam pelajaran): deretan segmen sama-tinggi 10px; selesai hijau, sedang dikerjakan biru.

## Do's and Don'ts

### Do:
- **Do** bangun hierarki dari berat dan ukuran font; simpan warna untuk makna (hijau = maju, merah = salah, biru = fokus, emas = hadiah).
- **Do** beri setiap elemen yang tampak berdiri (shadow `0 Npx 0`) efek tekan `:active` turun 2px.
- **Do** pakai one column 520px untuk layar pelajaran di semua ukuran; home boleh 2-kolom kartu di desktop, tapi baca soal tetap satu kolom.
- **Do** pakai border 2px sebagai saluran state utama untuk kartu/opsi/input; shadow hanya untuk kedalaman tekan.
- **Do** pertahankan `outline: 3px solid var(--blue); outline-offset: 2px` untuk semua `:focus-visible`.
- **Do** hormati `prefers-reduced-motion` — matikan animasi background, robot, dan semua transisi saat sistem memintanya.
- **Do** pakai monospace hanya untuk kode dan jawaban yang diketik.
- **Do** jaga Bibit tetap di palet yang ada; mood-nya berubah dari state nyata (feedback/done/fail), bukan animasi acak.

### Don't:
- **Don't** pakai hijau sebagai hiasan, latar dekoratif, atau teks sekunder — hijau selalu berarti merek/maju/utama.
- **Don't** pakai shadow ber-blur besar untuk konten inline; bahasa shadow proyek ini adalah `0 Npx 0` solid.
- **Don't** tambahkan sudut tajam (0px) atau sudut di bawah 10px pada UI konten — Bibit pun ikut aturan ini.
- **Don't** melebarkan kolom soal (lesson) melebihi 680px, walau di desktop.
- **Don't** campurkan monospace ke label, tombol, atau angka statistik.
- **Don't** pakai `#000` murni — teks tetap `--ink (#3c3c3c)` atau lebih lembut.
- **Don't** tambahkan warna atau font keluarga kedua; palet dan tipografi proyek ini sengaja tetap sempit (blush Bibit `#ff9a9a` satu-satunya pengecualian, khusus makhluk).
