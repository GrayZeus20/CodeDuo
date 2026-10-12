/* CodeDuo — blok konten: Blok Web (peta fungsi tiap blok).
 * 1 topik (web) × 6 pelajaran (2 per tier). Total 30 soal.
 * Topik meta: mengajarkan FUNGSI tiap blok (HTML/CSS/JS/server/DB/API), bukan cuma sintaks.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * Dual-mode: browser pakai global CONTENT_WEB; Node pakai module.exports.
 */
'use strict';

const CONTENT_WEB = [
  {
    id: 'web', name: 'Blok Web', icon: '🧩', color: '#0ea5e9',
    desc: 'Apa fungsi tiap blok pembangun website',
    lessons: [
      {
        id: 'web-1', level: 'Dasar', title: 'Blok & Perannya', exercises: [
          { type: 'mc', q: 'Yang bertugas MEMBANGUN STRUKTUR & isi halaman (teks, gambar, tombol):',
            options: ['CSS', 'HTML', 'SQL', 'JavaScript'], a: 1,
            explain: 'HTML = kerangka dan isi konten halaman.' },
          { type: 'mc', q: 'Yang bertugas MENGATUR TAMPILAN — warna, ukuran, jarak, tata letak:',
            options: ['HTML', 'CSS', 'JavaScript', 'JSON'], a: 1,
            explain: 'CSS = lapisan gaya: warna, ukuran, jarak, posisi.' },
          { type: 'mc', q: 'Yang membuat halaman BEREAKSI — klik, hitung, ambil data:',
            options: ['CSS', 'HTML', 'JavaScript', 'SQL'], a: 2,
            explain: 'JavaScript = logika dan interaktivitas.' },
          { type: 'arrange', q: 'Urutkan perjalanan satu request dari klik sampai terlihat:',
            blocks: ['Browser minta halaman (request)', 'Server balas berkas (response)', 'Browser susun HTML jadi DOM', 'CSS & JS memoles dan menghidupkan'],
            explain: 'Request → response → render → interaksi.' },
          { type: 'fill', q: 'Lengkapi analogi blok: HTML = tulang, CSS = ___, JavaScript = otot:',
            code: 'HTML = tulang, CSS = ___, JavaScript = otot',
            accept: ['kulit'], explain: 'CSS = kulit/penampilan, JS = otot yang menggerakkan.' },
        ],
      },
      {
        id: 'web-2', level: 'Dasar', title: 'Divisi Tugas Tiga Bahasa', exercises: [
          { type: 'mc', q: 'Menambahkan tombol baru ke halaman — bagian mana yang MENANDAI bahwa itu tombol?',
            options: ['HTML (<button>)', 'CSS', 'server', 'database'], a: 0,
            explain: 'HTML menandai elemen; CSS baru mempercantiknya.' },
          { type: 'mc', q: 'Kamu ingin tombol itu jadi hijau dan membulat. Kamu ubah:',
            options: ['HTML', 'CSS', 'JavaScript', 'SQL'], a: 1,
            explain: 'Warna dan bentuk = tugas CSS.' },
          { type: 'mc', q: 'Kamu ingin tombol itu menampilkan "Halo!" saat diklik. Kamu tambah:',
            options: ['JavaScript', 'CSS', 'HTML', 'JSON'], a: 0,
            explain: 'Perilaku saat diklik = logika JavaScript.' },
          { type: 'fill', q: 'Baris HTML ini memanggil blok gaya dari luar — lengkapi ekstensinya:',
            code: '<link rel="stylesheet" href="styles.___">',
            accept: ['css'], explain: 'Berkas .css memuat aturan tampilan.' },
          { type: 'mc', q: 'Berkas .js biasanya dipasang di HTML lewat:',
            options: ['<script src="app.js"></script>', '<style src="app.js">', '<link href="app.js">', '<js src="app.js">'], a: 0,
            explain: '<script src=...> memuat JavaScript ke halaman.' },
        ],
      },
      {
        id: 'web-3', level: 'Menengah', title: 'Memecah Fitur Jadi Blok', exercises: [
          { type: 'mc', q: 'Fitur "ganti tema gelap/terang" — yang menyimpan ATURAN WARNA tiap tema:',
            options: ['CSS', 'HTML', 'database', 'REST'], a: 0,
            explain: 'Aturan warna tiap tema hidup di CSS (mis. variabel --bg).' },
          { type: 'mc', q: 'Yang menyimpan PILIHAN tema milik user setelah browser ditutup:',
            options: ['CSS', 'localStorage atau server (JS)', 'tag <p>', 'font'], a: 1,
            explain: 'Pilihan disimpan di localStorage atau server, bukan di HTML/CSS.' },
          { type: 'mc', q: 'Yang mengurus klik tombol "ganti tema" lalu mengganti kelas di <body>:',
            options: ['HTML', 'CSS', 'JavaScript', 'SQL'], a: 2,
            explain: 'JS menangkap klik dan mengubah kelas pemicu CSS.' },
          { type: 'arrange', q: 'Urutkan blok untuk fitur "daftar akun":',
            blocks: ['Form di HTML', 'Validasi di JavaScript', 'Kirim lewat API (fetch)', 'Simpan ke database', 'Tampilkan pesan balikan'],
            explain: 'Tampilan (HTML) -> logika (JS) -> transport (API) -> simpan (DB) -> umpan balik.' },
          { type: 'mc', q: 'Memecah fitur jadi blok berguna karena:',
            options: ['File jadi lebih besar', 'Tiap blok satu tanggung jawab -> gampang dirawat dan di-debug', 'Wajib oleh browser', 'Menghapus kebutuhan CSS'], a: 1,
            explain: 'Satu blok satu tanggung jawab = kode rapi dan mudah dilacak.' },
        ],
      },
      {
        id: 'web-4', level: 'Menengah', title: 'Blok Perancang Tampilan', exercises: [
          { type: 'mc', q: 'CSS framework yang menyediakan class siap pakai (mis. bg-blue-500) disebut:',
            options: ['Tailwind', 'Node.js', 'MongoDB', 'REST'], a: 0,
            explain: 'Tailwind = utility-first CSS framework.' },
          { type: 'mc', q: 'SASS/SCSS berguna untuk:',
            options: ['Bahasa database', 'CSS dengan variabel, nesting, mixin -> di-compile jadi CSS', 'Bahasa server', 'Format API'], a: 1,
            explain: 'SASS = preprocessor CSS; hasil akhirnya tetap CSS biasa.' },
          { type: 'mc', q: 'Kelebihan CSS di berkas terpisah (bukan inline di tiap tag):',
            options: ['Gaya bisa dipakai ulang dan diubah dari satu tempat', 'Lebih berat', 'Tidak bisa responsif', 'Menghapus HTML'], a: 0,
            explain: 'Satu stylesheet mengatur banyak halaman sekaligus.' },
          { type: 'fill', q: 'Tailwind: class ___ membuat sudut kartu membulat:',
            code: '<div class="___">...</div>',
            accept: ['rounded'], explain: 'rounded = border-radius di Tailwind.' },
          { type: 'mc', q: 'Responsive artinya tampilan:',
            options: ['Sama di semua ukuran layar', 'Menyesuaikan lebar layar (HP/tablet/desktop)', 'Selalu gelap', 'Tanpa warna'], a: 1,
            explain: 'CSS responsif menyesuaikan tata letak ke ukuran layar.' },
        ],
      },
      {
        id: 'web-5', level: 'Advance', title: 'Blok Server & Data', exercises: [
          { type: 'mc', q: 'Blok yang berjalan di SERVER, bukan di browser pengunjung:',
            options: ['CSS', 'Node.js / backend', 'HTML', 'font'], a: 1,
            explain: 'Backend berjalan di server dan melayani banyak pengunjung.' },
          { type: 'mc', q: 'Tugas utama database:',
            options: ['Membuat warna', 'Menyimpan dan mengambil data secara permanen', 'Menggambar tombol', 'Menulis HTML'], a: 1,
            explain: 'DB = gudang data yang tahan mati (persist).' },
          { type: 'mc', q: 'SQL adalah:',
            options: ['Bahasa untuk bertanya dan mengubah data di database relasional', 'Framework CSS', 'Alat desain', 'Browser'], a: 0,
            explain: 'SQL = bahasa query untuk database tabel.' },
          { type: 'arrange', q: 'Urutkan alur menyimpan nilai kuis:',
            blocks: ['Browser kirim jawaban via fetch', 'Server terima request', 'Server validasi', 'Server tulis ke database', 'Balas status ke browser'],
            explain: 'Client -> server -> validasi -> DB -> balasan.' },
          { type: 'mc', q: 'Perbedaan utama HTML dan SQL:',
            options: ['HTML menyusun tampilan; SQL mengelola data', 'Keduanya bahasa database', 'HTML untuk server, SQL untuk browser', 'Sama saja'], a: 0,
            explain: 'HTML = tampilan (client); SQL = data (database).' },
        ],
      },
      {
        id: 'web-6', level: 'Advance', title: 'Alur End-to-End', exercises: [
          { type: 'mc', q: 'API itu ibarat:',
            options: ['Jembatan yang menghubungkan client ke server/data', 'Bahasa tampilan', 'Berkas gambar', 'Jenis database'], a: 0,
            explain: 'API = perantara client dengan server.' },
          { type: 'mc', q: 'Format data yang paling umum dipakai API web saat ini:',
            options: ['JSON', 'MP3', 'DOCX', 'EXE'], a: 0,
            explain: 'JSON ringan dan mudah dibaca mesin maupun manusia.' },
          { type: 'mc', q: 'Mengapa frontend dan backend dipisah (decoupled)?',
            options: ['Agar tiap sisi bisa dikembangkan atau diganti sendiri via API', 'Karena wajib', 'Supaya tidak bisa diuji', 'Untuk menghapus database'], a: 0,
            explain: 'Kontrak API yang stabil membuat frontend dan backend bebas berevolusi.' },
          { type: 'arrange', q: 'Urutkan perjalanan membuka halaman berisi daftar artikel:',
            blocks: ['Browser buka URL', 'Server balas HTML/CSS/JS', 'JS panggil API (fetch)', 'API balas JSON', 'JS render daftar ke halaman'],
            explain: 'Muat app -> ambil data -> tampilkan.' },
          { type: 'fill', q: 'Lengkapi: data bolak-balik lewat API, biasanya berformat ___:',
            code: '... API mengirim data berformat ___ ke browser.',
            accept: ['json'], explain: 'JSON = format pertukaran data standar di web.' },
        ],
      },
    ],
  },
];

if (typeof module !== 'undefined' && module.exports) module.exports = CONTENT_WEB;
