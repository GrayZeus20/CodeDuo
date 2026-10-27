/* CodeDuo — blok konten: HTML · CSS.
 * 2 topik (html, css) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 610 soal (305 per topik).
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_HTML = [
  {
    "id": "html",
    "name": "HTML",
    "icon": "🏗️",
    "color": "#e44d26",
    "desc": "Kerangka setiap halaman web",
    "lessons": [
      {
        "id": "html-1",
        "level": "Dasar",
        "title": "Struktur Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen yang berisi konten yang terlihat oleh pengunjung:",
            "options": [
              "<head>",
              "<body>",
              "<meta>",
              "<title>"
            ],
            "a": 1,
            "explain": "<body> memuat semua konten yang tampil di layar."
          },
          {
            "type": "fill",
            "q": "Lengkapi doctype HTML5:",
            "code": "___\n<html>\n  <head></head>\n  <body></body>\n</html>",
            "accept": [
              "<!doctype html>",
              "<!DOCTYPE html>"
            ],
            "explain": "Doctype memberi tahu browser ini dokumen HTML5."
          },
          {
            "type": "mc",
            "q": "Tag yang WAJIB ada di dalam <head>:",
            "options": [
              "<h1>",
              "<title>",
              "<img>",
              "<button>"
            ],
            "a": 1,
            "explain": "<title> = judul tab/jendela browser, wajib di head."
          },
          {
            "type": "fill",
            "q": "Lengkapi meta charset agar teks UTF-8 (emoji aman):",
            "code": "<meta ___=\"utf-8\">",
            "accept": [
              "charset"
            ],
            "explain": "charset=utf-8 menangani semua karakter, termasuk emoji."
          },
          {
            "type": "mc",
            "q": "Fungsi <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">:",
            "options": [
              "Mengatur tampilan mobile agar responsif",
              "Mengganti judul halaman",
              "Menghubungkan database",
              "Mempercepat server"
            ],
            "a": 0,
            "explain": "Viewport meta = dasar responsive design di HP."
          },
          {
            "type": "mc",
            "q": "Tag penutup paragraf dalam HTML adalah:",
            "options": [
              "</p>",
              "<p/>",
              "<endp>",
              "<close p>"
            ],
            "a": 0,
            "explain": "</p> adalah tag penutup paragraf standar."
          },
          {
            "type": "fill",
            "q": "Lengkapi tag judul utama HTML:\n<___>Selamat Datang</___>",
            "code": "<___>Selamat Datang</___>",
            "accept": [
              "h1"
            ],
            "explain": "h1 adalah judul tingkat tertinggi."
          },
          {
            "type": "arrange",
            "q": "Susun struktur HTML minimal:",
            "blocks": [
              "<!doctype html>",
              "<html>",
              "<head><title>Web</title></head>",
              "<body><p>Halo</p></body>",
              "</html>"
            ],
            "explain": "Struktur HTML standar diawali doctype, html, head, dan body."
          },
          {
            "type": "mc",
            "q": "Elemen untuk membuat teks miring (emphasis):",
            "options": [
              "<i> atau <em>",
              "<italic>",
              "<slant>",
              "<oblique>"
            ],
            "a": 0,
            "explain": "<em> dan <i> digunakan untuk memiringkan teks."
          },
          {
            "type": "fill",
            "q": "Lengkapi atribut gambar:\n<img ___=\"foto.jpg\" alt=\"Foto\">",
            "code": "<img ___=\"foto.jpg\" alt=\"Foto\">",
            "accept": [
              "src"
            ],
            "explain": "src (source) menentukan sumber file gambar."
          }
        ]
      },
      {
        "id": "html-2",
        "level": "Dasar",
        "title": "Teks, Link & Gambar",
        "exercises": [
          {
            "type": "mc",
            "q": "Heading paling besar / paling penting untuk SEO:",
            "options": [
              "<h6>",
              "<h3>",
              "<h1>",
              "<header>"
            ],
            "a": 2,
            "explain": "<h1> adalah heading utama — biasanya satu per halaman."
          },
          {
            "type": "fill",
            "q": "Buat link ke https://example.com:",
            "code": "<a ___=\"https://example.com\">Kunjungi</a>",
            "accept": [
              "href"
            ],
            "explain": "href menentukan tujuan link."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat <h1>Halo Dunia</h1> dan paragraf berisi teks \"Belajar HTML\":",
            "starter": "<!-- tulis HTML di sini -->\n",
            "must": [
              {
                "t": "selector",
                "v": "h1"
              },
              {
                "t": "text",
                "v": "Halo Dunia"
              },
              {
                "t": "text",
                "v": "Belajar HTML"
              }
            ],
            "explain": "h1 untuk judul, <p> untuk paragraf."
          },
          {
            "type": "mc",
            "q": "Fungsi atribut alt pada <img>:",
            "options": [
              "Mengganti src gambar",
              "Deskripsi gambar bila gagal tampil / untuk screen reader",
              "Mengatur ukuran gambar",
              "Menambah efek zoom"
            ],
            "a": 1,
            "explain": "alt = alternatif teks, penting untuk aksesibilitas & SEO."
          },
          {
            "type": "mc",
            "q": "Daftar bernomor urut (1, 2, 3...) memakai:",
            "options": [
              "<ul>",
              "<ol>",
              "<list>",
              "<li>"
            ],
            "a": 1,
            "explain": "<ol> ordered list; <ul> tanpa nomor; <li> itemnya."
          },
          {
            "type": "mc",
            "q": "Elemen untuk membuat baris baru tanpa paragraf baru:",
            "options": [
              "<br>",
              "<hr>",
              "<break>",
              "<newline>"
            ],
            "a": 0,
            "explain": "<br> (line break) membuat baris baru."
          },
          {
            "type": "fill",
            "q": "Buat garis horizontal pembatas:\n<___>",
            "code": "<___>",
            "accept": [
              "hr",
              "hr/"
            ],
            "explain": "<hr> (horizontal rule) membuat garis pembatas."
          },
          {
            "type": "arrange",
            "q": "Susun link ke Google:",
            "blocks": [
              "<a",
              "href=\"https://google.com\"",
              "target=\"_blank\">",
              "Buka Google",
              "</a>"
            ],
            "explain": "Link dimulai tag <a>, atribut href, target, teks, dan ditutup </a>."
          },
          {
            "type": "mc",
            "q": "Atribut target=\"_blank\" pada link berfungsi untuk:",
            "options": [
              "Membuka link di tab/jendela baru",
              "Menutup tab saat ini",
              "Mendownload file otomatis",
              "Menghubungkan email"
            ],
            "a": 0,
            "explain": "_blank membuka halaman tujuan di tab browser baru."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat paragraf berisi teks \"Belajar Web\":",
            "starter": "<p>\n",
            "must": [
              {
                "t": "selector",
                "v": "p"
              },
              {
                "t": "text",
                "v": "Belajar Web"
              }
            ],
            "explain": "<p> digunakan untuk paragraf."
          }
        ]
      },
      {
        "id": "html-3",
        "level": "Dasar",
        "title": "Heading & Paragraf Semantik",
        "exercises": [
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h1> dibanding <h2>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 0,
            "explain": "h1 memiliki hirarki lebih tinggi daripada h2."
          },
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h2> dibanding <h3>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 0,
            "explain": "h2 memiliki hirarki lebih tinggi daripada h3."
          },
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h3> dibanding <h4>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 0,
            "explain": "h3 memiliki hirarki lebih tinggi daripada h4."
          },
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h4> dibanding <h5>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 0,
            "explain": "h4 memiliki hirarki lebih tinggi daripada h5."
          },
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h5> dibanding <h6>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 0,
            "explain": "h5 memiliki hirarki lebih tinggi daripada h6."
          },
          {
            "type": "mc",
            "q": "Tingkat kepentingan heading <h6> dibanding <h6>:",
            "options": [
              "Lebih tinggi / lebih penting",
              "Sama penting",
              "Lebih rendah",
              "Tidak ada bedanya"
            ],
            "a": 1,
            "explain": "Keduanya heading tingkat 6."
          },
          {
            "type": "fill",
            "q": "Lengkapi heading tingkat 2:\n<___>Sub Judul</___>",
            "code": "<___>Sub Judul</___>",
            "accept": [
              "h2"
            ],
            "explain": "h2 adalah heading tingkat kedua."
          },
          {
            "type": "fill",
            "q": "Lengkapi heading tingkat 3:\n<___>Bagian Kecil</___>",
            "code": "<___>Bagian Kecil</___>",
            "accept": [
              "h3"
            ],
            "explain": "h3 adalah heading tingkat ketiga."
          },
          {
            "type": "arrange",
            "q": "Susun hirarki heading yang benar:",
            "blocks": [
              "<h1>Judul Artikel</h1>",
              "<h2>Sub Bagian</h2>",
              "<h3>Poin Penting</h3>"
            ],
            "explain": "Hirarki heading harus berurutan dari h1 ke h2 lalu h3."
          },
          {
            "type": "mc",
            "q": "Berapa jumlah tag <h1> yang ideal per halaman untuk SEO?",
            "options": [
              "Satu <h1> per halaman",
              "Tiga <h1>",
              "Sepuluh <h1>",
              "Tidak boleh ada <h1>"
            ],
            "a": 0,
            "explain": "Satu <h1> per halaman adalah rekomendasi utama SEO untuk judul topik."
          }
        ]
      },
      {
        "id": "html-4",
        "level": "Dasar",
        "title": "Link & Navigasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Protokol link untuk membuka aplikasi klien surel (email) pengguna:",
            "options": [
              "mailto:",
              "emailto:",
              "sendto:",
              "mail:"
            ],
            "a": 0,
            "explain": "mailto: membuka aplikasi klien email pengguna."
          },
          {
            "type": "fill",
            "q": "Buat link email:\n<a href=\"___:halo@code.com\">Hubungi Kami</a>",
            "code": "<a href=\"___:halo@code.com\">Hubungi Kami</a>",
            "accept": [
              "mailto"
            ],
            "explain": "mailto: mengarahkan link ke aplikasi email."
          },
          {
            "type": "mc",
            "q": "Protokol link untuk nomor telepon seluler:",
            "options": [
              "tel:",
              "call:",
              "phone:",
              "dial:"
            ],
            "a": 0,
            "explain": "tel: memicu panggilan telepon pada perangkat HP."
          },
          {
            "type": "fill",
            "q": "Lengkapi protokol tautan yang membuka aplikasi panggilan:",
            "code": "<a href=\"___:08123456789\">Telepon</a>",
            "accept": [
              "tel"
            ],
            "explain": "tel: adalah skema URI untuk nomor telepon."
          },
          {
            "type": "mc",
            "q": "Link internal ke elemen dengan id=\"profil\" ditulis dengan:",
            "options": [
              "href=\"#profil\"",
              "href=\"@profil\"",
              "href=\"/profil\"",
              "href=\"id:profil\""
            ],
            "a": 0,
            "explain": "Tanda pagar (#) merujuk ke elemen ber-id dalam halaman yang sama."
          },
          {
            "type": "fill",
            "q": "Lengkapi href untuk melompat ke elemen yang ber-id \"puncak\" di halaman ini:",
            "code": "<a href=\"___\">Lihat puncak</a>",
            "accept": [
              "#puncak",
              "puncak",
              "#top",
              "top",
              "#atas",
              "atas"
            ],
            "explain": "Nama id diletakkan setelah simbol #."
          },
          {
            "type": "arrange",
            "q": "Susun link telepon:",
            "blocks": [
              "<a",
              "href=\"tel:+62811\"",
              ">",
              "Hubungi CS",
              "</a>"
            ],
            "explain": "Urutan tag link telepon yang benar."
          },
          {
            "type": "mc",
            "q": "Atribut pada link yang memaksa file tersimpan ke perangkat, bukan dibuka di tab:",
            "options": [
              "download",
              "save",
              "file",
              "load"
            ],
            "a": 0,
            "explain": "Atribut download menginstruksikan browser mengunduh file."
          },
          {
            "type": "fill",
            "q": "Lengkapi agar link langsung mengunduh file:\n<a href=\"ebook.pdf\" ___>Unduh Buku</a>",
            "code": "<a href=\"ebook.pdf\" ___>Unduh Buku</a>",
            "accept": [
              "download"
            ],
            "explain": "download adalah boolean atribut HTML."
          },
          {
            "type": "mc",
            "q": "Apakah teks di dalam tag <a> bisa berisi elemen gambar <img>?",
            "options": [
              "Bisa, membuat gambar menjadi dapat diklik",
              "Tidak bisa, harus teks saja",
              "Hanya bisa di HTML lama",
              "Hanya di HP"
            ],
            "a": 0,
            "explain": "Menempatkan <img> di dalam <a> membuat gambar berfungsi sebagai link."
          }
        ]
      },
      {
        "id": "html-5",
        "level": "Dasar",
        "title": "Format Teks & Penekanan",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen semantik untuk teks tebal dengan makna penting:",
            "options": [
              "<strong>",
              "<b>",
              "<bold>",
              "<heavy>"
            ],
            "a": 0,
            "explain": "<strong> menandai teks penting semantik; <b> hanya visual tebal."
          },
          {
            "type": "mc",
            "q": "Elemen untuk teks yang dicoret (dihapus/tidak berlaku):",
            "options": [
              "<s> atau <del>",
              "<strikeout>",
              "<remove>",
              "<cut>"
            ],
            "a": 0,
            "explain": "<del> dan <s> menampilkan coretan horizontal pada teks."
          },
          {
            "type": "fill",
            "q": "Buat teks berpangkat (superscript, contoh: m²):\nm<___>2</___>",
            "code": "m<___>2</___>",
            "accept": [
              "sup"
            ],
            "explain": "<sup> membuat teks mengapung ke atas (superscript)."
          },
          {
            "type": "fill",
            "q": "Buat teks di bawah (subscript, contoh: H₂O):\nH<___>2</___>O",
            "code": "H<___>2</___>O",
            "accept": [
              "sub"
            ],
            "explain": "<sub> membuat teks berada di bawah (subscript)."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk menandai kutipan singkat dalam kalimat:",
            "options": [
              "<q>",
              "<quote>",
              "<cite>",
              "<mark>"
            ],
            "a": 0,
            "explain": "<q> digunakan untuk kutipan sebaris (inline quote)."
          },
          {
            "type": "mc",
            "q": "Elemen untuk menyorot teks (stabilo kuning bawaan):",
            "options": [
              "<mark>",
              "<highlight>",
              "<yellow>",
              "<spot>"
            ],
            "a": 0,
            "explain": "<mark> menyoroti teks yang relevan atau dicari."
          },
          {
            "type": "fill",
            "q": "Tandai singkatan dengan penjelasan tooltip:\n<___ title=\"HyperText Markup Language\">HTML</___>",
            "code": "<___ title=\"HyperText Markup Language\">HTML</___>",
            "accept": [
              "abbr"
            ],
            "explain": "<abbr> mewakili singkatan atau akronim."
          },
          {
            "type": "arrange",
            "q": "Susun teks format formula kimia H2O:",
            "blocks": [
              "<p>",
              "H",
              "<sub>2</sub>",
              "O",
              "</p>"
            ],
            "explain": "H diikuti sub 2 lalu O."
          },
          {
            "type": "mc",
            "q": "Elemen untuk menampilkan potongan kode pemrograman sebaris:",
            "options": [
              "<code>",
              "<program>",
              "<syntax>",
              "<script>"
            ],
            "a": 0,
            "explain": "<code> memformat teks dengan font monospace seperti kode."
          },
          {
            "type": "fill",
            "q": "Tampilkan teks kode sebaris:\n<___>console.log(\"halo\")</___>",
            "code": "<___>console.log(\"halo\")</___>",
            "accept": [
              "code"
            ],
            "explain": "code memformat sintaks program."
          }
        ]
      },
      {
        "id": "html-6",
        "level": "Dasar",
        "title": "Daftar & List Terurut",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen untuk daftar berbutir (bullet points):",
            "options": [
              "<ul>",
              "<ol>",
              "<dl>",
              "<list>"
            ],
            "a": 0,
            "explain": "<ul> (unordered list) membuat daftar bertanda butir/titik."
          },
          {
            "type": "mc",
            "q": "Setiap item di dalam <ul> atau <ol> dibungkus dengan:",
            "options": [
              "<li>",
              "<it>",
              "<item>",
              "<point>"
            ],
            "a": 0,
            "explain": "<li> (list item) adalah anak dari ol atau ul."
          },
          {
            "type": "fill",
            "q": "Lengkapi daftar belanja:\n<ul>\n  <___>Apel</___>\n</ul>",
            "code": "<ul>\n  <___>Apel</___>\n</ul>",
            "accept": [
              "li"
            ],
            "explain": "li mewakili setiap item dalam list."
          },
          {
            "type": "arrange",
            "q": "Susun daftar belanja sederhana:",
            "blocks": [
              "<ul>",
              "<li>Kopi</li>",
              "<li>Gula</li>",
              "</ul>"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Daftar dimulai ul, li, li, ditutup ul."
          },
          {
            "type": "mc",
            "q": "Atribut pada <ol> untuk memulai nomor dari angka tertentu:",
            "options": [
              "start",
              "from",
              "begin",
              "index"
            ],
            "a": 0,
            "explain": "<ol start=\"5\"> memulai urutan nomor dari 5."
          },
          {
            "type": "fill",
            "q": "Mulai daftar nomor dari angka 10:\n<ol ___=\"10\">\n  <li>Sepuluh</li>\n</ol>",
            "code": "<ol ___=\"10\">\n  <li>Sepuluh</li>\n</ol>",
            "accept": [
              "start"
            ],
            "explain": "start menentukan angka awal ordered list."
          },
          {
            "type": "mc",
            "q": "Atribut pada <ol> untuk membalik urutan nomor (hitung mundur):",
            "options": [
              "reversed",
              "reverse",
              "backward",
              "desc"
            ],
            "a": 0,
            "explain": "reversed membuat urutan bernomor turun (misal 3, 2, 1)."
          },
          {
            "type": "mc",
            "q": "Daftar istilah dan definisinya (description list) memakai tag:",
            "options": [
              "<dl>",
              "<list-def>",
              "<dict>",
              "<dd>"
            ],
            "a": 0,
            "explain": "<dl> (description list) berpasangan dengan <dt> dan <dd>."
          },
          {
            "type": "fill",
            "q": "Istilah di dalam <dl> ditandai dengan:\n<___>HTML</___>\n<dd>Bahasa markup</dd>",
            "code": "<___>HTML</___>\n<dd>Bahasa markup</dd>",
            "accept": [
              "dt"
            ],
            "explain": "<dt> adalah definition term (istilah)."
          },
          {
            "type": "fill",
            "q": "Deskripsi istilah di dalam <dl> ditandai dengan:\n<dt>CSS</dt>\n<___>Gaya tampilan</___>",
            "code": "<dt>CSS</dt>\n<___>Gaya tampilan</___>",
            "accept": [
              "dd"
            ],
            "explain": "<dd> adalah definition description (penjelasan istilah)."
          }
        ]
      },
      {
        "id": "html-7",
        "level": "Dasar",
        "title": "Gambar & Media Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Apakah tag <img> memiliki tag penutup terpisah (</img>)?",
            "options": [
              "Tidak, img adalah void/self-closing element",
              "Ya, wajib ditutup </img>",
              "Tergantung browser",
              "Hanya di XHTML"
            ],
            "a": 0,
            "explain": "img tidak memiliki konten dalam dirinya sehingga tidak butuh penutup terpisah."
          },
          {
            "type": "fill",
            "q": "Tentukan lebar gambar 300 piksel langsung di HTML:\n<img src=\"pic.jpg\" ___=\"300\">",
            "code": "<img src=\"pic.jpg\" ___=\"300\">",
            "accept": [
              "width"
            ],
            "explain": "Atribut width mengatur lebar elemen img."
          },
          {
            "type": "fill",
            "q": "Tentukan tinggi gambar 200 piksel:\n<img src=\"pic.jpg\" ___=\"200\">",
            "code": "<img src=\"pic.jpg\" ___=\"200\">",
            "accept": [
              "height"
            ],
            "explain": "Atribut height mengatur tinggi gambar."
          },
          {
            "type": "mc",
            "q": "Apa fungsi atribut loading=\"lazy\" pada gambar?",
            "options": [
              "Menunda memuat gambar hingga mendekati layar (hemat kuota)",
              "Membuat gambar berputar",
              "Menghapus gambar",
              "Memperkecil ukuran file"
            ],
            "a": 0,
            "explain": "loading=\"lazy\" mengaktifkan native lazy loading pada browser."
          },
          {
            "type": "fill",
            "q": "Aktifkan lazy loading pada gambar:\n<img src=\"banner.jpg\" loading=\"___\">",
            "code": "<img src=\"banner.jpg\" loading=\"___\">",
            "accept": [
              "lazy"
            ],
            "explain": "loading=\"lazy\" menghemat bandwidth dan mempercepat LCP."
          },
          {
            "type": "arrange",
            "q": "Susun gambar lengkap dengan alt dan ukuran:",
            "blocks": [
              "<img",
              "src=\"kucing.png\"",
              "alt=\"Kucing Persia\"",
              "width=\"400\">"
            ],
            "explain": "Urutan atribut gambar yang rapi."
          },
          {
            "type": "mc",
            "q": "Format gambar modern yang didukung HTML5 dengan kompresi sangat baik:",
            "options": [
              "WebP dan AVIF",
              "BMP",
              "TIFF",
              "PCX"
            ],
            "a": 0,
            "explain": "WebP dan AVIF adalah format gambar web modern berukuran kecil."
          },
          {
            "type": "mc",
            "q": "Tag untuk menampilkan teks pra-format (mempertahankan spasi & enter):",
            "options": [
              "<pre>",
              "<raw>",
              "<format>",
              "<space>"
            ],
            "a": 0,
            "explain": "<pre> mempertahankan spasi dan baris baru persis seperti diketik."
          },
          {
            "type": "fill",
            "q": "Gunakan preformat text:\n<___>\n  Baris 1\n  Baris 2\n</___>",
            "code": "<___>\n  Baris 1\n  Baris 2\n</___>",
            "accept": [
              "pre"
            ],
            "explain": "pre mempertahankan whitespace asli."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat paragraf dengan teks tebal \"Penting\":",
            "starter": "<p><strong>Penting</strong></p>\n",
            "must": [
              {
                "t": "selector",
                "v": "strong"
              },
              {
                "t": "text",
                "v": "Penting"
              }
            ],
            "explain": "strong menebalkan teks semantik."
          }
        ]
      },
      {
        "id": "html-8",
        "level": "Dasar",
        "title": "Entitas & Simbol Khusus",
        "exercises": [
          {
            "type": "mc",
            "q": "Entitas HTML untuk simbol hak cipta (©):",
            "options": [
              "&copy;",
              "&copyright;",
              "&c;",
              "&#copy;"
            ],
            "a": 0,
            "explain": "&copy; menampilkan simbol copyright."
          },
          {
            "type": "mc",
            "q": "Entitas HTML untuk spasi yang tidak boleh terputus (non-breaking space):",
            "options": [
              "&nbsp;",
              "&space;",
              "&sp;",
              "&blank;"
            ],
            "a": 0,
            "explain": "&nbsp; (non-breaking space) mencegah teks terpisah ke baris baru."
          },
          {
            "type": "mc",
            "q": "Entitas HTML yang mewakili tanda kurung sudut pembuka:",
            "options": [
              "&lt;",
              "&less;",
              "&smaller;",
              "<"
            ],
            "a": 0,
            "explain": "&lt; singkatan dari less than, mencegah tabrakan dengan tag HTML."
          },
          {
            "type": "mc",
            "q": "Entitas HTML yang mewakili tanda kurung sudut penutup:",
            "options": [
              "&gt;",
              "&greater;",
              "&more;",
              ">"
            ],
            "a": 0,
            "explain": "&gt; singkatan dari greater than."
          },
          {
            "type": "mc",
            "q": "Entitas HTML untuk simbol ampersand (&):",
            "options": [
              "&amp;",
              "&and;",
              "&symbol;",
              "&ampersand;"
            ],
            "a": 0,
            "explain": "&amp; adalah representasi aman karakter & di HTML."
          },
          {
            "type": "fill",
            "q": "Tulis simbol hak cipta:\n___ 2026 CodeDuo",
            "code": "___ 2026 CodeDuo",
            "accept": [
              "&copy;",
              "&#169;"
            ],
            "explain": "&copy; mencetak lambang copyright."
          },
          {
            "type": "fill",
            "q": "Cetak karakter < agar tidak dibaca sebagai tag:\n___div>",
            "code": "___div>",
            "accept": [
              "&lt;",
              "&lt;div>",
              "&lt;div"
            ],
            "explain": "&lt; menampilkan karakter < di browser."
          },
          {
            "type": "arrange",
            "q": "Susun teks hak cipta:",
            "blocks": [
              "<p>",
              "&copy;",
              "2026",
              "CodeDuo",
              "</p>"
            ],
            "explain": "Kombinasi entitas di dalam paragraf."
          },
          {
            "type": "mc",
            "q": "Entitas HTML untuk tanda kutip ganda (\"):",
            "options": [
              "&quot;",
              "&quote;",
              "&double;",
              "&q;"
            ],
            "a": 0,
            "explain": "&quot; mencetak tanda kutip ganda."
          },
          {
            "type": "mc",
            "q": "Entitas HTML untuk simbol derajat (°):",
            "options": [
              "&deg;",
              "&degree;",
              "&celcius;",
              "&d;"
            ],
            "a": 0,
            "explain": "&deg; mencetak simbol derajat suhu."
          }
        ]
      },
      {
        "id": "html-9",
        "level": "Dasar",
        "title": "Komentar & Struktur Rapi",
        "exercises": [
          {
            "type": "mc",
            "q": "Sintaks komentar yang benar di HTML:",
            "options": [
              "<!-- Komentar -->",
              "// Komentar",
              "/* Komentar */",
              "# Komentar"
            ],
            "a": 0,
            "explain": "<!-- ... --> adalah format komentar HTML."
          },
          {
            "type": "mc",
            "q": "Apakah komentar HTML terlihat oleh pengunjung di halaman rendered?",
            "options": [
              "Tidak, komentar diabaikan oleh browser rendering",
              "Ya, tampil di bawah",
              "Tampil sebagai popup",
              "Hanya di console"
            ],
            "a": 0,
            "explain": "Komentar tidak ditampilkan di layar, hanya ada di view source."
          },
          {
            "type": "fill",
            "q": "Lengkapi komentar HTML:\n<!___ Ini catatan ___>",
            "code": "<!___ Ini catatan ___>",
            "accept": [
              "--"
            ],
            "explain": "Komentar HTML diawali <!-- dan diakhiri -->."
          },
          {
            "type": "arrange",
            "q": "Susun blok komentar HTML:",
            "blocks": [
              "<!--",
              "Bagian Hero Header",
              "-->"
            ],
            "explain": "Struktur komentar HTML."
          },
          {
            "type": "mc",
            "q": "Kapan waktu yang tepat menggunakan komentar HTML?",
            "options": [
              "Menjelaskan bagian layout atau tujuan kode yang kompleks",
              "Menulis password rahasia",
              "Menyimpan data pribadi pengguna",
              "Mengganti CSS"
            ],
            "a": 0,
            "explain": "Komentar berguna untuk dokumentasi struktur template."
          },
          {
            "type": "mc",
            "q": "Apakah komentar HTML membebani ukuran file jika berlebihan?",
            "options": [
              "Ya, seluruh komentar ikut terkirim dalam HTTP payload",
              "Tidak, dihapus otomatis oleh kabel jaringan",
              "Tergantung sistem operasi",
              "Tidak pernah"
            ],
            "a": 0,
            "explain": "Komentar menambah ukuran file HTML kecuali dilakukan minifikasi saat build."
          },
          {
            "type": "mc",
            "q": "Tag <hr> secara semantik HTML5 merepresentasikan:",
            "options": [
              "Perubahan tematik antar paragraf",
              "Hanya garis hiasan tanpa makna",
              "Tabel tersembunyi",
              "Garis vertikal"
            ],
            "a": 0,
            "explain": "<hr> merepresentasikan thematic break di antara topik paragraf."
          },
          {
            "type": "fill",
            "q": "Tulis teks \"Halo Dunia\" di dalam paragraf:\n<p>___</p>",
            "code": "<p>___</p>",
            "accept": [
              "Halo Dunia",
              "Halo",
              "halo dunia",
              "halo",
              "Hello World",
              "hello world"
            ],
            "explain": "Isi konten berada di antara tag pembuka dan penutup."
          },
          {
            "type": "mc",
            "q": "Elemen <span> digunakan untuk:",
            "options": [
              "Mengelompokkan teks sebaris (inline) untuk diberi gaya/id",
              "Membuat blok baru",
              "Membuat paragraf",
              "Menambah gambar"
            ],
            "a": 0,
            "explain": "<span> adalah pembungkus teks generik inline."
          },
          {
            "type": "fill",
            "q": "Bungkus teks dengan span:\n<___ class=\"badge\">Baru</___>",
            "code": "<___ class=\"badge\">Baru</___>",
            "accept": [
              "span"
            ],
            "explain": "span adalah kontainer inline tanpa makna bawaan."
          }
        ]
      },
      {
        "id": "html-10",
        "level": "Dasar",
        "title": "Review Fondasi Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Dokumen HTML5 diawali dengan deklarasi:",
            "options": [
              "<!doctype html>",
              "<html version=\"5\">",
              "<doctype html5>",
              "<html>"
            ],
            "a": 0,
            "explain": "<!doctype html> adalah doctype standar HTML5."
          },
          {
            "type": "mc",
            "q": "Di mana tag <link rel=\"stylesheet\"> CSS diletakkan secara konvensi?",
            "options": [
              "Di dalam <head>",
              "Di dalam <footer>",
              "Di luar <html>",
              "Di dalam <p>"
            ],
            "a": 0,
            "explain": "File CSS dimuat di dalam <head> agar tampilan siap sebelum render."
          },
          {
            "type": "fill",
            "q": "Tentukan judul tab browser:\n<head>\n  <___>Beranda</___>\n</head>",
            "code": "<head>\n  <___>Beranda</___>\n</head>",
            "accept": [
              "title"
            ],
            "explain": "<title> menentukan nama yang tampil di tab browser."
          },
          {
            "type": "arrange",
            "q": "Susun kerangka halaman lengkap:",
            "blocks": [
              "<!doctype html>",
              "<html>",
              "<head><title>App</title></head>",
              "<body><h1>Halo</h1></body>",
              "</html>"
            ],
            "explain": "Urutan standar dokumen web."
          },
          {
            "type": "mc",
            "q": "Atribut global id pada elemen HTML harus bersifat:",
            "options": [
              "Unik di seluruh dokumen halaman",
              "Boleh sama di setiap elemen",
              "Wajib diawali angka",
              "Hanya berupa huruf kapital"
            ],
            "a": 0,
            "explain": "id harus unik; tidak boleh ada 2 elemen dengan id yang sama dalam satu halaman."
          },
          {
            "type": "mc",
            "q": "Atribut class dapat digunakan pada:",
            "options": [
              "Banyak elemen sekaligus untuk pengelompokan",
              "Hanya satu elemen saja",
              "Hanya tag div",
              "Hanya tag body"
            ],
            "a": 0,
            "explain": "class dapat dipakai ulang pada banyak elemen untuk styling bersama."
          },
          {
            "type": "fill",
            "q": "Beri class pada elemen:\n<button ___=\"btn-primary\">Kirim</button>",
            "code": "<button ___=\"btn-primary\">Kirim</button>",
            "accept": [
              "class"
            ],
            "explain": "class mengelompokkan elemen untuk CSS dan JS."
          },
          {
            "type": "fill",
            "q": "Beri identitas unik pada elemen:\n<header ___=\"header-utama\">",
            "code": "<header ___=\"header-utama\">",
            "accept": [
              "id"
            ],
            "explain": "id memberikan penanda tunggal spesifik."
          },
          {
            "type": "mc",
            "q": "Tag <div> secara default memiliki display jenis:",
            "options": [
              "block",
              "inline",
              "inline-block",
              "table"
            ],
            "a": 0,
            "explain": "<div> adalah pembungkus generik level blok."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat heading 2 dengan teks \"Selamat Datang\":",
            "starter": "<h2>Selamat Datang</h2>\n",
            "must": [
              {
                "t": "selector",
                "v": "h2"
              },
              {
                "t": "text",
                "v": "Selamat Datang"
              }
            ],
            "explain": "h2 adalah judul level 2."
          }
        ]
      },
      {
        "id": "html-11",
        "level": "Menengah",
        "title": "Tabel & Semantik",
        "exercises": [
          {
            "type": "mc",
            "q": "Baris pada tabel HTML dibuat dengan:",
            "options": [
              "<td>",
              "<tr>",
              "<th>",
              "<col>"
            ],
            "a": 1,
            "explain": "<tr> = table row; <td> sel data; <th> sel header."
          },
          {
            "type": "fill",
            "q": "Lengkapi sel header tabel:",
            "code": "<tr>\n  <___>Nama</___>\n  <___>Umur</___>\n</tr>",
            "accept": [
              "th"
            ],
            "explain": "th = table header (tebal & rata tengah)."
          },
          {
            "type": "arrange",
            "q": "Susun tabel sederhana:",
            "blocks": [
              "<table>",
              "<tr><th>Nama</th></tr>",
              "<tr><td>Budi</td></tr>",
              "</table>"
            ],
            "explain": "table > tr (baris) > th/td (sel), ditutup </table>."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk konten utama (bukan header/footer/nav):",
            "options": [
              "<div>",
              "<main>",
              "<span>",
              "<b>"
            ],
            "a": 1,
            "explain": "<main> menandai konten utama; membantu screen reader & SEO."
          },
          {
            "type": "fill",
            "q": "Elemen semantik untuk navigasi:",
            "code": "<___>\n  <a href=\"#/\">Home</a>\n</___>",
            "accept": [
              "nav"
            ],
            "explain": "<nav> mengelompokkan tautan navigasi."
          },
          {
            "type": "mc",
            "q": "Tag untuk membungkus seluruh baris pada kepala tabel:",
            "options": [
              "<thead>",
              "<th>",
              "<caption>",
              "<top>"
            ],
            "a": 0,
            "explain": "<thead> mengelompokkan baris header tabel."
          },
          {
            "type": "fill",
            "q": "Bungkus tubuh utama tabel data:\n<___>\n  <tr><td>Data</td></tr>\n</___>",
            "code": "<___>\n  <tr><td>Data</td></tr>\n</___>",
            "accept": [
              "tbody"
            ],
            "explain": "<tbody> membungkus baris konten tabel."
          },
          {
            "type": "arrange",
            "q": "Susun struktur tabel semantik lengkap:",
            "blocks": [
              "<table>",
              "<thead><tr><th>Nama</th></tr></thead>",
              "<tbody><tr><td>Budi</td></tr></tbody>",
              "</table>"
            ],
            "explain": "table > thead > tbody."
          },
          {
            "type": "mc",
            "q": "Atribut untuk menggabungkan dua atau lebih kolom dalam sel tabel:",
            "options": [
              "colspan",
              "rowspan",
              "colmerge",
              "span"
            ],
            "a": 0,
            "explain": "colspan melebarkan sel secara horizontal melintasi kolom."
          },
          {
            "type": "fill",
            "q": "Gabungkan 2 kolom tabel:\n<td ___=\"2\">Total</td>",
            "code": "<td ___=\"2\">Total</td>",
            "accept": [
              "colspan"
            ],
            "explain": "colspan menggabungkan kolom horizontal."
          }
        ]
      },
      {
        "id": "html-12",
        "level": "Menengah",
        "title": "Formulir Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Input untuk memilih banyak opsi (multi-pilih):",
            "options": [
              "type=\"radio\"",
              "type=\"checkbox\"",
              "type=\"text\"",
              "type=\"submit\""
            ],
            "a": 1,
            "explain": "checkbox = boleh banyak; radio = pilih satu."
          },
          {
            "type": "fill",
            "q": "Dropdown pilihan memakai elemen:",
            "code": "<___ name=\"kota\">\n  <option>Jakarta</option>\n</___>",
            "accept": [
              "select"
            ],
            "explain": "<select> + <option> = dropdown."
          },
          {
            "type": "mc",
            "q": "Agar input WAJIB diisi sebelum form dikirim:",
            "options": [
              "validate=\"true\"",
              "required",
              "must",
              "obligatory"
            ],
            "a": 1,
            "explain": "Atribut required memicu validasi bawaan browser."
          },
          {
            "type": "fill",
            "q": "Teks petunjuk di dalam input sebelum diketik:",
            "code": "<input type=\"text\" ___=\"Nama lengkap\">",
            "accept": [
              "placeholder"
            ],
            "explain": "placeholder = hint abu-abu di dalam field."
          },
          {
            "type": "arrange",
            "q": "Susun grup radio yang benar (satu nama, beda value):",
            "blocks": [
              "<label><input type=\"radio\" name=\"jk\" value=\"L\">Laki-laki</label>",
              "<label><input type=\"radio\" name=\"jk\" value=\"P\">Perempuan</label>"
            ],
            "explain": "name sama → hanya satu bisa terpilih."
          },
          {
            "type": "mc",
            "q": "Atribut untuk menggabungkan baris tabel secara vertikal:",
            "options": [
              "rowspan",
              "colspan",
              "rowmerge",
              "vspan"
            ],
            "a": 0,
            "explain": "rowspan menggabungkan sel secara vertikal melintasi baris."
          },
          {
            "type": "fill",
            "q": "Gabungkan 2 baris tabel:\n<td ___=\"2\">Kategori</td>",
            "code": "<td ___=\"2\">Kategori</td>",
            "accept": [
              "rowspan"
            ],
            "explain": "rowspan melebarkan sel vertikal."
          },
          {
            "type": "arrange",
            "q": "Susun form input teks sederhana:",
            "blocks": [
              "<form action=\"/login\" method=\"POST\">",
              "<input type=\"text\" name=\"user\">",
              "<button type=\"submit\">Masuk</button>",
              "</form>"
            ],
            "explain": "Form diawali tag pembuka, input, tombol, penutup form."
          },
          {
            "type": "mc",
            "q": "Metode HTTP standar form untuk mengirim data sensitif seperti password:",
            "options": [
              "POST",
              "GET",
              "PUT",
              "FETCH"
            ],
            "a": 0,
            "explain": "POST mengirim data di body request, tidak terlihat di URL address bar."
          },
          {
            "type": "mc",
            "q": "Metode HTTP form untuk pencarian di mana parameter tampil di URL:",
            "options": [
              "GET",
              "POST",
              "SEARCH",
              "READ"
            ],
            "a": 0,
            "explain": "GET menyematkan parameter data ke query string URL."
          }
        ]
      },
      {
        "id": "html-13",
        "level": "Menengah",
        "title": "Input Types Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Input khusus untuk alamat email dengan validasi bawaan:",
            "options": [
              "type=\"email\"",
              "type=\"mail\"",
              "type=\"text\"",
              "type=\"address\""
            ],
            "a": 0,
            "explain": "type=\"email\" memvalidasi format email dan menampilkan keyboard @ di HP."
          },
          {
            "type": "fill",
            "q": "Buat input angka:\n<input type=\"___\" min=\"1\" max=\"10\">",
            "code": "<input type=\"___\" min=\"1\" max=\"10\">",
            "accept": [
              "number"
            ],
            "explain": "type=\"number\" membatasi input hanya angka."
          },
          {
            "type": "mc",
            "q": "Input untuk memilih tanggal dengan datepicker kalender:",
            "options": [
              "type=\"date\"",
              "type=\"calendar\"",
              "type=\"day\"",
              "type=\"time\""
            ],
            "a": 0,
            "explain": "type=\"date\" membuka widget pemilih tanggal asli browser."
          },
          {
            "type": "fill",
            "q": "Buat input kata sandi yang disamarkan bintang/titik:\n<input type=\"___\">",
            "code": "<input type=\"___\">",
            "accept": [
              "password"
            ],
            "explain": "type=\"password\" menyembunyikan karakter yang diketik."
          },
          {
            "type": "mc",
            "q": "Input untuk memilih warna dengan color picker:",
            "options": [
              "type=\"color\"",
              "type=\"palette\"",
              "type=\"rgb\"",
              "type=\"paint\""
            ],
            "a": 0,
            "explain": "type=\"color\" memunculkan dialog pemilih warna."
          },
          {
            "type": "fill",
            "q": "Buat input slider rentang nilai:\n<input type=\"___\" min=\"0\" max=\"100\">",
            "code": "<input type=\"___\" min=\"0\" max=\"100\">",
            "accept": [
              "range"
            ],
            "explain": "type=\"range\" menampilkan slider penggeser nilai."
          },
          {
            "type": "mc",
            "q": "Input untuk memilih file dari komputer/HP untuk diupload:",
            "options": [
              "type=\"file\"",
              "type=\"upload\"",
              "type=\"document\"",
              "type=\"attachment\""
            ],
            "a": 0,
            "explain": "type=\"file\" memicu dialog pemilihan file lokal."
          },
          {
            "type": "fill",
            "q": "Aktifkan pemilihan banyak file sekaligus:\n<input type=\"file\" ___>",
            "code": "<input type=\"file\" ___>",
            "accept": [
              "multiple"
            ],
            "explain": "Atribut multiple mengizinkan upload lebih dari 1 file."
          },
          {
            "type": "mc",
            "q": "Input untuk tombol centang on/off (kotak centang):",
            "options": [
              "type=\"checkbox\"",
              "type=\"radio\"",
              "type=\"check\"",
              "type=\"toggle\""
            ],
            "a": 0,
            "explain": "checkbox memungkinkan banyak pilihan dipilih bersamaan."
          },
          {
            "type": "fill",
            "q": "Buat input tombol radio tunggal:\n<input type=\"___\" name=\"gender\">",
            "code": "<input type=\"___\" name=\"gender\">",
            "accept": [
              "radio"
            ],
            "explain": "radio memilih satu opsi dari kelompok bernama sama."
          }
        ]
      },
      {
        "id": "html-14",
        "level": "Menengah",
        "title": "Label & Hubungan Input",
        "exercises": [
          {
            "type": "mc",
            "q": "Atribut pada <label> yang menghubungkan ke id elemen <input>:",
            "options": [
              "for",
              "to",
              "target",
              "link"
            ],
            "a": 0,
            "explain": "Atribut for pada label harus sama dengan nilai id pada input."
          },
          {
            "type": "fill",
            "q": "Hubungkan label dengan input ber-id \"email\":\n<label ___=\"email\">Email</label>\n<input id=\"email\">",
            "code": "<label ___=\"email\">Email</label>\n<input id=\"email\">",
            "accept": [
              "for"
            ],
            "explain": "for menghubungkan label ke id target."
          },
          {
            "type": "mc",
            "q": "Mengapa mengklik teks label sebaiknya mengaktifkan inputnya?",
            "options": [
              "Meningkatkan ukuran area sentuh (UX) & aksesibilitas",
              "Mempercepat internet",
              "Hanya hiasan visual",
              "Menghemat memori"
            ],
            "a": 0,
            "explain": "Label yang terhubung membuat pengguna mudah mengklik checkbox/input kecil."
          },
          {
            "type": "arrange",
            "q": "Susun label dan input terhubung:",
            "blocks": [
              "<label for=\"pass\">Sandi:</label>",
              "<input type=\"password\" id=\"pass\" name=\"password\">"
            ],
            "explain": "label for=\"pass\" berpasangan dengan input id=\"pass\"."
          },
          {
            "type": "mc",
            "q": "Cara kedua menghubungkan label ke input tanpa memakai atribut for:",
            "options": [
              "Membungkus elemen <input> langsung di dalam tag <label>",
              "Menaruh label di bawah form",
              "Memberi class yang sama",
              "Menggunakan JavaScript saja"
            ],
            "a": 0,
            "explain": "Membungkus input di dalam label secara implisit menghubungkan keduanya."
          },
          {
            "type": "fill",
            "q": "Bungkus input di dalam label:\n<label>\n  Setuju\n  <input type=\"___\">\n</label>",
            "code": "<label>\n  Setuju\n  <input type=\"___\">\n</label>",
            "accept": [
              "checkbox"
            ],
            "explain": "Checkbox di dalam label otomatis terhubung."
          },
          {
            "type": "mc",
            "q": "Elemen untuk mengelompokkan elemen formulir yang terkait:",
            "options": [
              "<fieldset>",
              "<group>",
              "<formgroup>",
              "<section>"
            ],
            "a": 0,
            "explain": "<fieldset> mengelompokkan input secara visual dan semantik."
          },
          {
            "type": "fill",
            "q": "Beri judul pada grup formulir <fieldset>:\n<fieldset>\n  <___>Data Diri</___>\n</fieldset>",
            "code": "<fieldset>\n  <___>Data Diri</___>\n</fieldset>",
            "accept": [
              "legend"
            ],
            "explain": "<legend> adalah judul teks dari <fieldset>."
          },
          {
            "type": "arrange",
            "q": "Susun grup formulir dengan legenda:",
            "blocks": [
              "<fieldset>",
              "<legend>Akun</legend>",
              "<input type=\"text\" placeholder=\"Username\">",
              "</fieldset>"
            ],
            "explain": "fieldset diawali legend lalu elemen input."
          },
          {
            "type": "mc",
            "q": "Atribut untuk membuat input hanya bisa dibaca (tidak bisa diketik):",
            "options": [
              "readonly",
              "disabled",
              "lock",
              "static"
            ],
            "a": 0,
            "explain": "readonly membuat nilai tidak dapat diedit namun tetap dikirim form."
          }
        ]
      },
      {
        "id": "html-15",
        "level": "Menengah",
        "title": "Validasi Form Native",
        "exercises": [
          {
            "type": "mc",
            "q": "Perbedaan readonly dan disabled pada input form:",
            "options": [
              "disabled tidak ikut terkirim saat form disubmit; readonly tetap terkirim",
              "Sama persis",
              "readonly tidak terlihat",
              "disabled berwarna merah"
            ],
            "a": 0,
            "explain": "Field disabled diabaikan saat pengiriman formulir HTTP."
          },
          {
            "type": "fill",
            "q": "Cegah input dari interaksi dan pengiriman:\n<input type=\"text\" ___>",
            "code": "<input type=\"text\" ___>",
            "accept": [
              "disabled"
            ],
            "explain": "disabled menonaktifkan elemen sepenuhnya."
          },
          {
            "type": "mc",
            "q": "Atribut input untuk membatasi isi teks pada pola tertentu:",
            "options": [
              "pattern",
              "regex",
              "rule",
              "validate"
            ],
            "a": 0,
            "explain": "pattern=\"[A-Z]{3}\" mengecek kecocokan format teks input."
          },
          {
            "type": "fill",
            "q": "Tentukan batas karakter minimal:",
            "code": "<input type=\"text\" ___=\"5\">",
            "accept": [
              "minlength"
            ],
            "explain": "minlength menentukan batas jumlah karakter minimum."
          },
          {
            "type": "fill",
            "q": "Tentukan batas karakter maksimal:",
            "code": "<input type=\"text\" ___=\"100\">",
            "accept": [
              "maxlength"
            ],
            "explain": "maxlength membatasi panjang input maksimum."
          },
          {
            "type": "mc",
            "q": "Atribut untuk mematikan validasi otomatis saat mengirim form:",
            "options": [
              "novalidate",
              "novalidation",
              "skip",
              "clean"
            ],
            "a": 0,
            "explain": "Atribut novalidate pada <form> menonaktifkan validasi HTML5 bawaan."
          },
          {
            "type": "mc",
            "q": "Atribut untuk mengarahkan kursor otomatis ke input saat halaman dimuat:",
            "options": [
              "autofocus",
              "focus",
              "active",
              "start"
            ],
            "a": 0,
            "explain": "autofocus memfokuskan kursor ke input seketika."
          },
          {
            "type": "fill",
            "q": "Fokuskan input secara otomatis:\n<input type=\"text\" ___>",
            "code": "<input type=\"text\" ___>",
            "accept": [
              "autofocus"
            ],
            "explain": "autofocus memberikan fokus input awal."
          },
          {
            "type": "mc",
            "q": "Atribut untuk mengontrol pengisian otomatis browser (nama, kartu, alamat):",
            "options": [
              "autocomplete",
              "autofill",
              "autosuggest",
              "fill"
            ],
            "a": 0,
            "explain": "autocomplete=\"on|off|email|name\" mengontrol fitur autofill browser."
          },
          {
            "type": "fill",
            "q": "Matikan pengisian otomatis browser:\n<input type=\"password\" autocomplete=\"___\">",
            "code": "<input type=\"password\" autocomplete=\"___\">",
            "accept": [
              "off"
            ],
            "explain": "autocomplete=\"off\" mencegah browser menyimpan histori input."
          }
        ]
      },
      {
        "id": "html-16",
        "level": "Menengah",
        "title": "Dropdown & Datalist",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen untuk membuat input teks dengan saran autocomplete (datalist):",
            "options": [
              "<datalist>",
              "<autocomplete>",
              "<suggestions>",
              "<select>"
            ],
            "a": 0,
            "explain": "<datalist> memberikan daftar saran tanpa membatasi input bebas."
          },
          {
            "type": "fill",
            "q": "Hubungkan input dengan datalist ber-id \"kota\":\n<input ___=\"kota\">",
            "code": "<input ___=\"kota\">",
            "accept": [
              "list"
            ],
            "explain": "Atribut list menghubungkan input ke id datalist."
          },
          {
            "type": "arrange",
            "q": "Susun input dengan datalist saran:",
            "blocks": [
              "<input list=\"browsers\">",
              "<datalist id=\"browsers\">",
              "<option value=\"Chrome\">",
              "<option value=\"Firefox\">",
              "</datalist>"
            ],
            "answers": [[0,1,3,2,4]],
            "explain": "input list=\"id\" merujuk ke datalist id=\"id\"."
          },
          {
            "type": "mc",
            "q": "Elemen untuk teks panjang banyak baris (multi-line textarea):",
            "options": [
              "<textarea>",
              "<textbox>",
              "<multiline>",
              "<input type=\"text\">"
            ],
            "a": 0,
            "explain": "<textarea> menampung teks beberapa baris seperti komentar."
          },
          {
            "type": "fill",
            "q": "Tentukan jumlah baris terlihat pada textarea:\n<textarea ___=\"5\"></textarea>",
            "code": "<textarea ___=\"5\"></textarea>",
            "accept": [
              "rows"
            ],
            "explain": "rows menentukan tinggi baris textarea."
          },
          {
            "type": "fill",
            "q": "Tentukan jumlah kolom lebar pada textarea:\n<textarea ___=\"40\"></textarea>",
            "code": "<textarea ___=\"40\"></textarea>",
            "accept": [
              "cols"
            ],
            "explain": "cols menentukan lebar karakter textarea."
          },
          {
            "type": "mc",
            "q": "Elemen untuk mengelompokkan opsi di dalam <select> dropdown:",
            "options": [
              "<optgroup>",
              "<group>",
              "<optionset>",
              "<category>"
            ],
            "a": 0,
            "explain": "<optgroup label=\"Kategori\"> mengelompokkan tag <option>."
          },
          {
            "type": "fill",
            "q": "Beri label pada kelompok opsi dropdown:\n<optgroup ___=\"Asia\">\n  <option>Indonesia</option>\n</optgroup>",
            "code": "<optgroup ___=\"Asia\">\n  <option>Indonesia</option>\n</optgroup>",
            "accept": [
              "label"
            ],
            "explain": "label menentukan judul kelompok optgroup."
          },
          {
            "type": "mc",
            "q": "Atribut pada <option> agar dipilih sejak halaman dimuat:",
            "options": [
              "selected",
              "checked",
              "active",
              "default"
            ],
            "a": 0,
            "explain": "selected menentukan opsi default dropdown; checked untuk radio/checkbox."
          },
          {
            "type": "fill",
            "q": "Pilih opsi secara default:\n<option value=\"id\" ___>Indonesia</option>",
            "code": "<option value=\"id\" ___>Indonesia</option>",
            "accept": [
              "selected"
            ],
            "explain": "selected menandai opsi awal terpilih."
          }
        ]
      },
      {
        "id": "html-17",
        "level": "Menengah",
        "title": "Semantik Halaman Inti",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen semantik untuk header pengantar atau navigasi atas:",
            "options": [
              "<header>",
              "<head>",
              "<top>",
              "<heading>"
            ],
            "a": 0,
            "explain": "<header> adalah semantik pembuka bagian; <head> berisi meta/link."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk bagian penutup/bawah (informasi hak cipta, kontak):",
            "options": [
              "<footer>",
              "<bottom>",
              "<foot>",
              "<end>"
            ],
            "a": 0,
            "explain": "<footer> merepresentasikan penutup dokumen atau section."
          },
          {
            "type": "fill",
            "q": "Lengkapi pembungkus navigasi utama:\n<___>\n  <a href=\"/\">Home</a>\n</___>",
            "code": "<___>\n  <a href=\"/\">Home</a>\n</___>",
            "accept": [
              "nav"
            ],
            "explain": "<nav> menandai blok navigasi penting."
          },
          {
            "type": "arrange",
            "q": "Susun kerangka semantik dasar halaman web:",
            "blocks": [
              "<header><h1>Judul</h1></header>",
              "<nav><a href=\"#/\">Menu</a></nav>",
              "<main><p>Konten</p></main>",
              "<footer>&copy; 2026</footer>"
            ],
            "explain": "header -> nav -> main -> footer."
          },
          {
            "type": "mc",
            "q": "Apakah boleh ada lebih dari satu elemen <header> dalam satu halaman?",
            "options": [
              "Boleh, misalnya satu di body dan satu di dalam <article>",
              "Tidak boleh, harus satu",
              "Hanya boleh di footer",
              "Hanya di XHTML"
            ],
            "a": 0,
            "explain": "<header> boleh dipakai di dalam <article> atau <section> sebagai pengantarnya."
          },
          {
            "type": "mc",
            "q": "Elemen <main> tidak boleh menjadi anak dari elemen:",
            "options": [
              "<article>, <aside>, <footer>, <header>, atau <nav>",
              "<body>",
              "<html>",
              "<div>"
            ],
            "a": 0,
            "explain": "<main> adalah konten hierarki teratas; tidak boleh di dalam article/nav/header."
          },
          {
            "type": "fill",
            "q": "Elemen untuk konten utama dokumen:\n<___>\n  <h1>Artikel Utama</h1>\n</___>",
            "code": "<___>\n  <h1>Artikel Utama</h1>\n</___>",
            "accept": [
              "main"
            ],
            "explain": "main membungkus konten inti."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk konten pendukung yang terpisah dari alur utama (sidebar):",
            "options": [
              "<aside>",
              "<sidebar>",
              "<panel>",
              "<extra>"
            ],
            "a": 0,
            "explain": "<aside> cocok untuk sidebar, iklan, kutipan pendukung."
          },
          {
            "type": "fill",
            "q": "Buat kolom samping (sidebar) semantik:\n<___>\n  <h3>Tautan Terkait</h3>\n</___>",
            "code": "<___>\n  <h3>Tautan Terkait</h3>\n</___>",
            "accept": [
              "aside"
            ],
            "explain": "aside menandai konten sampingan/sidebar."
          },
          {
            "type": "mc",
            "q": "Keuntungan menggunakan tag semantik dibanding <div> berlebihan:",
            "options": [
              "Mempermudah screen reader difabel, SEO lebih baik, kode lebih mudah dibaca",
              "Membuat animasi lebih cepat",
              "Mengubah warna otomatis",
              "Menghilangkan bug JS"
            ],
            "a": 0,
            "explain": "Semantik memberikan makna struktural bagi manusia, search engine, dan screen reader."
          }
        ]
      },
      {
        "id": "html-18",
        "level": "Menengah",
        "title": "Artikel, Bagian & Samping",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen semantik untuk konten mandiri yang dapat didistribusikan ulang (postingan, berita):",
            "options": [
              "<article>",
              "<section>",
              "<div>",
              "<part>"
            ],
            "a": 0,
            "explain": "<article> mandiri dan dapat berdiri sendiri (misal feed RSS, kartu postingan)."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk mengelompokkan konten berdasarkan tema/topik tertentu:",
            "options": [
              "<section>",
              "<article>",
              "<span>",
              "<box>"
            ],
            "a": 0,
            "explain": "<section> adalah bab/bagian tematik dari suatu dokumen."
          },
          {
            "type": "fill",
            "q": "Buat artikel mandiri:\n<___>\n  <h2>Judul Berita</h2>\n  <p>Isi berita...</p>\n</___>",
            "code": "<___>\n  <h2>Judul Berita</h2>\n  <p>Isi berita...</p>\n</___>",
            "accept": [
              "article"
            ],
            "explain": "article membungkus unit konten mandiri."
          },
          {
            "type": "arrange",
            "q": "Susun artikel dengan header dan bagian:",
            "blocks": [
              "<article>",
              "<header><h2>Judul</h2></header>",
              "<section><p>Isi bab 1</p></section>",
              "</article>"
            ],
            "explain": "article membungkus header dan section."
          },
          {
            "type": "mc",
            "q": "Kapan menggunakan <div> dibanding <section> atau <article>?",
            "options": [
              "Hanya saat butuh pembungkus styling/layout CSS tanpa makna semantik",
              "Di setiap elemen",
              "Jangan pernah gunakan div",
              "Hanya untuk gambar"
            ],
            "a": 0,
            "explain": "div adalah pilihan tepat murni untuk penataan layout CSS tanpa arti semantik."
          },
          {
            "type": "mc",
            "q": "Elemen untuk menampilkan kutipan panjang (blok kutipan):",
            "options": [
              "<blockquote>",
              "<q>",
              "<citation>",
              "<quote>"
            ],
            "a": 0,
            "explain": "<blockquote> menampilkan kutipan panjang dengan indentasi bawaan."
          },
          {
            "type": "fill",
            "q": "Kutipan panjang dengan atribut URL sumber:\n<___ cite=\"https://sumber.com\">Kutipan</___>",
            "code": "<___ cite=\"https://sumber.com\">Kutipan</___>",
            "accept": [
              "blockquote"
            ],
            "explain": "blockquote adalah blok kutipan dengan atribut cite."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk menandai judul karya (buku, lagu, lukisan, film):",
            "options": [
              "<cite>",
              "<ref>",
              "<title>",
              "<i>"
            ],
            "a": 0,
            "explain": "<cite> merujuk pada judul karya kreatif yang dikutip."
          },
          {
            "type": "fill",
            "q": "Tandai judul buku yang dikutip:\nMenurut buku <___>Laskar Pelangi</___>",
            "code": "<___>Laskar Pelangi</___>",
            "accept": [
              "cite"
            ],
            "explain": "cite menandai rujukan judul karya."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat paragraf dengan mark:\n<p>Teks <mark>penting</mark></p>",
            "starter": "<p>Teks <mark>penting</mark></p>\n",
            "must": [
              {
                "t": "selector",
                "v": "mark"
              },
              {
                "t": "text",
                "v": "penting"
              }
            ],
            "explain": "mark menyorot teks kuning."
          }
        ]
      },
      {
        "id": "html-19",
        "level": "Menengah",
        "title": "Figure, Figcaption & Time",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen semantik untuk membungkus gambar bersama teks keterangannya:",
            "options": [
              "<figure>",
              "<picture>",
              "<photo>",
              "<image-box>"
            ],
            "a": 0,
            "explain": "<figure> mengelompokkan konten visual dengan keterangannya."
          },
          {
            "type": "fill",
            "q": "Beri keterangan pada gambar di dalam figure:\n<figure>\n  <img src=\"grafik.png\">\n  <___>Grafik Penjualan 2026</___>\n</figure>",
            "code": "<figure>\n  <img src=\"grafik.png\">\n  <___>Grafik Penjualan 2026</___>\n</figure>",
            "accept": [
              "figcaption"
            ],
            "explain": "<figcaption> adalah caption resmi di dalam <figure>."
          },
          {
            "type": "arrange",
            "q": "Susun gambar ber-caption semantik:",
            "blocks": [
              "<figure>",
              "<img src=\"foto.jpg\" alt=\"Pemandangan\">",
              "<figcaption>Pemandangan Gunung Bromo</figcaption>",
              "</figure>"
            ],
            "explain": "figure diawali img lalu figcaption."
          },
          {
            "type": "mc",
            "q": "Elemen semantik untuk merepresentasikan waktu atau tanggal kalender:",
            "options": [
              "<time>",
              "<date>",
              "<datetime>",
              "<clock>"
            ],
            "a": 0,
            "explain": "<time> menandai tanggal/waktu yang ramah mesin dan manusia."
          },
          {
            "type": "fill",
            "q": "Format tanggal mesin ISO:\n<time datetime=\"___\">14 Oktober 2026</time>",
            "code": "<time datetime=\"___\">14 Oktober 2026</time>",
            "accept": [
              "2026-10-14",
              "2026-10-14T00:00:00"
            ],
            "explain": "datetime menggunakan format ISO YYYY-MM-DD."
          },
          {
            "type": "mc",
            "q": "Atribut datetime pada <time> berguna untuk:",
            "options": [
              "Memungkinkan mesin pencari & kalender mem-parse tanggal secara akurat",
              "Menghitung mundur waktu otomatis",
              "Mengganti jam komputer",
              "Membuat animasi jarum jam"
            ],
            "a": 0,
            "explain": "datetime memberikan format standar mesin untuk data tanggal/jam."
          },
          {
            "type": "mc",
            "q": "Elemen untuk menampilkan progress pekerjaan (bilah kemajuan):",
            "options": [
              "<progress>",
              "<meter>",
              "<bar>",
              "<loader>"
            ],
            "a": 0,
            "explain": "<progress value=\"70\" max=\"100\"> menampilkan bilah kemajuan."
          },
          {
            "type": "fill",
            "q": "Buat progress bar bernilai 50 dari 100:\n<progress ___=\"50\" max=\"100\"></progress>",
            "code": "<progress ___=\"50\" max=\"100\"></progress>",
            "accept": [
              "value"
            ],
            "explain": "value menentukan nilai saat ini."
          },
          {
            "type": "mc",
            "q": "Elemen untuk mengukur nilai dalam rentang tertentu (seperti kapasitas disk, suhu):",
            "options": [
              "<meter>",
              "<progress>",
              "<gauge>",
              "<scale>"
            ],
            "a": 0,
            "explain": "<meter> digunakan untuk pengukuran nilai skalar bernilai tetap."
          },
          {
            "type": "fill",
            "q": "Beri batas atas pada pengukur kapasitas:\n<meter value=\"8\" min=\"0\" ___=\"10\"></meter>",
            "code": "<meter value=\"8\" min=\"0\" ___=\"10\"></meter>",
            "accept": [
              "max"
            ],
            "explain": "max menentukan batas tertinggi nilai."
          }
        ]
      },
      {
        "id": "html-20",
        "level": "Menengah",
        "title": "Details, Summary & Dialog Native",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen bawaan HTML untuk membuat akordeon (tutup-buka konten) tanpa JavaScript:",
            "options": [
              "<details>",
              "<accordion>",
              "<toggle>",
              "<collapse>"
            ],
            "a": 0,
            "explain": "<details> membuka dan menutup kontennya secara native."
          },
          {
            "type": "fill",
            "q": "Judul yang dapat diklik pada elemen <details> dibuat dengan:\n<details>\n  <___>Pertanyaan Umum</___>\n  <p>Jawaban...</p>\n</details>",
            "code": "<details>\n  <___>Pertanyaan Umum</___>\n  <p>Jawaban...</p>\n</details>",
            "accept": [
              "summary"
            ],
            "explain": "<summary> adalah judul yang dapat diklik untuk toggle."
          },
          {
            "type": "arrange",
            "q": "Susun akordeon native details-summary:",
            "blocks": [
              "<details>",
              "<summary>FAQ: Apakah gratis?</summary>",
              "<p>Ya, 100% gratis.</p>",
              "</details>"
            ],
            "explain": "details membungkus summary dan kontennya."
          },
          {
            "type": "mc",
            "q": "Atribut agar <details> langsung terbuka sejak awal halaman dimuat:",
            "options": [
              "open",
              "expanded",
              "active",
              "show"
            ],
            "a": 0,
            "explain": "Atribut boolean open membuat details langsung terbuka."
          },
          {
            "type": "fill",
            "q": "Buka details secara default:\n<details ___>\n  <summary>Tips</summary>\n  <p>Konten</p>\n</details>",
            "code": "<details ___>\n  <summary>Tips</summary>\n  <p>Konten</p>\n</details>",
            "accept": [
              "open"
            ],
            "explain": "open membuka details secara otomatis."
          },
          {
            "type": "mc",
            "q": "Elemen HTML5 native untuk membuat dialog pop-up atau jendela modal:",
            "options": [
              "<dialog>",
              "<modal>",
              "<popup>",
              "<window>"
            ],
            "a": 0,
            "explain": "<dialog> adalah elemen standar web untuk dialog/modal."
          },
          {
            "type": "fill",
            "q": "Buka dialog secara non-modal default:\n<dialog ___>\n  <p>Pemberitahuan</p>\n</dialog>",
            "code": "<dialog ___>\n  <p>Pemberitahuan</p>\n</dialog>",
            "accept": [
              "open"
            ],
            "explain": "open menampilkan dialog di layar."
          },
          {
            "type": "mc",
            "q": "Metode JavaScript untuk membuka <dialog> sebagai modal latar belakang redup (backdrop):",
            "options": [
              "dialog.showModal()",
              "dialog.open()",
              "dialog.show()",
              "dialog.popup()"
            ],
            "a": 0,
            "explain": "showModal() membuka dialog sebagai modal dengan pseudoelemen ::backdrop."
          },
          {
            "type": "mc",
            "q": "Metode JavaScript untuk menutup <dialog> native:",
            "options": [
              "dialog.close()",
              "dialog.hide()",
              "dialog.exit()",
              "dialog.dismiss()"
            ],
            "a": 0,
            "explain": "dialog.close() menutup dialog."
          },
          {
            "type": "fill",
            "q": "Tutup dialog dengan form method dialog:\n<form method=\"___\">\n  <button>Tutup</button>\n</form>",
            "code": "<form method=\"___\">\n  <button>Tutup</button>\n</form>",
            "accept": [
              "dialog"
            ],
            "explain": "method=\"dialog\" otomatis menutup dialog induknya."
          }
        ]
      },
      {
        "id": "html-21",
        "level": "Advance",
        "title": "Media & Aksesibilitas",
        "exercises": [
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat gambar dengan atribut src \"logo.png\" dan alt \"Logo\":",
            "starter": "<img\n",
            "must": [
              {
                "t": "selector",
                "v": "img"
              }
            ],
            "explain": "<img src=\"logo.png\" alt=\"Logo\"> — alt wajib demi aksesibilitas."
          },
          {
            "type": "mc",
            "q": "Elemen untuk video:",
            "options": [
              "<movie>",
              "<video>",
              "<media>",
              "<film>"
            ],
            "a": 1,
            "explain": "<video src=\"...\" controls></video> memutar video."
          },
          {
            "type": "fill",
            "q": "Lengkapi agar kontrol pemutar video tampil:",
            "code": "<video src=\"klip.mp4\" ___></video>",
            "accept": [
              "controls"
            ],
            "explain": "Atribut controls menampilkan tombol play/pause/seek."
          },
          {
            "type": "mc",
            "q": "Kenapa alt penting (bukan sekadar pelengkap)?",
            "options": [
              "Mempercepat loading",
              "Menjelaskan gambar ke screen reader & saat gambar gagal muat",
              "Mengubah ukuran otomatis",
              "Menambah like"
            ],
            "a": 1,
            "explain": "alt = jalur informasi non-visual; bagian dari WCAG."
          },
          {
            "type": "fill",
            "q": "Atribut bahasa pada <html> agar screen reader benar:",
            "code": "<html ___=\"id\">",
            "accept": [
              "lang"
            ],
            "explain": "lang=\"id\" memberi tahu bahasa halaman."
          },
          {
            "type": "mc",
            "q": "Elemen untuk memutar audio musik/suara di HTML5:",
            "options": [
              "<audio>",
              "<sound>",
              "<music>",
              "<voice>"
            ],
            "a": 0,
            "explain": "<audio src=\"lagu.mp3\" controls></audio> memutar audio."
          },
          {
            "type": "fill",
            "q": "Lengkapi atribut type sumber video untuk file berformat MP4:",
            "code": "<video controls>\n  <source src=\"film.mp4\" type=\"video/___\">\n</video>",
            "accept": [
              "mp4",
              "webm"
            ],
            "explain": "type=\"video/mp4\" menginformasikan codec file ke browser."
          },
          {
            "type": "arrange",
            "q": "Susun pemutar audio dengan fallback:",
            "blocks": [
              "<audio controls>",
              "<source src=\"audio.mp3\" type=\"audio/mpeg\">",
              "Browser Anda tidak mendukung audio.",
              "</audio>"
            ],
            "explain": "audio -> source -> fallback text."
          },
          {
            "type": "mc",
            "q": "Atribut pada video agar memutar ulang terus menerus saat selesai:",
            "options": [
              "loop",
              "repeat",
              "replay",
              "infinite"
            ],
            "a": 0,
            "explain": "loop mengulang video secara terus menerus."
          },
          {
            "type": "fill",
            "q": "Putar video tanpa suara (bisu):\n<video src=\"clip.mp4\" ___ autoplay></video>",
            "code": "<video src=\"clip.mp4\" ___ autoplay></video>",
            "accept": [
              "muted"
            ],
            "explain": "Browser modern hanya mengizinkan autoplay jika video berstatus muted."
          }
        ]
      },
      {
        "id": "html-22",
        "level": "Advance",
        "title": "Meta & Struktur Halaman",
        "exercises": [
          {
            "type": "mc",
            "q": "Meta untuk deskripsi yang tampil di hasil pencarian:",
            "options": [
              "<meta name=\"description\">",
              "<meta name=\"keywords\">",
              "<meta charset>",
              "<meta name=\"view\">"
            ],
            "a": 0,
            "explain": "description = cuplikan di bawah judul pada hasil Google."
          },
          {
            "type": "fill",
            "q": "Atribut <html> untuk dokumen berbahasa Indonesia:",
            "code": "<html lang=\"___\">",
            "accept": [
              "id"
            ],
            "explain": "lang=\"id\" = bahasa Indonesia."
          },
          {
            "type": "mc",
            "q": "Urutan heading yang baik untuk hierarki:",
            "options": [
              "h1 → h3 → h5 (melompat)",
              "h1 → h2 → h3 (berurutan)",
              "h3 → h1 → h2",
              "boleh acak"
            ],
            "a": 1,
            "explain": "Jangan lompati level — h1 untuk judul, h2 subjudul, dst."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat struktur <header>, <main>, dan <footer>:",
            "starter": "<header>Judul</header>\n",
            "must": [
              {
                "t": "selector",
                "v": "main"
              },
              {
                "t": "selector",
                "v": "footer"
              }
            ],
            "explain": "Struktur semantik: header → main → footer."
          },
          {
            "type": "fill",
            "q": "Meta agar halaman di-index mesin pencari:",
            "code": "<meta name=\"robots\" content=\"index, ___\">",
            "accept": [
              "follow"
            ],
            "explain": "index,follow = boleh diindeks dan ikuti tautannya."
          },
          {
            "type": "mc",
            "q": "Tag meta untuk memberitahu search engine agar tidak mengindeks halaman:",
            "options": [
              "<meta name=\"robots\" content=\"noindex\">",
              "<meta name=\"google\" content=\"hide\">",
              "<meta name=\"seo\" content=\"false\">",
              "<meta name=\"spider\" content=\"stop\">"
            ],
            "a": 0,
            "explain": "noindex menginstruksikan bot mesin pencari tidak menampilkan halaman."
          },
          {
            "type": "fill",
            "q": "Meta tag agar robot tidak mengikuti link di halaman:\n<meta name=\"robots\" content=\"___\">",
            "code": "<meta name=\"robots\" content=\"___\">",
            "accept": [
              "nofollow",
              "noindex, nofollow"
            ],
            "explain": "nofollow mencegah bot mengikuti tautan di halaman."
          },
          {
            "type": "arrange",
            "q": "Susun meta viewport standar mobile:",
            "blocks": [
              "<meta",
              "name=\"viewport\"",
              "content=\"width=device-width, initial-scale=1.0\">"
            ],
            "explain": "Pengaturan wajib responsive viewport."
          },
          {
            "type": "mc",
            "q": "Tag <link rel=\"canonical\" href=\"...\"> berfungsi untuk:",
            "options": [
              "Mencegah penalti konten duplikat pada SEO",
              "Mengganti warna tema browser",
              "Menghubungkan font eksternal",
              "Mengecek kecepatan server"
            ],
            "a": 0,
            "explain": "canonical URL menentukan URL resmi utama bagi konten halaman."
          },
          {
            "type": "mc",
            "q": "Atribut global yang menampilkan keterangan kecil saat kursor melayang di atas elemen:",
            "options": [
              "title",
              "tooltip",
              "alt",
              "hover"
            ],
            "a": 0,
            "explain": "Atribut global title menampilkan tooltip bawaan browser."
          }
        ]
      },
      {
        "id": "html-23",
        "level": "Advance",
        "title": "Audio & Video Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Elemen <track> di dalam <video> digunakan untuk:",
            "options": [
              "Subtitle, takarir (caption), dan deskripsi audio",
              "Mengatur volume",
              "Memilih resolusi 4K",
              "Membuat timeline cerita"
            ],
            "a": 0,
            "explain": "<track kind=\"subtitles\" src=\"sub.vtt\"> memuat file teks subtitle."
          },
          {
            "type": "fill",
            "q": "Tentukan format jenis subtitle pada tag track:\n<track ___=\"subtitles\" src=\"id.vtt\" srclang=\"id\">",
            "code": "<track ___=\"subtitles\" src=\"id.vtt\" srclang=\"id\">",
            "accept": [
              "kind"
            ],
            "explain": "kind menentukan fungsi track (subtitles, captions, descriptions)."
          },
          {
            "type": "mc",
            "q": "Format file teks standar untuk subtitle HTML5:",
            "options": [
              "WebVTT (.vtt)",
              ".srt",
              ".txt",
              ".sub"
            ],
            "a": 0,
            "explain": "WebVTT (Web Video Text Tracks) adalah format standar W3C untuk video HTML."
          },
          {
            "type": "fill",
            "q": "Tentukan poster gambar pratinjau sebelum video diputar:\n<video src=\"vid.mp4\" ___=\"cover.jpg\" controls></video>",
            "code": "<video src=\"vid.mp4\" ___=\"cover.jpg\" controls></video>",
            "accept": [
              "poster"
            ],
            "explain": "poster menampilkan gambar diam sebelum video dimainkan."
          },
          {
            "type": "mc",
            "q": "Atribut preload pada video dengan nilai \"none\" berarti:",
            "options": [
              "Browser tidak mengunduh video sampai pengguna menekan play",
              "Video langsung diunduh penuh",
              "Hanya mengunduh audio",
              "Video dihapus dari cache"
            ],
            "a": 0,
            "explain": "preload=\"none\" menghemat kuota pengguna sebelum tombol play ditekan."
          },
          {
            "type": "fill",
            "q": "Hindari preloading video:\n<video src=\"movie.mp4\" preload=\"___\" controls></video>",
            "code": "<video src=\"movie.mp4\" preload=\"___\" controls></video>",
            "accept": [
              "none"
            ],
            "explain": "preload=\"none\" menunda download video."
          },
          {
            "type": "arrange",
            "q": "Susun elemen video dengan dua sumber alternatif:",
            "blocks": [
              "<video controls poster=\"thumb.jpg\">",
              "<source src=\"movie.webm\" type=\"video/webm\">",
              "<source src=\"movie.mp4\" type=\"video/mp4\">",
              "</video>"
            ],
            "explain": "Format WebM diutamakan lalu fallback MP4."
          },
          {
            "type": "mc",
            "q": "Atribut playsinline pada video di browser mobile iOS berguna agar:",
            "options": [
              "Video diputar di dalam halaman web bukan layar penuh otomatis",
              "Video berputar 90 derajat",
              "Video tidak bersuara",
              "Video berukuran kecil"
            ],
            "a": 0,
            "explain": "playsinline mencegah video iOS memaksa fullscreen native player."
          },
          {
            "type": "fill",
            "q": "Putar video inline di browser mobile:\n<video src=\"clip.mp4\" ___ controls></video>",
            "code": "<video src=\"clip.mp4\" ___ controls></video>",
            "accept": [
              "playsinline"
            ],
            "explain": "playsinline menjaga pemutaran tetap di layout halaman."
          },
          {
            "type": "mc",
            "q": "Apakah tag <audio> mendukung pemutaran streaming langsung (live)?",
            "options": [
              "Ya, melalui protokol HLS atau URL audio stream",
              "Tidak pernah bisa",
              "Hanya format WAV",
              "Harus pakai Flash"
            ],
            "a": 0,
            "explain": "Elemen audio mendukung sumber stream langsung."
          }
        ]
      },
      {
        "id": "html-24",
        "level": "Advance",
        "title": "Gambar Responsif & Srcset",
        "exercises": [
          {
            "type": "mc",
            "q": "Atribut srcset pada tag <img> digunakan untuk:",
            "options": [
              "Menyediakan beberapa pilihan resolusi gambar untuk kerapatan layar (DPR)",
              "Membuat slideshow",
              "Menghubungkan link luar",
              "Mengubah filter warna"
            ],
            "a": 0,
            "explain": "srcset memungkinkan browser memilih resolusi terbaik (1x, 2x, atau lebar px)."
          },
          {
            "type": "fill",
            "q": "Tentukan gambar untuk layar tajam Retina (2x):\n<img src=\"foto.jpg\" srcset=\"foto.jpg 1x, foto-hd.jpg ___\">",
            "code": "<img src=\"foto.jpg\" srcset=\"foto.jpg 1x, foto-hd.jpg ___\">",
            "accept": [
              "2x"
            ],
            "explain": "2x menandakan kerapatan piksel layar ganda (Retina display)."
          },
          {
            "type": "mc",
            "q": "Atribut sizes pada <img> berpasangan dengan srcset berfungsi untuk:",
            "options": [
              "Memberitahu browser lebar gambar yang dibutuhkan pada breakpoint tertentu",
              "Mengatur ukuran file maksimum",
              "Menentukan tinggi kanvas",
              "Membatasi warna"
            ],
            "a": 0,
            "explain": "sizes=\" (max-width: 600px) 100vw, 50vw\" menginformasikan alokasi layout."
          },
          {
            "type": "fill",
            "q": "Tentukan lebar gambar dalam descriptor w:\n<img srcset=\"small.jpg 400w, large.jpg ___w\">",
            "code": "<img srcset=\"small.jpg 400w, large.jpg ___w\">",
            "accept": [
              "800",
              "800w",
              "1200",
              "1200w",
              "1000",
              "1000w"
            ],
            "explain": "Descriptor w menandai lebar intrinsik gambar dalam piksel."
          },
          {
            "type": "mc",
            "q": "Elemen <picture> digunakan ketika:",
            "options": [
              "Kita butuh art direction (gambar beda orientasi di mobile vs desktop) atau format modern",
              "Hanya butuh satu gambar saja",
              "Ingin membuat video",
              "Ingin menggambar kanvas"
            ],
            "a": 0,
            "explain": "<picture> membungkus beberapa <source> dengan media query."
          },
          {
            "type": "arrange",
            "q": "Susun elemen picture dengan fallback WebP ke JPG:",
            "blocks": [
              "<picture>",
              "<source srcset=\"banner.webp\" type=\"image/webp\">",
              "<img src=\"banner.jpg\" alt=\"Banner\">",
              "</picture>"
            ],
            "explain": "picture > source type webp > img fallback."
          },
          {
            "type": "fill",
            "q": "Gunakan media query pada source di dalam picture:\n<source ___=\"(max-width: 600px)\" srcset=\"mobile.jpg\">",
            "code": "<source ___=\"(max-width: 600px)\" srcset=\"mobile.jpg\">",
            "accept": [
              "media"
            ],
            "explain": "media menentukan kondisi CSS media query pada source."
          },
          {
            "type": "mc",
            "q": "Elemen apa yang wajib ada di dalam <picture> sebagai fallback terakhir?",
            "options": [
              "Tag <img>",
              "Tag <svg>",
              "Tag <div>",
              "Tag <source>"
            ],
            "a": 0,
            "explain": "Tag <img> wajib ada sebagai render target dan fallback kompatibilitas."
          },
          {
            "type": "mc",
            "q": "Format gambar WebP dibandingkan JPEG standar rata-rata menghemat ukuran sekitar:",
            "options": [
              "25% hingga 35%",
              "0%",
              "99%",
              "Hanya 1%"
            ],
            "a": 0,
            "explain": "WebP menghemat sekitar 30% ukuran file dibanding JPEG pada kualitas sebanding."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat elemen time semantik:\n<time datetime=\"2026-10-14\">Hari ini</time>",
            "starter": "<time datetime=\"2026-10-14\">Hari ini</time>\n",
            "must": [
              {
                "t": "selector",
                "v": "time"
              },
              {
                "t": "text",
                "v": "Hari ini"
              }
            ],
            "explain": "time menandai waktu terstruktur."
          }
        ]
      },
      {
        "id": "html-25",
        "level": "Advance",
        "title": "Standar Aksesibilitas WCAG",
        "exercises": [
          {
            "type": "mc",
            "q": "WCAG adalah singkatan dari:",
            "options": [
              "Web Content Accessibility Guidelines",
              "World Content Access Group",
              "Web Center Authorization Guide",
              "Wide Color Access Grade"
            ],
            "a": 0,
            "explain": "WCAG adalah panduan aksesibilitas web resmi dari W3C."
          },
          {
            "type": "mc",
            "q": "Empat prinsip utama WCAG disingkat POWR (POUR), yaitu:",
            "options": [
              "Perceivable, Operable, Understandable, Robust",
              "Powerful, Open, Useful, Rapid",
              "Portable, Optimal, Unique, Reliable",
              "Print, Output, User, React"
            ],
            "a": 0,
            "explain": "POUR: Dapat dipersepsi, Dioperasikan, Dipahami, dan Tangguh."
          },
          {
            "type": "mc",
            "q": "Rasio kontras teks normal minimum terhadap latar belakang menurut WCAG AA adalah:",
            "options": [
              "4.5:1",
              "2:1",
              "10:1",
              "1:1"
            ],
            "a": 0,
            "explain": "Tingkat WCAG AA mensyaratkan rasio kontras teks minimal 4.5 banding 1."
          },
          {
            "type": "mc",
            "q": "Atribut aria-label digunakan untuk:",
            "options": [
              "Memberikan label teks bagi elemen yang tidak memiliki teks visual (misal tombol ikon)",
              "Mengubah warna font",
              "Membuat animasi",
              "Menyembunyikan elemen dari layar"
            ],
            "a": 0,
            "explain": "aria-label dibaca oleh screen reader saat tombol hanya berupa ikon tanpa teks."
          },
          {
            "type": "fill",
            "q": "Beri label aksesibel pada tombol ikon tutup:\n<button ___=\"Tutup menu\">✕</button>",
            "code": "<button ___=\"Tutup menu\">✕</button>",
            "accept": [
              "aria-label"
            ],
            "explain": "aria-label menyediakan teks alternatif bagi teknologi bantu."
          },
          {
            "type": "mc",
            "q": "Atribut aria-hidden=\"true\" berfungsi untuk:",
            "options": [
              "Menyembunyikan elemen dari pembaca layar (screen reader) tetapi tetap tampil visual",
              "Menghapus elemen dari DOM",
              "Menutup tab browser",
              "Membuat elemen tidak bisa diklik"
            ],
            "a": 0,
            "explain": "aria-hidden=\"true\" menyembunyikan ikon dekoratif dari screen reader."
          },
          {
            "type": "fill",
            "q": "Sembunyikan ikon dekoratif dari screen reader:\n<span ___=\"true\">✨</span>",
            "code": "<span ___=\"true\">✨</span>",
            "accept": [
              "aria-hidden"
            ],
            "explain": "aria-hidden=\"true\" mencegah pembaca layar mengumumkan karakter hiasan."
          },
          {
            "type": "arrange",
            "q": "Susun tombol ikon yang ramah screen reader:",
            "blocks": [
              "<button type=\"button\"",
              "aria-label=\"Cari\"",
              ">",
              "<span aria-hidden=\"true\">🔍</span>",
              "</button>"
            ],
            "explain": "button dengan aria-label dan ikon ber-aria-hidden."
          },
          {
            "type": "mc",
            "q": "Atribut tabindex=\"0\" pada elemen non-interaktif membuat elemen:",
            "options": [
              "Dapat difokuskan menggunakan tombol Tab keyboard sesuai urutan dokumen",
              "Dihapus dari tab order",
              "Selalu berada di urutan pertama",
              "Menjadi tombol submit"
            ],
            "a": 0,
            "explain": "tabindex=\"0\" memasukkan elemen ke dalam urutan tab navigasi keyboard."
          },
          {
            "type": "fill",
            "q": "Keluarkan elemen dari navigasi Tab keyboard:\n<div tabindex=\"___\">",
            "code": "<div tabindex=\"___\">",
            "accept": [
              "-1"
            ],
            "explain": "tabindex=\"-1\" memungkinkan fokus via JS tapi melepasnya dari tombol Tab."
          }
        ]
      },
      {
        "id": "html-26",
        "level": "Advance",
        "title": "Peran ARIA & Landmark",
        "exercises": [
          {
            "type": "mc",
            "q": "Aturan pertama penggunaan ARIA menurut W3C adalah:",
            "options": [
              "Gunakan elemen HTML semantik asli jika tersedia sebelum menggunakan ARIA",
              "Gunakan ARIA di semua elemen",
              "Jangan pernah pakai HTML",
              "Selalu ganti tag dengan div"
            ],
            "a": 0,
            "explain": "Prinsip utama: \"No ARIA is better than Bad ARIA\" — utamakan tag semantik asli."
          },
          {
            "type": "mc",
            "q": "Atribut role=\"navigation\" secara bawaan sudah dimiliki oleh tag:",
            "options": [
              "<nav>",
              "<header>",
              "<aside>",
              "<menu>"
            ],
            "a": 0,
            "explain": "Tag <nav> secara implisit memiliki role=\"navigation\"."
          },
          {
            "type": "mc",
            "q": "Atribut role=\"banner\" setara dengan tag semantik:",
            "options": [
              "<header> level body",
              "<footer>",
              "<main>",
              "<div>"
            ],
            "a": 0,
            "explain": "<header> utama halaman memiliki peran landmark \"banner\"."
          },
          {
            "type": "fill",
            "q": "Tandai elemen live region yang mengumumkan update instan:\n<div aria-live=\"___\">",
            "code": "<div aria-live=\"___\">",
            "accept": [
              "polite",
              "assertive"
            ],
            "explain": "aria-live=\"polite\" memberi tahu screen reader saat ada pesan baru."
          },
          {
            "type": "mc",
            "q": "Perbedaan aria-live=\"polite\" dan aria-live=\"assertive\":",
            "options": [
              "polite menunggu pengguna selesai bicara/baca; assertive menyela seketika",
              "Sama persis",
              "assertive tidak bersuara",
              "polite hanya di desktop"
            ],
            "a": 0,
            "explain": "polite tidak memotong suara pembaca layar yang sedang aktif."
          },
          {
            "type": "mc",
            "q": "Atribut aria-expanded=\"true\" berguna untuk elemen:",
            "options": [
              "Menu dropdown atau akordeon yang sedang terbuka",
              "Gambar yang sedang dimuat",
              "Tautan yang dikunjungi",
              "Formulir valid"
            ],
            "a": 0,
            "explain": "aria-expanded memberi tahu status buka/tutup komponen."
          },
          {
            "type": "fill",
            "q": "Tandai tombol dropdown yang sedang tertutup:\n<button aria-expanded=\"___\">Menu</button>",
            "code": "<button aria-expanded=\"___\">Menu</button>",
            "accept": [
              "false"
            ],
            "explain": "aria-expanded=\"false\" mengindikasikan menu dalam kondisi tertutup."
          },
          {
            "type": "arrange",
            "q": "Susun elemen notifikasi live region:",
            "blocks": [
              "<div",
              "role=\"status\"",
              "aria-live=\"polite\"",
              ">",
              "Pesanan berhasil disimpan.",
              "</div>"
            ],
            "explain": "Komponen status aria-live lengkap."
          },
          {
            "type": "mc",
            "q": "Atribut aria-describedby merujuk pada:",
            "options": [
              "id elemen yang memuat penjelasan tambahan bagi input",
              "Nama class CSS",
              "URL eksternal",
              "Nomor urut form"
            ],
            "a": 0,
            "explain": "aria-describedby membaca teks bantuan atau pesan error yang ditunjuk id."
          },
          {
            "type": "fill",
            "q": "Hubungkan input dengan pesan bantuan: isi aria-describedby dengan id elemen bantu:",
            "code": "<input aria-describedby=\"___\">\n<span id=\"petunjuk\">Minimal 8 karakter</span>",
            "accept": [
              "petunjuk",
              "hint"
            ],
            "explain": "aria-describedby mengambil id teks bantuan."
          }
        ]
      },
      {
        "id": "html-27",
        "level": "Advance",
        "title": "SEO Meta & Social Sharing",
        "exercises": [
          {
            "type": "mc",
            "q": "Protokol Open Graph (OG) meta tags digunakan terutama oleh:",
            "options": [
              "Facebook, WhatsApp, LinkedIn untuk cuplikan pratinjau link",
              "Google Translate",
              "Apache Server",
              "CSS Engine"
            ],
            "a": 0,
            "explain": "Open Graph (og:title, og:image) membuat kartu preview yang menarik di medsos."
          },
          {
            "type": "fill",
            "q": "Tentukan judul pada Open Graph meta:\n<meta property=\"og:___\" content=\"CodeDuo\">",
            "code": "<meta property=\"og:___\" content=\"CodeDuo\">",
            "accept": [
              "title"
            ],
            "explain": "og:title menentukan judul pratinjau media sosial."
          },
          {
            "type": "fill",
            "q": "Tentukan gambar thumbnail preview media sosial:\n<meta property=\"og:___\" content=\"https://site.com/thumb.jpg\">",
            "code": "<meta property=\"og:___\" content=\"https://site.com/thumb.jpg\">",
            "accept": [
              "image"
            ],
            "explain": "og:image menentukan gambar kartu pratinjau share."
          },
          {
            "type": "mc",
            "q": "Meta tag untuk menentukan tipe kartu Twitter/X:",
            "options": [
              "<meta name=\"twitter:card\" content=\"summary_large_image\">",
              "<meta name=\"x:card\">",
              "<meta property=\"tweet\">",
              "<meta name=\"card\">"
            ],
            "a": 0,
            "explain": "twitter:card menentukan format kartu pratinjau di Twitter/X."
          },
          {
            "type": "arrange",
            "q": "Susun meta Open Graph penting:",
            "blocks": [
              "<meta property=\"og:title\" content=\"Judul Web\">",
              "<meta property=\"og:description\" content=\"Deskripsi singkat\">",
              "<meta property=\"og:image\" content=\"https://site.com/img.jpg\">"
            ],
            "answers": [[0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]],
            "explain": "Urutan meta OG dasar."
          },
          {
            "type": "mc",
            "q": "Format data terstruktur (Structured Data) yang direkomendasikan Google saat ini:",
            "options": [
              "JSON-LD di dalam tag <script type=\"application/ld+json\">",
              "Microformats HTML4",
              "XML file terpisah",
              "CSV file"
            ],
            "a": 0,
            "explain": "JSON-LD adalah format structured data yang paling dianjurkan Google."
          },
          {
            "type": "fill",
            "q": "Tipe script untuk menyematkan data terstruktur JSON-LD:\n<script type=\"application/___+json\">",
            "code": "<script type=\"application/___+json\">",
            "accept": [
              "ld"
            ],
            "explain": "application/ld+json memuat metadata skema Schema.org."
          },
          {
            "type": "mc",
            "q": "Atribut theme-color pada meta berguna untuk:",
            "options": [
              "Mewarnai bilah toolbar browser pada perangkat mobile",
              "Mengganti warna teks",
              "Mengaktifkan dark mode CSS",
              "Mempercepat server"
            ],
            "a": 0,
            "explain": "<meta name=\"theme-color\" content=\"#58cc02\"> mewarnai address bar mobile browser."
          },
          {
            "type": "fill",
            "q": "Atur warna tema browser mobile:\n<meta name=\"___\" content=\"#58cc02\">",
            "code": "<meta name=\"___\" content=\"#58cc02\">",
            "accept": [
              "theme-color"
            ],
            "explain": "theme-color mengatur warna frame browser ponsel."
          },
          {
            "type": "mc",
            "q": "Tag <link rel=\"icon\" type=\"image/svg+xml\" href=\"icon.svg\"> digunakan untuk:",
            "options": [
              "Favicon vektor modern yang tajam di semua resolusi",
              "CSS stylesheet",
              "Gambar artikel",
              "Menghapus cache"
            ],
            "a": 0,
            "explain": "SVG favicon memungkinkan ikon situs selalu tajam dan mendukung dark mode."
          }
        ]
      },
      {
        "id": "html-28",
        "level": "Advance",
        "title": "Grafis Canvas & Vektor SVG",
        "exercises": [
          {
            "type": "mc",
            "q": "Perbedaan utama antara SVG dan Canvas HTML5:",
            "options": [
              "SVG berbasis vektor (resolusi tak terbatas); Canvas berbasis piksel/bitmap raster",
              "Sama persis",
              "Canvas tidak butuh JavaScript",
              "SVG tidak bisa digambar"
            ],
            "a": 0,
            "explain": "SVG berupa markup DOM skalar; Canvas digambar secara imperatif via JS."
          },
          {
            "type": "fill",
            "q": "Lengkapi elemen kanvas yang digambar lewat JavaScript:",
            "code": "<___ id=\"papan\" width=\"300\" height=\"200\"></___>",
            "accept": [
              "canvas"
            ],
            "explain": "<canvas> menyediakan area render piksel 2D/WebGL."
          },
          {
            "type": "mc",
            "q": "Tag SVG untuk menggambar lingkaran:",
            "options": [
              "<circle>",
              "<round>",
              "<ring>",
              "<dot>"
            ],
            "a": 0,
            "explain": "<circle cx=\"50\" cy=\"50\" r=\"40\" /> menggambar lingkaran SVG."
          },
          {
            "type": "fill",
            "q": "Lengkapi atribut SVG yang menentukan jarak lingkaran dari pusatnya:",
            "code": "<circle cx=\"50\" cy=\"50\" ___=\"25\">",
            "accept": [
              "r"
            ],
            "explain": "r menentukan radius lingkaran pada SVG."
          },
          {
            "type": "mc",
            "q": "Tag SVG untuk menggambar persegi atau persegi panjang:",
            "options": [
              "<rect>",
              "<square>",
              "<box>",
              "<block>"
            ],
            "a": 0,
            "explain": "<rect x=\"10\" y=\"10\" width=\"100\" height=\"50\" /> menggambar persegi."
          },
          {
            "type": "arrange",
            "q": "Susun grafis SVG lingkaran sederhana:",
            "blocks": [
              "<svg viewBox=\"0 0 100 100\">",
              "<circle cx=\"50\" cy=\"50\" r=\"40\" fill=\"green\" />",
              "</svg>"
            ],
            "explain": "svg > circle."
          },
          {
            "type": "mc",
            "q": "Atribut viewBox pada SVG berguna untuk:",
            "options": [
              "Menentukan sistem koordinat dan aspek rasio skalabilitas vektor",
              "Mengatur warna outline",
              "Memotong teks",
              "Menghapus gambar"
            ],
            "a": 0,
            "explain": "viewBox=\"min-x min-y width height\" mengatur ruang kanvas virtual vektor."
          },
          {
            "type": "fill",
            "q": "Tentukan warna isi bentuk SVG:\n<rect width=\"50\" height=\"50\" ___=\"red\">",
            "code": "<rect width=\"50\" height=\"50\" ___=\"red\">",
            "accept": [
              "fill"
            ],
            "explain": "fill menentukan warna isi bentuk SVG; stroke untuk garis tepi."
          },
          {
            "type": "fill",
            "q": "Tentukan warna garis tepi SVG:\n<rect width=\"50\" height=\"50\" fill=\"none\" ___=\"blue\">",
            "code": "<rect width=\"50\" height=\"50\" fill=\"none\" ___=\"blue\">",
            "accept": [
              "stroke"
            ],
            "explain": "stroke menentukan warna garis pinggir elemen SVG."
          },
          {
            "type": "mc",
            "q": "Keuntungan menyematkan SVG secara langsung (inline) di dalam kode HTML:",
            "options": [
              "Dapat dimanipulasi dengan CSS dan JavaScript secara langsung",
              "File jadi lebih besar",
              "Hanya bisa dilihat di Chrome",
              "Tidak bisa diberi warna"
            ],
            "a": 0,
            "explain": "Inline SVG memungkinkan penggantian warna dengan CSS (fill, stroke) dan interaksi JS."
          }
        ]
      },
      {
        "id": "html-29",
        "level": "Advance",
        "title": "Iframe & Keamanan Embed",
        "exercises": [
          {
            "type": "mc",
            "q": "Tag untuk menyematkan dokumen web lain di dalam halaman web saat ini:",
            "options": [
              "<iframe>",
              "<embed-web>",
              "<webview>",
              "<window>"
            ],
            "a": 0,
            "explain": "<iframe> (inline frame) menyematkan halaman web eksternal."
          },
          {
            "type": "fill",
            "q": "Sematkan video luar dengan iframe:\n<___ src=\"https://example.com/embed\"></___>",
            "code": "<___ src=\"https://example.com/embed\"></___>",
            "accept": [
              "iframe"
            ],
            "explain": "iframe memuat dokumen HTML bersarang."
          },
          {
            "type": "mc",
            "q": "Atribut sandbox pada <iframe> berfungsi untuk:",
            "options": [
              "Membatasi kemampuan halaman yang disematkan demi keamanan (mencegah script jahat)",
              "Mempercepat internet",
              "Mengubah ukuran otomatis",
              "Menambah tombol play"
            ],
            "a": 0,
            "explain": "sandbox mengisolasi iframe dari akses script, popup, atau cookie induk."
          },
          {
            "type": "fill",
            "q": "Batasi keamanan iframe dengan atribut:\n<iframe src=\"web.html\" ___></iframe>",
            "code": "<iframe src=\"web.html\" ___></iframe>",
            "accept": [
              "sandbox"
            ],
            "explain": "Atribut sandbox menerapkan restriksi ketat."
          },
          {
            "type": "mc",
            "q": "Mengapa link target=\"_blank\" sebaiknya selalu disertai rel=\"noopener noreferrer\"?",
            "options": [
              "Mencegah halaman baru mengakses window.opener untuk manipulasi phishing (Tabnabbing)",
              "Mencegah CSS bentrok",
              "Hanya formalitas",
              "Memperbesar teks"
            ],
            "a": 0,
            "explain": "noopener mencegah eksploitasi keamanan reverse tabnabbing."
          },
          {
            "type": "fill",
            "q": "Lengkapi link aman tab baru:\n<a href=\"https://luar.com\" target=\"_blank\" rel=\"___\">Link</a>",
            "code": "<a href=\"https://luar.com\" target=\"_blank\" rel=\"___\">Link</a>",
            "accept": [
              "noopener",
              "noopener noreferrer"
            ],
            "explain": "rel=\"noopener\" melindungi tab induk dari manipulasi window.opener."
          },
          {
            "type": "arrange",
            "q": "Susun tautan eksternal yang aman:",
            "blocks": [
              "<a",
              "href=\"https://bank.com\"",
              "target=\"_blank\"",
              "rel=\"noopener noreferrer\"",
              ">",
              "Buka Situs",
              "</a>"
            ],
            "explain": "a dengan href, target=\"_blank\", dan rel=\"noopener noreferrer\"."
          },
          {
            "type": "mc",
            "q": "Atribut allow=\"fullscreen\" pada iframe berfungsi untuk:",
            "options": [
              "Memberikan izin bagi konten iframe untuk meminta mode layar penuh",
              "Menutup iframe",
              "Memaksa layar penuh permanen",
              "Menghapus audio"
            ],
            "a": 0,
            "explain": "Atribut allow mengontrol Permission Policy dari konten iframe."
          },
          {
            "type": "mc",
            "q": "Tag <embed> dan <object> di HTML modern biasanya digunakan untuk:",
            "options": [
              "Menyematkan dokumen PDF atau plugin eksternal",
              "Menulis paragraf",
              "Membuat tabel",
              "Membuat list"
            ],
            "a": 0,
            "explain": "<embed> atau <object> umum digunakan menampilkan pratinjau dokumen PDF di browser."
          },
          {
            "type": "fill",
            "q": "Tentukan lebar iframe 100%:\n<iframe src=\"peta.html\" width=\"___\"></iframe>",
            "code": "<iframe src=\"peta.html\" width=\"___\"></iframe>",
            "accept": [
              "100%"
            ],
            "explain": "width dan height mengatur dimensi frame."
          }
        ]
      },
      {
        "id": "html-30",
        "level": "Advance",
        "title": "Web Storage, Template & Slot",
        "exercises": [
          {
            "type": "mc",
            "q": "Tag <template> dalam HTML5 berfungsi untuk:",
            "options": [
              "Menampung markup HTML yang tidak dirender langsung saat dimuat, siap dikloning via JS",
              "Membuat email",
              "Mendesain poster",
              "Mengganti file CSS"
            ],
            "a": 0,
            "explain": "<template> tidak tampil di layar sampai isinya dikloning oleh JavaScript."
          },
          {
            "type": "fill",
            "q": "Buat template HTML yang tidak dirender langsung:\n<___ id=\"kartu-tpl\">\n  <div class=\"card\">Item</div>\n</___>",
            "code": "<___ id=\"kartu-tpl\">\n  <div class=\"card\">Item</div>\n</___>",
            "accept": [
              "template"
            ],
            "explain": "template menampung fragmen dokumen pasif."
          },
          {
            "type": "mc",
            "q": "Tag <slot> digunakan dalam konteks teknologi:",
            "options": [
              "Web Components & Shadow DOM sebagai placeholder konten dinamis",
              "Tabel data",
              "Header halaman",
              "Canvas gambar"
            ],
            "a": 0,
            "explain": "<slot> adalah titik penyisipan konten pada Web Components."
          },
          {
            "type": "fill",
            "q": "Buat slot bernama pada Web Components:\n<___ name=\"judul\"></___>",
            "code": "<___ name=\"judul\"></___>",
            "accept": [
              "slot"
            ],
            "explain": "slot mendefinisikan lokasi injeksi konten di Shadow DOM."
          },
          {
            "type": "arrange",
            "q": "Susun template kartu HTML:",
            "blocks": [
              "<template id=\"item-row\">",
              "<tr>",
              "<td class=\"col-nama\"></td>",
              "</tr>",
              "</template>"
            ],
            "explain": "template membungkus markup yang akan digandakan via JS."
          },
          {
            "type": "mc",
            "q": "Atribut contenteditable=\"true\" pada elemen HTML membuat elemen:",
            "options": [
              "Dapat diedit teksnya secara langsung oleh pengguna di browser",
              "Dihapus otomatis",
              "Hanya bisa dibaca",
              "Berubah menjadi textarea"
            ],
            "a": 0,
            "explain": "contenteditable mengubah elemen apapun menjadi editor teks langsung."
          },
          {
            "type": "fill",
            "q": "Jadikan elemen dapat diedit langsung oleh pengguna:\n<div ___=\"true\">Ketik di sini...</div>",
            "code": "<div ___=\"true\">Ketik di sini...</div>",
            "accept": [
              "contenteditable"
            ],
            "explain": "contenteditable mengaktifkan editing teks langsung di browser."
          },
          {
            "type": "mc",
            "q": "Atribut spellcheck=\"false\" berguna untuk:",
            "options": [
              "Menonaktifkan garis merah pemeriksa ejaan bawaan browser pada input/textarea",
              "Mengecek tata bahasa",
              "Menerjemahkan bahasa",
              "Menghapus spasi"
            ],
            "a": 0,
            "explain": "spellcheck=\"false\" mematikan pemeriksa ejaan untuk kode atau nama pengguna."
          },
          {
            "type": "fill",
            "q": "Matikan koreksi ejaan merah pada input kode:\n<input type=\"text\" ___=\"false\">",
            "code": "<input type=\"text\" ___=\"false\">",
            "accept": [
              "spellcheck"
            ],
            "explain": "spellcheck=\"false\" mematikan spellchecker browser."
          },
          {
            "type": "mc",
            "q": "Atribut draggable=\"true\" memungkinkan elemen untuk:",
            "options": [
              "Dapat diseret (drag and drop) dengan kursor mouse",
              "Berputar 360 derajat",
              "Dihapus saat disentuh",
              "Bergerak otomatis"
            ],
            "a": 0,
            "explain": "draggable=\"true\" mengaktifkan HTML5 Drag and Drop API."
          }
        ]
      },
      {
        "id": "html-31",
        "level": "Advance",
        "title": "Master Review & Best Practice HTML Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Manakah tag script yang TIDAK memblokir penguraian (parsing) HTML saat diunduh?",
            "options": [
              "<script defer src=\"app.js\">",
              "<script src=\"app.js\">",
              "<script inline>",
              "<script blocking>"
            ],
            "a": 0,
            "explain": "defer mengunduh skrip di latar belakang dan menjalankannya setelah HTML selesai di-parse."
          },
          {
            "type": "fill",
            "q": "Muat skrip tanpa memblokir parsing HTML:\n<script src=\"main.js\" ___></script>",
            "code": "<script src=\"main.js\" ___></script>",
            "accept": [
              "defer",
              "async"
            ],
            "explain": "defer dan async mencegah parser blocking."
          },
          {
            "type": "arrange",
            "q": "Susun urutan link resource di dalam head:",
            "blocks": [
              "<meta charset=\"utf-8\">",
              "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">",
              "<title>Judul</title>",
              "<link rel=\"stylesheet\" href=\"style.css\">"
            ],
            "answers": [[1,0,2,3]],
            "explain": "charset -> viewport -> title -> link CSS."
          },
          {
            "type": "mc",
            "q": "Atribut hidden pada elemen HTML berfungsi untuk:",
            "options": [
              "Menyembunyikan elemen secara semantik dan visual (setara display: none)",
              "Menghapus elemen dari file",
              "Membuat elemen transparan",
              "Membuat animasi memudar"
            ],
            "a": 0,
            "explain": "Atribut boolean hidden menyembunyikan elemen dari render layar."
          },
          {
            "type": "preview",
            "lang": "html",
            "q": "Buat tombol dengan type submit dan teks \"Simpan\":",
            "starter": "<button type=\"submit\">Simpan</button>\n",
            "must": [
              {
                "t": "selector",
                "v": "button"
              },
              {
                "t": "text",
                "v": "Simpan"
              }
            ],
            "explain": "button type submit mengirim form."
          }
        ]
      }
    ]
  },
  {
    "id": "css",
    "name": "CSS",
    "icon": "🎨",
    "color": "#264de4",
    "desc": "Styling dan tata letak",
    "lessons": [
      {
        "id": "css-1",
        "level": "Dasar",
        "title": "Selector & Property",
        "exercises": [
          {
            "type": "mc",
            "q": "Selector untuk memilih SEMUA elemen yang punya class \"card\":",
            "options": [
              "#card",
              ".card",
              "card",
              "*card"
            ],
            "a": 1,
            "explain": "Titik = class, pagar = id, tanpa tanda = nama tag."
          },
          {
            "type": "fill",
            "q": "Lengkapi property agar teks jadi biru:",
            "code": ".title {\n  ___: blue;\n}",
            "accept": [
              "color"
            ],
            "explain": "color mengatur warna teks (foreground)."
          },
          {
            "type": "mc",
            "q": "Selector untuk memilih elemen dengan id \"main\":",
            "options": [
              ".main",
              "#main",
              "main",
              "::main"
            ],
            "a": 1,
            "explain": "Pagar (#) = selector id."
          },
          {
            "type": "arrange",
            "q": "Susun sintaks aturan CSS:",
            "blocks": [
              ".judul {",
              "color: red;",
              "}"
            ],
            "explain": "selector { property: value; }"
          },
          {
            "type": "fill",
            "q": "Universal selector (semua elemen):",
            "code": "___ { margin: 0; }",
            "accept": [
              "*"
            ],
            "explain": "Asterisk = semua elemen di halaman."
          },
          {
            "type": "mc",
            "q": "Properti CSS untuk mengubah warna teks:",
            "options": [
              "color",
              "text-color",
              "font-color",
              "foreground"
            ],
            "a": 0,
            "explain": "color mengatur warna teks."
          },
          {
            "type": "fill",
            "q": "Beri warna latar belakang biru:\nbody {\n  ___: blue;\n}",
            "code": "body {\n  ___: blue;\n}",
            "accept": [
              "background-color",
              "background"
            ],
            "explain": "background-color mewarnai latar belakang elemen."
          },
          {
            "type": "arrange",
            "q": "Susun aturan CSS untuk tombol:",
            "blocks": [
              "button {",
              "background: #58cc02;",
              "color: white;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Selektor diikuti kurung kurawal pembuka, deklarasi properti, kurung penutup."
          },
          {
            "type": "mc",
            "q": "Selector untuk memilih elemen berdasarkan nama kelasnya:",
            "options": [
              ".judul",
              "#judul",
              "judul",
              "*judul"
            ],
            "a": 0,
            "explain": "Tanda titik (.) adalah selektor kelas CSS."
          },
          {
            "type": "fill",
            "q": "Pilih elemen dengan id \"konten\":\n___konten {\n  padding: 10px;\n}",
            "code": "___konten {\n  padding: 10px;\n}",
            "accept": [
              "#",
              "#konten"
            ],
            "explain": "Tanda pagar (#) adalah selektor id CSS."
          }
        ]
      },
      {
        "id": "css-2",
        "level": "Dasar",
        "title": "Box Model",
        "exercises": [
          {
            "type": "mc",
            "q": "Urutan box model dari DALAM ke LUAR:",
            "options": [
              "margin → border → padding → content",
              "content → padding → border → margin",
              "border → content → margin → padding",
              "padding → content → border → margin"
            ],
            "a": 1,
            "explain": "Isi dulu (content), lalu padding, border, paling luar margin."
          },
          {
            "type": "fill",
            "q": "Lengkapi: ruang di DALAM border, di luar content:",
            "code": ".kartu {\n  ___: 16px;\n}",
            "accept": [
              "padding"
            ],
            "explain": "Padding memperlebar ruang di dalam elemen."
          },
          {
            "type": "mc",
            "q": "Bedanya margin dan padding:",
            "options": [
              "Sama saja, beda nama",
              "Margin di luar elemen, padding di dalam elemen",
              "Margin hanya untuk teks, padding untuk gambar",
              "Padding dihitung dalam px, margin tidak"
            ],
            "a": 1,
            "explain": "Margin = jarak antar elemen; padding = jarak konten ke border."
          },
          {
            "type": "fill",
            "q": "Agar width elemen sudah termasuk padding & border:",
            "code": "box-sizing: ___;",
            "accept": [
              "border-box"
            ],
            "explain": "border-box mencegah elemen melebar tak terduga."
          },
          {
            "type": "mc",
            "q": "Property memperbesar ukuran teks:",
            "options": [
              "size",
              "font-size",
              "text-size",
              "font"
            ],
            "a": 1,
            "explain": "font-size: 20px; — ukuran huruf."
          },
          {
            "type": "mc",
            "q": "Properti CSS untuk mengatur ukuran font huruf:",
            "options": [
              "font-size",
              "text-size",
              "font-weight",
              "size"
            ],
            "a": 0,
            "explain": "font-size menentukan ukuran tinggi huruf."
          },
          {
            "type": "fill",
            "q": "Tebalkan huruf dengan properti font-weight:\np {\n  ___: bold;\n}",
            "code": "p {\n  ___: bold;\n}",
            "accept": [
              "font-weight"
            ],
            "explain": "font-weight: bold menebalkan huruf."
          },
          {
            "type": "arrange",
            "q": "Susun selektor kelas dengan warna dan font:",
            "blocks": [
              ".kartu {",
              "color: #333;",
              "font-size: 16px;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Struktur ruleset CSS."
          },
          {
            "type": "mc",
            "q": "Properti CSS untuk memiringkan font huruf:",
            "options": [
              "font-style: italic",
              "font-slant: true",
              "text-style: oblique",
              "italic: true"
            ],
            "a": 0,
            "explain": "font-style: italic memiringkan teks."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Ubah warna teks h1 menjadi merah dengan CSS:",
            "starter": "h1 {\n  color: red;\n}",
            "must": [
              {
                "t": "selector",
                "v": "h1"
              }
            ],
            "explain": "color: red mewarnai teks h1."
          }
        ]
      },
      {
        "id": "css-3",
        "level": "Dasar",
        "title": "Tipografi & Font",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti CSS untuk memilih keluarga font (jenis huruf):",
            "options": [
              "font-family",
              "font-name",
              "font-type",
              "typeface"
            ],
            "a": 0,
            "explain": "font-family menentukan jenis font seperti Inter, Roboto, sans-serif."
          },
          {
            "type": "fill",
            "q": "Tentukan font cadangan generik sans-serif:\nbody {\n  font-family: Arial, ___; \n}",
            "code": "body {\n  font-family: Arial, ___; \n}",
            "accept": [
              "sans-serif"
            ],
            "explain": "sans-serif adalah font fallback generik tanpa sirip."
          },
          {
            "type": "mc",
            "q": "Keluarga font generik yang memiliki kait/sirip di ujung huruf:",
            "options": [
              "serif",
              "sans-serif",
              "monospace",
              "cursive"
            ],
            "a": 0,
            "explain": "serif memiliki kait tradisional seperti Times New Roman."
          },
          {
            "type": "mc",
            "q": "Keluarga font di mana setiap karakter memiliki lebar horizontal sama:",
            "options": [
              "monospace",
              "serif",
              "sans-serif",
              "fantasy"
            ],
            "a": 0,
            "explain": "monospace cocok untuk menampilkan kode pemrograman."
          },
          {
            "type": "fill",
            "q": "Tentukan ketebalan font normal angka 400:\np {\n  font-weight: ___;\n}",
            "code": "p {\n  font-weight: ___;\n}",
            "accept": [
              "400"
            ],
            "explain": "400 adalah nilai numerik untuk font-weight normal; 700 untuk bold."
          },
          {
            "type": "fill",
            "q": "Tentukan ketebalan font tebal angka 700:\nh1 {\n  font-weight: ___;\n}",
            "code": "h1 {\n  font-weight: ___;\n}",
            "accept": [
              "700"
            ],
            "explain": "700 mewakili font-weight bold."
          },
          {
            "type": "mc",
            "q": "Properti untuk mengatur jarak spasi tinggi antar baris kalimat:",
            "options": [
              "line-height",
              "letter-spacing",
              "word-spacing",
              "row-gap"
            ],
            "a": 0,
            "explain": "line-height mengatur keterbacaan tinggi baris teks."
          },
          {
            "type": "fill",
            "q": "Atur tinggi baris 1.5 kali ukuran font:\np {\n  ___: 1.5;\n}",
            "code": "p {\n  ___: 1.5;\n}",
            "accept": [
              "line-height"
            ],
            "explain": "line-height tanpa satuan (unitless) adalah best practice."
          },
          {
            "type": "arrange",
            "q": "Susun deklarasi tipografi lengkap:",
            "blocks": [
              "h1 {",
              "font-family: sans-serif;",
              "font-size: 24px;",
              "line-height: 1.3;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Aturan tipografi berurutan."
          },
          {
            "type": "mc",
            "q": "Properti untuk mengatur jarak spasi horizontal antar huruf:",
            "options": [
              "letter-spacing",
              "word-spacing",
              "kerning",
              "text-spacing"
            ],
            "a": 0,
            "explain": "letter-spacing mengatur renggang antar karakter huruf."
          }
        ]
      },
      {
        "id": "css-4",
        "level": "Dasar",
        "title": "Text Align & Spacing",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti untuk meratakan teks ke tengah secara horizontal:",
            "options": [
              "text-align: center",
              "align: middle",
              "text-center: true",
              "float: center"
            ],
            "a": 0,
            "explain": "text-align: center meratakan teks inline ke tengah kontainer."
          },
          {
            "type": "fill",
            "q": "Ratakan teks ke kanan:\np {\n  text-align: ___;\n}",
            "code": "p {\n  text-align: ___;\n}",
            "accept": [
              "right"
            ],
            "explain": "text-align: right meratakan teks ke kanan."
          },
          {
            "type": "mc",
            "q": "Nilai text-align untuk meratakan teks rata kiri dan kanan sekaligus:",
            "options": [
              "justify",
              "center",
              "both",
              "spread"
            ],
            "a": 0,
            "explain": "text-align: justify meratakan teks ke kedua sisi margin."
          },
          {
            "type": "mc",
            "q": "Properti untuk mengubah huruf menjadi huruf kapital semua (UPPERCASE):",
            "options": [
              "text-transform: uppercase",
              "font-case: upper",
              "capitalize: true",
              "text-style: caps"
            ],
            "a": 0,
            "explain": "text-transform mengubah visual kapitalisasi teks."
          },
          {
            "type": "fill",
            "q": "Ubah huruf pertama setiap kata menjadi kapital:\nh2 {\n  text-transform: ___;\n}",
            "code": "h2 {\n  text-transform: ___;\n}",
            "accept": [
              "capitalize"
            ],
            "explain": "capitalize membuat huruf awal tiap kata kapital."
          },
          {
            "type": "mc",
            "q": "Properti untuk menghilangkan garis bawah bawaan pada tautan link <a>:",
            "options": [
              "text-decoration: none",
              "border: none",
              "link-style: none",
              "underline: false"
            ],
            "a": 0,
            "explain": "text-decoration: none menghapus garis bawah link."
          },
          {
            "type": "fill",
            "q": "Hapus garis bawah link:\na {\n  ___: none;\n}",
            "code": "a {\n  ___: none;\n}",
            "accept": [
              "text-decoration"
            ],
            "explain": "text-decoration mengontrol garis bawah/coret teks."
          },
          {
            "type": "arrange",
            "q": "Susun link tanpa garis bawah:",
            "blocks": [
              "a {",
              "color: #0066cc;",
              "text-decoration: none;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Gaya umum untuk link modern."
          },
          {
            "type": "mc",
            "q": "Properti untuk memberi jarak spasi horizontal antar kata:",
            "options": [
              "word-spacing",
              "letter-spacing",
              "gap",
              "margin"
            ],
            "a": 0,
            "explain": "word-spacing mengatur jarak antar kata."
          },
          {
            "type": "fill",
            "q": "Beri indentasi pada baris pertama paragraf:\np {\n  ___: 20px;\n}",
            "code": "p {\n  ___: 20px;\n}",
            "accept": [
              "text-indent"
            ],
            "explain": "text-indent menjorokkan baris pertama paragraf."
          }
        ]
      },
      {
        "id": "css-5",
        "level": "Dasar",
        "title": "Border & Outline",
        "exercises": [
          {
            "type": "mc",
            "q": "Tiga nilai shorthand pada properti border berurutan adalah:",
            "options": [
              "lebar garis (width), jenis garis (style), warna (color)",
              "warna, lebar, radius",
              "style saja",
              "warna saja"
            ],
            "a": 0,
            "explain": "border: 1px solid black menentukan lebar, gaya, dan warna garis tepi."
          },
          {
            "type": "fill",
            "q": "Beri garis tepi solid 1 piksel warna abu-abu:\n.kotak {\n  border: 1px ___ #ccc;\n}",
            "code": ".kotak {\n  border: 1px ___ #ccc;\n}",
            "accept": [
              "solid"
            ],
            "explain": "solid adalah jenis garis lurus tanpa putus."
          },
          {
            "type": "mc",
            "q": "Jenis border berupa garis putus-putus strip:",
            "options": [
              "dashed",
              "dotted",
              "solid",
              "double"
            ],
            "a": 0,
            "explain": "dashed menampilkan garis strip putus-putus."
          },
          {
            "type": "mc",
            "q": "Jenis border berupa titik-titik bulat:",
            "options": [
              "dotted",
              "dashed",
              "groove",
              "ridge"
            ],
            "a": 0,
            "explain": "dotted menampilkan garis titik-titik."
          },
          {
            "type": "fill",
            "q": "Buat sudut elemen membulat melengkung:\n.kartu {\n  ___: 8px;\n}",
            "code": ".kartu {\n  ___: 8px;\n}",
            "accept": [
              "border-radius"
            ],
            "explain": "border-radius melengkungkan sudut elemen."
          },
          {
            "type": "mc",
            "q": "Untuk membuat elemen persegi menjadi lingkaran sempurna, gunakan border-radius sebesar:",
            "options": [
              "50%",
              "100px",
              "25%",
              "10%"
            ],
            "a": 0,
            "explain": "border-radius: 50% pada elemen lebar=tinggi menghasilkan lingkaran sempurna."
          },
          {
            "type": "fill",
            "q": "Jadikan avatar berbentuk lingkaran:\n.avatar {\n  border-radius: ___;\n}",
            "code": ".avatar {\n  border-radius: ___;\n}",
            "accept": [
              "50%"
            ],
            "explain": "border-radius 50% menciptakan bentuk lingkaran."
          },
          {
            "type": "arrange",
            "q": "Susun tombol berbingkai bulat melengkung:",
            "blocks": [
              "button {",
              "border: 2px solid green;",
              "border-radius: 20px;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Border dan border-radius."
          },
          {
            "type": "mc",
            "q": "Perbedaan outline dan border:",
            "options": [
              "outline tidak memakan ruang box model (tidak menggeser elemen sekitar)",
              "outline selalu merah",
              "border tidak punya warna",
              "Sama persis"
            ],
            "a": 0,
            "explain": "outline digambar di luar box model tanpa mempengaruhi ukuran layout."
          },
          {
            "type": "fill",
            "q": "Hapus outline fokus default (peringatan aksesibilitas):\ninput:focus {\n  ___: none;\n}",
            "code": "input:focus {\n  ___: none;\n}",
            "accept": [
              "outline"
            ],
            "explain": "outline: none menghapus cincin fokus default."
          }
        ]
      },
      {
        "id": "css-6",
        "level": "Dasar",
        "title": "Margin & Padding",
        "exercises": [
          {
            "type": "mc",
            "q": "Perbedaan margin dan padding dalam CSS Box Model:",
            "options": [
              "padding jarak di DALAM border; margin jarak di LUAR border",
              "margin di dalam, padding di luar",
              "Sama saja",
              "padding hanya untuk teks"
            ],
            "a": 0,
            "explain": "Padding adalah ruang antara konten dan border; margin memisahkan antar elemen."
          },
          {
            "type": "fill",
            "q": "Beri ruang dalam (padding) 16px di semua sisi:\n.box {\n  ___: 16px;\n}",
            "code": ".box {\n  ___: 16px;\n}",
            "accept": [
              "padding"
            ],
            "explain": "padding menambahkan bantalan di dalam elemen."
          },
          {
            "type": "fill",
            "q": "Beri jarak luar (margin) bawah 20px:\n.card {\n  ___: 20px;\n}",
            "code": ".card {\n  ___: 20px;\n}",
            "accept": [
              "margin-bottom"
            ],
            "explain": "margin-bottom mendorong elemen di bawahnya."
          },
          {
            "type": "mc",
            "q": "Pada shorthand padding: 10px 20px, nilai 10px dan 20px mewakili:",
            "options": [
              "10px atas & bawah; 20px kiri & kanan",
              "10px kiri; 20px kanan",
              "10px atas; 20px bawah",
              "Hanya atas"
            ],
            "a": 0,
            "explain": "Shorthand 2 nilai: vertikal (atas-bawah) lalu horizontal (kiri-kanan)."
          },
          {
            "type": "mc",
            "q": "Pada shorthand margin: 10px 20px 30px 40px, urutan arahnya adalah searah jarum jam:",
            "options": [
              "Atas, Kanan, Bawah, Kiri (Top, Right, Bottom, Left)",
              "Kiri, Kanan, Atas, Bawah",
              "Bawah, Kiri, Kanan, Atas",
              "Acak"
            ],
            "a": 0,
            "explain": "Shorthand 4 nilai mengikuti arah putaran jarum jam: TRBL."
          },
          {
            "type": "fill",
            "q": "Tengahkan elemen blok dengan margin horizontal otomatis:\n.container {\n  margin: 0 ___;\n}",
            "code": ".container {\n  margin: 0 ___;\n}",
            "accept": [
              "auto"
            ],
            "explain": "margin: 0 auto menengahkan elemen berlebar tetap secara horizontal."
          },
          {
            "type": "arrange",
            "q": "Susun kontainer dengan margin auto:",
            "blocks": [
              ".wadah {",
              "width: 800px;",
              "margin: 0 auto;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "width fixed + margin auto menengahkan blok."
          },
          {
            "type": "mc",
            "q": "Fenomena di mana margin vertikal dua elemen saling melebur menjadi satu terbesar disebut:",
            "options": [
              "Margin collapsing",
              "Margin merge",
              "Margin overlap",
              "Margin overflow"
            ],
            "a": 0,
            "explain": "Margin collapsing menggabungkan margin atas-bawah yang bersebelahan."
          },
          {
            "type": "mc",
            "q": "Apakah elemen inline seperti <span> terpengaruh oleh margin-top dan margin-bottom?",
            "options": [
              "Tidak terpengaruh secara vertikal",
              "Terpengaruh penuh",
              "Hanya di Chrome",
              "Menjadi blok"
            ],
            "a": 0,
            "explain": "Elemen murni inline tidak mematuhi margin vertikal (top/bottom)."
          },
          {
            "type": "fill",
            "q": "Atur padding khusus sisi kiri:\n.item {\n  ___: 12px;\n}",
            "code": ".item {\n  ___: 12px;\n}",
            "accept": [
              "padding-left"
            ],
            "explain": "padding-left memberi ruang di sisi kiri dalam."
          }
        ]
      },
      {
        "id": "css-7",
        "level": "Dasar",
        "title": "Background & Colors",
        "exercises": [
          {
            "type": "mc",
            "q": "Model warna hex #ff0000 menghasilkan warna:",
            "options": [
              "Merah (Red)",
              "Hijau (Green)",
              "Biru (Blue)",
              "Kuning"
            ],
            "a": 0,
            "explain": "#ff0000 adalah kode hex untuk warna merah murni (R=255, G=0, B=0)."
          },
          {
            "type": "mc",
            "q": "Fungsi rgb(0, 255, 0) menghasilkan warna:",
            "options": [
              "Hijau",
              "Merah",
              "Biru",
              "Hitam"
            ],
            "a": 0,
            "explain": "Nilai G (Green) maksimal 255 menghasilkan warna hijau."
          },
          {
            "type": "mc",
            "q": "Huruf \"a\" pada rgba(0, 0, 0, 0.5) mewakili nilai:",
            "options": [
              "Alpha (tingkat transparansi / kepekatan 0 sampai 1)",
              "Altitude",
              "Angle",
              "Amplitudo"
            ],
            "a": 0,
            "explain": "Nilai alpha 0.5 berarti setengah transparan (50% opacity)."
          },
          {
            "type": "fill",
            "q": "Gunakan warna hex putih:\nbody {\n  background: #___;\n}",
            "code": "body {\n  background: #___;\n}",
            "accept": [
              "fff",
              "ffffff"
            ],
            "explain": "#ffffff atau #fff adalah putih murni."
          },
          {
            "type": "fill",
            "q": "Gunakan warna hex hitam:\nbody {\n  color: #___;\n}",
            "code": "body {\n  color: #___;\n}",
            "accept": [
              "000",
              "000000"
            ],
            "explain": "#000000 atau #000 adalah hitam murni."
          },
          {
            "type": "mc",
            "q": "Properti untuk menyematkan gambar latar belakang:",
            "options": [
              "background-image: url(\"bg.jpg\")",
              "bg-image: \"bg.jpg\"",
              "background-src: url(\"bg.jpg\")",
              "image: bg.jpg"
            ],
            "a": 0,
            "explain": "background-image: url(...) memuat gambar latar."
          },
          {
            "type": "fill",
            "q": "Cegah gambar latar belakang berulang (tiling):\nbody {\n  background-repeat: ___;\n}",
            "code": "body {\n  background-repeat: ___;\n}",
            "accept": [
              "no-repeat"
            ],
            "explain": "no-repeat mencegah perulangan gambar background."
          },
          {
            "type": "mc",
            "q": "Nilai background-size agar gambar latar menutupi seluruh area tanpa gepeng (terpotong rapi):",
            "options": [
              "cover",
              "contain",
              "100% 100%",
              "fill"
            ],
            "a": 0,
            "explain": "background-size: cover mengisi seluruh kontainer secara proporsional."
          },
          {
            "type": "fill",
            "q": "Tengahkan posisi gambar latar belakang:\nbody {\n  background-position: ___;\n}",
            "code": "body {\n  background-position: ___;\n}",
            "accept": [
              "center"
            ],
            "explain": "background-position: center memposisikan gambar di tengah."
          },
          {
            "type": "arrange",
            "q": "Susun gambar latar belakang lengkap:",
            "blocks": [
              "body {",
              "background-image: url(\"bg.jpg\");",
              "background-size: cover;",
              "background-repeat: no-repeat;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola umum background-image."
          }
        ]
      },
      {
        "id": "css-8",
        "level": "Dasar",
        "title": "Display Inline vs Block",
        "exercises": [
          {
            "type": "mc",
            "q": "Karakteristik utama elemen display: block:",
            "options": [
              "Mengambil lebar penuh satu baris dan memicu baris baru di bawahnya",
              "Hanya selebar kontennya dan sebaris",
              "Tidak terlihat",
              "Mengapung ke kanan"
            ],
            "a": 0,
            "explain": "Elemen block menempati lebar 100% dari kontainer induknya."
          },
          {
            "type": "mc",
            "q": "Karakteristik utama elemen display: inline:",
            "options": [
              "Hanya selebar kontennya dan mengalir sebaris dengan elemen lain",
              "Selalu mengambil satu baris penuh",
              "Bisa diatur lebar dan tingginya",
              "Memiliki margin vertikal"
            ],
            "a": 0,
            "explain": "Elemen inline mengalir berdampingan tanpa membuat baris baru."
          },
          {
            "type": "mc",
            "q": "Karakteristik display: inline-block:",
            "options": [
              "Mengalir sebaris seperti inline, namun DAPAT diatur width dan height seperti block",
              "Menghapus elemen",
              "Sama persis dengan block",
              "Hanya untuk teks"
            ],
            "a": 0,
            "explain": "inline-block menggabungkan fleksibilitas sebaris dengan kemampuan ukuran box."
          },
          {
            "type": "fill",
            "q": "Ubah elemen menjadi inline-block:\n.badge {\n  display: ___;\n}",
            "code": ".badge {\n  display: ___;\n}",
            "accept": [
              "inline-block"
            ],
            "explain": "inline-block mengizinkan penataan dimensi pada elemen sebaris."
          },
          {
            "type": "mc",
            "q": "Perbedaan display: none dan visibility: hidden:",
            "options": [
              "display: none menghapus elemen dari alur layout; visibility: hidden menyembunyikan visual tapi ruangnya tetap ada",
              "Sama saja",
              "visibility: none menghapus DOM",
              "Hanya beda warna"
            ],
            "a": 0,
            "explain": "display: none membuat elemen tidak memakan ruang sama sekali."
          },
          {
            "type": "fill",
            "q": "Sembunyikan elemen sepenuhnya dari layout:\n.modal-hidden {\n  ___: none;\n}",
            "code": ".modal-hidden {\n  ___: none;\n}",
            "accept": [
              "display"
            ],
            "explain": "display: none menyembunyikan dan membebaskan ruang tata letak."
          },
          {
            "type": "mc",
            "q": "Contoh elemen HTML yang bawaannya bernilai display: block:",
            "options": [
              "<div>, <p>, <h1>, <section>",
              "<span>, <a>, <strong>",
              "<img>, <input>",
              "<button>"
            ],
            "a": 0,
            "explain": "div, p, h1, section secara default bertipe block."
          },
          {
            "type": "mc",
            "q": "Contoh elemen HTML yang bawaannya bernilai display: inline:",
            "options": [
              "<span>, <a>, <em>, <strong>",
              "<div>, <p>",
              "<table>, <form>",
              "<header>"
            ],
            "a": 0,
            "explain": "span, a, em, strong secara default bertipe inline."
          },
          {
            "type": "fill",
            "q": "Jadikan link bertipe blok agar mudah diklik lebar:\na.btn {\n  display: ___;\n}",
            "code": "a.btn {\n  display: ___;\n}",
            "accept": [
              "block",
              "inline-block"
            ],
            "explain": "display: block membuat link memanjang memenuhi baris."
          },
          {
            "type": "arrange",
            "q": "Susun tombol display inline-block:",
            "blocks": [
              ".btn {",
              "display: inline-block;",
              "padding: 8px 16px;",
              "text-decoration: none;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola tombol link yang rapi."
          }
        ]
      },
      {
        "id": "css-9",
        "level": "Dasar",
        "title": "Satuan Ukuran (px, rem, em, %)",
        "exercises": [
          {
            "type": "mc",
            "q": "Satuan px (piksel) tergolong sebagai satuan:",
            "options": [
              "Absolut (tetap, tidak berubah relatif terhadap elemen induk)",
              "Relatif terhadap root",
              "Relatif terhadap viewport",
              "Persentase"
            ],
            "a": 0,
            "explain": "px adalah satuan absolut standar pada layar digital."
          },
          {
            "type": "mc",
            "q": "Satuan rem (root em) bersifat relatif terhadap:",
            "options": [
              "Ukuran font elemen root <html> (biasanya default browser 16px)",
              "Elemen induk langsung",
              "Lebar layar monitor",
              "Tinggi jendela"
            ],
            "a": 0,
            "explain": "rem selalu mengacu pada font-size elemen root html (1rem = 16px default)."
          },
          {
            "type": "mc",
            "q": "Satuan em bersifat relatif terhadap:",
            "options": [
              "Ukuran font elemen induknya (parent) langsung",
              "Elemen root html",
              "Lebar layar",
              "Jumlah karakter"
            ],
            "a": 0,
            "explain": "em mengacu pada font-size induk dan bisa menumpuk (compounding)."
          },
          {
            "type": "mc",
            "q": "Satuan vw (viewport width) sebesar 100vw berarti:",
            "options": [
              "100% dari lebar jendela tampilan browser pengguna",
              "100 piksel",
              "100% lebar elemen parent",
              "Lebar tak hingga"
            ],
            "a": 0,
            "explain": "1vw setara dengan 1% dari lebar viewport browser."
          },
          {
            "type": "mc",
            "q": "Satuan vh (viewport height) sebesar 100vh berarti:",
            "options": [
              "100% dari tinggi jendela tampilan browser pengguna",
              "100 piksel",
              "Tinggi tak terbatas",
              "Tinggi teks"
            ],
            "a": 0,
            "explain": "100vh mengisi seluruh ketinggian layar browser."
          },
          {
            "type": "fill",
            "q": "Tentukan tinggi section setinggi layar penuh:\n.hero {\n  height: 100___;\n}",
            "code": ".hero {\n  height: 100___;\n}",
            "accept": [
              "vh",
              "100vh"
            ],
            "explain": "100vh berarti 100% tinggi viewport."
          },
          {
            "type": "fill",
            "q": "Tentukan lebar 50% dari induknya:\n.kolom {\n  width: ___;\n}",
            "code": ".kolom {\n  width: ___;\n}",
            "accept": [
              "50%"
            ],
            "explain": "Persentase % relatif terhadap dimensi elemen parent."
          },
          {
            "type": "arrange",
            "q": "Susun aturan hero layar penuh:",
            "blocks": [
              ".hero {",
              "width: 100%;",
              "min-height: 100vh;",
              "background: #222;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola section hero full-screen."
          },
          {
            "type": "mc",
            "q": "Mengapa rem lebih disukai dibanding px untuk tipografi aksesibel?",
            "options": [
              "Karena ukuran rem menghormati preferensi font pengguna yang diatur di browser",
              "Karena lebih kecil",
              "Karena rem lebih cepat dimuat",
              "Hanya tren"
            ],
            "a": 0,
            "explain": "Pengguna tunanetra yang memperbesar font default browser akan diuntungkan satuan rem."
          },
          {
            "type": "fill",
            "q": "Jika root html bernilai 16px, maka 32px setara dengan berapa rem?:\nh1 {\n  font-size: ___rem;\n}",
            "code": "h1 {\n  font-size: ___rem;\n}",
            "accept": [
              "2",
              "2rem"
            ],
            "explain": "32px / 16px = 2rem."
          }
        ]
      },
      {
        "id": "css-10",
        "level": "Dasar",
        "title": "Review Fondasi CSS Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Aturan CSS mana yang menang jika terjadi konflik selektor dengan spesifisitas sama?",
            "options": [
              "Aturan yang ditulis paling terakhir (di bawah) dalam file CSS",
              "Aturan pertama",
              "Aturan yang paling pendek",
              "Dipilih acak"
            ],
            "a": 0,
            "explain": "CSS bersifat cascading: aturan setara yang ditulis terakhir menimpa aturan di atasnya."
          },
          {
            "type": "mc",
            "q": "Tingkat spesifisitas tertinggi di antara selektor berikut:",
            "options": [
              "Selektor id (#header)",
              "Selektor class (.header)",
              "Selektor tag (header)",
              "Selektor universal (*)"
            ],
            "a": 0,
            "explain": "id selector memiliki spesifisitas lebih tinggi dibanding class maupun tag."
          },
          {
            "type": "fill",
            "q": "Gunakan selektor universal untuk mereset margin:\n* {\n  ___: 0;\n}",
            "code": "* {\n  ___: 0;\n}",
            "accept": [
              "margin"
            ],
            "explain": "Selektor bintang (*) memilih semua elemen."
          },
          {
            "type": "arrange",
            "q": "Susun reset CSS sederhana:",
            "blocks": [
              "* {",
              "margin: 0;",
              "padding: 0;",
              "box-sizing: border-box;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Reset CSS modern universal."
          },
          {
            "type": "mc",
            "q": "Cara menghubungkan file CSS eksternal ke file HTML:",
            "options": [
              "<link rel=\"stylesheet\" href=\"style.css\">",
              "<style src=\"style.css\">",
              "<script href=\"style.css\">",
              "<import css=\"style.css\">"
            ],
            "a": 0,
            "explain": "<link rel=\"stylesheet\"> menghubungkan stylesheet eksternal."
          },
          {
            "type": "fill",
            "q": "Tentukan relasi stylesheet pada tag link:\n<link rel=\"___\" href=\"main.css\">",
            "code": "<link rel=\"___\" href=\"main.css\">",
            "accept": [
              "stylesheet"
            ],
            "explain": "rel=\"stylesheet\" memberi tahu browser file ini adalah CSS."
          },
          {
            "type": "mc",
            "q": "Di mana tag <style> internal ditulis di HTML?",
            "options": [
              "Di dalam bagian <head>",
              "Di dalam tag title",
              "Di luar tag html",
              "Di dalam komentar"
            ],
            "a": 0,
            "explain": "<style> internal ditempatkan di dalam elemen <head>."
          },
          {
            "type": "mc",
            "q": "Gaya CSS inline ditulis langsung pada elemen HTML menggunakan atribut:",
            "options": [
              "style=\"...\"",
              "css=\"...\"",
              "design=\"...\"",
              "format=\"...\""
            ],
            "a": 0,
            "explain": "style=\"color: red;\" adalah penulisan inline CSS."
          },
          {
            "type": "fill",
            "q": "Tulis CSS inline pada elemen paragraf:\n<p ___=\"color: blue;\">Teks</p>",
            "code": "<p ___=\"color: blue;\">Teks</p>",
            "accept": [
              "style"
            ],
            "explain": "Atribut style menyematkan CSS langsung."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Buat paragraf dengan font-size 20px:\np {\n  font-size: 20px;\n}",
            "starter": "p {\n  font-size: 20px;\n}",
            "must": [
              {
                "t": "selector",
                "v": "p"
              }
            ],
            "explain": "font-size 20px memperbesar teks."
          }
        ]
      },
      {
        "id": "css-11",
        "level": "Menengah",
        "title": "Flexbox",
        "exercises": [
          {
            "type": "mc",
            "q": "Property untuk mengaktifkan flex container:",
            "options": [
              "flex: 1",
              "display: flex",
              "layout: flex",
              "flexbox: true"
            ],
            "a": 1,
            "explain": "display: flex pada parent membuat anak-anaknya flex items."
          },
          {
            "type": "fill",
            "q": "Lengkapi agar item rata tengah secara horizontal:",
            "code": ".wrap {\n  display: flex;\n  ___-content: center;\n}",
            "accept": [
              "justify",
              "justify-content"
            ],
            "explain": "justify-content mengatur sumbu utama (horizontal di row)."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Buat dua kotak berdampingan dan rata tengah. Wajib ada di CSS: display flex + justify-content center",
            "html": "<div class=\"row\"><div class=\"box\">A</div><div class=\"box\">B</div></div>",
            "starter": ".row {\n  \n}\n.box {\n  padding: 12px;\n  background: #58cc02;\n  margin: 4px;\n}",
            "must": [
              {
                "t": "code",
                "v": "display:flex"
              },
              {
                "t": "code",
                "v": "justify-content:center"
              }
            ],
            "explain": "display:flex + justify-content:center = berdampingan dan rata tengah."
          },
          {
            "type": "mc",
            "q": "align-items: center pada flex-row membuat item rata di:",
            "options": [
              "Tengah vertikal (sumbu silang)",
              "Kiri",
              "Kanan",
              "Rata ke bawah"
            ],
            "a": 0,
            "explain": "align-items = sumbu silang (vertikal pada flex-row default)."
          },
          {
            "type": "fill",
            "q": "Agar satu flex item mengisi semua ruang sisa:",
            "code": ".item {\n  flex: ___;\n}",
            "accept": [
              "1"
            ],
            "explain": "flex: 1 → grow mengisi ruang kosong container."
          },
          {
            "type": "mc",
            "q": "Untuk mengaktifkan Flexbox pada elemen kontainer, gunakan:",
            "options": [
              "display: flex",
              "display: grid",
              "flex: true",
              "layout: flex"
            ],
            "a": 0,
            "explain": "display: flex mengubah kontainer menjadi flex container."
          },
          {
            "type": "fill",
            "q": "Jadikan elemen sebagai flex container:\n.row {\n  display: ___;\n}",
            "code": ".row {\n  display: ___;\n}",
            "accept": [
              "flex"
            ],
            "explain": "display: flex mengaktifkan flexbox."
          },
          {
            "type": "arrange",
            "q": "Susun flex container sederhana:",
            "blocks": [
              ".kontainer {",
              "display: flex;",
              "gap: 10px;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "display flex dengan jarak gap."
          },
          {
            "type": "mc",
            "q": "Arah sumbu utama (main axis) default pada Flexbox adalah:",
            "options": [
              "row (horizontal dari kiri ke kanan)",
              "column (vertikal)",
              "diagonal",
              "reverse"
            ],
            "a": 0,
            "explain": "Default flex-direction adalah row."
          },
          {
            "type": "fill",
            "q": "Ubah arah flexbox menjadi vertikal:\n.menu {\n  flex-direction: ___;\n}",
            "code": ".menu {\n  flex-direction: ___;\n}",
            "accept": [
              "column"
            ],
            "explain": "flex-direction: column menyusun anak secara vertikal kebawah."
          }
        ]
      },
      {
        "id": "css-12",
        "level": "Menengah",
        "title": "Grid",
        "exercises": [
          {
            "type": "mc",
            "q": "Property membuat grid container dengan 3 kolom sama lebar:",
            "options": [
              "display: grid; grid-template-columns: repeat(3, 1fr)",
              "display: block; columns: 3",
              "grid: 3",
              "display: table; 3"
            ],
            "a": 0,
            "explain": "repeat(3, 1fr) = 3 kolom berbagi ruang sama."
          },
          {
            "type": "fill",
            "q": "Lengkapi agar elemen membentang seluruh kolom grid:",
            "code": ".hero {\n  grid-column: 1 / ___;\n}",
            "accept": [
              "-1"
            ],
            "explain": "1 / -1 = dari kolom pertama sampai terakhir."
          },
          {
            "type": "arrange",
            "q": "Susun aturan grid 2 kolom dengan jarak:",
            "blocks": [
              ".grid {",
              "display: grid;",
              "grid-template-columns: 1fr 1fr;",
              "gap: 12px;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "display:grid + template kolom + gap."
          },
          {
            "type": "mc",
            "q": "Satuan fleksibel yang membagi sisa ruang grid secara proporsional:",
            "options": [
              "px",
              "fr",
              "em",
              "%"
            ],
            "a": 1,
            "explain": "fr = fraction dari ruang tersisa."
          },
          {
            "type": "fill",
            "q": "Jarak antar sel grid memakai property:",
            "code": ".grid {\n  display: grid;\n  ___: 16px;\n}",
            "accept": [
              "gap"
            ],
            "explain": "gap (dulu grid-gap) mengatur jarak baris & kolom."
          },
          {
            "type": "mc",
            "q": "Untuk mengaktifkan CSS Grid pada kontainer, gunakan:",
            "options": [
              "display: grid",
              "display: table",
              "grid: true",
              "layout: grid"
            ],
            "a": 0,
            "explain": "display: grid mengaktifkan sistem kisi dua dimensi."
          },
          {
            "type": "fill",
            "q": "Buat 3 kolom sama lebar pada CSS Grid:\n.grid {\n  display: grid;\n  grid-template-columns: repeat(3, ___);\n}",
            "code": ".grid {\n  display: grid;\n  grid-template-columns: repeat(3, ___);\n}",
            "accept": [
              "1fr"
            ],
            "explain": "1fr mengambil 1 fraksi ruang kosong yang tersedia."
          },
          {
            "type": "arrange",
            "q": "Susun CSS Grid 2 kolom dengan jarak gap:",
            "blocks": [
              ".galeri {",
              "display: grid;",
              "grid-template-columns: 1fr 1fr;",
              "gap: 20px;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Aturan grid dua kolom."
          },
          {
            "type": "mc",
            "q": "Properti gap pada Grid dan Flexbox berfungsi untuk:",
            "options": [
              "Memberikan jarak spasi antar item tanpa perlu margin",
              "Mengatur ketebalan border",
              "Membuat padding dalam",
              "Menggeser kontainer"
            ],
            "a": 0,
            "explain": "gap menyederhanakan penataan jarak antar item secara seragam."
          },
          {
            "type": "fill",
            "q": "Beri jarak 15px antar elemen anak flex/grid:\n.box {\n  ___: 15px;\n}",
            "code": ".box {\n  ___: 15px;\n}",
            "accept": [
              "gap"
            ],
            "explain": "gap mengatur celah antar item anak."
          }
        ]
      },
      {
        "id": "css-13",
        "level": "Menengah",
        "title": "Flexbox Direction & Wrap",
        "exercises": [
          {
            "type": "mc",
            "q": "Nilai flex-direction untuk membalik urutan item baris dari kanan ke kiri:",
            "options": [
              "row-reverse",
              "row-back",
              "invert-row",
              "flip"
            ],
            "a": 0,
            "explain": "row-reverse membalik sumbu horizontal."
          },
          {
            "type": "fill",
            "q": "Balik urutan kolom dari bawah ke atas:\n.daftar {\n  flex-direction: ___-reverse;\n}",
            "code": ".daftar {\n  flex-direction: ___-reverse;\n}",
            "accept": [
              "column",
              "column-reverse"
            ],
            "explain": "column-reverse menyusun item dari bawah ke atas."
          },
          {
            "type": "mc",
            "q": "Secara default, jika item flex melebihi lebar kontainer, mereka akan:",
            "options": [
              "Menciut dalam satu baris (flex-wrap: nowrap)",
              "Turun ke baris baru",
              "Hilang",
              "Terpotong"
            ],
            "a": 0,
            "explain": "Default flex-wrap adalah nowrap sehingga item mencoba muat di satu baris."
          },
          {
            "type": "fill",
            "q": "Lengkapi agar item flex boleh melipat ke baris baru:",
            "code": ".galeri {\n  flex-flow: row ___;\n}",
            "accept": [
              "wrap"
            ],
            "explain": "flex-wrap: wrap memungkinkan pembungkusan multi-baris."
          },
          {
            "type": "mc",
            "q": "Shorthand flex-flow menggabungkan dua properti, yaitu:",
            "options": [
              "flex-direction dan flex-wrap",
              "flex-grow dan flex-shrink",
              "justify-content dan align-items",
              "gap dan padding"
            ],
            "a": 0,
            "explain": "flex-flow: row wrap adalah gabungan flex-direction dan flex-wrap."
          },
          {
            "type": "fill",
            "q": "Tentukan shorthand arah dan pembungkusan flex:\n.kontainer {\n  flex-flow: row ___;\n}",
            "code": ".kontainer {\n  flex-flow: row ___;\n}",
            "accept": [
              "wrap",
              "nowrap"
            ],
            "explain": "flex-flow menggabungkan direction dan wrap."
          },
          {
            "type": "arrange",
            "q": "Susun flexbox multi-baris yang rapi:",
            "blocks": [
              ".daftar-produk {",
              "display: flex;",
              "flex-wrap: wrap;",
              "gap: 16px;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola layout kartu produk yang responsif."
          },
          {
            "type": "mc",
            "q": "Properti flex-grow mengatur:",
            "options": [
              "Kemampuan item untuk membesar mengisi sisa ruang kosong",
              "Ukuran font",
              "Ketebalan border",
              "Animasi zoom"
            ],
            "a": 0,
            "explain": "flex-grow: 1 membuat item membesar mengisi sisa ruang yang ada."
          },
          {
            "type": "fill",
            "q": "Izinkan elemen anak flex mengisi seluruh ruang tersisa:\n.utama {\n  flex-grow: ___;\n}",
            "code": ".utama {\n  flex-grow: ___;\n}",
            "accept": [
              "1"
            ],
            "explain": "flex-grow: 1 membagi ruang sisa secara proporsional."
          },
          {
            "type": "mc",
            "q": "Properti flex-shrink: 0 berarti:",
            "options": [
              "Item tidak boleh menciut lebih kecil dari ukuran aslinya saat sempit",
              "Item hilang",
              "Item membesar dua kali",
              "Item menjadi transparan"
            ],
            "a": 0,
            "explain": "flex-shrink: 0 mempertahankan dimensi elemen agar tidak gepeng."
          }
        ]
      },
      {
        "id": "css-14",
        "level": "Menengah",
        "title": "Justify Content & Align Items",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti justify-content pada Flexbox mengatur perataan pada sumbu:",
            "options": [
              "Sumbu utama (main axis)",
              "Sumbu silang (cross axis)",
              "Sumbu z",
              "Hanya vertikal"
            ],
            "a": 0,
            "explain": "justify-content mengontrol perataan di sepanjang main axis."
          },
          {
            "type": "mc",
            "q": "Nilai justify-content untuk meratakan item ke tengah sumbu utama:",
            "options": [
              "center",
              "middle",
              "align-center",
              "inside"
            ],
            "a": 0,
            "explain": "justify-content: center menengahkan item pada main axis."
          },
          {
            "type": "fill",
            "q": "Tengahkan item secara horizontal di main axis:\n.baris {\n  justify-content: ___;\n}",
            "code": ".baris {\n  justify-content: ___;\n}",
            "accept": [
              "center"
            ],
            "explain": "justify-content: center menengahkan elemen."
          },
          {
            "type": "mc",
            "q": "Nilai justify-content di mana item pertama mepet kiri dan item terakhir mepet kanan:",
            "options": [
              "space-between",
              "space-around",
              "space-evenly",
              "spread"
            ],
            "a": 0,
            "explain": "space-between menaruh ruang kosong di antara item tanpa jarak di tepi luar."
          },
          {
            "type": "fill",
            "q": "Beri ruang maksimal di antara item flex:\n.navbar {\n  justify-content: space-___;\n}",
            "code": ".navbar {\n  justify-content: space-___;\n}",
            "accept": [
              "between",
              "space-between"
            ],
            "explain": "space-between umum digunakan untuk navigasi bar (logo kiri, menu kanan)."
          },
          {
            "type": "mc",
            "q": "Nilai justify-content yang memberikan jarak sama di kiri-kanan setiap item dan tepian:",
            "options": [
              "space-evenly atau space-around",
              "space-between",
              "stretch",
              "center"
            ],
            "a": 0,
            "explain": "space-evenly membagi jarak kosong secara seragam merata."
          },
          {
            "type": "mc",
            "q": "Properti align-items pada Flexbox mengatur perataan pada sumbu:",
            "options": [
              "Sumbu silang (cross axis / tegak lurus)",
              "Sumbu utama",
              "Z-index",
              "Diagonal"
            ],
            "a": 0,
            "explain": "align-items mengontrol posisi pada cross axis."
          },
          {
            "type": "fill",
            "q": "Tengahkan item secara vertikal pada cross axis:\n.header {\n  align-items: ___;\n}",
            "code": ".header {\n  align-items: ___;\n}",
            "accept": [
              "center"
            ],
            "explain": "align-items: center menengahkan item vertikal pada baris."
          },
          {
            "type": "arrange",
            "q": "Susun trik legendaris menengahkan elemen horizontal & vertikal:",
            "blocks": [
              ".wadah {",
              "display: flex;",
              "justify-content: center;",
              "align-items: center;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Flexbox centering sempurna."
          },
          {
            "type": "mc",
            "q": "Nilai default dari align-items adalah:",
            "options": [
              "stretch (meregang setinggi/selebar kontainer)",
              "center",
              "flex-start",
              "baseline"
            ],
            "a": 0,
            "explain": "stretch membuat item anak otomatis setinggi kontainer flex."
          }
        ]
      },
      {
        "id": "css-15",
        "level": "Menengah",
        "title": "Grid Columns & Rows",
        "exercises": [
          {
            "type": "mc",
            "q": "Fungsi repeat() pada CSS Grid berguna untuk:",
            "options": [
              "Mengulang definisi trek kolom/baris berukuran sama secara ringkas",
              "Membuat animasi berulang",
              "Membuat tombol berulang",
              "Menambah baris teks"
            ],
            "a": 0,
            "explain": "repeat(3, 1fr) sama dengan 1fr 1fr 1fr."
          },
          {
            "type": "fill",
            "q": "Tulis 4 kolom 1fr menggunakan repeat:\n.grid {\n  grid-template-columns: repeat(___, 1fr);\n}",
            "code": ".grid {\n  grid-template-columns: repeat(___, 1fr);\n}",
            "accept": [
              "4"
            ],
            "explain": "repeat(4, 1fr) membuat 4 kolom seragam."
          },
          {
            "type": "mc",
            "q": "Properti untuk mengatur ukuran trek baris (vertikal) pada Grid:",
            "options": [
              "grid-template-rows",
              "grid-rows",
              "grid-height",
              "rows"
            ],
            "a": 0,
            "explain": "grid-template-rows menentukan tinggi baris grid."
          },
          {
            "type": "fill",
            "q": "Tentukan tinggi baris pertama 100px dan baris kedua otomatis:\n.grid {\n  grid-template-rows: 100px ___;\n}",
            "code": ".grid {\n  grid-template-rows: 100px ___;\n}",
            "accept": [
              "auto"
            ],
            "explain": "auto menyesuaikan tinggi berdasarkan isi konten."
          },
          {
            "type": "mc",
            "q": "Fungsi minmax() pada Grid digunakan untuk:",
            "options": [
              "Menentukan batas ukuran minimum dan maksimum suatu trek kolom/baris",
              "Mencari nilai terkecil",
              "Memotong teks",
              "Membuat animasi"
            ],
            "a": 0,
            "explain": "minmax(200px, 1fr) menjaga ukuran minimal 200px tapi boleh membesar 1fr."
          },
          {
            "type": "fill",
            "q": "Buat kolom dengan lebar minimum 150px dan maksimum 1fr:\n.grid {\n  grid-template-columns: ___(150px, 1fr);\n}",
            "code": ".grid {\n  grid-template-columns: ___(150px, 1fr);\n}",
            "accept": [
              "minmax"
            ],
            "explain": "minmax menetapkan rentang dinamis."
          },
          {
            "type": "arrange",
            "q": "Susun CSS Grid responsif tanpa media query:",
            "blocks": [
              ".cards {",
              "display: grid;",
              "grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));",
              "gap: 16px;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola auto-fit minmax paling populer di industri web."
          },
          {
            "type": "mc",
            "q": "Kata kunci auto-fit pada repeat Grid berguna untuk:",
            "options": [
              "Otomatis menyesuaikan jumlah kolom sebanyak mungkin yang muat di baris",
              "Mengunci satu kolom",
              "Memperbesar margin",
              "Menghapus spasi"
            ],
            "a": 0,
            "explain": "auto-fit mengisi baris dengan sebanyak mungkin kolom lalu meregangkannya."
          },
          {
            "type": "mc",
            "q": "Kata kunci auto-fill pada repeat Grid:",
            "options": [
              "Menyisakan slot kolom kosong jika ruang masih tersisa",
              "Sama persis auto-fit",
              "Hanya di mobile",
              "Membuat border"
            ],
            "a": 0,
            "explain": "auto-fill mempertahankan trek kolom kosong tanpa meregangkannya."
          },
          {
            "type": "fill",
            "q": "Tentukan jarak khusus antar baris grid:\n.grid {\n  ___-gap: 24px;\n}",
            "code": ".grid {\n  ___-gap: 24px;\n}",
            "accept": [
              "row",
              "row-gap"
            ],
            "explain": "row-gap mengatur celah horizontal antar baris."
          }
        ]
      },
      {
        "id": "css-16",
        "level": "Menengah",
        "title": "Grid Gap & Fr Units",
        "exercises": [
          {
            "type": "mc",
            "q": "Satuan fr pada CSS Grid adalah singkatan dari:",
            "options": [
              "Fraction (bagian pecahan dari ruang sisa yang tersedia)",
              "Frame",
              "Freeze",
              "Front"
            ],
            "a": 0,
            "explain": "fr mewakili fraksi fleksibel dari ruang kosong kontainer grid."
          },
          {
            "type": "mc",
            "q": "Jika ada dua kolom bertuliskan 1fr dan 2fr, maka kolom kedua memiliki lebar:",
            "options": [
              "Dua kali lebih lebar dari kolom pertama",
              "Sama lebar",
              "Setengah dari kolom pertama",
              "Tiga kali"
            ],
            "a": 0,
            "explain": "2fr mengambil jatah ruang dua kali lebih banyak daripada 1fr."
          },
          {
            "type": "fill",
            "q": "Tentukan jarak khusus antar kolom grid:\n.grid {\n  ___-gap: 16px;\n}",
            "code": ".grid {\n  ___-gap: 16px;\n}",
            "accept": [
              "column",
              "column-gap"
            ],
            "explain": "column-gap mengatur celah vertikal antar kolom."
          },
          {
            "type": "mc",
            "q": "Properti grid-column pada item grid berguna untuk:",
            "options": [
              "Menentukan di mana item mulai dan berapa kolom yang direntangkannya",
              "Mengubah warna kolom",
              "Membuat border",
              "Menambah teks"
            ],
            "a": 0,
            "explain": "grid-column: 1 / 3 merentangkan item melintasi 2 kolom."
          },
          {
            "type": "fill",
            "q": "Rentangkan item melintasi 2 kolom menggunakan span:\n.hero-card {\n  grid-column: span ___;\n}",
            "code": ".hero-card {\n  grid-column: span ___;\n}",
            "accept": [
              "2"
            ],
            "explain": "span 2 melebarkan elemen sebanyak dua kolom."
          },
          {
            "type": "arrange",
            "q": "Susun item grid yang membentang 2 kolom:",
            "blocks": [
              ".banner {",
              "grid-column: 1 / span 2;",
              "background: #333;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Penataan posisi item spesifik."
          },
          {
            "type": "mc",
            "q": "Properti grid-row pada item grid berguna untuk:",
            "options": [
              "Merentangkan item melintasi baris vertikal",
              "Menggeser horizontal",
              "Membuat animasi",
              "Menghapus baris"
            ],
            "a": 0,
            "explain": "grid-row: span 2 merentangkan item ke bawah melewati 2 baris."
          },
          {
            "type": "mc",
            "q": "Properti grid-area dapat mereferensikan nama area yang ditentukan oleh:",
            "options": [
              "grid-template-areas pada kontainer",
              "id HTML",
              "class CSS",
              "nama tag"
            ],
            "a": 0,
            "explain": "grid-template-areas memetakan layout visual dengan nama teks (seperti \"header header\")."
          },
          {
            "type": "fill",
            "q": "Lengkapi nama area grid untuk bagian atas halaman:",
            "code": ".tata {\n  grid-template-areas:\n    \"___\"\n    \"isi\";\n}",
            "accept": [
              "header",
              "nav",
              "sidebar"
            ],
            "explain": "grid-area menamai komponen untuk dipetakan."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Buat grid 2 kolom sederhana:\n.g { display: grid; grid-template-columns: 1fr 1fr; }",
            "starter": ".g { display: grid; grid-template-columns: 1fr 1fr; }",
            "must": [
              {
                "t": "selector",
                "v": ".g"
              }
            ],
            "explain": "grid-template-columns membagi kolom."
          }
        ]
      },
      {
        "id": "css-17",
        "level": "Menengah",
        "title": "Positioning (relative, absolute, fixed)",
        "exercises": [
          {
            "type": "mc",
            "q": "Nilai position default untuk semua elemen HTML adalah:",
            "options": [
              "static",
              "relative",
              "absolute",
              "fixed"
            ],
            "a": 0,
            "explain": "position: static adalah posisi bawaan mengikuti alur normal dokumen."
          },
          {
            "type": "mc",
            "q": "Karakteristik position: relative:",
            "options": [
              "Tetap di alur normal, namun dapat digeser dengan top/left dan menjadi jangkar untuk anak absolute",
              "Lepas dari alur",
              "Menempel di layar",
              "Tidak bisa digeser"
            ],
            "a": 0,
            "explain": "relative mempertahankan ruang aslinya dan menjadi containing block anak absolute."
          },
          {
            "type": "mc",
            "q": "Karakteristik position: absolute:",
            "options": [
              "Lepas dari alur normal dokumen dan memposisikan diri terhadap leluhur terdekat yang non-static",
              "Menempel di browser",
              "Tidak bisa digeser",
              "Selalu di kiri atas layar"
            ],
            "a": 0,
            "explain": "absolute mencari parent terdekat dengan position selain static."
          },
          {
            "type": "fill",
            "q": "Keluarkan elemen dari alur normal dokumen:\n.badge {\n  position: ___;\n  top: 0;\n  right: 0;\n}",
            "code": ".badge {\n  position: ___;\n  top: 0;\n  right: 0;\n}",
            "accept": [
              "absolute"
            ],
            "explain": "position: absolute menempatkan elemen relatif terhadap parent."
          },
          {
            "type": "fill",
            "q": "Jadikan kontainer sebagai jangkar acuan posisi absolute anaknya:\n.card {\n  position: ___;\n}",
            "code": ".card {\n  position: ___;\n}",
            "accept": [
              "relative"
            ],
            "explain": "position: relative pada induk mengunci koordinat anak absolute."
          },
          {
            "type": "arrange",
            "q": "Susun pola klasik badge di pojok kartu:",
            "blocks": [
              ".kartu { position: relative; }",
              ".badge { position: absolute; top: 8px; right: 8px; }"
            ],
            "explain": "Parent relative + child absolute."
          },
          {
            "type": "mc",
            "q": "Karakteristik position: fixed:",
            "options": [
              "Menempel pada viewport browser dan tidak ikut bergeser saat halaman di-scroll",
              "Mengikuti scroll",
              "Hilang saat di-scroll",
              "Hanya di mobile"
            ],
            "a": 0,
            "explain": "position: fixed mengunci elemen di jendela layar (seperti navbar melayang atau tombol chat)."
          },
          {
            "type": "fill",
            "q": "Kunci navbar agar selalu tampak di atas saat di-scroll:\n.navbar {\n  position: ___;\n  top: 0;\n  left: 0;\n}",
            "code": ".navbar {\n  position: ___;\n  top: 0;\n  left: 0;\n}",
            "accept": [
              "fixed"
            ],
            "explain": "position: fixed menempel permanen pada viewport."
          },
          {
            "type": "mc",
            "q": "Properti offset yang digunakan untuk menggeser posisi relative, absolute, fixed:",
            "options": [
              "top, right, bottom, left",
              "x, y, z",
              "margin-x, margin-y",
              "offset-1, offset-2"
            ],
            "a": 0,
            "explain": "top, right, bottom, left menentukan jarak pergeseran posisi."
          },
          {
            "type": "fill",
            "q": "Geser elemen 20 piksel dari tepi bawah layar:\n.floating-btn {\n  position: fixed;\n  ___: 20px;\n}",
            "code": ".floating-btn {\n  position: fixed;\n  ___: 20px;\n}",
            "accept": [
              "bottom"
            ],
            "explain": "bottom mengatur jarak dari sisi bawah viewport."
          }
        ]
      },
      {
        "id": "css-18",
        "level": "Menengah",
        "title": "Sticky Positioning & Z-Index",
        "exercises": [
          {
            "type": "mc",
            "q": "Karakteristik position: sticky:",
            "options": [
              "Berperilaku seperti relative sampai melewati batas scroll tertentu lalu menempel seperti fixed",
              "Selalu fixed sejak awal",
              "Selalu static",
              "Hanya di footer"
            ],
            "a": 0,
            "explain": "sticky beralih status dinamis saat titik ambang (threshold top/bottom) tercapai."
          },
          {
            "type": "fill",
            "q": "Buat header menempel saat mencapai batas atas:\n.header {\n  position: ___;\n  top: 0;\n}",
            "code": ".header {\n  position: ___;\n  top: 0;\n}",
            "accept": [
              "sticky"
            ],
            "explain": "position: sticky membutuhkan deklarasi offset seperti top: 0."
          },
          {
            "type": "mc",
            "q": "Syarat wajib agar position: sticky dapat berfungsi menempel:",
            "options": [
              "Harus mendeklarasikan setidaknya satu properti offset (misal top: 0)",
              "Harus ada animasi",
              "Harus display flex",
              "Parent harus ber-overflow hidden"
            ],
            "a": 0,
            "explain": "Tanpa nilai top/bottom/left/right, sticky tidak tahu kapan harus mulai menempel."
          },
          {
            "type": "mc",
            "q": "Jika parent suatu elemen sticky memiliki overflow: hidden, apa yang terjadi?",
            "options": [
              "Sticky tidak akan berfungsi menempel",
              "Sticky tetap jalan",
              "Elemen terhapus",
              "Layar berkedip"
            ],
            "a": 0,
            "explain": "overflow: hidden pada parent memutus konteks scroll elemen sticky."
          },
          {
            "type": "mc",
            "q": "Properti z-index digunakan untuk:",
            "options": [
              "Mengatur urutan tumpukan elemen pada sumbu kedalaman (z-axis)",
              "Mengatur transparansi",
              "Memperbesar ukuran",
              "Membuat bayangan"
            ],
            "a": 0,
            "explain": "z-index menentukan elemen mana yang tampil di depan / menimpa elemen lain."
          },
          {
            "type": "fill",
            "q": "Bawa elemen ke lapisan paling depan tumpukan:\n.modal {\n  z-index: ___;\n}",
            "code": ".modal {\n  z-index: ___;\n}",
            "accept": [
              "100",
              "999",
              "1000",
              "10"
            ],
            "explain": "Nilai z-index lebih tinggi berada di depan nilai lebih rendah."
          },
          {
            "type": "mc",
            "q": "Agar z-index dapat berfungsi, elemen harus memiliki:",
            "options": [
              "position selain static (misal relative, absolute, fixed, sticky) atau flex/grid child",
              "display inline saja",
              "border tebal",
              "warna putih"
            ],
            "a": 0,
            "explain": "z-index tidak berefek pada elemen position: static biasa."
          },
          {
            "type": "arrange",
            "q": "Susun modal pop-up dengan tumpukan z-index:",
            "blocks": [
              ".backdrop { position: fixed; z-index: 50; }",
              ".dialog { position: fixed; z-index: 60; }"
            ],
            "explain": "Dialog di atas backdrop."
          },
          {
            "type": "mc",
            "q": "Konsep Stacking Context dalam CSS berarti:",
            "options": [
              "Lapisan isolasi tumpukan di mana nilai z-index anak hanya berlaku di dalam grup parentnya",
              "Semua elemen bersaing secara global",
              "Hanya ada 1 lapis di web",
              "Batas warna"
            ],
            "a": 0,
            "explain": "Stacking Context mengisolasi urutan z-index anak di dalam induknya."
          },
          {
            "type": "fill",
            "q": "Beri z-index negatif agar berada di belakang konten:\n.bg-dekorasi {\n  position: absolute;\n  z-index: ___;\n}",
            "code": ".bg-dekorasi {\n  position: absolute;\n  z-index: ___;\n}",
            "accept": [
              "-1"
            ],
            "explain": "z-index: -1 menaruh elemen di belakang alur normal."
          }
        ]
      },
      {
        "id": "css-19",
        "level": "Menengah",
        "title": "Pseudo-Classes (:hover, :focus, :active)",
        "exercises": [
          {
            "type": "mc",
            "q": "Pseudo-class untuk memberikan gaya saat kursor mouse melayang di atas elemen:",
            "options": [
              ":hover",
              ":active",
              ":focus",
              ":visited"
            ],
            "a": 0,
            "explain": ":hover mendeteksi kursor pengguna berada di atas elemen."
          },
          {
            "type": "fill",
            "q": "Ubah warna tombol saat kursor melayang:\nbutton:___ {\n  background: #46a302;\n}",
            "code": "button:___ {\n  background: #46a302;\n}",
            "accept": [
              "hover"
            ],
            "explain": ":hover memicu gaya interaksi mouse."
          },
          {
            "type": "mc",
            "q": "Pseudo-class saat elemen sedang menerima fokus kursor/keyboard:",
            "options": [
              ":focus",
              ":hover",
              ":active",
              ":target"
            ],
            "a": 0,
            "explain": ":focus aktif saat input diklik atau tombol diarahkan via keyboard Tab."
          },
          {
            "type": "fill",
            "q": "Beri garis border biru saat input aktif:\ninput:___ {\n  border-color: #0066cc;\n}",
            "code": "input:___ {\n  border-color: #0066cc;\n}",
            "accept": [
              "focus"
            ],
            "explain": ":focus memperjelas elemen yang sedang berinteraksi."
          },
          {
            "type": "mc",
            "q": "Pseudo-class saat tombol sedang ditekan/diklik (antara mouse down dan mouse up):",
            "options": [
              ":active",
              ":hover",
              ":focus",
              ":click"
            ],
            "a": 0,
            "explain": ":active aktif sesaat saat klik mouse sedang ditahan."
          },
          {
            "type": "mc",
            "q": "Pseudo-class untuk link yang sudah pernah dikunjungi di histori browser:",
            "options": [
              ":visited",
              ":old",
              ":history",
              ":seen"
            ],
            "a": 0,
            "explain": ":visited memberi gaya berbeda pada tautan yang sudah dibuka."
          },
          {
            "type": "mc",
            "q": "Pseudo-class untuk memilih anak pertama dari suatu elemen:",
            "options": [
              ":first-child",
              ":first",
              ":start",
              ":one"
            ],
            "a": 0,
            "explain": ":first-child memilih elemen yang merupakan anak sulung induknya."
          },
          {
            "type": "mc",
            "q": "Pseudo-class untuk memilih anak terakhir dari suatu elemen:",
            "options": [
              ":last-child",
              ":end",
              ":final",
              ":bottom"
            ],
            "a": 0,
            "explain": ":last-child memilih elemen yang merupakan anak bungsu."
          },
          {
            "type": "fill",
            "q": "Pilih anak urutan ke-3:\nli:___(3) {\n  font-weight: bold;\n}",
            "code": "li:___(3) {\n  font-weight: bold;\n}",
            "accept": [
              "nth-child"
            ],
            "explain": ":nth-child(n) memilih anak ke-n secara spesifik."
          },
          {
            "type": "arrange",
            "q": "Susun warna selang-seling baris tabel (zebra striping):",
            "blocks": [
              "tr:nth-child(even) {",
              "background-color: #f9f9f9;",
              "}"
            ],
            "explain": ":nth-child(even) mewarnai baris genap."
          }
        ]
      },
      {
        "id": "css-20",
        "level": "Menengah",
        "title": "Box Sizing border-box & Overflow",
        "exercises": [
          {
            "type": "mc",
            "q": "Perbedaan box-sizing: content-box (default) dan box-sizing: border-box:",
            "options": [
              "border-box memasukkan padding & border ke dalam hitungan width; content-box menambahkannya di luar",
              "Sama persis",
              "border-box membuat elemen transparan",
              "content-box lebih modern"
            ],
            "a": 0,
            "explain": "border-box memastikan elemen berlebar 100px tetap 100px meskipun diberi padding/border."
          },
          {
            "type": "fill",
            "q": "Terapkan box-sizing modern:\n* {\n  box-sizing: ___-box;\n}",
            "code": "* {\n  box-sizing: ___-box;\n}",
            "accept": [
              "border",
              "border-box"
            ],
            "explain": "box-sizing: border-box adalah standar industri web modern."
          },
          {
            "type": "mc",
            "q": "Properti overflow mengatur perilaku saat:",
            "options": [
              "Konten di dalam elemen meluap melebihi ukuran kotak kontainernya",
              "Warna teks bertabrakan",
              "Gambar pecah",
              "Font gagal dimuat"
            ],
            "a": 0,
            "explain": "overflow mengontrol konten yang meluap dari batas dimensi kotak."
          },
          {
            "type": "mc",
            "q": "Nilai overflow: hidden berfungsi untuk:",
            "options": [
              "Memotong dan menyembunyikan konten yang meluap keluar kotak",
              "Memunculkan scrollbar",
              "Memperbesar kotak",
              "Menghapus konten"
            ],
            "a": 0,
            "explain": "overflow: hidden memangkas bagian konten yang meluap."
          },
          {
            "type": "mc",
            "q": "Nilai overflow: auto berfungsi untuk:",
            "options": [
              "Memunculkan scrollbar hanya jika konten benar-benar meluap melebihi batas",
              "Selalu memunculkan scrollbar",
              "Menghapus teks",
              "Menutup jendela"
            ],
            "a": 0,
            "explain": "overflow: auto memunculkan bilah gulir secara cerdas hanya saat dibutuhkan."
          },
          {
            "type": "fill",
            "q": "Izinkan scroll horizontal saat konten tabel melebar di mobile:\n.table-wrap {\n  overflow-x: ___;\n}",
            "code": ".table-wrap {\n  overflow-x: ___;\n}",
            "accept": [
              "auto",
              "scroll"
            ],
            "explain": "overflow-x: auto mengaktifkan scroll samping yang aman di HP."
          },
          {
            "type": "arrange",
            "q": "Susun kontainer scrollable yang rapi:",
            "blocks": [
              ".scroll-box {",
              "max-height: 300px;",
              "overflow-y: auto;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "max-height + overflow-y auto membatasi tinggi."
          },
          {
            "type": "mc",
            "q": "Properti untuk memotong teks satu baris yang terlalu panjang dan menggantinya dengan titik-titik (...):",
            "options": [
              "text-overflow: ellipsis",
              "text-cut: true",
              "overflow: dots",
              "font-trim: true"
            ],
            "a": 0,
            "explain": "text-overflow: ellipsis memotong teks dengan elipsis (...)."
          },
          {
            "type": "fill",
            "q": "Gunakan elipsis titik-titik pada teks meluap:\n.truncate {\n  text-overflow: ___;\n}",
            "code": ".truncate {\n  text-overflow: ___;\n}",
            "accept": [
              "ellipsis"
            ],
            "explain": "ellipsis menampilkan simbol ... pada teks terpotong."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Ubah warna link saat di-hover menjadi oranye:\na:hover { color: orange; }",
            "starter": "a:hover { color: orange; }",
            "must": [
              {
                "t": "selector",
                "v": "a:hover"
              }
            ],
            "explain": "a:hover bereaksi saat mouse lewat."
          }
        ]
      },
      {
        "id": "css-21",
        "level": "Advance",
        "title": "Responsif & Unit",
        "exercises": [
          {
            "type": "mc",
            "q": "Media query untuk layar minimal 768px:",
            "options": [
              "@media (min-width: 768px) { }",
              "@media (width >= 768) { }",
              "@if screen 768 { }",
              "@screen(min:768) { }"
            ],
            "a": 0,
            "explain": "min-width = mobile-first: makin lebar, aturan menimpa."
          },
          {
            "type": "fill",
            "q": "Lengkapi media query untuk layar minimal 1024px:",
            "code": "@media (min-width: ___px) { /* desktop */ }",
            "accept": [
              "1024",
              "1024px"
            ],
            "explain": "1024px = ambang umum tablet-landscape/desktop."
          },
          {
            "type": "mc",
            "q": "Unit relatif terhadap ukuran font elemen akar (root) dokumen:",
            "options": [
              "px",
              "rem",
              "cm",
              "pt"
            ],
            "a": 1,
            "explain": "rem = kelipatan font-size root; scaling aksesibilitas lebih baik."
          },
          {
            "type": "fill",
            "q": "Agar padding dihitung dari lebar, bukan menambah lebar:",
            "code": "*, *::before, *::after {\n  box-sizing: ___;\n}",
            "accept": [
              "border-box"
            ],
            "explain": "border-box = lebar sudah termasuk padding & border."
          },
          {
            "type": "mc",
            "q": "Satuan viewport untuk tinggi penuh layar mobile yang aman:",
            "options": [
              "100vh",
              "100dvh (dynamic viewport height)",
              "100%",
              "auto"
            ],
            "a": 1,
            "explain": "dvh menyesuaikan toolbar dinamis browser mobile."
          },
          {
            "type": "mc",
            "q": "Properti transition pada CSS digunakan untuk:",
            "options": [
              "Membuat perubahan nilai properti berlangsung mulus secara bertahap (animasi)",
              "Membuat halaman melompat",
              "Mengganti warna instan",
              "Menghapus CSS"
            ],
            "a": 0,
            "explain": "transition menganimasikan perubahan nilai CSS secara halus."
          },
          {
            "type": "fill",
            "q": "Tentukan durasi transisi 0.3 detik untuk semua properti:\n.btn {\n  transition: all ___s ease;\n}",
            "code": ".btn {\n  transition: all ___s ease;\n}",
            "accept": [
              "0.3",
              ".3",
              "0.3s",
              ".3s"
            ],
            "explain": "Durasi menentukan lama waktu animasi transisi."
          },
          {
            "type": "arrange",
            "q": "Susun transisi hover tombol yang mulus:",
            "blocks": [
              "button {",
              "background: blue;",
              "transition: background 0.25s ease;",
              "}",
              "button:hover { background: darkblue; }"
            ],
            "answers": [[0,2,1,3,4]],
            "explain": "Transisi diletakkan pada selector dasar, bukan hanya di hover."
          },
          {
            "type": "mc",
            "q": "Di mana properti transition sebaiknya diletakkan?",
            "options": [
              "Pada state normal/dasar elemen, agar mulus bolak-balik saat hover masuk dan keluar",
              "Hanya di :hover",
              "Hanya di :active",
              "Di tag html"
            ],
            "a": 0,
            "explain": "Menaruh transition di state normal memastikan efek halus saat kursor masuk MAUPUN keluar."
          },
          {
            "type": "fill",
            "q": "Tentukan kurva percepatan transisi yang melambat di akhir:\n.modal {\n  transition: opacity 0.3s ___-out;\n}",
            "code": ".modal {\n  transition: opacity 0.3s ___-out;\n}",
            "accept": [
              "ease",
              "ease-out"
            ],
            "explain": "ease-out melambat saat mendekati akhir animasi."
          }
        ]
      },
      {
        "id": "css-22",
        "level": "Advance",
        "title": "Animasi & Transisi",
        "exercises": [
          {
            "type": "fill",
            "q": "Lengkapi transisi border saat hover:",
            "code": ".btn:hover {\n  transition: border-color ___ ease;\n}",
            "accept": [
              "0.2s",
              ".2s",
              "0.15s",
              "0.3s"
            ],
            "explain": "Durasi transisi pendek = respon terasa responsif."
          },
          {
            "type": "mc",
            "q": "Aturan CSS yang wajib dihormati untuk aksesibilitas gerak:",
            "options": [
              "@media (prefers-reduced-motion: reduce)",
              "@media (motion: off)",
              "@media (no-animation)",
              "tidak ada"
            ],
            "a": 0,
            "explain": "Matikan animasi bila sistem meminta mengurangi gerak."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Buat transisi warna latar 0.3s pada .kotak. Wajib ada transition + background-color",
            "html": "<div class=\"kotak\">Hi</div>",
            "starter": ".kotak {\n  background: #58cc02;\n  padding: 20px;\n  color: #fff;\n}",
            "must": [
              {
                "t": "code",
                "v": "transition"
              },
              {
                "t": "code",
                "v": "background-color"
              }
            ],
            "explain": "transition: background-color 0.3s ease;"
          },
          {
            "type": "mc",
            "q": "Untuk memutar elemen 45 derajat:",
            "options": [
              "transform: rotate(45deg)",
              "transform: turn(45)",
              "rotate: 45",
              "spin(45deg)"
            ],
            "a": 0,
            "explain": "transform: rotate(<sudut>) memutar elemen."
          },
          {
            "type": "fill",
            "q": "Lengkapi keyframes agar elemen bergerak mulus:",
            "code": "@keyframes gerak { from { opacity: 0 } to { opacity: ___ } }",
            "accept": [
              "1"
            ],
            "explain": "Animasi dari opacity 0 ke 1 (fade in)."
          },
          {
            "type": "mc",
            "q": "Media query @media (min-width: 768px) aktif ketika:",
            "options": [
              "Lebar viewport layar minimal 768px (layar tablet atau lebih besar)",
              "Lebar layar di bawah 768px",
              "Hanya di printer",
              "Saat layar mati"
            ],
            "a": 0,
            "explain": "min-width mencirikan pendekatan Mobile-First (berlaku ke atas)."
          },
          {
            "type": "fill",
            "q": "Tentukan media query untuk layar minimal 1024px desktop:\n@media (min-width: ___px) {}",
            "code": "@media (min-width: ___px) {}",
            "accept": [
              "1024",
              "1024px"
            ],
            "explain": "1024px adalah breakpoint umum layar desktop."
          },
          {
            "type": "arrange",
            "q": "Susun media query mobile-first:",
            "blocks": [
              ".col { width: 100%; }",
              "@media (min-width: 640px) {",
              ".col { width: 50%; }",
              "}"
            ],
            "explain": "Mobile-first: dasar 100% lalu tablet 50%."
          },
          {
            "type": "mc",
            "q": "Sintaks penulisan variabel CSS (Custom Properties) diawali dengan tanda:",
            "options": [
              "Dua tanda minus (--nama-variabel)",
              "Tanda dolar ($var)",
              "Tanda pagar (#var)",
              "Tanda ampersand (&var)"
            ],
            "a": 0,
            "explain": "CSS Custom Properties diawali tanda strip ganda (--primary: #58cc02)."
          },
          {
            "type": "fill",
            "q": "Gunakan variabel CSS dengan fungsi var():\n.btn {\n  background: ___(--warna-utama);\n}",
            "code": ".btn {\n  background: ___(--warna-utama);\n}",
            "accept": [
              "var"
            ],
            "explain": "Fungsi var(--nama) membaca nilai custom property."
          }
        ]
      },
      {
        "id": "css-23",
        "level": "Advance",
        "title": "Keyframes Animation",
        "exercises": [
          {
            "type": "mc",
            "q": "At-rule CSS untuk mendefinisikan tahapan animasi kustom:",
            "options": [
              "@keyframes",
              "@animation",
              "@motion",
              "@transition"
            ],
            "a": 0,
            "explain": "@keyframes mendefinisikan timeline animasi kustom."
          },
          {
            "type": "fill",
            "q": "Definisikan keyframes bernama putar:\n@___ putar {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
            "code": "@___ putar {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(360deg); }\n}",
            "accept": [
              "keyframes"
            ],
            "explain": "@keyframes membuat urutan animasi."
          },
          {
            "type": "arrange",
            "q": "Susun animasi berputar lengkap:",
            "blocks": [
              "@keyframes spin { to { transform: rotate(360deg); } }",
              ".spinner { animation: spin 1s linear infinite; }"
            ],
            "explain": "Definisi keyframes lalu diterapkan ke elemen."
          },
          {
            "type": "mc",
            "q": "Nilai animation-iteration-count agar animasi berjalan terus tanpa henti:",
            "options": [
              "infinite",
              "loop",
              "repeat",
              "forever"
            ],
            "a": 0,
            "explain": "infinite membuat animasi berulang tanpa batas."
          },
          {
            "type": "fill",
            "q": "Ulang animasi terus menerus:\n.pulse {\n  animation-iteration-count: ___;\n}",
            "code": ".pulse {\n  animation-iteration-count: ___;\n}",
            "accept": [
              "infinite"
            ],
            "explain": "infinite mengulang animasi."
          },
          {
            "type": "mc",
            "q": "Nilai animation-fill-mode: forwards berfungsi untuk:",
            "options": [
              "Mempertahankan gaya dari frame terakhir saat animasi selesai",
              "Mengulang animasi mundur",
              "Menghapus elemen",
              "Mematikan animasi"
            ],
            "a": 0,
            "explain": "forwards mempertahankan kondisi akhir dari keyframe 100%."
          },
          {
            "type": "fill",
            "q": "Pertahankan state akhir animasi:\n.fade-in {\n  animation-fill-mode: ___;\n}",
            "code": ".fade-in {\n  animation-fill-mode: ___;\n}",
            "accept": [
              "forwards"
            ],
            "explain": "forwards mengunci hasil akhir animasi."
          },
          {
            "type": "mc",
            "q": "Nilai animation-direction: alternate berarti:",
            "options": [
              "Animasi bergerak maju lalu mundur secara bergantian",
              "Animasi berhenti",
              "Animasi melompat",
              "Animasi acak"
            ],
            "a": 0,
            "explain": "alternate memutar animasi bolak-balik (maju lalu mundur)."
          },
          {
            "type": "fill",
            "q": "Jeda animasi sementara dengan properti:\n.anim {\n  animation-play-state: ___;\n}",
            "code": ".anim {\n  animation-play-state: ___;\n}",
            "accept": [
              "paused"
            ],
            "explain": "paused membekukan animasi di posisinya saat ini."
          },
          {
            "type": "mc",
            "q": "Kata kunci from dan to pada @keyframes setara dengan persentase:",
            "options": [
              "0% dan 100%",
              "10% dan 90%",
              "50% dan 50%",
              "0% dan 50%"
            ],
            "a": 0,
            "explain": "from = 0%; to = 100%."
          }
        ]
      },
      {
        "id": "css-24",
        "level": "Advance",
        "title": "Transform 2D & 3D",
        "exercises": [
          {
            "type": "mc",
            "q": "Fungsi transform untuk menggeser elemen secara visual tanpa merusak alur layout:",
            "options": [
              "translate(x, y)",
              "move(x, y)",
              "offset(x, y)",
              "shift(x, y)"
            ],
            "a": 0,
            "explain": "translate() menggeser posisi elemen dengan performa GPU yang efisien."
          },
          {
            "type": "fill",
            "q": "Lengkapi fungsi transform yang menggeser elemen mengikuti sumbu horizontal:",
            "code": ".box {\n  transform: translate___(-50%);\n}",
            "accept": [
              "X",
              "x",
              "translateX",
              "translatex"
            ],
            "explain": "translateX menggeser pada sumbu horizontal."
          },
          {
            "type": "mc",
            "q": "Fungsi transform untuk memutar elemen sebesar sudut tertentu:",
            "options": [
              "rotate(45deg)",
              "turn(45)",
              "spin(45)",
              "angle(45)"
            ],
            "a": 0,
            "explain": "rotate(45deg) memutar elemen searah jarum jam sebesar 45 derajat."
          },
          {
            "type": "fill",
            "q": "Putar elemen 180 derajat:\n.panah {\n  transform: rotate(___deg);\n}",
            "code": ".panah {\n  transform: rotate(___deg);\n}",
            "accept": [
              "180",
              "180deg"
            ],
            "explain": "rotate(180deg) membalik elemen terbalik."
          },
          {
            "type": "mc",
            "q": "Fungsi transform untuk memperbesar atau memperkecil skala ukuran elemen:",
            "options": [
              "scale(1.2)",
              "zoom(1.2)",
              "size(1.2)",
              "grow(1.2)"
            ],
            "a": 0,
            "explain": "scale(1.2) memperbesar tampilan elemen sebesar 120%."
          },
          {
            "type": "fill",
            "q": "Perbesar elemen 10% saat di-hover:\n.card:hover {\n  transform: scale(___);\n}",
            "code": ".card:hover {\n  transform: scale(___);\n}",
            "accept": [
              "1.1"
            ],
            "explain": "scale(1.1) memberi efek pembesaran lembut."
          },
          {
            "type": "arrange",
            "q": "Susun trik legendaris menengahkan absolute dengan translate:",
            "blocks": [
              ".center {",
              "position: absolute;",
              "top: 50%; left: 50%;",
              "transform: translate(-50%, -50%);",
              "}"
            ],
            "explain": "Pusat sejati absolute centering."
          },
          {
            "type": "mc",
            "q": "Properti transform-origin menentukan:",
            "options": [
              "Titik tumpu / pusat jangkar di mana rotasi atau skala dilakukan",
              "Arah gerakan",
              "Waktu animasi",
              "Warna bayangan"
            ],
            "a": 0,
            "explain": "transform-origin: center atau top left menentukan poros transformasi."
          },
          {
            "type": "mc",
            "q": "Mengapa menganimasikan transform dan opacity lebih halus (60fps) dibanding top/left/width?",
            "options": [
              "Karena diproses di GPU (Compositor thread) tanpa memicu reflow/repaint mahal",
              "Hanya mitos",
              "Karena CSS baru",
              "Hanya di Mac"
            ],
            "a": 0,
            "explain": "Transform & opacity adalah properti \"composite-only\" yang sangat cepat di GPU."
          },
          {
            "type": "fill",
            "q": "Miringkan elemen secara visual pada sumbu X:\n.miring {\n  transform: ___X(15deg);\n}",
            "code": ".miring {\n  transform: ___X(15deg);\n}",
            "accept": [
              "skew",
              "skewX",
              "skewx"
            ],
            "explain": "skewX memiringkan bidang elemen."
          }
        ]
      },
      {
        "id": "css-25",
        "level": "Advance",
        "title": "Media Queries Mobile-First",
        "exercises": [
          {
            "type": "mc",
            "q": "Filosofi desain Mobile-First dalam CSS berarti:",
            "options": [
              "Menulis gaya dasar untuk layar HP terlebih dahulu, lalu menambah @media min-width untuk layar besar",
              "Membuat situs hanya untuk HP",
              "Tidak boleh ada versi desktop",
              "Hanya memakai foto kecil"
            ],
            "a": 0,
            "explain": "Mobile-First memastikan performa optimal di perangkat paling terbatas lebih dulu."
          },
          {
            "type": "mc",
            "q": "Media query untuk mendeteksi mode gelap (Dark Mode) sistem operasi pengguna:",
            "options": [
              "@media (prefers-color-scheme: dark)",
              "@media (dark-mode: true)",
              "@media (theme: dark)",
              "@media (color: black)"
            ],
            "a": 0,
            "explain": "prefers-color-scheme: dark mendeteksi preferensi tema pengguna."
          },
          {
            "type": "fill",
            "q": "Deteksi mode gelap sistem pengguna:\n@media (___: dark) {\n  body { background: #121212; color: #fff; }\n}",
            "code": "@media (___: dark) {\n  body { background: #121212; color: #fff; }\n}",
            "accept": [
              "prefers-color-scheme"
            ],
            "explain": "prefers-color-scheme mendeteksi tema OS."
          },
          {
            "type": "mc",
            "q": "Media query untuk mendeteksi pengguna yang menyetel \"Kurangi Gerakan\" (aksesibilitas motion sickness):",
            "options": [
              "@media (prefers-reduced-motion: reduce)",
              "@media (no-motion)",
              "@media (motion: off)",
              "@media (animation: false)"
            ],
            "a": 0,
            "explain": "prefers-reduced-motion: reduce mematikan animasi bagi orang yang sensitif pusing/vertigo."
          },
          {
            "type": "fill",
            "q": "Lengkapi media feature yang membaca preferensi gerakan dari sistem:",
            "code": "@media (___: reduce) {\n  * { animation: none !important; }\n}",
            "accept": [
              "prefers-reduced-motion"
            ],
            "explain": "prefers-reduced-motion: reduce = sinyal sistem untuk mematikan animasi berlebih."
          },
          {
            "type": "arrange",
            "q": "Susun dark mode otomatis ramah OS:",
            "blocks": [
              "body { background: white; color: black; }",
              "@media (prefers-color-scheme: dark) {",
              "body { background: #111; color: white; }",
              "}"
            ],
            "explain": "Desain dark mode adaptif."
          },
          {
            "type": "mc",
            "q": "Media query untuk mendeteksi orientasi layar apakah sedang lanskap (lebar > tinggi):",
            "options": [
              "@media (orientation: landscape)",
              "@media (screen: horizontal)",
              "@media (view: wide)",
              "@media (rotation: 90)"
            ],
            "a": 0,
            "explain": "orientation: landscape mendeteksi layar dalam mode rebah."
          },
          {
            "type": "fill",
            "q": "Deteksi orientasi tegak portrait HP:\n@media (orientation: ___) {}",
            "code": "@media (orientation: ___) {}",
            "accept": [
              "portrait"
            ],
            "explain": "portrait aktif saat tinggi layar lebih besar dari lebarnya."
          },
          {
            "type": "mc",
            "q": "Media query khusus untuk styling saat halaman dicetak ke kertas printer:",
            "options": [
              "@media print",
              "@media paper",
              "@media output",
              "@media pdf"
            ],
            "a": 0,
            "explain": "@media print mengatur format halaman yang dikirim ke mesin cetak."
          },
          {
            "type": "mc",
            "q": "Sintaks rentang media query modern CSS level 4 yang lebih ringkas:",
            "options": [
              "@media (width >= 768px)",
              "@media (min-max: 768px)",
              "@media (screen: 768px+)",
              "@media [768px...]"
            ],
            "a": 0,
            "explain": "@media (width >= 768px) adalah sintaks rentang perbandingan modern."
          }
        ]
      },
      {
        "id": "css-26",
        "level": "Advance",
        "title": "Container Queries Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Perbedaan utama Media Queries dan Container Queries (@container):",
            "options": [
              "Media queries merespons ukuran jendela browser; Container queries merespons ukuran kontainer induk elemen",
              "Sama persis",
              "Container queries hanya di CSS Grid",
              "Media queries sudah usang"
            ],
            "a": 0,
            "explain": "Container queries membuat komponen adaptif terhadap ruang kolom tempat ia berada."
          },
          {
            "type": "fill",
            "q": "Aktifkan container context pada induk komponen:\n.card-wrapper {\n  container-type: ___-size;\n}",
            "code": ".card-wrapper {\n  container-type: ___-size;\n}",
            "accept": [
              "inline",
              "inline-size"
            ],
            "explain": "container-type: inline-size mengukur lebar horizontal kontainer."
          },
          {
            "type": "arrange",
            "q": "Susun container query modern:",
            "blocks": [
              ".kartu-induk { container-type: inline-size; }",
              "@container (min-width: 400px) {",
              ".kartu { display: flex; }",
              "}"
            ],
            "explain": "container-type pada parent lalu query @container."
          },
          {
            "type": "mc",
            "q": "Satuan cq (Container Query units) cqw mewakili:",
            "options": [
              "1% dari lebar query container",
              "100 piksel",
              "Ukuran font kontainer",
              "Jumlah kolom"
            ],
            "a": 0,
            "explain": "1cqw = 1% dari lebar kontainer terdekat."
          },
          {
            "type": "fill",
            "q": "Lengkapi properti container query yang menentukan jenis pelacakan ukuran:",
            "code": ".kartu-samping {\n  ___: inline-size;\n}",
            "accept": [
              "container-type"
            ],
            "explain": "container-type: inline-size membuat elemen menjadi query container berdasar lebarnya."
          },
          {
            "type": "mc",
            "q": "Mengapa container-type: size (mengukur width dan height) jarang dipakai dibanding inline-size?",
            "options": [
              "Karena mengukur tinggi sering memicu infinite loop layout reflow",
              "Karena error",
              "Hanya di Firefox",
              "Terlalu lambat"
            ],
            "a": 0,
            "explain": "inline-size jauh lebih aman karena konten teks biasanya mengalir vertikal."
          },
          {
            "type": "mc",
            "q": "Kapan Container Queries sangat unggul dibanding Media Queries?",
            "options": [
              "Pada sistem komponen modular (Design System) yang bisa ditaruh di sidebar sempit ATAU kolom utama lebar",
              "Saat mencetak kertas",
              "Saat mendownload font",
              "Hanya untuk background"
            ],
            "a": 0,
            "explain": "Komponen kartu yang sama bisa otomatis 1 kolom di sidebar dan 2 kolom di area utama."
          },
          {
            "type": "fill",
            "q": "Query kontainer bernama sidebar:\n@container ___ (min-width: 300px) {}",
            "code": "@container ___ (min-width: 300px) {}",
            "accept": [
              "sidebar"
            ],
            "explain": "@container nama (kondisi)."
          },
          {
            "type": "mc",
            "q": "Browser mana yang sudah mendukung CSS Container Queries secara luas saat ini?",
            "options": [
              "Semua browser modern utama (Chrome, Firefox, Safari, Edge)",
              "Belum ada",
              "Hanya Safari",
              "Hanya Android"
            ],
            "a": 0,
            "explain": "Container Queries telah didukung penuh di Baseline modern browser sejak 2023."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Gunakan variabel CSS untuk warna:\n:root { --p: #58cc02; } .t { color: var(--p); }",
            "starter": ":root { --p: #58cc02; } .t { color: var(--p); }",
            "must": [
              {
                "t": "selector",
                "v": ":root"
              }
            ],
            "explain": "var() membaca nilai variabel."
          }
        ]
      },
      {
        "id": "css-27",
        "level": "Advance",
        "title": "CSS Variables (Custom Properties)",
        "exercises": [
          {
            "type": "mc",
            "q": "Di mana tempat terbaik mendeklarasikan variabel CSS yang dapat diakses di seluruh halaman?",
            "options": [
              "Selektor :root",
              "Tag <div>",
              "File HTML",
              "Di dalam komentar"
            ],
            "a": 0,
            "explain": ":root mewakili elemen teratas dokumen HTML dengan spesifisitas tinggi."
          },
          {
            "type": "fill",
            "q": "Deklarasikan variabel warna utama pada root dokumen:\n:root {\n  ___-primary: #58cc02;\n}",
            "code": ":root {\n  ___-primary: #58cc02;\n}",
            "accept": [
              "--",
              "--primary"
            ],
            "explain": "Variabel CSS wajib diawali strip ganda (--)."
          },
          {
            "type": "mc",
            "q": "Cara memberikan nilai cadangan (fallback) pada fungsi var() jika variabel belum ada:",
            "options": [
              "var(--warna-teks, #333333)",
              "var(--warna-teks || #333)",
              "var(--warna-teks default #333)",
              "fallback(--warna-teks)"
            ],
            "a": 0,
            "explain": "Parameter kedua pada var() adalah nilai cadangan (fallback)."
          },
          {
            "type": "fill",
            "q": "Beri fallback warna hitam jika variabel kosong:\ncolor: var(--theme-color, ___);",
            "code": "color: var(--theme-color, ___);",
            "accept": [
              "black",
              "#000",
              "#000000"
            ],
            "explain": "Parameter kedua menjadi cadangan saat variabel tidak terdefinisi."
          },
          {
            "type": "arrange",
            "q": "Susun sistem tema menggunakan variabel CSS:",
            "blocks": [
              ":root { --bg: #fff; --text: #111; }",
              "@media (prefers-color-scheme: dark) {",
              ":root { --bg: #111; --text: #fff; }",
              "}"
            ],
            "explain": "Mengubah nilai variabel di dark mode otomatis mengubah seluruh komponen."
          },
          {
            "type": "mc",
            "q": "Apakah nilai variabel CSS dapat diubah secara dinamis menggunakan JavaScript?",
            "options": [
              "Bisa, dengan document.documentElement.style.setProperty(\"--nama\", \"nilai\")",
              "Tidak bisa, statis permanen",
              "Hanya di file PHP",
              "Hanya lewat reload halaman"
            ],
            "a": 0,
            "explain": "setProperty() memungkinkan manipulasi variabel tema secara instan via JS."
          },
          {
            "type": "fill",
            "q": "Ganti variabel CSS via JS:\nel.style.setProperty(\"___-bg\", \"red\");",
            "code": "el.style.setProperty(\"___-bg\", \"red\");",
            "accept": [
              "--",
              "--bg"
            ],
            "explain": "setProperty memerlukan prefiks strip ganda."
          },
          {
            "type": "mc",
            "q": "Kelebihan utama CSS Variables dibanding variabel SCSS/Sass preprocessor:",
            "options": [
              "CSS Variables hidup di runtime browser (bisa berubah dinamis sesuai DOM & media query)",
              "SCSS lebih cepat",
              "CSS Variables tidak butuh teks",
              "Sama persis"
            ],
            "a": 0,
            "explain": "CSS variables bereaksi langsung di browser tanpa perlu kompilasi ulang."
          },
          {
            "type": "mc",
            "q": "Apakah variabel CSS mewarisi nilainya ke elemen anak (inheritance)?",
            "options": [
              "Ya, elemen anak mewarisi nilai variabel induknya kecuali dioverride",
              "Tidak pernah",
              "Hanya tag p",
              "Hanya di flexbox"
            ],
            "a": 0,
            "explain": "Variabel CSS mematuhi aturan pewarisan (cascade & inheritance)."
          },
          {
            "type": "fill",
            "q": "Gunakan variabel radius:\n.box {\n  border-radius: var(___);\n}",
            "code": ".box {\n  border-radius: var(___);\n}",
            "accept": [
              "--radius",
              "--r",
              "--border-radius"
            ],
            "explain": "var(--nama) menyematkan nilai radius."
          }
        ]
      },
      {
        "id": "css-28",
        "level": "Advance",
        "title": "Pseudo-Classes Modern (:has, :is, :where)",
        "exercises": [
          {
            "type": "mc",
            "q": "Pseudo-class :has() dalam CSS sering dijuluki sebagai:",
            "options": [
              "\"Parent selector\" (selektor yang dapat memilih induk berdasarkan isi anaknya)",
              "Child selector",
              "Grandchild selector",
              "Sibling remover"
            ],
            "a": 0,
            "explain": ":has() memilih elemen induk jika memiliki anak atau kondisi tertentu."
          },
          {
            "type": "fill",
            "q": "Pilih elemen <article> yang memuat gambar <img> di dalamnya:\narticle:___(img) {\n  padding: 0;\n}",
            "code": "article:___(img) {\n  padding: 0;\n}",
            "accept": [
              "has"
            ],
            "explain": ":has(img) menargetkan article yang memiliki gambar di dalamnya."
          },
          {
            "type": "mc",
            "q": "Pseudo-class :is() digunakan untuk:",
            "options": [
              "Menyederhanakan penulisan daftar selektor panjang (misal :is(h1, h2, h3))",
              "Menghapus selektor",
              "Membuat animasi",
              "Mengecek nilai variabel"
            ],
            "a": 0,
            "explain": ":is() mengelompokkan banyak selektor menjadi satu baris ringkas."
          },
          {
            "type": "mc",
            "q": "Perbedaan penting antara :is() dan :where():",
            "options": [
              ":where() SELALU memiliki spesifisitas nol (0); :is() mengambil spesifisitas tertinggi",
              "Sama persis",
              ":where() tidak didukung",
              ":is() selalu 0"
            ],
            "a": 0,
            "explain": ":where() sangat ideal untuk CSS Reset/library karena mudah ditimpa."
          },
          {
            "type": "fill",
            "q": "Tulis selektor gabungan dengan spesifisitas nol:\n___(h1, h2, h3) {\n  margin-top: 0;\n}",
            "code": "___(h1, h2, h3) {\n  margin-top: 0;\n}",
            "accept": [
              ":where",
              "where"
            ],
            "explain": ":where() memiliki spesifisitas nol."
          },
          {
            "type": "arrange",
            "q": "Susun selektor :has untuk kartu yang berstatus aktif:",
            "blocks": [
              ".kartu:has(.badge-aktif) {",
              "border-color: #58cc02;",
              "box-shadow: 0 4px 12px rgba(88,204,2,0.3);",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Induk beraksi terhadap isi anaknya."
          },
          {
            "type": "mc",
            "q": "Pseudo-class :not() digunakan untuk:",
            "options": [
              "Memilih semua elemen yang TIDAK cocok dengan selektor di dalam kurung",
              "Menghapus elemen",
              "Memilih elemen aktif",
              "Membuat transisi"
            ],
            "a": 0,
            "explain": ":not(.utama) memilih semua elemen selain yang berkelas utama."
          },
          {
            "type": "fill",
            "q": "Pilih tombol yang TIDAK berstatus disabled:\nbutton:___(:disabled) {\n  cursor: pointer;\n}",
            "code": "button:___(:disabled) {\n  cursor: pointer;\n}",
            "accept": [
              "not"
            ],
            "explain": ":not(:disabled) menargetkan tombol aktif."
          },
          {
            "type": "mc",
            "q": "Pseudo-class :focus-visible berguna untuk:",
            "options": [
              "Hanya memunculkan ring fokus saat pengguna bernavigasi menggunakan keyboard (bukan klik mouse)",
              "Fokus permanen",
              "Menghapus outline",
              "Mewarnai input"
            ],
            "a": 0,
            "explain": ":focus-visible menjaga estetika klik mouse sambil tetap aksesibel bagi keyboard."
          },
          {
            "type": "fill",
            "q": "Hanya tampilkan outline saat fokus keyboard aktif:\nbutton:focus:not(:___) {\n  outline: none;\n}",
            "code": "button:focus:not(:___) {\n  outline: none;\n}",
            "accept": [
              "focus-visible"
            ],
            "explain": "Pola aksesibel mematikan cincin fokus klik mouse."
          }
        ]
      },
      {
        "id": "css-29",
        "level": "Advance",
        "title": "Backdrop Filter & Glassmorphism",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti CSS untuk memberikan efek blur pada elemen yang berada di BELAKANG kontainer (Glassmorphism):",
            "options": [
              "backdrop-filter: blur(10px)",
              "filter: blur(10px)",
              "background-blur: 10px",
              "glass: true"
            ],
            "a": 0,
            "explain": "backdrop-filter memproses grafis di belakang elemen transparan."
          },
          {
            "type": "fill",
            "q": "Beri efek blur latar belakang sebesar 12px:\n.kaca {\n  backdrop-filter: ___(12px);\n}",
            "code": ".kaca {\n  backdrop-filter: ___(12px);\n}",
            "accept": [
              "blur"
            ],
            "explain": "blur() mengaburkan latar di balik elemen."
          },
          {
            "type": "mc",
            "q": "Agar efek Glassmorphism (backdrop-filter) terlihat, latar belakang elemen harus:",
            "options": [
              "Semi-transparan (misal rgba(255, 255, 255, 0.2))",
              "Hitam pekat 100%",
              "Putih solid",
              "Tanpa border"
            ],
            "a": 0,
            "explain": "Jika background solid 100%, blur di belakangnya tidak akan tembus terlihat."
          },
          {
            "type": "arrange",
            "q": "Susun kartu efek Glassmorphism modern:",
            "blocks": [
              ".kartu-kaca {",
              "background: rgba(255, 255, 255, 0.15);",
              "backdrop-filter: blur(10px);",
              "border: 1px solid rgba(255, 255, 255, 0.2);",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Komposisi lengkap kartu kaca glassmorphic."
          },
          {
            "type": "mc",
            "q": "Perbedaan filter: blur() dan backdrop-filter: blur():",
            "options": [
              "filter mengaburkan isi elemen itu sendiri; backdrop-filter mengaburkan konten di belakangnya",
              "Sama saja",
              "backdrop-filter untuk font",
              "filter hanya di video"
            ],
            "a": 0,
            "explain": "filter mendistorsi elemen itu sendiri; backdrop mendistorsi lapisan di belakangnya."
          },
          {
            "type": "fill",
            "q": "Beri filter bayangan drop-shadow pada gambar transparan PNG/SVG:\nimg {\n  filter: ___-shadow(0 4px 8px rgba(0,0,0,0.3));\n}",
            "code": "img {\n  filter: ___-shadow(0 4px 8px rgba(0,0,0,0.3));\n}",
            "accept": [
              "drop",
              "drop-shadow"
            ],
            "explain": "drop-shadow mengikuti kontur transparansi gambar PNG/SVG."
          },
          {
            "type": "mc",
            "q": "Keunggulan filter: drop-shadow() dibanding box-shadow pada gambar PNG transparan:",
            "options": [
              "drop-shadow mengikuti lekukan piksel gambar; box-shadow hanya membayangi kotak bingkai persegi",
              "box-shadow lebih bagus",
              "drop-shadow tidak berwarna",
              "Sama saja"
            ],
            "a": 0,
            "explain": "drop-shadow membayangi siluet gambar transparan secara presisi."
          },
          {
            "type": "mc",
            "q": "Properti untuk memotong bentuk elemen menjadi poligon atau lingkaran kustom:",
            "options": [
              "clip-path",
              "mask-shape",
              "crop-path",
              "cut"
            ],
            "a": 0,
            "explain": "clip-path: polygon(...) memotong elemen menjadi bentuk geometri kustom."
          },
          {
            "type": "fill",
            "q": "Potong elemen menjadi lingkaran menggunakan clip-path:\n.avatar {\n  clip-path: ___(50%);\n}",
            "code": ".avatar {\n  clip-path: ___(50%);\n}",
            "accept": [
              "circle"
            ],
            "explain": "circle(50%) memotong elemen menjadi lingkaran."
          },
          {
            "type": "mc",
            "q": "Properti mix-blend-mode mengatur:",
            "options": [
              "Bagaimana konten elemen berbaur warna dengan konten di belakangnya (seperti multiply, screen)",
              "Ukuran font",
              "Kecepatan scroll",
              "Rotasi gambar"
            ],
            "a": 0,
            "explain": "mix-blend-mode menerapkan mode pencampuran warna grafis ala Photoshop."
          }
        ]
      },
      {
        "id": "css-30",
        "level": "Advance",
        "title": "Aspect Ratio & Clamp()",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti aspect-ratio: 16 / 9 berguna untuk:",
            "options": [
              "Mengunci rasio perbandingan lebar dan tinggi elemen (misal format video)",
              "Mengatur rotasi",
              "Memperbesar teks",
              "Memotong border"
            ],
            "a": 0,
            "explain": "aspect-ratio mempertahankan proporsi dimensi elemen secara otomatis."
          },
          {
            "type": "fill",
            "q": "Lengkapi rasio aspek untuk persegi (lebar dibanding tinggi):",
            "code": ".kotak {\n  aspect-ratio: ___;\n}",
            "accept": [
              "1",
              "1 / 1",
              "1/1"
            ],
            "explain": "aspect-ratio: 1 / 1 menjamin bentuk bujur sangkar sempurna."
          },
          {
            "type": "mc",
            "q": "Fungsi clamp(min, val, max) dalam CSS berguna untuk:",
            "options": [
              "Membatasi nilai dinamis antara batas minimum dan maksimum secara fluid",
              "Menghitung diskon",
              "Memotong teks",
              "Membuat animasi"
            ],
            "a": 0,
            "explain": "clamp() sangat populer untuk fluid typography tanpa media query."
          },
          {
            "type": "fill",
            "q": "Tentukan ukuran font responsif fluid dengan clamp:\nh1 {\n  font-size: ___(1.5rem, 4vw, 3rem);\n}",
            "code": "h1 {\n  font-size: ___(1.5rem, 4vw, 3rem);\n}",
            "accept": [
              "clamp"
            ],
            "explain": "clamp(min, preferred, max) menghasilkan ukuran fleksibel terkendali."
          },
          {
            "type": "arrange",
            "q": "Susun tipografi fluid clamp modern:",
            "blocks": [
              "h1 {",
              "font-size: clamp(2rem, 5vw, 4rem);",
              "line-height: 1.2;",
              "}"
            ],
            "answers": [[0,2,1,3]],
            "explain": "Ukuran font responsif otomatis menyesuaikan layar."
          },
          {
            "type": "mc",
            "q": "Fungsi calc() dalam CSS memungkinkan kita untuk:",
            "options": [
              "Melakukan operasi matematika (tambah, kurang, kali, bagi) dengan satuan berbeda (misal 100% - 20px)",
              "Menghitung kuadrat saja",
              "Mengecek tanggal",
              "Menghitung jumlah kata"
            ],
            "a": 0,
            "explain": "calc() menggabungkan berbagai satuan berbeda seperti persentase dan piksel."
          },
          {
            "type": "fill",
            "q": "Kurangi lebar penuh dengan padding 40px menggunakan calc:\nwidth: ___(100% - 40px);",
            "code": "width: ___(100% - 40px);",
            "accept": [
              "calc"
            ],
            "explain": "calc(100% - 40px) menghitung ruang bersih."
          },
          {
            "type": "mc",
            "q": "Aturan penting saat menggunakan operator tambah (+) atau kurang (-) di dalam calc():",
            "options": [
              "Harus diberi spasi di kedua sisi operator (contoh: 100% - 20px)",
              "Tidak boleh ada spasi",
              "Harus pakai tanda kurung ganda",
              "Hanya boleh bilangan bulat"
            ],
            "a": 0,
            "explain": "Spasi wajib ada di sekitar operator + dan - agar tidak disangka tanda negatif."
          },
          {
            "type": "mc",
            "q": "Fungsi min(500px, 100%) berarti:",
            "options": [
              "Mengambil nilai terkecil di antara 500px atau 100% lebar kontainer",
              "Selalu 500px",
              "Selalu 100%",
              "Nilai rata-rata"
            ],
            "a": 0,
            "explain": "min() memilih nilai paling kecil di antara opsi yang diberikan."
          },
          {
            "type": "fill",
            "q": "Ambil nilai terbesar di antara dua opsi:\nwidth: ___(300px, 50vw);",
            "code": "width: ___(300px, 50vw);",
            "accept": [
              "max"
            ],
            "explain": "max() mengambil nilai tertinggi."
          }
        ]
      },
      {
        "id": "css-31",
        "level": "Advance",
        "title": "Master Layout & Architecture",
        "exercises": [
          {
            "type": "mc",
            "q": "Properti subgrid pada CSS Grid memungkinkan:",
            "options": [
              "Grid anak mewarisi dan sejajar langsung dengan trek baris/kolom dari grid induknya",
              "Membuat tabel lama",
              "Mematikan grid",
              "Menghapus margin"
            ],
            "a": 0,
            "explain": "grid-template-columns: subgrid menyelaraskan anak ke grid induk secara sempurna."
          },
          {
            "type": "fill",
            "q": "Gunakan subgrid pada kolom anak:\n.card {\n  grid-template-columns: ___;\n}",
            "code": ".card {\n  grid-template-columns: ___;\n}",
            "accept": [
              "subgrid"
            ],
            "explain": "subgrid mewarisi trek kisi dari parent."
          },
          {
            "type": "arrange",
            "q": "Susun arsitektur tombol CSS dengan variabel lokal:",
            "blocks": [
              ".btn {",
              "--btn-bg: #58cc02;",
              "background: var(--btn-bg);",
              "color: white;",
              "}"
            ],
            "answers": [[0,1,3,2,4],[0,2,1,3,4],[0,2,3,1,4],[0,3,1,2,4],[0,3,2,1,4]],
            "explain": "Pola komponen modular dengan custom property lokal."
          },
          {
            "type": "mc",
            "q": "Properti content-visibility: auto berguna untuk:",
            "options": [
              "Meningkatkan performa loading dengan menunda rendering elemen di luar layar (off-screen)",
              "Menghapus gambar",
              "Mengganti font",
              "Mengecilkan file CSS"
            ],
            "a": 0,
            "explain": "content-visibility: auto mempercepat waktu render awal halaman panjang."
          },
          {
            "type": "preview",
            "lang": "css",
            "q": "Buat animasi berputar putar:\n@keyframes s { to { transform: rotate(360deg); } }\n.c { animation: s 2s infinite; }",
            "starter": "@keyframes s { to { transform: rotate(360deg); } }\n.c { animation: s 2s infinite; }",
            "must": [
              {
                "t": "selector",
                "v": ".c"
              }
            ],
            "explain": "animasi rotate."
          }
        ]
      }
    ]
  }
];

export { CONTENT_HTML };
