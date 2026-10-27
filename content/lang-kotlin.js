/* CodeDuo — blok konten: topik "Kotlin" (dipisah dari Blok Web).
 * 1 topik (kotlin) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_KOTLIN = [
{
    "id": "kotlin",
    "name": "Kotlin",
    "icon": "🟣",
    "color": "#7f52ff",
    "desc": "Bahasa modern untuk Android & JVM",
    "lessons": [
      {
        "id": "kotlin-1",
        "level": "Dasar",
        "title": "Pengenalan Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Kotlin dikembangkan oleh",
            "options": [
              "JetBrains",
              "Google",
              "Apple",
              "Microsoft"
            ],
            "a": 0,
            "explain": "Kotlin dikembangkan JetBrains."
          },
          {
            "type": "mc",
            "q": "Kotlin berjalan di atas",
            "options": [
              "JVM (juga native/JS)",
              "CSS",
              "SQL",
              "PHP"
            ],
            "a": 0,
            "explain": "Kotlin berjalan di JVM dan platform lain."
          },
          {
            "type": "mc",
            "q": "Kotlin banyak digunakan untuk",
            "options": [
              "CSS",
              "SQL engine",
              "MATLAB",
              "aplikasi Android"
            ],
            "a": 3,
            "explain": "Kotlin didukung untuk Android."
          },
          {
            "type": "mc",
            "q": "Berkas Kotlin berekstensi",
            "options": [
              ".kts",
              ".kot",
              ".ktn",
              ".kt"
            ],
            "a": 3,
            "explain": "Berkas Kotlin berekstensi .kt."
          },
          {
            "type": "mc",
            "q": "Kotlin terkompilasi menjadi",
            "options": [
              "bytecode JVM",
              "CSS",
              "SQL",
              "PHP"
            ],
            "a": 0,
            "explain": "Kotlin dikompilasi ke bytecode."
          },
          {
            "type": "mc",
            "q": "Fungsi utama Kotlin adalah",
            "options": [
              "func main()",
              "def main()",
              "main()",
              "fun main()"
            ],
            "a": 3,
            "explain": "Entry point Kotlin fun main()."
          },
          {
            "type": "mc",
            "q": "Kotlin kompatibel dengan",
            "options": [
              "CSS",
              "PHP",
              "Ruby",
              "Java"
            ],
            "a": 3,
            "explain": "Kotlin interoperabel dengan Java."
          },
          {
            "type": "mc",
            "q": "Deklarasi fungsi memakai",
            "options": [
              "fun",
              "func",
              "def",
              "fn"
            ],
            "a": 0,
            "explain": "Kotlin memakai kata kunci fun."
          },
          {
            "type": "mc",
            "q": "Menampilkan output memakai",
            "options": [
              "echo()",
              "println()",
              "console.log()",
              "puts"
            ],
            "a": 1,
            "explain": "println mencetak baris."
          },
          {
            "type": "mc",
            "q": "Build tool umum Kotlin/Android adalah",
            "options": [
              "Composer",
              "Bundler",
              "pub",
              "Gradle"
            ],
            "a": 3,
            "explain": "Gradle membangun proyek Kotlin."
          }
        ]
      },
      {
        "id": "kotlin-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Deklarasi readonly memakai",
            "options": [
              "var",
              "let",
              "const",
              "val"
            ],
            "a": 3,
            "explain": "val tidak dapat di-assign ulang."
          },
          {
            "type": "mc",
            "q": "Deklarasi mutable memakai",
            "options": [
              "val",
              "let",
              "mut",
              "var"
            ],
            "a": 3,
            "explain": "var dapat diubah."
          },
          {
            "type": "mc",
            "q": "Tipe teks adalah",
            "options": [
              "Text",
              "Char",
              "String",
              "Str"
            ],
            "a": 2,
            "explain": "Kotlin memakai String."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan bulat adalah",
            "options": [
              "int",
              "Int",
              "Integer",
              "Number"
            ],
            "a": 1,
            "explain": "Kotlin memakai Int."
          },
          {
            "type": "mc",
            "q": "Tipe desimal adalah",
            "options": [
              "double",
              "float",
              "decimal",
              "Double"
            ],
            "a": 3,
            "explain": "Kotlin memakai Double."
          },
          {
            "type": "mc",
            "q": "Tipe boolean adalah",
            "options": [
              "bool",
              "boolean",
              "bit",
              "Boolean"
            ],
            "a": 3,
            "explain": "Kotlin memakai Boolean."
          },
          {
            "type": "mc",
            "q": "val vs var: val berarti",
            "options": [
              "referensi tidak dapat di-assign ulang",
              "selalu immutable mendalam",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "val mencegah assignment ulang referensi."
          },
          {
            "type": "mc",
            "q": "String template memakai",
            "options": [
              "#{}",
              "<% %>",
              "{{ }}",
              "$nama atau ${nama}"
            ],
            "a": 3,
            "explain": "Kotlin memakai $ untuk template."
          },
          {
            "type": "mc",
            "q": "Tipe eksplisit ditulis",
            "options": [
              "val x = Int",
              "CSS",
              "val x: Int = 1",
              "route"
            ],
            "a": 2,
            "explain": "Kotlin memakai titik dua tipe."
          },
          {
            "type": "mc",
            "q": "Inferensi tipe memungkinkan",
            "options": [
              "CSS",
              "menghilangkan tipe saat jelas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kotlin menginferensi tipe."
          }
        ]
      },
      {
        "id": "kotlin-3",
        "level": "Dasar",
        "title": "Null Safety",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe nullable ditandai dengan",
            "options": [
              "!",
              "*",
              "&",
              "?"
            ],
            "a": 3,
            "explain": "Tanda ? menandai nullable."
          },
          {
            "type": "mc",
            "q": "Mengakses nilai nullable aman memakai",
            "options": [
              "!.",
              "?.",
              ":.",
              "$."
            ],
            "a": 1,
            "explain": "?. mengakses aman."
          },
          {
            "type": "mc",
            "q": "Operator ! (not-null assertion) berarti",
            "options": [
              "menyatakan nilai tidak null",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "!! menegaskan non-null."
          },
          {
            "type": "mc",
            "q": "Elvis operator memakai",
            "options": [
              "??",
              "||",
              "?:",
              "&&"
            ],
            "a": 2,
            "explain": "?: memberi nilai default."
          },
          {
            "type": "mc",
            "q": "Mengubah nullable ke non-null memakai",
            "options": [
              "CSS",
              "route",
              "let/?:/cek null",
              "migrasi"
            ],
            "a": 2,
            "explain": "Gunakan let atau Elvis."
          },
          {
            "type": "mc",
            "q": "Null safety mencegah",
            "options": [
              "CSS",
              "route",
              "NullPointerException",
              "migrasi"
            ],
            "a": 2,
            "explain": "Null safety mencegah NPE."
          },
          {
            "type": "mc",
            "q": "safe cast memakai",
            "options": [
              "as",
              "to",
              "CSS",
              "as?"
            ],
            "a": 3,
            "explain": "as? mengembalikan null bila gagal."
          },
          {
            "type": "mc",
            "q": "lateinit dipakai untuk",
            "options": [
              "inisialisasi tertunda non-null",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "lateinit menunda inisialisasi."
          },
          {
            "type": "mc",
            "q": "Memeriksa null memakai",
            "options": [
              "CSS",
              "route",
              "== null / != null",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pemeriksaan null eksplisit."
          },
          {
            "type": "mc",
            "q": "Null safety membantu",
            "options": [
              "CSS",
              "route",
              "keandalan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Meningkatkan keandalan."
          }
        ]
      },
      {
        "id": "kotlin-4",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "when only",
              "if/else",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Kotlin memakai if/else."
          },
          {
            "type": "mc",
            "q": "Percabangan multi kondisi memakai",
            "options": [
              "when",
              "switch",
              "case",
              "CSS"
            ],
            "a": 0,
            "explain": "Kotlin memakai when."
          },
          {
            "type": "mc",
            "q": "when dapat berbentuk",
            "options": [
              "statement saja",
              "ekspresi",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "when dapat menjadi ekspresi."
          },
          {
            "type": "mc",
            "q": "Range memakai",
            "options": [
              "1-5",
              "range(1,5)",
              "CSS",
              "1..5"
            ],
            "a": 3,
            "explain": "Kotlin memakai 1..5."
          },
          {
            "type": "mc",
            "q": "until memakai",
            "options": [
              "1..5",
              "1 until 5",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "until membuat range eksklusif."
          },
          {
            "type": "mc",
            "q": "Perulangan memakai",
            "options": [
              "foreach",
              "for (x in ...)",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Kotlin memakai for-in."
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
            "explain": "while bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "di loop",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Mengatur loop."
          },
          {
            "type": "mc",
            "q": "Elvis dan when sering digabung",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Kombinasi umum."
          },
          {
            "type": "mc",
            "q": "Ternary digantikan",
            "options": [
              "if sebagai ekspresi",
              "when wajib",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Kotlin memakai if ekspresi."
          }
        ]
      },
      {
        "id": "kotlin-5",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "fun nama()",
              "function nama()",
              "def nama()",
              "fn nama()"
            ],
            "a": 0,
            "explain": "Kotlin memakai fun."
          },
          {
            "type": "mc",
            "q": "Nilai balik ditulis",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "setelah parameter dengan :"
            ],
            "a": 3,
            "explain": "Kotlin: fun x(): Int."
          },
          {
            "type": "mc",
            "q": "Named argument memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menyebut nama parameter"
            ],
            "a": 3,
            "explain": "Named argument memperjelas."
          },
          {
            "type": "mc",
            "q": "Default parameter memakai",
            "options": [
              ":",
              "=",
              ":=",
              "->"
            ],
            "a": 1,
            "explain": "Nilai default memakai = ."
          },
          {
            "type": "mc",
            "q": "Fungsi ekspresi memakai",
            "options": [
              "->",
              "=",
              "=>",
              "CSS"
            ],
            "a": 1,
            "explain": "Body ekspresi memakai =."
          },
          {
            "type": "mc",
            "q": "Fungsi ekstensi menambah",
            "options": [
              "CSS",
              "method pada tipe ada",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Extension function."
          },
          {
            "type": "mc",
            "q": "Vararg memungkinkan",
            "options": [
              "jumlah argumen variabel",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Vararg variadik."
          },
          {
            "type": "mc",
            "q": "Higher-order function menerima",
            "options": [
              "fungsi sebagai parameter",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kotlin mendukung fungsi sebagai parameter."
          },
          {
            "type": "mc",
            "q": "Lambda ditulis",
            "options": [
              "(x) =>",
              "lambda x",
              "CSS",
              "{ x -> ... }"
            ],
            "a": 3,
            "explain": "Lambda memakai { }."
          },
          {
            "type": "mc",
            "q": "Inline function mengurangi",
            "options": [
              "CSS",
              "route",
              "overhead lambda",
              "migrasi"
            ],
            "a": 2,
            "explain": "Inline menghilangkan overhead."
          }
        ]
      },
      {
        "id": "kotlin-6",
        "level": "Dasar",
        "title": "Class & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "class Nama",
              "struct Nama",
              "def Nama",
              "CSS"
            ],
            "a": 0,
            "explain": "Kotlin memakai class."
          },
          {
            "type": "mc",
            "q": "Constructor utama ada di",
            "options": [
              "body saja",
              "CSS",
              "header class",
              "route"
            ],
            "a": 2,
            "explain": "Primary constructor di header."
          },
          {
            "type": "mc",
            "q": "data class menghasilkan",
            "options": [
              "CSS",
              "equals/hashCode/toString/copy",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Data class memberi fungsi standar."
          },
          {
            "type": "mc",
            "q": "Pewarisan memakai",
            "options": [
              "extends Induk",
              "inherits Induk",
              " : Induk()",
              "CSS"
            ],
            "a": 2,
            "explain": "Kotlin memakai : untuk pewarisan."
          },
          {
            "type": "mc",
            "q": "class default bersifat",
            "options": [
              "open",
              "CSS",
              "final",
              "route"
            ],
            "a": 2,
            "explain": "Class default final; pakai open."
          },
          {
            "type": "mc",
            "q": "Interface memakai",
            "options": [
              "abstract",
              "CSS",
              "interface",
              "route"
            ],
            "a": 2,
            "explain": "Kotlin memakai interface."
          },
          {
            "type": "mc",
            "q": "Override memakai",
            "options": [
              "over",
              "CSS",
              "route",
              "override"
            ],
            "a": 3,
            "explain": "Kata kunci override."
          },
          {
            "type": "mc",
            "q": "Mengakses method induk memakai",
            "options": [
              "super",
              "parent",
              "base",
              "CSS"
            ],
            "a": 0,
            "explain": "super memanggil induk."
          },
          {
            "type": "mc",
            "q": "Companion object berperan seperti",
            "options": [
              "CSS",
              "route",
              "static member",
              "migrasi"
            ],
            "a": 2,
            "explain": "Companion mirip static."
          },
          {
            "type": "mc",
            "q": "visibility modifier meliputi",
            "options": [
              "private/protected/internal/public",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kotlin punya internal."
          }
        ]
      },
      {
        "id": "kotlin-7",
        "level": "Dasar",
        "title": "Exception & Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Melempar exception memakai",
            "options": [
              "raise",
              "throw",
              "panic",
              "CSS"
            ],
            "a": 1,
            "explain": "Kotlin memakai throw."
          },
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/rescue",
              "except",
              "CSS",
              "try/catch"
            ],
            "a": 3,
            "explain": "Kotlin memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "selalu",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "finally selalu dijalankan."
          },
          {
            "type": "mc",
            "q": "Exception adalah Throwable",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Exception turunan Throwable."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "Error wajib",
              "CSS",
              "Exception",
              "route"
            ],
            "a": 2,
            "explain": "Custom exception mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "try sebagai ekspresi mengembalikan",
            "options": [
              "CSS",
              "route",
              "nilai",
              "migrasi"
            ],
            "a": 2,
            "explain": "try dapat menghasilkan nilai."
          },
          {
            "type": "mc",
            "q": "Menangkap tipe spesifik memakai",
            "options": [
              "CSS",
              "catch (e: Tipe)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Catch dapat menyebut tipe."
          },
          {
            "type": "mc",
            "q": "Checked exception di Kotlin",
            "options": [
              "wajib",
              "CSS",
              "tidak ada",
              "route"
            ],
            "a": 2,
            "explain": "Kotlin tidak punya checked exception."
          },
          {
            "type": "mc",
            "q": "use() dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menutup resource otomatis"
            ],
            "a": 3,
            "explain": "use menutup AutoCloseable."
          },
          {
            "type": "mc",
            "q": "Pesan exception diakses dengan",
            "options": [
              ".msg",
              "CSS",
              "route",
              ".message"
            ],
            "a": 3,
            "explain": "message berisi pesan."
          }
        ]
      },
      {
        "id": "kotlin-8",
        "level": "Dasar",
        "title": "Koleksi",
        "exercises": [
          {
            "type": "mc",
            "q": "List immutable dibuat dengan",
            "options": [
              "mutableListOf()",
              "listOf()",
              "arrayListOf()",
              "CSS"
            ],
            "a": 1,
            "explain": "listOf membuat list readonly."
          },
          {
            "type": "mc",
            "q": "List mutable memakai",
            "options": [
              "listOf()",
              "CSS",
              "route",
              "mutableListOf()"
            ],
            "a": 3,
            "explain": "mutableListOf dapat diubah."
          },
          {
            "type": "mc",
            "q": "Map immutable memakai",
            "options": [
              "mutableMapOf()",
              "CSS",
              "route",
              "mapOf()"
            ],
            "a": 3,
            "explain": "mapOf readonly."
          },
          {
            "type": "mc",
            "q": "Set immutable memakai",
            "options": [
              "mutableSetOf()",
              "setOf()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "setOf readonly."
          },
          {
            "type": "mc",
            "q": "Mengakses map memakai",
            "options": [
              "map[\"k\"] atau map.get",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Map diakses dengan []."
          },
          {
            "type": "mc",
            "q": "Mengubah list memakai",
            "options": [
              "each { }",
              "CSS",
              "map { }",
              "route"
            ],
            "a": 2,
            "explain": "map mentransformasi."
          },
          {
            "type": "mc",
            "q": "Menyaring memakai",
            "options": [
              "where { }",
              "filter { }",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "filter menyaring."
          },
          {
            "type": "mc",
            "q": "Panjang koleksi memakai",
            "options": [
              ".size",
              ".length",
              ".count_all",
              "CSS"
            ],
            "a": 0,
            "explain": "Koleksi memakai size."
          },
          {
            "type": "mc",
            "q": "Menggabungkan list memakai",
            "options": [
              "&&",
              "concat",
              "CSS",
              "+"
            ],
            "a": 3,
            "explain": "Operator + menggabungkan."
          },
          {
            "type": "mc",
            "q": "Pair/Triple memakai",
            "options": [
              "Pair(a,b)/Triple(a,b,c)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kotlin menyediakan Pair/Triple."
          }
        ]
      },
      {
        "id": "kotlin-9",
        "level": "Dasar",
        "title": "Extension & Scope Function",
        "exercises": [
          {
            "type": "mc",
            "q": "Scope function yang mengakses objek memakai",
            "options": [
              "CSS",
              "let/run/apply/also",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kotlin menyediakan scope function."
          },
          {
            "type": "mc",
            "q": "let mengembalikan",
            "options": [
              "objek",
              "CSS",
              "hasil lambda",
              "route"
            ],
            "a": 2,
            "explain": "let mengembalikan hasil lambda."
          },
          {
            "type": "mc",
            "q": "apply mengembalikan",
            "options": [
              "objek itu sendiri",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "apply mengembalikan receiver."
          },
          {
            "type": "mc",
            "q": "also dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "efek samping"
            ],
            "a": 3,
            "explain": "also untuk side effect."
          },
          {
            "type": "mc",
            "q": "run mengeksekusi blok dan mengembalikan",
            "options": [
              "CSS",
              "hasil",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "run mengembalikan hasil."
          },
          {
            "type": "mc",
            "q": "Extension function tidak bisa mengakses",
            "options": [
              "CSS",
              "route",
              "member private",
              "migrasi"
            ],
            "a": 2,
            "explain": "Tidak bisa akses private."
          },
          {
            "type": "mc",
            "q": "apply cocok untuk",
            "options": [
              "CSS",
              "konfigurasi objek",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "apply konfigurasi objek."
          },
          {
            "type": "mc",
            "q": "with memungkinkan",
            "options": [
              "CSS",
              "memanggil member tanpa receiver",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "with mengubah receiver."
          },
          {
            "type": "mc",
            "q": "Elvis dan let sering digabung",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Kombinasi umum."
          },
          {
            "type": "mc",
            "q": "Scope function berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengurangi keterbacaan"
            ],
            "a": 3,
            "explain": "Gunakan bijak."
          }
        ]
      },
      {
        "id": "kotlin-10",
        "level": "Dasar",
        "title": "Coroutine Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Coroutine untuk",
            "options": [
              "asynchronous tanpa memblokir thread",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Coroutine mendukung suspend."
          },
          {
            "type": "mc",
            "q": "Fungsi suspend dideklarasikan dengan",
            "options": [
              "async",
              "CSS",
              "suspend",
              "route"
            ],
            "a": 2,
            "explain": "Kotlin memakai suspend."
          },
          {
            "type": "mc",
            "q": "Menjalankan coroutine memakai",
            "options": [
              "CSS",
              "route",
              "launch/async",
              "migrasi"
            ],
            "a": 2,
            "explain": "launch/async membuat coroutine."
          },
          {
            "type": "mc",
            "q": "await hasil async memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "await()"
            ],
            "a": 3,
            "explain": "Deferred di-await."
          },
          {
            "type": "mc",
            "q": "Dispatchers.Main untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "UI thread"
            ],
            "a": 3,
            "explain": "Main untuk UI."
          },
          {
            "type": "mc",
            "q": "Dispatchers.IO untuk",
            "options": [
              "operasi IO",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "IO untuk IO berat."
          },
          {
            "type": "mc",
            "q": "delay menunda",
            "options": [
              "tanpa memblokir thread",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "delay menangguhkan coroutine."
          },
          {
            "type": "mc",
            "q": "CoroutineScope mengelola",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lifecycle coroutine"
            ],
            "a": 3,
            "explain": "Scope mengatur lifecycle."
          },
          {
            "type": "mc",
            "q": "Membatalkan coroutine memakai",
            "options": [
              "CSS",
              "route",
              "cancel()",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cancel membatalkan."
          },
          {
            "type": "mc",
            "q": "Exception di coroutine harus",
            "options": [
              "CSS",
              "route",
              "ditangani",
              "migrasi"
            ],
            "a": 2,
            "explain": "Tangani exception."
          }
        ]
      },
      {
        "id": "kotlin-11",
        "level": "Menengah",
        "title": "Object & Companion",
        "exercises": [
          {
            "type": "mc",
            "q": "object declaration membuat",
            "options": [
              "singleton",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "object membuat singleton."
          },
          {
            "type": "mc",
            "q": "companion object berperan seperti",
            "options": [
              "CSS",
              "static",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Companion mirip static."
          },
          {
            "type": "mc",
            "q": "object expression membuat",
            "options": [
              "CSS",
              "route",
              "objek anonim",
              "migrasi"
            ],
            "a": 2,
            "explain": "Object expression anonim."
          },
          {
            "type": "mc",
            "q": "Delegation memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "by"
            ],
            "a": 3,
            "explain": "Kotlin memakai by."
          },
          {
            "type": "mc",
            "q": "Delegated property memungkinkan",
            "options": [
              "CSS",
              "route",
              "getter/setter kustom",
              "migrasi"
            ],
            "a": 2,
            "explain": "Delegated property kustom."
          },
          {
            "type": "mc",
            "q": "lazy membuat",
            "options": [
              "CSS",
              "route",
              "inisialisasi tertunda",
              "migrasi"
            ],
            "a": 2,
            "explain": "lazy menunda inisialisasi."
          },
          {
            "type": "mc",
            "q": "observable property memungkinkan",
            "options": [
              "CSS",
              "reaksi saat berubah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Delegates.observable."
          },
          {
            "type": "mc",
            "q": "Companion object bisa berisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "factory method"
            ],
            "a": 3,
            "explain": "Factory di companion."
          },
          {
            "type": "mc",
            "q": "Singleton berlebihan berisiko",
            "options": [
              "CSS",
              "route",
              "testabilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Global state menyulitkan test."
          },
          {
            "type": "mc",
            "q": "Nama object sebaiknya jelas",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Nama deskriptif."
          }
        ]
      },
      {
        "id": "kotlin-12",
        "level": "Menengah",
        "title": "Collection Operations",
        "exercises": [
          {
            "type": "mc",
            "q": "groupBy mengelompokkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "berdasarkan kunci"
            ],
            "a": 3,
            "explain": "groupBy mengelompokkan."
          },
          {
            "type": "mc",
            "q": "sortedBy mengurutkan",
            "options": [
              "berdasarkan nilai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "sortedBy mengurutkan."
          },
          {
            "type": "mc",
            "q": "associate membuat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "map"
            ],
            "a": 3,
            "explain": "associate menghasilkan map."
          },
          {
            "type": "mc",
            "q": "fold/reduce mengakumulasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nilai"
            ],
            "a": 3,
            "explain": "fold/reduce akumulasi."
          },
          {
            "type": "mc",
            "q": "flatMap menggabungkan",
            "options": [
              "CSS",
              "koleksi bersarang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "flatMap meratakan."
          },
          {
            "type": "mc",
            "q": "partition membagi",
            "options": [
              "CSS",
              "route",
              "dua bagian",
              "migrasi"
            ],
            "a": 2,
            "explain": "partition memisahkan."
          },
          {
            "type": "mc",
            "q": "Sequence membantu",
            "options": [
              "CSS",
              "lazy evaluation",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sequence lazy."
          },
          {
            "type": "mc",
            "q": "distinct menghapus",
            "options": [
              "duplikat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "distinct unik."
          },
          {
            "type": "mc",
            "q": "zip menggabungkan",
            "options": [
              "CSS",
              "route",
              "dua koleksi",
              "migrasi"
            ],
            "a": 2,
            "explain": "zip memasangkan."
          },
          {
            "type": "mc",
            "q": "Operator berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengurangi keterbacaan"
            ],
            "a": 3,
            "explain": "Gunakan jelas."
          }
        ]
      },
      {
        "id": "kotlin-13",
        "level": "Menengah",
        "title": "Sealed & Enum",
        "exercises": [
          {
            "type": "mc",
            "q": "enum class mendefinisikan",
            "options": [
              "CSS",
              "route",
              "kumpulan konstanta",
              "migrasi"
            ],
            "a": 2,
            "explain": "enum untuk konstanta."
          },
          {
            "type": "mc",
            "q": "enum dapat punya",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "properti dan method"
            ],
            "a": 3,
            "explain": "Enum dapat berisi member."
          },
          {
            "type": "mc",
            "q": "sealed class membatasi",
            "options": [
              "subclass di modul sama",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Sealed membatasi hierarki."
          },
          {
            "type": "mc",
            "q": "when pada sealed memungkinkan",
            "options": [
              "CSS",
              "penanganan exhaustive",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Exhaustive when."
          },
          {
            "type": "mc",
            "q": "Sealed interface lebih fleksibel",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Sealed interface ada."
          },
          {
            "type": "mc",
            "q": "Enum dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "status terbatas"
            ],
            "a": 3,
            "explain": "Enum untuk status tetap."
          },
          {
            "type": "mc",
            "q": "Sealed cocok untuk",
            "options": [
              "hasil operasi (success/error)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Sealed untuk hasil bertipe."
          },
          {
            "type": "mc",
            "q": "Enumordinal tidak stabil",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Hindari bergantung ordinal."
          },
          {
            "type": "mc",
            "q": "Sealed membantu",
            "options": [
              "CSS",
              "type safety",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sealed menambah type safety."
          },
          {
            "type": "mc",
            "q": "Dokumentasi hierarki penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Dokumentasi jelas."
          }
        ]
      },
      {
        "id": "kotlin-14",
        "level": "Menengah",
        "title": "Compose State Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "mutableStateOf membuat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "state observable"
            ],
            "a": 3,
            "explain": "State observable Compose."
          },
          {
            "type": "mc",
            "q": "remember menyimpan state antar",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "recomposition"
            ],
            "a": 3,
            "explain": "Remember menyimpan."
          },
          {
            "type": "mc",
            "q": "State hoisting memindah state ke",
            "options": [
              "CSS",
              "pemanggil",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hoisting ke atas."
          },
          {
            "type": "mc",
            "q": "derivedStateOf menurunkan",
            "options": [
              "CSS",
              "route",
              "state dari state lain",
              "migrasi"
            ],
            "a": 2,
            "explain": "Derived state."
          },
          {
            "type": "mc",
            "q": "snapshotFlow mengubah state ke",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "flow"
            ],
            "a": 3,
            "explain": "State ke Flow."
          },
          {
            "type": "mc",
            "q": "SideEffect untuk",
            "options": [
              "CSS",
              "efek tanpa cleanup",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "SideEffect efek sederhana."
          },
          {
            "type": "mc",
            "q": "DisposableEffect menyediakan",
            "options": [
              "CSS",
              "cleanup",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "DisposableEffect cleanup."
          },
          {
            "type": "mc",
            "q": "rememberCoroutineScope memberi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "scope coroutine dalam composable"
            ],
            "a": 3,
            "explain": "Scope untuk coroutine."
          },
          {
            "type": "mc",
            "q": "State harus immutable",
            "options": [
              "tidak",
              "CSS",
              "route",
              "disarankan"
            ],
            "a": 3,
            "explain": "Immutable state."
          },
          {
            "type": "mc",
            "q": "Memisahkan state UI/domain penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Pemisahan penting."
          }
        ]
      },
      {
        "id": "kotlin-15",
        "level": "Menengah",
        "title": "Room & Persistensi",
        "exercises": [
          {
            "type": "mc",
            "q": "Room menyediakan",
            "options": [
              "database lokal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Room ORM SQLite."
          },
          {
            "type": "mc",
            "q": "Entity didefinisikan dengan",
            "options": [
              "CSS",
              "@Entity",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Anotasi @Entity."
          },
          {
            "type": "mc",
            "q": "DAO memakai anotasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "@Dao/@Query"
            ],
            "a": 3,
            "explain": "DAO dengan @Query."
          },
          {
            "type": "mc",
            "q": "Migration Room penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Migrasi skema perlu."
          },
          {
            "type": "mc",
            "q": "DataStore menyimpan",
            "options": [
              "CSS",
              "key-value",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "DataStore untuk preferensi."
          },
          {
            "type": "mc",
            "q": "Query berat sebaiknya",
            "options": [
              "di IO coroutine",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pindah ke IO."
          },
          {
            "type": "mc",
            "q": "Flow pada DAO memungkinkan",
            "options": [
              "CSS",
              "observe perubahan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "DAO Flow observable."
          },
          {
            "type": "mc",
            "q": "Enkripsi lokal membantu",
            "options": [
              "keamanan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Enkripsi data lokal."
          },
          {
            "type": "mc",
            "q": "Menguji Room memakai",
            "options": [
              "CSS",
              "in-memory database",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "In-memory untuk test."
          },
          {
            "type": "mc",
            "q": "Menutup database penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Tutup koneksi."
          }
        ]
      },
      {
        "id": "kotlin-16",
        "level": "Menengah",
        "title": "Coroutine Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "runBlocking dipakai untuk",
            "options": [
              "CSS",
              "menjalankan coroutine di kode blocking",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "runBlocking untuk main/test."
          },
          {
            "type": "mc",
            "q": "SupervisorJob mencegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kegagalan anak menggagalkan semua"
            ],
            "a": 3,
            "explain": "Supervisor mengisolasi kegagalan."
          },
          {
            "type": "mc",
            "q": "Structured concurrency berarti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "anak coroutine terikat scope"
            ],
            "a": 3,
            "explain": "Anak terikat ke scope induk."
          },
          {
            "type": "mc",
            "q": "withContext dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengganti dispatcher"
            ],
            "a": 3,
            "explain": "withContext mengubah konteks."
          },
          {
            "type": "mc",
            "q": "JobState memungkinkan",
            "options": [
              "CSS",
              "pemeriksaan status",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Status coroutine dapat diperiksa."
          },
          {
            "type": "mc",
            "q": "Channel memungkinkan",
            "options": [
              "komunikasi antar coroutine",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Channel untuk komunikasi."
          },
          {
            "type": "mc",
            "q": "Flow menghasilkan",
            "options": [
              "aliran nilai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Flow untuk stream."
          },
          {
            "type": "mc",
            "q": "StateFlow/SharedFlow untuk",
            "options": [
              "CSS",
              "route",
              "state observable",
              "migrasi"
            ],
            "a": 2,
            "explain": "StateFlow/SharedFlow untuk state."
          },
          {
            "type": "mc",
            "q": "Cancellation harus dihormati",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Cek pembatalan."
          },
          {
            "type": "mc",
            "q": "Exception handler CoroutineExceptionHandler",
            "options": [
              "CSS",
              "route",
              "menangani error",
              "migrasi"
            ],
            "a": 2,
            "explain": "Handler menangani error."
          }
        ]
      },
      {
        "id": "kotlin-17",
        "level": "Menengah",
        "title": "Flow & Reactive",
        "exercises": [
          {
            "type": "mc",
            "q": "Flow dibuat dengan",
            "options": [
              "flow { }",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "flow builder."
          },
          {
            "type": "mc",
            "q": "Flow bersifat cold sehingga",
            "options": [
              "CSS",
              "baru berjalan saat dikumpulkan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cold flow jalan saat collect."
          },
          {
            "type": "mc",
            "q": "collect mengumpulkan",
            "options": [
              "CSS",
              "nilai flow",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "collect membaca nilai."
          },
          {
            "type": "mc",
            "q": "Operator map/filter berlaku pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Flow"
            ],
            "a": 3,
            "explain": "Flow mendukung operator."
          },
          {
            "type": "mc",
            "q": "StateFlow selalu punya",
            "options": [
              "CSS",
              "route",
              "nilai saat ini",
              "migrasi"
            ],
            "a": 2,
            "explain": "StateFlow menyimpan value."
          },
          {
            "type": "mc",
            "q": "SharedFlow untuk",
            "options": [
              "CSS",
              "route",
              "banyak collector",
              "migrasi"
            ],
            "a": 2,
            "explain": "SharedFlow multi collector."
          },
          {
            "type": "mc",
            "q": "Flow harus dikumpulkan pada scope",
            "options": [
              "dengan lifecycle sesuai",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kumpulkan sesuai lifecycle."
          },
          {
            "type": "mc",
            "q": "Exception pada flow memakai",
            "options": [
              "catch operator",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Operator catch."
          },
          {
            "type": "mc",
            "q": "FlatMap operators menggabungkan",
            "options": [
              "CSS",
              "route",
              "flow",
              "migrasi"
            ],
            "a": 2,
            "explain": "FlatMap menggabungkan."
          },
          {
            "type": "mc",
            "q": "Flow berlebihan dapat",
            "options": [
              "CSS",
              "menambah kompleksitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Gunakan sesuai kebutuhan."
          }
        ]
      },
      {
        "id": "kotlin-18",
        "level": "Menengah",
        "title": "Android Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "UI Android modern memakai",
            "options": [
              "Jetpack Compose",
              "PHP",
              "CSS saja",
              "Ruby"
            ],
            "a": 0,
            "explain": "Compose adalah toolkit UI modern."
          },
          {
            "type": "mc",
            "q": "Composable ditandai dengan",
            "options": [
              "@Composable",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Anotasi @Composable."
          },
          {
            "type": "mc",
            "q": "State pada Compose memakai",
            "options": [
              "CSS",
              "remember/mutableStateOf",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "remember menyimpan state."
          },
          {
            "type": "mc",
            "q": "Activity adalah",
            "options": [
              "CSS",
              "route",
              "komponen layar Android",
              "migrasi"
            ],
            "a": 2,
            "explain": "Activity komponen UI."
          },
          {
            "type": "mc",
            "q": "ViewModel menyimpan",
            "options": [
              "state UI tahan rotasi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "ViewModel bertahan lifecycle."
          },
          {
            "type": "mc",
            "q": "LiveData/StateFlow menyediakan",
            "options": [
              "CSS",
              "state observable",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Observable state."
          },
          {
            "type": "mc",
            "q": "Navigation Component menangani",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "navigasi antar layar"
            ],
            "a": 3,
            "explain": "Komponen navigasi."
          },
          {
            "type": "mc",
            "q": "Room adalah",
            "options": [
              "database lokal Android",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Room ORM lokal."
          },
          {
            "type": "mc",
            "q": "Manifest mendefinisikan",
            "options": [
              "CSS",
              "komponen aplikasi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "AndroidManifest mendefinisikan komponen."
          },
          {
            "type": "mc",
            "q": "Izin aplikasi harus",
            "options": [
              "CSS",
              "dideklarasikan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Izin dideklarasikan."
          }
        ]
      },
      {
        "id": "kotlin-19",
        "level": "Menengah",
        "title": "Android Compose",
        "exercises": [
          {
            "type": "mc",
            "q": "Compose menyusun UI dengan",
            "options": [
              "CSS",
              "fungsi composable",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "UI dari composable."
          },
          {
            "type": "mc",
            "q": "Recomposition terjadi saat",
            "options": [
              "CSS",
              "route",
              "state berubah",
              "migrasi"
            ],
            "a": 2,
            "explain": "State change memicu recomposition."
          },
          {
            "type": "mc",
            "q": "remember menyimpan nilai antar",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "recomposition"
            ],
            "a": 3,
            "explain": "remember menyimpan antar recomposition."
          },
          {
            "type": "mc",
            "q": "rememberSaveable menyimpan",
            "options": [
              "CSS",
              "antar konfigurasi berubah",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Saveable bertahan rotasi."
          },
          {
            "type": "mc",
            "q": "LaunchedEffect untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "efek samping berbasis key"
            ],
            "a": 3,
            "explain": "LaunchedEffect menjalankan efek."
          },
          {
            "type": "mc",
            "q": "Row/Column mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "layout"
            ],
            "a": 3,
            "explain": "Layout dasar Compose."
          },
          {
            "type": "mc",
            "q": "Modifier mengatur",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "gaya dan layout"
            ],
            "a": 3,
            "explain": "Modifier mengatur tampilan."
          },
          {
            "type": "mc",
            "q": "state hoisting menaikkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "state ke pemanggil"
            ],
            "a": 3,
            "explain": "Hoisting memindah state ke atas."
          },
          {
            "type": "mc",
            "q": "Preview memudahkan",
            "options": [
              "lihat UI di editor",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Preview menampilkan komponen."
          },
          {
            "type": "mc",
            "q": "Compose test menguji",
            "options": [
              "CSS",
              "route",
              "UI/semantics",
              "migrasi"
            ],
            "a": 2,
            "explain": "Compose UI test."
          }
        ]
      },
      {
        "id": "kotlin-20",
        "level": "Menengah",
        "title": "Testing Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test JVM populer adalah",
            "options": [
              "Jest",
              "PHPUnit",
              "JUnit",
              "RSpec"
            ],
            "a": 2,
            "explain": "JUnit untuk test JVM."
          },
          {
            "type": "mc",
            "q": "Kotlin test dapat memakai",
            "options": [
              "CSS",
              "route",
              "kotlin.test",
              "migrasi"
            ],
            "a": 2,
            "explain": "kotlin.test menyediakan asersi."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "CSS",
              "route",
              "MockK/Mockito",
              "migrasi"
            ],
            "a": 2,
            "explain": "MockK populer untuk Kotlin."
          },
          {
            "type": "mc",
            "q": "Coroutine test memakai",
            "options": [
              "CSS",
              "route",
              "runTest",
              "migrasi"
            ],
            "a": 2,
            "explain": "runTest untuk test coroutine."
          },
          {
            "type": "mc",
            "q": "Menguji suspend function perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "coroutine test"
            ],
            "a": 3,
            "explain": "Test coroutine."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "CSS",
              "route",
              "JaCoCo",
              "migrasi"
            ],
            "a": 2,
            "explain": "JaCoCo mengukur."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Table-driven test permudah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "banyak kasus"
            ],
            "a": 3,
            "explain": "Parameterized test."
          },
          {
            "type": "mc",
            "q": "Test di CI penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test UI Compose memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "compose test"
            ],
            "a": 3,
            "explain": "Tool khusus UI test."
          }
        ]
      },
      {
        "id": "kotlin-21",
        "level": "Advance",
        "title": "Kotlin Multiplatform",
        "exercises": [
          {
            "type": "mc",
            "q": "KMP memungkinkan",
            "options": [
              "berbagi kode lintas platform",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kotlin Multiplatform."
          },
          {
            "type": "mc",
            "q": "expect/actual memungkinkan",
            "options": [
              "CSS",
              "implementasi per platform",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Expect/actual per platform."
          },
          {
            "type": "mc",
            "q": "Ktor adalah",
            "options": [
              "CSS",
              "framework HTTP multiplatform",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Ktor untuk networking."
          },
          {
            "type": "mc",
            "q": "Compose Multiplatform berbagi",
            "options": [
              "CSS",
              "route",
              "UI",
              "migrasi"
            ],
            "a": 2,
            "explain": "UI lintas platform."
          },
          {
            "type": "mc",
            "q": "Mengelola source set memengaruhi",
            "options": [
              "CSS",
              "struktur proyek",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Source set KMP."
          },
          {
            "type": "mc",
            "q": "Tes di tiap target penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tes per target."
          },
          {
            "type": "mc",
            "q": "Serialisasi KMP memakai kotlinx",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "kotlinx.serialization."
          },
          {
            "type": "mc",
            "q": "Menjaga kompatibilitas antar target",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Kompatibilitas penting."
          },
          {
            "type": "mc",
            "q": "Dokumentasi platform penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi jelas."
          },
          {
            "type": "mc",
            "q": "CI multiplatform menambah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kompleksitas"
            ],
            "a": 3,
            "explain": "CI lebih kompleks."
          }
        ]
      },
      {
        "id": "kotlin-22",
        "level": "Advance",
        "title": "Keamanan Android",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyimpan token memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "EncryptedSharedPreferences/Keystore"
            ],
            "a": 3,
            "explain": "Simpan token aman."
          },
          {
            "type": "mc",
            "q": "Network security config mengatur",
            "options": [
              "CSS",
              "route",
              "TLS/domain",
              "migrasi"
            ],
            "a": 2,
            "explain": "Konfigurasi keamanan jaringan."
          },
          {
            "type": "mc",
            "q": "Proguard/R8 membantu",
            "options": [
              "CSS",
              "obfuscation/shrink",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "R8 memperkecil/obfuscate."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan secret di kode berisiko",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Jangan simpan secret di klien."
          },
          {
            "type": "mc",
            "q": "Izin minimal penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Minta izin minimal."
          },
          {
            "type": "mc",
            "q": "Menyimpan data sensitif di plain text berisiko",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Enkripsi data sensitif."
          },
          {
            "type": "mc",
            "q": "Menguji dengan pengguna berbeda penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji multi-user."
          },
          {
            "type": "mc",
            "q": "Sertifikat pinning menambah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "keamanan"
            ],
            "a": 3,
            "explain": "Pinning menambah keamanan."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency aman",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Update dependency."
          },
          {
            "type": "mc",
            "q": "Audit keamanan berkala",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Audit rutin."
          }
        ]
      },
      {
        "id": "kotlin-23",
        "level": "Advance",
        "title": "Backend Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Ktor server memungkinkan",
            "options": [
              "API dengan Kotlin",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Ktor untuk backend."
          },
          {
            "type": "mc",
            "q": "Spring Boot populer untuk",
            "options": [
              "backend JVM",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Spring Boot backend."
          },
          {
            "type": "mc",
            "q": "Coroutine membantu server",
            "options": [
              "scalable",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Coroutine efisien."
          },
          {
            "type": "mc",
            "q": "Serialisasi JSON memakai kotlinx",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "kotlinx.serialization."
          },
          {
            "type": "mc",
            "q": "Routing didefinisikan sebagai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "deklarasi endpoint"
            ],
            "a": 3,
            "explain": "Routing endpoint."
          },
          {
            "type": "mc",
            "q": "Middleware memproses",
            "options": [
              "CSS",
              "route",
              "request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Middleware request."
          },
          {
            "type": "mc",
            "q": "Validasi input penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Validasi server."
          },
          {
            "type": "mc",
            "q": "Menangani error konsisten",
            "options": [
              "tidak",
              "CSS",
              "route",
              "penting"
            ],
            "a": 3,
            "explain": "Error konsisten."
          },
          {
            "type": "mc",
            "q": "Database via Exposed/JDBC",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Akses DB Kotlin."
          },
          {
            "type": "mc",
            "q": "Observability penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Log/metrik/tracing."
          }
        ]
      },
      {
        "id": "kotlin-24",
        "level": "Advance",
        "title": "Functional Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Pure function mudah",
            "options": [
              "diuji",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fungsi murni mudah diuji."
          },
          {
            "type": "mc",
            "q": "Immutability membantu",
            "options": [
              "CSS",
              "route",
              "prediktabilitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Immutable memudahkan."
          },
          {
            "type": "mc",
            "q": "Higher-order functions memungkinkan",
            "options": [
              "CSS",
              "komposisi",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Komposisi fungsi."
          },
          {
            "type": "mc",
            "q": "Composition over inheritance",
            "options": [
              "tidak",
              "CSS",
              "route",
              "disarankan"
            ],
            "a": 3,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Side effect sebaiknya",
            "options": [
              "dipisah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pisahkan efek samping."
          },
          {
            "type": "mc",
            "q": "Sequence untuk pipeline",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "data besar"
            ],
            "a": 3,
            "explain": "Sequence lazy."
          },
          {
            "type": "mc",
            "q": "Menghindari mutasi berlebih",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Minimalkan mutasi."
          },
          {
            "type": "mc",
            "q": "Fungsi kecil fokus",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Fungsi kecil."
          },
          {
            "type": "mc",
            "q": "Dokumentasi perilaku fungsi",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Dokumentasi jelas."
          },
          {
            "type": "mc",
            "q": "Test fungsi murni mudah",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Mudah diuji."
          }
        ]
      },
      {
        "id": "kotlin-25",
        "level": "Advance",
        "title": "Refactor & Clean Code",
        "exercises": [
          {
            "type": "mc",
            "q": "Nama jelas membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemeliharaan"
            ],
            "a": 3,
            "explain": "Nama deskriptif."
          },
          {
            "type": "mc",
            "q": "Menghindari duplikasi",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "DRY."
          },
          {
            "type": "mc",
            "q": "Linter (ktlint/detekt) menjaga",
            "options": [
              "kualitas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Linter menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap lebih aman",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Bertahap."
          },
          {
            "type": "mc",
            "q": "Test regresi melindungi",
            "options": [
              "CSS",
              "fitur lama",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Regresi penting."
          },
          {
            "type": "mc",
            "q": "Memisahkan layer membantu",
            "options": [
              "pengujian",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pemisahan layer."
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
            "explain": "Dokumentasi tim."
          },
          {
            "type": "mc",
            "q": "Review kode membantu kualitas",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Review penting."
          },
          {
            "type": "mc",
            "q": "Menghindari over-engineering",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Sederhana lebih baik."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum optimasi",
            "options": [
              "tidak",
              "wajib",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Ukur dulu."
          }
        ]
      },
      {
        "id": "kotlin-26",
        "level": "Advance",
        "title": "Type System Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Sealed class memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hierarki tertutup dan when exhaustive"
            ],
            "a": 3,
            "explain": "Sealed membatasi hierarki."
          },
          {
            "type": "mc",
            "q": "Value class mengurangi",
            "options": [
              "CSS",
              "overhead wrapper",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Value class efisien."
          },
          {
            "type": "mc",
            "q": "Generic variance memakai",
            "options": [
              "in/out",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Kotlin memakai in/out."
          },
          {
            "type": "mc",
            "q": "Type alias memudahkan",
            "options": [
              "CSS",
              "penamaan tipe kompleks",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Alias menamai tipe."
          },
          {
            "type": "mc",
            "q": "Reified type parameter memungkinkan",
            "options": [
              "CSS",
              "akses tipe saat runtime",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Reified untuk akses tipe."
          },
          {
            "type": "mc",
            "q": "Contracts memberi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "info alur ke compiler"
            ],
            "a": 3,
            "explain": "Kontrak memandu compiler."
          },
          {
            "type": "mc",
            "q": "Delegation memakai",
            "options": [
              "by",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Delegation dengan by."
          },
          {
            "type": "mc",
            "q": "Composition lebih fleksibel",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Komposisi fleksibel."
          },
          {
            "type": "mc",
            "q": "Type erasure JVM perlu diingat",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Erasure memengaruhi generics."
          },
          {
            "type": "mc",
            "q": "DSL Kotlin memakai",
            "options": [
              "lambdas with receiver",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Lambdas with receiver untuk DSL."
          }
        ]
      },
      {
        "id": "kotlin-27",
        "level": "Advance",
        "title": "Android Arsitektur",
        "exercises": [
          {
            "type": "mc",
            "q": "Arsitektur direkomendasikan memakai",
            "options": [
              "CSS",
              "MVVM/MVI",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "MVVM/MVI umum di Android."
          },
          {
            "type": "mc",
            "q": "ViewModel memisahkan",
            "options": [
              "state dari UI",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "ViewModel memisahkan state."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "sumber data",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Repository mengabstraksi data."
          },
          {
            "type": "mc",
            "q": "Use case menampung",
            "options": [
              "CSS",
              "aturan bisnis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Use case domain."
          },
          {
            "type": "mc",
            "q": "Hilt/Koin menyediakan",
            "options": [
              "CSS",
              "route",
              "dependency injection",
              "migrasi"
            ],
            "a": 2,
            "explain": "DI di Android."
          },
          {
            "type": "mc",
            "q": "Unidirectional data flow membantu",
            "options": [
              "CSS",
              "prediktabilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "UDF memudahkan state."
          },
          {
            "type": "mc",
            "q": "State hoisting penting di Compose",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Hoisting state."
          },
          {
            "type": "mc",
            "q": "Memisahkan UI dan domain memudahkan",
            "options": [
              "CSS",
              "route",
              "pengujian",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pemisahan memudahkan test."
          },
          {
            "type": "mc",
            "q": "Modularisasi gradle membantu",
            "options": [
              "skalabilitas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Modul memudahkan scaling."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Dokumentasi tim."
          }
        ]
      },
      {
        "id": "kotlin-28",
        "level": "Advance",
        "title": "Performance & Profiling",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling Android memakai",
            "options": [
              "CSS",
              "route",
              "Android Studio Profiler",
              "migrasi"
            ],
            "a": 2,
            "explain": "Profiler bawaan."
          },
          {
            "type": "mc",
            "q": "Recomposition berlebihan memengaruhi",
            "options": [
              "CSS",
              "route",
              "performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Recompose berlebih mahal."
          },
          {
            "type": "mc",
            "q": "remember/derivedStateOf membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengurangi recomposition"
            ],
            "a": 3,
            "explain": "Mengurangi recomposition."
          },
          {
            "type": "mc",
            "q": "Alokasi berlebih memengaruhi",
            "options": [
              "GC",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Alokasi menambah GC."
          },
          {
            "type": "mc",
            "q": "Coroutine membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "non-blocking IO"
            ],
            "a": 3,
            "explain": "Coroutine non-blocking."
          },
          {
            "type": "mc",
            "q": "Pekerjaan berat di Dispatchers.IO",
            "options": [
              "tidak",
              "CSS",
              "route",
              "disarankan"
            ],
            "a": 3,
            "explain": "Pindah IO ke dispatcher."
          },
          {
            "type": "mc",
            "q": "Baseline profile membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "startup"
            ],
            "a": 3,
            "explain": "Profile startup."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum optimasi",
            "options": [
              "tidak",
              "wajib",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Inline mengurangi overhead",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Inline menghilangkan overhead."
          },
          {
            "type": "mc",
            "q": "Image loading efisien penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Gambar efisien."
          }
        ]
      },
      {
        "id": "kotlin-29",
        "level": "Advance",
        "title": "Serialisasi & Networking",
        "exercises": [
          {
            "type": "mc",
            "q": "Serialisasi populer Kotlin memakai",
            "options": [
              "CSS",
              "kotlinx.serialization",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kotlinx.serialization."
          },
          {
            "type": "mc",
            "q": "Retrofit adalah",
            "options": [
              "HTTP client populer Android",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Retrofit untuk HTTP."
          },
          {
            "type": "mc",
            "q": "OkHttp sebagai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "HTTP engine"
            ],
            "a": 3,
            "explain": "OkHttp engine."
          },
          {
            "type": "mc",
            "q": "Moshi/Gson alternatif",
            "options": [
              "JSON library",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Alternatif JSON."
          },
          {
            "type": "mc",
            "q": "Coroutine dengan Retrofit mendukung",
            "options": [
              "CSS",
              "suspend function",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Retrofit mendukung suspend."
          },
          {
            "type": "mc",
            "q": "Interceptor memungkinkan",
            "options": [
              "CSS",
              "modifikasi request",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Interceptor mengubah request."
          },
          {
            "type": "mc",
            "q": "Menangani error jaringan penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tangani error."
          },
          {
            "type": "mc",
            "q": "Menyimpan token aman",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Token aman."
          },
          {
            "type": "mc",
            "q": "Timeout request penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Kompatibilitas."
          }
        ]
      },
      {
        "id": "kotlin-30",
        "level": "Advance",
        "title": "Gradle & Build Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Gradle memakai",
            "options": [
              "Kotlin DSL/script",
              "PHP",
              "Ruby",
              "CSS"
            ],
            "a": 0,
            "explain": "Gradle mendukung Kotlin DSL."
          },
          {
            "type": "mc",
            "q": "build.gradle.kts mendefinisikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konfigurasi build"
            ],
            "a": 3,
            "explain": "Konfigurasi build di gradle kts."
          },
          {
            "type": "mc",
            "q": "Version catalog membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengelola dependency"
            ],
            "a": 3,
            "explain": "Catalog mengelola versi."
          },
          {
            "type": "mc",
            "q": "Multi-module membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "skalabilitas"
            ],
            "a": 3,
            "explain": "Modul memudahkan scaling."
          },
          {
            "type": "mc",
            "q": "Menjalankan build memakai",
            "options": [
              "gradle run_all",
              "CSS",
              "route",
              "./gradlew build"
            ],
            "a": 3,
            "explain": "Gradle wrapper untuk build."
          },
          {
            "type": "mc",
            "q": "Menguji memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "./gradlew test"
            ],
            "a": 3,
            "explain": "Task test."
          },
          {
            "type": "mc",
            "q": "Konfigurasi cache membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kecepatan build"
            ],
            "a": 3,
            "explain": "Cache mempercepat."
          },
          {
            "type": "mc",
            "q": "Proguard/R8 dikonfigurasi saat",
            "options": [
              "CSS",
              "route",
              "build rilis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Konfigurasi R8 untuk rilis."
          },
          {
            "type": "mc",
            "q": "Menjaga versi plugin konsisten",
            "options": [
              "tidak",
              "CSS",
              "penting",
              "route"
            ],
            "a": 2,
            "explain": "Versi plugin konsisten."
          },
          {
            "type": "mc",
            "q": "CI menjalankan build otomatis",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "CI build otomatis."
          }
        ]
      },
      {
        "id": "kotlin-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Kotlin",
        "exercises": [
          {
            "type": "mc",
            "q": "Deklarasi `val` di Kotlin berarti",
            "options": [
              "Referensi tidak dapat di-assign ulang",
              "Variabel harus selalu null",
              "Nilai bertambah otomatis",
              "Objek selalu immutable secara mendalam"
            ],
            "a": 0,
            "explain": "val mencegah assignment ulang referensi, meski objek yang dirujuk belum tentu immutable."
          },
          {
            "type": "mc",
            "q": "Null safety Kotlin membantu dengan cara",
            "options": [
              "Membuat semua variabel menjadi null",
              "Membedakan tipe yang boleh null dan yang tidak",
              "Menghapus semua pemeriksaan runtime",
              "Mengubah Kotlin menjadi SQL"
            ],
            "a": 1,
            "explain": "Sistem tipe Kotlin menandai kemungkinan null agar kesalahan terdeteksi lebih awal."
          },
          {
            "type": "mc",
            "q": "Kotlin `data class` cocok untuk",
            "options": [
              "Menyimpan file CSS",
              "Mewakili data dengan fungsi umum seperti equals dan copy",
              "Menjalankan query tanpa database",
              "Menggantikan semua interface"
            ],
            "a": 1,
            "explain": "Data class menghasilkan fungsi standar untuk objek pembawa data."
          },
          {
            "type": "mc",
            "q": "Fungsi Kotlin yang diberi kata kunci `suspend` dirancang untuk",
            "options": [
              "Menghentikan compiler secara permanen",
              "Mengubah fungsi menjadi route",
              "Menangguhkan pekerjaan asynchronous dalam coroutine",
              "Menjalankan kode hanya di CSS"
            ],
            "a": 2,
            "explain": "Fungsi suspend dapat menangguhkan coroutine tanpa memblokir thread."
          },
          {
            "type": "mc",
            "q": "Ekspresi `when` Kotlin digunakan untuk",
            "options": [
              "Membuat koneksi database otomatis",
              "Menyusun file HTML",
              "Memilih hasil berdasarkan beberapa kondisi atau nilai",
              "Mengalokasikan pointer mentah"
            ],
            "a": 2,
            "explain": "when adalah ekspresi percabangan yang mencocokkan nilai, tipe, atau kondisi."
          }
        ]
      }
    ]
  }
];

export { CONTENT_KOTLIN };
