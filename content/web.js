/* CodeDuo — blok konten: Blok Web (peta fungsi & arsitektur web).
 * 1 topik (web) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * Dual-mode: browser pakai global CONTENT_WEB; Node pakai module.exports.
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
              "kulit"
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
        "title": "Web Lesson 3",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #11: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #12: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #13: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #14: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #15: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #16: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #17: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #18: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #19: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #20: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
        "id": "web-4",
        "level": "Dasar",
        "title": "Web Lesson 4",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur Web Modern #21: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #22: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #23: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #24: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #25: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #26: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #27: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #28: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #29: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
            "q": "Arsitektur Web Modern #30: Bahasa yang mengatur tata letak, warna, dan tampilan visual halaman web adalah:",
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
      }
    ]
  }
];

export { CONTENT_WEB };

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_WEB };
}
