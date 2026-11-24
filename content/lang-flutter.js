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
              "sumber data"
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
              "pemisah antar item",
              "klien dan server",
              "solusi state management populer"
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
              "satu aturan bisnis",
              "memanggil library C"
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
              "skalabilitas"
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
              "pengujian dan perawatan",
              "kode Dart + native",
              "kerangka halaman (appbar, body)",
              "flutter build apk"
            ],
            "a": 2,
            "explain": "Scaffold menyediakan struktur halaman."
          },
          {
            "type": "mc",
            "q": "MaterialApp adalah",
            "options": [
              "widget tree untuk test",
              "paralelisme terpisah memori",
              "memanggil method native",
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
              "Future"
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
              "routing deklaratif"
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
              "colorScheme",
              "ListView.builder"
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
              "teks tertentu",
              ".arb"
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
              "StatefulWidget",
              "Column"
            ],
            "a": 1,
            "explain": "AlertDialog menampilkan dialog."
          },
          {
            "type": "mc",
            "q": "Widget Material Flutter untuk menampilkan pesan singkat sementara di bagian bawah layar adalah",
            "options": [
              "ToastBar",
              "SizedBox",
              "SnackBar",
              "State"
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
              "flutter_test",
              "aliran event"
            ],
            "a": 1,
            "explain": "CircularProgressIndicator menampilkan loading."
          },
          {
            "type": "mc",
            "q": "Widget pembungkus dengan batas lebar adalah",
            "options": [
              "LimitBox",
              "selector",
              "masalah performa",
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
              "fokus field",
              "gestur tap"
            ],
            "a": 1,
            "explain": "Wrap membungkus anak ke baris baru."
          },
          {
            "type": "mc",
            "q": "Widget untuk bayangan/dekorasi memakai",
            "options": [
              "Container decoration",
              "lokalisasi",
              "fromJson factory",
              "AnimationController"
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
            "q": "Widget Flutter khusus untuk memberi ruang kosong di bagian dalam di sekeliling anak widget adalah",
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
              "path_provider"
            ],
            "a": 0,
            "explain": "SizedBox menetapkan ukuran."
          },
          {
            "type": "mc",
            "q": "Center memusatkan anak",
            "options": [
              "tidak",
              "Dart",
              "Row",
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
              "pop(result)",
              "obscureText: true"
            ],
            "a": 0,
            "explain": "Expanded mengisi ruang flex."
          },
          {
            "type": "mc",
            "q": "Flexible mirip Expanded tetapi",
            "options": [
              "frame/waktu",
              "supportedLocales",
              "pengujian",
              "lebih longgar (flexible)"
            ],
            "a": 3,
            "explain": "Flexible memberi fleksibilitas."
          },
          {
            "type": "mc",
            "q": "MainAxisAlignment mengatur",
            "options": [
              "performa gambar kustom",
              "melihat perubahan cepat saat pengembangan",
              "UI statis tanpa state",
              "penataan sumbu utama"
            ],
            "a": 3,
            "explain": "MainAxis mengatur sumbu utama."
          },
          {
            "type": "mc",
            "q": "CrossAxisAlignment mengatur",
            "options": [
              "pemisah antar item",
              "penataan sumbu silang",
              "klien dan server",
              "solusi state management populer"
            ],
            "a": 1,
            "explain": "CrossAxis mengatur sumbu silang."
          },
          {
            "type": "mc",
            "q": "ListView dipakai untuk",
            "options": [
              "package routing populer",
              "kondisi empty state",
              "daftar yang dapat digulir",
              "state dan history konsisten"
            ],
            "a": 2,
            "explain": "ListView menggulir daftar."
          },
          {
            "type": "mc",
            "q": "GridView menampilkan",
            "options": [
              "formKey.currentState.validate()",
              "BoxDecoration/Border",
              "sliver kompleks",
              "daftar berpetak"
            ],
            "a": 3,
            "explain": "GridView menampilkan grid."
          },
          {
            "type": "mc",
            "q": "SafeArea melindungi dari",
            "options": [
              "ConstrainedBox",
              "lebih longgar (flexible)",
              "notch/area sistem",
              "menurunkan performa"
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
              "daftar yang dapat digulir",
              "package routing populer",
              "kondisi empty state"
            ],
            "a": 0,
            "explain": "StatelessWidget tidak punya state."
          },
          {
            "type": "mc",
            "q": "StatefulWidget dipakai untuk",
            "options": [
              "bereaksi saat nilai berubah",
              "pemisah antar item",
              "klien dan server",
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
              "transisi state",
              "setState",
              "DevTools"
            ],
            "a": 2,
            "explain": "setState memicu rebuild."
          },
          {
            "type": "mc",
            "q": "Pada StatefulWidget, data yang dapat berubah selama siklus hidup widget disimpan di kelas",
            "options": [
              "Widget",
              "State",
              "BuildContext",
              "widget tree"
            ],
            "a": 1,
            "explain": "State disimpan pada objek State."
          },
          {
            "type": "mc",
            "q": "build() dipanggil saat",
            "options": [
              "widget perlu dirender",
              "akses API dari UI",
              "menyesuaikan layout berdasarkan ukuran",
              "widget tree untuk test"
            ],
            "a": 0,
            "explain": "build dipanggil saat render."
          },
          {
            "type": "mc",
            "q": "Memanggil setState di luar state berisiko",
            "options": [
              "Icon",
              "UX",
              "error",
              "kualitas UI"
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
              ":id",
              "inputFormatters"
            ],
            "a": 0,
            "explain": "StatelessWidget tidak punya setState."
          },
          {
            "type": "mc",
            "q": "initState dijalankan",
            "options": [
              "kode native lintas platform",
              "sekali saat state dibuat",
              "offline dan performa",
              "AnimationController + CustomPainter"
            ],
            "a": 1,
            "explain": "initState sekali saat init."
          },
          {
            "type": "mc",
            "q": "dispose dipakai untuk",
            "options": [
              "Image.network('url')",
              "urutan/perubahan dinamis",
              "membersihkan resource",
              "guard autentikasi"
            ],
            "a": 2,
            "explain": "dispose melepas resource."
          },
          {
            "type": "mc",
            "q": "Rebuild berlebihan dapat",
            "options": [
              "frame/waktu",
              "menurunkan performa",
              "supportedLocales",
              "pengujian"
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
              "dihindari",
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
              "controller.clear()"
            ],
            "a": 0,
            "explain": "Navigator.pop kembali."
          },
          {
            "type": "mc",
            "q": "MaterialPageRoute dipakai untuk",
            "options": [
              "event dan state",
              "route halaman Material",
              "akses API dari UI",
              "menyesuaikan layout berdasarkan ukuran"
            ],
            "a": 1,
            "explain": "MaterialPageRoute membuat route."
          },
          {
            "type": "mc",
            "q": "Named routes didaftarkan di",
            "options": [
              "kapan validasi berjalan",
              "routes pada MaterialApp",
              "state lokal sederhana",
              "membangun UI dari Future"
            ],
            "a": 1,
            "explain": "routes mendefinisikan named route."
          },
          {
            "type": "mc",
            "q": "Navigasi named route memakai",
            "options": [
              "Navigator.pushNamed(context, '/x')",
              "obscureText: true",
              "mengakses tema",
              "memakan memori"
            ],
            "a": 0,
            "explain": "pushNamed membuka named route."
          },
          {
            "type": "mc",
            "q": "Mengirim argumen route memakai",
            "options": [
              "mengurangi repaint",
              "ditangani",
              "arguments",
              "--split-per-abi"
            ],
            "a": 2,
            "explain": "Navigator meneruskan arguments."
          },
          {
            "type": "mc",
            "q": "GoRouter adalah",
            "options": [
              "flutter create nama",
              "daftar yang dapat digulir",
              "kondisi empty state",
              "package routing populer"
            ],
            "a": 3,
            "explain": "GoRouter untuk routing deklaratif."
          },
          {
            "type": "mc",
            "q": "Mengembalikan hasil pop memakai",
            "options": [
              "provider/bloc/riverpod",
              "http",
              "pop(result)",
              "animasi"
            ],
            "a": 2,
            "explain": "pop dapat mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Navigasi harus memakai",
            "options": [
              "codegen binding native",
              "BuildContext yang valid",
              "flutter build ios",
              "performa gambar kustom"
            ],
            "a": 1,
            "explain": "Context harus valid/mounted."
          },
          {
            "type": "mc",
            "q": "Deep link mendukung",
            "options": [
              "membuka halaman spesifik dari tautan",
              "menjalankan fungsi berat di isolate",
              "aliran event dari native",
              "database lokal cepat"
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
              "TextStyle",
              "Image.asset('path')",
              "itemBuilder"
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
              "fokus field",
              "gestur tap"
            ],
            "a": 1,
            "explain": "controller.text berisi nilai."
          },
          {
            "type": "mc",
            "q": "Widget kontainer Flutter untuk mengelompokkan beberapa TextFormField dan memvalidasinya sekaligus adalah",
            "options": [
              "FormBox",
              "Form",
              "Dart",
              "Row"
            ],
            "a": 1,
            "explain": "Form membungkus field."
          },
          {
            "type": "mc",
            "q": "Validasi field memakai",
            "options": [
              "error",
              "pop(result)",
              "obscureText: true",
              "validator"
            ],
            "a": 3,
            "explain": "validator mengembalikan pesan error."
          },
          {
            "type": "mc",
            "q": "Key untuk form memakai",
            "options": [
              "masalah performa",
              "data relasional",
              "GlobalKey<FormState>",
              "keamanan/performa"
            ],
            "a": 2,
            "explain": "GlobalKey menyimpan state form."
          },
          {
            "type": "mc",
            "q": "Memeriksa validasi form memakai",
            "options": [
              "ConstrainedBox",
              "lebih longgar (flexible)",
              "formKey.currentState.validate()",
              "menurunkan performa"
            ],
            "a": 2,
            "explain": "validate memeriksa field."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan teks password memakai",
            "options": [
              "obscureText: true",
              "fromJson factory",
              "AnimationController",
              "mockito/mocktail"
            ],
            "a": 0,
            "explain": "obscureText menyembunyikan."
          },
          {
            "type": "mc",
            "q": "Keyboard type diatur dengan",
            "options": [
              "aliran event",
              "workmanager/isolate",
              "keyboardType",
              "transisi state"
            ],
            "a": 2,
            "explain": "keyboardType mengatur keyboard."
          },
          {
            "type": "mc",
            "q": "Controller harus di-dispose",
            "options": [
              "tidak",
              "pub",
              "Image",
              "ya"
            ],
            "a": 3,
            "explain": "Controller perlu dispose."
          },
          {
            "type": "mc",
            "q": "onChanged dipakai untuk",
            "options": [
              "menyesuaikan layout berdasarkan ukuran",
              "bereaksi saat nilai berubah",
              "widget tree untuk test",
              "paralelisme terpisah memori"
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
              "flutter_test",
              "aliran event",
              "workmanager/isolate"
            ],
            "a": 0,
            "explain": "ThemeData mengatur tema."
          },
          {
            "type": "mc",
            "q": "Warna utama tema memakai",
            "options": [
              "lokalisasi",
              "await",
              "colorScheme",
              "fromJson factory"
            ],
            "a": 2,
            "explain": "ColorScheme mengatur warna."
          },
          {
            "type": "mc",
            "q": "Mengatur gaya teks memakai",
            "options": [
              "TextStyle",
              "StatefulWidget",
              "Column",
              "Card"
            ],
            "a": 0,
            "explain": "TextStyle mengatur teks."
          },
          {
            "type": "mc",
            "q": "Mengatur padding konsisten memakai",
            "options": [
              "selector",
              "EdgeInsets",
              "masalah performa",
              "data relasional"
            ],
            "a": 1,
            "explain": "EdgeInsets mengatur jarak."
          },
          {
            "type": "mc",
            "q": "Mengatur border memakai",
            "options": [
              "BoxDecoration/Border",
              "colorScheme",
              "pengalaman pengguna",
              "ListView.builder"
            ],
            "a": 0,
            "explain": "BoxDecoration mengatur dekorasi."
          },
          {
            "type": "mc",
            "q": "Theme.of(context) dipakai untuk",
            "options": [
              "mengakses tema",
              "SizedBox",
              "State",
              "arguments"
            ],
            "a": 0,
            "explain": "Theme.of membaca tema."
          },
          {
            "type": "mc",
            "q": "Dark mode diatur lewat",
            "options": [
              "darkTheme/themeMode",
              "http.get lalu jsonDecode",
              "gesture pengguna",
              "alur end-to-end"
            ],
            "a": 0,
            "explain": "themeMode mengatur mode."
          },
          {
            "type": "mc",
            "q": "Font kustom didefinisikan di",
            "options": [
              "pubspec.yaml",
              "errorBuilder/not-found route",
              "teks tertentu",
              "memberitahukan perubahan"
            ],
            "a": 0,
            "explain": "Font didaftarkan di pubspec."
          },
          {
            "type": "mc",
            "q": "Material 3 diaktifkan lewat",
            "options": [
              "di-resize",
              "key-value sederhana",
              "penting",
              "useMaterial3"
            ],
            "a": 3,
            "explain": "useMaterial3 mengaktifkan M3."
          },
          {
            "type": "mc",
            "q": "Konsistensi gaya membantu",
            "options": [
              "dikelola",
              "pengalaman pengguna",
              "tooltip/semantic label",
              "UI tersendat"
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
              "SizedBox",
              "pubspec.yaml",
              "State",
              "arguments"
            ],
            "a": 1,
            "explain": "Aset didaftarkan di pubspec."
          },
          {
            "type": "mc",
            "q": "Menampilkan aset gambar memakai",
            "options": [
              "colorScheme",
              "Image.asset('path')",
              "pengalaman pengguna",
              "ListView.builder"
            ],
            "a": 1,
            "explain": "Image.asset memuat aset."
          },
          {
            "type": "mc",
            "q": "Menampilkan gambar jaringan memakai",
            "options": [
              "errorBuilder/not-found route",
              "teks tertentu",
              "memberitahukan perubahan",
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
              "Future"
            ],
            "a": 0,
            "explain": "Icon menampilkan ikon."
          },
          {
            "type": "mc",
            "q": "Menampilkan ikon Material memakai",
            "options": [
              "lokalisasi",
              "Icons.nama",
              "await",
              "fromJson factory"
            ],
            "a": 1,
            "explain": "Icons menyediakan ikon Material."
          },
          {
            "type": "mc",
            "q": "Ukuran gambar diatur dengan",
            "options": [
              "flutter_test",
              "aliran event",
              "width/height",
              "workmanager/isolate"
            ],
            "a": 2,
            "explain": "width/height mengatur ukuran."
          },
          {
            "type": "mc",
            "q": "fit pada Image mengatur",
            "options": [
              "layout per ukuran",
              "beberapa Future paralel",
              "cara gambar mengisi ruang",
              "const widget dan pemisahan"
            ],
            "a": 2,
            "explain": "fit mengatur penyesuaian gambar."
          },
          {
            "type": "mc",
            "q": "Menangani error gambar memakai",
            "options": [
              "StatefulWidget",
              "errorBuilder",
              "Column",
              "ConstrainedBox"
            ],
            "a": 1,
            "explain": "errorBuilder menangani kegagalan."
          },
          {
            "type": "mc",
            "q": "Cache gambar jaringan dibantu oleh",
            "options": [
              "mengisi ruang fleksibel",
              "package cache (mis. cached_network_image)",
              "dikirim ke server",
              "pengujian dan perawatan"
            ],
            "a": 1,
            "explain": "Package cache menyimpan gambar."
          },
          {
            "type": "mc",
            "q": "Aset ikon aplikasi diatur di",
            "options": [
              "dependency injection dan state",
              "Dart ke kode native",
              "di platform target",
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
              "memecah komponen",
              "build.gradle",
              "StatefulWidget",
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
              "ElevatedButton",
              "AlertDialog",
              "SizedBox"
            ],
            "a": 0,
            "explain": "itemBuilder membuat tiap item."
          },
          {
            "type": "mc",
            "q": "Key untuk item list penting saat",
            "options": [
              "urutan/perubahan dinamis",
              "dihindari",
              "animasi properti",
              "flutter_test"
            ],
            "a": 0,
            "explain": "Key membantu rekonsiliasi."
          },
          {
            "type": "mc",
            "q": "Menangani list kosong memakai",
            "options": [
              "kondisi empty state",
              "routes pada MaterialApp",
              "launcher icon config",
              "UI bersama (mis. bottom nav)"
            ],
            "a": 0,
            "explain": "Empty state memberi umpan balik."
          },
          {
            "type": "mc",
            "q": "RefreshIndicator dipakai untuk",
            "options": [
              "di luar main isolate terkadang",
              "otomasi build dan rilis",
              "pull to refresh",
              "State berubah dan UI perlu dibangun ulang"
            ],
            "a": 2,
            "explain": "RefreshIndicator menangani tarik."
          },
          {
            "type": "mc",
            "q": "ScrollController memungkinkan",
            "options": [
              "apakah perlu repaint",
              "kontrol posisi scroll",
              "flutter create nama",
              "daftar yang dapat digulir"
            ],
            "a": 1,
            "explain": "Controller mengatur scroll."
          },
          {
            "type": "mc",
            "q": "ListView.separated menambah",
            "options": [
              "mengukur cakupan test",
              "menjalankan fungsi berat di isolate",
              "pemisah antar item",
              "aliran event dari native"
            ],
            "a": 2,
            "explain": "separated menambah separator."
          },
          {
            "type": "mc",
            "q": "List panjang sebaiknya memakai",
            "options": [
              "domain, data, presentation",
              "codegen binding native",
              "builder, bukan children statis",
              "flutter build ios"
            ],
            "a": 2,
            "explain": "Builder lebih efisien."
          },
          {
            "type": "mc",
            "q": "CustomScrollView memungkinkan",
            "options": [
              "test implementasi",
              "konteks asynchronous",
              "aksesibilitas",
              "sliver kompleks"
            ],
            "a": 3,
            "explain": "CustomScrollView memakai sliver."
          },
          {
            "type": "mc",
            "q": "Scroll berlebihan tanpa builder dapat",
            "options": [
              "mengurangi repaint",
              "ditangani",
              "memakan memori",
              "--split-per-abi"
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
              "http.post",
              "mengganggu pengguna",
              "tampilan visual",
              "routing deklaratif"
            ],
            "a": 3,
            "explain": "GoRouter mendukung routing deklaratif."
          },
          {
            "type": "mc",
            "q": "Nested route memungkinkan",
            "options": [
              "frame/waktu",
              "supportedLocales",
              "sub-halaman",
              "pengujian"
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
              "await"
            ],
            "a": 1,
            "explain": "GoRouter memakai :id."
          },
          {
            "type": "mc",
            "q": "Query parameter pada GoRouter diakses lewat",
            "options": [
              "membersihkan resource",
              "TextEditingController",
              "keyboardType",
              "state.uri.queryParameters"
            ],
            "a": 3,
            "explain": "Query diambil dari uri."
          },
          {
            "type": "mc",
            "q": "Redirect pada router berguna untuk",
            "options": [
              "pop(result)",
              "guard autentikasi",
              "obscureText: true",
              "mengakses tema"
            ],
            "a": 1,
            "explain": "Redirect menangani guard."
          },
          {
            "type": "mc",
            "q": "Deep link perlu",
            "options": [
              "flutter build apk",
              "apakah perlu repaint",
              "flutter create nama",
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
              "path_provider",
              "menggambar kustom",
              "pubspec.yaml"
            ],
            "a": 0,
            "explain": "Pop kembali ke halaman sebelumnya."
          },
          {
            "type": "mc",
            "q": "Menangani route tidak dikenal memakai",
            "options": [
              "firebase_messaging",
              "prediktabilitas",
              "memecah komponen",
              "errorBuilder/not-found route"
            ],
            "a": 3,
            "explain": "Tangani route tak dikenal."
          },
          {
            "type": "mc",
            "q": "Shell route mempertahankan",
            "options": [
              "di beberapa bahasa",
              "banyak nilai seiring waktu",
              "UI bersama (mis. bottom nav)",
              "rentang nilai animasi"
            ],
            "a": 2,
            "explain": "Shell route menjaga navigasi bawah."
          },
          {
            "type": "mc",
            "q": "Routing harus menjaga",
            "options": [
              "state dan history konsisten",
              "dikonfigurasi di platform",
              "menemukan widget berdasarkan tipe",
              "event dan state"
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
              "satu aturan bisnis",
              "memanggil library C",
              "konfigurasi build berbeda"
            ],
            "a": 0,
            "explain": "FormField untuk field kustom."
          },
          {
            "type": "mc",
            "q": "AutovalidateMode mengatur",
            "options": [
              "database lokal cepat",
              "kapan validasi berjalan",
              "paint dan shouldRepaint",
              "Melihat perubahan kode dengan cepat saat pengembangan"
            ],
            "a": 1,
            "explain": "Autovalidate mengatur validasi."
          },
          {
            "type": "mc",
            "q": "FocusNode mengelola",
            "options": [
              "fokus field",
              "SnackBar",
              "error",
              "pop(result)"
            ],
            "a": 0,
            "explain": "FocusNode mengatur fokus."
          },
          {
            "type": "mc",
            "q": "Mengatur urutan fokus memakai",
            "options": [
              "validator",
              "TextStyle",
              "Image.asset('path')",
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
              "Navigator.pushNamed(context, '/x')",
              "GlobalKey<FormState>",
              "EdgeInsets"
            ],
            "a": 0,
            "explain": "Formatter membatasi input."
          },
          {
            "type": "mc",
            "q": "Membatasi panjang input memakai",
            "options": [
              "maxLength",
              "errorBuilder",
              "sub-halaman",
              "focus traversal"
            ],
            "a": 0,
            "explain": "maxLength membatasi."
          },
          {
            "type": "mc",
            "q": "Mengosongkan field memakai",
            "options": [
              "kualitas UI",
              "ICU/intl messages",
              "http.post",
              "controller.clear()"
            ],
            "a": 3,
            "explain": "clear mengosongkan."
          },
          {
            "type": "mc",
            "q": "Menyimpan nilai form penting untuk",
            "options": [
              "hasil",
              "Card",
              "UX",
              "Text"
            ],
            "a": 2,
            "explain": "Penyimpanan nilai membantu UX."
          },
          {
            "type": "mc",
            "q": "Form validasi harus di",
            "options": [
              "apakah perlu repaint",
              "flutter create nama",
              "klien dan server",
              "daftar yang dapat digulir"
            ],
            "a": 2,
            "explain": "Validasi ganda penting."
          },
          {
            "type": "mc",
            "q": "Menampilkan error form memakai",
            "options": [
              "kerangka halaman (appbar, body)",
              "widget perlu dirender",
              "pesan pada field",
              "bereaksi saat nilai berubah"
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
              "sekali saat state dibuat",
              "cara gambar mengisi ruang",
              "builder, bukan children statis",
              "menemukan widget berdasarkan tipe"
            ],
            "a": 3,
            "explain": "Finder mencari per tipe."
          },
          {
            "type": "mc",
            "q": "find.text mencari",
            "options": [
              "Navigator.pushNamed(context, '/x')",
              "teks tertentu",
              "GlobalKey<FormState>",
              "EdgeInsets"
            ],
            "a": 1,
            "explain": "Finder mencari teks."
          },
          {
            "type": "mc",
            "q": "tester.tap memicu",
            "options": [
              "animasi",
              "gestur tap",
              "hasil",
              "banyak listener"
            ],
            "a": 1,
            "explain": "tap menyimulasikan ketuk."
          },
          {
            "type": "mc",
            "q": "tester.pump memajukan",
            "options": [
              "frame/waktu",
              "kualitas UI",
              "ICU/intl messages",
              "async"
            ],
            "a": 0,
            "explain": "pump memajukan frame."
          },
          {
            "type": "mc",
            "q": "tester.pumpAndSettle menunggu",
            "options": [
              "animasi selesai",
              "--split-per-abi",
              "ListTile",
              "daftar berpetak"
            ],
            "a": 0,
            "explain": "pumpAndSettle menunggu animasi."
          },
          {
            "type": "mc",
            "q": "Menguji navigasi memerlukan",
            "options": [
              "aksesibilitas",
              "pump navigasi",
              "message passing",
              "sumber data"
            ],
            "a": 1,
            "explain": "Navigasi membutuhkan pump."
          },
          {
            "type": "mc",
            "q": "Mock dependency memakai",
            "options": [
              "mocktail/mockito",
              "validator",
              "TextStyle",
              "Image.asset('path')"
            ],
            "a": 0,
            "explain": "Library mock untuk dependency."
          },
          {
            "type": "mc",
            "q": "Golden test membantu",
            "options": [
              "widget tree untuk test",
              "paralelisme terpisah memori",
              "memanggil method native",
              "deteksi regresi visual"
            ],
            "a": 3,
            "explain": "Golden mendeteksi perubahan visual."
          },
          {
            "type": "mc",
            "q": "Test aksesibilitas membantu",
            "options": [
              "State",
              "kualitas UI",
              "arguments",
              "BoxDecoration/Border"
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
              "Card",
              "Text"
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
              "di luar main isolate terkadang",
              "otomasi build dan rilis",
              "intl dan arb",
              "State berubah dan UI perlu dibangun ulang"
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
              "GlobalKey<FormState>",
              "AppLocalizations.of(context)",
              "EdgeInsets",
              "Image.network('url')"
            ],
            "a": 1,
            "explain": "Localizations mengakses terjemahan."
          },
          {
            "type": "mc",
            "q": "Mendukung locale memakai",
            "options": [
              "supportedLocales",
              "sub-halaman",
              "focus traversal",
              "frame/waktu"
            ],
            "a": 0,
            "explain": "supportedLocales mendaftar locale."
          },
          {
            "type": "mc",
            "q": "Format tanggal lokal memakai",
            "options": [
              "pop(result)",
              "intl DateFormat",
              "obscureText: true",
              "mengakses tema"
            ],
            "a": 1,
            "explain": "DateFormat memformat tanggal."
          },
          {
            "type": "mc",
            "q": "Format angka lokal memakai",
            "options": [
              "NumberFormat",
              "TextStyle",
              "Image.asset('path')",
              "itemBuilder"
            ],
            "a": 0,
            "explain": "NumberFormat memformat angka."
          },
          {
            "type": "mc",
            "q": "RTL layout didukung Flutter",
            "options": [
              "tidak",
              "State",
              "ya",
              "Icon"
            ],
            "a": 2,
            "explain": "Flutter mendukung RTL."
          },
          {
            "type": "mc",
            "q": "Lokalisasi harus diuji",
            "options": [
              "routes pada MaterialApp",
              "launcher icon config",
              "UI bersama (mis. bottom nav)",
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
              "ListView.builder",
              "inputFormatters",
              "animasi selesai"
            ],
            "a": 0,
            "explain": "Hardcode menghambat i18n."
          },
          {
            "type": "mc",
            "q": "Pluralisasi memakai",
            "options": [
              "memberitahukan perubahan",
              "ICU/intl messages",
              "try/catch atau catchError",
              "secure storage"
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
              "builder, bukan children statis",
              "state lokal sederhana",
              "pesan pada field",
              "state management dengan dependensi eksplisit"
            ],
            "a": 1,
            "explain": "setState untuk state lokal."
          },
          {
            "type": "mc",
            "q": "Provider adalah",
            "options": [
              "solusi state management populer",
              "BuildContext yang valid",
              "pull to refresh",
              "validasi field khusus"
            ],
            "a": 0,
            "explain": "Provider membagikan state."
          },
          {
            "type": "mc",
            "q": "Riverpod menyediakan",
            "options": [
              "penataan sumbu utama",
              "route halaman Material",
              "state management dengan dependensi eksplisit",
              "package cache (mis. cached_network_image)"
            ],
            "a": 2,
            "explain": "Riverpod menekankan komposisi."
          },
          {
            "type": "mc",
            "q": "BLoC memisahkan",
            "options": [
              "efek visual lanjutan",
              "engine render sendiri",
              "UI bergantung state berubah",
              "event dan state"
            ],
            "a": 3,
            "explain": "BLoC memakai event/state."
          },
          {
            "type": "mc",
            "q": "Memilih library state bergantung pada",
            "options": [
              "offline dan performa",
              "AnimationController + CustomPainter",
              "banyak platform dari satu codebase",
              "kompleksitas dan tim"
            ],
            "a": 3,
            "explain": "Pilihan sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "InheritedWidget adalah",
            "options": [
              "Dart ke kode native",
              "mekanisme berbagi state bawaan",
              "di platform target",
              "flutter build appbundle"
            ],
            "a": 1,
            "explain": "InheritedWidget berbagi data."
          },
          {
            "type": "mc",
            "q": "ValueNotifier/ChangeNotifier dipakai untuk",
            "options": [
              "memberitahukan perubahan",
              "Container/Padding",
              "Navigator.pushNamed(context, '/x')",
              "GlobalKey<FormState>"
            ],
            "a": 0,
            "explain": "Notifier memberi tahu listener."
          },
          {
            "type": "mc",
            "q": "Reactive rebuild berlebihan dapat",
            "options": [
              "skalabilitas",
              "keamanan",
              "memengaruhi performa",
              "TextField"
            ],
            "a": 2,
            "explain": "Rebuild berlebih membebani."
          },
          {
            "type": "mc",
            "q": "Memisahkan state UI dan domain membantu",
            "options": [
              "map/where",
              "pengujian",
              "halaman spesifik",
              "loading/error/data"
            ],
            "a": 1,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "State global untuk data bersama memakai",
            "options": [
              "memerlukan pengecekan/cancel token",
              "provider/bloc/riverpod",
              "keandalan",
              "platform (iOS/Android)"
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
              "message passing",
              "sumber data",
              "Future",
              "path_provider"
            ],
            "a": 2,
            "explain": "Future mewakili hasil async."
          },
          {
            "type": "mc",
            "q": "Menunggu Future memakai",
            "options": [
              "Dart",
              "await",
              "Row",
              "ListTile"
            ],
            "a": 1,
            "explain": "await menunggu hasil."
          },
          {
            "type": "mc",
            "q": "Kata kunci pada deklarasi fungsi Dart/Flutter agar dapat menggunakan `await` di dalamnya adalah",
            "options": [
              "ya",
              "error",
              "async",
              "pop(result)"
            ],
            "a": 2,
            "explain": "async menandai fungsi asynchronous."
          },
          {
            "type": "mc",
            "q": "Stream mengirim",
            "options": [
              "engine render sendiri",
              "banyak nilai seiring waktu",
              "UI bergantung state berubah",
              "membuka halaman spesifik dari tautan"
            ],
            "a": 1,
            "explain": "Stream menghasilkan rangkaian nilai."
          },
          {
            "type": "mc",
            "q": "FutureBuilder dipakai untuk",
            "options": [
              "membangun UI dari Future",
              "route halaman Material",
              "package cache (mis. cached_network_image)",
              "dikonfigurasi di platform"
            ],
            "a": 0,
            "explain": "FutureBuilder merender berdasarkan Future."
          },
          {
            "type": "mc",
            "q": "Menangani error Future memakai",
            "options": [
              "fromJson factory",
              "try/catch atau catchError",
              "AnimationController",
              "mockito/mocktail"
            ],
            "a": 1,
            "explain": "Penanganan error diperlukan."
          },
          {
            "type": "mc",
            "q": "Menampilkan loading memakai",
            "options": [
              "pesan pada field",
              "state loading pada FutureBuilder",
              "state management dengan dependensi eksplisit",
              "pemuatan data awal"
            ],
            "a": 1,
            "explain": "Loading state memberi umpan balik."
          },
          {
            "type": "mc",
            "q": "Membatalkan operasi async",
            "options": [
              "masalah performa",
              "data relasional",
              "keamanan/performa",
              "memerlukan pengecekan/cancel token"
            ],
            "a": 3,
            "explain": "Pembatalan perlu dukungan eksplisit."
          },
          {
            "type": "mc",
            "q": "initState sering memicu",
            "options": [
              "paint dan shouldRepaint",
              "Melihat perubahan kode dengan cepat saat pengembangan",
              "penataan sumbu utama",
              "pemuatan data awal"
            ],
            "a": 3,
            "explain": "Memuat data di initState."
          },
          {
            "type": "mc",
            "q": "Await di build sebaiknya",
            "options": [
              "tooltip/semantic label",
              "dihindari",
              "UI tersendat",
              "provider/get_it"
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
            "q": "Nama paket resmi populer di pub.dev untuk melakukan permintaan jaringan REST (GET/POST) di Flutter adalah",
            "options": [
              "sub-halaman",
              "frame/waktu",
              "http",
              "pengujian"
            ],
            "a": 2,
            "explain": "Package http untuk request."
          },
          {
            "type": "mc",
            "q": "Mengambil data JSON memakai",
            "options": [
              "http.get lalu jsonDecode",
              "GlobalKey<FormState>",
              "EdgeInsets",
              "Image.network('url')"
            ],
            "a": 0,
            "explain": "Request lalu decode JSON."
          },
          {
            "type": "mc",
            "q": "Model dari JSON memakai",
            "options": [
              "banyak listener",
              "fromJson factory",
              "firebase_messaging",
              "prediktabilitas"
            ],
            "a": 1,
            "explain": "fromJson membentuk model."
          },
          {
            "type": "mc",
            "q": "Mengirim data memakai",
            "options": [
              "ICU/intl messages",
              "async",
              "http.post",
              "mengganggu pengguna"
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
              "pub",
              "Image"
            ],
            "a": 1,
            "explain": "Status non-200 perlu ditangani."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "kontrol posisi scroll",
              "kapan validasi berjalan",
              "akses API dari UI",
              "state lokal sederhana"
            ],
            "a": 2,
            "explain": "Repository mengabstraksi API."
          },
          {
            "type": "mc",
            "q": "Dio adalah",
            "options": [
              "kode manual controller",
              "berinteraksi dengan widget",
              "dependency injection dan state",
              "package HTTP dengan fitur lanjutan"
            ],
            "a": 3,
            "explain": "Dio menyediakan interceptor dll."
          },
          {
            "type": "mc",
            "q": "Menyimpan token aman memakai",
            "options": [
              "penting",
              "widget",
              "secure storage",
              "Stack"
            ],
            "a": 2,
            "explain": "Secure storage menyimpan token."
          },
          {
            "type": "mc",
            "q": "Timeout request penting untuk",
            "options": [
              "keandalan",
              "await",
              "fromJson factory",
              "AnimationController"
            ],
            "a": 0,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Error jaringan harus",
            "options": [
              "membangun UI dari Future",
              "ripple saat ditekan",
              "ditangani dan diinformasikan",
              "konten melebihi ruang"
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
              "memengaruhi performa",
              "memerlukan pengecekan/cancel token",
              "keandalan"
            ],
            "a": 0,
            "explain": "AnimatedContainer menganimasikan perubahan."
          },
          {
            "type": "mc",
            "q": "AnimationController mengendalikan",
            "options": [
              "mockito/mocktail",
              "map/where",
              "animasi",
              "halaman spesifik"
            ],
            "a": 2,
            "explain": "Controller mengatur animasi."
          },
          {
            "type": "mc",
            "q": "Tween mendefinisikan",
            "options": [
              "rentang nilai animasi",
              "const widget dan pemisahan",
              "kode native lintas platform",
              "offline dan performa"
            ],
            "a": 0,
            "explain": "Tween menetapkan nilai animasi."
          },
          {
            "type": "mc",
            "q": "GestureDetector menangani",
            "options": [
              "state.uri.queryParameters",
              "maxLength",
              "pump navigasi",
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
              "rentang nilai animasi",
              "mengisi ruang fleksibel",
              "dikirim ke server"
            ],
            "a": 0,
            "explain": "InkWell memberi efek sentuh."
          },
          {
            "type": "mc",
            "q": "Hero menganimasikan",
            "options": [
              "berinteraksi dengan widget",
              "transisi antar halaman",
              "dependency injection dan state",
              "Dart ke kode native"
            ],
            "a": 1,
            "explain": "Hero membuat animasi transisi."
          },
          {
            "type": "mc",
            "q": "Animation harus di-dispose",
            "options": [
              "tidak",
              "await",
              "ya",
              "Stack"
            ],
            "a": 2,
            "explain": "Controller perlu dispose."
          },
          {
            "type": "mc",
            "q": "TickerProvider dibutuhkan oleh",
            "options": [
              "prediktabilitas",
              "performa",
              "AnimationController",
              "memecah komponen"
            ],
            "a": 2,
            "explain": "Controller membutuhkan vsync."
          },
          {
            "type": "mc",
            "q": "Animasi berlebihan dapat",
            "options": [
              "mengganggu pengguna",
              "melepas resource",
              "handler khusus",
              "luar build"
            ],
            "a": 0,
            "explain": "Animasi harus fungsional."
          },
          {
            "type": "mc",
            "q": "Implicit animations mengurangi",
            "options": [
              "di platform target",
              "flutter build appbundle",
              "Widget yang membentuk widget tree",
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
              "sekali saat state dibuat",
              "cara gambar mengisi ruang",
              "builder, bukan children statis",
              "menyesuaikan layout berdasarkan ukuran"
            ],
            "a": 3,
            "explain": "LayoutBuilder memberi constraints."
          },
          {
            "type": "mc",
            "q": "MediaQuery memberi",
            "options": [
              "melihat perubahan cepat saat pengembangan",
              "ukuran layar dan info",
              "UI statis tanpa state",
              "BuildContext yang valid"
            ],
            "a": 1,
            "explain": "MediaQuery menyediakan info layar."
          },
          {
            "type": "mc",
            "q": "Breakpoint responsif memisahkan",
            "options": [
              "paint dan shouldRepaint",
              "Melihat perubahan kode dengan cepat saat pengembangan",
              "layout per ukuran",
              "penataan sumbu utama"
            ],
            "a": 2,
            "explain": "Breakpoint menyesuaikan layout."
          },
          {
            "type": "mc",
            "q": "Orientation memberi tahu",
            "options": [
              "orientasi perangkat",
              "http.get lalu jsonDecode",
              "gesture pengguna",
              "alur end-to-end"
            ],
            "a": 0,
            "explain": "Orientation mendeteksi portrait/landscape."
          },
          {
            "type": "mc",
            "q": "Widget adaptif menyesuaikan",
            "options": [
              "platform (iOS/Android)",
              "banyak listener",
              "firebase_messaging",
              "prediktabilitas"
            ],
            "a": 0,
            "explain": "Adaptif menyesuaikan per platform."
          },
          {
            "type": "mc",
            "q": "Flex dan Expanded membantu",
            "options": [
              "kompleksitas dan tim",
              "package HTTP dengan fitur lanjutan",
              "ukuran layar dan info",
              "mengisi ruang fleksibel"
            ],
            "a": 3,
            "explain": "Flex mengatur ruang."
          },
          {
            "type": "mc",
            "q": "Overflow terjadi bila",
            "options": [
              "klien dan server",
              "solusi state management populer",
              "konten melebihi ruang",
              "state loading pada FutureBuilder"
            ],
            "a": 2,
            "explain": "Overflow menandakan layout salah."
          },
          {
            "type": "mc",
            "q": "SingleChildScrollView membantu",
            "options": [
              "kondisi empty state",
              "state dan history konsisten",
              "konten lebih panjang dari layar",
              "intl dan arb"
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
              "await",
              "Stack"
            ],
            "a": 1,
            "explain": "Uji di banyak ukuran."
          },
          {
            "type": "mc",
            "q": "Desain responsif meningkatkan",
            "options": [
              "flutter_test",
              "pengalaman pengguna",
              "aliran event",
              "workmanager/isolate"
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
              "menurunkan performa",
              "controller.text",
              "ThemeData"
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
              "flutter run",
              "kode native lintas platform"
            ],
            "a": 1,
            "explain": "flutter test menjalankan test."
          },
          {
            "type": "mc",
            "q": "WidgetTester dipakai untuk",
            "options": [
              "berinteraksi dengan widget",
              "layout per ukuran",
              "beberapa Future paralel",
              "const widget dan pemisahan"
            ],
            "a": 0,
            "explain": "Tester berinteraksi dalam test."
          },
          {
            "type": "mc",
            "q": "pumpWidget membangun",
            "options": [
              "pemuatan data awal",
              "kode manual controller",
              "widget tree untuk test",
              "berinteraksi dengan widget"
            ],
            "a": 2,
            "explain": "pumpWidget me-render widget."
          },
          {
            "type": "mc",
            "q": "expect(finder, matcher) memeriksa",
            "options": [
              "keandalan",
              "Stream",
              "hasil",
              "dikelola"
            ],
            "a": 2,
            "explain": "expect memeriksa kondisi."
          },
          {
            "type": "mc",
            "q": "Integration test menguji",
            "options": [
              "maxLength",
              "pump navigasi",
              "NumberFormat",
              "alur end-to-end"
            ],
            "a": 3,
            "explain": "Integration test menguji alur penuh."
          },
          {
            "type": "mc",
            "q": "Mocking API pada test memakai",
            "options": [
              "mengakses tema",
              "Icons.nama",
              "mockito/mocktail",
              "memakan memori"
            ],
            "a": 2,
            "explain": "Library mock menyediakan mock."
          },
          {
            "type": "mc",
            "q": "Golden test memeriksa",
            "options": [
              "daftar berpetak",
              "Navigator.push",
              "tampilan visual",
              "colorScheme"
            ],
            "a": 2,
            "explain": "Golden membandingkan gambar."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "pubspec.yaml",
              "ElevatedButton",
              "AlertDialog",
              "test implementasi"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "flutter build apk",
              "apakah perlu repaint",
              "flutter create nama",
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
            "q": "Widget StreamBuilder membangun ulang antarmuka secara otomatis setiap kali ada event baru dari",
            "options": [
              "Stream",
              "di-resize",
              "penting",
              "Stack"
            ],
            "a": 0,
            "explain": "StreamBuilder merender dari stream."
          },
          {
            "type": "mc",
            "q": "StreamController mengelola",
            "options": [
              "TextField",
              "CircularProgressIndicator",
              "aliran event",
              "Row/Column/Flex"
            ],
            "a": 2,
            "explain": "Controller mengelola stream."
          },
          {
            "type": "mc",
            "q": "Broadcast stream memungkinkan",
            "options": [
              "Future",
              "banyak listener",
              "http.get lalu jsonDecode",
              "gesture pengguna"
            ],
            "a": 1,
            "explain": "Broadcast untuk banyak listener."
          },
          {
            "type": "mc",
            "q": "Menutup stream penting untuk",
            "options": [
              "dikelola",
              "melepas resource",
              "tooltip/semantic label",
              "UI tersendat"
            ],
            "a": 1,
            "explain": "Close melepas resource."
          },
          {
            "type": "mc",
            "q": "Transform stream memakai",
            "options": [
              "kualitas UI",
              "ICU/intl messages",
              "async",
              "map/where"
            ],
            "a": 3,
            "explain": "Transform mengolah aliran."
          },
          {
            "type": "mc",
            "q": "Menangani error stream memakai",
            "options": [
              "animasi",
              "onError/handleError",
              "banyak listener",
              "firebase_messaging"
            ],
            "a": 1,
            "explain": "Error stream perlu ditangani."
          },
          {
            "type": "mc",
            "q": "Future.wait menjalankan",
            "options": [
              "widget tree untuk test",
              "beberapa Future paralel",
              "paralelisme terpisah memori",
              "memanggil method native"
            ],
            "a": 1,
            "explain": "Future.wait menunggu paralel."
          },
          {
            "type": "mc",
            "q": "Zone menangani",
            "options": [
              "useMaterial3",
              "konteks asynchronous",
              "errorBuilder",
              "sub-halaman"
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
              "Text",
              "pub"
            ],
            "a": 0,
            "explain": "Cancel subscription."
          },
          {
            "type": "mc",
            "q": "Backpressure pada stream perlu",
            "options": [
              "selector",
              "dikelola",
              "masalah performa",
              "data relasional"
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
              "gesture pengguna",
              "alur end-to-end",
              "melepas resource",
              "workmanager/isolate"
            ],
            "a": 3,
            "explain": "Background job perlu dukungan."
          },
          {
            "type": "mc",
            "q": "Notifikasi push memakai",
            "options": [
              "memberitahukan perubahan",
              "firebase_messaging",
              "try/catch atau catchError",
              "secure storage"
            ],
            "a": 1,
            "explain": "FCM untuk push notif."
          },
          {
            "type": "mc",
            "q": "Menyimpan token perangkat perlu",
            "options": [
              "memanggil library C",
              "konfigurasi build berbeda",
              "dikirim ke server",
              "efek visual lanjutan"
            ],
            "a": 2,
            "explain": "Token dikirim ke server."
          },
          {
            "type": "mc",
            "q": "Menangani notifikasi di background perlu",
            "options": [
              "tooltip/semantic label",
              "handler khusus",
              "UI tersendat",
              "provider/get_it"
            ],
            "a": 1,
            "explain": "Handler background diperlukan."
          },
          {
            "type": "mc",
            "q": "Deep link dari notifikasi membuka",
            "options": [
              "ConstrainedBox",
              "lebih longgar (flexible)",
              "menurunkan performa",
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
              "await",
              "Stack",
              "ya"
            ],
            "a": 3,
            "explain": "Izin runtime wajib."
          },
          {
            "type": "mc",
            "q": "Menangani status aplikasi memakai",
            "options": [
              "ListView.builder",
              "WidgetsBindingObserver",
              "inputFormatters",
              "animasi selesai"
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
              "Icon",
              "UX"
            ],
            "a": 1,
            "explain": "Refresh saat resume."
          },
          {
            "type": "mc",
            "q": "Battery/memori perlu diperhatikan",
            "options": [
              "tidak",
              "State",
              "Icon",
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
              "hasil",
              "Card"
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
              "CircularProgressIndicator",
              "Row/Column/Flex",
              "aksesibilitas",
              "membersihkan resource"
            ],
            "a": 2,
            "explain": "Semantics memberi info aksesibel."
          },
          {
            "type": "mc",
            "q": "Label tombol ikon perlu",
            "options": [
              "GlobalKey<FormState>",
              "EdgeInsets",
              "tooltip/semantic label",
              "Image.network('url')"
            ],
            "a": 2,
            "explain": "Label membantu pembaca layar."
          },
          {
            "type": "mc",
            "q": "Ukuran target sentuh minimal penting",
            "options": [
              "tidak",
              "Text",
              "pub",
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
              "async",
              "await",
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
              "hasil",
              "ya",
              "Card"
            ],
            "a": 2,
            "explain": "Respek pengaturan font."
          },
          {
            "type": "mc",
            "q": "Semantics debug dapat diaktifkan",
            "options": [
              "tidak",
              "State",
              "Icon",
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
              "Dart",
              "Row"
            ],
            "a": 0,
            "explain": "Urutan fokus logis."
          },
          {
            "type": "mc",
            "q": "excludeSemantics berguna untuk",
            "options": [
              "performa gambar kustom",
              "menyembunyikan elemen dekoratif",
              "melihat perubahan cepat saat pengembangan",
              "UI statis tanpa state"
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
              "await",
              "Stack"
            ],
            "a": 1,
            "explain": "Uji aksesibilitas."
          },
          {
            "type": "mc",
            "q": "Alternatif teks untuk gambar wajib",
            "options": [
              "tidak",
              "Card",
              "Text",
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
              "daftar yang dapat digulir",
              "package routing populer",
              "kondisi empty state"
            ],
            "a": 0,
            "explain": "BLoC memisahkan event/state."
          },
          {
            "type": "mc",
            "q": "Riverpod menyediakan",
            "options": [
              "State berubah dan UI perlu dibangun ulang",
              "root aplikasi Material",
              "dependency injection dan state",
              "sekali saat state dibuat"
            ],
            "a": 2,
            "explain": "Riverpod menggabungkan DI/state."
          },
          {
            "type": "mc",
            "q": "Reducer pattern memusatkan",
            "options": [
              "try/catch atau catchError",
              "secure storage",
              "orientasi perangkat",
              "transisi state"
            ],
            "a": 3,
            "explain": "Reducer memusatkan transisi."
          },
          {
            "type": "mc",
            "q": "Immutable state membantu",
            "options": [
              "inputFormatters",
              "animasi selesai",
              "intl DateFormat",
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
              "frame/waktu",
              "supportedLocales",
              "dihindari"
            ],
            "a": 0,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "Side effect sebaiknya di",
            "options": [
              "Image.network('url')",
              "urutan/perubahan dinamis",
              "luar build",
              "guard autentikasi"
            ],
            "a": 2,
            "explain": "Side effect di luar build."
          },
          {
            "type": "mc",
            "q": "Mengelola state async memerlukan",
            "options": [
              "membersihkan resource",
              "loading/error/data",
              "TextEditingController",
              "keyboardType"
            ],
            "a": 1,
            "explain": "State async lengkap."
          },
          {
            "type": "mc",
            "q": "Rebuild selektif memakai",
            "options": [
              "Stack",
              "selector",
              "Drawer",
              "Container decoration"
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
              "Wrap",
              "Form"
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
              "State",
              "Icon"
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
              "kode Dart + native",
              "flutter build apk",
              "paralelisme terpisah memori",
              "apakah perlu repaint"
            ],
            "a": 2,
            "explain": "Isolate menjalankan kode terpisah."
          },
          {
            "type": "mc",
            "q": "Isolate berkomunikasi lewat",
            "options": [
              "message passing",
              "rebuild berlebih",
              "TextField",
              "CircularProgressIndicator"
            ],
            "a": 0,
            "explain": "Isolate bertukar pesan."
          },
          {
            "type": "mc",
            "q": "compute() membantu",
            "options": [
              "konten melebihi ruang",
              "menjalankan fungsi berat di isolate",
              "menyembunyikan elemen dekoratif",
              "domain, data, presentation"
            ],
            "a": 1,
            "explain": "compute menjalankan di isolate."
          },
          {
            "type": "mc",
            "q": "Pekerjaan berat di main isolate menyebabkan",
            "options": [
              "platform (iOS/Android)",
              "Stream",
              "UI tersendat",
              "dikelola"
            ],
            "a": 2,
            "explain": "Main isolate harus ringan."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "Form",
              "colorScheme",
              "pengalaman pengguna",
              "DevTools"
            ],
            "a": 3,
            "explain": "DevTools menyediakan profiler."
          },
          {
            "type": "mc",
            "q": "Rebuild berlebihan diperbaiki dengan",
            "options": [
              "package HTTP dengan fitur lanjutan",
              "ukuran layar dan info",
              "mengukur cakupan test",
              "const widget dan pemisahan"
            ],
            "a": 3,
            "explain": "Const mengurangi rebuild."
          },
          {
            "type": "mc",
            "q": "const constructor membantu",
            "options": [
              "ThemeData",
              "performa",
              "useMaterial3",
              "errorBuilder"
            ],
            "a": 1,
            "explain": "Const widget tidak dibangun ulang."
          },
          {
            "type": "mc",
            "q": "RepaintBoundary membantu",
            "options": [
              "AlertDialog",
              "SizedBox",
              "arguments",
              "mengurangi repaint"
            ],
            "a": 3,
            "explain": "RepaintBoundary memisahkan layer."
          },
          {
            "type": "mc",
            "q": "Image berat sebaiknya",
            "options": [
              "rebuild berlebih",
              "di-resize",
              "Text",
              "TextField"
            ],
            "a": 1,
            "explain": "Resize menghemat memori."
          },
          {
            "type": "mc",
            "q": "Frame drop menandakan",
            "options": [
              "masalah performa",
              "Padding",
              "setState",
              "Navigator.pushNamed(context, '/x')"
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
              "mengukur cakupan test",
              "menjalankan fungsi berat di isolate",
              "aliran event dari native"
            ],
            "a": 0,
            "explain": "Layer terpisah mudah diuji."
          },
          {
            "type": "mc",
            "q": "Clean architecture memisahkan",
            "options": [
              "domain, data, presentation",
              "transisi antar halaman",
              "konten lebih panjang dari layar",
              "event dan state terpisah"
            ],
            "a": 0,
            "explain": "Layer memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Repository mengabstraksi",
            "options": [
              "key-value sederhana",
              "penting",
              "widget",
              "sumber data"
            ],
            "a": 3,
            "explain": "Repository menyembunyikan data."
          },
          {
            "type": "mc",
            "q": "Use case menampung",
            "options": [
              "domain, data, presentation",
              "codegen binding native",
              "flutter build ios",
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
              "Navigator.pushNamed(context, '/x')",
              "GlobalKey<FormState>",
              "EdgeInsets"
            ],
            "a": 0,
            "explain": "DI lewat provider/get_it."
          },
          {
            "type": "mc",
            "q": "Modularisasi fitur membantu",
            "options": [
              "TextField",
              "CircularProgressIndicator",
              "skalabilitas",
              "Row/Column/Flex"
            ],
            "a": 2,
            "explain": "Fitur modular memudahkan scaling."
          },
          {
            "type": "mc",
            "q": "Menghindari god widget dengan",
            "options": [
              "memecah komponen",
              "kualitas UI",
              "ICU/intl messages",
              "http.post"
            ],
            "a": 0,
            "explain": "Pecah widget besar."
          },
          {
            "type": "mc",
            "q": "Model immutable membantu",
            "options": [
              "errorBuilder",
              "sub-halaman",
              "prediktabilitas",
              "focus traversal"
            ],
            "a": 2,
            "explain": "Immutable memudahkan reasoning."
          },
          {
            "type": "mc",
            "q": "Error handling terpusat penting",
            "options": [
              "tidak",
              "pub",
              "ya",
              "Image"
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
              "Dart",
              "Row"
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
              "berinteraksi dengan widget",
              "dependency injection dan state",
              "di platform target"
            ],
            "a": 0,
            "explain": "Channel menjembatani Dart dan native."
          },
          {
            "type": "mc",
            "q": "MethodChannel dipakai untuk",
            "options": [
              "const widget dan pemisahan",
              "kode native lintas platform",
              "memanggil method native",
              "offline dan performa"
            ],
            "a": 2,
            "explain": "MethodChannel memanggil native."
          },
          {
            "type": "mc",
            "q": "EventChannel mengirim",
            "options": [
              "memanggil library C",
              "konfigurasi build berbeda",
              "efek visual lanjutan",
              "aliran event dari native"
            ],
            "a": 3,
            "explain": "EventChannel mengalirkan event."
          },
          {
            "type": "mc",
            "q": "Plugin Flutter membungkus",
            "options": [
              "paint dan shouldRepaint",
              "Melihat perubahan kode dengan cepat saat pengembangan",
              "kode native lintas platform",
              "penataan sumbu utama"
            ],
            "a": 2,
            "explain": "Plugin menyatukan native."
          },
          {
            "type": "mc",
            "q": "Menulis plugin memerlukan",
            "options": [
              "launcher icon config",
              "kode Dart + native",
              "UI bersama (mis. bottom nav)",
              "deteksi regresi visual"
            ],
            "a": 1,
            "explain": "Plugin butuh dua sisi."
          },
          {
            "type": "mc",
            "q": "Error channel harus",
            "options": [
              "http.get lalu jsonDecode",
              "gesture pengguna",
              "ditangani",
              "alur end-to-end"
            ],
            "a": 2,
            "explain": "Penanganan error penting."
          },
          {
            "type": "mc",
            "q": "Pigeon membantu",
            "options": [
              "event dan state",
              "akses API dari UI",
              "menyesuaikan layout berdasarkan ukuran",
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
              "rentang nilai animasi",
              "mengisi ruang fleksibel",
              "dikirim ke server"
            ],
            "a": 0,
            "explain": "FFI memanggil C langsung."
          },
          {
            "type": "mc",
            "q": "Kode native harus diuji",
            "options": [
              "di platform target",
              "codegen binding native",
              "flutter build ios",
              "performa gambar kustom"
            ],
            "a": 0,
            "explain": "Uji di perangkat nyata."
          },
          {
            "type": "mc",
            "q": "Channel async dijalankan",
            "options": [
              "otomasi build dan rilis",
              "di luar main isolate terkadang",
              "State berubah dan UI perlu dibangun ulang",
              "root aplikasi Material"
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
              "UI tersendat",
              "provider/get_it",
              "di isolate/latar"
            ],
            "a": 0,
            "explain": "SharedPreferences untuk data kecil."
          },
          {
            "type": "mc",
            "q": "SQLite via sqflite menyimpan",
            "options": [
              "alur end-to-end",
              "melepas resource",
              "handler khusus",
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
              "pemisah antar item",
              "klien dan server",
              "solusi state management populer"
            ],
            "a": 0,
            "explain": "Hive/Isar untuk lokal."
          },
          {
            "type": "mc",
            "q": "Menyimpan file memakai",
            "options": [
              "inputFormatters",
              "path_provider",
              "animasi selesai",
              "intl DateFormat"
            ],
            "a": 1,
            "explain": "path_provider memberi path."
          },
          {
            "type": "mc",
            "q": "Data sensitif disimpan di",
            "options": [
              "secure storage",
              "formKey.currentState.validate()",
              "BoxDecoration/Border",
              "sliver kompleks"
            ],
            "a": 0,
            "explain": "Secure storage untuk rahasia."
          },
          {
            "type": "mc",
            "q": "Migration skema lokal penting",
            "options": [
              "tidak",
              "Text",
              "ya",
              "pub"
            ],
            "a": 2,
            "explain": "Migrasi menjaga kompatibilitas data."
          },
          {
            "type": "mc",
            "q": "Query database sebaiknya",
            "options": [
              "keamanan/performa",
              "widget tree",
              "Container/Padding",
              "di isolate/latar"
            ],
            "a": 3,
            "explain": "Query berat di latar."
          },
          {
            "type": "mc",
            "q": "Cache lokal membantu",
            "options": [
              "satu aturan bisnis",
              "offline dan performa",
              "memanggil library C",
              "konfigurasi build berbeda"
            ],
            "a": 1,
            "explain": "Cache lokal mempercepat."
          },
          {
            "type": "mc",
            "q": "Menutup koneksi DB penting",
            "options": [
              "tidak",
              "Row",
              "Wrap",
              "ya"
            ],
            "a": 3,
            "explain": "Tutup koneksi saat selesai."
          },
          {
            "type": "mc",
            "q": "Enkripsi lokal membantu",
            "options": [
              "sumber data",
              "path_provider",
              "keamanan",
              "menggambar kustom"
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
              "package cache (mis. cached_network_image)",
              "flutter build ios",
              "dikonfigurasi di platform"
            ],
            "a": 2,
            "explain": "flutter build ios untuk iOS."
          },
          {
            "type": "mc",
            "q": "Mengatur versi aplikasi di",
            "options": [
              "pubspec.yaml",
              "controller.text",
              "ThemeData",
              "useMaterial3"
            ],
            "a": 0,
            "explain": "pubspec mengatur versi."
          },
          {
            "type": "mc",
            "q": "App signing Android diatur di",
            "options": [
              "build.gradle",
              "sliver kompleks",
              "context.pop()/Navigator.pop",
              "kualitas UI"
            ],
            "a": 0,
            "explain": "Gradle mengatur signing."
          },
          {
            "type": "mc",
            "q": "Flavors memungkinkan",
            "options": [
              "konfigurasi build berbeda",
              "ditangani dan diinformasikan",
              "layout per ukuran",
              "beberapa Future paralel"
            ],
            "a": 0,
            "explain": "Flavor memisahkan build."
          },
          {
            "type": "mc",
            "q": "Menghasilkan app bundle memakai",
            "options": [
              "flutter build appbundle",
              "konten lebih panjang dari layar",
              "event dan state terpisah",
              "satu aturan bisnis"
            ],
            "a": 0,
            "explain": "App bundle untuk Play Store."
          },
          {
            "type": "mc",
            "q": "mengurangi ukuran build dengan",
            "options": [
              "luar build",
              "mengurangi repaint",
              "ditangani",
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
              "state management dengan dependensi eksplisit",
              "pemuatan data awal",
              "kode manual controller"
            ],
            "a": 0,
            "explain": "CI/CD mengotomasi."
          },
          {
            "type": "mc",
            "q": "Menguji build rilis sebelum rilis",
            "options": [
              "tidak perlu",
              "tampilan visual",
              "penting",
              "onError/handleError"
            ],
            "a": 2,
            "explain": "Uji build rilis."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency mutakhir membantu",
            "options": [
              "keamanan/performa",
              "performa",
              "memecah komponen",
              "build.gradle"
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
              "context.pop()/Navigator.pop",
              "menggambar kustom",
              "kualitas UI",
              "ICU/intl messages"
            ],
            "a": 1,
            "explain": "CustomPaint menggambar manual."
          },
          {
            "type": "mc",
            "q": "CustomPainter mengimplementasikan",
            "options": [
              "membuka halaman spesifik dari tautan",
              "paint dan shouldRepaint",
              "kontrol posisi scroll",
              "kapan validasi berjalan"
            ],
            "a": 1,
            "explain": "Painter butuh paint modern."
          },
          {
            "type": "mc",
            "q": "Animasi kustom memakai",
            "options": [
              "dikonfigurasi di platform",
              "menemukan widget berdasarkan tipe",
              "event dan state",
              "AnimationController + CustomPainter"
            ],
            "a": 3,
            "explain": "Kombinasi memberi animasi kustom."
          },
          {
            "type": "mc",
            "q": "Physics-based animation memakai",
            "options": [
              "mengurangi repaint",
              "ditangani",
              "--split-per-abi",
              "Simulation"
            ],
            "a": 3,
            "explain": "Simulation meniru fisika."
          },
          {
            "type": "mc",
            "q": "AnimatedBuilder mengurangi",
            "options": [
              "loading/error/data",
              "rebuild berlebih",
              "di-resize",
              "key-value sederhana"
            ],
            "a": 1,
            "explain": "AnimatedBuilder hanya rebuild bagian perlu."
          },
          {
            "type": "mc",
            "q": "Menghindari kerja berat saat paint",
            "options": [
              "tidak perlu",
              "rebuild berlebih",
              "penting",
              "Text"
            ],
            "a": 2,
            "explain": "Paint harus ringan."
          },
          {
            "type": "mc",
            "q": "shouldRepaint mengembalikan",
            "options": [
              "flutter build apk",
              "flutter create nama",
              "daftar yang dapat digulir",
              "apakah perlu repaint"
            ],
            "a": 3,
            "explain": "shouldRepaint menentukan repaint."
          },
          {
            "type": "mc",
            "q": "Layer caching membantu",
            "options": [
              "Widget yang membentuk widget tree",
              "kerangka halaman (appbar, body)",
              "performa gambar kustom",
              "widget perlu dirender"
            ],
            "a": 2,
            "explain": "Cache layer saat cocok."
          },
          {
            "type": "mc",
            "q": "Shader memungkinkan",
            "options": [
              "flutter build ios",
              "performa gambar kustom",
              "melihat perubahan cepat saat pengembangan",
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
              "await",
              "Stack",
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
