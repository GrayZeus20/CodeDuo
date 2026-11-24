/* CodeDuo — blok konten: topik "Ruby" (dipisah dari Blok Web).
 * 1 topik (ruby) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_RUBY = [
  {
    "id": "ruby",
    "name": "Ruby",
    "icon": "💎",
    "color": "#cc342d",
    "desc": "Bahasa dinamis yang ekspresif",
    "lessons": [
      {
        "id": "ruby-1",
        "level": "Dasar",
        "title": "Pengenalan Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Ruby adalah bahasa pemrograman",
            "options": [
              "hanya untuk CSS",
              "dinamis dan berorientasi objek",
              "statis tanpa objek",
              "khusus SQL"
            ],
            "a": 1,
            "explain": "Ruby adalah bahasa dinamis berorientasi objek."
          },
          {
            "type": "mc",
            "q": "Ruby dibuat oleh",
            "options": [
              "Yukihiro Matsumoto (Matz)",
              "Brendan Eich",
              "Guido van Rossum",
              "Rasmus Lerdorf"
            ],
            "a": 0,
            "explain": "Matz menciptakan Ruby."
          },
          {
            "type": "mc",
            "q": "Menjalankan berkas app.rb memakai",
            "options": [
              "node app.rb",
              "php app.rb",
              "ruby app.rb",
              "run app.rb"
            ],
            "a": 2,
            "explain": "Perintah ruby menjalankan interpreter Ruby."
          },
          {
            "type": "mc",
            "q": "Interpreter Ruby memulai REPL dengan perintah",
            "options": [
              "rubysh",
              "irb",
              "rep",
              "irb.sh"
            ],
            "a": 1,
            "explain": "irb adalah REPL bawaan Ruby."
          },
          {
            "type": "mc",
            "q": "Ruby on Rails adalah",
            "options": [
              "framework web untuk Ruby",
              "bahasa baru",
              "database",
              "CSS engine"
            ],
            "a": 0,
            "explain": "Rails adalah framework web berbasis Ruby."
          },
          {
            "type": "mc",
            "q": "Gem adalah",
            "options": [
              "folder CSS",
              "route web",
              "paket/library Ruby",
              "tabel"
            ],
            "a": 2,
            "explain": "Gem adalah paket kode Ruby."
          },
          {
            "type": "mc",
            "q": "Manajer dependency Ruby umumnya memakai",
            "options": [
              "npm",
              "Bundler",
              "pip",
              "composer"
            ],
            "a": 1,
            "explain": "Bundler mengelola gem proyek."
          },
          {
            "type": "mc",
            "q": "Semua data di Ruby adalah",
            "options": [
              "hanya primitif",
              "file",
              "objek",
              "huruf kapital"
            ],
            "a": 2,
            "explain": "Ruby murni berorientasi objek; hampir semua adalah objek."
          },
          {
            "type": "mc",
            "q": "Komentar satu baris Ruby memakai",
            "options": [
              "//",
              "--",
              "/* */",
              "#"
            ],
            "a": 3,
            "explain": "Ruby memakai # untuk komentar satu baris."
          },
          {
            "type": "mc",
            "q": "Berkas kode Ruby berakhiran",
            "options": [
              ".ruby",
              ".rb",
              ".ru",
              ".r"
            ],
            "a": 1,
            "explain": "Berkas Ruby berekstensi .rb."
          }
        ]
      },
      {
        "id": "ruby-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Variabel lokal di Ruby diawali",
            "options": [
              "@",
              "$",
              "huruf kecil atau _",
              "huruf kapital"
            ],
            "a": 2,
            "explain": "Variabel lokal diawali huruf kecil atau garis bawah."
          },
          {
            "type": "mc",
            "q": "Variabel instance diawali",
            "options": [
              "@@",
              "$",
              "&",
              "@"
            ],
            "a": 3,
            "explain": "@ menandai variabel instance."
          },
          {
            "type": "mc",
            "q": "Variabel kelas diawali",
            "options": [
              "@",
              "$",
              "@@",
              "#"
            ],
            "a": 2,
            "explain": "@@ menandai variabel kelas."
          },
          {
            "type": "mc",
            "q": "Variabel global diawali",
            "options": [
              "@",
              "$",
              "_",
              "::"
            ],
            "a": 1,
            "explain": "$ menandai variabel global."
          },
          {
            "type": "mc",
            "q": "Konstanta di Ruby diawali",
            "options": [
              "garis bawah",
              "huruf kapital",
              "@",
              "$"
            ],
            "a": 1,
            "explain": "Konstanta diawali huruf kapital."
          },
          {
            "type": "mc",
            "q": "Tipe teks di Ruby adalah",
            "options": [
              "String",
              "Text",
              "Char",
              "Str"
            ],
            "a": 0,
            "explain": "Ruby memakai class String untuk teks."
          },
          {
            "type": "mc",
            "q": "Bilangan bulat di Ruby adalah",
            "options": [
              "Integer",
              "Int",
              "Number",
              "Whole"
            ],
            "a": 0,
            "explain": "Ruby memakai Integer untuk bilangan bulat."
          },
          {
            "type": "mc",
            "q": "Nilai benar/salah memakai",
            "options": [
              "true dan false",
              "True dan False wajib",
              "yes/no",
              "1/0"
            ],
            "a": 0,
            "explain": "Ruby memakai true/false (huruf kecil)."
          },
          {
            "type": "mc",
            "q": "Nilai kosong Ruby adalah",
            "options": [
              "nil",
              "null",
              "None",
              "undefined"
            ],
            "a": 0,
            "explain": "Ruby memakai nil."
          },
          {
            "type": "mc",
            "q": "Deklarasi variabel lokal yang benar",
            "options": [
              "let nama = \"Budi\"",
              "var nama",
              "nama = \"Budi\"",
              "String nama"
            ],
            "a": 2,
            "explain": "Ruby tidak memerlukan kata kunci; cukup nama = nilai."
          }
        ]
      },
      {
        "id": "ruby-3",
        "level": "Dasar",
        "title": "String & Interpolasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Interpolasi string memakai",
            "options": [
              "${}",
              "#{}",
              "<% %>",
              "{{ }}"
            ],
            "a": 1,
            "explain": "Ruby memakai #{...} untuk interpolasi."
          },
          {
            "type": "mc",
            "q": "String dengan interpolasi ditulis dengan kutip",
            "options": [
              "tunggal ('...')",
              "backtick",
              "ganda (\"...\")",
              "tanpa kutip"
            ],
            "a": 2,
            "explain": "String kutip ganda mendukung interpolasi."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "&&",
              "+",
              "concat()",
              "."
            ],
            "a": 1,
            "explain": "Operator + menggabungkan string."
          },
          {
            "type": "mc",
            "q": "Panjang string didapat dengan",
            "options": [
              ".len",
              ".count",
              ".chars_total",
              ".length atau .size"
            ],
            "a": 3,
            "explain": ".length mengembalikan panjang string."
          },
          {
            "type": "mc",
            "q": "Mengubah ke huruf besar memakai",
            "options": [
              ".upper",
              ".toUpper",
              ".upcase",
              ".big"
            ],
            "a": 2,
            "explain": ".upcase mengubah ke huruf besar."
          },
          {
            "type": "mc",
            "q": "Memotong spasi di ujung memakai",
            "options": [
              ".trim",
              ".cut",
              ".strip",
              ".clean"
            ],
            "a": 2,
            "explain": ".strip menghapus spasi di awal/akhir."
          },
          {
            "type": "mc",
            "q": "Mengganti substring memakai",
            "options": [
              ".replace",
              ".gsub( pola, ganti )",
              ".sub_all",
              ".swap"
            ],
            "a": 1,
            "explain": ".gsub mengganti semua kemunculan."
          },
          {
            "type": "mc",
            "q": "Membagi string menjadi array memakai",
            "options": [
              ".split(delim)",
              ".explode",
              ".divide",
              ".chunks"
            ],
            "a": 0,
            "explain": ".split memecah string berdasarkan pemisah."
          },
          {
            "type": "mc",
            "q": "Simbol di Ruby ditulis",
            "options": [
              ":nama",
              "@nama",
              "#nama",
              "$nama"
            ],
            "a": 0,
            "explain": "Simbol diawali titik dua, mis. :nama."
          },
          {
            "type": "mc",
            "q": "Symbol berbeda dari String karena",
            "options": [
              "tidak bisa dipakai",
              "immutable dan ringan dipakai sebagai key",
              "berupa angka",
              "file"
            ],
            "a": 1,
            "explain": "Symbol cocok untuk key karena ringkas dan immutable."
          }
        ]
      },
      {
        "id": "ruby-4",
        "level": "Dasar",
        "title": "Array & Hash",
        "exercises": [
          {
            "type": "mc",
            "q": "Array di Ruby ditulis",
            "options": [
              "{1, 2, 3}",
              "[1, 2, 3]",
              "(1, 2, 3)",
              "<1, 2, 3>"
            ],
            "a": 1,
            "explain": "Array literal memakai kurung siku."
          },
          {
            "type": "mc",
            "q": "Hash menyimpan",
            "options": [
              "hanya angka",
              "pasangan key-value",
              "hanya string",
              "file"
            ],
            "a": 1,
            "explain": "Hash adalah koleksi pasangan kunci-nilai."
          },
          {
            "type": "mc",
            "q": "Hash literal contohnya",
            "options": [
              "[nama: \"Budi\"]",
              "(nama: \"Budi\")",
              "<nama: \"Budi\">",
              "{ nama: \"Budi\" }"
            ],
            "a": 3,
            "explain": "Hash memakai kurung kurawal dengan pasangan key-value."
          },
          {
            "type": "mc",
            "q": "Mengakses elemen array index 0 memakai",
            "options": [
              "arr.first()",
              "arr[0]",
              "arr.get(0)",
              "arr.at0"
            ],
            "a": 1,
            "explain": "arr[0] mengakses elemen indeks 0 (first juga)."
          },
          {
            "type": "mc",
            "q": "Menambah elemen ke array memakai",
            "options": [
              "arr.add",
              "arr.insert_end",
              "arr << nilai atau arr.push",
              "arr +="
            ],
            "a": 2,
            "explain": "<</push menambah elemen di akhir."
          },
          {
            "type": "mc",
            "q": "Mengambil key pada hash memakai",
            "options": [
              "hash[:nama]",
              "hash.nama[]",
              "hash->nama",
              "hash.get(:nama)"
            ],
            "a": 0,
            "explain": "Hash diakses dengan hash[:key]."
          },
          {
            "type": "mc",
            "q": "Jumlah elemen array memakai",
            "options": [
              ".count_all",
              ".length atau .size",
              ".num",
              ".total"
            ],
            "a": 1,
            "explain": "length/size mengembalikan jumlah elemen."
          },
          {
            "type": "mc",
            "q": "Iterasi array memakai",
            "options": [
              ".loopEach",
              ".each { |x| ... }",
              ".forin(x)",
              ".iter(x)"
            ],
            "a": 1,
            "explain": "each mengiterasi tiap elemen."
          },
          {
            "type": "mc",
            "q": "Mengubah tiap elemen array memakai",
            "options": [
              ".transform_all",
              ".map",
              ".change",
              ".each_return"
            ],
            "a": 1,
            "explain": "map menghasilkan array baru hasil transformasi."
          },
          {
            "type": "mc",
            "q": "Menyaring array memakai",
            "options": [
              ".filter_all",
              ".select",
              ".keep_if_only",
              ".pick"
            ],
            "a": 1,
            "explain": "select menyaring elemen sesuai kondisi."
          }
        ]
      },
      {
        "id": "ruby-5",
        "level": "Dasar",
        "title": "Kondisi & Perulangan",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan yang benar di Ruby",
            "options": [
              "if (kondisi) { }",
              "if kondisi then endif",
              "if: kondisi",
              "if kondisi ... end"
            ],
            "a": 3,
            "explain": "Ruby memakai if ... end."
          },
          {
            "type": "mc",
            "q": "Else-if di Ruby ditulis",
            "options": [
              "elsif",
              "elseif",
              "else if wajib",
              "elif"
            ],
            "a": 0,
            "explain": "Ruby memakai elsif."
          },
          {
            "type": "mc",
            "q": "Unless adalah kebalikan dari",
            "options": [
              "if",
              "while",
              "case",
              "loop"
            ],
            "a": 0,
            "explain": "unless menjalankan blok bila kondisi salah."
          },
          {
            "type": "mc",
            "q": "Percabangan multi-nilai memakai",
            "options": [
              "switch ... case",
              "case ... when",
              "match ... with",
              "select ... case"
            ],
            "a": 1,
            "explain": "Ruby memakai case/when."
          },
          {
            "type": "mc",
            "q": "Perulangan while ditulis",
            "options": [
              "while(kondisi){}",
              "while kondisi ... end",
              "while kondisi do end",
              "for while"
            ],
            "a": 1,
            "explain": "Ruby mendukung while ... end."
          },
          {
            "type": "mc",
            "q": "Iterasi angka rentang memakai",
            "options": [
              "for 1..5",
              "(1..5).each",
              "range.each(1,5)",
              "times(1..5)"
            ],
            "a": 1,
            "explain": "Range dengan each mengiterasi angka."
          },
          {
            "type": "mc",
            "q": "Ternary di Ruby ditulis",
            "options": [
              "kondisi ? a : b : c",
              "if(kondisi, a, b)",
              "kondisi ? a : b",
              "kondisi -> a b"
            ],
            "a": 2,
            "explain": "Ruby memakai ternary kondisi ? a : b."
          },
          {
            "type": "mc",
            "q": "Nilai balik if pada Ruby adalah",
            "options": [
              "selalu true",
              "selalu nil",
              "nilai ekspresi terakhir yang dieksekusi",
              "tidak ada"
            ],
            "a": 2,
            "explain": "Ekspresi di Ruby mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Modifier if di akhir baris",
            "options": [
              "sah, mis. puts \"x\" if kondisi",
              "tidak sah",
              "membuat error",
              "hanya di Rails"
            ],
            "a": 0,
            "explain": "Ruby mendukung modifier if."
          },
          {
            "type": "mc",
            "q": "Loop tak hingga biasanya memakai",
            "options": [
              "for ... forever",
              "while true selalu salah",
              "loop do ... end",
              "repeat"
            ],
            "a": 2,
            "explain": "loop do ... end adalah idiom loop tak hingga."
          }
        ]
      },
      {
        "id": "ruby-6",
        "level": "Dasar",
        "title": "Method & Block",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan method memakai",
            "options": [
              "def nama ... end",
              "function nama()",
              "fn nama",
              "method nama"
            ],
            "a": 0,
            "explain": "Method Ruby didefinisikan dengan def ... end."
          },
          {
            "type": "mc",
            "q": "Nilai balik method adalah",
            "options": [
              "ekspresi terakhir (atau return)",
              "selalu nil",
              "selalu string",
              "tidak ada"
            ],
            "a": 0,
            "explain": "Ruby mengembalikan nilai ekspresi terakhir."
          },
          {
            "type": "mc",
            "q": "Block dikirim ke method memakai",
            "options": [
              "function()",
              "{ |x| ... } atau do |x| ... end",
              "=> x",
              "[x =>]"
            ],
            "a": 1,
            "explain": "Block dibungkus {} atau do...end."
          },
          {
            "type": "mc",
            "q": "Method yang menerima block dapat memanggilnya dengan",
            "options": [
              "call_block",
              "yield",
              "invoke",
              "run"
            ],
            "a": 1,
            "explain": "yield menjalankan block yang diberikan."
          },
          {
            "type": "mc",
            "q": "Memeriksa apakah block diberikan memakai",
            "options": [
              "has_block?",
              "block?",
              "block_given?",
              "yield?"
            ],
            "a": 2,
            "explain": "block_given? memeriksa keberadaan block."
          },
          {
            "type": "mc",
            "q": "Lambda dan proc adalah",
            "options": [
              "objek yang membungkus blok kode",
              "variabel global",
              "file",
              "Potongan kode yang dapat diberikan ke metode"
            ],
            "a": 0,
            "explain": "Lambda/proc membungkus kode yang bisa dipanggil."
          },
          {
            "type": "mc",
            "q": "Method dengan argumen opsional memakai",
            "options": [
              "optional_then",
              "maybe()",
              "default value",
              "nil wajib"
            ],
            "a": 2,
            "explain": "Argumen dengan nilai default menjadi opsional."
          },
          {
            "type": "mc",
            "q": "Splat operator pada argumen memakai",
            "options": [
              "...args",
              "&args",
              "*args",
              "%args"
            ],
            "a": 2,
            "explain": "*args menampung argumen variadik."
          },
          {
            "type": "mc",
            "q": "Method dengan ? di akhir nama menunjukkan",
            "options": [
              "error",
              "privat",
              "statis",
              "predikat (mengembalikan boolean)"
            ],
            "a": 3,
            "explain": "Konvensi ? menandai method predikat."
          },
          {
            "type": "mc",
            "q": "Method dengan ! di akhir nama biasanya",
            "options": [
              "lebih lambat",
              "memutasi objek atau versi berisiko",
              "statis",
              "privat"
            ],
            "a": 1,
            "explain": "Konvensi ! menandai versi mutasi/berbahaya."
          }
        ]
      },
      {
        "id": "ruby-7",
        "level": "Dasar",
        "title": "Class & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan kelas memakai",
            "options": [
              "def Nama",
              "class Nama ... end",
              "struct Nama",
              "object Nama"
            ],
            "a": 1,
            "explain": "Kelas didefinisikan dengan class ... end."
          },
          {
            "type": "mc",
            "q": "Membuat objek dari kelas memakai",
            "options": [
              "Nama.new",
              "new Nama",
              "Nama()",
              "Nama.create"
            ],
            "a": 0,
            "explain": ".new membuat instance."
          },
          {
            "type": "mc",
            "q": "Inisialisasi objek memakai method",
            "options": [
              "constructor",
              "init",
              "setup",
              "initialize"
            ],
            "a": 3,
            "explain": "initialize dipanggil oleh .new."
          },
          {
            "type": "mc",
            "q": "Variabel instance di dalam method memakai",
            "options": [
              "@@nama",
              "@nama",
              "$nama",
              "nama"
            ],
            "a": 1,
            "explain": "@nama adalah variabel instance."
          },
          {
            "type": "mc",
            "q": "Method instance dapat diakses publik secara default, kecuali",
            "options": [
              "selalu privat",
              "selalu statis",
              "diberi private/protected",
              "tanpa method"
            ],
            "a": 2,
            "explain": "Method bisa dibatasi dengan private/protected."
          },
          {
            "type": "mc",
            "q": "Atribut pembaca sederhana memakai",
            "options": [
              "getter",
              "read_attr",
              "prop_read",
              "attr_reader"
            ],
            "a": 3,
            "explain": "attr_reader membuat method getter."
          },
          {
            "type": "mc",
            "q": "Atribut penulis sederhana memakai",
            "options": [
              "setter",
              "write_attr",
              "attr_writer",
              "prop_write"
            ],
            "a": 2,
            "explain": "attr_writer membuat method setter."
          },
          {
            "type": "mc",
            "q": "Getter dan setter sekaligus memakai",
            "options": [
              "attr_both",
              "accessor",
              "attr_accessor",
              "attr_all"
            ],
            "a": 2,
            "explain": "attr_accessor membuat getter dan setter."
          },
          {
            "type": "mc",
            "q": "Mewarisi kelas memakai",
            "options": [
              "class Anak extends Induk",
              "class Anak < Induk",
              "class Anak: Induk",
              "class Anak implements Induk"
            ],
            "a": 1,
            "explain": "Ruby memakai < untuk pewarisan."
          },
          {
            "type": "mc",
            "q": "Memanggil method induk yang ditimpa memakai",
            "options": [
              "parent",
              "base",
              "super",
              "override"
            ],
            "a": 2,
            "explain": "super memanggil implementasi induk."
          }
        ]
      },
      {
        "id": "ruby-8",
        "level": "Dasar",
        "title": "Module & Mixin",
        "exercises": [
          {
            "type": "mc",
            "q": "Module di Ruby didefinisikan dengan",
            "options": [
              "module Nama ... end",
              "class Nama module",
              "def module Nama",
              "mixin Nama"
            ],
            "a": 0,
            "explain": "Module memakai module ... end."
          },
          {
            "type": "mc",
            "q": "Menyertakan module ke kelas memakai",
            "options": [
              "import",
              "include",
              "require_class",
              "extend_only"
            ],
            "a": 1,
            "explain": "include menambahkan method module sebagai method instance."
          },
          {
            "type": "mc",
            "q": "Menambahkan method module sebagai method kelas memakai",
            "options": [
              "include",
              "import",
              "extend",
              "mixin"
            ],
            "a": 2,
            "explain": "extend menambahkan method sebagai method kelas."
          },
          {
            "type": "mc",
            "q": "Module berguna untuk",
            "options": [
              "namespace dan mixin",
              "database",
              "loop do ... end",
              "class Anak < Induk"
            ],
            "a": 0,
            "explain": "Module mengelompokkan kode dan membagikan perilaku."
          },
          {
            "type": "mc",
            "q": "Namespace pada Ruby memakai",
            "options": [
              ".",
              "::",
              "/",
              "->"
            ],
            "a": 1,
            "explain": "Operator :: menandai namespace."
          },
          {
            "type": "mc",
            "q": "Memuat library eksternal memakai",
            "options": [
              "import",
              "require",
              "using",
              "load_lib"
            ],
            "a": 1,
            "explain": "require memuat berkas/library."
          },
          {
            "type": "mc",
            "q": "Perbedaan require dan load adalah",
            "options": [
              "sama saja",
              "require memuat sekali, load tiap pemanggilan",
              "load sekali",
              "require tiap waktu"
            ],
            "a": 1,
            "explain": "require sekali; load berulang."
          },
          {
            "type": "mc",
            "q": "Mixin memungkinkan",
            "options": [
              "menghapus kelas",
              "berbagi method antar kelas tanpa pewarisan ganda",
              "objek yang membungkus blok kode",
              "format(\"%d\", n) atau sprintf"
            ],
            "a": 1,
            "explain": "Mixin berbagi perilaku lewat module."
          },
          {
            "type": "mc",
            "q": "Nama module sebaiknya",
            "options": [
              "snake_case",
              "kebab-case",
              "lowercase",
              "CamelCase"
            ],
            "a": 3,
            "explain": "Konvensi Ruby memakai CamelCase untuk module/kelas."
          },
          {
            "type": "mc",
            "q": "Module dapat berisi",
            "options": [
              "method, konstanta, dan kelas bersarang",
              "hanya method",
              "hanya kelas",
              "hanya konstanta"
            ],
            "a": 0,
            "explain": "Module dapat memuat berbagai definisi."
          }
        ]
      },
      {
        "id": "ruby-9",
        "level": "Dasar",
        "title": "Error Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Menangani error memakai",
            "options": [
              "begin ... rescue ... end",
              "try ... catch",
              "except",
              "catch_only"
            ],
            "a": 0,
            "explain": "Ruby memakai begin/rescue."
          },
          {
            "type": "mc",
            "q": "Exception adalah",
            "options": [
              "string biasa",
              "method",
              "objek yang mewakili error",
              "file"
            ],
            "a": 2,
            "explain": "Exception adalah objek error."
          },
          {
            "type": "mc",
            "q": "Melempar exception memakai",
            "options": [
              "throw_error",
              "error",
              "raise",
              "panic"
            ],
            "a": 2,
            "explain": "raise melempar exception."
          },
          {
            "type": "mc",
            "q": "Blok yang selalu dijalankan memakai",
            "options": [
              "finally",
              "always",
              "ensure",
              "cleanup"
            ],
            "a": 2,
            "explain": "ensure selalu dijalankan."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe tertentu memakai",
            "options": [
              "catch TipeError",
              "hook TipeError",
              "on TipeError",
              "rescue TipeError"
            ],
            "a": 3,
            "explain": "rescue dapat menyebut tipe exception."
          },
          {
            "type": "mc",
            "q": "Menaikkan ulang exception memakai",
            "options": [
              "rethrow selalu",
              "throw",
              "again",
              "raise"
            ],
            "a": 3,
            "explain": "raise ulang meneruskan exception."
          },
          {
            "type": "mc",
            "q": "Exception kustom dibuat dengan",
            "options": [
              "def E",
              "exception E",
              "raise E.new",
              "class E < StandardError; end"
            ],
            "a": 3,
            "explain": "Exception kustom mewarisi StandardError."
          },
          {
            "type": "mc",
            "q": "Pesan exception diakses dengan",
            "options": [
              ".msg",
              ".text",
              ".message",
              ".info"
            ],
            "a": 2,
            "explain": "message mengembalikan pesan exception."
          },
          {
            "type": "mc",
            "q": "Jangan gunakan rescue kosong karena",
            "options": [
              "mempercepat",
              "before(:each)",
              "heredoc",
              "menyembunyikan error"
            ],
            "a": 3,
            "explain": "Rescue kosong menyembunyikan masalah."
          },
          {
            "type": "mc",
            "q": "Menangani error pada blok memakai",
            "options": [
              "try/catch",
              "begin/rescue atau method modifier rescue",
              "class Anak < Induk",
              "objek yang mewakili error"
            ],
            "a": 1,
            "explain": "Ruby mendukung begin/rescue dan modifier rescue."
          }
        ]
      },
      {
        "id": "ruby-10",
        "level": "Dasar",
        "title": "Input & Output",
        "exercises": [
          {
            "type": "mc",
            "q": "Menampilkan output ke layar memakai",
            "options": [
              "print_line_only",
              "echo",
              "puts",
              "console"
            ],
            "a": 2,
            "explain": "puts mencetak dengan baris baru."
          },
          {
            "type": "mc",
            "q": "Membaca input dari pengguna memakai",
            "options": [
              "input",
              "read",
              "scan",
              "gets"
            ],
            "a": 3,
            "explain": "gets membaca satu baris input."
          },
          {
            "type": "mc",
            "q": "Menghapus newline hasil gets memakai",
            "options": [
              ".chomp",
              ".strip_newline",
              ".trim_all",
              ".cut"
            ],
            "a": 0,
            "explain": "chomp menghapus newline di akhir."
          },
          {
            "type": "mc",
            "q": "print berbeda dari puts karena",
            "options": [
              "print lebih lambat",
              "print tidak menambah baris baru",
              "print ke berkas",
              "sama saja"
            ],
            "a": 1,
            "explain": "print tidak menambahkan newline."
          },
          {
            "type": "mc",
            "q": "Format string memakai",
            "options": [
              "printf_only",
              "format(\"%d\", n) atau sprintf",
              "json",
              "to_f"
            ],
            "a": 1,
            "explain": "format/sprintf memformat nilai."
          },
          {
            "type": "mc",
            "q": "Mengubah input string ke integer memakai",
            "options": [
              ".to_int",
              ".to_i",
              ".parseInt",
              ".int"
            ],
            "a": 1,
            "explain": "to_i mengonversi ke integer."
          },
          {
            "type": "mc",
            "q": "Mengubah ke float memakai",
            "options": [
              ".to_float",
              ".float",
              ".to_f",
              ".parseFloat"
            ],
            "a": 2,
            "explain": "to_f mengonversi ke float."
          },
          {
            "type": "mc",
            "q": "Menulis output ke stderr memakai",
            "options": [
              "puts",
              "print",
              "log",
              "warn"
            ],
            "a": 3,
            "explain": "warn menulis ke stderr."
          },
          {
            "type": "mc",
            "q": "Menampilkan tanpa newline dan tanpa spasi memakai",
            "options": [
              "puts",
              "p",
              "pp",
              "print"
            ],
            "a": 3,
            "explain": "print tidak menambah pemisah."
          },
          {
            "type": "mc",
            "q": "Kode keluar program memakai",
            "options": [
              "stop",
              "end_program",
              "exit",
              "halt_now"
            ],
            "a": 2,
            "explain": "exit menghentikan program dengan kode keluar."
          }
        ]
      },
      {
        "id": "ruby-11",
        "level": "Menengah",
        "title": "Enumerable Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Menjumlahkan nilai array memakai",
            "options": [
              ".total",
              ".add_all",
              ".sum",
              ".plus"
            ],
            "a": 2,
            "explain": "sum menjumlahkan elemen."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan elemen memakai",
            "options": [
              ".group_by",
              ".split_by",
              ".cluster",
              ".keys"
            ],
            "a": 0,
            "explain": "group_by mengelompokkan berdasarkan hasil blok."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string array memakai",
            "options": [
              ".concat_all",
              ".merge",
              ".glue",
              ".join(\", \")"
            ],
            "a": 3,
            "explain": "join menggabungkan dengan pemisah."
          },
          {
            "type": "mc",
            "q": "Mencari elemen pertama yang cocok memakai",
            "options": [
              ".select_first",
              ".find",
              ".pick",
              ".where"
            ],
            "a": 1,
            "explain": "find mengembalikan elemen pertama yang memenuhi kondisi."
          },
          {
            "type": "mc",
            "q": "Memeriksa semua elemen memenuhi kondisi memakai",
            "options": [
              ".all?",
              ".every?",
              ".all_true",
              ".each?"
            ],
            "a": 0,
            "explain": "all? memeriksa semua elemen."
          },
          {
            "type": "mc",
            "q": "Memeriksa ada elemen memenuhi kondisi memakai",
            "options": [
              ".some?",
              ".exists?",
              ".any?",
              ".has?"
            ],
            "a": 2,
            "explain": "any? memeriksa keberadaan elemen yang cocok."
          },
          {
            "type": "mc",
            "q": "Mengurutkan array asc memakai",
            "options": [
              ".sort",
              ".order",
              ".arrange",
              ".sorted"
            ],
            "a": 0,
            "explain": "sort mengurutkan array."
          },
          {
            "type": "mc",
            "q": "Mendapatkan elemen unik memakai",
            "options": [
              ".unique",
              ".uniq",
              ".distinct",
              ".single"
            ],
            "a": 1,
            "explain": "uniq menghapus duplikat."
          },
          {
            "type": "mc",
            "q": "Mereduksi array jadi satu nilai memakai",
            "options": [
              ".fold_all",
              ".reduce",
              ".collapse",
              ".combine"
            ],
            "a": 1,
            "explain": "reduce mengakumulasi nilai."
          },
          {
            "type": "mc",
            "q": "Membuat hash dari array key-value memakai",
            "options": [
              ".to_hash_all",
              ".as_hash",
              ".hashify",
              ".to_h"
            ],
            "a": 3,
            "explain": "to_h mengubah pasangan menjadi hash."
          }
        ]
      },
      {
        "id": "ruby-12",
        "level": "Menengah",
        "title": "Block, Proc & Lambda",
        "exercises": [
          {
            "type": "mc",
            "q": "Proc dibuat dengan",
            "options": [
              "Proc()",
              "new Proc",
              "lambda_proc",
              "Proc.new {} atau proc {}"
            ],
            "a": 3,
            "explain": "Proc bisa dibuat dengan Proc.new/proc."
          },
          {
            "type": "mc",
            "q": "Lambda dibuat dengan",
            "options": [
              "lambda {} atau -> {}",
              "Lambda.new",
              "fn {}",
              "def lambda"
            ],
            "a": 0,
            "explain": "Lambda memakai lambda/->."
          },
          {
            "type": "mc",
            "q": "Perbedaan lambda dan proc soal argumen",
            "options": [
              "sama saja",
              "proc ketat",
              "lambda ketat jumlah argumen, proc longgar",
              "tidak ada perbedaan"
            ],
            "a": 2,
            "explain": "Lambda memeriksa jumlah argumen."
          },
          {
            "type": "mc",
            "q": "Perbedaan lambda dan proc soal return",
            "options": [
              "sama saja",
              "keduanya keluar program",
              "return di lambda kembali dari lambda, di proc dari method",
              "tidak bisa return"
            ],
            "a": 2,
            "explain": "Return pada proc keluar dari method pemanggil."
          },
          {
            "type": "mc",
            "q": "Block implicit dapat diubah ke proc memakai",
            "options": [
              "proc(&)",
              "to_proc()",
              "&block",
              "block.toProc"
            ],
            "a": 2,
            "explain": "Parameter &block menangkap block sebagai proc."
          },
          {
            "type": "mc",
            "q": "Mengirim proc sebagai block memakai",
            "options": [
              "@obj",
              "$obj",
              "&obj",
              "%obj"
            ],
            "a": 2,
            "explain": "Operator & menandai proc sebagai block."
          },
          {
            "type": "mc",
            "q": "Memanggil proc memakai",
            "options": [
              ".run",
              ".exec",
              ".call",
              ".invoke"
            ],
            "a": 2,
            "explain": "call menjalankan proc/lambda."
          },
          {
            "type": "mc",
            "q": "yield mengembalikan",
            "options": [
              "nilai dari block",
              "selalu nil",
              "true",
              "proc"
            ],
            "a": 0,
            "explain": "yield mengembalikan nilai blok."
          },
          {
            "type": "mc",
            "q": "Block dengan parameter ditulis",
            "options": [
              "{ |a, b| ... }",
              "{ a, b => }",
              "(a, b) { }",
              "|a, b| { }"
            ],
            "a": 0,
            "explain": "Parameter blok dibungkus | |."
          },
          {
            "type": "mc",
            "q": "Symbol-to-proc memungkinkan",
            "options": [
              "[1,2].map(:to_s)",
              "[1,2].call(:to_s)",
              "[1,2].map(&:to_s)",
              "[1,2].proc(:to_s)"
            ],
            "a": 2,
            "explain": "&:method mengubah symbol menjadi proc."
          }
        ]
      },
      {
        "id": "ruby-13",
        "level": "Menengah",
        "title": "Metaprogramming Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Metaprogramming berarti",
            "options": [
              "menulis CSS",
              "membuat route",
              "array grup tangkapan",
              "menulis kode yang memodifikasi/perluas kode saat runtime"
            ],
            "a": 3,
            "explain": "Ruby sangat mendukung metaprogramming."
          },
          {
            "type": "mc",
            "q": "method_missing dipakai untuk",
            "options": [
              "menghapus kelas",
              ".gsub( pola, ganti )",
              "kondisi ? a : b",
              "menangani panggilan method yang tidak ada"
            ],
            "a": 3,
            "explain": "method_missing menangkap pemanggilan method tak dikenal."
          },
          {
            "type": "mc",
            "q": "define_method membuat method secara",
            "options": [
              "statis",
              ".any?",
              "dinamis",
              ".call"
            ],
            "a": 2,
            "explain": "define_method mendefinisikan method saat runtime."
          },
          {
            "type": "mc",
            "q": "send memungkinkan memanggil method secara",
            "options": [
              "hanya publik",
              "{ nama: \"Budi\" }",
              "sah, mis. puts \"x\" if kondisi",
              "dinamis termasuk private"
            ],
            "a": 3,
            "explain": "send memanggil method berdasarkan nama."
          },
          {
            "type": "mc",
            "q": "respond_to? memeriksa",
            "options": [
              "ukuran objek",
              "menjalankan pekerjaan bersamaan dalam proses",
              "menyusun objek daripada mewarisi dalam",
              "apakah objek punya method"
            ],
            "a": 3,
            "explain": "respond_to? memeriksa ketersediaan method."
          },
          {
            "type": "mc",
            "q": "instance_variable_get membaca",
            "options": [
              "konstanta",
              "variabel instance",
              "\"a\"..\"z\"",
              ".gsub(/pola/, ganti)"
            ],
            "a": 1,
            "explain": "instance_variable_get mengambil nilai variabel instance."
          },
          {
            "type": "mc",
            "q": "Membuka ulang kelas untuk menambah method memakai",
            "options": [
              "tidak mungkin",
              "reopening class",
              "tidak bocor",
              "sanitasi/validasi path"
            ],
            "a": 1,
            "explain": "Ruby mengizinkan membuka ulang kelas."
          },
          {
            "type": "mc",
            "q": "Refinements dipakai untuk",
            "options": [
              "while kondisi ... end",
              "routing",
              "{ |x| ... } atau do |x| ... end",
              "modifikasi scoped tanpa efek global"
            ],
            "a": 3,
            "explain": "Refinements membatasi perubahan pada cakupan tertentu."
          },
          {
            "type": "mc",
            "q": "Membuat DSL di Ruby umumnya memakai",
            "options": [
              "membuat thread berlebihan",
              "method module mendahului kelas",
              "backtrace dan konteks",
              "block dan metaprogramming"
            ],
            "a": 3,
            "explain": "DSL dibangun dari block dan metaprogramming."
          },
          {
            "type": "mc",
            "q": "Metaprogramming berlebihan berisiko",
            "options": [
              "selalu cepat",
              "nilai ekspresi terakhir yang dieksekusi",
              "memutasi objek atau versi berisiko",
              "kode sulit dipahami dan di-debug"
            ],
            "a": 3,
            "explain": "Gunakan metaprogramming dengan bijak."
          }
        ]
      },
      {
        "id": "ruby-14",
        "level": "Menengah",
        "title": "File & IO",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca berkas memakai",
            "options": [
              "File.open_read",
              "IO.readFile",
              "File.read(\"nama.txt\")",
              "File.load"
            ],
            "a": 2,
            "explain": "File.read membaca isi berkas."
          },
          {
            "type": "mc",
            "q": "Menulis berkas memakai",
            "options": [
              "File.write(\"a.txt\", isi)",
              "File.put_all",
              "IO.writeFile",
              "File.save"
            ],
            "a": 0,
            "explain": "File.write menulis isi berkas."
          },
          {
            "type": "mc",
            "q": "Membuka berkas dengan blok memakai",
            "options": [
              "File.with(path)",
              "IO.open_block",
              "File.use",
              "File.open(path) { |f| ... }"
            ],
            "a": 3,
            "explain": "Blok memastikan berkas ditutup otomatis."
          },
          {
            "type": "mc",
            "q": "Mode menambah isi berkas memakai",
            "options": [
              "\"w\"",
              "\"r\"",
              "\"x\"",
              "\"a\""
            ],
            "a": 3,
            "explain": "Mode a menambahkan di akhir."
          },
          {
            "type": "mc",
            "q": "Membaca baris per baris memakai",
            "options": [
              "File.lines_all",
              "File.foreach",
              "IO.per_line",
              "File.each_line_only"
            ],
            "a": 1,
            "explain": "File.foreach mengiterasi baris."
          },
          {
            "type": "mc",
            "q": "Direktori kerja saat ini memakai",
            "options": [
              "Dir.current_dir",
              "Dir.here",
              "Dir.pwd",
              "Dir.path"
            ],
            "a": 2,
            "explain": "Dir.pwd mengembalikan direktori kerja."
          },
          {
            "type": "mc",
            "q": "Memeriksa berkas ada memakai",
            "options": [
              "File.has?",
              "File.exists_only",
              "File.exist?(path)",
              "IO.file?"
            ],
            "a": 2,
            "explain": "File.exist? memeriksa keberadaan berkas."
          },
          {
            "type": "mc",
            "q": "Menghapus berkas memakai",
            "options": [
              "File.remove",
              "File.delete(path)",
              "File.drop",
              "IO.unlink"
            ],
            "a": 1,
            "explain": "File.delete menghapus berkas."
          },
          {
            "type": "mc",
            "q": "Membuat direktori memakai",
            "options": [
              "Dir.mkdir(path)",
              "Dir.create",
              "Dir.new_dir",
              "Dir.make"
            ],
            "a": 0,
            "explain": "Dir.mkdir membuat direktori."
          },
          {
            "type": "mc",
            "q": "Menangani IO error penting karena",
            "options": [
              "berkas bisa tidak ada/tanpa izin",
              "selalu berhasil",
              "lambda ketat jumlah argumen, proc longgar",
              "apakah objek punya method"
            ],
            "a": 0,
            "explain": "Operasi IO bisa gagal sehingga perlu penanganan."
          }
        ]
      },
      {
        "id": "ruby-15",
        "level": "Menengah",
        "title": "Testing Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test bawaan Ruby adalah",
            "options": [
              "Minitest",
              "Jest",
              "PHPUnit",
              "RSpec wajib"
            ],
            "a": 0,
            "explain": "Minitest disertakan di Ruby."
          },
          {
            "type": "mc",
            "q": "Framework test populer Ruby adalah",
            "options": [
              "Jest",
              "Vitest",
              "RSpec",
              "Composer"
            ],
            "a": 2,
            "explain": "RSpec populer untuk pengujian Ruby."
          },
          {
            "type": "mc",
            "q": "Perintah CLI untuk mengeksekusi seluruh berkas pengujian spesifikasi di Ruby adalah",
            "options": [
              "rspec",
              "test run",
              "ruby test",
              "rake spec:all"
            ],
            "a": 0,
            "explain": "rspec menjalankan test RSpec."
          },
          {
            "type": "mc",
            "q": "Assertion pada Minitest memakai",
            "options": [
              "assert_equal",
              "expect",
              "shouldBe",
              "check"
            ],
            "a": 0,
            "explain": "assert_equal membandingkan nilai."
          },
          {
            "type": "mc",
            "q": "Test double/mock berguna untuk",
            "options": [
              "mengganti dependensi saat test",
              "mengurangi mutasi dan alokasi",
              "terbaca dan terdokumentasi",
              "form mutasi web"
            ],
            "a": 0,
            "explain": "Mock menggantikan dependensi nyata."
          },
          {
            "type": "mc",
            "q": "Coverage test diukur dengan",
            "options": [
              "{ |a, b| ... }",
              "kode sulit dipahami dan di-debug",
              "bundle exec rake",
              "alat seperti SimpleCov"
            ],
            "a": 3,
            "explain": "SimpleCov mengukur cakupan test."
          },
          {
            "type": "mc",
            "q": "Test yang baik menguji",
            "options": [
              "perilaku yang diharapkan",
              "detail internal",
              "kompatibilitas klien lama",
              "mengeksekusi blok dalam konteks objek"
            ],
            "a": 0,
            "explain": "Test perilaku lebih tahan perubahan."
          },
          {
            "type": "mc",
            "q": "Setup yang dijalankan sebelum tiap test pada RSpec adalah",
            "options": [
              "setup()",
              "pre()",
              "before(:each)",
              "init()"
            ],
            "a": 2,
            "explain": "before(:each) menyiapkan state per test."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan test pada RSpec memakai",
            "options": [
              "groupBy",
              "section",
              "block",
              "describe/context"
            ],
            "a": 3,
            "explain": "describe/context mengelompokkan contoh."
          },
          {
            "type": "mc",
            "q": "Menjalankan test otomatis saat berkas berubah dapat memakai",
            "options": [
              "perilaku yang diharapkan",
              "perbandingan tiga arah",
              "awal dan akhir baris",
              "guard atau watcher"
            ],
            "a": 3,
            "explain": "Watcher menjalankan test saat perubahan."
          }
        ]
      },
      {
        "id": "ruby-16",
        "level": "Menengah",
        "title": "Gem & Bundler",
        "exercises": [
          {
            "type": "mc",
            "q": "Gemfile mendefinisikan",
            "options": [
              "attr_writer",
              "CamelCase",
              "dinamis",
              "dependency proyek"
            ],
            "a": 3,
            "explain": "Gemfile mencantumkan gem yang dibutuhkan."
          },
          {
            "type": "mc",
            "q": "Memasang gem memakai",
            "options": [
              "gem get",
              "npm i",
              "bundle install",
              "pip i"
            ],
            "a": 2,
            "explain": "bundle install memasang dependency."
          },
          {
            "type": "mc",
            "q": "Berkas lock dependency adalah",
            "options": [
              "Gemfile.pin",
              "Gemfile.lock",
              "gems.lock",
              "lockfile.json"
            ],
            "a": 1,
            "explain": "Gemfile.lock mengunci versi."
          },
          {
            "type": "mc",
            "q": "Menjalankan perintah dalam konteks bundle memakai",
            "options": [
              "gem run",
              "bundle run",
              "exec gem",
              "bundle exec"
            ],
            "a": 3,
            "explain": "bundle exec memakai versi gem di Gemfile.lock."
          },
          {
            "type": "mc",
            "q": "Menambahkan gem ke Gemfile lalu memasang memakai",
            "options": [
              "gem push",
              "bundle add",
              "bundle push",
              "gem add"
            ],
            "a": 1,
            "explain": "bundle add menambah gem ke Gemfile."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan gem untuk test/development memakai",
            "options": [
              "section dev",
              "dev_group",
              "for_test",
              "group :development, :test"
            ],
            "a": 3,
            "explain": "Blok group memisahkan gem per lingkungan."
          },
          {
            "type": "mc",
            "q": "Menjalankan skrip yang didefinisikan memakai",
            "options": [
              "run script",
              "gem run",
              "bundle exec rake",
              "bundle cmd"
            ],
            "a": 2,
            "explain": "rake menjalankan task; dengan bundle exec agar konsisten."
          },
          {
            "type": "mc",
            "q": "Gem versi spesifik ditulis",
            "options": [
              "gem 'nama' = 1.2",
              "gem nama(1.2)",
              "gem 'nama', '~> 1.2'",
              "gem nama.want:1.2"
            ],
            "a": 2,
            "explain": "Constraint ~> membatasi versi."
          },
          {
            "type": "mc",
            "q": "Menghapus gem memakai",
            "options": [
              "gem delete",
              "bundle un install",
              "bundle remove",
              "gem drop"
            ],
            "a": 2,
            "explain": "bundle remove menghapus gem dari Gemfile."
          },
          {
            "type": "mc",
            "q": "Memeriksa gem usang memakai",
            "options": [
              "gem list old",
              "bundle outdated",
              "bundle check:old",
              "gem outdated check"
            ],
            "a": 1,
            "explain": "bundle outdated menampilkan gem basi."
          }
        ]
      },
      {
        "id": "ruby-17",
        "level": "Menengah",
        "title": "Idiom Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Idiom \"falsy\" Ruby adalah",
            "options": [
              "0 dan \"\"",
              "hanya nil",
              "nil dan false",
              "semua kosong"
            ],
            "a": 2,
            "explain": "Hanya nil dan false yang falsy di Ruby."
          },
          {
            "type": "mc",
            "q": "Safe navigation operator memakai",
            "options": [
              "&.",
              "?.",
              "->",
              "::"
            ],
            "a": 0,
            "explain": "&. memanggil method bila objek tidak nil."
          },
          {
            "type": "mc",
            "q": "Or-assignment (||=) dipakai untuk",
            "options": [
              "menghapus nilai",
              "memilih atribut yang diekspos",
              "kebocoran dan objek berlebih",
              "menetapkan nilai bila belum ada"
            ],
            "a": 3,
            "explain": "x ||= v menetapkan bila x falsy."
          },
          {
            "type": "mc",
            "q": "Pengembalian implisit berarti",
            "options": [
              "harus pakai return",
              "nilai ekspresi terakhir dikembalikan",
              "selalu nil",
              "tidak ada"
            ],
            "a": 1,
            "explain": "Ruby mengembalikan ekspresi terakhir."
          },
          {
            "type": "mc",
            "q": "Immutable string literal diaktifkan dengan",
            "options": [
              "# immutable",
              "# frozen_string_literal: true",
              "# frozen",
              "# static"
            ],
            "a": 1,
            "explain": "Magic comment membekukan literal string."
          },
          {
            "type": "mc",
            "q": "Menulis string multi-baris memakai",
            "options": [
              "triple quote",
              "heredoc",
              "backtick",
              "bracket"
            ],
            "a": 1,
            "explain": "Heredoc menulis string multi-baris."
          },
          {
            "type": "mc",
            "q": "Operator \"spaceship\" (<=>) dipakai untuk",
            "options": [
              "otomasi tugas proyek",
              "objek yang tidak lagi dirujuk",
              "perbandingan tiga arah",
              "API dinamis ringkas"
            ],
            "a": 2,
            "explain": "<=> mengembalikan -1, 0, atau 1."
          },
          {
            "type": "mc",
            "q": "Operator &&= dan ||= umum untuk",
            "options": [
              "begin/rescue atau method modifier rescue",
              "nilai dari block",
              "block dan metaprogramming",
              "memperbarui nilai kondisional"
            ],
            "a": 3,
            "explain": "Operator assignment kondisional mempersingkat pengecekan."
          },
          {
            "type": "mc",
            "q": "Kata kunci then biasanya",
            "options": [
              "diabaikan pada if satu baris",
              "wajib selalu",
              "retry di rescue dengan batas",
              "default yang wajar mengurangi konfigurasi"
            ],
            "a": 0,
            "explain": "then sering opsional."
          },
          {
            "type": "mc",
            "q": "Symbols sebagai hash key lebih ringkas dengan sintaks",
            "options": [
              "\"nama\" =>",
              "nama:",
              ":nama =>",
              "nama ->"
            ],
            "a": 1,
            "explain": "Sintaks nama: setara :nama =>."
          }
        ]
      },
      {
        "id": "ruby-18",
        "level": "Menengah",
        "title": "Set & Range",
        "exercises": [
          {
            "type": "mc",
            "q": "Set dipakai untuk",
            "options": [
              "koleksi tanpa duplikat",
              "terbaca dan terdokumentasi",
              "form mutasi web",
              "framework web untuk Ruby"
            ],
            "a": 0,
            "explain": "Set menjaga keunikan elemen."
          },
          {
            "type": "mc",
            "q": "Membuat Set memakai",
            "options": [
              "Set()",
              "new Set",
              "set { }",
              "require \"set\" lalu Set.new"
            ],
            "a": 3,
            "explain": "Set perlu di-require lalu dibuat."
          },
          {
            "type": "mc",
            "q": "Range eksklusif memakai",
            "options": [
              "1...5",
              "1..5",
              "1,5",
              "1-5"
            ],
            "a": 0,
            "explain": "Tiga titik membuat range eksklusif batas akhir."
          },
          {
            "type": "mc",
            "q": "Mengubah range ke array memakai",
            "options": [
              ".to_array",
              ".to_a",
              ".as_arr",
              ".list"
            ],
            "a": 1,
            "explain": "to_a mengubah range menjadi array."
          },
          {
            "type": "mc",
            "q": "Memeriksa nilai dalam range memakai",
            "options": [
              ".include?",
              ".has_value?",
              ".within",
              ".in_range"
            ],
            "a": 0,
            "explain": "include? memeriksa keanggotaan."
          },
          {
            "type": "mc",
            "q": "Range huruf memakai",
            "options": [
              "\"a\"...\"z\" inklusif selalu",
              "\"a\"..\"z\"",
              "[\"a\",\"z\"]",
              "a-z"
            ],
            "a": 1,
            "explain": "Range String juga didukung."
          },
          {
            "type": "mc",
            "q": "Union dua set memakai",
            "options": [
              "|",
              "&",
              "+",
              "*"
            ],
            "a": 0,
            "explain": "Operator | menggabungkan set."
          },
          {
            "type": "mc",
            "q": "Intersection dua set memakai",
            "options": [
              "|",
              "&",
              "*",
              "+"
            ],
            "a": 1,
            "explain": "Operator & mengambil irisan."
          },
          {
            "type": "mc",
            "q": "Set menghapus duplikat sehingga",
            "options": [
              "menyimpan semua",
              "objek yang tidak lagi dirujuk",
              "API dinamis ringkas",
              "tidak menyimpan elemen ganda"
            ],
            "a": 3,
            "explain": "Set menjaga elemen unik."
          },
          {
            "type": "mc",
            "q": "Membandingkan set memakai",
            "options": [
              "dinamis",
              "Dir.pwd",
              "before(:each)",
              "subset?/superset?"
            ],
            "a": 3,
            "explain": "Method set memeriksa relasi himpunan."
          }
        ]
      },
      {
        "id": "ruby-19",
        "level": "Menengah",
        "title": "Regular Expression",
        "exercises": [
          {
            "type": "mc",
            "q": "Regex literal Ruby ditulis",
            "options": [
              "\"pola\"",
              "(pola)",
              "{pola}",
              "/pola/"
            ],
            "a": 3,
            "explain": "Regex literal dibungkus garis miring."
          },
          {
            "type": "mc",
            "q": "Mencocokkan pola memakai",
            "options": [
              "==",
              "!=",
              "=~",
              "<=>"
            ],
            "a": 2,
            "explain": "Operator =~ mencocokkan regex."
          },
          {
            "type": "mc",
            "q": "Mengambil semua kecocokan memakai",
            "options": [
              ".match_all",
              ".find_all",
              ".grep_all",
              ".scan(pola)"
            ],
            "a": 3,
            "explain": "scan mengembalikan semua kecocokan."
          },
          {
            "type": "mc",
            "q": "Mengganti dengan regex memakai",
            "options": [
              ".gsub(/pola/, ganti)",
              ".replace",
              ".sub_all",
              ".swap"
            ],
            "a": 0,
            "explain": "gsub mengganti semua kecocokan."
          },
          {
            "type": "mc",
            "q": "Grup tangkapan diakses dari",
            "options": [
              ":nama",
              "elsif",
              "*args",
              "MatchData"
            ],
            "a": 3,
            "explain": "Hasil =~ / match memberi MatchData."
          },
          {
            "type": "mc",
            "q": "Regexp.escape berguna untuk",
            "options": [
              "apakah objek punya method",
              "menyanitasi string agar jadi pola literal",
              "alat seperti SimpleCov",
              "nilai ekspresi terakhir dikembalikan"
            ],
            "a": 1,
            "explain": "Escape mencegah karakter khusus regex."
          },
          {
            "type": "mc",
            "q": "Modifier i pada regex berarti",
            "options": [
              "global",
              "multiline saja",
              "menambah fitur/library",
              "case-insensitive"
            ],
            "a": 3,
            "explain": "i mengabaikan besar-kecil huruf."
          },
          {
            "type": "mc",
            "q": "Anchor ^ dan $ cocok dengan",
            "options": [
              "menangani panggilan method yang tidak ada",
              "berkas bisa tidak ada/tanpa izin",
              "awal dan akhir baris",
              "nil dan false"
            ],
            "a": 2,
            "explain": "Anchor menandai batas baris."
          },
          {
            "type": "mc",
            "q": "MatchData#captures memberi",
            "options": [
              "konsisten dan deskriptif",
              "lint dan konsistensi gaya",
              "array grup tangkapan",
              "huruf kecil atau _"
            ],
            "a": 2,
            "explain": "captures mengembalikan grup tangkapan."
          },
          {
            "type": "mc",
            "q": "Regex berlebihan bisa menyebabkan",
            "options": [
              "backtracking berat/performa",
              "before(:each)",
              "case-insensitive",
              "hash[:a][:b]"
            ],
            "a": 0,
            "explain": "Pola rumit bisa lambat pada input tertentu."
          }
        ]
      },
      {
        "id": "ruby-20",
        "level": "Menengah",
        "title": "Struktur Data Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Kelas Struct memudahkan",
            "options": [
              "memilih atribut yang diekspos",
              "membuat kelas data dengan accessor",
              "kebocoran dan objek berlebih",
              "perilaku dinamis mudah salah"
            ],
            "a": 1,
            "explain": "Struct menghasilkan accessor otomatis."
          },
          {
            "type": "mc",
            "q": "Hash dengan nilai default memakai",
            "options": [
              "Hash.new",
              "Hash.default(0)",
              "Hash.with(0)",
              "Hash.new(0)"
            ],
            "a": 3,
            "explain": "Argumen Hash.new menjadi default nilai."
          },
          {
            "type": "mc",
            "q": "Menggabungkan dua hash memakai",
            "options": [
              ".merge",
              ".join",
              ".combine",
              ".concat"
            ],
            "a": 0,
            "explain": "merge menggabungkan hash."
          },
          {
            "type": "mc",
            "q": "Mengambil hanya key tertentu dari hash memakai",
            "options": [
              ".slice",
              ".only",
              ".pick",
              ".sub"
            ],
            "a": 0,
            "explain": "slice memilih key tertentu."
          },
          {
            "type": "mc",
            "q": "Mengubah hash ke array pasangan memakai",
            "options": [
              ".to_pairs",
              ".to_a",
              ".as_list",
              ".items"
            ],
            "a": 1,
            "explain": "to_a mengubah hash ke array pasangan."
          },
          {
            "type": "mc",
            "q": "Menghapus key dari hash memakai",
            "options": [
              ".delete",
              ".remove",
              ".drop",
              ".omit"
            ],
            "a": 0,
            "explain": "delete menghapus key."
          },
          {
            "type": "mc",
            "q": "Memeriksa key ada memakai",
            "options": [
              ".has_key",
              ".exists?",
              ".key?",
              ".contains"
            ],
            "a": 2,
            "explain": "key? memeriksa keberadaan key."
          },
          {
            "type": "mc",
            "q": "Menelusuri hash memakai",
            "options": [
              ".for_each",
              ".each { |k, v| ... }",
              ".loop",
              ".scan"
            ],
            "a": 1,
            "explain": "each menelusuri key dan value."
          },
          {
            "type": "mc",
            "q": "Nested hash diakses dengan",
            "options": [
              "hash[:a.:b]",
              "hash->a->b",
              "hash[:a][:b]",
              "hash(a,b)"
            ],
            "a": 2,
            "explain": "Akses bersarang memakai kurung siku berurutan."
          },
          {
            "type": "mc",
            "q": "Mengurutkan hash berdasarkan nilai memakai",
            "options": [
              ".order",
              ".sort_by { |k,v| v }",
              ".arrange",
              ".rank"
            ],
            "a": 1,
            "explain": "sort_by mengurutkan sesuai blok."
          }
        ]
      },
      {
        "id": "ruby-21",
        "level": "Advance",
        "title": "Concurrency & Async Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Thread di Ruby memungkinkan",
            "options": [
              "dicatat dan diberi kebijakan retry",
              "menjalankan pekerjaan bersamaan dalam proses",
              "Rails ditulis dengan Ruby",
              "streaming data besar"
            ],
            "a": 1,
            "explain": "Thread menjalankan kode paralel dalam proses."
          },
          {
            "type": "mc",
            "q": "GVL (Global VM Lock) memengaruhi",
            "options": [
              "begin ... rescue ... end",
              "routing",
              "paralelisme thread untuk kode murni Ruby",
              "lambda {} atau -> {}"
            ],
            "a": 2,
            "explain": "GVL membatasi eksekusi paralel CPU pada Ruby MRI."
          },
          {
            "type": "mc",
            "q": "Fiber memungkinkan",
            "options": [
              "penjalanan coroutine kooperatif",
              "menangkap tipe yang tepat",
              "routing",
              "otomasi tugas proyek"
            ],
            "a": 0,
            "explain": "Fiber menyediakan konkurensi kooperatif."
          },
          {
            "type": "mc",
            "q": "Ractor (Ruby 3) memungkinkan",
            "options": [
              "paralelisme tanpa berbagi memori",
              "berbagi method antar kelas tanpa pewarisan ganda",
              "routing",
              "format(\"%d\", n) atau sprintf"
            ],
            "a": 0,
            "explain": "Ractor menyediakan isolasi untuk paralelisme."
          },
          {
            "type": "mc",
            "q": "Async gem membantu",
            "options": [
              "profiler memori",
              "IO asynchronous",
              "routing",
              "framework web"
            ],
            "a": 1,
            "explain": "Async memudahkan pemrograman IO asinkron."
          },
          {
            "type": "mc",
            "q": "Race condition diatasi dengan",
            "options": [
              "tidak bocor",
              "sinkronisasi (mutex)",
              "routing",
              "sanitasi/validasi path"
            ],
            "a": 1,
            "explain": "Mutex menjaga akses data bersama."
          },
          {
            "type": "mc",
            "q": "Mutex pada Ruby dipakai via",
            "options": [
              "Lock.new",
              "RSpec",
              "Mutex.new",
              "\"a\"..\"z\""
            ],
            "a": 2,
            "explain": "Mutex menyediakan penguncian."
          },
          {
            "type": "mc",
            "q": "Mengelola thread pool menghindari",
            "options": [
              "class E < StandardError; end",
              "routing",
              "return di lambda kembali dari lambda, di proc dari method",
              "membuat thread berlebihan"
            ],
            "a": 3,
            "explain": "Thread pool membatasi jumlah thread."
          },
          {
            "type": "mc",
            "q": "Menangani exception di thread penting agar",
            "options": [
              "pengujian dan pemakaian ulang",
              "routing",
              "tidak menggagalkan proses diam-diam",
              "Symbol hemat memori untuk key tetap"
            ],
            "a": 2,
            "explain": "Exception di thread perlu ditangani/dilaporkan."
          },
          {
            "type": "mc",
            "q": "Queue thread-safe disediakan oleh",
            "options": [
              "Array saja",
              ".find",
              "Thread::Queue",
              "&block"
            ],
            "a": 2,
            "explain": "Thread::Queue aman antar thread."
          }
        ]
      },
      {
        "id": "ruby-22",
        "level": "Advance",
        "title": "Desain OOP Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Duck typing berarti",
            "options": [
              "wajib tipe statis",
              "bergantung pada perilaku (method), bukan tipe",
              "Rails ditulis dengan Ruby",
              "streaming data besar"
            ],
            "a": 1,
            "explain": "Ruby mementingkan perilaku objek."
          },
          {
            "type": "mc",
            "q": "Composition over inheritance menyarankan",
            "options": [
              "selalu mewarisi",
              "pakai global",
              "format(\"%d\", n) atau sprintf",
              "menyusun objek daripada mewarisi dalam"
            ],
            "a": 3,
            "explain": "Komposisi mengurangi keterkaitan pewarisan."
          },
          {
            "type": "mc",
            "q": "Polymorphism di Ruby dicapai dengan",
            "options": [
              "tipe statis",
              "memilih atribut yang diekspos",
              "method sama pada objek berbeda",
              "kebocoran dan objek berlebih"
            ],
            "a": 2,
            "explain": "Objek berbeda merespons method yang sama."
          },
          {
            "type": "mc",
            "q": "Struct/SStruct dipakai untuk",
            "options": [
              "lambda {} atau -> {}",
              "routing",
              "dinamis termasuk private",
              "membuat kelas data ringkas"
            ],
            "a": 3,
            "explain": "Struct membuat kelas pemegang data sederhana."
          },
          {
            "type": "mc",
            "q": "Keyword arguments memakai",
            "options": [
              "def m(:nama)",
              "def m[nama:]",
              "def m(nama:)",
              "def m(nama =>)"
            ],
            "a": 2,
            "explain": "Keyword arguments memakai nama:."
          },
          {
            "type": "mc",
            "q": "Keyword arguments wajib memakai",
            "options": [
              "nama:",
              "nama!: tanpa default",
              "nama?",
              "nama*"
            ],
            "a": 0,
            "explain": "Keyword tanpa default bersifat wajib."
          },
          {
            "type": "mc",
            "q": "Freez/z-frozen objek membantu",
            "options": [
              "otomasi tugas proyek",
              "immutability dan keamanan",
              "routing",
              "objek yang tidak lagi dirujuk"
            ],
            "a": 1,
            "explain": "Objek beku tidak bisa diubah."
          },
          {
            "type": "mc",
            "q": "Present?/blank? adalah method umum pada",
            "options": [
              "ActiveSupport (Rails)",
              "Ruby murni saja",
              "hash[:nama]",
              ".message"
            ],
            "a": 0,
            "explain": "ActiveSupport menambah method seperti present?/blank?."
          },
          {
            "type": "mc",
            "q": "Module prepend berbeda dari include karena",
            "options": [
              "method module mendahului kelas",
              "retry di rescue dengan batas",
              "routing",
              "default yang wajar mengurangi konfigurasi"
            ],
            "a": 0,
            "explain": "prepend menempatkan module di depan rantai."
          },
          {
            "type": "mc",
            "q": "Banyaknya abstraksi berlebihan berisiko",
            "options": [
              "[1,2].map(&:to_s)",
              "routing",
              "File.foreach",
              "over-engineering"
            ],
            "a": 3,
            "explain": "Transaksi majemuk harus atomik."
          }
        ]
      },
      {
        "id": "ruby-23",
        "level": "Advance",
        "title": "Performance & Profiling",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling membantu menemukan",
            "options": [
              "bagian kode tersingkat/lambat",
              ".gsub(/pola/, ganti)",
              "routing",
              "def m(nama:)"
            ],
            "a": 0,
            "explain": "Profiler menunjukkan hot spot performa."
          },
          {
            "type": "mc",
            "q": "Objek alokasi berlebih memengaruhi",
            "options": [
              "GC dan memori",
              "Proc.new {} atau proc {}",
              "routing",
              "menangani panggilan method yang tidak ada"
            ],
            "a": 0,
            "explain": "Alokasi tinggi membebani garbage collector."
          },
          {
            "type": "mc",
            "q": "String building berulang sebaiknya memakai",
            "options": [
              "Array#join dari pada + di loop",
              "pengujian dan pemakaian ulang",
              "routing",
              "Symbol hemat memori untuk key tetap"
            ],
            "a": 0,
            "explain": "join lebih efisien daripada konkatenasi di loop."
          },
          {
            "type": "mc",
            "q": "Lazy enumerator membantu",
            "options": [
              "lambda ketat jumlah argumen, proc longgar",
              "memproses data besar secara streaming",
              "routing",
              "apakah objek punya method"
            ],
            "a": 1,
            "explain": "Lazy menunda evaluasi sehingga hemat memori."
          },
          {
            "type": "mc",
            "q": "Membatasi query berulang (N+1) di Rails memakai",
            "options": [
              "includes/eager loading",
              ".length atau .size",
              "routing",
              "(1..5).each"
            ],
            "a": 0,
            "explain": "Eager loading mengurangi query berulang."
          },
          {
            "type": "mc",
            "q": "Benchmarking memakai",
            "options": [
              "puts time saja",
              "initialize",
              "include",
              "Benchmark.measure"
            ],
            "a": 3,
            "explain": "Benchmark mengukur durasi eksekusi."
          },
          {
            "type": "mc",
            "q": "Caching hasil mahal memakai",
            "options": [
              "cache librari/memoization",
              "File.read(\"nama.txt\")",
              "routing",
              "Dir.mkdir(path)"
            ],
            "a": 0,
            "explain": "Cache/memoization menghindari perhitungan ulang."
          },
          {
            "type": "mc",
            "q": "Memory leak dapat dideteksi dengan",
            "options": [
              "File.read(\"nama.txt\")",
              "profiler memori",
              "routing",
              "Dir.mkdir(path)"
            ],
            "a": 1,
            "explain": "Profiler memori membantu menemukan kebocoran."
          },
          {
            "type": "mc",
            "q": "Menggunakan frozen string literal membantu",
            "options": [
              "Mutex.new",
              "routing",
              "Benchmark.measure",
              "mengurangi alokasi"
            ],
            "a": 3,
            "explain": "String beku mengurangi alokasi berulang."
          },
          {
            "type": "mc",
            "q": "Optimasi sebaiknya didasarkan pada",
            "options": [
              "pengukuran nyata",
              "tebakan",
              "Mutex.new",
              "Benchmark.measure"
            ],
            "a": 0,
            "explain": "Optimasi berbasis data lebih efektif."
          }
        ]
      },
      {
        "id": "ruby-24",
        "level": "Advance",
        "title": "Error Handling Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Hierarki exception penting agar",
            "options": [
              "otomasi tugas proyek",
              "routing",
              "menangkap tipe yang tepat",
              "objek yang tidak lagi dirujuk"
            ],
            "a": 2,
            "explain": "Tangkap exception sesuai tingkat abstraksi."
          },
          {
            "type": "mc",
            "q": "rescue StandardError lebih aman daripada",
            "options": [
              "ORM Rails",
              "routing",
              "rescue Exception",
              "library yaml"
            ],
            "a": 2,
            "explain": "Exception mencakup sinyal sistem; hindari menangkap semuanya."
          },
          {
            "type": "mc",
            "q": "Custom error dengan konteks membantu",
            "options": [
              "IO asynchronous",
              "routing",
              "rescue Exception",
              "debugging"
            ],
            "a": 3,
            "explain": "Error berkonteks mempermudah diagnosis."
          },
          {
            "type": "mc",
            "q": "Retry terkontrol memakai",
            "options": [
              "objek yang mewakili error",
              "retry di rescue dengan batas",
              "routing",
              "lambda ketat jumlah argumen, proc longgar"
            ],
            "a": 1,
            "explain": "Retry perlu batas agar tidak berulang tanpa akhir."
          },
          {
            "type": "mc",
            "q": "Ensure cocok untuk",
            "options": [
              "[1,2].map(&:to_s)",
              "routing",
              "File.foreach",
              "membersihkan resource"
            ],
            "a": 3,
            "explain": "ensure menjamin pembersihan resource."
          },
          {
            "type": "mc",
            "q": "Exception di background job perlu",
            "options": [
              "lambda {} atau -> {}",
              "routing",
              "dicatat dan diberi kebijakan retry",
              "dinamis termasuk private"
            ],
            "a": 2,
            "explain": "Job gagal perlu pemantauan dan retry."
          },
          {
            "type": "mc",
            "q": "Logging exception dengan",
            "options": [
              "Rails ditulis dengan Ruby",
              "routing",
              "streaming data besar",
              "backtrace dan konteks"
            ],
            "a": 3,
            "explain": "Backtrace dan konteks mempercepat diagnosis."
          },
          {
            "type": "mc",
            "q": "Membungkus error menjadi domain error membantu",
            "options": [
              "format(\"%d\", n) atau sprintf",
              "routing",
              "memisahkan detail implementasi",
              "menulis kode yang memodifikasi/perluas kode saat runtime"
            ],
            "a": 2,
            "explain": "Wrapping menjaga lapisan tetap bersih."
          },
          {
            "type": "mc",
            "q": "Menghindari rescue yang menelan error adalah best practice",
            "options": [
              "memproses data besar secara streaming",
              "routing",
              "agar masalah tidak tersembunyi",
              "request dan respons"
            ],
            "a": 2,
            "explain": "Rescue luas menyembunyikan bug."
          },
          {
            "type": "mc",
            "q": "Error yang dapat dipulihkan vs fatal perlu",
            "options": [
              "library json (to_json/JSON.parse)",
              "routing",
              "dibedakan penanganannya",
              "query berparameter"
            ],
            "a": 2,
            "explain": "Strategi penanganan berbeda sesuai sifat error."
          }
        ]
      },
      {
        "id": "ruby-25",
        "level": "Advance",
        "title": "Rails vs Ruby (peran)",
        "exercises": [
          {
            "type": "mc",
            "q": "Ruby adalah bahasa, Rails adalah",
            "options": [
              "bahasa",
              "database",
              "framework web",
              "File.exist?(path)"
            ],
            "a": 2,
            "explain": "Rails dibangun di atas Ruby."
          },
          {
            "type": "mc",
            "q": "Logika model pada Rails berada di",
            "options": [
              "subset?/superset?",
              "routes",
              "app/models",
              "public"
            ],
            "a": 2,
            "explain": "Model berada di app/models."
          },
          {
            "type": "mc",
            "q": "Controller pada Rails menangani",
            "options": [
              "paralelisme tanpa berbagi memori",
              "skema",
              "request dan respons",
              "aset"
            ],
            "a": 2,
            "explain": "Controller mengatur alur request."
          },
          {
            "type": "mc",
            "q": "View pada Rails dirender oleh",
            "options": [
              "Action Cable",
              "Active Job",
              "Active Record",
              "Action View"
            ],
            "a": 3,
            "explain": "Action View merender template."
          },
          {
            "type": "mc",
            "q": "Active Record adalah",
            "options": [
              "compiler Ruby",
              "ORM Rails",
              "ganda (\"...\")",
              "[1, 2, 3]"
            ],
            "a": 1,
            "explain": "Active Record memetakan model ke database."
          },
          {
            "type": "mc",
            "q": "Rake task umum untuk",
            "options": [
              "kondisi ? a : b",
              "objek yang membungkus blok kode",
              "otomasi tugas proyek",
              "berbagi method antar kelas tanpa pewarisan ganda"
            ],
            "a": 2,
            "explain": "Rake menjalankan task otomasi."
          },
          {
            "type": "mc",
            "q": "Konvensi over configuration berarti",
            "options": [
              "tanpa konfigurasi",
              "default yang wajar mengurangi konfigurasi",
              ".sort_by { |k,v| v }",
              "bergantung pada perilaku (method), bukan tipe"
            ],
            "a": 1,
            "explain": "Konvensi mengurangi kebutuhan konfigurasi eksplisit."
          },
          {
            "type": "mc",
            "q": "Gem berguna di Rails maupun Ruby murni untuk",
            "options": [
              "query berparameter",
              "debug gem",
              "ganda (\"...\")",
              "menambah fitur/library"
            ],
            "a": 3,
            "explain": "Gem tersedia di kedua konteks."
          },
          {
            "type": "mc",
            "q": "Memahami Ruby memudahkan memakai Rails karena",
            "options": [
              "Rails ditulis dengan Ruby",
              "objek yang tidak lagi dirujuk",
              "API dinamis ringkas",
              "dapat mengeksekusi objek"
            ],
            "a": 0,
            "explain": "Pemahaman bahasa mempercepat kerja framework."
          },
          {
            "type": "mc",
            "q": "Memisahkan domain Ruby murni dari Rails membantu",
            "options": [
              "menulis kode yang memodifikasi/perluas kode saat runtime",
              "pengujian dan pemakaian ulang",
              "File.open(path) { |f| ... }",
              "gem 'nama', '~> 1.2'"
            ],
            "a": 1,
            "explain": "Domain murni mudah diuji di luar Rails."
          }
        ]
      },
      {
        "id": "ruby-26",
        "level": "Advance",
        "title": "Serialisasi & API Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "JSON pada Ruby diproses dengan",
            "options": [
              "predikat (mengembalikan boolean)",
              "attr_accessor",
              "library json (to_json/JSON.parse)",
              "variabel instance"
            ],
            "a": 2,
            "explain": "Ruby memakai library json."
          },
          {
            "type": "mc",
            "q": "Mengubah hash ke JSON memakai",
            "options": [
              ".toJSON",
              ".jsonify",
              ".to_json",
              ".encode"
            ],
            "a": 2,
            "explain": "to_json menghasilkan string JSON."
          },
          {
            "type": "mc",
            "q": "Mengurai JSON memakai",
            "options": [
              "JSON.load_str",
              "JSON.parse",
              "JSON.decode",
              "JSON.read"
            ],
            "a": 1,
            "explain": "JSON.parse mengubah string menjadi struktur Ruby."
          },
          {
            "type": "mc",
            "q": "Symbolize keys saat parse memakai",
            "options": [
              "JSON.parse(s, symbolize_names: true)",
              "JSON.parse_symbols",
              "variabel instance",
              "File.exist?(path)"
            ],
            "a": 0,
            "explain": "symbolize_names menghasilkan key Symbol."
          },
          {
            "type": "mc",
            "q": "Serialisasi objek untuk API biasanya memakai",
            "options": [
              "IO asynchronous",
              "serializer/as_json",
              "bagian kode tersingkat/lambat",
              "rescue Exception"
            ],
            "a": 1,
            "explain": "Serializer membentuk representasi JSON objek."
          },
          {
            "type": "mc",
            "q": "YAML didukung Ruby lewat",
            "options": [
              "nama:",
              "subset?/superset?",
              "library yaml",
              "backtracking berat/performa"
            ],
            "a": 2,
            "explain": "Library yaml memproses YAML."
          },
          {
            "type": "mc",
            "q": "Mengamankan data sensitif dalam output perlu",
            "options": [
              "mengirim semua",
              "memilih atribut yang diekspos",
              "penjalanan coroutine kooperatif",
              "membuat kelas data ringkas"
            ],
            "a": 1,
            "explain": "Hanya atribut yang aman yang dikirim."
          },
          {
            "type": "mc",
            "q": "Menangani payload besar perlu",
            "options": [
              "ORM Rails",
              "library yaml",
              "streaming/pagination",
              "semantic versioning"
            ],
            "a": 2,
            "explain": "Pagination/streaming menjaga memori."
          },
          {
            "type": "mc",
            "q": "Validasi input API penting karena",
            "options": [
              "membuat thread berlebihan",
              "client tidak tepercaya",
              "method module mendahului kelas",
              "backtrace dan konteks"
            ],
            "a": 1,
            "explain": "Input eksternal bisa berbahaya."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "nilai ekspresi terakhir yang dieksekusi",
              "memutasi objek atau versi berisiko",
              "method, konstanta, dan kelas bersarang",
              "kompatibilitas klien lama"
            ],
            "a": 3,
            "explain": "Versioning memungkinkan perubahan tanpa merusak klien lama."
          }
        ]
      },
      {
        "id": "ruby-27",
        "level": "Advance",
        "title": "Garbage Collector & Memori",
        "exercises": [
          {
            "type": "mc",
            "q": "Garbage collector Ruby mengelola",
            "options": [
              "client tidak tepercaya",
              "GC otomatis berjalan",
              "divalidasi dan di-escape",
              "objek yang tidak lagi dirujuk"
            ],
            "a": 3,
            "explain": "GC membebaskan objek tak terjangkau."
          },
          {
            "type": "mc",
            "q": "Menandai objek beku membantu",
            "options": [
              "nilai dari block",
              "block dan metaprogramming",
              "mengurangi mutasi dan alokasi",
              "guard atau watcher"
            ],
            "a": 2,
            "explain": "Objek beku tidak bisa diubah."
          },
          {
            "type": "mc",
            "q": "Memantau GC memakai",
            "options": [
              "GC.info",
              "GC.all",
              "GC.stat",
              "GC.get"
            ],
            "a": 2,
            "explain": "GC.stat memberi statistik GC."
          },
          {
            "type": "mc",
            "q": "Memory bloat dapat dikurangi dengan",
            "options": [
              "menulis kode yang memodifikasi/perluas kode saat runtime",
              "streaming data besar",
              "File.open(path) { |f| ... }",
              "gem 'nama', '~> 1.2'"
            ],
            "a": 1,
            "explain": "Streaming menghindari memuat semua ke memori."
          },
          {
            "type": "mc",
            "q": "Objek besar berumur panjang sebaiknya",
            "options": [
              "dipakai ulang",
              "dibuat terus",
              "library json (to_json/JSON.parse)",
              "GC.stat"
            ],
            "a": 0,
            "explain": "Pemakaian ulang mengurangi alokasi."
          },
          {
            "type": "mc",
            "q": "Symbol vs String untuk key garis besar",
            "options": [
              "String selalu hemat",
              "Proc.new {} atau proc {}",
              "Symbol hemat memori untuk key tetap",
              "menangani panggilan method yang tidak ada"
            ],
            "a": 2,
            "explain": "Symbol cocok untuk key tetap."
          },
          {
            "type": "mc",
            "q": "Profiler memori membantu menemukan",
            "options": [
              "pengujian dan pemakaian ulang",
              "Symbol hemat memori untuk key tetap",
              "kebocoran dan objek berlebih",
              "migrasi pemakaian API lama"
            ],
            "a": 2,
            "explain": "Profiler memori melacak alokasi."
          },
          {
            "type": "mc",
            "q": "Menutup resource penting agar",
            "options": [
              "tidak bocor",
              "attr_accessor",
              "raise",
              ".chomp"
            ],
            "a": 0,
            "explain": "Resource perlu dilepas."
          },
          {
            "type": "mc",
            "q": "Caching berlebihan dapat",
            "options": [
              "[1,2].map(&:to_s)",
              "menghabiskan memori",
              "File.foreach",
              "assert_equal"
            ],
            "a": 1,
            "explain": "Cache tanpa batas memakan memori."
          },
          {
            "type": "mc",
            "q": "Menjalankan GC manual jarang perlu karena",
            "options": [
              "GC tidak ada",
              "kode sulit dipahami dan di-debug",
              "GC otomatis berjalan",
              "bundle exec rake"
            ],
            "a": 2,
            "explain": "GC berjalan otomatis."
          }
        ]
      },
      {
        "id": "ruby-28",
        "level": "Advance",
        "title": "DSL & API Design",
        "exercises": [
          {
            "type": "mc",
            "q": "DSL di Ruby dibangun dengan",
            "options": [
              "block dan metaprogramming",
              "arr << nilai atau arr.push",
              "loop do ... end",
              "class Anak < Induk"
            ],
            "a": 0,
            "explain": "Block dan metaprogramming membentuk DSL."
          },
          {
            "type": "mc",
            "q": "instance_eval membantu",
            "options": [
              "membuat kelas data dengan accessor",
              "membuat thread berlebihan",
              "method module mendahului kelas",
              "mengeksekusi blok dalam konteks objek"
            ],
            "a": 3,
            "explain": "instance_eval mengubah konteks self."
          },
          {
            "type": "mc",
            "q": "method_missing untuk DSL memungkinkan",
            "options": [
              "immutable dan ringan dipakai sebagai key",
              "nilai ekspresi terakhir yang dieksekusi",
              "API dinamis ringkas",
              "memutasi objek atau versi berisiko"
            ],
            "a": 2,
            "explain": "method_missing menangkap method dinamis."
          },
          {
            "type": "mc",
            "q": "DSL sebaiknya tetap",
            "options": [
              "awal dan akhir baris",
              "terbaca dan terdokumentasi",
              "penjalanan coroutine kooperatif",
              "membuat kelas data ringkas"
            ],
            "a": 1,
            "explain": "Keterbacaan penting pada DSL."
          },
          {
            "type": "mc",
            "q": "Keyword argument pada DSL membantu",
            "options": [
              "kejelasan pemanggilan",
              "brute force/abuse",
              "konsistensi tim",
              "block_given?"
            ],
            "a": 0,
            "explain": "Keyword argument memperjelas parameter."
          },
          {
            "type": "mc",
            "q": "Nama method API sebaiknya",
            "options": [
              "konsisten dan deskriptif",
              "tidak menyimpan elemen ganda",
              "menjalankan pekerjaan bersamaan dalam proses",
              "menyusun objek daripada mewarisi dalam"
            ],
            "a": 0,
            "explain": "Konsistensi memudahkan pemakaian."
          },
          {
            "type": "mc",
            "q": "Versioning API Ruby memakai",
            "options": [
              "case-insensitive",
              "hash[:a][:b]",
              "semantic versioning",
              "over-engineering"
            ],
            "a": 2,
            "explain": "Semantic versioning menandai perubahan."
          },
          {
            "type": "mc",
            "q": "Deprecation warnings membantu",
            "options": [
              "koleksi tanpa duplikat",
              "migrasi pemakaian API lama",
              ".each { |k, v| ... }",
              "tidak menggagalkan proses diam-diam"
            ],
            "a": 1,
            "explain": "Peringatan deprecation memandu pengguna API."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API Ruby dapat memakai",
            "options": [
              "RDoc/YARD",
              ".uniq",
              "dinamis",
              "Dir.pwd"
            ],
            "a": 0,
            "explain": "RDoc/YARD menghasilkan dokumentasi."
          },
          {
            "type": "mc",
            "q": "Menguji DSL penting karena",
            "options": [
              "perilaku dinamis mudah salah",
              "memperbarui nilai kondisional",
              "array grup tangkapan",
              "paralelisme tanpa berbagi memori"
            ],
            "a": 0,
            "explain": "Test menjaga keandalan DSL."
          }
        ]
      },
      {
        "id": "ruby-29",
        "level": "Advance",
        "title": "Security Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Input pengguna harus",
            "options": [
              "dipercaya selalu",
              "begin/rescue atau method modifier rescue",
              "nilai dari block",
              "divalidasi dan di-escape"
            ],
            "a": 3,
            "explain": "Input eksternal tidak tepercaya."
          },
          {
            "type": "mc",
            "q": "eval pada input pengguna berisiko",
            "options": [
              "otomasi tugas proyek",
              "objek yang tidak lagi dirujuk",
              "eksekusi kode berbahaya",
              "API dinamis ringkas"
            ],
            "a": 2,
            "explain": "eval dapat mengeksekusi kode berbahaya."
          },
          {
            "type": "mc",
            "q": "Marshal.load pada data tak tepercaya berbahaya karena",
            "options": [
              "objek yang mewakili error",
              "lambda ketat jumlah argumen, proc longgar",
              "dapat mengeksekusi objek",
              "apakah objek punya method"
            ],
            "a": 2,
            "explain": "Deserialisasi tak aman bisa berbahaya; gunakan JSON."
          },
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "konkatenasi string",
              "query berparameter",
              "dinamis",
              "Dir.pwd"
            ],
            "a": 1,
            "explain": "Parameter memisahkan data dari query."
          },
          {
            "type": "mc",
            "q": "YAML.load berisiko pada sumber tak tepercaya sehingga gunakan",
            "options": [
              "Integer",
              "safe_load",
              ".strip",
              ".map"
            ],
            "a": 1,
            "explain": "safe_load membatasi kelas yang diizinkan."
          },
          {
            "type": "mc",
            "q": "Path traversal dicegah dengan",
            "options": [
              "sanitasi/validasi path",
              "block_given?",
              "diberi private/protected",
              "menyembunyikan error"
            ],
            "a": 0,
            "explain": "Validasi mencegah akses di luar direktori."
          },
          {
            "type": "mc",
            "q": "Secrets sebaiknya disimpan di",
            "options": [
              "kode sumber",
              "environment/secret manager",
              "pengukuran nyata",
              "Action View"
            ],
            "a": 1,
            "explain": "Rahasia dijaga di luar kode."
          },
          {
            "type": "mc",
            "q": "Rate limiting membantu mencegah",
            "options": [
              "kejelasan pemanggilan",
              "konsistensi tim",
              "Integer",
              "brute force/abuse"
            ],
            "a": 3,
            "explain": "Rate limit membatasi percobaan."
          },
          {
            "type": "mc",
            "q": "CSRF token diperlukan pada",
            "options": [
              "module Nama ... end",
              "class E < StandardError; end",
              "form mutasi web",
              "return di lambda kembali dari lambda, di proc dari method"
            ],
            "a": 2,
            "explain": "Token CSRF melindungi dari request lintas situs."
          },
          {
            "type": "mc",
            "q": "Dependency usang berisiko",
            "options": [
              "kerentanan keamanan",
              "Hash.new(0)",
              "sinkronisasi (mutex)",
              "includes/eager loading"
            ],
            "a": 0,
            "explain": "Update dependency menutup celah."
          }
        ]
      },
      {
        "id": "ruby-30",
        "level": "Advance",
        "title": "Tooling & Ekosistem",
        "exercises": [
          {
            "type": "mc",
            "q": "RuboCop dipakai untuk",
            "options": [
              "framework web untuk Ruby",
              "lint dan konsistensi gaya",
              "arr << nilai atau arr.push",
              "loop do ... end"
            ],
            "a": 1,
            "explain": "RuboCop memeriksa gaya dan potensi masalah."
          },
          {
            "type": "mc",
            "q": "Memformat/auto-fix dengan RuboCop memakai",
            "options": [
              "format()",
              "-a / -A",
              "describe/context",
              "nama:"
            ],
            "a": 1,
            "explain": "Flag autofix memperbaiki pelanggaran."
          },
          {
            "type": "mc",
            "q": "Rake adalah",
            "options": [
              "true dan false",
              "if kondisi ... end",
              "ekspresi terakhir (atau return)",
              "task runner Ruby"
            ],
            "a": 3,
            "explain": "Rake menjalankan task."
          },
          {
            "type": "mc",
            "q": "Debugging modern Ruby memakai",
            "options": [
              "rescue Exception",
              "ORM Rails",
              "debug gem",
              "library yaml"
            ],
            "a": 2,
            "explain": "Gem debug menyediakan breakpoint."
          },
          {
            "type": "mc",
            "q": "IRB dapat diperkuat dengan",
            "options": [
              "query berparameter",
              "debug gem",
              "pry/irb enhancements",
              "ganda (\"...\")"
            ],
            "a": 2,
            "explain": "Pry memperkaya REPL."
          },
          {
            "type": "mc",
            "q": "Membuat gem baru memakai",
            "options": [
              "gem new",
              "bundle gem nama",
              "perbandingan tiga arah",
              "awal dan akhir baris"
            ],
            "a": 1,
            "explain": "bundle gem men-scaffold gem baru."
          },
          {
            "type": "mc",
            "q": "Menerbitkan gem memakai",
            "options": [
              "gem push",
              "gem publish",
              "attr_accessor",
              "raise"
            ],
            "a": 0,
            "explain": "gem push mengunggah gem ke server."
          },
          {
            "type": "mc",
            "q": "Integrasi CI menjalankan",
            "options": [
              "diabaikan pada if satu baris",
              "membuat kelas data dengan accessor",
              "membuat thread berlebihan",
              "test dan lint otomatis"
            ],
            "a": 3,
            "explain": "CI otomatis menjalankan pemeriksaan."
          },
          {
            "type": "mc",
            "q": "Menjaga versi Ruby memakai",
            "options": [
              "File.read(\"nama.txt\")",
              "Dir.mkdir(path)",
              "Gemfile.lock",
              "berkas .ruby-version"
            ],
            "a": 3,
            "explain": ".ruby-version menandai versi Ruby."
          },
          {
            "type": "mc",
            "q": "Dokumentasi tooling membantu",
            "options": [
              "konsistensi tim",
              "Gemfile.lock",
              ".merge",
              "Mutex.new"
            ],
            "a": 0,
            "explain": "Dokumentasi menyamakan cara kerja tim."
          }
        ]
      },
      {
        "id": "ruby-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Ruby",
        "exercises": [
          {
            "type": "mc",
            "q": "Ruby dikenal sebagai bahasa yang",
            "options": [
              "dinamis dan berorientasi objek",
              "hanya berjalan sebagai stylesheet",
              "tidak memiliki tipe",
              "khusus query SQL"
            ],
            "a": 0,
            "explain": "Ruby adalah bahasa dinamis serbaguna berorientasi objek."
          },
          {
            "type": "mc",
            "q": "Struktur Ruby yang menyimpan pasangan key-value adalah",
            "options": [
              "Hash",
              "Block",
              "Gemfile",
              "ModulePath"
            ],
            "a": 0,
            "explain": "Hash adalah koleksi pasangan kunci dan nilai."
          },
          {
            "type": "mc",
            "q": "Dalam Ruby, block paling tepat dipahami sebagai",
            "options": [
              "Potongan kode yang dapat diberikan ke metode",
              "File konfigurasi database",
              "Jenis komentar khusus",
              "Objek untuk mengatur CSS"
            ],
            "a": 0,
            "explain": "Block adalah potongan kode yang diterima dan dijalankan metode."
          },
          {
            "type": "fill",
            "q": "Lengkapi operator safe navigation:",
            "code": "user___profile",
            "accept": [
              "&.",
              ".&"
            ],
            "explain": "Safe navigation mencegah error bila objek nil."
          },
          {
            "type": "arrange",
            "q": "Susun eksekusi berkas Ruby dari perintah terminal:",
            "blocks": [
              "Ketik ruby app.rb",
              "Interpreter membaca berkas",
              "Kode dieksekusi baris demi baris",
              "Output tampil di terminal"
            ],
            "explain": "Interpreter menjalankan kode berurutan."
          }
        ]
      }
    ]
  }
];

export { CONTENT_RUBY };
