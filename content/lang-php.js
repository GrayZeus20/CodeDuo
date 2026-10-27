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
              "CSS",
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
              "CSS",
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
              "CSS"
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
              "CSS"
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
              "CSS",
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
              "CSS",
              "route"
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
              "CSS"
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
              "CSS"
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
              "CSS"
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
              "CSS",
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS"
            ],
            "a": 1,
            "explain": "PHP menginterpolasi di kutip ganda."
          },
          {
            "type": "mc",
            "q": "PHP bertipe",
            "options": [
              "statis",
              "CSS",
              "route",
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
              "CSS",
              "action",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "GET/POST umum."
          },
          {
            "type": "mc",
            "q": "Membaca input form memakai",
            "options": [
              "CSS",
              "route",
              "$_POST/$_GET",
              "migrasi"
            ],
            "a": 2,
            "explain": "Superglobal form."
          },
          {
            "type": "mc",
            "q": "Validasi sisi server wajib",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Validasi server wajib."
          },
          {
            "type": "mc",
            "q": "Escape output form memakai",
            "options": [
              "CSS",
              "htmlspecialchars()",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "htmlspecialchars mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Menangani file upload memakai",
            "options": [
              "CSS",
              "$_FILES",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Data upload di $_FILES."
          },
          {
            "type": "mc",
            "q": "Memeriksa method dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "$_SERVER['REQUEST_METHOD']"
            ],
            "a": 3,
            "explain": "REQUEST_METHOD."
          },
          {
            "type": "mc",
            "q": "Redirect setelah submit memakai",
            "options": [
              "CSS",
              "route",
              "header('Location: ...')",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Field wajib divalidasi."
          },
          {
            "type": "mc",
            "q": "CSRF token pada form penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fungsi pembulatan."
          },
          {
            "type": "mc",
            "q": "Nilai absolut memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "pow atau **."
          },
          {
            "type": "mc",
            "q": "Akar memakai",
            "options": [
              "root()",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "PHP memakai %."
          },
          {
            "type": "mc",
            "q": "Format angka memakai",
            "options": [
              "CSS",
              "route",
              "number_format",
              "migrasi"
            ],
            "a": 2,
            "explain": "number_format."
          },
          {
            "type": "mc",
            "q": "Bilangan maksimum memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "min fungsi."
          },
          {
            "type": "mc",
            "q": "Konversi string ke angka",
            "options": [
              "CSS",
              "route",
              "(int)/(float)",
              "migrasi"
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
              "CSS"
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "trim memangkas."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              "replace()",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "[1,2,3] / array()"
            ],
            "a": 3,
            "explain": "PHP memakai []/array()."
          },
          {
            "type": "mc",
            "q": "Array asosiatif memakai",
            "options": [
              "CSS",
              "route",
              "['a' => 1]",
              "migrasi"
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
              "CSS"
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
              "CSS"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "array_filter menyaring."
          },
          {
            "type": "mc",
            "q": "Mengubah array memakai",
            "options": [
              "map()",
              "CSS",
              "array_map()",
              "route"
            ],
            "a": 2,
            "explain": "array_map transformasi."
          },
          {
            "type": "mc",
            "q": "Array multidimensi memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "PHP memakai elseif."
          },
          {
            "type": "mc",
            "q": "Percabangan multi memakai",
            "options": [
              "when",
              "CSS",
              "switch",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "For klasik."
          },
          {
            "type": "mc",
            "q": "foreach mengiterasi",
            "options": [
              "CSS",
              "array",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "foreach untuk array."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kondisi benar"
            ],
            "a": 3,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan",
            "options": [
              "CSS",
              "minimal sekali",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "CSS",
              "di loop",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "Ternary memakai",
            "options": [
              "if(a,b)",
              "CSS",
              "route",
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
              "CSS",
              "??"
            ],
            "a": 3,
            "explain": "PHP memakai ??."
          },
          {
            "type": "mc",
            "q": "Match (PHP 8) memakai",
            "options": [
              "match",
              "switch only",
              "CSS",
              "route"
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
              "CSS",
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
              "CSS",
              "route",
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
              "CSS",
              "=",
              "route"
            ],
            "a": 2,
            "explain": "Nilai default dengan =."
          },
          {
            "type": "mc",
            "q": "Type hint parameter memungkinkan",
            "options": [
              "CSS",
              "deklarasi tipe",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHP mendukung type hint."
          },
          {
            "type": "mc",
            "q": "Return type memakai",
            "options": [
              "CSS",
              "route",
              "function f(): int",
              "migrasi"
            ],
            "a": 2,
            "explain": "Return type setelah :."
          },
          {
            "type": "mc",
            "q": "Variadic memakai",
            "options": [
              "$args...",
              "CSS",
              "route",
              "...$args"
            ],
            "a": 3,
            "explain": "PHP memakai ...$args."
          },
          {
            "type": "mc",
            "q": "Arrow function memakai",
            "options": [
              "CSS",
              "fn($x) => ...",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHP 7.4+ fn()."
          },
          {
            "type": "mc",
            "q": "Closure memakai",
            "options": [
              "lambda",
              "CSS",
              "function() use($x)",
              "route"
            ],
            "a": 2,
            "explain": "Closure memakai use."
          },
          {
            "type": "mc",
            "q": "Named argument (PHP 8) memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
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
              "CSS",
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
              "CSS",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "PHP memakai $_COOKIE."
          },
          {
            "type": "mc",
            "q": "Upload file diakses via",
            "options": [
              "$_UPLOAD",
              "CSS",
              "$_FILES",
              "route"
            ],
            "a": 2,
            "explain": "PHP memakai $_FILES."
          },
          {
            "type": "mc",
            "q": "Method request memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "$_SERVER['REQUEST_METHOD']"
            ],
            "a": 3,
            "explain": "REQUEST_METHOD menandai method."
          },
          {
            "type": "mc",
            "q": "Superglobal bersifat",
            "options": [
              "CSS",
              "tersedia global",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Superglobal tersedia di mana saja."
          },
          {
            "type": "mc",
            "q": "Validasi input superglobal penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Input tidak tepercaya."
          },
          {
            "type": "mc",
            "q": "Menyanitasi output mencegah",
            "options": [
              "CSS",
              "XSS",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Escaping mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Session dimulai dengan",
            "options": [
              "session_start()",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
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
              "CSS",
              "require gagal fatal, include warning",
              "route"
            ],
            "a": 2,
            "explain": "require fatal saat gagal."
          },
          {
            "type": "mc",
            "q": "once mencegah",
            "options": [
              "CSS",
              "route",
              "penyertaan berulang",
              "migrasi"
            ],
            "a": 2,
            "explain": "once mencegah duplikasi."
          },
          {
            "type": "mc",
            "q": "require_once variasi yang",
            "options": [
              "CSS",
              "aman dari duplikasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "require_once aman."
          },
          {
            "type": "mc",
            "q": "Autoload memuat",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Composer autoload."
          },
          {
            "type": "mc",
            "q": "__DIR__ memberi",
            "options": [
              "CSS",
              "direktori berkas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "__DIR__ direktori."
          },
          {
            "type": "mc",
            "q": "Namespace memakai",
            "options": [
              "namespace",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "PHP memakai namespace."
          },
          {
            "type": "mc",
            "q": "use mengimpor",
            "options": [
              "CSS",
              "namespace/class",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "use mengimpor."
          },
          {
            "type": "mc",
            "q": "Menghindari include berlebih",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "$_FILES"
            ],
            "a": 3,
            "explain": "Upload di $_FILES."
          },
          {
            "type": "mc",
            "q": "Memindahkan file memakai",
            "options": [
              "CSS",
              "move_uploaded_file",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "move_uploaded_file."
          },
          {
            "type": "mc",
            "q": "Memeriksa ukuran memakai",
            "options": [
              "CSS",
              "$_FILES[...]['size']",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Size pada array."
          },
          {
            "type": "mc",
            "q": "Memeriksa tipe MIME",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Validasi MIME."
          },
          {
            "type": "mc",
            "q": "Nama file harus",
            "options": [
              "CSS",
              "route",
              "disanitasi",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Simpan aman."
          },
          {
            "type": "mc",
            "q": "Batas ukuran upload diatur di",
            "options": [
              "php.ini",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "konflik nama",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Namespace mencegah konflik."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan namespace memakai",
            "options": [
              "namespace",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kata kunci namespace."
          },
          {
            "type": "mc",
            "q": "Mengimpor class memakai",
            "options": [
              "CSS",
              "use",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "use mengimpor."
          },
          {
            "type": "mc",
            "q": "Autoload memuat class",
            "options": [
              "CSS",
              "route",
              "otomatis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Autoload class."
          },
          {
            "type": "mc",
            "q": "PSR-4 standar",
            "options": [
              "CSS",
              "autoload",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PSR-4 standar."
          },
          {
            "type": "mc",
            "q": "Spl_autoload_register mendaftarkan",
            "options": [
              "CSS",
              "autoloader",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Daftar autoloader."
          },
          {
            "type": "mc",
            "q": "Nama class berhubungan dengan",
            "options": [
              "struktur folder",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Uji autoload penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi",
              "data ke JSON"
            ],
            "a": 3,
            "explain": "Encode JSON."
          },
          {
            "type": "mc",
            "q": "json_decode mengubah",
            "options": [
              "CSS",
              "JSON ke data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Decode JSON."
          },
          {
            "type": "mc",
            "q": "json_decode assoc true memberi",
            "options": [
              "CSS",
              "route",
              "array",
              "migrasi"
            ],
            "a": 2,
            "explain": "Assoc array."
          },
          {
            "type": "mc",
            "q": "Header JSON wajib diset",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
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
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Kelola memori."
          },
          {
            "type": "mc",
            "q": "Streaming JSON memungkinkan",
            "options": [
              "CSS",
              "data besar",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Streaming opsional."
          },
          {
            "type": "mc",
            "q": "Validasi data JSON penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "Menyimpan JSON di DB",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "MVC memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Model bertanggung jawab",
            "options": [
              "CSS",
              "data/logika",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Model data."
          },
          {
            "type": "mc",
            "q": "View bertanggung jawab",
            "options": [
              "CSS",
              "route",
              "tampilan",
              "migrasi"
            ],
            "a": 2,
            "explain": "View tampilan."
          },
          {
            "type": "mc",
            "q": "Controller mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "alur request"
            ],
            "a": 3,
            "explain": "Controller alur."
          },
          {
            "type": "mc",
            "q": "Front controller memusatkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "entry point"
            ],
            "a": 3,
            "explain": "Satu entry."
          },
          {
            "type": "mc",
            "q": "Router memetakan",
            "options": [
              "CSS",
              "URL ke controller",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Router URL."
          },
          {
            "type": "mc",
            "q": "Template engine membantu",
            "options": [
              "CSS",
              "route",
              "pemisahan view",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "PHP memakai class."
          },
          {
            "type": "mc",
            "q": "Konstruktor memakai",
            "options": [
              "constructor()",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "new Nama()"
            ],
            "a": 3,
            "explain": "PHP memakai new."
          },
          {
            "type": "mc",
            "q": "Visibility meliputi",
            "options": [
              "CSS",
              "public/protected/private",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHP punya tiga visibility."
          },
          {
            "type": "mc",
            "q": "Property promotion (PHP 8) mempersingkat",
            "options": [
              "konstruktor dan property",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Promotion menghemat kode."
          },
          {
            "type": "mc",
            "q": "Interface memakai",
            "options": [
              "CSS",
              "interface/implements",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHP memakai interface."
          },
          {
            "type": "mc",
            "q": "Abstract class memakai",
            "options": [
              "CSS",
              "route",
              "abstract class",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "PHP memakai extends."
          },
          {
            "type": "mc",
            "q": "Trait memakai",
            "options": [
              "trait/use",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "date() memberi tanggal."
          },
          {
            "type": "mc",
            "q": "Timestamp memakai",
            "options": [
              "time()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "time() timestamp."
          },
          {
            "type": "mc",
            "q": "Format tanggal memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Immutable lebih aman."
          },
          {
            "type": "mc",
            "q": "Timezone diatur dengan",
            "options": [
              "date_default_timezone_set",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Atur timezone."
          },
          {
            "type": "mc",
            "q": "Selisih waktu memakai",
            "options": [
              "CSS",
              "route",
              "DateInterval",
              "migrasi"
            ],
            "a": 2,
            "explain": "Interval selisih."
          },
          {
            "type": "mc",
            "q": "Format internasional memakai",
            "options": [
              "CSS",
              "route",
              "IntlDateFormatter",
              "migrasi"
            ],
            "a": 2,
            "explain": "Intl formatter."
          },
          {
            "type": "mc",
            "q": "Menyimpan waktu di DB memakai",
            "options": [
              "CSS",
              "route",
              "UTC",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "try/catch",
              "route"
            ],
            "a": 2,
            "explain": "PHP memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "CSS",
              "route",
              "selalu",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "PHP memakai throw."
          },
          {
            "type": "mc",
            "q": "Exception mewarisi",
            "options": [
              "CSS",
              "Exception/Error",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHP punya Exception/Error."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Exception"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe spesifik memakai",
            "options": [
              "CSS",
              "route",
              "catch (Tipe $e)",
              "migrasi"
            ],
            "a": 2,
            "explain": "Catch menyebut tipe."
          },
          {
            "type": "mc",
            "q": "Multiple catch memungkinkan",
            "options": [
              "CSS",
              "route",
              "menangkap beberapa tipe",
              "migrasi"
            ],
            "a": 2,
            "explain": "Beberapa catch."
          },
          {
            "type": "mc",
            "q": "Mengabaikan exception berisiko",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Jangan diam."
          },
          {
            "type": "mc",
            "q": "set_exception_handler menangani",
            "options": [
              "CSS",
              "global",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Handler global."
          },
          {
            "type": "mc",
            "q": "Pesan exception memakai",
            "options": [
              ".message",
              "CSS",
              "getMessage()",
              "route"
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
              "CSS",
              "akses database",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PDO abstraksi DB."
          },
          {
            "type": "mc",
            "q": "Prepared statement mencegah",
            "options": [
              "SQL injection",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "PDO constructor."
          },
          {
            "type": "mc",
            "q": "Menjalankan query memakai",
            "options": [
              "CSS",
              "route",
              "prepare/execute",
              "migrasi"
            ],
            "a": 2,
            "explain": "prepare+execute."
          },
          {
            "type": "mc",
            "q": "Mengambil hasil memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "fetch/fetchAll"
            ],
            "a": 3,
            "explain": "fetch mengambil."
          },
          {
            "type": "mc",
            "q": "Transaksi memakai",
            "options": [
              "CSS",
              "route",
              "beginTransaction/commit",
              "migrasi"
            ],
            "a": 2,
            "explain": "Transaksi DB."
          },
          {
            "type": "mc",
            "q": "Error handling memakai",
            "options": [
              "CSS",
              "route",
              "error mode exception",
              "migrasi"
            ],
            "a": 2,
            "explain": "Exception mode."
          },
          {
            "type": "mc",
            "q": "Mysqli adalah",
            "options": [
              "CSS",
              "route",
              "alternatif MySQL",
              "migrasi"
            ],
            "a": 2,
            "explain": "mysqli khusus MySQL."
          },
          {
            "type": "mc",
            "q": "ORM populer PHP adalah",
            "options": [
              "CSS",
              "Eloquent/Doctrine",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Eloquent/Doctrine."
          },
          {
            "type": "mc",
            "q": "Binding parameter mencegah",
            "options": [
              "injeksi",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "session_start()",
              "migrasi"
            ],
            "a": 2,
            "explain": "session_start."
          },
          {
            "type": "mc",
            "q": "Menyimpan session memakai",
            "options": [
              "CSS",
              "$_SESSION['k'] = v",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Assignment session."
          },
          {
            "type": "mc",
            "q": "Menghapus session memakai",
            "options": [
              "CSS",
              "unset/session_destroy",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "PHP memakai setcookie."
          },
          {
            "type": "mc",
            "q": "Session ID disimpan di",
            "options": [
              "CSS",
              "route",
              "cookie",
              "migrasi"
            ],
            "a": 2,
            "explain": "Session ID via cookie."
          },
          {
            "type": "mc",
            "q": "HttpOnly mencegah",
            "options": [
              "akses JS",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "HttpOnly melindungi cookie."
          },
          {
            "type": "mc",
            "q": "Secure flag memaksa",
            "options": [
              "CSS",
              "route",
              "HTTPS",
              "migrasi"
            ],
            "a": 2,
            "explain": "Secure untuk HTTPS."
          },
          {
            "type": "mc",
            "q": "Session fixation dicegah dengan",
            "options": [
              "CSS",
              "regenerasi ID",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Regenerasi ID."
          },
          {
            "type": "mc",
            "q": "Session tamper-proof perlu",
            "options": [
              "CSS",
              "penanganan server",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "PHPUnit"
            ],
            "a": 3,
            "explain": "PHPUnit untuk PHP."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "CSS",
              "route",
              "phpunit/vendor/bin/phpunit",
              "migrasi"
            ],
            "a": 2,
            "explain": "PHPUnit runner."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "CSS",
              "assertSame/assertEquals",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "PHPUnit assertions."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "CSS",
              "PHPUnit mock/createMock",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Mock bawaan."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Xdebug/phpdbg"
            ],
            "a": 3,
            "explain": "Xdebug untuk coverage."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              "CSS",
              "PHPStan/Psalm",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Fixture menyiapkan",
            "options": [
              "state test",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "PHP-FPM mengelola proses."
          },
          {
            "type": "mc",
            "q": "Async PHP memakai",
            "options": [
              "CSS",
              "Swoole/ReactPHP",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Async library PHP."
          },
          {
            "type": "mc",
            "q": "Coro/Generator memungkinkan",
            "options": [
              "asinkron",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Generator untuk async."
          },
          {
            "type": "mc",
            "q": "Queue memindahkan",
            "options": [
              "CSS",
              "pekerjaan berat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Queue job."
          },
          {
            "type": "mc",
            "q": "Worker queue memproses",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "job"
            ],
            "a": 3,
            "explain": "Worker job."
          },
          {
            "type": "mc",
            "q": "Race condition harus",
            "options": [
              "CSS",
              "dihindari",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sinkronisasi."
          },
          {
            "type": "mc",
            "q": "Locking membantu",
            "options": [
              "CSS",
              "route",
              "akses bersama",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Monitoring."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "akses data",
              "migrasi"
            ],
            "a": 2,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Service layer menampung",
            "options": [
              "logika bisnis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Service bisnis."
          },
          {
            "type": "mc",
            "q": "DI container membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pengelolaan dependensi"
            ],
            "a": 3,
            "explain": "DI container."
          },
          {
            "type": "mc",
            "q": "Interface memisahkan",
            "options": [
              "CSS",
              "route",
              "kontrak",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Domain bersih."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "CSS",
              "skalabilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Modul."
          },
          {
            "type": "mc",
            "q": "CQRS memisahkan",
            "options": [
              "CSS",
              "baca/tulis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "CQRS."
          },
          {
            "type": "mc",
            "q": "Event memisahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap aman",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi",
              "immutable"
            ],
            "a": 3,
            "explain": "Readonly immutable."
          },
          {
            "type": "mc",
            "q": "enum (8.1) untuk",
            "options": [
              "CSS",
              "konstanta bertipe",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Enum bertipe."
          },
          {
            "type": "mc",
            "q": "first-class callable syntax memakai",
            "options": [
              "CSS",
              "f(...)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Callable syntax."
          },
          {
            "type": "mc",
            "q": "fibers (8.1) memungkinkan",
            "options": [
              "CSS",
              "asinkron",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Fibers async."
          },
          {
            "type": "mc",
            "q": "match expression lebih ringkas dari",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "switch"
            ],
            "a": 3,
            "explain": "Match ringkas."
          },
          {
            "type": "mc",
            "q": "named arguments memudahkan",
            "options": [
              "CSS",
              "pemanggilan jelas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Named args."
          },
          {
            "type": "mc",
            "q": "nullsafe operator memakai",
            "options": [
              "->?",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Union types."
          },
          {
            "type": "mc",
            "q": "attributes menggantikan",
            "options": [
              "anotasi docblock",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Attributes native."
          },
          {
            "type": "mc",
            "q": "Update PHP penting",
            "options": [
              "CSS",
              "route",
              "keamanan/performa",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi",
              "PHP-FPM + Nginx/Apache"
            ],
            "a": 3,
            "explain": "FPM dengan web server."
          },
          {
            "type": "mc",
            "q": "Konfigurasi produksi menonaktifkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "display_errors"
            ],
            "a": 3,
            "explain": "Matikan display errors."
          },
          {
            "type": "mc",
            "q": "OpCache diaktifkan di",
            "options": [
              "CSS",
              "route",
              "produksi",
              "migrasi"
            ],
            "a": 2,
            "explain": "OpCache produksi."
          },
          {
            "type": "mc",
            "q": "Dependency dipasang dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "composer install --no-dev"
            ],
            "a": 3,
            "explain": "Install tanpa dev."
          },
          {
            "type": "mc",
            "q": "Environment dipisah via",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Health check."
          },
          {
            "type": "mc",
            "q": "Rolling deploy meminimalkan",
            "options": [
              "CSS",
              "route",
              "downtime",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rolling deploy."
          },
          {
            "type": "mc",
            "q": "Migrasi DB bertahap",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Migrasi aman."
          },
          {
            "type": "mc",
            "q": "Backup penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "konsistensi",
              "migrasi"
            ],
            "a": 2,
            "explain": "PSR konsistensi."
          },
          {
            "type": "mc",
            "q": "PHP-CS-Fixer menyeragamkan",
            "options": [
              "format",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fixer format."
          },
          {
            "type": "mc",
            "q": "PHPStan/Psalm menemukan",
            "options": [
              "CSS",
              "route",
              "bug statis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Static analysis."
          },
          {
            "type": "mc",
            "q": "Rector membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "Test regresi penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Dokumentasi."
          },
          {
            "type": "mc",
            "q": "CI otomasi penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "prepared statement",
              "migrasi"
            ],
            "a": 2,
            "explain": "Parameter terikat."
          },
          {
            "type": "mc",
            "q": "XSS dicegah dengan",
            "options": [
              "CSS",
              "escaping output",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Escaping output."
          },
          {
            "type": "mc",
            "q": "CSRF dicegah dengan",
            "options": [
              "token",
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "password_hash aman."
          },
          {
            "type": "mc",
            "q": "Memverifikasi password memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Hindari eval."
          },
          {
            "type": "mc",
            "q": "Upload divalidasi",
            "options": [
              "CSS",
              "route",
              "tipe dan ukuran",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi upload."
          },
          {
            "type": "mc",
            "q": "Path traversal dicegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rahasia aman."
          },
          {
            "type": "mc",
            "q": "Dependency scanning penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "eksekusi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "OpCache cache bytecode."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "Xdebug/Blackfire",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Profiler PHP."
          },
          {
            "type": "mc",
            "q": "Query N+1 dihindari dengan",
            "options": [
              "CSS",
              "route",
              "eager loading",
              "migrasi"
            ],
            "a": 2,
            "explain": "Eager loading."
          },
          {
            "type": "mc",
            "q": "Caching mengurangi",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Alokasi berpengaruh."
          },
          {
            "type": "mc",
            "q": "JIT (PHP 8) membantu",
            "options": [
              "komputasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "JIT PHP 8."
          },
          {
            "type": "mc",
            "q": "Batching query membantu",
            "options": [
              "performa",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Batch mengurangi roundtrip."
          },
          {
            "type": "mc",
            "q": "Ukur sebelum optimasi",
            "options": [
              "tidak",
              "CSS",
              "wajib",
              "route"
            ],
            "a": 2,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Session storage efisien",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
              "migrasi"
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
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Laravel framework."
          },
          {
            "type": "mc",
            "q": "Symfony menyediakan",
            "options": [
              "CSS",
              "route",
              "komponen reusable",
              "migrasi"
            ],
            "a": 2,
            "explain": "Symfony komponen."
          },
          {
            "type": "mc",
            "q": "Eloquent adalah",
            "options": [
              "CSS",
              "ORM Laravel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Eloquent ORM."
          },
          {
            "type": "mc",
            "q": "Blade adalah",
            "options": [
              "CSS",
              "template engine Laravel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Blade template."
          },
          {
            "type": "mc",
            "q": "Middleware memproses",
            "options": [
              "CSS",
              "request",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Middleware request."
          },
          {
            "type": "mc",
            "q": "Routing memetakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
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
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "DI container."
          },
          {
            "type": "mc",
            "q": "Testing framework penting",
            "options": [
              "tidak",
              "CSS",
              "route",
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
              "CSS",
              "route",
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
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "migrasi",
              "dependency"
            ],
            "a": 3,
            "explain": "Composer mendefinisikan dependency."
          },
          {
            "type": "mc",
            "q": "composer.lock mengunci",
            "options": [
              "CSS",
              "route",
              "versi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Lock versi."
          },
          {
            "type": "mc",
            "q": "composer install memasang",
            "options": [
              "CSS",
              "route",
              "dependency",
              "migrasi"
            ],
            "a": 2,
            "explain": "Install dependency."
          },
          {
            "type": "mc",
            "q": "composer update memperbarui",
            "options": [
              "CSS",
              "dependency",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Update dependency."
          },
          {
            "type": "mc",
            "q": "Autoload PSR-4 memudahkan",
            "options": [
              "CSS",
              "route",
              "memuat class",
              "migrasi"
            ],
            "a": 2,
            "explain": "PSR-4 autoload."
          },
          {
            "type": "mc",
            "q": "Packagist adalah",
            "options": [
              "CSS",
              "repository package",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Scan dependency."
          },
          {
            "type": "mc",
            "q": "Script composer membantu",
            "options": [
              "CSS",
              "otomasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Composer scripts."
          },
          {
            "type": "mc",
            "q": "Dokumentasi proyek penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
              "CSS",
              "route",
              "json_encode",
              "migrasi"
            ],
            "a": 2,
            "explain": "json_encode."
          },
          {
            "type": "mc",
            "q": "Membaca JSON memakai",
            "options": [
              "CSS",
              "route",
              "json_decode",
              "migrasi"
            ],
            "a": 2,
            "explain": "json_decode."
          },
          {
            "type": "mc",
            "q": "Header JSON memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Content-Type: application/json"
            ],
            "a": 3,
            "explain": "Header JSON."
          },
          {
            "type": "mc",
            "q": "Status HTTP memakai",
            "options": [
              "CSS",
              "http_response_code",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Atur status."
          },
          {
            "type": "mc",
            "q": "Autentikasi API memakai",
            "options": [
              "CSS",
              "token/JWT",
              "route",
              "migrasi"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
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
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Header CORS."
          },
          {
            "type": "mc",
            "q": "Rate limiting penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Batasi request."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
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
