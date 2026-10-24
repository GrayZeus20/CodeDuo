/* CodeDuo — blok konten: Blok Web (peta fungsi & arsitektur web).
 * 1 topik (web) × 34 pelajaran (10 Dasar, 10 Menengah, 14 Advance). Total 335 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_WEB = [
  {
    "id": "web",
    "name": "Blok Web",
    "icon": "🧩",
    "color": "#0ea5e9",
    "desc": "Apa fungsi tiap blok pembangun website",
    "lessons": [
      {
        "id": "web-1",
        "level": "Dasar",
        "title": "Blok & Perannya",
        "exercises": [
          {
            "type": "mc",
            "q": "Yang bertugas MEMBANGUN STRUKTUR & isi halaman (teks, gambar, tombol):",
            "options": [
              "CSS",
              "HTML",
              "SQL",
              "JavaScript"
            ],
            "a": 1,
            "explain": "HTML = kerangka dan isi konten halaman."
          },
          {
            "type": "mc",
            "q": "Yang bertugas MENGATUR TAMPILAN — warna, ukuran, jarak, tata letak:",
            "options": [
              "HTML",
              "CSS",
              "JavaScript",
              "JSON"
            ],
            "a": 1,
            "explain": "CSS = lapisan gaya: warna, ukuran, jarak, posisi."
          },
          {
            "type": "mc",
            "q": "Yang membuat halaman BEREAKSI — klik, hitung, ambil data:",
            "options": [
              "CSS",
              "HTML",
              "JavaScript",
              "SQL"
            ],
            "a": 2,
            "explain": "JavaScript = logika dan interaktivitas."
          },
          {
            "type": "arrange",
            "q": "Urutkan perjalanan satu request dari klik sampai terlihat:",
            "blocks": [
              "Browser minta halaman (request)",
              "Server balas berkas (response)",
              "Browser susun HTML jadi DOM",
              "CSS & JS memoles dan menghidupkan"
            ],
            "explain": "Request → response → render → interaksi."
          },
          {
            "type": "fill",
            "q": "Lengkapi analogi blok: HTML = tulang, CSS = ___, JavaScript = otot:",
            "code": "HTML = tulang, CSS = ___, JavaScript = otot",
            "accept": [
              "kulit",
              "pakaian",
              "baju"
            ],
            "explain": "CSS = kulit/penampilan, JS = otot yang menggerakkan."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #1: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #2: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #3: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #4: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #5: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-2",
        "level": "Dasar",
        "title": "Divisi Tugas Tiga Bahasa",
        "exercises": [
          {
            "type": "mc",
            "q": "Menambahkan tombol baru ke halaman — bagian mana yang MENANDAI bahwa itu tombol?",
            "options": [
              "HTML (<button>)",
              "CSS",
              "server",
              "database"
            ],
            "a": 0,
            "explain": "HTML menandai elemen; CSS baru mempercantiknya."
          },
          {
            "type": "mc",
            "q": "Kamu ingin tombol itu jadi hijau dan membulat. Kamu ubah:",
            "options": [
              "HTML",
              "CSS",
              "JavaScript",
              "SQL"
            ],
            "a": 1,
            "explain": "Warna dan bentuk = tugas CSS."
          },
          {
            "type": "mc",
            "q": "Kamu ingin tombol itu menampilkan \"Halo!\" saat diklik. Kamu tambah:",
            "options": [
              "JavaScript",
              "CSS",
              "HTML",
              "JSON"
            ],
            "a": 0,
            "explain": "Perilaku saat diklik = logika JavaScript."
          },
          {
            "type": "fill",
            "q": "Baris HTML ini memanggil blok gaya dari luar — lengkapi ekstensinya:",
            "code": "<link rel=\"stylesheet\" href=\"styles.___\">",
            "accept": [
              "css"
            ],
            "explain": "Berkas .css memuat aturan tampilan."
          },
          {
            "type": "mc",
            "q": "Berkas .js biasanya dipasang di HTML lewat:",
            "options": [
              "<script src=\"app.js\"></script>",
              "<style src=\"app.js\">",
              "<link href=\"app.js\">",
              "<js src=\"app.js\">"
            ],
            "a": 0,
            "explain": "<script src=...> memuat JavaScript ke halaman."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #6: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #7: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #8: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #9: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #10: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-3",
        "level": "Dasar",
        "title": "Blok Framework Web",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework berbasis React untuk membangun aplikasi web dengan routing dan rendering server:",
            "options": [
              "Next.js",
              "Laravel",
              "Flutter",
              "MATLAB"
            ],
            "a": 0,
            "explain": "Next.js adalah framework React yang menyediakan routing dan pilihan rendering di server maupun client."
          },
          {
            "type": "mc",
            "q": "Library JavaScript untuk membangun antarmuka dari komponen yang dapat digunakan ulang:",
            "options": [
              "React",
              "Elysia",
              "Kotlin",
              "C"
            ],
            "a": 0,
            "explain": "React adalah library JavaScript untuk membangun UI berbasis komponen."
          },
          {
            "type": "mc",
            "q": "Framework PHP yang menyediakan routing, ORM, dan fitur aplikasi web:",
            "options": [
              "Laravel",
              "Next.js",
              "Ruby",
              "Java"
            ],
            "a": 0,
            "explain": "Laravel adalah framework web PHP dengan fitur seperti routing dan Eloquent ORM."
          },
          {
            "type": "mc",
            "q": "Framework TypeScript untuk membuat API web yang berjalan di runtime Bun:",
            "options": [
              "Elysia",
              "Flutter",
              "MATLAB",
              "C++"
            ],
            "a": 0,
            "explain": "Elysia adalah framework server/API TypeScript yang dirancang untuk Bun."
          },
          {
            "type": "mc",
            "q": "Toolkit UI berbasis Dart untuk membangun aplikasi dari satu codebase ke beberapa platform:",
            "options": [
              "Flutter",
              "React",
              "PHP",
              "Go"
            ],
            "a": 0,
            "explain": "Flutter adalah UI toolkit lintas platform; bahasa yang umum dipakai bersamanya adalah Dart."
          },
          {
            "type": "mc",
            "q": "Bahasa yang banyak digunakan untuk aplikasi Android dan berjalan di ekosistem JVM:",
            "options": [
              "Kotlin",
              "Ruby",
              "CSS",
              "Laravel"
            ],
            "a": 0,
            "explain": "Kotlin adalah bahasa modern yang didukung untuk pengembangan Android dan kompatibel dengan JVM."
          },
          {
            "type": "mc",
            "q": "Bahasa pemrograman berorientasi objek yang berjalan di JVM dan banyak dipakai pada sistem enterprise:",
            "options": [
              "Java",
              "Elysia",
              "Flutter",
              "PHP"
            ],
            "a": 0,
            "explain": "Java adalah bahasa general-purpose yang berjalan di Java Virtual Machine (JVM)."
          },
          {
            "type": "mc",
            "q": "Hubungan yang tepat antara Next.js dan React adalah:",
            "options": [
              "Next.js dibangun di atas React",
              "React adalah runtime wajib Next.js",
              "Keduanya bahasa pemrograman",
              "Next.js adalah database untuk React"
            ],
            "a": 0,
            "explain": "React menyediakan UI berbasis komponen; Next.js menambahkan kerangka aplikasi dan fitur rendering."
          },
          {
            "type": "mc",
            "q": "Manakah yang merupakan bahasa, bukan framework atau UI toolkit?",
            "options": [
              "Kotlin",
              "Next.js",
              "Laravel",
              "Flutter"
            ],
            "a": 0,
            "explain": "Kotlin adalah bahasa pemrograman; Next.js, Laravel, dan Flutter adalah framework/toolkit."
          },
          {
            "type": "mc",
            "q": "Pasangan teknologi dan perannya yang benar:",
            "options": [
              "Laravel — framework web PHP",
              "React — bahasa pemrograman baru",
              "Flutter — database relasional",
              "Elysia — framework CSS"
            ],
            "a": 0,
            "explain": "Laravel adalah framework aplikasi web yang ditulis untuk ekosistem PHP."
          }
        ]
      },
      {
        "id": "web-4",
        "level": "Dasar",
        "title": "Blok Bahasa Pemrograman",
        "exercises": [
          {
            "type": "mc",
            "q": "Bahasa pemrograman Google yang dikenal dengan goroutine untuk concurrency:",
            "options": [
              "Go (Golang)",
              "Ruby",
              "Java",
              "MATLAB"
            ],
            "a": 0,
            "explain": "Go, yang juga disebut Golang, memiliki goroutine dan channel untuk membangun program concurrent."
          },
          {
            "type": "mc",
            "q": "Bahasa dinamis yang terkenal dengan sintaks ekspresif dan menjadi dasar framework Rails:",
            "options": [
              "Ruby",
              "Kotlin",
              "C",
              "PHP"
            ],
            "a": 0,
            "explain": "Ruby adalah bahasa pemrograman dinamis; Ruby on Rails adalah framework web yang dibangun dengannya."
          },
          {
            "type": "mc",
            "q": "Bahasa serbaguna dengan sintaks yang mudah dibaca dan banyak dipakai untuk otomasi serta data science:",
            "options": [
              "Python",
              "Java",
              "Elysia",
              "C++"
            ],
            "a": 0,
            "explain": "Python digunakan untuk berbagai keperluan, termasuk scripting, otomasi, dan data science."
          },
          {
            "type": "mc",
            "q": "Lingkungan komputasi yang berfokus pada komputasi numerik, matriks, dan analisis teknik:",
            "options": [
              "MATLAB",
              "Next.js",
              "Flutter",
              "Laravel"
            ],
            "a": 0,
            "explain": "MATLAB dirancang untuk komputasi numerik, analisis matriks, dan pemodelan teknik."
          },
          {
            "type": "mc",
            "q": "Bahasa yang umum dipakai untuk membuat halaman web dinamis di sisi server:",
            "options": [
              "PHP",
              "React",
              "Kotlin",
              "MATLAB"
            ],
            "a": 0,
            "explain": "PHP dapat dijalankan di server untuk menghasilkan halaman web dan menangani request."
          },
          {
            "type": "mc",
            "q": "Bahasa pemrograman sistem yang menjadi dasar banyak API dan program tingkat rendah:",
            "options": [
              "C",
              "Laravel",
              "Ruby",
              "Next.js"
            ],
            "a": 0,
            "explain": "C adalah bahasa compiled yang banyak dipakai untuk sistem operasi, embedded, dan pustaka tingkat rendah."
          },
          {
            "type": "mc",
            "q": "Bahasa compiled yang mendukung pemrograman berorientasi objek dan banyak dipakai pada game/performa tinggi:",
            "options": [
              "C++",
              "Elysia",
              "PHP",
              "Flutter"
            ],
            "a": 0,
            "explain": "C++ menggabungkan kontrol tingkat rendah dengan abstraksi dan sering dipilih untuk game serta aplikasi performa tinggi."
          },
          {
            "type": "mc",
            "q": "Pasangan framework dan bahasa utama yang benar:",
            "options": [
              "Elysia — TypeScript/JavaScript di runtime Bun",
              "Laravel — Kotlin",
              "Next.js — PHP",
              "Flutter — MATLAB"
            ],
            "a": 0,
            "explain": "Elysia dibuat untuk membangun server dan API dengan TypeScript atau JavaScript pada Bun."
          },
          {
            "type": "mc",
            "q": "Manakah pasangan bahasa dan penggunaan yang tepat?",
            "options": [
              "Python — otomasi dan data science",
              "MATLAB — styling halaman web",
              "C — framework UI lintas platform",
              "Ruby — runtime untuk Next.js"
            ],
            "a": 0,
            "explain": "Python memiliki ekosistem luas untuk otomasi, analisis data, dan machine learning."
          },
          {
            "type": "mc",
            "q": "Pilihan yang tepat untuk membuat aplikasi Android native adalah:",
            "options": [
              "Kotlin atau Java",
              "Next.js atau Laravel",
              "MATLAB atau CSS",
              "Elysia atau Flutter"
            ],
            "a": 0,
            "explain": "Kotlin dan Java sama-sama didukung untuk pengembangan Android native."
          }
        ]
      },
      {
        "id": "web-5",
        "level": "Dasar",
        "title": "Web Lesson 5",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #31: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #32: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #33: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #34: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #35: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #36: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #37: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #38: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #39: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #40: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-6",
        "level": "Dasar",
        "title": "Web Lesson 6",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #41: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #42: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #43: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #44: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #45: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #46: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #47: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #48: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #49: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #50: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-7",
        "level": "Dasar",
        "title": "Web Lesson 7",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #51: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #52: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #53: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #54: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #55: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #56: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #57: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #58: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #59: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #60: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-8",
        "level": "Dasar",
        "title": "Web Lesson 8",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #61: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #62: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #63: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #64: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #65: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #66: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #67: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #68: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #69: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #70: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-9",
        "level": "Dasar",
        "title": "Web Lesson 9",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #71: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #72: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #73: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #74: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #75: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #76: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #77: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #78: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #79: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #80: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-10",
        "level": "Dasar",
        "title": "Web Lesson 10",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #81: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #82: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #83: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #84: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #85: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #86: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #87: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #88: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #89: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #90: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
            "options": [
              "CSS (Cascading Style Sheets)",
              "SQL",
              "Python",
              "C++"
            ],
            "a": 0,
            "explain": "CSS bertanggung jawab penuh atas presentasi dan estetika visual halaman web."
          }
        ]
      },
      {
        "id": "web-11",
        "level": "Menengah",
        "title": "Memecah Fitur Jadi Blok",
        "exercises": [
          {
            "type": "mc",
            "q": "Fitur \"ganti tema gelap/terang\" — yang menyimpan ATURAN WARNA tiap tema:",
            "options": [
              "CSS",
              "HTML",
              "database",
              "REST"
            ],
            "a": 0,
            "explain": "Aturan warna tiap tema hidup di CSS (mis. variabel --bg)."
          },
          {
            "type": "mc",
            "q": "Yang menyimpan PILIHAN tema milik user setelah browser ditutup:",
            "options": [
              "CSS",
              "localStorage atau server (JS)",
              "tag <p>",
              "font"
            ],
            "a": 1,
            "explain": "Pilihan disimpan di localStorage atau server, bukan di HTML/CSS."
          },
          {
            "type": "mc",
            "q": "Yang mengurus klik tombol \"ganti tema\" lalu mengganti kelas di <body>:",
            "options": [
              "HTML",
              "CSS",
              "JavaScript",
              "SQL"
            ],
            "a": 2,
            "explain": "JS menangkap klik dan mengubah kelas pemicu CSS."
          },
          {
            "type": "arrange",
            "q": "Urutkan blok untuk fitur \"daftar akun\":",
            "blocks": [
              "Form di HTML",
              "Validasi di JavaScript",
              "Kirim lewat API (fetch)",
              "Simpan ke database",
              "Tampilkan pesan balikan"
            ],
            "explain": "Tampilan (HTML) -> logika (JS) -> transport (API) -> simpan (DB) -> umpan balik."
          },
          {
            "type": "mc",
            "q": "Memecah fitur jadi blok berguna karena:",
            "options": [
              "File jadi lebih besar",
              "Tiap blok satu tanggung jawab -> gampang dirawat dan di-debug",
              "Wajib oleh browser",
              "Menghapus kebutuhan CSS"
            ],
            "a": 1,
            "explain": "Satu blok satu tanggung jawab = kode rapi dan mudah dilacak."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #1: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #2: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #3: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #4: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #5: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-12",
        "level": "Menengah",
        "title": "Blok Perancang Tampilan",
        "exercises": [
          {
            "type": "mc",
            "q": "CSS framework yang menyediakan class siap pakai (mis. bg-blue-500) disebut:",
            "options": [
              "Tailwind",
              "Node.js",
              "MongoDB",
              "REST"
            ],
            "a": 0,
            "explain": "Tailwind = utility-first CSS framework."
          },
          {
            "type": "mc",
            "q": "SASS/SCSS berguna untuk:",
            "options": [
              "Bahasa database",
              "CSS dengan variabel, nesting, mixin -> di-compile jadi CSS",
              "Bahasa server",
              "Format API"
            ],
            "a": 1,
            "explain": "SASS = preprocessor CSS; hasil akhirnya tetap CSS biasa."
          },
          {
            "type": "mc",
            "q": "Kelebihan CSS di berkas terpisah (bukan inline di tiap tag):",
            "options": [
              "Gaya bisa dipakai ulang dan diubah dari satu tempat",
              "Lebih berat",
              "Tidak bisa responsif",
              "Menghapus HTML"
            ],
            "a": 0,
            "explain": "Satu stylesheet mengatur banyak halaman sekaligus."
          },
          {
            "type": "fill",
            "q": "Tailwind: class ___ membuat sudut kartu membulat:",
            "code": "<div class=\"___\">...</div>",
            "accept": [
              "rounded"
            ],
            "explain": "rounded = border-radius di Tailwind."
          },
          {
            "type": "mc",
            "q": "Responsive artinya tampilan:",
            "options": [
              "Sama di semua ukuran layar",
              "Menyesuaikan lebar layar (HP/tablet/desktop)",
              "Selalu gelap",
              "Tanpa warna"
            ],
            "a": 1,
            "explain": "CSS responsif menyesuaikan tata letak ke ukuran layar."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #6: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #7: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #8: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #9: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #10: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-13",
        "level": "Menengah",
        "title": "Web Lesson 13",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #11: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #12: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #13: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #14: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #15: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #16: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #17: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #18: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #19: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #20: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-14",
        "level": "Menengah",
        "title": "Web Lesson 14",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #21: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #22: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #23: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #24: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #25: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #26: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #27: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #28: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #29: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #30: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-15",
        "level": "Menengah",
        "title": "Web Lesson 15",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #31: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #32: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #33: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #34: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #35: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #36: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #37: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #38: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #39: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #40: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-16",
        "level": "Menengah",
        "title": "Web Lesson 16",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #41: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #42: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #43: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #44: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #45: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #46: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #47: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #48: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #49: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #50: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-17",
        "level": "Menengah",
        "title": "Web Lesson 17",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #51: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #52: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #53: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #54: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #55: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #56: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #57: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #58: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #59: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #60: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-18",
        "level": "Menengah",
        "title": "Web Lesson 18",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #61: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #62: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #63: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #64: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #65: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #66: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #67: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #68: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #69: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #70: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-19",
        "level": "Menengah",
        "title": "Web Lesson 19",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #71: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #72: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #73: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #74: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #75: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #76: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #77: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #78: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #79: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #80: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-20",
        "level": "Menengah",
        "title": "Web Lesson 20",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #81: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #82: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #83: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #84: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #85: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #86: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #87: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #88: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #89: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          },
          {
            "type": "mc",
            "q": "Arsitektur Web Menengah #90: Protokol HTTPS mengamankan komunikasi data antara browser dan server menggunakan enkripsi:",
            "options": [
              "TLS / SSL",
              "FTP",
              "SSH",
              "Telnet"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi seluruh muatan traffic jaringan dengan sertifikat TLS/SSL."
          }
        ]
      },
      {
        "id": "web-21",
        "level": "Advance",
        "title": "Blok Server & Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Blok yang berjalan di SERVER, bukan di browser pengunjung:",
            "options": [
              "CSS",
              "Node.js / backend",
              "HTML",
              "font"
            ],
            "a": 1,
            "explain": "Backend berjalan di server dan melayani banyak pengunjung."
          },
          {
            "type": "mc",
            "q": "Tugas utama database:",
            "options": [
              "Membuat warna",
              "Menyimpan dan mengambil data secara permanen",
              "Menggambar tombol",
              "Menulis HTML"
            ],
            "a": 1,
            "explain": "DB = gudang data yang tahan mati (persist)."
          },
          {
            "type": "mc",
            "q": "SQL adalah:",
            "options": [
              "Bahasa untuk bertanya dan mengubah data di database relasional",
              "Framework CSS",
              "Alat desain",
              "Browser"
            ],
            "a": 0,
            "explain": "SQL = bahasa query untuk database tabel."
          },
          {
            "type": "arrange",
            "q": "Urutkan alur menyimpan nilai kuis:",
            "blocks": [
              "Browser kirim jawaban via fetch",
              "Server terima request",
              "Server validasi",
              "Server tulis ke database",
              "Balas status ke browser"
            ],
            "explain": "Client -> server -> validasi -> DB -> balasan."
          },
          {
            "type": "mc",
            "q": "Perbedaan utama HTML dan SQL:",
            "options": [
              "HTML menyusun tampilan; SQL mengelola data",
              "Keduanya bahasa database",
              "HTML untuk server, SQL untuk browser",
              "Sama saja"
            ],
            "a": 0,
            "explain": "HTML = tampilan (client); SQL = data (database)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #1: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #2: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #3: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #4: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #5: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-22",
        "level": "Advance",
        "title": "Alur End-to-End",
        "exercises": [
          {
            "type": "mc",
            "q": "API itu ibarat:",
            "options": [
              "Jembatan yang menghubungkan client ke server/data",
              "Bahasa tampilan",
              "Berkas gambar",
              "Jenis database"
            ],
            "a": 0,
            "explain": "API = perantara client dengan server."
          },
          {
            "type": "mc",
            "q": "Format data yang paling umum dipakai API web saat ini:",
            "options": [
              "JSON",
              "MP3",
              "DOCX",
              "EXE"
            ],
            "a": 0,
            "explain": "JSON ringan dan mudah dibaca mesin maupun manusia."
          },
          {
            "type": "mc",
            "q": "Mengapa frontend dan backend dipisah (decoupled)?",
            "options": [
              "Agar tiap sisi bisa dikembangkan atau diganti sendiri via API",
              "Karena wajib",
              "Supaya tidak bisa diuji",
              "Untuk menghapus database"
            ],
            "a": 0,
            "explain": "Kontrak API yang stabil membuat frontend dan backend bebas berevolusi."
          },
          {
            "type": "arrange",
            "q": "Urutkan perjalanan membuka halaman berisi daftar artikel:",
            "blocks": [
              "Browser buka URL",
              "Server balas HTML/CSS/JS",
              "JS panggil API (fetch)",
              "API balas JSON",
              "JS render daftar ke halaman"
            ],
            "explain": "Muat app -> ambil data -> tampilkan."
          },
          {
            "type": "fill",
            "q": "Lengkapi: data bolak-balik lewat API, biasanya berformat ___:",
            "code": "... API mengirim data berformat ___ ke browser.",
            "accept": [
              "json"
            ],
            "explain": "JSON = format pertukaran data standar di web."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #6: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #7: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #8: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #9: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #10: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-23",
        "level": "Advance",
        "title": "Web Lesson 23",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #11: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #12: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #13: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #14: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #15: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #16: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #17: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #18: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #19: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #20: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-24",
        "level": "Advance",
        "title": "Web Lesson 24",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #21: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #22: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #23: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #24: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #25: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #26: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #27: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #28: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #29: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #30: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-25",
        "level": "Advance",
        "title": "Web Lesson 25",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #31: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #32: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #33: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #34: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #35: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #36: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #37: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #38: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #39: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #40: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-26",
        "level": "Advance",
        "title": "Web Lesson 26",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #41: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #42: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #43: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #44: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #45: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #46: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #47: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #48: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #49: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #50: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-27",
        "level": "Advance",
        "title": "Web Lesson 27",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #51: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #52: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #53: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #54: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #55: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #56: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #57: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #58: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #59: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #60: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-28",
        "level": "Advance",
        "title": "Web Lesson 28",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #61: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #62: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #63: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #64: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #65: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #66: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #67: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #68: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #69: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #70: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-29",
        "level": "Advance",
        "title": "Web Lesson 29",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #71: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #72: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #73: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #74: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #75: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #76: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #77: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #78: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #79: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #80: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-30",
        "level": "Advance",
        "title": "Web Lesson 30",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #81: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #82: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #83: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #84: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #85: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #86: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #87: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #88: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #89: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #90: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-31",
        "level": "Advance",
        "title": "Web Lesson 31",
        "exercises": [
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #91: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #92: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #93: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #94: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          },
          {
            "type": "mc",
            "q": "Performa & Keamanan Web Advance #95: Header Content Security Policy (CSP) bertugas untuk:",
            "options": [
              "Mencegah serangan injeksi skrip XSS dengan membatasi sumber script yang boleh dieksekusi",
              "Mengompres gambar",
              "Mengganti font otomatis",
              "Menghapus cookies"
            ],
            "a": 0,
            "explain": "CSP adalah benteng pertahanan krusial terhadap eksploitasi Cross-Site Scripting (XSS)."
          }
        ]
      },
      {
        "id": "web-32",
        "level": "Advance",
        "title": "Advance: React & Next.js",
        "exercises": [
          {
            "type": "mc",
            "q": "Di React, bagian UI yang perlu state lokal atau event handler browser harus:",
            "options": ["Berjalan sebagai Client Component", "Selalu menjadi file CSS", "Dijalankan hanya di database", "Menghapus semua props"],
            "a": 0,
            "explain": "Interaksi browser dan state client memerlukan komponen client; di Next.js App Router beri batas 'use client' pada file yang membutuhkannya."
          },
          {
            "type": "mc",
            "q": "Mengapa item list React sebaiknya memakai key stabil seperti id data?",
            "options": ["Agar React mencocokkan item saat list berubah", "Agar semua komponen dipaksa unmount", "Untuk mengenkripsi data", "Untuk mengurutkan list alfabetis"],
            "a": 0,
            "explain": "Key stabil membantu React mengenali item yang sama saat list ditambah, dihapus, atau diurutkan."
          },
          {
            "type": "mc",
            "q": "Pola yang tepat untuk memperbarui state array React adalah:",
            "options": ["Membuat array baru, bukan memutasi state lama", "Mengubah array langsung tanpa setter", "Mengedit DOM secara manual", "Mengganti array menjadi string"],
            "a": 0,
            "explain": "Pembaruan immutable dengan setter membuat perubahan state dapat dideteksi dan dirender ulang."
          },
          {
            "type": "mc",
            "q": "Dalam Next.js App Router, direktori `app/blog/[slug]` biasanya menyatakan:",
            "options": ["Route dinamis dengan parameter slug", "Folder database SQL", "Komponen CSS global", "Endpoint khusus gambar"],
            "a": 0,
            "explain": "Segmen dalam tanda kurung siku membuat parameter route dinamis, misalnya slug artikel."
          },
          {
            "type": "mc",
            "q": "Hydration pada halaman yang dirender di server adalah proses:",
            "options": ["Menghubungkan HTML awal dengan JavaScript agar interaktif", "Menghapus HTML setelah tampil", "Mengubah CSS menjadi SQL", "Mengirim password ke browser"],
            "a": 0,
            "explain": "Hydration mengaktifkan interaksi client pada markup HTML yang sudah dirender."
          },
          {
            "type": "mc",
            "q": "Hook React `useEffect` paling tepat digunakan untuk:",
            "options": ["Menyinkronkan komponen dengan sistem eksternal setelah render", "Menghitung nilai turunan yang bisa dibuat saat render", "Mendefinisikan route server Next.js", "Mengganti semua props"],
            "a": 0,
            "explain": "Effect cocok untuk sinkronisasi seperti subscription atau API browser; jangan pakai untuk nilai turunan yang sederhana."
          },
          {
            "type": "mc",
            "q": "Di Next.js, variabel rahasia server sebaiknya:",
            "options": ["Tetap di server dan tidak memakai prefix NEXT_PUBLIC_", "Dikirim sebagai prop ke semua komponen", "Ditulis langsung di file halaman", "Disimpan di localStorage publik"],
            "a": 0,
            "explain": "Nilai ber-prefix NEXT_PUBLIC_ dapat masuk ke bundle browser; rahasia harus digunakan pada kode server."
          },
          {
            "type": "mc",
            "q": "Server Component di Next.js bermanfaat karena dapat:",
            "options": ["Mengambil data di server tanpa mengirim seluruh logika komponen ke browser", "Menjalankan onClick langsung tanpa client", "Mengakses DOM browser saat build", "Menggantikan kebutuhan validasi"],
            "a": 0,
            "explain": "Server Components dapat mengerjakan pekerjaan server-side dan mengurangi JavaScript client; interaksi tetap membutuhkan Client Component."
          },
          {
            "type": "mc",
            "q": "Action yang mengubah data melalui form tetap harus memvalidasi input karena:",
            "options": ["Data dari client tidak boleh dianggap tepercaya", "Browser selalu mengirim data yang benar", "Validasi hanya perlu untuk CSS", "Server tidak menerima input kosong"],
            "a": 0,
            "explain": "Validasi server tetap diperlukan meskipun form juga memvalidasi di browser."
          },
          {
            "type": "mc",
            "q": "Komponen React yang menerima data dari induk sebaiknya memperlakukan props sebagai:",
            "options": ["Input untuk dibaca, bukan dimutasi", "Variabel global yang selalu diubah", "Pengganti event handler", "Penyimpanan permanen browser"],
            "a": 0,
            "explain": "Props adalah input komponen; perubahan data diminta melalui callback atau state owner, bukan mutasi props."
          }
        ]
      },
      {
        "id": "web-33",
        "level": "Advance",
        "title": "Advance: Backend, API & Runtime",
        "exercises": [
          {
            "type": "mc",
            "q": "Di Laravel, middleware umumnya dipakai untuk:",
            "options": ["Memeriksa atau memproses request sebelum mencapai handler", "Menggambar widget Flutter", "Mengompilasi kernel C", "Mengurutkan CSS"],
            "a": 0,
            "explain": "Middleware membungkus alur request, misalnya untuk autentikasi, rate limit, atau pencatatan."
          },
          {
            "type": "mc",
            "q": "Laravel Form Request membantu memusatkan:",
            "options": ["Aturan validasi dan otorisasi input", "Konfigurasi layar Android", "Garbage collection JVM", "Plot matriks MATLAB"],
            "a": 0,
            "explain": "Form Request mengelompokkan validasi serta otorisasi input request."
          },
          {
            "type": "mc",
            "q": "Eloquent ORM pada Laravel memetakan:",
            "options": ["Model aplikasi ke tabel dan record database", "Komponen React ke route browser", "Pointer C ke widget", "File Dart ke package Java"],
            "a": 0,
            "explain": "Eloquent menyediakan pola model untuk membaca dan mengubah record database."
          },
          {
            "type": "mc",
            "q": "Pada Elysia, schema request sebaiknya digunakan untuk:",
            "options": ["Memvalidasi bentuk input di batas endpoint", "Mengganti database dengan CSS", "Menjalankan kode di browser tanpa bundler", "Melewati pemeriksaan tipe"],
            "a": 0,
            "explain": "Schema endpoint Elysia membantu memvalidasi input dan menjaga kontrak API."
          },
          {
            "type": "mc",
            "q": "Aplikasi Go menerima `context.Context` pada handler terutama agar dapat:",
            "options": ["Meneruskan deadline, pembatalan, dan metadata request", "Mengubah tipe Go menjadi Ruby", "Menyimpan data tanpa batas waktu", "Menghapus kebutuhan menangani error"],
            "a": 0,
            "explain": "Context membawa sinyal pembatalan/deadline sepanjang operasi request."
          },
          {
            "type": "mc",
            "q": "Pola penanganan error yang umum dan eksplisit di Go adalah:",
            "options": ["Mengembalikan nilai error dan memeriksanya", "Mengabaikan semua error", "Mengandalkan exception tersembunyi", "Mengubah error menjadi komentar"],
            "a": 0,
            "explain": "Go biasanya mengembalikan error sebagai nilai sehingga pemanggil dapat menanganinya secara eksplisit."
          },
          {
            "type": "mc",
            "q": "Saat memakai goroutine yang mengakses data bersama, program perlu:",
            "options": ["Sinkronisasi yang benar atau kepemilikan data yang jelas", "Menambah global mutable tanpa aturan", "Menghapus semua return", "Menganggap race tidak mungkin"],
            "a": 0,
            "explain": "Concurrency memerlukan aturan akses data agar tidak terjadi data race."
          },
          {
            "type": "mc",
            "q": "Di Ruby on Rails, migrasi database digunakan untuk:",
            "options": ["Mencatat perubahan skema database secara bertahap", "Mengubah Ruby menjadi Java", "Menata halaman dengan CSS", "Mengirim event DOM"],
            "a": 0,
            "explain": "Migration menyimpan perubahan skema sebagai rangkaian perubahan yang dapat diterapkan bersama."
          },
          {
            "type": "mc",
            "q": "Untuk menghindari query database berulang di dalam loop relasi Rails, gunakan:",
            "options": ["Eager loading seperti `includes`", "Menonaktifkan semua index", "Mengirim query dari CSS", "Mengganti model menjadi array acak"],
            "a": 0,
            "explain": "Eager loading memuat relasi secara terencana dan membantu mencegah pola N+1 query."
          },
          {
            "type": "mc",
            "q": "Konfigurasi rahasia aplikasi backend sebaiknya disimpan:",
            "options": ["Di environment/secret manager, bukan di repository", "Di file publik yang dikirim ke browser", "Di nama route", "Di output log setiap request"],
            "a": 0,
            "explain": "Rahasia perlu dipisahkan dari source control dan tidak diekspos lewat bundle atau log."
          }
        ]
      },
      {
        "id": "web-34",
        "level": "Advance",
        "title": "Advance: Mobile, Sistem & Komputasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Di Flutter, widget biasanya:",
            "options": ["Mendeskripsikan bagian UI yang disusun menjadi widget tree", "Menjadi tabel SQL", "Menggantikan bahasa Dart", "Membuka goroutine Go"],
            "a": 0,
            "explain": "Flutter menyusun UI melalui widget tree yang dibangun dari widget."
          },
          {
            "type": "mc",
            "q": "Saat state Flutter berubah dan tampilan harus diperbarui, pola yang tepat adalah:",
            "options": ["Memperbarui state melalui mekanisme state management yang dipakai", "Mengubah piksel layar secara manual setiap frame", "Menyimpan state hanya di nama widget", "Mengedit file build hasil kompilasi"],
            "a": 0,
            "explain": "Perubahan state harus disalurkan lewat mekanisme state yang sesuai agar UI dibangun ulang secara konsisten."
          },
          {
            "type": "mc",
            "q": "Null safety Kotlin membantu dengan cara:",
            "options": ["Membedakan tipe yang boleh null dan yang tidak", "Membuat semua variabel menjadi null", "Menghapus pemeriksaan runtime sepenuhnya", "Mengubah Kotlin menjadi SQL"],
            "a": 0,
            "explain": "Sistem tipe Kotlin menandai kemungkinan null agar banyak kesalahan dapat dideteksi lebih awal."
          },
          {
            "type": "mc",
            "q": "Kotlin coroutine cocok untuk pekerjaan asynchronous karena:",
            "options": ["Mendukung penangguhan operasi tanpa memblokir thread secara langsung", "Menghapus semua kebutuhan menangani error", "Selalu membuat satu thread baru per fungsi", "Hanya berjalan di CSS"],
            "a": 0,
            "explain": "Coroutine menyediakan struktur untuk pekerjaan suspend/asynchronous; dispatcher tetap menentukan konteks eksekusi."
          },
          {
            "type": "mc",
            "q": "Di Java, garbage collector terutama mengelola:",
            "options": ["Memori heap untuk objek yang tidak lagi terjangkau", "Semua file di disk", "Koneksi jaringan tanpa batas", "Urutan import source"],
            "a": 0,
            "explain": "Garbage collector mereklamasi objek heap yang tidak lagi dapat dijangkau; bukan pengganti penutupan resource eksternal."
          },
          {
            "type": "mc",
            "q": "Mengapa file atau koneksi di Java perlu ditutup secara deterministik?",
            "options": ["Resource eksternal tidak selalu dilepas oleh garbage collector tepat waktu", "Agar class bisa diubah menjadi interface", "Karena heap tidak punya objek", "Untuk menghindari kompilasi bytecode"],
            "a": 0,
            "explain": "Gunakan try-with-resources untuk menutup resource seperti stream dan koneksi secara andal."
          },
          {
            "type": "mc",
            "q": "Pada C, pointer yang sudah tidak menunjuk ke objek valid berbahaya karena dapat menyebabkan:",
            "options": ["Undefined behavior saat diakses", "Route Next.js baru", "Garbage collection otomatis", "Widget Flutter ter-rebuild"],
            "a": 0,
            "explain": "Dereference pointer invalid dapat menyebabkan undefined behavior; kepemilikan dan masa hidup memori harus dijaga."
          },
          {
            "type": "mc",
            "q": "Prinsip RAII di C++ mengaitkan masa hidup resource dengan:",
            "options": ["Masa hidup objek pemiliknya", "Nama file CSS", "Urutan halaman web", "Nilai balik HTTP"],
            "a": 0,
            "explain": "RAII memakai constructor/destructor agar resource dilepas saat objek pemilik keluar dari scope."
          },
          {
            "type": "mc",
            "q": "Smart pointer `std::unique_ptr` dipilih ketika:",
            "options": ["Satu objek memiliki kepemilikan eksklusif atas resource", "Banyak pemilik bersama selalu diperlukan", "Resource harus bocor selamanya", "Pointer tidak boleh memiliki tipe"],
            "a": 0,
            "explain": "`unique_ptr` menyatakan kepemilikan tunggal dan melepas resource otomatis saat pemiliknya dihancurkan."
          },
          {
            "type": "mc",
            "q": "Di MATLAB, operasi vektor/matriks sering lebih baik daripada loop manual karena:",
            "options": ["Operasi tervektorisasi menyatakan komputasi array secara langsung", "Matriks tidak punya ukuran", "Loop dilarang oleh bahasa", "MATLAB hanya memproses string"],
            "a": 0,
            "explain": "Vectorization memanfaatkan operasi array bawaan MATLAB dan membuat maksud perhitungan lebih ringkas."
          }
        ]
      }
    ]
  }
];

export { CONTENT_WEB };
