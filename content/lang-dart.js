/* CodeDuo — blok konten: topik "Dart" (dipisah dari Blok Web).
 * 1 topik (dart) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_DART = [
  {
    "id": "dart",
    "name": "Dart",
    "icon": "🎯",
    "color": "#0175c2",
    "desc": "Bahasa untuk Flutter: tipe & asinkron",
    "lessons": [
      {
        "id": "dart-1",
        "level": "Dasar",
        "title": "Pengenalan Dart",
        "exercises": [
          {
            "type": "mc",
            "q": "Dart adalah bahasa yang dikembangkan oleh",
            "options": [
              "Microsoft",
              "Apple",
              "Oracle",
              "Google"
            ],
            "a": 3,
            "explain": "Dart dikembangkan Google."
          },
          {
            "type": "mc",
            "q": "Dart paling dikenal sebagai bahasa untuk",
            "options": [
              "Laravel",
              "Rails",
              "Flutter",
              "where(...)"
            ],
            "a": 2,
            "explain": "Dart adalah bahasa utama Flutter."
          },
          {
            "type": "mc",
            "q": "Berkas Dart berekstensi",
            "options": [
              ".dart",
              ".dt",
              ".da",
              ".drt"
            ],
            "a": 0,
            "explain": "Berkas Dart berekstensi .dart."
          },
          {
            "type": "mc",
            "q": "Menjalankan berkas Dart memakai",
            "options": [
              "dart run file.dart",
              "node file.dart",
              "php file.dart",
              "dart test"
            ],
            "a": 0,
            "explain": "dart run menjalankan berkas."
          },
          {
            "type": "mc",
            "q": "Dart adalah bahasa",
            "options": [
              "tanpa tipe",
              "statically typed dengan inferensi",
              "murni dinamis",
              "tidak diedit manual"
            ],
            "a": 1,
            "explain": "Dart bertipe statis dengan inferensi."
          },
          {
            "type": "mc",
            "q": "Fungsi utama program Dart adalah",
            "options": [
              "main()",
              "func main()",
              "def main()",
              "start()"
            ],
            "a": 0,
            "explain": "Entry point Dart adalah main()."
          },
          {
            "type": "mc",
            "q": "Manajer package Dart adalah",
            "options": [
              "npm",
              "composer",
              "pub",
              "gem"
            ],
            "a": 2,
            "explain": "pub mengelola package."
          },
          {
            "type": "mc",
            "q": "pubspec.yaml mendefinisikan",
            "options": [
              "tipe aman dan pemakaian ulang",
              "rangkaian operasi pada objek",
              "dependency dan metadata",
              "menjalankan fungsi di isolate"
            ],
            "a": 2,
            "explain": "pubspec mendefinisikan proyek."
          },
          {
            "type": "mc",
            "q": "Mengimpor library memakai",
            "options": [
              "require",
              "import",
              "use",
              "include"
            ],
            "a": 1,
            "explain": "Dart memakai import."
          },
          {
            "type": "mc",
            "q": "Dart mendukung kompilasi ke",
            "options": [
              "CSS saja",
              "SQL",
              "JavaScript/native",
              "PHP"
            ],
            "a": 2,
            "explain": "Dart dapat dikompilasi ke JS/native."
          }
        ]
      },
      {
        "id": "dart-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendeklarasikan variabel memakai",
            "options": [
              "let",
              "dim",
              "var",
              "mut"
            ],
            "a": 2,
            "explain": "Dart memakai var."
          },
          {
            "type": "mc",
            "q": "Variabel yang tidak berubah memakai",
            "options": [
              "let",
              "static",
              "final/const",
              "lock"
            ],
            "a": 2,
            "explain": "final/const untuk nilai tetap."
          },
          {
            "type": "mc",
            "q": "Perbedaan final dan const",
            "options": [
              "sama saja",
              "final compile-time",
              "dependency dan metadata",
              "const dikompilasi-time, final runtime"
            ],
            "a": 3,
            "explain": "const compile-time; final runtime."
          },
          {
            "type": "mc",
            "q": "Tipe teks adalah",
            "options": [
              "Text",
              "Char",
              "Str",
              "String"
            ],
            "a": 3,
            "explain": "Dart memakai String."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan bulat adalah",
            "options": [
              "Integer",
              "number",
              "int",
              "Whole"
            ],
            "a": 2,
            "explain": "Dart memakai int."
          },
          {
            "type": "mc",
            "q": "Tipe desimal adalah",
            "options": [
              "float",
              "double",
              "decimal",
              "real"
            ],
            "a": 1,
            "explain": "Dart memakai double."
          },
          {
            "type": "mc",
            "q": "Tipe boolean memakai",
            "options": [
              "boolean",
              "bool",
              "bit",
              "flag"
            ],
            "a": 1,
            "explain": "Dart memakai bool."
          },
          {
            "type": "mc",
            "q": "Nilai kosong memakai",
            "options": [
              "nil",
              "null",
              "None",
              "undefined"
            ],
            "a": 1,
            "explain": "Dart memakai null."
          },
          {
            "type": "mc",
            "q": "Inferensi tipe memakai",
            "options": [
              "var/final tanpa tipe",
              "close()",
              "di isolate",
              "bisa memengaruhi"
            ],
            "a": 0,
            "explain": "Dart menginferensi tipe."
          },
          {
            "type": "mc",
            "q": "Konstanta compile-time memakai",
            "options": [
              "final",
              "const",
              "var",
              "@override"
            ],
            "a": 1,
            "explain": "const untuk konstanta compile-time."
          }
        ]
      },
      {
        "id": "dart-3",
        "level": "Dasar",
        "title": "String & Interpolasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Interpolasi string memakai",
            "options": [
              "#{}",
              "${}",
              "<% %>",
              "{{ }}"
            ],
            "a": 1,
            "explain": "Dart memakai ${...}."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "&&",
              "+",
              "concat",
              "."
            ],
            "a": 1,
            "explain": "Operator + menggabungkan."
          },
          {
            "type": "mc",
            "q": "String multi-baris memakai",
            "options": [
              "backtick",
              "tiga kutip (''')",
              "di isolate",
              "bisa memengaruhi"
            ],
            "a": 1,
            "explain": "Dart memakai triple quote."
          },
          {
            "type": "mc",
            "q": "Mengubah ke huruf besar memakai",
            "options": [
              ".toUpperCase()",
              ".upper()",
              ".big()",
              "perawatan"
            ],
            "a": 0,
            "explain": "toUpperCase menaikkan huruf."
          },
          {
            "type": "mc",
            "q": "Memotong spasi memakai",
            "options": [
              ".strip()",
              ".cut()",
              "isolate",
              ".trim()"
            ],
            "a": 3,
            "explain": "trim memangkas spasi."
          },
          {
            "type": "mc",
            "q": "Mengganti substring memakai",
            "options": [
              ".replaceAll()",
              ".gsub()",
              ".swap()",
              "Flutter"
            ],
            "a": 0,
            "explain": "replaceAll mengganti semua."
          },
          {
            "type": "mc",
            "q": "Membagi string memakai",
            "options": [
              ".explode()",
              ".split()",
              ".divide()",
              "Future"
            ],
            "a": 1,
            "explain": "split memecah string."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".length",
              ".len()",
              ".size",
              "benar"
            ],
            "a": 0,
            "explain": "length memberi panjang."
          },
          {
            "type": "mc",
            "q": "Memeriksa mengandung memakai",
            "options": [
              ".includes()",
              ".contains()",
              ".has()",
              "banyak nilai"
            ],
            "a": 1,
            "explain": "contains memeriksa substring."
          },
          {
            "type": "mc",
            "q": "Raw string memakai awalan",
            "options": [
              "raw\"...\"",
              "r\"...\"",
              "C\"\"",
              "mockito/mocktail"
            ],
            "a": 1,
            "explain": "Awalan r membuat raw string."
          }
        ]
      },
      {
        "id": "dart-4",
        "level": "Dasar",
        "title": "Null Safety",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe yang boleh null ditandai dengan",
            "options": [
              "!",
              "?",
              "*",
              "&"
            ],
            "a": 1,
            "explain": "Tanda ? menandai nullable."
          },
          {
            "type": "mc",
            "q": "Operator ! (null assertion) dipakai untuk",
            "options": [
              "menyatakan nilai tidak null",
              "dependency dan metadata",
              "beberapa cara membuat objek",
              "beberapa Future paralel"
            ],
            "a": 0,
            "explain": "! menegaskan non-null."
          },
          {
            "type": "mc",
            "q": "Operator ?? memberi",
            "options": [
              "package collection groupBy",
              "dart pub publish",
              "nilai default bila null",
              "switch dengan pattern"
            ],
            "a": 2,
            "explain": "?? memberi fallback."
          },
          {
            "type": "mc",
            "q": "Operator ?. dipakai untuk",
            "options": [
              "nilai yang tersedia nanti",
              "stream dari iterable",
              "akses aman bila null",
              "method pada tipe yang ada"
            ],
            "a": 2,
            "explain": "?. mengakses aman."
          },
          {
            "type": "mc",
            "q": "Null safety mencegah",
            "options": [
              "API publik jelas",
              "statically typed dengan inferensi",
              "null error saat runtime",
              "variabel di lingkupnya"
            ],
            "a": 2,
            "explain": "Null safety mencegah null dereference."
          },
          {
            "type": "mc",
            "q": "Variabel nullable harus diinisialisasi atau",
            "options": [
              "if/else",
              "Stream",
              "try/catch",
              "diberi null"
            ],
            "a": 3,
            "explain": "Nullable tetap perlu nilai."
          },
          {
            "type": "mc",
            "q": "late dipakai untuk",
            "options": [
              "pemeliharaan",
              "keandalan",
              "inisialisasi tertunda",
              "where(...)"
            ],
            "a": 2,
            "explain": "late menunda inisialisasi."
          },
          {
            "type": "mc",
            "q": "Mengakses nilai nullable tanpa cek memicu",
            "options": [
              "ditangani",
              "memboroskan resource",
              "mockito/mocktail",
              "error kompilasi"
            ],
            "a": 3,
            "explain": "Kompiler menolak akses tak aman."
          },
          {
            "type": "mc",
            "q": "`??=` menetapkan bila",
            "options": [
              "selalu",
              "Map",
              "penting",
              "null"
            ],
            "a": 3,
            "explain": "??= menetapkan bila null."
          },
          {
            "type": "mc",
            "q": "Null safety membantu",
            "options": [
              "pengujian",
              "main()",
              "keandalan",
              ".contains()"
            ],
            "a": 2,
            "explain": "Null safety meningkatkan keandalan."
          }
        ]
      },
      {
        "id": "dart-5",
        "level": "Dasar",
        "title": "Koleksi",
        "exercises": [
          {
            "type": "mc",
            "q": "List dibuat memakai",
            "options": [
              "[1,2,3]",
              "{1,2,3}",
              "(1,2,3)",
              "<1,2,3>"
            ],
            "a": 0,
            "explain": "List literal memakai []."
          },
          {
            "type": "mc",
            "q": "Map dibuat memakai",
            "options": [
              "[1,2]",
              "{'a': 1}",
              "(1,2)",
              "<a=1>"
            ],
            "a": 1,
            "explain": "Map literal memakai {}."
          },
          {
            "type": "mc",
            "q": "Set dibuat memakai",
            "options": [
              "{1,2,3}",
              "[1,2,3]",
              "(1,2,3)",
              "() {}"
            ],
            "a": 0,
            "explain": "Set literal memakai {}."
          },
          {
            "type": "mc",
            "q": "Menambah list memakai",
            "options": [
              "list.push(x)",
              "list << x",
              "list.add(x)",
              "method biasa"
            ],
            "a": 2,
            "explain": "add menambah elemen."
          },
          {
            "type": "mc",
            "q": "Panjang list memakai",
            "options": [
              "list.size",
              "list.count",
              ".contains()",
              "list.length"
            ],
            "a": 3,
            "explain": "length mengembalikan panjang."
          },
          {
            "type": "mc",
            "q": "Mengubah list memakai",
            "options": [
              "list.each(...)",
              "menjadi broadcast",
              "list.map(...)",
              "penting"
            ],
            "a": 2,
            "explain": "map mentransformasi list."
          },
          {
            "type": "mc",
            "q": "Menyaring list memakai",
            "options": [
              "filter(...)",
              "where(...)",
              "klasifikasi error",
              "<T extends Batas>"
            ],
            "a": 1,
            "explain": "where menyaring."
          },
          {
            "type": "mc",
            "q": "Mengakses map memakai",
            "options": [
              "map.key[]",
              "map->key",
              "stream/listener",
              "map['key']"
            ],
            "a": 3,
            "explain": "Map diakses dengan []."
          },
          {
            "type": "mc",
            "q": "Spread operator pada koleksi memakai",
            "options": [
              "..",
              "...",
              "&&",
              "|"
            ],
            "a": 1,
            "explain": "... menyebar elemen."
          },
          {
            "type": "mc",
            "q": "Koleksi immutable dibuat memakai",
            "options": [
              "menghindari duplikasi",
              "menambah kompleksitas",
              "[...a, ...b]",
              "const/List.unmodifiable"
            ],
            "a": 3,
            "explain": "const/List.unmodifiable membuat immutable."
          }
        ]
      },
      {
        "id": "dart-6",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "function nama()",
              "def nama()",
              "tipe nama() {}",
              "fn nama()"
            ],
            "a": 2,
            "explain": "Dart menulis tipe lalu nama."
          },
          {
            "type": "mc",
            "q": "Fungsi panah memakai",
            "options": [
              "->",
              "~>",
              "::",
              "=>"
            ],
            "a": 3,
            "explain": "=> untuk ekspresi tunggal."
          },
          {
            "type": "mc",
            "q": "Parameter opsional memakai",
            "options": [
              "[]",
              "{}",
              "<>",
              "()"
            ],
            "a": 0,
            "explain": "[] untuk parameter posisional opsional."
          },
          {
            "type": "mc",
            "q": "Named parameter memakai",
            "options": [
              "[]",
              "{}",
              "<>",
              "()"
            ],
            "a": 1,
            "explain": "{} untuk named parameter."
          },
          {
            "type": "mc",
            "q": "Named parameter wajib memakai",
            "options": [
              "must",
              "required",
              "need",
              "berkala"
            ],
            "a": 1,
            "explain": "required menandai wajib."
          },
          {
            "type": "mc",
            "q": "Nilai default parameter ditulis dengan",
            "options": [
              ":\",",
              "=",
              ":=",
              "->"
            ],
            "a": 1,
            "explain": "Nilai default memakai =."
          },
          {
            "type": "mc",
            "q": "Fungsi anonim memakai",
            "options": [
              "lambda",
              "arrow",
              ".split()",
              "() {}"
            ],
            "a": 3,
            "explain": "Dart memakai () {}."
          },
          {
            "type": "mc",
            "q": "Closure menangkap",
            "options": [
              "method pada tipe yang ada",
              "variabel di lingkupnya",
              "package collection groupBy",
              "dart pub publish"
            ],
            "a": 1,
            "explain": "Closure menangkap variabel sekitar."
          },
          {
            "type": "mc",
            "q": "Fungsi first-class berarti",
            "options": [
              "kode manual",
              "method biasa",
              "bisa disimpan/dikirim",
              "tipe elemen"
            ],
            "a": 2,
            "explain": "Fungsi adalah nilai."
          },
          {
            "type": "mc",
            "q": "Tipe fungsi ditulis seperti",
            "options": [
              "func<int>",
              ".toUpperCase()",
              "int Function(int)",
              "{1,2,3}"
            ],
            "a": 2,
            "explain": "Tipe fungsi memakai Function."
          }
        ]
      },
      {
        "id": "dart-7",
        "level": "Dasar",
        "title": "Class & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "def Nama()",
              "class Nama {}",
              "struct Nama",
              "klasifikasi error"
            ],
            "a": 1,
            "explain": "Dart memakai class."
          },
          {
            "type": "mc",
            "q": "Konstruktor didefinisikan dengan",
            "options": [
              "constructor Nama",
              "Nama() {}",
              "init Nama",
              "regresi visual"
            ],
            "a": 1,
            "explain": "Konstruktor bernama sama dengan class."
          },
          {
            "type": "mc",
            "q": "Constructor named memungkinkan",
            "options": [
              "Tipe yang dapat berisi null dan yang tidak",
              "nilai default bila null",
              "kondisi ? a : b",
              "beberapa cara membuat objek"
            ],
            "a": 3,
            "explain": "Named constructor memberi variasi."
          },
          {
            "type": "mc",
            "q": "Field private diawali",
            "options": [
              "@",
              "#",
              "_ (garis bawah)",
              "$"
            ],
            "a": 2,
            "explain": "Garis bawah menandai private library."
          },
          {
            "type": "mc",
            "q": "Mewarisi class memakai",
            "options": [
              "implements",
              "with",
              "mocktail/mockito",
              "extends"
            ],
            "a": 3,
            "explain": "extends untuk pewarisan."
          },
          {
            "type": "mc",
            "q": "Mengimplementasikan interface memakai",
            "options": [
              "implements",
              "extends",
              "with",
              "keandalan"
            ],
            "a": 0,
            "explain": "implements untuk interface."
          },
          {
            "type": "mc",
            "q": "Mixin memakai",
            "options": [
              "extends",
              "implements",
              "with",
              "konsistensi"
            ],
            "a": 2,
            "explain": "with menambahkan mixin."
          },
          {
            "type": "mc",
            "q": "Memanggil konstruktor induk memakai",
            "options": [
              "parent(...)",
              "super(...)",
              "base(...)",
              "over-engineering"
            ],
            "a": 1,
            "explain": "super memanggil induk."
          },
          {
            "type": "mc",
            "q": "Override method memakai",
            "options": [
              "@override",
              "override()",
              "cakupan",
              "model berubah"
            ],
            "a": 0,
            "explain": "Anotasi @override menandai override."
          },
          {
            "type": "mc",
            "q": "Getter/setter memakai",
            "options": [
              "attr",
              "list.add(x)",
              "get/set",
              "tipe nama() {}"
            ],
            "a": 2,
            "explain": "Dart memakai get/set."
          }
        ]
      },
      {
        "id": "dart-8",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "when",
              "unless",
              "<T extends Batas>",
              "if/else"
            ],
            "a": 3,
            "explain": "Dart memakai if/else."
          },
          {
            "type": "mc",
            "q": "Switch di Dart modern mendukung",
            "options": [
              "statically typed dengan inferensi",
              "pattern ke ekspresi",
              "variabel di lingkupnya",
              "nilai yang tersedia nanti"
            ],
            "a": 1,
            "explain": "Switch modern mendukung pattern."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for i in",
              "elemen pertama cocok",
              "for (var i ...)",
              "algoritma dapat ditukar"
            ],
            "a": 2,
            "explain": "for klasik memakai (init; cond; step)."
          },
          {
            "type": "mc",
            "q": "for-in mengiterasi",
            "options": [
              "tipe elemen",
              "pewarisan berlebihan",
              "elemen koleksi",
              "keamanan data"
            ],
            "a": 2,
            "explain": "for-in mengiterasi koleksi."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "pubspec.yaml",
              "pub.dev",
              "prediktabilitas",
              "kondisi benar"
            ],
            "a": 3,
            "explain": "while bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "di loop",
              "fungsi<T>(...)",
              "menghapus duplikat",
              ".timeout(...)"
            ],
            "a": 0,
            "explain": "break/continue mengatur loop."
          },
          {
            "type": "mc",
            "q": "Tipe kondisional memakai",
            "options": [
              "kondisi ? a : b",
              "if(a,b)",
              "beberapa cara membuat objek",
              "beberapa Future paralel"
            ],
            "a": 0,
            "explain": "Ternary memilih nilai."
          },
          {
            "type": "mc",
            "q": "Assert dipakai untuk",
            "options": [
              "dart pub publish",
              "memeriksa kondisi saat debug",
              "switch dengan pattern",
              "dependency dan metadata"
            ],
            "a": 1,
            "explain": "assert memeriksa saat debug."
          },
          {
            "type": "mc",
            "q": "Menangani null pada kondisi memakai",
            "options": [
              "if (x != null)",
              "Error untuk bug program, Exception untuk kondisi",
              "tipe non-null semua objek",
              "mereduksi koleksi ke satu nilai"
            ],
            "a": 0,
            "explain": "Cek null penting."
          },
          {
            "type": "mc",
            "q": "Labeled statement memungkinkan",
            "options": [
              "break/continue bertarget",
              "menambah kompleksitas",
              "[...a, ...b]",
              "banyak listener"
            ],
            "a": 0,
            "explain": "Label memberi target."
          }
        ]
      },
      {
        "id": "dart-9",
        "level": "Dasar",
        "title": "Asinkron Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Future mewakili",
            "options": [
              "memanggil library native",
              "pengembangan dengan hot reload",
              "nilai yang tersedia nanti",
              "Menulis alur asynchronous dengan gaya berurutan"
            ],
            "a": 2,
            "explain": "Future hasil async."
          },
          {
            "type": "mc",
            "q": "await dipakai untuk",
            "options": [
              "<T extends Batas>",
              "operator",
              "menunggu Future",
              "dengan map/where"
            ],
            "a": 2,
            "explain": "await menunggu hasil."
          },
          {
            "type": "mc",
            "q": "Fungsi async mengembalikan",
            "options": [
              "Future",
              "tipe elemen",
              "keamanan data",
              "stream cepat"
            ],
            "a": 0,
            "explain": "async mengembalikan Future."
          },
          {
            "type": "mc",
            "q": "async* menghasilkan",
            "options": [
              "Stream",
              "code generation",
              "data besar",
              "package lokal"
            ],
            "a": 0,
            "explain": "async* menghasilkan Stream."
          },
          {
            "type": "mc",
            "q": "Stream mengirim",
            "options": [
              "fromJson/toJson",
              "banyak nilai",
              "DevTools",
              "kompatibilitas"
            ],
            "a": 1,
            "explain": "Stream mengirim rangkaian nilai."
          },
          {
            "type": "mc",
            "q": "then dipakai untuk",
            "options": [
              "const/List.unmodifiable",
              "implements",
              "chaining Future",
              "kondisi benar"
            ],
            "a": 2,
            "explain": "then merangkai Future."
          },
          {
            "type": "mc",
            "q": "catchError menangani",
            "options": [
              "error Future",
              "tipe nama() {}",
              "bisa disimpan/dikirim",
              "di loop"
            ],
            "a": 0,
            "explain": "catchError menangani kegagalan."
          },
          {
            "type": "mc",
            "q": "await hanya boleh di",
            "options": [
              "pemeriksaan tipe",
              "fungsi async",
              "penanganan exhaustif",
              "listener"
            ],
            "a": 1,
            "explain": "await di dalam async."
          },
          {
            "type": "mc",
            "q": "Future.wait menjalankan",
            "options": [
              "kode untuk diproses generator",
              "variasi objek immutable",
              "beberapa Future paralel",
              "const dikompilasi-time, final runtime"
            ],
            "a": 2,
            "explain": "Future.wait menunggu paralel."
          },
          {
            "type": "mc",
            "q": "Mengabaikan Future tanpa await dapat",
            "options": [
              "menyembunyikan error",
              "list.map(...)",
              "class Nama {}",
              "@override"
            ],
            "a": 0,
            "explain": "Unawaited Future bisa bermasalah."
          }
        ]
      },
      {
        "id": "dart-10",
        "level": "Dasar",
        "title": "Exception",
        "exercises": [
          {
            "type": "mc",
            "q": "Melempar exception memakai",
            "options": [
              "raise",
              "throw",
              "panic",
              "extends"
            ],
            "a": 1,
            "explain": "Dart memakai throw."
          },
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/rescue",
              "try/catch",
              "except",
              "operator"
            ],
            "a": 1,
            "explain": "Dart memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "versi constraint",
              "selalu",
              "pemeliharaan",
              ".dart"
            ],
            "a": 1,
            "explain": "finally selalu dijalankan."
          },
          {
            "type": "mc",
            "q": "on dipakai untuk",
            "options": [
              "akses aman bila null",
              "memeriksa kondisi saat debug",
              "factory dari map",
              "menangkap tipe spesifik"
            ],
            "a": 3,
            "explain": "on menangkap tipe tertentu."
          },
          {
            "type": "mc",
            "q": "rethrow dipakai untuk",
            "options": [
              "DevTools",
              "kompatibilitas",
              "meneruskan exception",
              "kualitas kode"
            ],
            "a": 2,
            "explain": "rethrow meneruskan."
          },
          {
            "type": "mc",
            "q": "Exception kustom memakai",
            "options": [
              "immutable data class",
              "Hanya dapat diberi nilai sekali",
              "class X implements Exception",
              "menyatakan nilai tidak null"
            ],
            "a": 2,
            "explain": "Exception kustom implement Exception."
          },
          {
            "type": "mc",
            "q": "Error vs Exception",
            "options": [
              "for (var i ...)",
              "class X implements Exception",
              "tipe aman dan pemakaian ulang",
              "Error untuk bug program, Exception untuk kondisi"
            ],
            "a": 3,
            "explain": "Bedakan Error dan Exception."
          },
          {
            "type": "mc",
            "q": "Menangkap terlalu luas berisiko",
            "options": [
              "data besar",
              "menyembunyikan bug",
              "package lokal",
              "pengujian"
            ],
            "a": 1,
            "explain": "Catch luas menyembunyikan masalah."
          },
          {
            "type": "mc",
            "q": "Async exception ditangani dengan",
            "options": [
              "build.yaml",
              "CPU-bound",
              "switch exhaustif",
              "try/catch pada await"
            ],
            "a": 3,
            "explain": "await dalam try/catch."
          },
          {
            "type": "mc",
            "q": "Pesan exception diakses dengan",
            "options": [
              ".toString()",
              "class Nama {}",
              "@override",
              "menunggu Future"
            ],
            "a": 0,
            "explain": "toString memberi pesan."
          }
        ]
      },
      {
        "id": "dart-11",
        "level": "Menengah",
        "title": "JSON & Serialisasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Decode JSON memakai",
            "options": [
              "JSON.parse",
              "decode()",
              "debugging",
              "jsonDecode"
            ],
            "a": 3,
            "explain": "dart:convert jsonDecode."
          },
          {
            "type": "mc",
            "q": "Encode JSON memakai",
            "options": [
              "JSON.stringify",
              "jsonEncode",
              "encode()",
              "list.map(...)"
            ],
            "a": 1,
            "explain": "jsonEncode ke string."
          },
          {
            "type": "mc",
            "q": "Model fromJson biasanya",
            "options": [
              "for (var i ...)",
              "factory dari map",
              "class X implements Exception",
              "tipe aman dan pemakaian ulang"
            ],
            "a": 1,
            "explain": "fromJson membentuk model."
          },
          {
            "type": "mc",
            "q": "toJson mengembalikan",
            "options": [
              "waktu",
              "keamanan",
              "Map",
              "null"
            ],
            "a": 2,
            "explain": "toJson menghasilkan Map."
          },
          {
            "type": "mc",
            "q": "Menangani tipe null pada JSON penting",
            "options": [
              "tidak",
              "ya",
              "bool",
              "?"
            ],
            "a": 1,
            "explain": "Field bisa null."
          },
          {
            "type": "mc",
            "q": "Codegen json_serializable menghemat",
            "options": [
              "error",
              "menambah kompleksitas",
              "[...a, ...b]",
              "kode manual"
            ],
            "a": 3,
            "explain": "Codegen mengurangi boilerplate."
          },
          {
            "type": "mc",
            "q": "Nested JSON memerlukan",
            "options": [
              "try/catch dengan await",
              "pemeriksaan tipe",
              "penanganan exhaustif",
              "parsing bertingkat"
            ],
            "a": 3,
            "explain": "Nested perlu parse bertahap."
          },
          {
            "type": "mc",
            "q": "List JSON diparsing per elemen",
            "options": [
              "tidak",
              "with",
              ".dart",
              "ya"
            ],
            "a": 3,
            "explain": "List perlu map per elemen."
          },
          {
            "type": "mc",
            "q": "Validasi data JSON penting",
            "options": [
              "tidak",
              "() {}",
              "GC",
              "ya"
            ],
            "a": 3,
            "explain": "Validasi input eksternal."
          },
          {
            "type": "mc",
            "q": "Error decode harus ditangani",
            "options": [
              "tidak",
              "ya",
              "pub",
              "..."
            ],
            "a": 1,
            "explain": "Tangani error parsing."
          }
        ]
      },
      {
        "id": "dart-12",
        "level": "Menengah",
        "title": "Stream & Sink",
        "exercises": [
          {
            "type": "mc",
            "q": "Sink adalah",
            "options": [
              "method pada tipe yang ada",
              "package collection groupBy",
              "dart pub publish",
              "tujuan aliran data"
            ],
            "a": 3,
            "explain": "Sink menampung aliran."
          },
          {
            "type": "mc",
            "q": "StreamSubscription memungkinkan",
            "options": [
              "kode manual",
              "method biasa",
              "mengelola langganan",
              "konteks"
            ],
            "a": 2,
            "explain": "Subscription mengelola listener."
          },
          {
            "type": "mc",
            "q": "pause/resume subscription memungkinkan",
            "options": [
              "parsing bertingkat",
              "member asli",
              "try/catch dengan await",
              "kontrol aliran"
            ],
            "a": 3,
            "explain": "Pause/resume mengatur aliran."
          },
          {
            "type": "mc",
            "q": "cancel subscription penting",
            "options": [
              "tidak",
              "pub",
              "...",
              "ya"
            ],
            "a": 3,
            "explain": "Cancel melepas."
          },
          {
            "type": "mc",
            "q": "Stream.fromIterable membuat",
            "options": [
              "Menulis alur asynchronous dengan gaya berurutan",
              "stream dari iterable",
              "null error saat runtime",
              "if (x != null)"
            ],
            "a": 1,
            "explain": "Membungkus iterable."
          },
          {
            "type": "mc",
            "q": "Stream.periodic mengirim",
            "options": [
              "berkala",
              ".trim()",
              "diberi null",
              "list.add(x)"
            ],
            "a": 0,
            "explain": "Periodic mengirim berkala."
          },
          {
            "type": "mc",
            "q": "asBroadcastStream mengubah",
            "options": [
              ".replaceAll()",
              "inisialisasi tertunda",
              "list.length",
              "menjadi broadcast"
            ],
            "a": 3,
            "explain": "Mengubah ke broadcast."
          },
          {
            "type": "mc",
            "q": "Menangani onDone penting",
            "options": [
              "tidak",
              "error",
              "pub",
              "ya"
            ],
            "a": 3,
            "explain": "OnDone menandai selesai."
          },
          {
            "type": "mc",
            "q": "transform mengolah aliran",
            "options": [
              "ya",
              "tidak",
              "GC",
              "const"
            ],
            "a": 0,
            "explain": "Transform mengolah."
          },
          {
            "type": "mc",
            "q": "Menggabungkan stream memakai",
            "options": [
              "package stream_transform/async",
              "kontrol aliran",
              "utility global",
              "kondisi koleksi"
            ],
            "a": 0,
            "explain": "Library menyediakan combine."
          }
        ]
      },
      {
        "id": "dart-13",
        "level": "Menengah",
        "title": "Extension & Utilities",
        "exercises": [
          {
            "type": "mc",
            "q": "Extension menambah",
            "options": [
              "kontrak yang harus diimplementasikan",
              "nilai awal berbeda tipe",
              "method pada tipe ada",
              "memanggil library native"
            ],
            "a": 2,
            "explain": "Extension memperluas tipe."
          },
          {
            "type": "mc",
            "q": "Extension dipanggil seperti",
            "options": [
              "parsing bertingkat",
              "member asli",
              "method biasa",
              "try/catch dengan await"
            ],
            "a": 2,
            "explain": "Extension dipanggil seperti method."
          },
          {
            "type": "mc",
            "q": "Extension tidak bisa override",
            "options": [
              ".trim()",
              "member asli",
              "diberi null",
              "list.add(x)"
            ],
            "a": 1,
            "explain": "Tidak bisa mengalahkan member asli."
          },
          {
            "type": "mc",
            "q": "Extension bertipe generic memungkinkan",
            "options": [
              "Error untuk bug program, Exception untuk kondisi",
              "tipe non-null semua objek",
              "perilaku lintas tipe",
              "mereduksi koleksi ke satu nilai"
            ],
            "a": 2,
            "explain": "Extension generik."
          },
          {
            "type": "mc",
            "q": "Utility helper membantu",
            "options": [
              "tiga kutip (''')",
              "{'a': 1}",
              "elemen koleksi",
              "menghindari duplikasi"
            ],
            "a": 3,
            "explain": "Helper mengurangi duplikasi."
          },
          {
            "type": "mc",
            "q": "Fungsi top-level membantu",
            "options": [
              "lookupFunction",
              "utility global",
              "extension/wrapper",
              "alur penuh"
            ],
            "a": 1,
            "explain": "Fungsi top-level berguna."
          },
          {
            "type": "mc",
            "q": "Const string untuk pesan membantu",
            "options": [
              "kode manual",
              "method biasa",
              "konsistensi",
              "konteks"
            ],
            "a": 2,
            "explain": "Konstanta pesan."
          },
          {
            "type": "mc",
            "q": "Menghindari util terlalu besar",
            "options": [
              "penting",
              "tidak",
              ".toUpperCase()",
              "{1,2,3}"
            ],
            "a": 0,
            "explain": "Jaga util terfokus."
          },
          {
            "type": "mc",
            "q": "Dokumentasi helper penting",
            "options": [
              "tidak",
              "[]",
              "error",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi jelas."
          },
          {
            "type": "mc",
            "q": "Menguji helper unit penting",
            "options": [
              "ya",
              "tidak",
              "wajib",
              "var"
            ],
            "a": 0,
            "explain": "Uji helper."
          }
        ]
      },
      {
        "id": "dart-14",
        "level": "Menengah",
        "title": "Error Handling Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Custom exception membantu",
            "options": [
              "bisa memengaruhi",
              "dipertimbangkan",
              "klasifikasi error",
              "constructor/provider"
            ],
            "a": 2,
            "explain": "Exception kustom memisahkan jenis."
          },
          {
            "type": "mc",
            "q": "Wrapping error membantu",
            "options": [
              "null",
              ".trim()",
              "konteks",
              "diberi null"
            ],
            "a": 2,
            "explain": "Wrapping menambah konteks."
          },
          {
            "type": "mc",
            "q": "Menangani error async memakai",
            "options": [
              "try/catch dengan await",
              "try/catch pada await",
              "parsing bertingkat",
              "member asli"
            ],
            "a": 0,
            "explain": "Await di dalam try."
          },
          {
            "type": "mc",
            "q": "Metode `Future.catchError` digunakan untuk menangkap dan menangani",
            "options": [
              "akses data",
              "await/pump",
              "DevTools",
              "error"
            ],
            "a": 3,
            "explain": "catchError menangani."
          },
          {
            "type": "mc",
            "q": "Stack trace berguna untuk",
            "options": [
              "debugging",
              "bool",
              ".toUpperCase()",
              "{1,2,3}"
            ],
            "a": 0,
            "explain": "Stack trace melacak sumber."
          },
          {
            "type": "mc",
            "q": "Error UI harus informatif",
            "options": [
              "tidak",
              "ya",
              ".dart",
              "${}"
            ],
            "a": 1,
            "explain": "Error jelas membantu."
          },
          {
            "type": "mc",
            "q": "Logging error produksi penting",
            "options": [
              "tidak",
              "int",
              "ya",
              "+"
            ],
            "a": 2,
            "explain": "Log membantu diagnosis."
          },
          {
            "type": "mc",
            "q": "Menghindari menelan error",
            "options": [
              "penting",
              "tidak",
              "double",
              "tiga kutip (''')"
            ],
            "a": 0,
            "explain": "Jangan telan error."
          },
          {
            "type": "mc",
            "q": "Assert vs Exception berbeda",
            "options": [
              "tidak",
              "ya",
              "GC",
              "const"
            ],
            "a": 1,
            "explain": "Assert untuk debug."
          },
          {
            "type": "mc",
            "q": "Menguji jalur error penting",
            "options": [
              "tidak",
              ".dart",
              "${}",
              "ya"
            ],
            "a": 3,
            "explain": "Uji jalur error."
          }
        ]
      },
      {
        "id": "dart-15",
        "level": "Menengah",
        "title": "Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Generic pada class memakai",
            "options": [
              "class Box<T>",
              "class Box[T]",
              "close()",
              "di isolate"
            ],
            "a": 0,
            "explain": "Dart memakai <T>."
          },
          {
            "type": "mc",
            "q": "Generic membantu",
            "options": [
              "yang selesai pertama",
              "tipe aman dan pemakaian ulang",
              "kode untuk diproses generator",
              "variasi objek immutable"
            ],
            "a": 1,
            "explain": "Generics menjaga tipe."
          },
          {
            "type": "mc",
            "q": "Generic pada fungsi memakai",
            "options": [
              "fungsi<T>(...)",
              "fungsi[T]",
              "super(...)",
              "break/continue bertarget"
            ],
            "a": 0,
            "explain": "Fungsi dapat generik."
          },
          {
            "type": "mc",
            "q": "Batasan tipe generic memakai",
            "options": [
              "keamanan",
              "<T extends Batas>",
              "perawatan",
              "JavaScript/native"
            ],
            "a": 1,
            "explain": "extends membatasi T."
          },
          {
            "type": "mc",
            "q": "List<T> menjamin",
            "options": [
              "get/set",
              "tipe elemen",
              "Future",
              "throw"
            ],
            "a": 1,
            "explain": "List<T> bertipe."
          },
          {
            "type": "mc",
            "q": "dynamic mematikan",
            "options": [
              "prediktabilitas",
              "Flutter",
              "final/const",
              "pemeriksaan tipe"
            ],
            "a": 3,
            "explain": "dynamic menghilangkan type check."
          },
          {
            "type": "mc",
            "q": "Object adalah",
            "options": [
              "beberapa Future paralel",
              "tipe non-null semua objek",
              "method pada tipe ada",
              "membuat objek dengan logika khusus"
            ],
            "a": 1,
            "explain": "Object menampung semua non-null."
          },
          {
            "type": "mc",
            "q": "Generics berlebihan dapat",
            "options": [
              "menambah kompleksitas",
              "baru/eksperimental",
              "aksesibilitas",
              "mengurangi testabilitas"
            ],
            "a": 0,
            "explain": "Gunakan sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Tipe koleksi kosong sebaiknya",
            "options": [
              "pemeliharaan",
              ".dart",
              "String",
              "eksplisit"
            ],
            "a": 3,
            "explain": "Eksplisitkan tipe."
          },
          {
            "type": "mc",
            "q": "Mixin dengan generic memungkinkan",
            "options": [
              "ditangani",
              "perilaku bertipe",
              "memboroskan resource",
              "mockito/mocktail"
            ],
            "a": 1,
            "explain": "Mixin dapat generik."
          }
        ]
      },
      {
        "id": "dart-16",
        "level": "Menengah",
        "title": "OOP Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Abstract class dipakai untuk",
            "options": [
              "kode untuk diproses generator",
              "variasi objek immutable",
              "kontrak yang harus diimplementasikan",
              "const dikompilasi-time, final runtime"
            ],
            "a": 2,
            "explain": "Abstract class mendefinisikan kontrak."
          },
          {
            "type": "mc",
            "q": "Interface di Dart dibuat dengan",
            "options": [
              "interface keyword",
              "jsonDecode",
              "abstract class/implements",
              "kontrol aliran"
            ],
            "a": 2,
            "explain": "Implicit interface via class."
          },
          {
            "type": "mc",
            "q": "Mixin berbeda dari class karena",
            "options": [
              "tidak bisa diinstansiasi sendiri",
              "dependency dan metadata",
              "beberapa cara membuat objek",
              "beberapa Future paralel"
            ],
            "a": 0,
            "explain": "Mixin menambah perilaku."
          },
          {
            "type": "mc",
            "q": "Extension menambah",
            "options": [
              "membuat objek dengan logika khusus",
              "method pada tipe yang ada",
              "yang selesai pertama",
              "kode untuk diproses generator"
            ],
            "a": 1,
            "explain": "Extension memperluas tipe."
          },
          {
            "type": "mc",
            "q": "Factory constructor dipakai untuk",
            "options": [
              "class X implements Exception",
              "tipe aman dan pemakaian ulang",
              "membuat objek dengan logika khusus",
              "rangkaian operasi pada objek"
            ],
            "a": 2,
            "explain": "Factory mengontrol pembuatan."
          },
          {
            "type": "mc",
            "q": "Static member milik",
            "options": [
              "menjalankan fungsi di isolate",
              "class, bukan instance",
              "tidak diedit manual",
              "Tipe yang dapat berisi null dan yang tidak"
            ],
            "a": 1,
            "explain": "Static milik class."
          },
          {
            "type": "mc",
            "q": "Cascade operator (..) memungkinkan",
            "options": [
              "class, bukan instance",
              "paralelisme terpisah memori",
              "immutable data class",
              "rangkaian operasi pada objek"
            ],
            "a": 3,
            "explain": "Cascade merangkai pemanggilan."
          },
          {
            "type": "mc",
            "q": "Operator overloading memakai",
            "options": [
              "overload",
              "var",
              "var/final tanpa tipe",
              "operator"
            ],
            "a": 3,
            "explain": "Kata kunci operator."
          },
          {
            "type": "mc",
            "q": "Composition lebih disukai daripada",
            "options": [
              "unit test",
              "tanpa build_runner",
              "compatible layout",
              "pewarisan berlebihan"
            ],
            "a": 3,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Sealed class memungkinan",
            "options": [
              ".toUpperCase()",
              "penanganan exhaustif",
              "{1,2,3}",
              "const/List.unmodifiable"
            ],
            "a": 1,
            "explain": "Sealed mendukung switch lengkap."
          }
        ]
      },
      {
        "id": "dart-17",
        "level": "Menengah",
        "title": "Koleksi Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Menggabungkan list memakai",
            "options": [
              "a + b always",
              "[...a, ...b]",
              "fromJson/toJson",
              "DevTools"
            ],
            "a": 1,
            "explain": "Spread menggabungkan list."
          },
          {
            "type": "mc",
            "q": "reduce dipakai untuk",
            "options": [
              "rangkaian operasi pada objek",
              "menjalankan fungsi di isolate",
              "mereduksi koleksi ke satu nilai",
              "tidak diedit manual"
            ],
            "a": 2,
            "explain": "reduce mengakumulasi."
          },
          {
            "type": "mc",
            "q": "fold memungkinkan",
            "options": [
              "nilai awal berbeda tipe",
              "for (var i ...)",
              "class X implements Exception",
              "tipe aman dan pemakaian ulang"
            ],
            "a": 0,
            "explain": "fold memiliki initial value."
          },
          {
            "type": "mc",
            "q": "any/every memeriksa",
            "options": [
              "model berubah",
              "kondisi koleksi",
              "StringBuffer",
              "pengguna"
            ],
            "a": 1,
            "explain": "any/every memeriksa kondisi."
          },
          {
            "type": "mc",
            "q": "firstWhere mencari",
            "options": [
              "perilaku lintas tipe",
              "class, bukan instance",
              "elemen pertama cocok",
              "paralelisme terpisah memori"
            ],
            "a": 2,
            "explain": "firstWhere mengembalikan yang pertama cocok."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan memakai",
            "options": [
              "package collection groupBy",
              "const dikompilasi-time, final runtime",
              "pattern ke ekspresi",
              "menangkap tipe spesifik"
            ],
            "a": 0,
            "explain": "Package collection menyediakan groupBy."
          },
          {
            "type": "mc",
            "q": "Mengurutkan memakai",
            "options": [
              "kode boilerplate",
              "sort(compare)",
              "event loop",
              "keamanan"
            ],
            "a": 1,
            "explain": "sort memakai comparator."
          },
          {
            "type": "mc",
            "q": "Set membantu",
            "options": [
              "eksplisit",
              "kondisi koleksi",
              "close()",
              "menghapus duplikat"
            ],
            "a": 3,
            "explain": "Set unik."
          },
          {
            "type": "mc",
            "q": "Map entries dapat diubah",
            "options": [
              "fungsi<T>(...)",
              "dengan map/where",
              "abstract class/implements",
              "menghapus duplikat"
            ],
            "a": 1,
            "explain": "Map dapat ditransformasi."
          },
          {
            "type": "mc",
            "q": "Unmodifiable collection membantu",
            "options": [
              "map['key']",
              "required",
              "_ (garis bawah)",
              "keamanan data"
            ],
            "a": 3,
            "explain": "Immutable mencegah perubahan."
          }
        ]
      },
      {
        "id": "dart-18",
        "level": "Menengah",
        "title": "Async Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Stream.listen mendaftarkan",
            "options": [
              "pembuatan objek",
              "listener",
              "mocktail/mockito",
              "pubspec.yaml"
            ],
            "a": 1,
            "explain": "listen menerima event."
          },
          {
            "type": "mc",
            "q": "Kelas `StreamController` di Dart bertugas membuat, memasukkan data, dan mengendalikan aliran",
            "options": [
              ".length",
              "stream",
              "keandalan",
              "where(...)"
            ],
            "a": 1,
            "explain": "Controller membuat stream."
          },
          {
            "type": "mc",
            "q": "Broadcast stream untuk",
            "options": [
              "banyak listener",
              "berkala",
              "konsistensi",
              "class Box<T>"
            ],
            "a": 0,
            "explain": "Broadcast multi listener."
          },
          {
            "type": "mc",
            "q": "Menutup StreamController dengan",
            "options": [
              "wajib",
              "close()",
              "over-engineering",
              "dry-run"
            ],
            "a": 1,
            "explain": "close menutup stream."
          },
          {
            "type": "mc",
            "q": "await for mengiterasi",
            "options": [
              "Stream",
              "operator",
              "dengan map/where",
              "ditangani"
            ],
            "a": 0,
            "explain": "await for membaca stream."
          },
          {
            "type": "mc",
            "q": "StreamTransformer mengubah",
            "options": [
              "stream/listener",
              "regresi visual",
              "/// komentar",
              "aliran"
            ],
            "a": 3,
            "explain": "Transformer mengolah stream."
          },
          {
            "type": "mc",
            "q": "Future.any mengembalikan",
            "options": [
              "if (x != null)",
              "tujuan aliran data",
              "yang selesai pertama",
              "tidak bisa diinstansiasi sendiri"
            ],
            "a": 2,
            "explain": "Future.any balapan."
          },
          {
            "type": "mc",
            "q": "Timeout Future memakai",
            "options": [
              "menjadi broadcast",
              ".timeout(...)",
              "penting",
              "fungsi<T>(...)"
            ],
            "a": 1,
            "explain": "timeout membatasi."
          },
          {
            "type": "mc",
            "q": "Error stream perlu",
            "options": [
              "{1,2,3}",
              "const/List.unmodifiable",
              "() {}",
              "ditangani"
            ],
            "a": 3,
            "explain": "Tangani error stream."
          },
          {
            "type": "mc",
            "q": "Backpressure perlu dikelola pada",
            "options": [
              "stream cepat",
              "method biasa",
              "konteks",
              "tipe elemen"
            ],
            "a": 0,
            "explain": "Aliran deras perlu kontrol."
          }
        ]
      },
      {
        "id": "dart-19",
        "level": "Menengah",
        "title": "Isolate",
        "exercises": [
          {
            "type": "mc",
            "q": "Isolate dipakai untuk",
            "options": [
              "statically typed dengan inferensi",
              "variabel di lingkupnya",
              "paralelisme terpisah memori",
              "nilai yang tersedia nanti"
            ],
            "a": 2,
            "explain": "Isolate memisahkan memori."
          },
          {
            "type": "mc",
            "q": "Isolate berkomunikasi lewat",
            "options": [
              "list.add(x)",
              "tipe nama() {}",
              "message passing",
              "bisa disimpan/dikirim"
            ],
            "a": 2,
            "explain": "Isolate bertukar pesan."
          },
          {
            "type": "mc",
            "q": "Isolate.run mempermudah",
            "options": [
              "menjalankan fungsi di isolate",
              "dart pub publish",
              "switch dengan pattern",
              "dependency dan metadata"
            ],
            "a": 0,
            "explain": "Isolate.run menjalankan sekali."
          },
          {
            "type": "mc",
            "q": "SendPort/ReceivePort dipakai untuk",
            "options": [
              "await/pump",
              "komunikasi",
              "fromJson/toJson",
              "DevTools"
            ],
            "a": 1,
            "explain": "Port untuk komunikasi."
          },
          {
            "type": "mc",
            "q": "Pekerjaan CPU berat sebaiknya",
            "options": [
              "alur penuh",
              "code generation",
              "di isolate",
              "data besar"
            ],
            "a": 2,
            "explain": "Hindari memblokir UI."
          },
          {
            "type": "mc",
            "q": "State global tidak dibagi antar isolate",
            "options": [
              "salah",
              "benar",
              "konteks",
              "tipe elemen"
            ],
            "a": 1,
            "explain": "Isolate tidak berbagi memori."
          },
          {
            "type": "mc",
            "q": "compute pada Flutter memakai",
            "options": [
              "klasifikasi error",
              "<T extends Batas>",
              "operator",
              "isolate"
            ],
            "a": 3,
            "explain": "compute menjalankan di isolate."
          },
          {
            "type": "mc",
            "q": "Membuat isolate berlebihan",
            "options": [
              "{'a': 1}",
              "memboroskan resource",
              "extends",
              "elemen koleksi"
            ],
            "a": 1,
            "explain": "Batasi jumlah isolate."
          },
          {
            "type": "mc",
            "q": "Data yang dikirim harus",
            "options": [
              "dry-run",
              "dapat diserialisasi",
              "build.yaml",
              "CPU-bound"
            ],
            "a": 1,
            "explain": "Pesan harus serializable."
          },
          {
            "type": "mc",
            "q": "Isolate membantu",
            "options": [
              "class Box<T>",
              "perilaku bertipe",
              "sort(compare)",
              "performa"
            ],
            "a": 3,
            "explain": "Isolate meningkatkan responsivitas."
          }
        ]
      },
      {
        "id": "dart-20",
        "level": "Menengah",
        "title": "Testing Dart",
        "exercises": [
          {
            "type": "mc",
            "q": "Package test dipakai untuk",
            "options": [
              "pemeriksaan tipe",
              "penanganan exhaustif",
              "unit test",
              "listener"
            ],
            "a": 2,
            "explain": "package:test untuk unit test."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "dart run test",
              "git URL",
              "dart test",
              "dart run file.dart"
            ],
            "a": 2,
            "explain": "dart test menjalankan."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan test memakai",
            "options": [
              "group",
              "() {}",
              "implements",
              "kondisi benar"
            ],
            "a": 0,
            "explain": "group mengelompokkan."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "assert_test",
              "expect",
              "fromJson/toJson",
              "DevTools"
            ],
            "a": 1,
            "explain": "expect memeriksa."
          },
          {
            "type": "mc",
            "q": "Test async memakai",
            "options": [
              "code generation",
              "data besar",
              "async/await di test",
              "package lokal"
            ],
            "a": 2,
            "explain": "Test mendukung async."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "tipe elemen",
              "pewarisan berlebihan",
              "mockito/mocktail",
              "keamanan data"
            ],
            "a": 2,
            "explain": "Library mock."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "<T extends Batas>",
              "operator",
              "--coverage",
              "dengan map/where"
            ],
            "a": 2,
            "explain": "Flag coverage."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "tidak",
              "...",
              "=",
              "ya"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Setup/teardown membantu",
            "options": [
              "isolasi test",
              "build.yaml",
              "CPU-bound",
              "switch exhaustif"
            ],
            "a": 0,
            "explain": "Isolasi antar test."
          },
          {
            "type": "mc",
            "q": "Menjalankan test di CI penting",
            "options": [
              "ya",
              "tidak",
              "benar",
              "waktu"
            ],
            "a": 0,
            "explain": "CI menjalankan test."
          }
        ]
      },
      {
        "id": "dart-21",
        "level": "Advance",
        "title": "Macros & Static Metaprogramming",
        "exercises": [
          {
            "type": "mc",
            "q": "Static metaprogramming bertujuan",
            "options": [
              "menjalankan fungsi di isolate",
              "tidak diedit manual",
              "Tipe yang dapat berisi null dan yang tidak",
              "memindahkan codegen ke compile-time"
            ],
            "a": 3,
            "explain": "Tujuan: codegen saat compile."
          },
          {
            "type": "mc",
            "q": "Manfaat metaprogramming statis",
            "options": [
              "sort(compare)",
              "tanpa build_runner",
              "baru/eksperimental",
              "aksesibilitas"
            ],
            "a": 1,
            "explain": "Mengurangi langkah build."
          },
          {
            "type": "mc",
            "q": "Dampaknya pada kecepatan build",
            "options": [
              "tidak pernah",
              "bisa memengaruhi",
              "CPU-bound",
              "switch exhaustif"
            ],
            "a": 1,
            "explain": "Proses compile bisa terdampak."
          },
          {
            "type": "mc",
            "q": "Fitur ini relatif",
            "options": [
              "baru/eksperimental",
              "sangat lama",
              "class Nama {}",
              "@override"
            ],
            "a": 0,
            "explain": "Perkembangan awal."
          },
          {
            "type": "mc",
            "q": "Membaca kode saat compile membutuhkan",
            "options": [
              "versi constraint",
              "pemeliharaan",
              "API metaprogramming",
              ".length"
            ],
            "a": 2,
            "explain": "Perlu API khusus."
          },
          {
            "type": "mc",
            "q": "Menjaga kompatibilitas penting",
            "options": [
              "tidak",
              "ya",
              "benar",
              "waktu"
            ],
            "a": 1,
            "explain": "Kompatibilitas dijaga."
          },
          {
            "type": "mc",
            "q": "Codegen tetap relevan untuk",
            "options": [
              "kasus kompleks",
              "menghapus duplikat",
              ".timeout(...)",
              "isolate"
            ],
            "a": 0,
            "explain": "Codegen masih dipakai."
          },
          {
            "type": "mc",
            "q": "Menguji hasil generate penting",
            "options": [
              "tidak",
              "const",
              "ya",
              "[]"
            ],
            "a": 2,
            "explain": "Uji hasil."
          },
          {
            "type": "mc",
            "q": "Dokumentasi fitur membantu adopsi",
            "options": [
              "ya",
              "tidak",
              ".dart",
              "${}"
            ],
            "a": 0,
            "explain": "Dokumentasi penting."
          },
          {
            "type": "mc",
            "q": "Ikuti roadmap bahasa",
            "options": [
              "ya",
              "tidak",
              "int",
              "+"
            ],
            "a": 0,
            "explain": "Pantau perkembangan."
          }
        ]
      },
      {
        "id": "dart-22",
        "level": "Advance",
        "title": "Interop & FFI",
        "exercises": [
          {
            "type": "mc",
            "q": "FFI memungkinkan",
            "options": [
              "const dikompilasi-time, final runtime",
              "pattern ke ekspresi",
              "menangkap tipe spesifik",
              "memanggil library native"
            ],
            "a": 3,
            "explain": "FFI menghubungkan native."
          },
          {
            "type": "mc",
            "q": "dart:ffi menyediakan",
            "options": [
              "debugging",
              "eksplisit",
              "kondisi koleksi",
              "binding native"
            ],
            "a": 3,
            "explain": "Library dart:ffi."
          },
          {
            "type": "mc",
            "q": "Mengelola memori native penting",
            "options": [
              "ya",
              "tidak",
              "[]",
              "error"
            ],
            "a": 0,
            "explain": "Memori native manual."
          },
          {
            "type": "mc",
            "q": "Memanggil fungsi C memakai",
            "options": [
              "dry-run",
              "build.yaml",
              "lookupFunction",
              "CPU-bound"
            ],
            "a": 2,
            "explain": "lookupFunction mengikat."
          },
          {
            "type": "mc",
            "q": "Struct native harus",
            "options": [
              "list.add(x)",
              "tipe nama() {}",
              "bisa disimpan/dikirim",
              "compatible layout"
            ],
            "a": 3,
            "explain": "Layout harus cocok."
          },
          {
            "type": "mc",
            "q": "Pengujian FFI menantang",
            "options": [
              "ya",
              "tidak",
              "bool",
              "?"
            ],
            "a": 0,
            "explain": "Uji di target."
          },
          {
            "type": "mc",
            "q": "Portabilitas FFI perlu",
            "options": [
              "dipertimbangkan",
              "menambah kompleksitas",
              "[...a, ...b]",
              "banyak listener"
            ],
            "a": 0,
            "explain": "Perhatikan platform."
          },
          {
            "type": "mc",
            "q": "JS interop berbeda dari FFI",
            "options": [
              "tidak",
              "ya",
              "=>",
              "int"
            ],
            "a": 1,
            "explain": "JS interop terpisah."
          },
          {
            "type": "mc",
            "q": "Menjaga binding tetap sinkron penting",
            "options": [
              "tidak",
              ".dart",
              "${}",
              "ya"
            ],
            "a": 3,
            "explain": "Sinkronkan binding."
          },
          {
            "type": "mc",
            "q": "Dokumentasi interop membantu",
            "options": [
              "ya",
              "tidak",
              "() {}",
              "GC"
            ],
            "a": 0,
            "explain": "Dokumentasi jelas."
          }
        ]
      },
      {
        "id": "dart-23",
        "level": "Advance",
        "title": "Aksesibilitas & UX",
        "exercises": [
          {
            "type": "mc",
            "q": "Semantics membantu",
            "options": [
              ".contains()",
              "[1,2,3]",
              "map['key']",
              "aksesibilitas"
            ],
            "a": 3,
            "explain": "Semantics memberi info."
          },
          {
            "type": "mc",
            "q": "Label tombol ikon diperlukan",
            "options": [
              "tidak",
              "wajib",
              "ya",
              "var"
            ],
            "a": 2,
            "explain": "Label membantu pembaca layar."
          },
          {
            "type": "mc",
            "q": "Kontras warna memadai",
            "options": [
              "penting",
              "tidak",
              "klasifikasi error",
              "<T extends Batas>"
            ],
            "a": 0,
            "explain": "Kontras membantu."
          },
          {
            "type": "mc",
            "q": "Ukuran target sentuh memadai",
            "options": [
              "tidak",
              "stream/listener",
              "regresi visual",
              "penting"
            ],
            "a": 3,
            "explain": "Target sentuh cukup."
          },
          {
            "type": "mc",
            "q": "Dukungan font besar",
            "options": [
              "tidak",
              "penting",
              "extension/wrapper",
              "alur penuh"
            ],
            "a": 1,
            "explain": "Respek pengaturan."
          },
          {
            "type": "mc",
            "q": "Urutan fokus logis",
            "options": [
              "tidak",
              "penting",
              "r\"...\"",
              "{'a': 1}"
            ],
            "a": 1,
            "explain": "Urutan fokus logis."
          },
          {
            "type": "mc",
            "q": "Teks alternatif gambar",
            "options": [
              "opsional",
              "wajib",
              "{1,2,3}",
              "() {}"
            ],
            "a": 1,
            "explain": "Gambar perlu alt."
          },
          {
            "type": "mc",
            "q": "Uji dengan pembaca layar",
            "options": [
              "tidak",
              "method biasa",
              "konteks",
              "penting"
            ],
            "a": 3,
            "explain": "Uji aksesibilitas."
          },
          {
            "type": "mc",
            "q": "Locale/RTL perlu diuji",
            "options": [
              "tidak",
              "ya",
              "int",
              "+"
            ],
            "a": 1,
            "explain": "Uji RTL."
          },
          {
            "type": "mc",
            "q": "Aksesibilitas adalah bagian kualitas",
            "options": [
              "ya",
              "tidak",
              "pub",
              "..."
            ],
            "a": 0,
            "explain": "Bagian kualitas."
          }
        ]
      },
      {
        "id": "dart-24",
        "level": "Advance",
        "title": "Design Pattern Dart",
        "exercises": [
          {
            "type": "mc",
            "q": "Strategy pattern memungkinkan",
            "options": [
              "algoritma dapat ditukar",
              "akses aman bila null",
              "memeriksa kondisi saat debug",
              "factory dari map"
            ],
            "a": 0,
            "explain": "Strategy menukar algoritma."
          },
          {
            "type": "mc",
            "q": "Factory pattern memusatkan",
            "options": [
              "error kompilasi",
              "list.map(...)",
              "pembuatan objek",
              "class Nama {}"
            ],
            "a": 2,
            "explain": "Factory memusatkan pembuatan."
          },
          {
            "type": "mc",
            "q": "Observer memakai",
            "options": [
              "inisialisasi tertunda",
              "stream/listener",
              "list.length",
              "int Function(int)"
            ],
            "a": 1,
            "explain": "Observer via stream."
          },
          {
            "type": "mc",
            "q": "Decorator memakai",
            "options": [
              "extension/wrapper",
              "mengurangi testabilitas",
              "kode boilerplate",
              "event loop"
            ],
            "a": 0,
            "explain": "Decorator membungkus."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "keandalan",
              "where(...)",
              "Nama() {}",
              "akses data"
            ],
            "a": 3,
            "explain": "Repository mengabstraksi data."
          },
          {
            "type": "mc",
            "q": "Dependency injection memakai",
            "options": [
              "mocktail/mockito",
              "constructor/provider",
              "pubspec.yaml",
              "pub.dev"
            ],
            "a": 1,
            "explain": "DI via constructor."
          },
          {
            "type": "mc",
            "q": "Singleton dihindari bila",
            "options": [
              "over-engineering",
              "build.yaml",
              "mengurangi testabilitas",
              "CPU-bound"
            ],
            "a": 2,
            "explain": "Hindari global berlebih."
          },
          {
            "type": "mc",
            "q": "Composition lebih fleksibel",
            "options": [
              "tidak",
              "ya",
              "benar",
              "waktu"
            ],
            "a": 1,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Pola berlebihan berisiko",
            "options": [
              "{1,2,3}",
              "over-engineering",
              "const/List.unmodifiable",
              "implements"
            ],
            "a": 1,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Dokumentasi pola membantu tim",
            "options": [
              "tidak",
              "pub",
              "ya",
              "..."
            ],
            "a": 2,
            "explain": "Dokumentasi penting."
          }
        ]
      },
      {
        "id": "dart-25",
        "level": "Advance",
        "title": "Testing Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Mocking dependency memakai",
            "options": [
              "code generation",
              "data besar",
              "mocktail/mockito",
              "package lokal"
            ],
            "a": 2,
            "explain": "Library mock."
          },
          {
            "type": "mc",
            "q": "Golden file test membantu",
            "options": [
              "extends",
              "elemen koleksi",
              "banyak nilai",
              "regresi visual"
            ],
            "a": 3,
            "explain": "Golden mendeteksi perubahan."
          },
          {
            "type": "mc",
            "q": "Integration test menguji",
            "options": [
              "<T extends Batas>",
              "operator",
              "alur penuh",
              "dengan map/where"
            ],
            "a": 2,
            "explain": "Integrasi end-to-end."
          },
          {
            "type": "mc",
            "q": "Test async perlu",
            "options": [
              "/// komentar",
              "mengurangi alokasi",
              "versi constraint",
              "await/pump"
            ],
            "a": 3,
            "explain": "Async test perlu tunggu."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "map['key']",
              "required",
              "cakupan",
              "_ (garis bawah)"
            ],
            "a": 2,
            "explain": "Coverage mengukur."
          },
          {
            "type": "mc",
            "q": "Test deterministik penting",
            "options": [
              "tidak",
              "wajib",
              "var",
              "ya"
            ],
            "a": 3,
            "explain": "Stabil."
          },
          {
            "type": "mc",
            "q": "Menjalankan test di CI",
            "options": [
              "tidak",
              "penting",
              "pubspec.yaml",
              "pub.dev"
            ],
            "a": 1,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test performa bisa menambah",
            "options": [
              "where(...)",
              "{}",
              "Nama() {}",
              "waktu"
            ],
            "a": 3,
            "explain": "Perf test lebih lama."
          },
          {
            "type": "mc",
            "q": "Menghindari flaky test",
            "options": [
              "tidak",
              "int Function(int)",
              "super(...)",
              "penting"
            ],
            "a": 3,
            "explain": "Flaky test membingungkan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test membantu",
            "options": [
              "tidak",
              "ya",
              "pub",
              "..."
            ],
            "a": 1,
            "explain": "Dokumentasi jelas."
          }
        ]
      },
      {
        "id": "dart-26",
        "level": "Advance",
        "title": "Rilis & Distribution Package",
        "exercises": [
          {
            "type": "mc",
            "q": "Publikasi package memakai",
            "options": [
              "menjalankan fungsi di isolate",
              "dart pub publish",
              "tidak diedit manual",
              "Tipe yang dapat berisi null dan yang tidak"
            ],
            "a": 1,
            "explain": "pub publish."
          },
          {
            "type": "mc",
            "q": "Sebelum publish wajib",
            "options": [
              "operator",
              "dengan map/where",
              "ditangani",
              "dry-run"
            ],
            "a": 3,
            "explain": "Periksa dengan dry-run."
          },
          {
            "type": "mc",
            "q": "Berkas wajib package",
            "options": [
              "extends",
              "elemen koleksi",
              "pubspec.yaml",
              "banyak nilai"
            ],
            "a": 2,
            "explain": "pubspec wajib."
          },
          {
            "type": "mc",
            "q": "Menjaga versi semver",
            "options": [
              "tidak",
              "data besar",
              "package lokal",
              "penting"
            ],
            "a": 3,
            "explain": "Semver penting."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API memakai",
            "options": [
              "pewarisan berlebihan",
              "keamanan data",
              "/// komentar",
              "stream cepat"
            ],
            "a": 2,
            "explain": "Komentar dokumentasi."
          },
          {
            "type": "mc",
            "q": "Contoh penggunaan membantu",
            "options": [
              "tidak",
              "() {}",
              "GC",
              "ya"
            ],
            "a": 3,
            "explain": "Contoh membantu."
          },
          {
            "type": "mc",
            "q": "License wajib",
            "options": [
              "tidak",
              "pub",
              "ya",
              "..."
            ],
            "a": 2,
            "explain": "Sertakan lisensi."
          },
          {
            "type": "mc",
            "q": "Changelog membantu pengguna",
            "options": [
              "tidak",
              "int",
              "+",
              "ya"
            ],
            "a": 3,
            "explain": "Changelog penting."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency minimal",
            "options": [
              "penting",
              "tidak",
              "with",
              "di loop"
            ],
            "a": 0,
            "explain": "Minimalkan dependency."
          },
          {
            "type": "mc",
            "q": "Mengikuti pedoman pub",
            "options": [
              "penting",
              "tidak",
              "StringBuffer",
              "pengguna"
            ],
            "a": 0,
            "explain": "Ikuti pedoman."
          }
        ]
      },
      {
        "id": "dart-27",
        "level": "Advance",
        "title": "Metaprogramming & Build",
        "exercises": [
          {
            "type": "mc",
            "q": "Build_runner menjalankan",
            "options": [
              "code generation",
              ".trim()",
              "diberi null",
              "list.add(x)"
            ],
            "a": 0,
            "explain": "build_runner menjalankan generator."
          },
          {
            "type": "mc",
            "q": "Package json_serializable menghasilkan",
            "options": [
              "try/catch pada await",
              "parsing bertingkat",
              "fromJson/toJson",
              "member asli"
            ],
            "a": 2,
            "explain": "Generator JSON."
          },
          {
            "type": "mc",
            "q": "Annotations menandai",
            "options": [
              "dart pub publish",
              "switch dengan pattern",
              "kode untuk diproses generator",
              "dependency dan metadata"
            ],
            "a": 2,
            "explain": "Anotasi memicu codegen."
          },
          {
            "type": "mc",
            "q": "freezed membantu",
            "options": [
              "beberapa cara membuat objek",
              "beberapa Future paralel",
              "method pada tipe ada",
              "immutable data class"
            ],
            "a": 3,
            "explain": "freezed menghasilkan data class."
          },
          {
            "type": "mc",
            "q": "Codegen perlu dijalankan ulang saat",
            "options": [
              "model berubah",
              "menyembunyikan bug",
              "kode manual",
              "method biasa"
            ],
            "a": 0,
            "explain": "Regenerasi setelah perubahan."
          },
          {
            "type": "mc",
            "q": "Metaprogramming statis mengurangi",
            "options": [
              "isolasi test",
              "lookupFunction",
              "kode boilerplate",
              "extension/wrapper"
            ],
            "a": 2,
            "explain": "Codegen mengurangi boilerplate."
          },
          {
            "type": "mc",
            "q": "Kode hasil generate sebaiknya",
            "options": [
              "menangkap tipe spesifik",
              "perilaku lintas tipe",
              "class, bukan instance",
              "tidak diedit manual"
            ],
            "a": 3,
            "explain": "Jangan edit hasil generate."
          },
          {
            "type": "mc",
            "q": "Menjaga versi generator penting",
            "options": [
              "tidak",
              "bool",
              "?",
              "ya"
            ],
            "a": 3,
            "explain": "Versi konsisten."
          },
          {
            "type": "mc",
            "q": "Build konfigurasi diatur di",
            "options": [
              "jsonEncode",
              "berkala",
              "konsistensi",
              "build.yaml"
            ],
            "a": 3,
            "explain": "build.yaml mengatur build."
          },
          {
            "type": "mc",
            "q": "Memahami output generator membantu",
            "options": [
              "API metaprogramming",
              "wajib",
              "debugging",
              "over-engineering"
            ],
            "a": 2,
            "explain": "Pahami hasil generate."
          }
        ]
      },
      {
        "id": "dart-28",
        "level": "Advance",
        "title": "Performance Dart",
        "exercises": [
          {
            "type": "mc",
            "q": "Compiler AOT menghasilkan",
            "options": [
              "mereduksi koleksi ke satu nilai",
              "kode native cepat",
              "memindahkan codegen ke compile-time",
              "Nilai bertipe T yang tersedia setelah operasi asynchronous selesai"
            ],
            "a": 1,
            "explain": "AOT untuk produksi."
          },
          {
            "type": "mc",
            "q": "JIT cocok untuk",
            "options": [
              "pengembangan dengan hot reload",
              "kondisi ? a : b",
              "Error untuk bug program, Exception untuk kondisi",
              "tipe non-null semua objek"
            ],
            "a": 0,
            "explain": "JIT untuk dev."
          },
          {
            "type": "mc",
            "q": "Alokasi berlebih memengaruhi",
            "options": [
              "GC",
              "=>",
              "int",
              "+"
            ],
            "a": 0,
            "explain": "Alokasi menambah beban."
          },
          {
            "type": "mc",
            "q": "const membantu",
            "options": [
              "mengurangi alokasi",
              "kode boilerplate",
              "event loop",
              "keamanan"
            ],
            "a": 0,
            "explain": "Const menghindari objek baru."
          },
          {
            "type": "mc",
            "q": "Lazy collection membantu",
            "options": [
              "data besar",
              "model berubah",
              "StringBuffer",
              "pengguna"
            ],
            "a": 0,
            "explain": "Lazy menunda evaluasi."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "menambah kompleksitas",
              "[...a, ...b]",
              "DevTools",
              "banyak listener"
            ],
            "a": 2,
            "explain": "DevTools menyediakan profil."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum optimasi",
            "options": [
              "tidak perlu",
              "listener",
              "performa",
              "wajib"
            ],
            "a": 3,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "String concatenation di loop sebaiknya",
            "options": [
              "tipe nama() {}",
              "StringBuffer",
              "bisa disimpan/dikirim",
              "error Future"
            ],
            "a": 1,
            "explain": "StringBuffer efisien."
          },
          {
            "type": "mc",
            "q": "Async IO tidak memblokir",
            "options": [
              "event loop",
              "const/List.unmodifiable",
              "() {}",
              "implements"
            ],
            "a": 0,
            "explain": "IO async non-blocking."
          },
          {
            "type": "mc",
            "q": "Isolate membantu pekerjaan",
            "options": [
              "fromJson/toJson",
              "CPU-bound",
              "DevTools",
              "kompatibilitas"
            ],
            "a": 1,
            "explain": "Isolate untuk CPU berat."
          }
        ]
      },
      {
        "id": "dart-29",
        "level": "Advance",
        "title": "Library & Package",
        "exercises": [
          {
            "type": "mc",
            "q": "Package dipublikasikan ke",
            "options": [
              "extends",
              "elemen koleksi",
              "pub.dev",
              "banyak nilai"
            ],
            "a": 2,
            "explain": "pub.dev registry."
          },
          {
            "type": "mc",
            "q": "Dependency di pubspec berisi",
            "options": [
              "dengan map/where",
              "ditangani",
              "memboroskan resource",
              "versi constraint"
            ],
            "a": 3,
            "explain": "Versi menentukan kompatibilitas."
          },
          {
            "type": "mc",
            "q": "path dependency dipakai untuk",
            "options": [
              "versi constraint",
              "pemeliharaan",
              "package lokal",
              ".dart"
            ],
            "a": 2,
            "explain": "path untuk lokal."
          },
          {
            "type": "mc",
            "q": "git dependency memakai",
            "options": [
              "git URL",
              "dart run file.dart",
              "dart test",
              "[...a, ...b]"
            ],
            "a": 0,
            "explain": "git untuk repo langsung."
          },
          {
            "type": "mc",
            "q": "Menulis package perlu",
            "options": [
              "mereduksi koleksi ke satu nilai",
              "memindahkan codegen ke compile-time",
              "API publik jelas",
              "kode native cepat"
            ],
            "a": 2,
            "explain": "API jelas penting."
          },
          {
            "type": "mc",
            "q": "Semantic versioning membantu",
            "options": [
              "implements",
              "kompatibilitas",
              "kondisi benar",
              "chaining Future"
            ],
            "a": 1,
            "explain": "Semver menjaga kompatibilitas."
          },
          {
            "type": "mc",
            "q": "Menguji package penting",
            "options": [
              "tidak",
              ".dart",
              "ya",
              "${}"
            ],
            "a": 2,
            "explain": "Uji package."
          },
          {
            "type": "mc",
            "q": "Dokumentasi package membantu",
            "options": [
              "package lokal",
              "pengujian",
              "pengguna",
              "main()"
            ],
            "a": 2,
            "explain": "Dokumentasi memudahkan."
          },
          {
            "type": "mc",
            "q": "Menghindari dependency berlebih",
            "options": [
              "tidak",
              "CPU-bound",
              "penting",
              "switch exhaustif"
            ],
            "a": 2,
            "explain": "Minimalkan dependency."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency mutakhir",
            "options": [
              "class Nama {}",
              "@override",
              "keamanan",
              "menunggu Future"
            ],
            "a": 2,
            "explain": "Update berkala."
          }
        ]
      },
      {
        "id": "dart-30",
        "level": "Advance",
        "title": "Pattern & Clean Code",
        "exercises": [
          {
            "type": "mc",
            "q": "Sealed class mendukung",
            "options": [
              "switch exhaustif",
              ".toUpperCase()",
              "{1,2,3}",
              "const/List.unmodifiable"
            ],
            "a": 0,
            "explain": "Sealed memudahkan pattern matching."
          },
          {
            "type": "mc",
            "q": "Pattern matching memakai",
            "options": [
              "switch dengan pattern",
              "tujuan aliran data",
              "tidak bisa diinstansiasi sendiri",
              "elemen pertama cocok"
            ],
            "a": 0,
            "explain": "Pattern matching di switch."
          },
          {
            "type": "mc",
            "q": "Immutable model membantu",
            "options": [
              "try/catch pada await",
              "parsing bertingkat",
              "prediktabilitas",
              "member asli"
            ],
            "a": 2,
            "explain": "Immutable memudahkan reasoning."
          },
          {
            "type": "mc",
            "q": "copyWith memudahkan",
            "options": [
              "nilai awal berbeda tipe",
              "memanggil library native",
              "variasi objek immutable",
              "pengembangan dengan hot reload"
            ],
            "a": 2,
            "explain": "copyWith membuat salinan berubah."
          },
          {
            "type": "mc",
            "q": "Nama jelas membantu",
            "options": [
              "bisa memengaruhi",
              "pemeliharaan",
              "dipertimbangkan",
              "constructor/provider"
            ],
            "a": 1,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "Memisahkan domain dan IO membantu",
            "options": [
              "null",
              "pengujian",
              ".trim()",
              "diberi null"
            ],
            "a": 1,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "Linter (dart analyze) membantu",
            "options": [
              "kualitas kode",
              "var/final tanpa tipe",
              ".replaceAll()",
              "inisialisasi tertunda"
            ],
            "a": 0,
            "explain": "Analyzer menemukan masalah."
          },
          {
            "type": "mc",
            "q": "dart format menyeragamkan",
            "options": [
              ".toString()",
              "mengelola langganan",
              "menghindari duplikasi",
              "format kode"
            ],
            "a": 3,
            "explain": "Format konsisten."
          },
          {
            "type": "mc",
            "q": "Menghindari kode duplikat membantu",
            "options": [
              "jsonDecode",
              "perawatan",
              "kontrol aliran",
              "utility global"
            ],
            "a": 1,
            "explain": "DRY."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API memakai",
            "options": [
              "/// komentar",
              "baru/eksperimental",
              "aksesibilitas",
              "mengurangi testabilitas"
            ],
            "a": 0,
            "explain": "Komentar dokumentasi."
          }
        ]
      },
      {
        "id": "dart-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Dart",
        "exercises": [
          {
            "type": "mc",
            "q": "Di Dart, `final` berarti variabel",
            "options": [
              "Hanya dapat diberi nilai sekali",
              "Harus selalu bernilai null",
              "Selalu berubah otomatis",
              "Hanya boleh berisi angka"
            ],
            "a": 0,
            "explain": "final membatasi assignment variabel menjadi satu kali."
          },
          {
            "type": "mc",
            "q": "Null safety Dart membantu membedakan",
            "options": [
              "Variabel lokal dan file CSS",
              "Tipe yang dapat berisi null dan yang tidak",
              "Server dan database",
              "Fungsi dan route HTTP"
            ],
            "a": 1,
            "explain": "Tanda ? pada tipe menunjukkan nilainya dapat null."
          },
          {
            "type": "mc",
            "q": "Pada Dart, `Future<T>` biasanya mewakili",
            "options": [
              "Nilai bertipe T yang tersedia setelah operasi asynchronous selesai",
              "Tabel database",
              "Widget tanpa state",
              "Nilai yang hanya ada saat compile"
            ],
            "a": 0,
            "explain": "Future merepresentasikan hasil operasi yang belum selesai."
          },
          {
            "type": "mc",
            "q": "`async` dan `await` di Dart digunakan untuk",
            "options": [
              "Menulis alur asynchronous dengan gaya berurutan",
              "Menghapus semua error",
              "Membuat route web tanpa server",
              "Mengubah list menjadi map otomatis"
            ],
            "a": 0,
            "explain": "await menunggu Future di dalam fungsi async."
          },
          {
            "type": "fill",
            "q": "Lengkapi tipe hasil operasi asynchronous untuk nilai int:",
            "code": "Future___ ambil() {}",
            "accept": [
              "<int>"
            ],
            "explain": "Future<int> menyatakan nilai int nanti."
          }
        ]
      }
    ]
  }
];

export { CONTENT_DART };
