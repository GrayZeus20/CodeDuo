/* CodeDuo — blok konten: topik "Flutter" (dipisah dari Blok Web).
 * 1 topik (flutter) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_FLUTTER = [
{
    "id": "flutter",
    "name": "Flutter",
    "icon": "🦋",
    "color": "#02569b",
    "desc": "UI toolkit lintas platform dengan Dart",
    "lessons": [
      {
        "id": "flutter-1",
        "level": "Dasar",
        "title": "Pengenalan Flutter",
        "exercises": [
          {
            "type": "mc",
            "q": "Flutter adalah UI toolkit berbasis",
            "options": [
              "PHP",
              "Ruby",
              "MATLAB",
              "Dart"
            ],
            "a": 3,
            "explain": "Flutter memakai bahasa Dart."
          },
          {
            "type": "mc",
            "q": "Flutter memungkinkan membangun aplikasi untuk",
            "options": [
              "Android saja",
              "iOS saja",
              "CSS saja",
              "banyak platform dari satu codebase"
            ],
            "a": 3,
            "explain": "Flutter lintas platform dengan satu codebase."
          },
          {
            "type": "mc",
            "q": "Membuat proyek Flutter memakai",
            "options": [
              "flutter new nama",
              "dart new nama",
              "flutter create nama",
              "flutter init"
            ],
            "a": 2,
            "explain": "flutter create men-scaffold proyek."
          },
          {
            "type": "mc",
            "q": "Menjalankan aplikasi Flutter memakai",
            "options": [
              "flutter start",
              "flutter run",
              "dart run:app",
              "flutter go"
            ],
            "a": 1,
            "explain": "flutter run menjalankan aplikasi."
          },
          {
            "type": "mc",
            "q": "UI Flutter disusun dari",
            "options": [
              "komponen PHP",
              "widget",
              "tabel SQL",
              "CSS"
            ],
            "a": 1,
            "explain": "Flutter membangun UI dari widget."
          },
          {
            "type": "mc",
            "q": "Menyusun widget membentuk",
            "options": [
              "CSS tree",
              "widget tree",
              "SQL tree",
              "route tree"
            ],
            "a": 1,
            "explain": "Widget tersusun sebagai tree."
          },
          {
            "type": "mc",
            "q": "Hot reload berguna untuk",
            "options": [
              "melihat perubahan cepat saat pengembangan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hot reload mempercepat iterasi."
          },
          {
            "type": "mc",
            "q": "Mengelola dependency Flutter memakai",
            "options": [
              "pubspec.yaml",
              "composer.json",
              "Gemfile",
              "package.lock"
            ],
            "a": 0,
            "explain": "pubspec.yaml mendefinisikan dependency."
          },
          {
            "type": "mc",
            "q": "Package manager Dart adalah",
            "options": [
              "pub",
              "npm",
              "composer",
              "gem"
            ],
            "a": 0,
            "explain": "pub mengelola package Dart."
          },
          {
            "type": "mc",
            "q": "Flutter menggambar UI memakai",
            "options": [
              "HTML selalu",
              "engine render sendiri",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Flutter merender sendiri lewat engine."
          }
        ]
      },
      {
        "id": "flutter-2",
        "level": "Dasar",
        "title": "Widget Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Widget untuk teks adalah",
            "options": [
              "Label",
              "Text",
              "Span",
              "Div"
            ],
            "a": 1,
            "explain": "Text menampilkan teks."
          },
          {
            "type": "mc",
            "q": "Widget untuk menampung dan menata anak secara vertikal adalah",
            "options": [
              "Row",
              "Column",
              "Stack",
              "Wrap"
            ],
            "a": 1,
            "explain": "Column menata anak vertikal."
          },
          {
            "type": "mc",
            "q": "Widget untuk menata anak secara horizontal adalah",
            "options": [
              "Row",
              "Column",
              "Stack",
              "Grid"
            ],
            "a": 0,
            "explain": "Row menata anak horizontal."
          },
          {
            "type": "mc",
            "q": "Widget untuk menumpuk anak di atas adalah",
            "options": [
              "Column",
              "Stack",
              "Row",
              "Wrap"
            ],
            "a": 1,
            "explain": "Stack menumpuk anak."
          },
          {
            "type": "mc",
            "q": "Widget untuk membuat jarak/adalah",
            "options": [
              "Container/Padding",
              "Text",
              "Icon",
              "Route"
            ],
            "a": 0,
            "explain": "Container/Padding mengatur jarak."
          },
          {
            "type": "mc",
            "q": "Widget tombol yang umum adalah",
            "options": [
              "TextButtonClass",
              "ElevatedButton",
              "IconOnly",
              "TapBox"
            ],
            "a": 1,
            "explain": "ElevatedButton adalah tombol umum."
          },
          {
            "type": "mc",
            "q": "Widget untuk gambar adalah",
            "options": [
              "Image",
              "Photo",
              "Picture",
              "Media"
            ],
            "a": 0,
            "explain": "Image menampilkan gambar."
          },
          {
            "type": "mc",
            "q": "Widget untuk input teks adalah",
            "options": [
              "Input",
              "TextBox",
              "TextField",
              "Field"
            ],
            "a": 2,
            "explain": "TextField menerima input teks."
          },
          {
            "type": "mc",
            "q": "Scaffold menyediakan",
            "options": [
              "CSS",
              "route",
              "kerangka halaman (appbar, body)",
              "migrasi"
            ],
            "a": 2,
            "explain": "Scaffold menyediakan struktur halaman."
          },
          {
            "type": "mc",
            "q": "MaterialApp adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "root aplikasi Material"
            ],
            "a": 3,
            "explain": "MaterialApp membungkus aplikasi."
          }
        ]
      },
      {
        "id": "flutter-3",
        "level": "Dasar",
        "title": "Widget Umum",
        "exercises": [
          {
            "type": "mc",
            "q": "Widget untuk membuat kartu Material adalah",
            "options": [
              "Box",
              "Card",
              "Panel",
              "CSS"
            ],
            "a": 1,
            "explain": "Card membuat kartu Material."
          },
          {
            "type": "mc",
            "q": "Widget untuk menampilkan daftar tile adalah",
            "options": [
              "RowItem",
              "ListTile",
              "Cell",
              "CSS"
            ],
            "a": 1,
            "explain": "ListTile menyediakan baris terstruktur."
          },
          {
            "type": "mc",
            "q": "Widget untuk menu samping adalah",
            "options": [
              "Drawer",
              "SideBarOnly",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Drawer menampilkan menu samping."
          },
          {
            "type": "mc",
            "q": "Widget untuk tab adalah",
            "options": [
              "TabBar",
              "TabsOnly",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "TabBar membuat tab."
          },
          {
            "type": "mc",
            "q": "Widget untuk dialog adalah",
            "options": [
              "Popup",
              "AlertDialog",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "AlertDialog menampilkan dialog."
          },
          {
            "type": "mc",
            "q": "Widget untuk snackbar adalah",
            "options": [
              "ToastBar",
              "CSS",
              "SnackBar",
              "route"
            ],
            "a": 2,
            "explain": "SnackBar menampilkan pesan sementara."
          },
          {
            "type": "mc",
            "q": "Widget untuk progress melingkar adalah",
            "options": [
              "Spinner",
              "CircularProgressIndicator",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "CircularProgressIndicator menampilkan loading."
          },
          {
            "type": "mc",
            "q": "Widget pembungkus dengan batas lebar adalah",
            "options": [
              "LimitBox",
              "CSS",
              "route",
              "ConstrainedBox"
            ],
            "a": 3,
            "explain": "ConstrainedBox membatasi ukuran."
          },
          {
            "type": "mc",
            "q": "Widget untuk mengulang anak fleksibel adalah",
            "options": [
              "Loop",
              "Wrap",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Wrap membungkus anak ke baris baru."
          },
          {
            "type": "mc",
            "q": "Widget untuk bayangan/dekorasi memakai",
            "options": [
              "Container decoration",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Container decoration mengatur gaya."
          }
        ]
      },
      {
        "id": "flutter-4",
        "level": "Dasar",
        "title": "Layout Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengatur padding memakai widget",
            "options": [
              "Margin",
              "Space",
              "Gap",
              "Padding"
            ],
            "a": 3,
            "explain": "Padding menambah ruang dalam."
          },
          {
            "type": "mc",
            "q": "Mengatur ukuran kotak memakai",
            "options": [
              "SizedBox",
              "BoxSize",
              "Space",
              "Route"
            ],
            "a": 0,
            "explain": "SizedBox menetapkan ukuran."
          },
          {
            "type": "mc",
            "q": "Center memusatkan anak",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Center memusatkan child."
          },
          {
            "type": "mc",
            "q": "Expanded dipakai di dalam",
            "options": [
              "Row/Column/Flex",
              "Stack",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Expanded mengisi ruang flex."
          },
          {
            "type": "mc",
            "q": "Flexible mirip Expanded tetapi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lebih longgar (flexible)"
            ],
            "a": 3,
            "explain": "Flexible memberi fleksibilitas."
          },
          {
            "type": "mc",
            "q": "MainAxisAlignment mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "penataan sumbu utama"
            ],
            "a": 3,
            "explain": "MainAxis mengatur sumbu utama."
          },
          {
            "type": "mc",
            "q": "CrossAxisAlignment mengatur",
            "options": [
              "CSS",
              "penataan sumbu silang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "CrossAxis mengatur sumbu silang."
          },
          {
            "type": "mc",
            "q": "ListView dipakai untuk",
            "options": [
              "CSS",
              "route",
              "daftar yang dapat digulir",
              "migrasi"
            ],
            "a": 2,
            "explain": "ListView menggulir daftar."
          },
          {
            "type": "mc",
            "q": "GridView menampilkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "daftar berpetak"
            ],
            "a": 3,
            "explain": "GridView menampilkan grid."
          },
          {
            "type": "mc",
            "q": "SafeArea melindungi dari",
            "options": [
              "CSS",
              "route",
              "notch/area sistem",
              "migrasi"
            ],
            "a": 2,
            "explain": "SafeArea menghindari area sistem."
          }
        ]
      },
      {
        "id": "flutter-5",
        "level": "Dasar",
        "title": "Stateful vs Stateless",
        "exercises": [
          {
            "type": "mc",
            "q": "StatelessWidget dipakai untuk",
            "options": [
              "UI statis tanpa state",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "StatelessWidget tidak punya state."
          },
          {
            "type": "mc",
            "q": "StatefulWidget dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "UI bergantung state berubah"
            ],
            "a": 3,
            "explain": "StatefulWidget punya state."
          },
          {
            "type": "mc",
            "q": "Memperbarui UI pada StatefulWidget memakai",
            "options": [
              "update()",
              "CSS",
              "setState",
              "route"
            ],
            "a": 2,
            "explain": "setState memicu rebuild."
          },
          {
            "type": "mc",
            "q": "State disimpan pada objek",
            "options": [
              "Widget",
              "State",
              "BuildContext",
              "Route"
            ],
            "a": 1,
            "explain": "State disimpan pada objek State."
          },
          {
            "type": "mc",
            "q": "build() dipanggil saat",
            "options": [
              "widget perlu dirender",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "build dipanggil saat render."
          },
          {
            "type": "mc",
            "q": "Memanggil setState di luar state berisiko",
            "options": [
              "CSS",
              "route",
              "error",
              "migrasi"
            ],
            "a": 2,
            "explain": "setState harus di State."
          },
          {
            "type": "mc",
            "q": "StatelessWidget tidak boleh memakai",
            "options": [
              "setState",
              "build",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "StatelessWidget tidak punya setState."
          },
          {
            "type": "mc",
            "q": "initState dijalankan",
            "options": [
              "CSS",
              "sekali saat state dibuat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "initState sekali saat init."
          },
          {
            "type": "mc",
            "q": "dispose dipakai untuk",
            "options": [
              "CSS",
              "route",
              "membersihkan resource",
              "migrasi"
            ],
            "a": 2,
            "explain": "dispose melepas resource."
          },
          {
            "type": "mc",
            "q": "Rebuild berlebihan dapat",
            "options": [
              "CSS",
              "menurunkan performa",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Rebuild berlebih membebani."
          }
        ]
      },
      {
        "id": "flutter-6",
        "level": "Dasar",
        "title": "Navigasi Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Navigasi push halaman memakai",
            "options": [
              "Navigator.go",
              "Router.push",
              "CSS",
              "Navigator.push"
            ],
            "a": 3,
            "explain": "Navigator.push menambah route."
          },
          {
            "type": "mc",
            "q": "Navigasi kembali memakai",
            "options": [
              "Navigator.pop",
              "Navigator.back",
              "Router.pop",
              "CSS"
            ],
            "a": 0,
            "explain": "Navigator.pop kembali."
          },
          {
            "type": "mc",
            "q": "MaterialPageRoute dipakai untuk",
            "options": [
              "CSS",
              "route halaman Material",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "MaterialPageRoute membuat route."
          },
          {
            "type": "mc",
            "q": "Named routes didaftarkan di",
            "options": [
              "CSS",
              "routes pada MaterialApp",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "routes mendefinisikan named route."
          },
          {
            "type": "mc",
            "q": "Navigasi named route memakai",
            "options": [
              "Navigator.pushNamed(context, '/x')",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pushNamed membuka named route."
          },
          {
            "type": "mc",
            "q": "Mengirim argumen route memakai",
            "options": [
              "CSS",
              "route",
              "arguments",
              "migrasi"
            ],
            "a": 2,
            "explain": "Navigator meneruskan arguments."
          },
          {
            "type": "mc",
            "q": "GoRouter adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "package routing populer"
            ],
            "a": 3,
            "explain": "GoRouter untuk routing deklaratif."
          },
          {
            "type": "mc",
            "q": "Mengembalikan hasil pop memakai",
            "options": [
              "CSS",
              "route",
              "pop(result)",
              "migrasi"
            ],
            "a": 2,
            "explain": "pop dapat mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Navigasi harus memakai",
            "options": [
              "CSS",
              "BuildContext yang valid",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Context harus valid/mounted."
          },
          {
            "type": "mc",
            "q": "Deep link mendukung",
            "options": [
              "membuka halaman spesifik dari tautan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Deep link membuka halaman tertentu."
          }
        ]
      },
      {
        "id": "flutter-7",
        "level": "Dasar",
        "title": "Form & Input",
        "exercises": [
          {
            "type": "mc",
            "q": "TextField dikendalikan oleh",
            "options": [
              "TextEditingController",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Controller mengelola nilai teks."
          },
          {
            "type": "mc",
            "q": "Membaca nilai input memakai",
            "options": [
              "input.value",
              "controller.text",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "controller.text berisi nilai."
          },
          {
            "type": "mc",
            "q": "Form memakai widget",
            "options": [
              "FormBox",
              "Form",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Form membungkus field."
          },
          {
            "type": "mc",
            "q": "Validasi field memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "validator"
            ],
            "a": 3,
            "explain": "validator mengembalikan pesan error."
          },
          {
            "type": "mc",
            "q": "Key untuk form memakai",
            "options": [
              "CSS",
              "route",
              "GlobalKey<FormState>",
              "migrasi"
            ],
            "a": 2,
            "explain": "GlobalKey menyimpan state form."
          },
          {
            "type": "mc",
            "q": "Memeriksa validasi form memakai",
            "options": [
              "CSS",
              "route",
              "formKey.currentState.validate()",
              "migrasi"
            ],
            "a": 2,
            "explain": "validate memeriksa field."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan teks password memakai",
            "options": [
              "obscureText: true",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "obscureText menyembunyikan."
          },
          {
            "type": "mc",
            "q": "Keyboard type diatur dengan",
            "options": [
              "CSS",
              "route",
              "keyboardType",
              "migrasi"
            ],
            "a": 2,
            "explain": "keyboardType mengatur keyboard."
          },
          {
            "type": "mc",
            "q": "Controller harus di-dispose",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Controller perlu dispose."
          },
          {
            "type": "mc",
            "q": "onChanged dipakai untuk",
            "options": [
              "CSS",
              "bereaksi saat nilai berubah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "onChanged merespons perubahan."
          }
        ]
      },
      {
        "id": "flutter-8",
        "level": "Dasar",
        "title": "Styling & Tema",
        "exercises": [
          {
            "type": "mc",
            "q": "Tema aplikasi diatur lewat",
            "options": [
              "ThemeData",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "ThemeData mengatur tema."
          },
          {
            "type": "mc",
            "q": "Warna utama tema memakai",
            "options": [
              "CSS",
              "route",
              "colorScheme",
              "migrasi"
            ],
            "a": 2,
            "explain": "ColorScheme mengatur warna."
          },
          {
            "type": "mc",
            "q": "Mengatur gaya teks memakai",
            "options": [
              "TextStyle",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "TextStyle mengatur teks."
          },
          {
            "type": "mc",
            "q": "Mengatur padding konsisten memakai",
            "options": [
              "CSS",
              "EdgeInsets",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "EdgeInsets mengatur jarak."
          },
          {
            "type": "mc",
            "q": "Mengatur border memakai",
            "options": [
              "BoxDecoration/Border",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "BoxDecoration mengatur dekorasi."
          },
          {
            "type": "mc",
            "q": "Theme.of(context) dipakai untuk",
            "options": [
              "mengakses tema",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Theme.of membaca tema."
          },
          {
            "type": "mc",
            "q": "Dark mode diatur lewat",
            "options": [
              "darkTheme/themeMode",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "themeMode mengatur mode."
          },
          {
            "type": "mc",
            "q": "Font kustom didefinisikan di",
            "options": [
              "pubspec.yaml",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Font didaftarkan di pubspec."
          },
          {
            "type": "mc",
            "q": "Material 3 diaktifkan lewat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "useMaterial3"
            ],
            "a": 3,
            "explain": "useMaterial3 mengaktifkan M3."
          },
          {
            "type": "mc",
            "q": "Konsistensi gaya membantu",
            "options": [
              "CSS",
              "pengalaman pengguna",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Konsistensi tema penting."
          }
        ]
      },
      {
        "id": "flutter-9",
        "level": "Dasar",
        "title": "Asset & Gambar",
        "exercises": [
          {
            "type": "mc",
            "q": "Aset dideklarasikan di",
            "options": [
              "CSS",
              "pubspec.yaml",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Aset didaftarkan di pubspec."
          },
          {
            "type": "mc",
            "q": "Menampilkan aset gambar memakai",
            "options": [
              "CSS",
              "Image.asset('path')",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Image.asset memuat aset."
          },
          {
            "type": "mc",
            "q": "Menampilkan gambar jaringan memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Image.network('url')"
            ],
            "a": 3,
            "explain": "Image.network memuat dari internet."
          },
          {
            "type": "mc",
            "q": "Ikon bawaan memakai widget",
            "options": [
              "Icon",
              "Image",
              "Text",
              "CSS"
            ],
            "a": 0,
            "explain": "Icon menampilkan ikon."
          },
          {
            "type": "mc",
            "q": "Menampilkan ikon Material memakai",
            "options": [
              "CSS",
              "Icons.nama",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Icons menyediakan ikon Material."
          },
          {
            "type": "mc",
            "q": "Ukuran gambar diatur dengan",
            "options": [
              "CSS",
              "route",
              "width/height",
              "migrasi"
            ],
            "a": 2,
            "explain": "width/height mengatur ukuran."
          },
          {
            "type": "mc",
            "q": "fit pada Image mengatur",
            "options": [
              "CSS",
              "route",
              "cara gambar mengisi ruang",
              "migrasi"
            ],
            "a": 2,
            "explain": "fit mengatur penyesuaian gambar."
          },
          {
            "type": "mc",
            "q": "Menangani error gambar memakai",
            "options": [
              "CSS",
              "errorBuilder",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "errorBuilder menangani kegagalan."
          },
          {
            "type": "mc",
            "q": "Cache gambar jaringan dibantu oleh",
            "options": [
              "CSS",
              "package cache (mis. cached_network_image)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Package cache menyimpan gambar."
          },
          {
            "type": "mc",
            "q": "Aset ikon aplikasi diatur di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "launcher icon config"
            ],
            "a": 3,
            "explain": "Konfigurasi launcher icon."
          }
        ]
      },
      {
        "id": "flutter-10",
        "level": "Dasar",
        "title": "List & Scrolling",
        "exercises": [
          {
            "type": "mc",
            "q": "Membangun list dari data memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "ListView.builder"
            ],
            "a": 3,
            "explain": "ListView.builder membangun item sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Item list minimal butuh",
            "options": [
              "itemBuilder",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "itemBuilder membuat tiap item."
          },
          {
            "type": "mc",
            "q": "Key untuk item list penting saat",
            "options": [
              "urutan/perubahan dinamis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Key membantu rekonsiliasi."
          },
          {
            "type": "mc",
            "q": "Menangani list kosong memakai",
            "options": [
              "kondisi empty state",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Empty state memberi umpan balik."
          },
          {
            "type": "mc",
            "q": "RefreshIndicator dipakai untuk",
            "options": [
              "CSS",
              "route",
              "pull to refresh",
              "migrasi"
            ],
            "a": 2,
            "explain": "RefreshIndicator menangani tarik."
          },
          {
            "type": "mc",
            "q": "ScrollController memungkinkan",
            "options": [
              "CSS",
              "kontrol posisi scroll",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Controller mengatur scroll."
          },
          {
            "type": "mc",
            "q": "ListView.separated menambah",
            "options": [
              "CSS",
              "route",
              "pemisah antar item",
              "migrasi"
            ],
            "a": 2,
            "explain": "separated menambah separator."
          },
          {
            "type": "mc",
            "q": "List panjang sebaiknya memakai",
            "options": [
              "CSS",
              "route",
              "builder, bukan children statis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Builder lebih efisien."
          },
          {
            "type": "mc",
            "q": "CustomScrollView memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "sliver kompleks"
            ],
            "a": 3,
            "explain": "CustomScrollView memakai sliver."
          },
          {
            "type": "mc",
            "q": "Scroll berlebihan tanpa builder dapat",
            "options": [
              "CSS",
              "route",
              "memakan memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "Children statis memuat semua."
          }
        ]
      },
      {
        "id": "flutter-11",
        "level": "Menengah",
        "title": "Routing Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "GoRouter memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "routing deklaratif"
            ],
            "a": 3,
            "explain": "GoRouter mendukung routing deklaratif."
          },
          {
            "type": "mc",
            "q": "Nested route memungkinkan",
            "options": [
              "CSS",
              "route",
              "sub-halaman",
              "migrasi"
            ],
            "a": 2,
            "explain": "Nested route menyusun sub-halaman."
          },
          {
            "type": "mc",
            "q": "Path parameter pada GoRouter memakai",
            "options": [
              "{id}",
              ":id",
              "<id>",
              "CSS"
            ],
            "a": 1,
            "explain": "GoRouter memakai :id."
          },
          {
            "type": "mc",
            "q": "Query parameter pada GoRouter diakses lewat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "state.uri.queryParameters"
            ],
            "a": 3,
            "explain": "Query diambil dari uri."
          },
          {
            "type": "mc",
            "q": "Redirect pada router berguna untuk",
            "options": [
              "CSS",
              "guard autentikasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Redirect menangani guard."
          },
          {
            "type": "mc",
            "q": "Deep link perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dikonfigurasi di platform"
            ],
            "a": 3,
            "explain": "Deep link butuh konfigurasi platform."
          },
          {
            "type": "mc",
            "q": "Navigasi kembali programatik memakai",
            "options": [
              "context.pop()/Navigator.pop",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pop kembali ke halaman sebelumnya."
          },
          {
            "type": "mc",
            "q": "Menangani route tidak dikenal memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "errorBuilder/not-found route"
            ],
            "a": 3,
            "explain": "Tangani route tak dikenal."
          },
          {
            "type": "mc",
            "q": "Shell route mempertahankan",
            "options": [
              "CSS",
              "route",
              "UI bersama (mis. bottom nav)",
              "migrasi"
            ],
            "a": 2,
            "explain": "Shell route menjaga navigasi bawah."
          },
          {
            "type": "mc",
            "q": "Routing harus menjaga",
            "options": [
              "state dan history konsisten",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Konsistensi state penting."
          }
        ]
      },
      {
        "id": "flutter-12",
        "level": "Menengah",
        "title": "Form Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "FormField kustom memungkinkan",
            "options": [
              "validasi field khusus",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "FormField untuk field kustom."
          },
          {
            "type": "mc",
            "q": "AutovalidateMode mengatur",
            "options": [
              "CSS",
              "kapan validasi berjalan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Autovalidate mengatur validasi."
          },
          {
            "type": "mc",
            "q": "FocusNode mengelola",
            "options": [
              "fokus field",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "FocusNode mengatur fokus."
          },
          {
            "type": "mc",
            "q": "Mengatur urutan fokus memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "focus traversal"
            ],
            "a": 3,
            "explain": "Traversal mengatur fokus."
          },
          {
            "type": "mc",
            "q": "Input format memakai",
            "options": [
              "inputFormatters",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Formatter membatasi input."
          },
          {
            "type": "mc",
            "q": "Membatasi panjang input memakai",
            "options": [
              "maxLength",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "maxLength membatasi."
          },
          {
            "type": "mc",
            "q": "Mengosongkan field memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "controller.clear()"
            ],
            "a": 3,
            "explain": "clear mengosongkan."
          },
          {
            "type": "mc",
            "q": "Menyimpan nilai form penting untuk",
            "options": [
              "CSS",
              "route",
              "UX",
              "migrasi"
            ],
            "a": 2,
            "explain": "Penyimpanan nilai membantu UX."
          },
          {
            "type": "mc",
            "q": "Form validasi harus di",
            "options": [
              "CSS",
              "route",
              "klien dan server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi ganda penting."
          },
          {
            "type": "mc",
            "q": "Menampilkan error form memakai",
            "options": [
              "CSS",
              "route",
              "pesan pada field",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pesan jelas membantu."
          }
        ]
      },
      {
        "id": "flutter-13",
        "level": "Menengah",
        "title": "Testing Widget",
        "exercises": [
          {
            "type": "mc",
            "q": "find.byType dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menemukan widget berdasarkan tipe"
            ],
            "a": 3,
            "explain": "Finder mencari per tipe."
          },
          {
            "type": "mc",
            "q": "find.text mencari",
            "options": [
              "CSS",
              "teks tertentu",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Finder mencari teks."
          },
          {
            "type": "mc",
            "q": "tester.tap memicu",
            "options": [
              "CSS",
              "gestur tap",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "tap menyimulasikan ketuk."
          },
          {
            "type": "mc",
            "q": "tester.pump memajukan",
            "options": [
              "frame/waktu",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pump memajukan frame."
          },
          {
            "type": "mc",
            "q": "tester.pumpAndSettle menunggu",
            "options": [
              "animasi selesai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pumpAndSettle menunggu animasi."
          },
          {
            "type": "mc",
            "q": "Menguji navigasi memerlukan",
            "options": [
              "CSS",
              "pump navigasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Navigasi membutuhkan pump."
          },
          {
            "type": "mc",
            "q": "Mock dependency memakai",
            "options": [
              "mocktail/mockito",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Library mock untuk dependency."
          },
          {
            "type": "mc",
            "q": "Golden test membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "deteksi regresi visual"
            ],
            "a": 3,
            "explain": "Golden mendeteksi perubahan visual."
          },
          {
            "type": "mc",
            "q": "Test aksesibilitas membantu",
            "options": [
              "CSS",
              "kualitas UI",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Aksesibilitas penting."
          },
          {
            "type": "mc",
            "q": "Test harus deterministik",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Test harus stabil."
          }
        ]
      },
      {
        "id": "flutter-14",
        "level": "Menengah",
        "title": "Internasionalisasi",
        "exercises": [
          {
            "type": "mc",
            "q": "i18n Flutter memakai",
            "options": [
              "CSS",
              "route",
              "intl dan arb",
              "migrasi"
            ],
            "a": 2,
            "explain": "Package intl + berkas arb."
          },
          {
            "type": "mc",
            "q": "Berkas terjemahan berekstensi",
            "options": [
              ".arb",
              ".json",
              ".loc",
              ".i18n"
            ],
            "a": 0,
            "explain": "Arb menyimpan terjemahan."
          },
          {
            "type": "mc",
            "q": "Mengakses terjemahan memakai",
            "options": [
              "CSS",
              "AppLocalizations.of(context)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Localizations mengakses terjemahan."
          },
          {
            "type": "mc",
            "q": "Mendukung locale memakai",
            "options": [
              "supportedLocales",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "supportedLocales mendaftar locale."
          },
          {
            "type": "mc",
            "q": "Format tanggal lokal memakai",
            "options": [
              "CSS",
              "intl DateFormat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "DateFormat memformat tanggal."
          },
          {
            "type": "mc",
            "q": "Format angka lokal memakai",
            "options": [
              "NumberFormat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "NumberFormat memformat angka."
          },
          {
            "type": "mc",
            "q": "RTL layout didukung Flutter",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Flutter mendukung RTL."
          },
          {
            "type": "mc",
            "q": "Lokalisasi harus diuji",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "di beberapa bahasa"
            ],
            "a": 3,
            "explain": "Uji terjemahan."
          },
          {
            "type": "mc",
            "q": "Teks hardcoded menyulitkan",
            "options": [
              "lokalisasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hardcode menghambat i18n."
          },
          {
            "type": "mc",
            "q": "Pluralisasi memakai",
            "options": [
              "CSS",
              "ICU/intl messages",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pluralisasi lewat intl."
          }
        ]
      },
      {
        "id": "flutter-15",
        "level": "Menengah",
        "title": "State Management",
        "exercises": [
          {
            "type": "mc",
            "q": "setState cocok untuk",
            "options": [
              "CSS",
              "state lokal sederhana",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "setState untuk state lokal."
          },
          {
            "type": "mc",
            "q": "Provider adalah",
            "options": [
              "solusi state management populer",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Provider membagikan state."
          },
          {
            "type": "mc",
            "q": "Riverpod menyediakan",
            "options": [
              "CSS",
              "route",
              "state management dengan dependensi eksplisit",
              "migrasi"
            ],
            "a": 2,
            "explain": "Riverpod menekankan komposisi."
          },
          {
            "type": "mc",
            "q": "BLoC memisahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "event dan state"
            ],
            "a": 3,
            "explain": "BLoC memakai event/state."
          },
          {
            "type": "mc",
            "q": "Memilih library state bergantung pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kompleksitas dan tim"
            ],
            "a": 3,
            "explain": "Pilihan sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "InheritedWidget adalah",
            "options": [
              "CSS",
              "mekanisme berbagi state bawaan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "InheritedWidget berbagi data."
          },
          {
            "type": "mc",
            "q": "ValueNotifier/ChangeNotifier dipakai untuk",
            "options": [
              "memberitahukan perubahan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Notifier memberi tahu listener."
          },
          {
            "type": "mc",
            "q": "Reactive rebuild berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "memengaruhi performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rebuild berlebih membebani."
          },
          {
            "type": "mc",
            "q": "Memisahkan state UI dan domain membantu",
            "options": [
              "CSS",
              "pengujian",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "State global untuk data bersama memakai",
            "options": [
              "CSS",
              "provider/bloc/riverpod",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Library membagikan state."
          }
        ]
      },
      {
        "id": "flutter-16",
        "level": "Menengah",
        "title": "Async & Future",
        "exercises": [
          {
            "type": "mc",
            "q": "Operasi async mengembalikan",
            "options": [
              "CSS",
              "route",
              "Future",
              "migrasi"
            ],
            "a": 2,
            "explain": "Future mewakili hasil async."
          },
          {
            "type": "mc",
            "q": "Menunggu Future memakai",
            "options": [
              "CSS",
              "await",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "await menunggu hasil."
          },
          {
            "type": "mc",
            "q": "Fungsi async dideklarasikan dengan",
            "options": [
              "CSS",
              "route",
              "async",
              "migrasi"
            ],
            "a": 2,
            "explain": "async menandai fungsi asynchronous."
          },
          {
            "type": "mc",
            "q": "Stream mengirim",
            "options": [
              "CSS",
              "banyak nilai seiring waktu",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Stream menghasilkan rangkaian nilai."
          },
          {
            "type": "mc",
            "q": "FutureBuilder dipakai untuk",
            "options": [
              "membangun UI dari Future",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "FutureBuilder merender berdasarkan Future."
          },
          {
            "type": "mc",
            "q": "Menangani error Future memakai",
            "options": [
              "CSS",
              "try/catch atau catchError",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Penanganan error diperlukan."
          },
          {
            "type": "mc",
            "q": "Menampilkan loading memakai",
            "options": [
              "CSS",
              "state loading pada FutureBuilder",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Loading state memberi umpan balik."
          },
          {
            "type": "mc",
            "q": "Membatalkan operasi async",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "memerlukan pengecekan/cancel token"
            ],
            "a": 3,
            "explain": "Pembatalan perlu dukungan eksplisit."
          },
          {
            "type": "mc",
            "q": "initState sering memicu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemuatan data awal"
            ],
            "a": 3,
            "explain": "Memuat data di initState."
          },
          {
            "type": "mc",
            "q": "Await di build sebaiknya",
            "options": [
              "CSS",
              "dihindari",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Build harus sinkron."
          }
        ]
      },
      {
        "id": "flutter-17",
        "level": "Menengah",
        "title": "Networking & API",
        "exercises": [
          {
            "type": "mc",
            "q": "Package HTTP umum adalah",
            "options": [
              "CSS",
              "route",
              "http",
              "migrasi"
            ],
            "a": 2,
            "explain": "Package http untuk request."
          },
          {
            "type": "mc",
            "q": "Mengambil data JSON memakai",
            "options": [
              "http.get lalu jsonDecode",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Request lalu decode JSON."
          },
          {
            "type": "mc",
            "q": "Model dari JSON memakai",
            "options": [
              "CSS",
              "fromJson factory",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "fromJson membentuk model."
          },
          {
            "type": "mc",
            "q": "Mengirim data memakai",
            "options": [
              "CSS",
              "route",
              "http.post",
              "migrasi"
            ],
            "a": 2,
            "explain": "post mengirim data."
          },
          {
            "type": "mc",
            "q": "Menangani status non-200 penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Status non-200 perlu ditangani."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "CSS",
              "route",
              "akses API dari UI",
              "migrasi"
            ],
            "a": 2,
            "explain": "Repository mengabstraksi API."
          },
          {
            "type": "mc",
            "q": "Dio adalah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "package HTTP dengan fitur lanjutan"
            ],
            "a": 3,
            "explain": "Dio menyediakan interceptor dll."
          },
          {
            "type": "mc",
            "q": "Menyimpan token aman memakai",
            "options": [
              "CSS",
              "route",
              "secure storage",
              "migrasi"
            ],
            "a": 2,
            "explain": "Secure storage menyimpan token."
          },
          {
            "type": "mc",
            "q": "Timeout request penting untuk",
            "options": [
              "keandalan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Error jaringan harus",
            "options": [
              "CSS",
              "route",
              "ditangani dan diinformasikan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Error jelas membantu pengguna."
          }
        ]
      },
      {
        "id": "flutter-18",
        "level": "Menengah",
        "title": "Animasi & Gesture",
        "exercises": [
          {
            "type": "mc",
            "q": "AnimatedContainer dipakai untuk",
            "options": [
              "animasi properti",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "AnimatedContainer menganimasikan perubahan."
          },
          {
            "type": "mc",
            "q": "AnimationController mengendalikan",
            "options": [
              "CSS",
              "route",
              "animasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Controller mengatur animasi."
          },
          {
            "type": "mc",
            "q": "Tween mendefinisikan",
            "options": [
              "rentang nilai animasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Tween menetapkan nilai animasi."
          },
          {
            "type": "mc",
            "q": "GestureDetector menangani",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "gesture pengguna"
            ],
            "a": 3,
            "explain": "GestureDetector menangkap gestur."
          },
          {
            "type": "mc",
            "q": "InkWell memberi efek",
            "options": [
              "ripple saat ditekan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "InkWell memberi efek sentuh."
          },
          {
            "type": "mc",
            "q": "Hero menganimasikan",
            "options": [
              "CSS",
              "transisi antar halaman",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hero membuat animasi transisi."
          },
          {
            "type": "mc",
            "q": "Animation harus di-dispose",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Controller perlu dispose."
          },
          {
            "type": "mc",
            "q": "TickerProvider dibutuhkan oleh",
            "options": [
              "CSS",
              "route",
              "AnimationController",
              "migrasi"
            ],
            "a": 2,
            "explain": "Controller membutuhkan vsync."
          },
          {
            "type": "mc",
            "q": "Animasi berlebihan dapat",
            "options": [
              "mengganggu pengguna",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Animasi harus fungsional."
          },
          {
            "type": "mc",
            "q": "Implicit animations mengurangi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kode manual controller"
            ],
            "a": 3,
            "explain": "Implicit animation lebih sederhana."
          }
        ]
      },
      {
        "id": "flutter-19",
        "level": "Menengah",
        "title": "Responsive & Adaptif",
        "exercises": [
          {
            "type": "mc",
            "q": "LayoutBuilder membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menyesuaikan layout berdasarkan ukuran"
            ],
            "a": 3,
            "explain": "LayoutBuilder memberi constraints."
          },
          {
            "type": "mc",
            "q": "MediaQuery memberi",
            "options": [
              "CSS",
              "ukuran layar dan info",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "MediaQuery menyediakan info layar."
          },
          {
            "type": "mc",
            "q": "Breakpoint responsif memisahkan",
            "options": [
              "CSS",
              "route",
              "layout per ukuran",
              "migrasi"
            ],
            "a": 2,
            "explain": "Breakpoint menyesuaikan layout."
          },
          {
            "type": "mc",
            "q": "Orientation memberi tahu",
            "options": [
              "orientasi perangkat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Orientation mendeteksi portrait/landscape."
          },
          {
            "type": "mc",
            "q": "Widget adaptif menyesuaikan",
            "options": [
              "platform (iOS/Android)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Adaptif menyesuaikan per platform."
          },
          {
            "type": "mc",
            "q": "Flex dan Expanded membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengisi ruang fleksibel"
            ],
            "a": 3,
            "explain": "Flex mengatur ruang."
          },
          {
            "type": "mc",
            "q": "Overflow terjadi bila",
            "options": [
              "CSS",
              "route",
              "konten melebihi ruang",
              "migrasi"
            ],
            "a": 2,
            "explain": "Overflow menandakan layout salah."
          },
          {
            "type": "mc",
            "q": "SingleChildScrollView membantu",
            "options": [
              "CSS",
              "route",
              "konten lebih panjang dari layar",
              "migrasi"
            ],
            "a": 2,
            "explain": "ScrollView menghindari overflow."
          },
          {
            "type": "mc",
            "q": "Menguji di berbagai ukuran penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji di banyak ukuran."
          },
          {
            "type": "mc",
            "q": "Desain responsif meningkatkan",
            "options": [
              "CSS",
              "pengalaman pengguna",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Responsif memperbaiki UX."
          }
        ]
      },
      {
        "id": "flutter-20",
        "level": "Menengah",
        "title": "Testing Flutter",
        "exercises": [
          {
            "type": "mc",
            "q": "Test widget memakai",
            "options": [
              "flutter_test",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "package flutter_test untuk widget test."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "flutter run:test",
              "flutter test",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "flutter test menjalankan test."
          },
          {
            "type": "mc",
            "q": "WidgetTester dipakai untuk",
            "options": [
              "berinteraksi dengan widget",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Tester berinteraksi dalam test."
          },
          {
            "type": "mc",
            "q": "pumpWidget membangun",
            "options": [
              "CSS",
              "route",
              "widget tree untuk test",
              "migrasi"
            ],
            "a": 2,
            "explain": "pumpWidget me-render widget."
          },
          {
            "type": "mc",
            "q": "expect(finder, matcher) memeriksa",
            "options": [
              "CSS",
              "route",
              "hasil",
              "migrasi"
            ],
            "a": 2,
            "explain": "expect memeriksa kondisi."
          },
          {
            "type": "mc",
            "q": "Integration test menguji",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "alur end-to-end"
            ],
            "a": 3,
            "explain": "Integration test menguji alur penuh."
          },
          {
            "type": "mc",
            "q": "Mocking API pada test memakai",
            "options": [
              "CSS",
              "route",
              "mockito/mocktail",
              "migrasi"
            ],
            "a": 2,
            "explain": "Library mock menyediakan mock."
          },
          {
            "type": "mc",
            "q": "Golden test memeriksa",
            "options": [
              "CSS",
              "route",
              "tampilan visual",
              "migrasi"
            ],
            "a": 2,
            "explain": "Golden membandingkan gambar."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "test implementasi"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengukur cakupan test"
            ],
            "a": 3,
            "explain": "Coverage mengukur test."
          }
        ]
      },
      {
        "id": "flutter-21",
        "level": "Advance",
        "title": "Async Lanjutan & Stream",
        "exercises": [
          {
            "type": "mc",
            "q": "StreamBuilder membangun UI dari",
            "options": [
              "Stream",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "StreamBuilder merender dari stream."
          },
          {
            "type": "mc",
            "q": "StreamController mengelola",
            "options": [
              "CSS",
              "route",
              "aliran event",
              "migrasi"
            ],
            "a": 2,
            "explain": "Controller mengelola stream."
          },
          {
            "type": "mc",
            "q": "Broadcast stream memungkinkan",
            "options": [
              "CSS",
              "banyak listener",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Broadcast untuk banyak listener."
          },
          {
            "type": "mc",
            "q": "Menutup stream penting untuk",
            "options": [
              "CSS",
              "melepas resource",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Close melepas resource."
          },
          {
            "type": "mc",
            "q": "Transform stream memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "map/where"
            ],
            "a": 3,
            "explain": "Transform mengolah aliran."
          },
          {
            "type": "mc",
            "q": "Menangani error stream memakai",
            "options": [
              "CSS",
              "onError/handleError",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Error stream perlu ditangani."
          },
          {
            "type": "mc",
            "q": "Future.wait menjalankan",
            "options": [
              "CSS",
              "beberapa Future paralel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Future.wait menunggu paralel."
          },
          {
            "type": "mc",
            "q": "Zone menangani",
            "options": [
              "CSS",
              "konteks asynchronous",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Zone mengatur konteks async."
          },
          {
            "type": "mc",
            "q": "Membatalkan subscription penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Cancel subscription."
          },
          {
            "type": "mc",
            "q": "Backpressure pada stream perlu",
            "options": [
              "CSS",
              "dikelola",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Aliran deras perlu dikelola."
          }
        ]
      },
      {
        "id": "flutter-22",
        "level": "Advance",
        "title": "Integrasi & Background",
        "exercises": [
          {
            "type": "mc",
            "q": "Background task memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "workmanager/isolate"
            ],
            "a": 3,
            "explain": "Background job perlu dukungan."
          },
          {
            "type": "mc",
            "q": "Notifikasi push memakai",
            "options": [
              "CSS",
              "firebase_messaging",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "FCM untuk push notif."
          },
          {
            "type": "mc",
            "q": "Menyimpan token perangkat perlu",
            "options": [
              "CSS",
              "route",
              "dikirim ke server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Token dikirim ke server."
          },
          {
            "type": "mc",
            "q": "Menangani notifikasi di background perlu",
            "options": [
              "CSS",
              "handler khusus",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Handler background diperlukan."
          },
          {
            "type": "mc",
            "q": "Deep link dari notifikasi membuka",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "halaman spesifik"
            ],
            "a": 3,
            "explain": "Notifikasi dapat deep link."
          },
          {
            "type": "mc",
            "q": "Izin runtime penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Izin runtime wajib."
          },
          {
            "type": "mc",
            "q": "Menangani status aplikasi memakai",
            "options": [
              "CSS",
              "WidgetsBindingObserver",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Observer memantau lifecycle."
          },
          {
            "type": "mc",
            "q": "Menyegarkan data saat resume penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Refresh saat resume."
          },
          {
            "type": "mc",
            "q": "Battery/memori perlu diperhatikan",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Hemat resource."
          },
          {
            "type": "mc",
            "q": "Uji di perangkat nyata penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Uji di perangkat nyata."
          }
        ]
      },
      {
        "id": "flutter-23",
        "level": "Advance",
        "title": "Aksesibilitas Flutter",
        "exercises": [
          {
            "type": "mc",
            "q": "Semantics widget membantu",
            "options": [
              "CSS",
              "route",
              "aksesibilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Semantics memberi info aksesibel."
          },
          {
            "type": "mc",
            "q": "Label tombol ikon perlu",
            "options": [
              "CSS",
              "route",
              "tooltip/semantic label",
              "migrasi"
            ],
            "a": 2,
            "explain": "Label membantu pembaca layar."
          },
          {
            "type": "mc",
            "q": "Ukuran target sentuh minimal penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Target sentuh memadai."
          },
          {
            "type": "mc",
            "q": "Kontras warna memadai penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Kontras membantu keterbacaan."
          },
          {
            "type": "mc",
            "q": "Dukungan ukuran font besar perlu",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Respek pengaturan font."
          },
          {
            "type": "mc",
            "q": "Semantics debug dapat diaktifkan",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Debug aksesibilitas membantu."
          },
          {
            "type": "mc",
            "q": "Urutan fokus harus logis",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Urutan fokus logis."
          },
          {
            "type": "mc",
            "q": "excludeSemantics berguna untuk",
            "options": [
              "CSS",
              "menyembunyikan elemen dekoratif",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Elemen dekoratif bisa disembunyikan."
          },
          {
            "type": "mc",
            "q": "Uji aksesibilitas penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji aksesibilitas."
          },
          {
            "type": "mc",
            "q": "Alternatif teks untuk gambar wajib",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Gambar perlu alternatif teks."
          }
        ]
      },
      {
        "id": "flutter-24",
        "level": "Advance",
        "title": "State Lanjutan & Pattern",
        "exercises": [
          {
            "type": "mc",
            "q": "BLoC memakai",
            "options": [
              "event dan state terpisah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "BLoC memisahkan event/state."
          },
          {
            "type": "mc",
            "q": "Riverpod menyediakan",
            "options": [
              "CSS",
              "route",
              "dependency injection dan state",
              "migrasi"
            ],
            "a": 2,
            "explain": "Riverpod menggabungkan DI/state."
          },
          {
            "type": "mc",
            "q": "Reducer pattern memusatkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "transisi state"
            ],
            "a": 3,
            "explain": "Reducer memusatkan transisi."
          },
          {
            "type": "mc",
            "q": "Immutable state membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "prediktabilitas"
            ],
            "a": 3,
            "explain": "Immutable memudahkan reasoning."
          },
          {
            "type": "mc",
            "q": "Memisahkan state UI/domain membantu",
            "options": [
              "pengujian",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "Side effect sebaiknya di",
            "options": [
              "CSS",
              "route",
              "luar build",
              "migrasi"
            ],
            "a": 2,
            "explain": "Side effect di luar build."
          },
          {
            "type": "mc",
            "q": "Mengelola state async memerlukan",
            "options": [
              "CSS",
              "loading/error/data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "State async lengkap."
          },
          {
            "type": "mc",
            "q": "Rebuild selektif memakai",
            "options": [
              "CSS",
              "selector",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Selector mengurangi rebuild."
          },
          {
            "type": "mc",
            "q": "State global minimalis lebih baik",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "State global seperlunya."
          },
          {
            "type": "mc",
            "q": "Dokumentasi pattern penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi memudahkan tim."
          }
        ]
      },
      {
        "id": "flutter-25",
        "level": "Advance",
        "title": "Isolate & Performance",
        "exercises": [
          {
            "type": "mc",
            "q": "Isolate dipakai untuk",
            "options": [
              "CSS",
              "route",
              "paralelisme terpisah memori",
              "migrasi"
            ],
            "a": 2,
            "explain": "Isolate menjalankan kode terpisah."
          },
          {
            "type": "mc",
            "q": "Isolate berkomunikasi lewat",
            "options": [
              "message passing",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Isolate bertukar pesan."
          },
          {
            "type": "mc",
            "q": "compute() membantu",
            "options": [
              "CSS",
              "menjalankan fungsi berat di isolate",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "compute menjalankan di isolate."
          },
          {
            "type": "mc",
            "q": "Pekerjaan berat di main isolate menyebabkan",
            "options": [
              "CSS",
              "route",
              "UI tersendat",
              "migrasi"
            ],
            "a": 2,
            "explain": "Main isolate harus ringan."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "DevTools"
            ],
            "a": 3,
            "explain": "DevTools menyediakan profiler."
          },
          {
            "type": "mc",
            "q": "Rebuild berlebihan diperbaiki dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "const widget dan pemisahan"
            ],
            "a": 3,
            "explain": "Const mengurangi rebuild."
          },
          {
            "type": "mc",
            "q": "const constructor membantu",
            "options": [
              "CSS",
              "performa",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Const widget tidak dibangun ulang."
          },
          {
            "type": "mc",
            "q": "RepaintBoundary membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengurangi repaint"
            ],
            "a": 3,
            "explain": "RepaintBoundary memisahkan layer."
          },
          {
            "type": "mc",
            "q": "Image berat sebaiknya",
            "options": [
              "CSS",
              "di-resize",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Resize menghemat memori."
          },
          {
            "type": "mc",
            "q": "Frame drop menandakan",
            "options": [
              "masalah performa",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Frame drop menunjukkan lag."
          }
        ]
      },
      {
        "id": "flutter-26",
        "level": "Advance",
        "title": "Arsitektur Flutter",
        "exercises": [
          {
            "type": "mc",
            "q": "Pemisahan layer membantu",
            "options": [
              "pengujian dan perawatan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Layer terpisah mudah diuji."
          },
          {
            "type": "mc",
            "q": "Clean architecture memisahkan",
            "options": [
              "domain, data, presentation",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Layer memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Repository mengabstraksi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "sumber data"
            ],
            "a": 3,
            "explain": "Repository menyembunyikan data."
          },
          {
            "type": "mc",
            "q": "Use case menampung",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "satu aturan bisnis"
            ],
            "a": 3,
            "explain": "Use case fokus satu operasi."
          },
          {
            "type": "mc",
            "q": "Dependency injection memakai",
            "options": [
              "provider/get_it",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "DI lewat provider/get_it."
          },
          {
            "type": "mc",
            "q": "Modularisasi fitur membantu",
            "options": [
              "CSS",
              "route",
              "skalabilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Fitur modular memudahkan scaling."
          },
          {
            "type": "mc",
            "q": "Menghindari god widget dengan",
            "options": [
              "memecah komponen",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pecah widget besar."
          },
          {
            "type": "mc",
            "q": "Model immutable membantu",
            "options": [
              "CSS",
              "route",
              "prediktabilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Immutable memudahkan reasoning."
          },
          {
            "type": "mc",
            "q": "Error handling terpusat penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Penanganan error terpusat."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur membantu tim",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi memudahkan kolaborasi."
          }
        ]
      },
      {
        "id": "flutter-27",
        "level": "Advance",
        "title": "Platform Channel & Native",
        "exercises": [
          {
            "type": "mc",
            "q": "Platform channel menghubungkan",
            "options": [
              "Dart ke kode native",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Channel menjembatani Dart dan native."
          },
          {
            "type": "mc",
            "q": "MethodChannel dipakai untuk",
            "options": [
              "CSS",
              "route",
              "memanggil method native",
              "migrasi"
            ],
            "a": 2,
            "explain": "MethodChannel memanggil native."
          },
          {
            "type": "mc",
            "q": "EventChannel mengirim",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "aliran event dari native"
            ],
            "a": 3,
            "explain": "EventChannel mengalirkan event."
          },
          {
            "type": "mc",
            "q": "Plugin Flutter membungkus",
            "options": [
              "CSS",
              "route",
              "kode native lintas platform",
              "migrasi"
            ],
            "a": 2,
            "explain": "Plugin menyatukan native."
          },
          {
            "type": "mc",
            "q": "Menulis plugin memerlukan",
            "options": [
              "CSS",
              "kode Dart + native",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Plugin butuh dua sisi."
          },
          {
            "type": "mc",
            "q": "Error channel harus",
            "options": [
              "CSS",
              "route",
              "ditangani",
              "migrasi"
            ],
            "a": 2,
            "explain": "Penanganan error penting."
          },
          {
            "type": "mc",
            "q": "Pigeon membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "codegen binding native"
            ],
            "a": 3,
            "explain": "Pigeon menghasilkan binding."
          },
          {
            "type": "mc",
            "q": "FFI memungkinkan",
            "options": [
              "memanggil library C",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "FFI memanggil C langsung."
          },
          {
            "type": "mc",
            "q": "Kode native harus diuji",
            "options": [
              "di platform target",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Uji di perangkat nyata."
          },
          {
            "type": "mc",
            "q": "Channel async dijalankan",
            "options": [
              "CSS",
              "di luar main isolate terkadang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pemanggilan native bisa async."
          }
        ]
      },
      {
        "id": "flutter-28",
        "level": "Advance",
        "title": "Persistensi & Storage",
        "exercises": [
          {
            "type": "mc",
            "q": "SharedPreferences menyimpan",
            "options": [
              "key-value sederhana",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "SharedPreferences untuk data kecil."
          },
          {
            "type": "mc",
            "q": "SQLite via sqflite menyimpan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "data relasional"
            ],
            "a": 3,
            "explain": "sqflite menyediakan SQLite."
          },
          {
            "type": "mc",
            "q": "Hive/Isar adalah",
            "options": [
              "database lokal cepat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Hive/Isar untuk lokal."
          },
          {
            "type": "mc",
            "q": "Menyimpan file memakai",
            "options": [
              "CSS",
              "path_provider",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "path_provider memberi path."
          },
          {
            "type": "mc",
            "q": "Data sensitif disimpan di",
            "options": [
              "secure storage",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Secure storage untuk rahasia."
          },
          {
            "type": "mc",
            "q": "Migration skema lokal penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Migrasi menjaga kompatibilitas data."
          },
          {
            "type": "mc",
            "q": "Query database sebaiknya",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "di isolate/latar"
            ],
            "a": 3,
            "explain": "Query berat di latar."
          },
          {
            "type": "mc",
            "q": "Cache lokal membantu",
            "options": [
              "CSS",
              "offline dan performa",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cache lokal mempercepat."
          },
          {
            "type": "mc",
            "q": "Menutup koneksi DB penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Tutup koneksi saat selesai."
          },
          {
            "type": "mc",
            "q": "Enkripsi lokal membantu",
            "options": [
              "CSS",
              "route",
              "keamanan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Enkripsi melindungi data."
          }
        ]
      },
      {
        "id": "flutter-29",
        "level": "Advance",
        "title": "Build & Deploy",
        "exercises": [
          {
            "type": "mc",
            "q": "Build Android APK memakai",
            "options": [
              "flutter apk",
              "flutter build apk",
              "dart build apk",
              "flutter make"
            ],
            "a": 1,
            "explain": "flutter build apk membuat APK."
          },
          {
            "type": "mc",
            "q": "Build iOS memakai",
            "options": [
              "flutter ios",
              "CSS",
              "flutter build ios",
              "route"
            ],
            "a": 2,
            "explain": "flutter build ios untuk iOS."
          },
          {
            "type": "mc",
            "q": "Mengatur versi aplikasi di",
            "options": [
              "pubspec.yaml",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "pubspec mengatur versi."
          },
          {
            "type": "mc",
            "q": "App signing Android diatur di",
            "options": [
              "build.gradle",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Gradle mengatur signing."
          },
          {
            "type": "mc",
            "q": "Flavors memungkinkan",
            "options": [
              "konfigurasi build berbeda",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Flavor memisahkan build."
          },
          {
            "type": "mc",
            "q": "Menghasilkan app bundle memakai",
            "options": [
              "flutter build appbundle",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "App bundle untuk Play Store."
          },
          {
            "type": "mc",
            "q": "mengurangi ukuran build dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "--split-per-abi"
            ],
            "a": 3,
            "explain": "Split per ABI mengurangi ukuran."
          },
          {
            "type": "mc",
            "q": "CI/CD membantu",
            "options": [
              "otomasi build dan rilis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "CI/CD mengotomasi."
          },
          {
            "type": "mc",
            "q": "Menguji build rilis sebelum rilis",
            "options": [
              "tidak perlu",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Uji build rilis."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency mutakhir membantu",
            "options": [
              "keamanan/performa",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Update dependency berkala."
          }
        ]
      },
      {
        "id": "flutter-30",
        "level": "Advance",
        "title": "Animasi Lanjutan & CustomPaint",
        "exercises": [
          {
            "type": "mc",
            "q": "CustomPaint memungkinkan",
            "options": [
              "CSS",
              "menggambar kustom",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "CustomPaint menggambar manual."
          },
          {
            "type": "mc",
            "q": "CustomPainter mengimplementasikan",
            "options": [
              "CSS",
              "paint dan shouldRepaint",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Painter butuh paint modern."
          },
          {
            "type": "mc",
            "q": "Animasi kustom memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "AnimationController + CustomPainter"
            ],
            "a": 3,
            "explain": "Kombinasi memberi animasi kustom."
          },
          {
            "type": "mc",
            "q": "Physics-based animation memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Simulation"
            ],
            "a": 3,
            "explain": "Simulation meniru fisika."
          },
          {
            "type": "mc",
            "q": "AnimatedBuilder mengurangi",
            "options": [
              "CSS",
              "rebuild berlebih",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "AnimatedBuilder hanya rebuild bagian perlu."
          },
          {
            "type": "mc",
            "q": "Menghindari kerja berat saat paint",
            "options": [
              "tidak perlu",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Paint harus ringan."
          },
          {
            "type": "mc",
            "q": "shouldRepaint mengembalikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "apakah perlu repaint"
            ],
            "a": 3,
            "explain": "shouldRepaint menentukan repaint."
          },
          {
            "type": "mc",
            "q": "Layer caching membantu",
            "options": [
              "CSS",
              "route",
              "performa gambar kustom",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cache layer saat cocok."
          },
          {
            "type": "mc",
            "q": "Shader memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "efek visual lanjutan"
            ],
            "a": 3,
            "explain": "Shader memberi efek."
          },
          {
            "type": "mc",
            "q": "Mengukur performa animasi penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Uji dan ukur animasi."
          }
        ]
      },
      {
        "id": "flutter-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Flutter",
        "exercises": [
          {
            "type": "mc",
            "q": "Flutter menyusun antarmuka aplikasi dari",
            "options": [
              "Widget yang membentuk widget tree",
              "Route CSS yang saling mewarisi",
              "Tabel SQL bertingkat",
              "Goroutine untuk setiap tombol"
            ],
            "a": 0,
            "explain": "Flutter membangun UI dengan menyusun widget dalam widget tree."
          },
          {
            "type": "mc",
            "q": "Widget yang tampilannya bergantung pada state lokal yang berubah biasanya",
            "options": [
              "StatefulWidget",
              "StatelessWidget",
              "StyleSheet",
              "RouteTable"
            ],
            "a": 0,
            "explain": "StatefulWidget digunakan ketika tampilan perlu bereaksi pada perubahan state."
          },
          {
            "type": "mc",
            "q": "Pada State Flutter, `setState` memberi tahu framework bahwa",
            "options": [
              "Aplikasi harus dihapus",
              "Database harus dimigrasikan",
              "Route server harus ditutup",
              "State berubah dan UI perlu dibangun ulang"
            ],
            "a": 3,
            "explain": "setState menjadwalkan rebuild agar UI mencerminkan state terbaru."
          },
          {
            "type": "mc",
            "q": "Hot reload Flutter berguna untuk",
            "options": [
              "Melihat perubahan kode dengan cepat saat pengembangan",
              "Menghapus data produksi",
              "Menggantikan pengujian",
              "Mengubah Dart menjadi SQL"
            ],
            "a": 0,
            "explain": "Hot reload mempercepat iterasi UI tanpa memulai ulang proses."
          },
          {
            "type": "fill",
            "q": "Lengkapi widget layout vertikal:",
            "code": "___(children: [...])",
            "accept": [
              "Column"
            ],
            "explain": "Column menata anak secara vertikal."
          }
        ]
      }
    ]
  }
];

export { CONTENT_FLUTTER };
