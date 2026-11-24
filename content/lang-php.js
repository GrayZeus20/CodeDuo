/* CodeDuo — blok konten: topik "PHP" (dipisah dari Blok Web).
 * 1 topik (php) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_PHP = [
  {
    "id": "php",
    "name": "PHP",
    "icon": "🐘",
    "color": "#777bb4",
    "desc": "Bahasa server-side untuk web",
    "lessons": [
      {
        "id": "php-1",
        "level": "Dasar",
        "title": "Pengenalan PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "PHP paling umum digunakan untuk",
            "options": [
              "Memproses request dan menghasilkan respons web",
              "pemrosesan web di server",
              "routing CSS",
              "HTML statis"
            ],
            "a": 1,
            "explain": "PHP berjalan di server web."
          },
          {
            "type": "mc",
            "q": "Berkas PHP berekstensi",
            "options": [
              ".php",
              ".ph",
              ".phtml",
              ".pp"
            ],
            "a": 0,
            "explain": "Berkas PHP .php."
          },
          {
            "type": "mc",
            "q": "Kode PHP dibuka dengan",
            "options": [
              "<?php",
              "<php>",
              "<%",
              "{php}"
            ],
            "a": 0,
            "explain": "PHP memakai <?php."
          },
          {
            "type": "mc",
            "q": "Menjalankan script PHP memakai",
            "options": [
              "node file.php",
              "python file.php",
              "PHP-FPM + Nginx/Apache",
              "php file.php"
            ],
            "a": 3,
            "explain": "Perintah php menjalankan."
          },
          {
            "type": "mc",
            "q": "Mengakhiri statement PHP memakai",
            "options": [
              ";",
              ".",
              "newline only",
              "ya"
            ],
            "a": 0,
            "explain": "PHP memakai titik koma."
          },
          {
            "type": "mc",
            "q": "Variabel PHP diawali",
            "options": [
              "@",
              "#",
              "&",
              "$"
            ],
            "a": 3,
            "explain": "Variabel PHP memakai $."
          },
          {
            "type": "mc",
            "q": "PHP dapat disisipkan dalam",
            "options": [
              "CSS only",
              "SQL only",
              "HTML",
              "trait/use"
            ],
            "a": 2,
            "explain": "PHP bisa disisipkan di HTML."
          },
          {
            "type": "mc",
            "q": "Manajer dependency PHP adalah",
            "options": [
              "npm",
              "pip",
              "Composer",
              "gem"
            ],
            "a": 2,
            "explain": "Composer mengelola dependency."
          },
          {
            "type": "mc",
            "q": "Menampilkan output memakai",
            "options": [
              "puts",
              "console.log",
              "return",
              "echo/print"
            ],
            "a": 3,
            "explain": "PHP memakai echo/print."
          },
          {
            "type": "mc",
            "q": "Komentar satu baris memakai",
            "options": [
              "// atau #",
              "--",
              "Exception",
              "prepare/execute"
            ],
            "a": 0,
            "explain": "PHP memakai // atau #."
          }
        ]
      },
      {
        "id": "php-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Deklarasi variabel cukup",
            "options": [
              "$nama = nilai;",
              "let $nama",
              "var $nama",
              "akses bersama"
            ],
            "a": 0,
            "explain": "PHP memakai $ otomatis."
          },
          {
            "type": "mc",
            "q": "Tipe teks adalah",
            "options": [
              "String",
              "string",
              "text",
              "__construct()"
            ],
            "a": 1,
            "explain": "PHP memakai string."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan bulat",
            "options": [
              "int",
              "Integer",
              "long",
              "ganda"
            ],
            "a": 0,
            "explain": "PHP memakai int."
          },
          {
            "type": "mc",
            "q": "Tipe desimal",
            "options": [
              "double only",
              "decimal",
              "komputasi",
              "float"
            ],
            "a": 3,
            "explain": "PHP memakai float."
          },
          {
            "type": "mc",
            "q": "Tipe boolean",
            "options": [
              "boolean",
              "bit",
              "bool",
              "eksekusi"
            ],
            "a": 2,
            "explain": "PHP memakai bool."
          },
          {
            "type": "mc",
            "q": "Nilai kosong",
            "options": [
              "null",
              "nil",
              "None",
              "injeksi"
            ],
            "a": 0,
            "explain": "PHP memakai null."
          },
          {
            "type": "mc",
            "q": "Memeriksa tipe memakai",
            "options": [
              "gettype/is_*",
              "typeof",
              "fn($x) => ...",
              "namespace"
            ],
            "a": 0,
            "explain": "PHP memakai gettype/is_*."
          },
          {
            "type": "mc",
            "q": "Mengubah tipe memakai",
            "options": [
              "(int)/(string)/settype",
              "cast()",
              "\"$nama\" atau \"{$nama}\"",
              "rand/mt_rand"
            ],
            "a": 0,
            "explain": "PHP memakai cast."
          },
          {
            "type": "mc",
            "q": "String interpolation memakai",
            "options": [
              "#{}",
              "\"$nama\" atau \"{$nama}\"",
              "<% %>",
              "struktur folder"
            ],
            "a": 1,
            "explain": "PHP menginterpolasi di kutip ganda."
          },
          {
            "type": "mc",
            "q": "PHP bertipe",
            "options": [
              "statis",
              "(int)/(float)",
              "implode()",
              "dinamis"
            ],
            "a": 3,
            "explain": "PHP dinamis (dengan dukungan type hint)."
          }
        ]
      },
      {
        "id": "php-3",
        "level": "Dasar",
        "title": "Form Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Form HTML mengirim data ke",
            "options": [
              "entry point",
              "action",
              "abstract class",
              "throw"
            ],
            "a": 1,
            "explain": "Action menunjuk tujuan."
          },
          {
            "type": "mc",
            "q": "Method form umum adalah",
            "options": [
              "PUT only",
              "GET/POST",
              "kontrak",
              "f(...)"
            ],
            "a": 1,
            "explain": "GET/POST umum."
          },
          {
            "type": "mc",
            "q": "Membaca input form memakai",
            "options": [
              "Xdebug/Blackfire",
              "ORM Laravel",
              "$_POST/$_GET",
              "json_decode"
            ],
            "a": 2,
            "explain": "Superglobal form."
          },
          {
            "type": "mc",
            "q": "Validasi sisi server wajib",
            "options": [
              "tidak",
              "match",
              "ya",
              "XSS"
            ],
            "a": 2,
            "explain": "Validasi server wajib."
          },
          {
            "type": "mc",
            "q": "Escape output form memakai",
            "options": [
              "function() use($x)",
              "htmlspecialchars()",
              "session_start()",
              "namespace/class"
            ],
            "a": 1,
            "explain": "htmlspecialchars mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Menangani file upload memakai",
            "options": [
              "new PDO(...)",
              "$_FILES",
              "$_SESSION['k'] = v",
              "penanganan server"
            ],
            "a": 1,
            "explain": "Data upload di $_FILES."
          },
          {
            "type": "mc",
            "q": "Memeriksa method dengan",
            "options": [
              "akses data",
              "anotasi docblock",
              "password_verify",
              "$_SERVER['REQUEST_METHOD']"
            ],
            "a": 3,
            "explain": "REQUEST_METHOD."
          },
          {
            "type": "mc",
            "q": "Redirect setelah submit memakai",
            "options": [
              "$_SERVER['REQUEST_METHOD']",
              "strtoupper()",
              "header('Location: ...')",
              "array_filter()"
            ],
            "a": 2,
            "explain": "Header redirect."
          },
          {
            "type": "mc",
            "q": "Validasi required penting",
            "options": [
              "ya",
              "tidak",
              "beban",
              "HTML"
            ],
            "a": 0,
            "explain": "Field wajib divalidasi."
          },
          {
            "type": "mc",
            "q": "CSRF token pada form penting",
            "options": [
              "tidak",
              "array",
              "ya",
              "UTC"
            ],
            "a": 2,
            "explain": "Token CSRF."
          }
        ]
      },
      {
        "id": "php-4",
        "level": "Dasar",
        "title": "Number & Math",
        "exercises": [
          {
            "type": "mc",
            "q": "Pembulatan memakai",
            "options": [
              "round/floor/ceil",
              "cookie",
              "assertSame/assertEquals",
              "asinkron"
            ],
            "a": 0,
            "explain": "Fungsi pembulatan."
          },
          {
            "type": "mc",
            "q": "Nilai absolut memakai",
            "options": [
              "class otomatis",
              "autoloader",
              "alur request",
              "abs()"
            ],
            "a": 3,
            "explain": "abs nilai absolut."
          },
          {
            "type": "mc",
            "q": "Pangkat memakai",
            "options": [
              "^",
              "pow()/**",
              "array_filter()",
              "kondisi benar"
            ],
            "a": 1,
            "explain": "pow atau **."
          },
          {
            "type": "mc",
            "q": "Akar memakai",
            "options": [
              "root()",
              "versi",
              "token/JWT",
              "sqrt()"
            ],
            "a": 3,
            "explain": "sqrt akar."
          },
          {
            "type": "mc",
            "q": "Nilai acak memakai",
            "options": [
              "rand/mt_rand",
              "beberapa tipe",
              "konsistensi",
              "password_hash"
            ],
            "a": 0,
            "explain": "Fungsi acak."
          },
          {
            "type": "mc",
            "q": "Modulo memakai",
            "options": [
              "mod()",
              "%",
              "::",
              "??"
            ],
            "a": 1,
            "explain": "PHP memakai %."
          },
          {
            "type": "mc",
            "q": "Format angka memakai",
            "options": [
              "$_POST/$_GET",
              "abs()",
              "number_format",
              "min()"
            ],
            "a": 2,
            "explain": "number_format."
          },
          {
            "type": "mc",
            "q": "Bilangan maksimum memakai",
            "options": [
              "$_FILES",
              "rand/mt_rand",
              "strlen()",
              "max()"
            ],
            "a": 3,
            "explain": "max fungsi."
          },
          {
            "type": "mc",
            "q": "Bilangan minimum memakai",
            "options": [
              "min()",
              "cookie",
              "asinkron",
              "display_errors"
            ],
            "a": 0,
            "explain": "min fungsi."
          },
          {
            "type": "mc",
            "q": "Konversi string ke angka",
            "options": [
              "class otomatis",
              "$_FILES[...]['size']",
              "(int)/(float)",
              "autoloader"
            ],
            "a": 2,
            "explain": "Cast eksplisit."
          }
        ]
      },
      {
        "id": "php-5",
        "level": "Dasar",
        "title": "String",
        "exercises": [
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "+",
              ".",
              "&&",
              "??"
            ],
            "a": 1,
            "explain": "PHP memakai titik."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".length",
              "len()",
              "strlen()",
              "alur request"
            ],
            "a": 2,
            "explain": "strlen memberi panjang."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              "strtoupper()",
              "toUpper()",
              "upper()",
              "pengelolaan dependensi"
            ],
            "a": 0,
            "explain": "strtoupper."
          },
          {
            "type": "mc",
            "q": "Memotong spasi memakai",
            "options": [
              "trim()",
              "strip()",
              "bool",
              "GET/POST"
            ],
            "a": 0,
            "explain": "trim memangkas."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              "replace()",
              "$_GET",
              "penyertaan berulang",
              "str_replace()"
            ],
            "a": 3,
            "explain": "str_replace mengganti."
          },
          {
            "type": "mc",
            "q": "Memecah string memakai",
            "options": [
              "explode()",
              "split()",
              "fetch/fetchAll",
              "setcookie()"
            ],
            "a": 0,
            "explain": "explode memecah."
          },
          {
            "type": "mc",
            "q": "Menggabungkan array memakai",
            "options": [
              "implode()",
              "join_only",
              "beban",
              "dependency"
            ],
            "a": 0,
            "explain": "implode menggabungkan."
          },
          {
            "type": "mc",
            "q": "Format string memakai",
            "options": [
              "format()",
              "sprintf()",
              "str_contains()",
              "array_merge()"
            ],
            "a": 1,
            "explain": "sprintf memformat."
          },
          {
            "type": "mc",
            "q": "Memeriksa substring memakai",
            "options": [
              "str_contains()",
              "includes()",
              "class Nama {}",
              "trait/use"
            ],
            "a": 0,
            "explain": "str_contains memeriksa."
          },
          {
            "type": "mc",
            "q": "Interpolasi hanya di kutip",
            "options": [
              "ganda",
              "tunggal",
              "skalabilitas",
              "?->"
            ],
            "a": 0,
            "explain": "Kutip ganda mendukung interpolasi."
          }
        ]
      },
      {
        "id": "php-6",
        "level": "Dasar",
        "title": "Array",
        "exercises": [
          {
            "type": "mc",
            "q": "Array dibuat memakai",
            "options": [
              "{1,2,3}",
              "(1,2,3)",
              "number_format",
              "[1,2,3] / array()"
            ],
            "a": 3,
            "explain": "PHP memakai []/array()."
          },
          {
            "type": "mc",
            "q": "Array asosiatif memakai",
            "options": [
              "bug statis",
              "validasi path",
              "['a' => 1]",
              "performa"
            ],
            "a": 2,
            "explain": "PHP memakai =>."
          },
          {
            "type": "mc",
            "q": "Menambah array memakai",
            "options": [
              "push()",
              "append()",
              "[] = / array_push",
              "kondisi ? a : b"
            ],
            "a": 2,
            "explain": "PHP memakai []."
          },
          {
            "type": "mc",
            "q": "Panjang array memakai",
            "options": [
              ".length",
              "count()",
              "size()",
              "di loop"
            ],
            "a": 1,
            "explain": "count menghitung."
          },
          {
            "type": "mc",
            "q": "Iterasi array memakai",
            "options": [
              "for each",
              "foreach",
              ".php",
              "// atau #"
            ],
            "a": 1,
            "explain": "PHP memakai foreach."
          },
          {
            "type": "mc",
            "q": "Mengambil key memakai",
            "options": [
              "array_keys()",
              "keys()",
              "Xdebug/phpdbg",
              "disarankan"
            ],
            "a": 0,
            "explain": "array_keys daftar key."
          },
          {
            "type": "mc",
            "q": "Menggabungkan array memakai",
            "options": [
              "merge()",
              "array_merge()",
              "php.ini",
              "data besar"
            ],
            "a": 1,
            "explain": "array_merge menggabungkan."
          },
          {
            "type": "mc",
            "q": "Menyaring array memakai",
            "options": [
              "filter()",
              "array_filter()",
              "sqrt()",
              "sprintf()"
            ],
            "a": 1,
            "explain": "array_filter menyaring."
          },
          {
            "type": "mc",
            "q": "Mengubah array memakai",
            "options": [
              "map()",
              "struktur folder",
              "array_map()",
              "entry point"
            ],
            "a": 2,
            "explain": "array_map transformasi."
          },
          {
            "type": "mc",
            "q": "Array multidimensi memungkinkan",
            "options": [
              "(int)/(float)",
              "implode()",
              "foreach",
              "array bersarang"
            ],
            "a": 3,
            "explain": "Array bersarang."
          }
        ]
      },
      {
        "id": "php-7",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "if/elseif/else",
              "if/elif",
              "$_FILES",
              "rand/mt_rand"
            ],
            "a": 0,
            "explain": "PHP memakai elseif."
          },
          {
            "type": "mc",
            "q": "Percabangan multi memakai",
            "options": [
              "when",
              "namespace",
              "switch",
              "konflik nama"
            ],
            "a": 2,
            "explain": "PHP memakai switch."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for (...)",
              "for x in",
              "IntlDateFormatter",
              "catch (Tipe $e)"
            ],
            "a": 0,
            "explain": "For klasik."
          },
          {
            "type": "mc",
            "q": "foreach mengiterasi",
            "options": [
              "beberapa tipe",
              "array",
              "konsistensi",
              "password_hash"
            ],
            "a": 1,
            "explain": "foreach untuk array."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "if/elseif/else",
              "...$args",
              "tersedia global",
              "kondisi benar"
            ],
            "a": 3,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "date('Y-m-d')",
              "minimal sekali",
              "selalu",
              "akses database"
            ],
            "a": 1,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "regenerasi ID",
              "di loop",
              "PHPStan/Psalm",
              "dihindari"
            ],
            "a": 1,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "if(a,b)",
              "URL ke controller",
              "template engine Laravel",
              "kondisi ? a : b"
            ],
            "a": 3,
            "explain": "Ternary memilih nilai."
          },
          {
            "type": "mc",
            "q": "Null coalescing memakai",
            "options": [
              "?:",
              "||",
              "<?php",
              "??"
            ],
            "a": 3,
            "explain": "PHP memakai ??."
          },
          {
            "type": "mc",
            "q": "Ekspresi percabangan ketat dengan nilai kembali yang diperkenalkan di PHP 8 adalah",
            "options": [
              "match",
              "switch only",
              "logika bisnis",
              "immutable"
            ],
            "a": 0,
            "explain": "PHP 8 punya match."
          }
        ]
      },
      {
        "id": "php-8",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "def nama",
              "fun nama",
              "session_start()",
              "function nama()"
            ],
            "a": 3,
            "explain": "PHP memakai function."
          },
          {
            "type": "mc",
            "q": "Nilai balik memakai",
            "options": [
              "yield only",
              "dinamis",
              "strtoupper()",
              "return"
            ],
            "a": 3,
            "explain": "return mengembalikan."
          },
          {
            "type": "mc",
            "q": "Parameter default memakai",
            "options": [
              ":",
              ";",
              "=",
              "ya"
            ],
            "a": 2,
            "explain": "Nilai default dengan =."
          },
          {
            "type": "mc",
            "q": "Type hint parameter memungkinkan",
            "options": [
              "$_SESSION['k'] = v",
              "deklarasi tipe",
              "penanganan server",
              "state test"
            ],
            "a": 1,
            "explain": "PHP mendukung type hint."
          },
          {
            "type": "mc",
            "q": "Return type memakai",
            "options": [
              "abstract class",
              "strtotime/DateTime",
              "function f(): int",
              "SQL injection"
            ],
            "a": 2,
            "explain": "Return type setelah :."
          },
          {
            "type": "mc",
            "q": "Variadic memakai",
            "options": [
              "$args...",
              "foreach",
              "switch",
              "...$args"
            ],
            "a": 3,
            "explain": "PHP memakai ...$args."
          },
          {
            "type": "mc",
            "q": "Arrow function memakai",
            "options": [
              "$_POST/$_GET",
              "fn($x) => ...",
              "abs()",
              "min()"
            ],
            "a": 1,
            "explain": "PHP 7.4+ fn()."
          },
          {
            "type": "mc",
            "q": "Closure memakai",
            "options": [
              "lambda",
              "produksi",
              "function() use($x)",
              "prepared statement"
            ],
            "a": 2,
            "explain": "Closure memakai use."
          },
          {
            "type": "mc",
            "q": "Named argument (PHP 8) memungkinkan",
            "options": [
              "Parameter query URL",
              "terpisah dari global",
              "menangkap beberapa tipe",
              "menyebut nama parameter"
            ],
            "a": 3,
            "explain": "Named argument PHP 8."
          },
          {
            "type": "mc",
            "q": "Variabel scope fungsi",
            "options": [
              "selalu global",
              "kondisi ? a : b",
              "URL ke controller",
              "terpisah dari global"
            ],
            "a": 3,
            "explain": "Fungsi punya scope sendiri."
          }
        ]
      },
      {
        "id": "php-9",
        "level": "Dasar",
        "title": "Superglobal",
        "exercises": [
          {
            "type": "mc",
            "q": "Data form POST diakses via",
            "options": [
              "$_FORM",
              "$_DATA",
              "for (...)",
              "$_POST"
            ],
            "a": 3,
            "explain": "PHP memakai $_POST."
          },
          {
            "type": "mc",
            "q": "Query string diakses via",
            "options": [
              "$_QUERY",
              "$_URL",
              "new PDO(...)",
              "$_GET"
            ],
            "a": 3,
            "explain": "PHP memakai $_GET."
          },
          {
            "type": "mc",
            "q": "Session diakses via",
            "options": [
              "$_SESS",
              "$_STORE",
              "escaping output",
              "$_SESSION"
            ],
            "a": 3,
            "explain": "PHP memakai $_SESSION."
          },
          {
            "type": "mc",
            "q": "Cookie diakses via",
            "options": [
              "$_COOKIE",
              "$_COOK",
              "pow()/**",
              "(int)/(float)"
            ],
            "a": 0,
            "explain": "PHP memakai $_COOKIE."
          },
          {
            "type": "mc",
            "q": "Upload file diakses via",
            "options": [
              "$_UPLOAD",
              "number_format",
              "$_FILES",
              "trim()"
            ],
            "a": 2,
            "explain": "PHP memakai $_FILES."
          },
          {
            "type": "mc",
            "q": "Method request memakai",
            "options": [
              "data/logika",
              "new Nama()",
              "beginTransaction/commit",
              "$_SERVER['REQUEST_METHOD']"
            ],
            "a": 3,
            "explain": "REQUEST_METHOD menandai method."
          },
          {
            "type": "mc",
            "q": "Superglobal bersifat",
            "options": [
              "PHPUnit",
              "tersedia global",
              "proses/FPM",
              "akses data"
            ],
            "a": 1,
            "explain": "Superglobal tersedia di mana saja."
          },
          {
            "type": "mc",
            "q": "Validasi input superglobal penting",
            "options": [
              "tidak",
              "$",
              "ya",
              "int"
            ],
            "a": 2,
            "explain": "Input tidak tepercaya."
          },
          {
            "type": "mc",
            "q": "Menyanitasi output mencegah",
            "options": [
              "otomasi",
              "XSS",
              ".php",
              "ya"
            ],
            "a": 1,
            "explain": "Escaping mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Session dimulai dengan",
            "options": [
              "session_start()",
              "array bersarang",
              "di loop",
              "function f(): int"
            ],
            "a": 0,
            "explain": "session_start memulai."
          }
        ]
      },
      {
        "id": "php-10",
        "level": "Dasar",
        "title": "Include & Require",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyertakan berkas memakai",
            "options": [
              "import",
              "use",
              "akses JS",
              "include/require"
            ],
            "a": 3,
            "explain": "PHP memakai include/require."
          },
          {
            "type": "mc",
            "q": "Perbedaan include dan require",
            "options": [
              "sama saja",
              "menyebut nama parameter",
              "require gagal fatal, include warning",
              "konstruktor dan property"
            ],
            "a": 2,
            "explain": "require fatal saat gagal."
          },
          {
            "type": "mc",
            "q": "once mencegah",
            "options": [
              "pow()/**",
              "(int)/(float)",
              "penyertaan berulang",
              "implode()"
            ],
            "a": 2,
            "explain": "once mencegah duplikasi."
          },
          {
            "type": "mc",
            "q": "require_once variasi yang",
            "options": [
              "composer install --no-dev",
              "aman dari duplikasi",
              "Jenis argumen atau nilai balik yang diharapkan",
              "Swoole/ReactPHP"
            ],
            "a": 1,
            "explain": "require_once aman."
          },
          {
            "type": "mc",
            "q": "Autoload memuat",
            "options": [
              "extends",
              "date_default_timezone_set",
              "Exception/Error",
              "class otomatis"
            ],
            "a": 3,
            "explain": "Autoload class."
          },
          {
            "type": "mc",
            "q": "Composer autoload memudahkan",
            "options": [
              "memuat class",
              "pemanggilan jelas",
              "escaping output",
              "Xdebug/Blackfire"
            ],
            "a": 0,
            "explain": "Composer autoload."
          },
          {
            "type": "mc",
            "q": "__DIR__ memberi",
            "options": [
              "request",
              "direktori berkas",
              "Content-Type: application/json",
              "dinamis"
            ],
            "a": 1,
            "explain": "__DIR__ direktori."
          },
          {
            "type": "mc",
            "q": "Kata kunci PHP untuk mengelompokkan kelas agar tidak terjadi bentrok nama antar pustaka adalah",
            "options": [
              "namespace",
              "array_keys()",
              "for (...)",
              "function nama()"
            ],
            "a": 0,
            "explain": "PHP memakai namespace."
          },
          {
            "type": "mc",
            "q": "use mengimpor",
            "options": [
              "json_decode",
              "namespace/class",
              "string",
              "\"$nama\" atau \"{$nama}\""
            ],
            "a": 1,
            "explain": "use mengimpor."
          },
          {
            "type": "mc",
            "q": "Menghindari include berlebih",
            "options": [
              "tidak",
              "switch",
              "match",
              "penting"
            ],
            "a": 3,
            "explain": "Struktur jelas."
          }
        ]
      },
      {
        "id": "php-11",
        "level": "Menengah",
        "title": "File Upload",
        "exercises": [
          {
            "type": "mc",
            "q": "Berkas upload tersedia di",
            "options": [
              "kontrak",
              "f(...)",
              "produksi",
              "$_FILES"
            ],
            "a": 3,
            "explain": "Upload di $_FILES."
          },
          {
            "type": "mc",
            "q": "Memindahkan file memakai",
            "options": [
              "entry point",
              "move_uploaded_file",
              "abstract class",
              "strtotime/DateTime"
            ],
            "a": 1,
            "explain": "move_uploaded_file."
          },
          {
            "type": "mc",
            "q": "Memeriksa ukuran memakai",
            "options": [
              "implode()",
              "$_FILES[...]['size']",
              "foreach",
              "fn($x) => ..."
            ],
            "a": 1,
            "explain": "Size pada array."
          },
          {
            "type": "mc",
            "q": "Memeriksa tipe MIME",
            "options": [
              "tidak",
              "Xdebug/Blackfire",
              "ORM Laravel",
              "penting"
            ],
            "a": 3,
            "explain": "Validasi MIME."
          },
          {
            "type": "mc",
            "q": "Nama file harus",
            "options": [
              "komputasi",
              "versi",
              "disanitasi",
              "token/JWT"
            ],
            "a": 2,
            "explain": "Sanitasi nama."
          },
          {
            "type": "mc",
            "q": "Menyimpan file di luar webroot lebih aman",
            "options": [
              "tidak",
              "ya",
              "wajib",
              ".php"
            ],
            "a": 1,
            "explain": "Simpan aman."
          },
          {
            "type": "mc",
            "q": "Batas ukuran upload diatur di",
            "options": [
              "php.ini",
              "$_SESSION",
              "class otomatis",
              "autoloader"
            ],
            "a": 0,
            "explain": "Konfigurasi php.ini."
          },
          {
            "type": "mc",
            "q": "Menyaring ekstensi penting",
            "options": [
              "ya",
              "tidak",
              "null",
              "abs()"
            ],
            "a": 0,
            "explain": "Filter ekstensi."
          },
          {
            "type": "mc",
            "q": "Error upload harus ditangani",
            "options": [
              "ya",
              "tidak",
              "UTC",
              "wajib"
            ],
            "a": 0,
            "explain": "Tangani error."
          },
          {
            "type": "mc",
            "q": "Antivirus scan opsional",
            "options": [
              "tidak",
              "ya",
              "HTTPS",
              "job"
            ],
            "a": 1,
            "explain": "Scan opsional."
          }
        ]
      },
      {
        "id": "php-12",
        "level": "Menengah",
        "title": "Namespace & Autoload",
        "exercises": [
          {
            "type": "mc",
            "q": "Namespace menghindari",
            "options": [
              "akses data",
              "konflik nama",
              "komponen",
              "anotasi docblock"
            ],
            "a": 1,
            "explain": "Namespace mencegah konflik."
          },
          {
            "type": "mc",
            "q": "Deklarasi ruang nama di baris atas berkas PHP ditulis menggunakan kata kunci",
            "options": [
              "namespace",
              "dinamis",
              "strtoupper()",
              "ganda"
            ],
            "a": 0,
            "explain": "Kata kunci namespace."
          },
          {
            "type": "mc",
            "q": "Mengimpor class memakai",
            "options": [
              "::",
              "use",
              "performa",
              "`$`"
            ],
            "a": 1,
            "explain": "use mengimpor."
          },
          {
            "type": "mc",
            "q": "Autoload memuat class",
            "options": [
              "new PDO(...)",
              "$_SESSION['k'] = v",
              "otomatis",
              "penanganan server"
            ],
            "a": 2,
            "explain": "Autoload class."
          },
          {
            "type": "mc",
            "q": "PSR-4 standar",
            "options": [
              "getMessage()",
              "autoload",
              "alternatif MySQL",
              "akses JS"
            ],
            "a": 1,
            "explain": "PSR-4 standar."
          },
          {
            "type": "mc",
            "q": "Spl_autoload_register mendaftarkan",
            "options": [
              "validasi path",
              "autoloader",
              "performa",
              "repository package"
            ],
            "a": 1,
            "explain": "Daftar autoloader."
          },
          {
            "type": "mc",
            "q": "Nama class berhubungan dengan",
            "options": [
              "struktur folder",
              "trim()",
              "[1,2,3] / array()",
              "array_map()"
            ],
            "a": 0,
            "explain": "Struktur folder."
          },
          {
            "type": "mc",
            "q": "Menghindari namespace berlebih",
            "options": [
              "tidak",
              "penting",
              "data/logika",
              "new Nama()"
            ],
            "a": 1,
            "explain": "Gunakan wajar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi namespace penting",
            "options": [
              "tidak",
              "ya",
              "null",
              "abs()"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Uji autoload penting",
            "options": [
              "tidak",
              "HTTPS",
              "job",
              "ya"
            ],
            "a": 3,
            "explain": "Uji autoload."
          }
        ]
      },
      {
        "id": "php-13",
        "level": "Menengah",
        "title": "JSON & API",
        "exercises": [
          {
            "type": "mc",
            "q": "json_encode mengubah",
            "options": [
              "composer install --no-dev",
              "Jenis argumen atau nilai balik yang diharapkan",
              "aman dari duplikasi",
              "data ke JSON"
            ],
            "a": 3,
            "explain": "Encode JSON."
          },
          {
            "type": "mc",
            "q": "json_decode mengubah",
            "options": [
              "Parameter query URL",
              "JSON ke data",
              "terpisah dari global",
              "menangkap beberapa tipe"
            ],
            "a": 1,
            "explain": "Decode JSON."
          },
          {
            "type": "mc",
            "q": "json_decode assoc true memberi",
            "options": [
              "use",
              "__construct()",
              "array",
              "::"
            ],
            "a": 2,
            "explain": "Assoc array."
          },
          {
            "type": "mc",
            "q": "Header JSON wajib diset",
            "options": [
              "tidak",
              "%",
              "ganda",
              "ya"
            ],
            "a": 3,
            "explain": "Content-Type."
          },
          {
            "type": "mc",
            "q": "Error JSON dicek",
            "options": [
              "tidak",
              ";",
              "array",
              "ya"
            ],
            "a": 3,
            "explain": "Cek json_last_error."
          },
          {
            "type": "mc",
            "q": "Menangani payload besar",
            "options": [
              "tidak",
              "state test",
              "akses bersama",
              "penting"
            ],
            "a": 3,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Streaming JSON memungkinkan",
            "options": [
              "throw",
              "data besar",
              "SQL injection",
              "injeksi"
            ],
            "a": 1,
            "explain": "Streaming opsional."
          },
          {
            "type": "mc",
            "q": "Validasi data JSON penting",
            "options": [
              "tidak",
              "match",
              "ya",
              "XSS"
            ],
            "a": 2,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "Menyimpan JSON di DB",
            "options": [
              "explode()",
              "count()",
              "if/elseif/else",
              "perlu pertimbangan"
            ],
            "a": 3,
            "explain": "Pertimbangkan skema."
          },
          {
            "type": "mc",
            "q": "Serialisasi waktu perlu format",
            "options": [
              "ya",
              "tidak",
              "<?php",
              "."
            ],
            "a": 0,
            "explain": "Format tanggal."
          }
        ]
      },
      {
        "id": "php-14",
        "level": "Menengah",
        "title": "MVC PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "MVC memisahkan",
            "options": [
              "Model/View/Controller",
              "function() use($x)",
              "session_start()",
              "namespace/class"
            ],
            "a": 0,
            "explain": "MVC memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Model bertanggung jawab",
            "options": [
              "new PDO(...)",
              "data/logika",
              "$_SESSION['k'] = v",
              "penanganan server"
            ],
            "a": 1,
            "explain": "Model data."
          },
          {
            "type": "mc",
            "q": "View bertanggung jawab",
            "options": [
              "akses data",
              "komponen",
              "tampilan",
              "anotasi docblock"
            ],
            "a": 2,
            "explain": "View tampilan."
          },
          {
            "type": "mc",
            "q": "Controller mengatur",
            "options": [
              "dinamis",
              "$_SERVER['REQUEST_METHOD']",
              "strtoupper()",
              "alur request"
            ],
            "a": 3,
            "explain": "Controller alur."
          },
          {
            "type": "mc",
            "q": "Front controller memusatkan",
            "options": [
              "abstract class",
              "strtotime/DateTime",
              "throw",
              "entry point"
            ],
            "a": 3,
            "explain": "Satu entry."
          },
          {
            "type": "mc",
            "q": "Router memetakan",
            "options": [
              "aman dari duplikasi",
              "URL ke controller",
              "composer install --no-dev",
              "Jenis argumen atau nilai balik yang diharapkan"
            ],
            "a": 1,
            "explain": "Router URL."
          },
          {
            "type": "mc",
            "q": "Template engine membantu",
            "options": [
              "Xdebug/Blackfire",
              "ORM Laravel",
              "pemisahan view",
              "json_decode"
            ],
            "a": 2,
            "explain": "Template view."
          },
          {
            "type": "mc",
            "q": "Framework menyediakan MVC",
            "options": [
              "ya",
              "tidak",
              "match",
              "XSS"
            ],
            "a": 0,
            "explain": "Framework MVC."
          },
          {
            "type": "mc",
            "q": "Dokumentasi struktur penting",
            "options": [
              "ya",
              "tidak",
              "wajib",
              ".php"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Test per layer penting",
            "options": [
              "tidak",
              "ya",
              "versi",
              "bool"
            ],
            "a": 1,
            "explain": "Test per layer."
          }
        ]
      },
      {
        "id": "php-15",
        "level": "Menengah",
        "title": "OOP PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "class Nama {}",
              "struct Nama",
              "data/logika",
              "new Nama()"
            ],
            "a": 0,
            "explain": "PHP memakai class."
          },
          {
            "type": "mc",
            "q": "Konstruktor memakai",
            "options": [
              "constructor()",
              "trim()",
              "[1,2,3] / array()",
              "__construct()"
            ],
            "a": 3,
            "explain": "PHP memakai __construct."
          },
          {
            "type": "mc",
            "q": "Membuat objek memakai",
            "options": [
              "Nama()",
              "validasi path",
              "performa",
              "new Nama()"
            ],
            "a": 3,
            "explain": "PHP memakai new."
          },
          {
            "type": "mc",
            "q": "Visibility meliputi",
            "options": [
              "getMessage()",
              "public/protected/private",
              "alternatif MySQL",
              "PHPUnit mock/createMock"
            ],
            "a": 1,
            "explain": "PHP punya tiga visibility."
          },
          {
            "type": "mc",
            "q": "Property promotion (PHP 8) mempersingkat",
            "options": [
              "konstruktor dan property",
              "Jenis argumen atau nilai balik yang diharapkan",
              "aman dari duplikasi",
              "composer install --no-dev"
            ],
            "a": 0,
            "explain": "Promotion menghemat kode."
          },
          {
            "type": "mc",
            "q": "Interface memakai",
            "options": [
              "// atau #",
              "interface/implements",
              "gettype/is_*",
              "pow()/**"
            ],
            "a": 1,
            "explain": "PHP memakai interface."
          },
          {
            "type": "mc",
            "q": "Kelas dasar PHP yang tidak dapat diinstansiasi langsung dan mewajibkan subclass melengkapi metodenya memakai",
            "options": [
              "disarankan",
              "pemanggilan jelas",
              "abstract class",
              "escaping output"
            ],
            "a": 2,
            "explain": "PHP memakai abstract."
          },
          {
            "type": "mc",
            "q": "Pewarisan memakai",
            "options": [
              "implements",
              "extends",
              "data besar",
              "pemisahan view"
            ],
            "a": 1,
            "explain": "PHP memakai extends."
          },
          {
            "type": "mc",
            "q": "Trait memakai",
            "options": [
              "trait/use",
              "kontrak",
              "f(...)",
              "produksi"
            ],
            "a": 0,
            "explain": "PHP memakai trait."
          },
          {
            "type": "mc",
            "q": "Static member memakai",
            "options": [
              "::",
              "->",
              "throw",
              "?->"
            ],
            "a": 0,
            "explain": "PHP memakai :: untuk static."
          }
        ]
      },
      {
        "id": "php-16",
        "level": "Menengah",
        "title": "Date & Time PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Tanggal sekarang memakai",
            "options": [
              "now()",
              "date()",
              "disanitasi",
              "struktur folder"
            ],
            "a": 1,
            "explain": "date() memberi tanggal."
          },
          {
            "type": "mc",
            "q": "Timestamp memakai",
            "options": [
              "time()",
              "pekerjaan berat",
              "kontrak",
              "f(...)"
            ],
            "a": 0,
            "explain": "time() timestamp."
          },
          {
            "type": "mc",
            "q": "Format tanggal memakai",
            "options": [
              "echo/print",
              "$_POST/$_GET",
              "abs()",
              "date('Y-m-d')"
            ],
            "a": 3,
            "explain": "Pola format date."
          },
          {
            "type": "mc",
            "q": "Mem-parse tanggal memakai",
            "options": [
              "strtotime/DateTime",
              "minimal sekali",
              "deklarasi tipe",
              "$_SESSION"
            ],
            "a": 0,
            "explain": "strtotime/DateTime."
          },
          {
            "type": "mc",
            "q": "DateTimeImmutable disarankan",
            "options": [
              "ya",
              "tidak",
              "UTC",
              "wajib"
            ],
            "a": 0,
            "explain": "Immutable lebih aman."
          },
          {
            "type": "mc",
            "q": "Timezone diatur dengan",
            "options": [
              "date_default_timezone_set",
              "password_verify",
              "komputasi",
              "token/JWT"
            ],
            "a": 0,
            "explain": "Atur timezone."
          },
          {
            "type": "mc",
            "q": "Selisih waktu memakai",
            "options": [
              "strtoupper()",
              "ganda",
              "DateInterval",
              "array_filter()"
            ],
            "a": 2,
            "explain": "Interval selisih."
          },
          {
            "type": "mc",
            "q": "Format internasional memakai",
            "options": [
              "Model/View/Controller",
              "__construct()",
              "IntlDateFormatter",
              "catch (Tipe $e)"
            ],
            "a": 2,
            "explain": "Intl formatter."
          },
          {
            "type": "mc",
            "q": "Menyimpan waktu di DB memakai",
            "options": [
              "beban",
              "HTML",
              "UTC",
              "float"
            ],
            "a": 2,
            "explain": "UTC konsisten."
          },
          {
            "type": "mc",
            "q": "Menguji tanggal penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "array"
            ],
            "a": 1,
            "explain": "Uji tanggal."
          }
        ]
      },
      {
        "id": "php-17",
        "level": "Menengah",
        "title": "Exception",
        "exercises": [
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/rescue",
              "proses/FPM",
              "try/catch",
              "akses data"
            ],
            "a": 2,
            "explain": "PHP memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "otomatis",
              "data/logika",
              "selalu",
              "new Nama()"
            ],
            "a": 2,
            "explain": "finally selalu."
          },
          {
            "type": "mc",
            "q": "Melempar exception memakai",
            "options": [
              "raise",
              "throw",
              "use",
              "__construct()"
            ],
            "a": 1,
            "explain": "PHP memakai throw."
          },
          {
            "type": "mc",
            "q": "Exception mewarisi",
            "options": [
              "dinamis",
              "Exception/Error",
              "$_SERVER['REQUEST_METHOD']",
              "strtoupper()"
            ],
            "a": 1,
            "explain": "PHP punya Exception/Error."
          },
          {
            "type": "mc",
            "q": "Kelas galat buatan sendiri di PHP umumnya mewarisi kelas bawaan",
            "options": [
              "try/catch",
              "getMessage()",
              "alternatif MySQL",
              "Exception"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe spesifik memakai",
            "options": [
              "di loop",
              "function f(): int",
              "catch (Tipe $e)",
              "$_COOKIE"
            ],
            "a": 2,
            "explain": "Catch menyebut tipe."
          },
          {
            "type": "mc",
            "q": "Multiple catch memungkinkan",
            "options": [
              "error mode exception",
              "Memisahkan query SQL dari nilai input",
              "menangkap beberapa tipe",
              "require gagal fatal, include warning"
            ],
            "a": 2,
            "explain": "Beberapa catch."
          },
          {
            "type": "mc",
            "q": "Mengabaikan exception berisiko",
            "options": [
              "tidak",
              "`$`",
              "null",
              "ya"
            ],
            "a": 3,
            "explain": "Jangan diam."
          },
          {
            "type": "mc",
            "q": "set_exception_handler menangani",
            "options": [
              "php.ini",
              "global",
              "data besar",
              "pemisahan view"
            ],
            "a": 1,
            "explain": "Handler global."
          },
          {
            "type": "mc",
            "q": "Pesan exception memakai",
            "options": [
              ".message",
              "sqrt()",
              "getMessage()",
              "sprintf()"
            ],
            "a": 2,
            "explain": "getMessage memberi pesan."
          }
        ]
      },
      {
        "id": "php-18",
        "level": "Menengah",
        "title": "PDO & Database",
        "exercises": [
          {
            "type": "mc",
            "q": "PDO menyediakan",
            "options": [
              "komponen reusable",
              "akses database",
              "json_encode",
              "<?php"
            ],
            "a": 1,
            "explain": "PDO abstraksi DB."
          },
          {
            "type": "mc",
            "q": "Prepared statement mencegah",
            "options": [
              "SQL injection",
              "count()",
              "if/elseif/else",
              "...$args"
            ],
            "a": 0,
            "explain": "Parameter terikat."
          },
          {
            "type": "mc",
            "q": "Membuat koneksi memakai",
            "options": [
              "new DB(...)",
              "new PDO(...)",
              "namespace",
              "konflik nama"
            ],
            "a": 1,
            "explain": "PDO constructor."
          },
          {
            "type": "mc",
            "q": "Menjalankan query memakai",
            "options": [
              "injeksi",
              "regenerasi ID",
              "prepare/execute",
              "PHPStan/Psalm"
            ],
            "a": 2,
            "explain": "prepare+execute."
          },
          {
            "type": "mc",
            "q": "Mengambil hasil memakai",
            "options": [
              "baca/tulis",
              "beberapa tipe",
              "konsistensi",
              "fetch/fetchAll"
            ],
            "a": 3,
            "explain": "fetch mengambil."
          },
          {
            "type": "mc",
            "q": "Transaksi memakai",
            "options": [
              "\"$nama\" atau \"{$nama}\"",
              "rand/mt_rand",
              "beginTransaction/commit",
              "str_contains()"
            ],
            "a": 2,
            "explain": "Transaksi DB."
          },
          {
            "type": "mc",
            "q": "Error handling memakai",
            "options": [
              "terpisah dari global",
              "menangkap beberapa tipe",
              "error mode exception",
              "Parameter query URL"
            ],
            "a": 2,
            "explain": "Exception mode."
          },
          {
            "type": "mc",
            "q": "Mysqli adalah",
            "options": [
              "__construct()",
              "IntlDateFormatter",
              "alternatif MySQL",
              "catch (Tipe $e)"
            ],
            "a": 2,
            "explain": "mysqli khusus MySQL."
          },
          {
            "type": "mc",
            "q": "ORM populer PHP adalah",
            "options": [
              "beginTransaction/commit",
              "Eloquent/Doctrine",
              "cookie",
              "assertSame/assertEquals"
            ],
            "a": 1,
            "explain": "Eloquent/Doctrine."
          },
          {
            "type": "mc",
            "q": "Binding parameter mencegah",
            "options": [
              "injeksi",
              "komputasi",
              "versi",
              "token/JWT"
            ],
            "a": 0,
            "explain": "Binding aman."
          }
        ]
      },
      {
        "id": "php-19",
        "level": "Menengah",
        "title": "Session & Cookie",
        "exercises": [
          {
            "type": "mc",
            "q": "Memulai session memakai",
            "options": [
              "keamanan/performa",
              "bug statis",
              "session_start()",
              "validasi path"
            ],
            "a": 2,
            "explain": "session_start."
          },
          {
            "type": "mc",
            "q": "Menyimpan session memakai",
            "options": [
              "try/catch",
              "$_SESSION['k'] = v",
              "getMessage()",
              "alternatif MySQL"
            ],
            "a": 1,
            "explain": "Assignment session."
          },
          {
            "type": "mc",
            "q": "Menghapus session memakai",
            "options": [
              "array bersarang",
              "unset/session_destroy",
              "function f(): int",
              "$_COOKIE"
            ],
            "a": 1,
            "explain": "unset/destroy."
          },
          {
            "type": "mc",
            "q": "Cookie dibuat dengan",
            "options": [
              "cookie()",
              "setcookie()",
              "otomasi",
              ".php"
            ],
            "a": 1,
            "explain": "PHP memakai setcookie."
          },
          {
            "type": "mc",
            "q": "Session ID disimpan di",
            "options": [
              "int",
              "dinamis",
              "cookie",
              "strtoupper()"
            ],
            "a": 2,
            "explain": "Session ID via cookie."
          },
          {
            "type": "mc",
            "q": "HttpOnly mencegah",
            "options": [
              "akses JS",
              "PHPUnit",
              "proses/FPM",
              "akses data"
            ],
            "a": 0,
            "explain": "HttpOnly melindungi cookie."
          },
          {
            "type": "mc",
            "q": "Secure flag memaksa",
            "options": [
              "penting",
              "otomatis",
              "HTTPS",
              "data/logika"
            ],
            "a": 2,
            "explain": "Secure untuk HTTPS."
          },
          {
            "type": "mc",
            "q": "Session fixation dicegah dengan",
            "options": [
              "header('Location: ...')",
              "regenerasi ID",
              "number_format",
              "trim()"
            ],
            "a": 1,
            "explain": "Regenerasi ID."
          },
          {
            "type": "mc",
            "q": "Session tamper-proof perlu",
            "options": [
              "pow()/**",
              "penanganan server",
              "(int)/(float)",
              "implode()"
            ],
            "a": 1,
            "explain": "Session di server."
          },
          {
            "type": "mc",
            "q": "Batas waktu session penting",
            "options": [
              "ya",
              "tidak",
              "env",
              ";"
            ],
            "a": 0,
            "explain": "Timeout session."
          }
        ]
      },
      {
        "id": "php-20",
        "level": "Menengah",
        "title": "Testing PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test PHP populer adalah",
            "options": [
              "Jest",
              "RSpec",
              "count()",
              "PHPUnit"
            ],
            "a": 3,
            "explain": "PHPUnit untuk PHP."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "komponen reusable",
              "json_encode",
              "phpunit/vendor/bin/phpunit",
              "$nama = nilai;"
            ],
            "a": 2,
            "explain": "PHPUnit runner."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "regenerasi ID",
              "assertSame/assertEquals",
              "PHPStan/Psalm",
              "dihindari"
            ],
            "a": 1,
            "explain": "PHPUnit assertions."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "namespace",
              "PHPUnit mock/createMock",
              "konflik nama",
              "perlu pertimbangan"
            ],
            "a": 1,
            "explain": "Mock bawaan."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "\"$nama\" atau \"{$nama}\"",
              "$_FILES",
              "rand/mt_rand",
              "Xdebug/phpdbg"
            ],
            "a": 3,
            "explain": "Xdebug untuk coverage."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              "baca/tulis",
              "PHPStan/Psalm",
              "beberapa tipe",
              "konsistensi"
            ],
            "a": 1,
            "explain": "PHPStan/Psalm."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "ya",
              "tidak",
              "::",
              "`$`"
            ],
            "a": 0,
            "explain": "Perilaku stabil."
          },
          {
            "type": "mc",
            "q": "CI menjalankan test penting",
            "options": [
              "tidak",
              "ya",
              "ganda",
              "="
            ],
            "a": 1,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Fixture menyiapkan",
            "options": [
              "state test",
              "trait/use",
              "DateInterval",
              "Exception"
            ],
            "a": 0,
            "explain": "Fixture state."
          },
          {
            "type": "mc",
            "q": "Test kontrak API penting",
            "options": [
              "ya",
              "tidak",
              "array",
              "UTC"
            ],
            "a": 0,
            "explain": "Kontrak API."
          }
        ]
      },
      {
        "id": "php-21",
        "level": "Advance",
        "title": "Concurrency & Async PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "PHP umumnya menangani konkurensi via",
            "options": [
              "proses/FPM",
              "beban",
              "dependency",
              "http_response_code"
            ],
            "a": 0,
            "explain": "PHP-FPM mengelola proses."
          },
          {
            "type": "mc",
            "q": "Async PHP memakai",
            "options": [
              "str_contains()",
              "Swoole/ReactPHP",
              "array_merge()",
              "return"
            ],
            "a": 1,
            "explain": "Async library PHP."
          },
          {
            "type": "mc",
            "q": "Coro/Generator memungkinkan",
            "options": [
              "asinkron",
              "$_GET",
              "penyertaan berulang",
              "move_uploaded_file"
            ],
            "a": 0,
            "explain": "Generator untuk async."
          },
          {
            "type": "mc",
            "q": "Queue memindahkan",
            "options": [
              "fetch/fetchAll",
              "pekerjaan berat",
              "setcookie()",
              "phpunit/vendor/bin/phpunit"
            ],
            "a": 1,
            "explain": "Queue job."
          },
          {
            "type": "mc",
            "q": "Worker queue memproses",
            "options": [
              "sqrt()",
              "use",
              "::",
              "job"
            ],
            "a": 3,
            "explain": "Worker job."
          },
          {
            "type": "mc",
            "q": "Race condition harus",
            "options": [
              "tersedia global",
              "dihindari",
              "direktori berkas",
              "php.ini"
            ],
            "a": 1,
            "explain": "Sinkronisasi."
          },
          {
            "type": "mc",
            "q": "Locking membantu",
            "options": [
              "class Nama {}",
              "trait/use",
              "akses bersama",
              "DateInterval"
            ],
            "a": 2,
            "explain": "Locking data."
          },
          {
            "type": "mc",
            "q": "Timeout penting",
            "options": [
              "tidak",
              "ya",
              "?->",
              "token"
            ],
            "a": 1,
            "explain": "Mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Observability penting",
            "options": [
              "tidak",
              "ya",
              "throw",
              "?->"
            ],
            "a": 1,
            "explain": "Monitoring."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown penting",
            "options": [
              "tidak",
              "<?php",
              "ya",
              "."
            ],
            "a": 2,
            "explain": "Shutdown aman."
          }
        ]
      },
      {
        "id": "php-22",
        "level": "Advance",
        "title": "Arsitektur PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "$_GET",
              "penyertaan berulang",
              "akses data",
              "move_uploaded_file"
            ],
            "a": 2,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Service layer menampung",
            "options": [
              "logika bisnis",
              "Composer",
              "GET/POST",
              "round/floor/ceil"
            ],
            "a": 0,
            "explain": "Service bisnis."
          },
          {
            "type": "mc",
            "q": "DI container membantu",
            "options": [
              "password_hash",
              "dependency",
              "http_response_code",
              "pengelolaan dependensi"
            ],
            "a": 3,
            "explain": "DI container."
          },
          {
            "type": "mc",
            "q": "Interface memisahkan",
            "options": [
              "catch (Tipe $e)",
              "fetch/fetchAll",
              "kontrak",
              "setcookie()"
            ],
            "a": 2,
            "explain": "Interface kontrak."
          },
          {
            "type": "mc",
            "q": "Domain bebas framework",
            "options": [
              "disarankan",
              "tidak",
              "min()",
              "explode()"
            ],
            "a": 0,
            "explain": "Domain bersih."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "prepared statement",
              "skalabilitas",
              "eksekusi",
              "komponen reusable"
            ],
            "a": 1,
            "explain": "Modul."
          },
          {
            "type": "mc",
            "q": "CQRS memisahkan",
            "options": [
              "asinkron",
              "baca/tulis",
              "pengelolaan dependensi",
              "konstanta bertipe"
            ],
            "a": 1,
            "explain": "CQRS."
          },
          {
            "type": "mc",
            "q": "Event memisahkan",
            "options": [
              "autoloader",
              "alur request",
              "interface/implements",
              "komponen"
            ],
            "a": 3,
            "explain": "Event."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur penting",
            "options": [
              "tidak",
              "ya",
              ";",
              "array"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "beban",
              "ya",
              "HTML"
            ],
            "a": 2,
            "explain": "Bertahap."
          }
        ]
      },
      {
        "id": "php-23",
        "level": "Advance",
        "title": "PHP Modern Features",
        "exercises": [
          {
            "type": "mc",
            "q": "readonly property (8.1) memungkinkan",
            "options": [
              "for (...)",
              "function nama()",
              "function() use($x)",
              "immutable"
            ],
            "a": 3,
            "explain": "Readonly immutable."
          },
          {
            "type": "mc",
            "q": "enum (8.1) untuk",
            "options": [
              "date_default_timezone_set",
              "konstanta bertipe",
              "Exception/Error",
              "new PDO(...)"
            ],
            "a": 1,
            "explain": "Enum bertipe."
          },
          {
            "type": "mc",
            "q": "first-class callable syntax memakai",
            "options": [
              "env",
              "f(...)",
              "escaping output",
              "Xdebug/Blackfire"
            ],
            "a": 1,
            "explain": "Callable syntax."
          },
          {
            "type": "mc",
            "q": "fibers (8.1) memungkinkan",
            "options": [
              "pow()/**",
              "asinkron",
              "(int)/(float)",
              "implode()"
            ],
            "a": 1,
            "explain": "Fibers async."
          },
          {
            "type": "mc",
            "q": "match expression lebih ringkas dari",
            "options": [
              "disanitasi",
              "struktur folder",
              "entry point",
              "switch"
            ],
            "a": 3,
            "explain": "Match ringkas."
          },
          {
            "type": "mc",
            "q": "named arguments memudahkan",
            "options": [
              "PHPUnit mock/createMock",
              "pemanggilan jelas",
              "pekerjaan berat",
              "kontrak"
            ],
            "a": 1,
            "explain": "Named args."
          },
          {
            "type": "mc",
            "q": "nullsafe operator memakai",
            "options": [
              "->?",
              "`$`",
              "abs()",
              "?->"
            ],
            "a": 3,
            "explain": "Nullsafe ?->."
          },
          {
            "type": "mc",
            "q": "union types memungkinkan",
            "options": [
              "beberapa tipe",
              "minimal sekali",
              "deklarasi tipe",
              "$_SESSION"
            ],
            "a": 0,
            "explain": "Union types."
          },
          {
            "type": "mc",
            "q": "attributes menggantikan",
            "options": [
              "anotasi docblock",
              "global",
              "beginTransaction/commit",
              "cookie"
            ],
            "a": 0,
            "explain": "Attributes native."
          },
          {
            "type": "mc",
            "q": "Update PHP penting",
            "options": [
              "format",
              "password_verify",
              "keamanan/performa",
              "komputasi"
            ],
            "a": 2,
            "explain": "Versi baru."
          }
        ]
      },
      {
        "id": "php-24",
        "level": "Advance",
        "title": "Deployment PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Server PHP umum memakai",
            "options": [
              "php file.php",
              "dinamis",
              "$_SERVER['REQUEST_METHOD']",
              "PHP-FPM + Nginx/Apache"
            ],
            "a": 3,
            "explain": "FPM dengan web server."
          },
          {
            "type": "mc",
            "q": "Konfigurasi produksi menonaktifkan",
            "options": [
              "time()",
              "try/catch",
              "getMessage()",
              "display_errors"
            ],
            "a": 3,
            "explain": "Matikan display errors."
          },
          {
            "type": "mc",
            "q": "OpCache diaktifkan di",
            "options": [
              "array bersarang",
              "di loop",
              "produksi",
              "function f(): int"
            ],
            "a": 2,
            "explain": "OpCache produksi."
          },
          {
            "type": "mc",
            "q": "Dependency dipasang dengan",
            "options": [
              "pemrosesan web di server",
              "data ke JSON",
              "tipe dan ukuran",
              "composer install --no-dev"
            ],
            "a": 3,
            "explain": "Install tanpa dev."
          },
          {
            "type": "mc",
            "q": "Environment dipisah via",
            "options": [
              "int",
              "dinamis",
              "ganda",
              "env"
            ],
            "a": 3,
            "explain": "Konfigurasi env."
          },
          {
            "type": "mc",
            "q": "Logging terpusat penting",
            "options": [
              "tidak",
              "versi",
              "ya",
              "bool"
            ],
            "a": 2,
            "explain": "Log terpusat."
          },
          {
            "type": "mc",
            "q": "Health check penting",
            "options": [
              "ya",
              "tidak",
              "UTC",
              "wajib"
            ],
            "a": 0,
            "explain": "Health check."
          },
          {
            "type": "mc",
            "q": "Rolling deploy meminimalkan",
            "options": [
              "number_format",
              "trim()",
              "downtime",
              "[1,2,3] / array()"
            ],
            "a": 2,
            "explain": "Rolling deploy."
          },
          {
            "type": "mc",
            "q": "Migrasi DB bertahap",
            "options": [
              "tidak",
              "trait/use",
              "penting",
              "DateInterval"
            ],
            "a": 2,
            "explain": "Migrasi aman."
          },
          {
            "type": "mc",
            "q": "Backup penting",
            "options": [
              "tidak",
              "array",
              "ya",
              "UTC"
            ],
            "a": 2,
            "explain": "Backup data."
          }
        ]
      },
      {
        "id": "php-25",
        "level": "Advance",
        "title": "Kualitas Kode PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "PSR standar menjaga",
            "options": [
              "if/elseif/else",
              "...$args",
              "konsistensi",
              "tersedia global"
            ],
            "a": 2,
            "explain": "PSR konsistensi."
          },
          {
            "type": "mc",
            "q": "PHP-CS-Fixer menyeragamkan",
            "options": [
              "format",
              "date('Y-m-d')",
              "selalu",
              "akses database"
            ],
            "a": 0,
            "explain": "Fixer format."
          },
          {
            "type": "mc",
            "q": "PHPStan/Psalm menemukan",
            "options": [
              "regenerasi ID",
              "dihindari",
              "bug statis",
              "skalabilitas"
            ],
            "a": 2,
            "explain": "Static analysis."
          },
          {
            "type": "mc",
            "q": "Rector membantu",
            "options": [
              "json_encode",
              "<?php",
              "$nama = nilai;",
              "refactor"
            ],
            "a": 3,
            "explain": "Rector refactor."
          },
          {
            "type": "mc",
            "q": "Menghindari god class",
            "options": [
              "tidak",
              "$_FILES",
              "rand/mt_rand",
              "penting"
            ],
            "a": 3,
            "explain": "Pecah class."
          },
          {
            "type": "mc",
            "q": "Nama jelas penting",
            "options": [
              "ya",
              "tidak",
              "versi",
              "bool"
            ],
            "a": 0,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "Test regresi penting",
            "options": [
              "tidak",
              "::",
              "`$`",
              "ya"
            ],
            "a": 3,
            "explain": "Regresi."
          },
          {
            "type": "mc",
            "q": "Review kode penting",
            "options": [
              "ya",
              "tidak",
              "beban",
              "HTML"
            ],
            "a": 0,
            "explain": "Review."
          },
          {
            "type": "mc",
            "q": "Dokumentasi penting",
            "options": [
              "ya",
              "tidak",
              "versi",
              "bool"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "CI otomasi penting",
            "options": [
              "tidak",
              "token",
              "$",
              "ya"
            ],
            "a": 3,
            "explain": "CI."
          }
        ]
      },
      {
        "id": "php-26",
        "level": "Advance",
        "title": "Keamanan PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "autoload",
              "tampilan",
              "prepared statement",
              "public/protected/private"
            ],
            "a": 2,
            "explain": "Parameter terikat."
          },
          {
            "type": "mc",
            "q": "XSS dicegah dengan",
            "options": [
              "str_replace()",
              "escaping output",
              "['a' => 1]",
              "array bersarang"
            ],
            "a": 1,
            "explain": "Escaping output."
          },
          {
            "type": "mc",
            "q": "CSRF dicegah dengan",
            "options": [
              "token",
              "HTML",
              "float",
              "action"
            ],
            "a": 0,
            "explain": "Token CSRF."
          },
          {
            "type": "mc",
            "q": "Menyimpan password memakai",
            "options": [
              "password_hash",
              "md5",
              "Swoole/ReactPHP",
              "logika bisnis"
            ],
            "a": 0,
            "explain": "password_hash aman."
          },
          {
            "type": "mc",
            "q": "Memverifikasi password memakai",
            "options": [
              "Exception",
              "prepare/execute",
              "unset/session_destroy",
              "password_verify"
            ],
            "a": 3,
            "explain": "password_verify."
          },
          {
            "type": "mc",
            "q": "eval pada input berisiko",
            "options": [
              "tidak",
              "ya",
              "UTC",
              "wajib"
            ],
            "a": 1,
            "explain": "Hindari eval."
          },
          {
            "type": "mc",
            "q": "Upload divalidasi",
            "options": [
              "Memisahkan query SQL dari nilai input",
              "require gagal fatal, include warning",
              "tipe dan ukuran",
              "error mode exception"
            ],
            "a": 2,
            "explain": "Validasi upload."
          },
          {
            "type": "mc",
            "q": "Path traversal dicegah",
            "options": [
              "token",
              "eager loading",
              "request",
              "validasi path"
            ],
            "a": 3,
            "explain": "Validasi path."
          },
          {
            "type": "mc",
            "q": "Secrets disimpan di",
            "options": [
              "environment/secret manager",
              "disarankan",
              "pemanggilan jelas",
              "escaping output"
            ],
            "a": 0,
            "explain": "Rahasia aman."
          },
          {
            "type": "mc",
            "q": "Dependency scanning penting",
            "options": [
              "tidak",
              "beban",
              "ya",
              "HTML"
            ],
            "a": 2,
            "explain": "Scan dependency."
          }
        ]
      },
      {
        "id": "php-27",
        "level": "Advance",
        "title": "Performance PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "OpCache mempercepat",
            "options": [
              "getMessage()",
              "eksekusi",
              "alternatif MySQL",
              "akses JS"
            ],
            "a": 1,
            "explain": "OpCache cache bytecode."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "Xdebug/Blackfire",
              "validasi path",
              "performa",
              "repository package"
            ],
            "a": 0,
            "explain": "Profiler PHP."
          },
          {
            "type": "mc",
            "q": "Query N+1 dihindari dengan",
            "options": [
              "trim()",
              "[1,2,3] / array()",
              "eager loading",
              "array_map()"
            ],
            "a": 2,
            "explain": "Eager loading."
          },
          {
            "type": "mc",
            "q": "Caching mengurangi",
            "options": [
              "data/logika",
              "new Nama()",
              "date()",
              "beban"
            ],
            "a": 3,
            "explain": "Cache beban."
          },
          {
            "type": "mc",
            "q": "Mengurangi alokasi",
            "options": [
              "tidak",
              "data besar",
              "penting",
              "pemisahan view"
            ],
            "a": 2,
            "explain": "Alokasi berpengaruh."
          },
          {
            "type": "mc",
            "q": "JIT (PHP 8) membantu",
            "options": [
              "komputasi",
              "disarankan",
              "pemanggilan jelas",
              "escaping output"
            ],
            "a": 0,
            "explain": "JIT PHP 8."
          },
          {
            "type": "mc",
            "q": "Batching query membantu",
            "options": [
              "performa",
              "// atau #",
              "gettype/is_*",
              "pow()/**"
            ],
            "a": 0,
            "explain": "Batch mengurangi roundtrip."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "tidak",
              "$_COOKIE",
              "wajib",
              "memuat class"
            ],
            "a": 2,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Session storage efisien",
            "options": [
              "tidak",
              "Xdebug/Blackfire",
              "ORM Laravel",
              "penting"
            ],
            "a": 3,
            "explain": "Session efisien."
          },
          {
            "type": "mc",
            "q": "Load balancing membantu",
            "options": [
              "skalabilitas",
              "implode()",
              "foreach",
              "switch"
            ],
            "a": 0,
            "explain": "Load balancer."
          }
        ]
      },
      {
        "id": "php-28",
        "level": "Advance",
        "title": "Framework PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Laravel adalah",
            "options": [
              "framework PHP populer",
              "error mode exception",
              "Memisahkan query SQL dari nilai input",
              "require gagal fatal, include warning"
            ],
            "a": 0,
            "explain": "Laravel framework."
          },
          {
            "type": "mc",
            "q": "Symfony menyediakan",
            "options": [
              "sprintf()",
              "array_keys()",
              "komponen reusable",
              "for (...)"
            ],
            "a": 2,
            "explain": "Symfony komponen."
          },
          {
            "type": "mc",
            "q": "Eloquent adalah",
            "options": [
              "eager loading",
              "ORM Laravel",
              "request",
              "Content-Type: application/json"
            ],
            "a": 1,
            "explain": "Eloquent ORM."
          },
          {
            "type": "mc",
            "q": "Blade adalah",
            "options": [
              "aman dari duplikasi",
              "template engine Laravel",
              "composer install --no-dev",
              "Jenis argumen atau nilai balik yang diharapkan"
            ],
            "a": 1,
            "explain": "Blade template."
          },
          {
            "type": "mc",
            "q": "Middleware memproses",
            "options": [
              "$_POST",
              "request",
              "include/require",
              "penting"
            ],
            "a": 1,
            "explain": "Middleware request."
          },
          {
            "type": "mc",
            "q": "Routing memetakan",
            "options": [
              "template engine Laravel",
              "kondisi ? a : b",
              ".php",
              "URL ke controller"
            ],
            "a": 3,
            "explain": "Routing URL."
          },
          {
            "type": "mc",
            "q": "Dependency injection container",
            "options": [
              "tidak",
              "penting",
              "logika bisnis",
              "immutable"
            ],
            "a": 1,
            "explain": "DI container."
          },
          {
            "type": "mc",
            "q": "Testing framework penting",
            "options": [
              "tidak",
              "<?php",
              ".",
              "ya"
            ],
            "a": 3,
            "explain": "Test framework."
          },
          {
            "type": "mc",
            "q": "Dokumentasi framework penting",
            "options": [
              "tidak",
              "throw",
              "?->",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Pilih framework sesuai kebutuhan",
            "options": [
              "tidak",
              "wajib",
              "ya",
              ".php"
            ],
            "a": 2,
            "explain": "Sesuai kebutuhan."
          }
        ]
      },
      {
        "id": "php-29",
        "level": "Advance",
        "title": "Composer & Ekosistem",
        "exercises": [
          {
            "type": "mc",
            "q": "composer.json mendefinisikan",
            "options": [
              "autoloader",
              "alur request",
              "interface/implements",
              "dependency"
            ],
            "a": 3,
            "explain": "Composer mendefinisikan dependency."
          },
          {
            "type": "mc",
            "q": "composer.lock mengunci",
            "options": [
              "asinkron",
              "display_errors",
              "versi",
              "refactor"
            ],
            "a": 2,
            "explain": "Lock versi."
          },
          {
            "type": "mc",
            "q": "composer install memasang",
            "options": [
              "prepared statement",
              "eksekusi",
              "dependency",
              "komponen reusable"
            ],
            "a": 2,
            "explain": "Install dependency."
          },
          {
            "type": "mc",
            "q": "composer update memperbarui",
            "options": [
              "min()",
              "dependency",
              "explode()",
              "count()"
            ],
            "a": 1,
            "explain": "Update dependency."
          },
          {
            "type": "mc",
            "q": "Autoload PSR-4 memudahkan",
            "options": [
              "catch (Tipe $e)",
              "fetch/fetchAll",
              "memuat class",
              "setcookie()"
            ],
            "a": 2,
            "explain": "PSR-4 autoload."
          },
          {
            "type": "mc",
            "q": "Packagist adalah",
            "options": [
              "password_hash",
              "repository package",
              "dependency",
              "http_response_code"
            ],
            "a": 1,
            "explain": "Packagist registry."
          },
          {
            "type": "mc",
            "q": "Versioning semver penting",
            "options": [
              "ya",
              "tidak",
              "bool",
              "max()"
            ],
            "a": 0,
            "explain": "Semver."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency aman",
            "options": [
              "penting",
              "tidak",
              "$_GET",
              "penyertaan berulang"
            ],
            "a": 0,
            "explain": "Scan dependency."
          },
          {
            "type": "mc",
            "q": "Script composer membantu",
            "options": [
              "strtoupper()",
              "otomasi",
              "ganda",
              "array_filter()"
            ],
            "a": 1,
            "explain": "Composer scripts."
          },
          {
            "type": "mc",
            "q": "Dokumentasi proyek penting",
            "options": [
              "tidak",
              "use",
              "ya",
              "::"
            ],
            "a": 2,
            "explain": "Dokumentasi."
          }
        ]
      },
      {
        "id": "php-30",
        "level": "Advance",
        "title": "API & JSON PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengembalikan JSON memakai",
            "options": [
              "prepare/execute",
              "unset/session_destroy",
              "json_encode",
              "PHPUnit"
            ],
            "a": 2,
            "explain": "json_encode."
          },
          {
            "type": "mc",
            "q": "Membaca JSON memakai",
            "options": [
              "eager loading",
              "request",
              "json_decode",
              "Content-Type: application/json"
            ],
            "a": 2,
            "explain": "json_decode."
          },
          {
            "type": "mc",
            "q": "Header JSON memakai",
            "options": [
              "array_keys()",
              "function nama()",
              "function() use($x)",
              "Content-Type: application/json"
            ],
            "a": 3,
            "explain": "Header JSON."
          },
          {
            "type": "mc",
            "q": "Status HTTP memakai",
            "options": [
              "pemisahan view",
              "http_response_code",
              "extends",
              "date_default_timezone_set"
            ],
            "a": 1,
            "explain": "Atur status."
          },
          {
            "type": "mc",
            "q": "Autentikasi API memakai",
            "options": [
              "tampilan",
              "token/JWT",
              "public/protected/private",
              "time()"
            ],
            "a": 1,
            "explain": "Token API."
          },
          {
            "type": "mc",
            "q": "Validasi input API penting",
            "options": [
              "tidak",
              "ya",
              "`$`",
              "null"
            ],
            "a": 1,
            "explain": "Validasi server."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "ya",
              "tidak",
              "float",
              "HTTPS"
            ],
            "a": 0,
            "explain": "Kompatibilitas."
          },
          {
            "type": "mc",
            "q": "CORS diatur via header",
            "options": [
              "ya",
              "tidak",
              "UTC",
              "wajib"
            ],
            "a": 0,
            "explain": "Header CORS."
          },
          {
            "type": "mc",
            "q": "Rate limiting penting",
            "options": [
              "tidak",
              "beban",
              "ya",
              "HTML"
            ],
            "a": 2,
            "explain": "Batasi request."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API penting",
            "options": [
              "tidak",
              "HTTPS",
              "ya",
              "job"
            ],
            "a": 2,
            "explain": "OpenAPI."
          }
        ]
      },
      {
        "id": "php-31",
        "level": "Advance",
        "title": "Master Review & Best Practice PHP",
        "exercises": [
          {
            "type": "mc",
            "q": "PHP paling umum digunakan di sisi server untuk",
            "options": [
              "Mengatur styling browser saja",
              "Memproses request dan menghasilkan respons web",
              "Mengompilasi aplikasi Android",
              "Menjalankan query MATLAB"
            ],
            "a": 1,
            "explain": "PHP dijalankan di server untuk menangani request dan menghasilkan konten."
          },
          {
            "type": "mc",
            "q": "Nama variabel PHP diawali dengan",
            "options": [
              "`#`",
              "`@`",
              "`&`",
              "`$`"
            ],
            "a": 3,
            "explain": "Variabel PHP ditulis dengan tanda dolar, misalnya $name."
          },
          {
            "type": "mc",
            "q": "Superglobal `$_GET` pada PHP umumnya berisi",
            "options": [
              "Parameter query URL",
              "Isi file CSS",
              "Konfigurasi compiler",
              "Daftar class yang sedang aktif"
            ],
            "a": 0,
            "explain": "$_GET berisi data yang dikirim melalui parameter query URL."
          },
          {
            "type": "mc",
            "q": "Prepared statement pada akses database PHP membantu",
            "options": [
              "Menghilangkan kebutuhan koneksi database",
              "Mengubah input menjadi HTML",
              "Memisahkan query SQL dari nilai input",
              "Menjalankan SQL di browser"
            ],
            "a": 2,
            "explain": "Parameter terikat membantu menjaga nilai input tetap terpisah dari struktur query."
          },
          {
            "type": "mc",
            "q": "Deklarasi tipe pada fungsi PHP membantu menyatakan",
            "options": [
              "Warna elemen HTML",
              "Lokasi route browser",
              "Jenis argumen atau nilai balik yang diharapkan",
              "Ukuran tabel database otomatis"
            ],
            "a": 2,
            "explain": "Type declaration memperjelas kontrak argumen dan nilai balik fungsi."
          }
        ]
      }
    ]
  }
];

export { CONTENT_PHP };
