/* CodeDuo — blok konten: topik "Java" (dipisah dari Blok Web).
 * 1 topik (java) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_JAVA = [
{
    "id": "java",
    "name": "Java",
    "icon": "☕",
    "color": "#f89820",
    "desc": "Bahasa OOP di Java Virtual Machine",
    "lessons": [
      {
        "id": "java-1",
        "level": "Dasar",
        "title": "Pengenalan Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Java dikembangkan oleh",
            "options": [
              "Google",
              "Sun Microsystems/Oracle",
              "Microsoft",
              "Apple"
            ],
            "a": 1,
            "explain": "Java berasal dari Sun, kini Oracle."
          },
          {
            "type": "mc",
            "q": "Java berjalan di atas",
            "options": [
              "CSS",
              "SQL engine",
              "JVM",
              "PHP"
            ],
            "a": 2,
            "explain": "Java berjalan di Java Virtual Machine."
          },
          {
            "type": "mc",
            "q": "Berkas sumber Java berekstensi",
            "options": [
              ".jav",
              ".java",
              ".jv",
              ".jar"
            ],
            "a": 1,
            "explain": "Berkas sumber Java .java."
          },
          {
            "type": "mc",
            "q": "Mengompilasi Java memakai",
            "options": [
              "java compile",
              "jvmc",
              "javac",
              "CSS"
            ],
            "a": 2,
            "explain": "javac adalah compiler Java."
          },
          {
            "type": "mc",
            "q": "Menjalankan program Java memakai",
            "options": [
              "javac run",
              "jrun",
              "java NamaKelas",
              "CSS"
            ],
            "a": 2,
            "explain": "Perintah java menjalankan bytecode."
          },
          {
            "type": "mc",
            "q": "Bytecode Java berekstensi",
            "options": [
              ".java",
              ".jar",
              ".class",
              ".bin"
            ],
            "a": 2,
            "explain": "Hasil kompilasi .class."
          },
          {
            "type": "mc",
            "q": "Java adalah bahasa",
            "options": [
              "dinamis",
              "tanpa tipe",
              "statically typed dan OOP",
              "CSS"
            ],
            "a": 2,
            "explain": "Java bertipe statis dan berorientasi objek."
          },
          {
            "type": "mc",
            "q": "Fungsi utama Java adalah",
            "options": [
              "func main()",
              "def main()",
              "public static void main(String[] args)",
              "main()"
            ],
            "a": 2,
            "explain": "Entry point main dengan signature khusus."
          },
          {
            "type": "mc",
            "q": "Build tool umum Java adalah",
            "options": [
              "Composer",
              "Bundler",
              "pub",
              "Maven/Gradle"
            ],
            "a": 3,
            "explain": "Maven/Gradle membangun Java."
          },
          {
            "type": "mc",
            "q": "JAR adalah",
            "options": [
              "CSS",
              "route",
              "arsip bytecode/library",
              "migrasi"
            ],
            "a": 2,
            "explain": "JAR mengemas bytecode."
          }
        ]
      },
      {
        "id": "java-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe teks di Java adalah",
            "options": [
              "Text",
              "Char",
              "String",
              "Str"
            ],
            "a": 2,
            "explain": "Java memakai String."
          },
          {
            "type": "mc",
            "q": "Tipe bilangan bulat adalah",
            "options": [
              "Int",
              "Integer only",
              "int",
              "Number"
            ],
            "a": 2,
            "explain": "Java memakai int (primitif)."
          },
          {
            "type": "mc",
            "q": "Tipe desimal adalah",
            "options": [
              "float only",
              "decimal",
              "double",
              "real"
            ],
            "a": 2,
            "explain": "Java memakai double."
          },
          {
            "type": "mc",
            "q": "Tipe boolean adalah",
            "options": [
              "bool",
              "Boolean only",
              "boolean",
              "bit"
            ],
            "a": 2,
            "explain": "Java memakai boolean primitif."
          },
          {
            "type": "mc",
            "q": "Deklarasi variabel memakai",
            "options": [
              "let nama",
              "var nama",
              "tipe nama = nilai;",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai tipe eksplisit."
          },
          {
            "type": "mc",
            "q": "Konstanta memakai",
            "options": [
              "const",
              "val",
              "let",
              "final"
            ],
            "a": 3,
            "explain": "Java memakai final."
          },
          {
            "type": "mc",
            "q": "Autoboxing berarti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konversi primitif ke wrapper otomatis"
            ],
            "a": 3,
            "explain": "Autoboxing mengubah int ke Integer."
          },
          {
            "type": "mc",
            "q": "Var (Java 10+) memungkinkan",
            "options": [
              "inferensi tipe lokal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "var untuk tipe lokal."
          },
          {
            "type": "mc",
            "q": "String immutable",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "String tidak dapat diubah."
          },
          {
            "type": "mc",
            "q": "Menggabungkan string memakai",
            "options": [
              "&&",
              ".concat only",
              "+",
              "CSS"
            ],
            "a": 2,
            "explain": "Operator + menggabungkan."
          }
        ]
      },
      {
        "id": "java-3",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan memakai",
            "options": [
              "when",
              "unless",
              "if/else",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai if/else."
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
            "explain": "Java memakai switch."
          },
          {
            "type": "mc",
            "q": "Perulangan for memakai",
            "options": [
              "for (init; cond; step)",
              "for x in",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "For klasik memakai tiga bagian."
          },
          {
            "type": "mc",
            "q": "Enhanced for memakai",
            "options": [
              "for (x of koleksi)",
              "CSS",
              "route",
              "for (T x : koleksi)"
            ],
            "a": 3,
            "explain": "Enhanced for mengiterasi koleksi."
          },
          {
            "type": "mc",
            "q": "while mengulang selama",
            "options": [
              "kondisi benar",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan blok",
            "options": [
              "CSS",
              "route",
              "minimal sekali",
              "migrasi"
            ],
            "a": 2,
            "explain": "Do-while dieksekusi minimal sekali."
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
              "kondisi ? a : b",
              "if(a,b)",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Ternary memilih nilai."
          },
          {
            "type": "mc",
            "q": "Label pada loop memungkinkan",
            "options": [
              "break/continue bertarget",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Label memberi target."
          },
          {
            "type": "mc",
            "q": "switch modern (Java 14+) memakai",
            "options": [
              "=> ",
              "CSS",
              "route",
              "arrow -> dan yield"
            ],
            "a": 3,
            "explain": "Switch ekspresi dengan ->."
          }
        ]
      },
      {
        "id": "java-4",
        "level": "Dasar",
        "title": "Array & Enums",
        "exercises": [
          {
            "type": "mc",
            "q": "Array dibuat memakai",
            "options": [
              "new int[5] / {}",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Java array memakai new T[n]."
          },
          {
            "type": "mc",
            "q": "Panjang array memakai",
            "options": [
              ".size()",
              ".len()",
              ".length",
              "CSS"
            ],
            "a": 2,
            "explain": "Array memakai .length."
          },
          {
            "type": "mc",
            "q": "Mengakses elemen array memakai",
            "options": [
              "arr.get(0)",
              "arr[0]",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Array diakses dengan []."
          },
          {
            "type": "mc",
            "q": "Array multidimensi memakai",
            "options": [
              "int[,]",
              "CSS",
              "int[][]",
              "route"
            ],
            "a": 2,
            "explain": "Java memakai int[][]."
          },
          {
            "type": "mc",
            "q": "Enum dideklarasikan dengan",
            "options": [
              "enum Nama { A, B }",
              "class enum",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Java memakai enum."
          },
          {
            "type": "mc",
            "q": "Enum dapat memiliki",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "field dan method"
            ],
            "a": 3,
            "explain": "Enum Java punya member."
          },
          {
            "type": "mc",
            "q": "values() pada enum memberi",
            "options": [
              "CSS",
              "route",
              "semua konstanta",
              "migrasi"
            ],
            "a": 2,
            "explain": "values mengembalikan konstanta."
          },
          {
            "type": "mc",
            "q": "Array index out of bounds memicu",
            "options": [
              "CSS",
              "ArrayIndexOutOfBoundsException",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Index salah melempar exception."
          },
          {
            "type": "mc",
            "q": "Arrays.sort mengurutkan",
            "options": [
              "array",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Arrays.sort mengurutkan."
          },
          {
            "type": "mc",
            "q": "Arrays.asList mengubah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "array ke list"
            ],
            "a": 3,
            "explain": "asList membungkus array."
          }
        ]
      },
      {
        "id": "java-5",
        "level": "Dasar",
        "title": "Class & Object",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan class memakai",
            "options": [
              "struct Nama",
              "def Nama",
              "class Nama {}",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai class."
          },
          {
            "type": "mc",
            "q": "Konstruktor bernama",
            "options": [
              "sama dengan class",
              "constructor",
              "init",
              "CSS"
            ],
            "a": 0,
            "explain": "Konstruktor sama nama class."
          },
          {
            "type": "mc",
            "q": "Membuat objek memakai",
            "options": [
              "Nama()",
              "new Nama()",
              "Nama.new",
              "CSS"
            ],
            "a": 1,
            "explain": "Java memakai new."
          },
          {
            "type": "mc",
            "q": "Field private diawali",
            "options": [
              "modifier private",
              "garis bawah",
              "#",
              "CSS"
            ],
            "a": 0,
            "explain": "Java memakai modifier."
          },
          {
            "type": "mc",
            "q": "Getter/setter konvensional memakai",
            "options": [
              "x.get",
              "getX()/setX()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Konvensi get/set."
          },
          {
            "type": "mc",
            "q": "Pewarisan memakai",
            "options": [
              "implements",
              "with",
              "extends",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai extends."
          },
          {
            "type": "mc",
            "q": "Mengimplementasikan interface memakai",
            "options": [
              "extends",
              "with",
              "implements",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai implements."
          },
          {
            "type": "mc",
            "q": "Memanggil konstruktor induk memakai",
            "options": [
              "parent()",
              "base()",
              "super()",
              "CSS"
            ],
            "a": 2,
            "explain": "super memanggil induk."
          },
          {
            "type": "mc",
            "q": "Override memakai anotasi",
            "options": [
              "override()",
              "@Override",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Anotasi @Override."
          },
          {
            "type": "mc",
            "q": "Class abstrak memakai",
            "options": [
              "interface only",
              "abstract class",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Java memakai abstract class."
          }
        ]
      },
      {
        "id": "java-6",
        "level": "Dasar",
        "title": "Inheritance & Polimorfisme",
        "exercises": [
          {
            "type": "mc",
            "q": "Java mendukung multiple inheritance class",
            "options": [
              "ya",
              "CSS",
              "route",
              "tidak"
            ],
            "a": 3,
            "explain": "Java hanya pewarisan tunggal."
          },
          {
            "type": "mc",
            "q": "Interface memungkinkan",
            "options": [
              "CSS",
              "route",
              "banyak implementasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Class dapat implement banyak interface."
          },
          {
            "type": "mc",
            "q": "Method overriding berarti",
            "options": [
              "CSS",
              "route",
              "subclass menimpa method induk",
              "migrasi"
            ],
            "a": 2,
            "explain": "Override mengubah perilaku."
          },
          {
            "type": "mc",
            "q": "Method overloading berarti",
            "options": [
              "CSS",
              "method sama nama beda parameter",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Overload beda signature."
          },
          {
            "type": "mc",
            "q": "Polimorfisme memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "objek diperlakukan sebagai tipe induk"
            ],
            "a": 3,
            "explain": "Polimorfisme via tipe induk."
          },
          {
            "type": "mc",
            "q": "Upcasting berarti",
            "options": [
              "CSS",
              "route",
              "menaikkan ke tipe induk",
              "migrasi"
            ],
            "a": 2,
            "explain": "Upcast aman."
          },
          {
            "type": "mc",
            "q": "Downcasting memerlukan",
            "options": [
              "cek tipe/cast eksplisit",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Downcast bisa gagal."
          },
          {
            "type": "mc",
            "q": "instanceof memeriksa",
            "options": [
              "CSS",
              "tipe objek",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "instanceof cek tipe."
          },
          {
            "type": "mc",
            "q": "final pada class berarti",
            "options": [
              "CSS",
              "route",
              "tidak bisa diwarisi",
              "migrasi"
            ],
            "a": 2,
            "explain": "final mencegah pewarisan."
          },
          {
            "type": "mc",
            "q": "Composition sering disarankan",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Komposisi fleksibel."
          }
        ]
      },
      {
        "id": "java-7",
        "level": "Dasar",
        "title": "Koleksi Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "List umum di Java adalah",
            "options": [
              "ArrayList",
              "Array only",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "ArrayList implementasi List."
          },
          {
            "type": "mc",
            "q": "Map umum adalah",
            "options": [
              "MapArray",
              "CSS",
              "HashMap",
              "route"
            ],
            "a": 2,
            "explain": "HashMap implementasi Map."
          },
          {
            "type": "mc",
            "q": "Set umum adalah",
            "options": [
              "SetArray",
              "CSS",
              "route",
              "HashSet"
            ],
            "a": 3,
            "explain": "HashSet implementasi Set."
          },
          {
            "type": "mc",
            "q": "Menambah ke List memakai",
            "options": [
              "push()",
              "append()",
              "add()",
              "CSS"
            ],
            "a": 2,
            "explain": "List memakai add()."
          },
          {
            "type": "mc",
            "q": "Ukuran koleksi memakai",
            "options": [
              "length()",
              "count()",
              "size()",
              "CSS"
            ],
            "a": 2,
            "explain": "Koleksi memakai size()."
          },
          {
            "type": "mc",
            "q": "Mengakses List memakai",
            "options": [
              "get(index)",
              "list[index]",
              "at()",
              "CSS"
            ],
            "a": 0,
            "explain": "List memakai get()."
          },
          {
            "type": "mc",
            "q": "Map mengakses nilai memakai",
            "options": [
              "get(key)",
              "map[key]",
              "at()",
              "CSS"
            ],
            "a": 0,
            "explain": "Map memakai get()."
          },
          {
            "type": "mc",
            "q": "Generics pada koleksi memakai",
            "options": [
              "List of String",
              "CSS",
              "List<String>",
              "route"
            ],
            "a": 2,
            "explain": "Java memakai <T>."
          },
          {
            "type": "mc",
            "q": "Iterasi koleksi memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "for-each/Iterator"
            ],
            "a": 3,
            "explain": "For-each/Iterator."
          },
          {
            "type": "mc",
            "q": "Stream API memungkinkan",
            "options": [
              "CSS",
              "route",
              "pemrosesan deklaratif koleksi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Stream untuk pipeline."
          }
        ]
      },
      {
        "id": "java-8",
        "level": "Dasar",
        "title": "String & StringBuilder",
        "exercises": [
          {
            "type": "mc",
            "q": "String immutable sehingga",
            "options": [
              "CSS",
              "operasi menghasilkan string baru",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "String tidak berubah."
          },
          {
            "type": "mc",
            "q": "StringBuilder dipakai untuk",
            "options": [
              "CSS",
              "route",
              "modifikasi string efisien",
              "migrasi"
            ],
            "a": 2,
            "explain": "Builder efisien untuk banyak edit."
          },
          {
            "type": "mc",
            "q": "Panjang string memakai",
            "options": [
              ".size()",
              ".len()",
              ".length()",
              "CSS"
            ],
            "a": 2,
            "explain": "String memakai length()."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              ".upper()",
              "CSS",
              "route",
              ".toUpperCase()"
            ],
            "a": 3,
            "explain": "toUpperCase."
          },
          {
            "type": "mc",
            "q": "Memotong spasi memakai",
            "options": [
              ".strip()",
              ".trim()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "trim/strip."
          },
          {
            "type": "mc",
            "q": "Mengganti memakai",
            "options": [
              ".replace()/replaceAll()",
              ".gsub()",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "replace/replaceAll."
          },
          {
            "type": "mc",
            "q": "Membagi memakai",
            "options": [
              ".explode()",
              ".split()",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Membandingkan isi string memakai",
            "options": [
              "== selalu",
              "CSS",
              ".equals()",
              "route"
            ],
            "a": 2,
            "explain": "equals membandingkan isi."
          },
          {
            "type": "mc",
            "q": "== pada objek membandingkan",
            "options": [
              "selalu isi",
              "referensi",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "== membandingkan referensi."
          },
          {
            "type": "mc",
            "q": "String formatting memakai",
            "options": [
              "CSS",
              "route",
              "String.format",
              "migrasi"
            ],
            "a": 2,
            "explain": "String.format memformat."
          }
        ]
      },
      {
        "id": "java-9",
        "level": "Dasar",
        "title": "Exception",
        "exercises": [
          {
            "type": "mc",
            "q": "Menangkap exception memakai",
            "options": [
              "try/rescue",
              "except",
              "try/catch",
              "CSS"
            ],
            "a": 2,
            "explain": "Java memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "CSS",
              "selalu",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "finally selalu dijalankan."
          },
          {
            "type": "mc",
            "q": "Checked exception harus",
            "options": [
              "ditangani atau dideklarasikan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Wajib ditangani/dideklarasikan."
          },
          {
            "type": "mc",
            "q": "Unchecked exception mewarisi",
            "options": [
              "RuntimeException",
              "Exception only",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Unchecked turunan RuntimeException."
          },
          {
            "type": "mc",
            "q": "Melempar exception memakai",
            "options": [
              "raise",
              "panic",
              "CSS",
              "throw"
            ],
            "a": 3,
            "explain": "Java memakai throw."
          },
          {
            "type": "mc",
            "q": "Deklarasi exception memakai",
            "options": [
              "throw only",
              "CSS",
              "throws",
              "route"
            ],
            "a": 2,
            "explain": "throws pada signature."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Exception/RuntimeException"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "try-with-resources menutup",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "resource otomatis"
            ],
            "a": 3,
            "explain": "AutoCloseable ditutup otomatis."
          },
          {
            "type": "mc",
            "q": "Mengabaikan exception berisiko",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Jangan abaikan exception."
          },
          {
            "type": "mc",
            "q": "Pesan exception memakai",
            "options": [
              ".getMessage()",
              ".message",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "getMessage memberi pesan."
          }
        ]
      },
      {
        "id": "java-10",
        "level": "Dasar",
        "title": "Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Generics memungkinkan",
            "options": [
              "CSS",
              "tipe aman dan pemakaian ulang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Java memakai generics."
          },
          {
            "type": "mc",
            "q": "Deklarasi generic class memakai",
            "options": [
              "class Box<T>",
              "class Box[T]",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Java memakai <T>."
          },
          {
            "type": "mc",
            "q": "Batasan generic memakai",
            "options": [
              "CSS",
              "<T extends Batas>",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "extends membatasi."
          },
          {
            "type": "mc",
            "q": "Wildcard memakai",
            "options": [
              "*",
              "#",
              "CSS",
              "?"
            ],
            "a": 3,
            "explain": "Java memakai ? untuk wildcard."
          },
          {
            "type": "mc",
            "q": "Wildcard extends memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "? extends T"
            ],
            "a": 3,
            "explain": "Upper bound wildcard."
          },
          {
            "type": "mc",
            "q": "Wildcard super memakai",
            "options": [
              "CSS",
              "route",
              "? super T",
              "migrasi"
            ],
            "a": 2,
            "explain": "Lower bound wildcard."
          },
          {
            "type": "mc",
            "q": "Type erasure berarti",
            "options": [
              "info generic hilang saat runtime",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Erasure menghapus generic runtime."
          },
          {
            "type": "mc",
            "q": "List<Object> tidak sama dengan",
            "options": [
              "List<String>",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Generics invarian."
          },
          {
            "type": "mc",
            "q": "Generics menghindari",
            "options": [
              "CSS",
              "route",
              "cast manual",
              "migrasi"
            ],
            "a": 2,
            "explain": "Generics mengurangi cast."
          },
          {
            "type": "mc",
            "q": "Generics berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kompleksitas"
            ],
            "a": 3,
            "explain": "Gunakan sesuai kebutuhan."
          }
        ]
      },
      {
        "id": "java-11",
        "level": "Menengah",
        "title": "Generics Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Type erasure menyebabkan",
            "options": [
              "info tipe hilang runtime",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Erasure menghapus tipe."
          },
          {
            "type": "mc",
            "q": "Membuat array generic berisiko",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "karena erasure"
            ],
            "a": 3,
            "explain": "Array generic tidak aman."
          },
          {
            "type": "mc",
            "q": "Wildcard membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "fleksibilitas tipe"
            ],
            "a": 3,
            "explain": "Wildcard menambah fleksibilitas."
          },
          {
            "type": "mc",
            "q": "PECS singkatan dari",
            "options": [
              "CSS",
              "Producer Extends Consumer Super",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Prinsip PECS generics."
          },
          {
            "type": "mc",
            "q": "Generic method memakai",
            "options": [
              "CSS",
              "<T> T method()",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Generic method deklarasi."
          },
          {
            "type": "mc",
            "q": "Bounded type parameter memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "extends"
            ],
            "a": 3,
            "explain": "extends membatasi."
          },
          {
            "type": "mc",
            "q": "Raw type sebaiknya",
            "options": [
              "CSS",
              "route",
              "dihindari",
              "migrasi"
            ],
            "a": 2,
            "explain": "Hindari raw type."
          },
          {
            "type": "mc",
            "q": "Generics membantu",
            "options": [
              "CSS",
              "route",
              "type safety",
              "migrasi"
            ],
            "a": 2,
            "explain": "Generics menjaga tipe."
          },
          {
            "type": "mc",
            "q": "Wildcard berlebihan dapat",
            "options": [
              "CSS",
              "mengurangi keterbacaan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Gunakan jelas."
          },
          {
            "type": "mc",
            "q": "Generics dan inheritance",
            "options": [
              "CSS",
              "route",
              "invarian",
              "migrasi"
            ],
            "a": 2,
            "explain": "Generics tidak covariant default."
          }
        ]
      },
      {
        "id": "java-12",
        "level": "Menengah",
        "title": "Concurrency Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Lock eksplisit memakai",
            "options": [
              "CSS",
              "ReentrantLock",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "ReentrantLock lock eksplisit."
          },
          {
            "type": "mc",
            "q": "Semaphore membatasi",
            "options": [
              "CSS",
              "akses bersamaan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Semaphore batasi akses."
          },
          {
            "type": "mc",
            "q": "CountDownLatch menunggu",
            "options": [
              "CSS",
              "route",
              "sejumlah event",
              "migrasi"
            ],
            "a": 2,
            "explain": "Latch menunggu event."
          },
          {
            "type": "mc",
            "q": "BlockingQueue memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "producer-consumer"
            ],
            "a": 3,
            "explain": "BlockingQueue producer-consumer."
          },
          {
            "type": "mc",
            "q": "ForkJoinPool untuk",
            "options": [
              "parallel processing",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "ForkJoin paralel."
          },
          {
            "type": "mc",
            "q": "CompletableFuture.allOf menunggu",
            "options": [
              "CSS",
              "route",
              "semua selesai",
              "migrasi"
            ],
            "a": 2,
            "explain": "allOf menunggu semua."
          },
          {
            "type": "mc",
            "q": "ThreadLocal menyimpan",
            "options": [
              "CSS",
              "data per thread",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "ThreadLocal per thread."
          },
          {
            "type": "mc",
            "q": "Deadlock dihindari dengan",
            "options": [
              "CSS",
              "urutan lock konsisten",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Urutan lock konsisten."
          },
          {
            "type": "mc",
            "q": "Concurrency harus diuji",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Uji concurrency."
          },
          {
            "type": "mc",
            "q": "Virtual threads membantu",
            "options": [
              "CSS",
              "skalabilitas IO",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Virtual threads untuk IO."
          }
        ]
      },
      {
        "id": "java-13",
        "level": "Menengah",
        "title": "Reflection & Anotasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Reflection memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "introspeksi runtime"
            ],
            "a": 3,
            "explain": "Reflection introspeksi."
          },
          {
            "type": "mc",
            "q": "Class.forName memuat",
            "options": [
              "CSS",
              "class",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Memuat class by name."
          },
          {
            "type": "mc",
            "q": "Anotasi memberi",
            "options": [
              "CSS",
              "route",
              "metadata",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anotasi metadata."
          },
          {
            "type": "mc",
            "q": "Retention menentukan",
            "options": [
              "CSS",
              "route",
              "ketersediaan anotasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Retention mengatur masa hidup."
          },
          {
            "type": "mc",
            "q": "Reflection mengorbankan",
            "options": [
              "CSS",
              "performa/type safety",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Reflection lebih lambat."
          },
          {
            "type": "mc",
            "q": "Framework memakai reflection untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "DI/routing"
            ],
            "a": 3,
            "explain": "Framework memakai reflection."
          },
          {
            "type": "mc",
            "q": "Reflection berlebihan sebaiknya",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dihindari"
            ],
            "a": 3,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Anotasi kustom didefinisikan dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "@interface"
            ],
            "a": 3,
            "explain": "Anotasi via @interface."
          },
          {
            "type": "mc",
            "q": "Modul (JPMS) membatasi",
            "options": [
              "CSS",
              "akses reflection",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Modul membatasi akses."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API reflection penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Dokumentasi jelas."
          }
        ]
      },
      {
        "id": "java-14",
        "level": "Menengah",
        "title": "Serialization & JSON",
        "exercises": [
          {
            "type": "mc",
            "q": "Java serialization bawaan memakai",
            "options": [
              "Serializable",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Serializable interface."
          },
          {
            "type": "mc",
            "q": "JSON library populer adalah",
            "options": [
              "CSS",
              "route",
              "Jackson/Gson",
              "migrasi"
            ],
            "a": 2,
            "explain": "Jackson/Gson JSON."
          },
          {
            "type": "mc",
            "q": "Deserialization data tak tepercaya berisiko",
            "options": [
              "keamanan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Deserialisasi tak aman."
          },
          {
            "type": "mc",
            "q": "Membuat DTO membantu",
            "options": [
              "CSS",
              "route",
              "memisahkan API",
              "migrasi"
            ],
            "a": 2,
            "explain": "DTO memisahkan API."
          },
          {
            "type": "mc",
            "q": "Mengontrol field JSON memakai",
            "options": [
              "CSS",
              "route",
              "anotasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anotasi mengatur field."
          },
          {
            "type": "mc",
            "q": "Menangani tanggal serialisasi perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "format khusus"
            ],
            "a": 3,
            "explain": "Format tanggal eksplisit."
          },
          {
            "type": "mc",
            "q": "Error parsing harus ditangani",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tangani error parsing."
          },
          {
            "type": "mc",
            "q": "Validasi input penting",
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
            "q": "Versioning API membantu",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Kompatibilitas."
          },
          {
            "type": "mc",
            "q": "Serialization sebaiknya",
            "options": [
              "CSS",
              "teruji",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Uji serialisasi."
          }
        ]
      },
      {
        "id": "java-15",
        "level": "Menengah",
        "title": "Stream API",
        "exercises": [
          {
            "type": "mc",
            "q": "Stream dibuat dari koleksi dengan",
            "options": [
              "stream()",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Koleksi menyediakan stream()."
          },
          {
            "type": "mc",
            "q": "map pada Stream",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mentransformasi elemen"
            ],
            "a": 3,
            "explain": "map mentransformasi."
          },
          {
            "type": "mc",
            "q": "filter menyaring",
            "options": [
              "CSS",
              "route",
              "elemen",
              "migrasi"
            ],
            "a": 2,
            "explain": "filter menyaring."
          },
          {
            "type": "mc",
            "q": "collect mengumpulkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hasil stream"
            ],
            "a": 3,
            "explain": "collect menghasilkan koleksi."
          },
          {
            "type": "mc",
            "q": "Collectors.toList mengumpulkan",
            "options": [
              "CSS",
              "ke List",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "toList mengumpulkan ke List."
          },
          {
            "type": "mc",
            "q": "reduce mengakumulasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nilai"
            ],
            "a": 3,
            "explain": "reduce mereduksi."
          },
          {
            "type": "mc",
            "q": "forEach menjalankan",
            "options": [
              "aksi per elemen",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "forEach iterasi."
          },
          {
            "type": "mc",
            "q": "Stream bersifat lazy hingga",
            "options": [
              "operasi terminal",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Lazy sampai terminal."
          },
          {
            "type": "mc",
            "q": "parallelStream memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemrosesan paralel"
            ],
            "a": 3,
            "explain": "Parallel stream."
          },
          {
            "type": "mc",
            "q": "Pipeline stream berlebihan dapat",
            "options": [
              "CSS",
              "route",
              "menambah kompleksitas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Gunakan jelas."
          }
        ]
      },
      {
        "id": "java-16",
        "level": "Menengah",
        "title": "Lambda & Functional Interface",
        "exercises": [
          {
            "type": "mc",
            "q": "Lambda memakai",
            "options": [
              "(a) => expr",
              "lambda a",
              "CSS",
              "(a) -> expr"
            ],
            "a": 3,
            "explain": "Java memakai ->."
          },
          {
            "type": "mc",
            "q": "Functional interface memiliki",
            "options": [
              "CSS",
              "satu method abstrak",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Satu method abstrak."
          },
          {
            "type": "mc",
            "q": "Function<T,R> mengubah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "T ke R"
            ],
            "a": 3,
            "explain": "Function memetakan."
          },
          {
            "type": "mc",
            "q": "Predicate<T> mengembalikan",
            "options": [
              "boolean",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Predicate boolean."
          },
          {
            "type": "mc",
            "q": "Consumer<T> memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nilai tanpa hasil"
            ],
            "a": 3,
            "explain": "Consumer tanpa hasil."
          },
          {
            "type": "mc",
            "q": "Supplier<T> menyediakan",
            "options": [
              "CSS",
              "route",
              "nilai",
              "migrasi"
            ],
            "a": 2,
            "explain": "Supplier memberi nilai."
          },
          {
            "type": "mc",
            "q": "Method reference memakai",
            "options": [
              "->",
              "=>",
              "CSS",
              "::"
            ],
            "a": 3,
            "explain": "Java memakai ::."
          },
          {
            "type": "mc",
            "q": "@FunctionalInterface menandai",
            "options": [
              "CSS",
              "route",
              "interface fungsional",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anotasi menandai."
          },
          {
            "type": "mc",
            "q": "Lambda menangkap variabel effectively final",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Variabel harus effectively final."
          },
          {
            "type": "mc",
            "q": "Lambda memudahkan",
            "options": [
              "CSS",
              "kode ringkas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Lambda mempersingkat."
          }
        ]
      },
      {
        "id": "java-17",
        "level": "Menengah",
        "title": "Concurrency Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Thread dibuat dengan",
            "options": [
              "CSS",
              "extends Thread/mengimplementasikan Runnable",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Thread atau Runnable."
          },
          {
            "type": "mc",
            "q": "ExecutorService mengelola",
            "options": [
              "CSS",
              "route",
              "thread pool",
              "migrasi"
            ],
            "a": 2,
            "explain": "Executor mengelola pool."
          },
          {
            "type": "mc",
            "q": "Future mewakili",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hasil async"
            ],
            "a": 3,
            "explain": "Future hasil async."
          },
          {
            "type": "mc",
            "q": "CompletableFuture memungkinkan",
            "options": [
              "CSS",
              "route",
              "komposisi async",
              "migrasi"
            ],
            "a": 2,
            "explain": "CompletableFuture komposisi."
          },
          {
            "type": "mc",
            "q": "synchronized memakai",
            "options": [
              "CSS",
              "lock intrinsic",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "synchronized mengunci."
          },
          {
            "type": "mc",
            "q": "volatile menjamin",
            "options": [
              "CSS",
              "route",
              "visibility antar thread",
              "migrasi"
            ],
            "a": 2,
            "explain": "volatile visibility."
          },
          {
            "type": "mc",
            "q": "ConcurrentHashMap untuk",
            "options": [
              "map thread-safe",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Concurrent HashMap aman."
          },
          {
            "type": "mc",
            "q": "AtomicInteger untuk",
            "options": [
              "CSS",
              "operasi atomik",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Atomic untuk atomik."
          },
          {
            "type": "mc",
            "q": "Deadlock terjadi bila",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "saling menunggu lock"
            ],
            "a": 3,
            "explain": "Deadlock karena lock saling tunggu."
          },
          {
            "type": "mc",
            "q": "Virtual threads (Java 21)",
            "options": [
              "mengurangi biaya thread",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Virtual threads ringan."
          }
        ]
      },
      {
        "id": "java-18",
        "level": "Menengah",
        "title": "Testing Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test populer adalah",
            "options": [
              "Jest",
              "PHPUnit",
              "RSpec",
              "JUnit"
            ],
            "a": 3,
            "explain": "JUnit untuk Java."
          },
          {
            "type": "mc",
            "q": "Assertion memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "assertEquals/assertThrows"
            ],
            "a": 3,
            "explain": "JUnit menyediakan assert."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "CSS",
              "route",
              "Mockito",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mockito untuk mock."
          },
          {
            "type": "mc",
            "q": "Test setup memakai",
            "options": [
              "CSS",
              "route",
              "@BeforeEach",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anotasi setup."
          },
          {
            "type": "mc",
            "q": "Parameterized test memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "banyak kasus"
            ],
            "a": 3,
            "explain": "Test berparameter."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "CSS",
              "JaCoCo",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "JaCoCo mengukur."
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
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Menjalankan test di CI penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test exception memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "assertThrows"
            ],
            "a": 3,
            "explain": "assertThrows menguji exception."
          },
          {
            "type": "mc",
            "q": "Integration test menguji",
            "options": [
              "CSS",
              "route",
              "alur nyata",
              "migrasi"
            ],
            "a": 2,
            "explain": "Integrasi end-to-end."
          }
        ]
      },
      {
        "id": "java-19",
        "level": "Menengah",
        "title": "JDBC & Database",
        "exercises": [
          {
            "type": "mc",
            "q": "JDBC menyediakan",
            "options": [
              "akses database",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "JDBC API database."
          },
          {
            "type": "mc",
            "q": "PreparedStatement mencegah",
            "options": [
              "CSS",
              "route",
              "SQL injection",
              "migrasi"
            ],
            "a": 2,
            "explain": "Parameter terikat aman."
          },
          {
            "type": "mc",
            "q": "ResultSet berisi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hasil query"
            ],
            "a": 3,
            "explain": "ResultSet hasil."
          },
          {
            "type": "mc",
            "q": "Menutup resource penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tutup koneksi/statement."
          },
          {
            "type": "mc",
            "q": "Connection pool memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "HikariCP"
            ],
            "a": 3,
            "explain": "HikariCP umum."
          },
          {
            "type": "mc",
            "q": "Transaksi memakai",
            "options": [
              "CSS",
              "setAutoCommit(false)/commit",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Transaksi manual."
          },
          {
            "type": "mc",
            "q": "ORM populer adalah",
            "options": [
              "CSS",
              "Hibernate/JPA",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hibernate ORM."
          },
          {
            "type": "mc",
            "q": "Batch insert membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "performa"
            ],
            "a": 3,
            "explain": "Batch mengurangi roundtrip."
          },
          {
            "type": "mc",
            "q": "Menangani SQLException penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Tangani error DB."
          },
          {
            "type": "mc",
            "q": "Versioning skema memakai",
            "options": [
              "Flyway/Liquibase",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Flyway/Liquibase migrasi."
          }
        ]
      },
      {
        "id": "java-20",
        "level": "Menengah",
        "title": "I/O & NIO",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca berkas modern memakai",
            "options": [
              "CSS",
              "route",
              "java.nio.file.Files",
              "migrasi"
            ],
            "a": 2,
            "explain": "Files API modern."
          },
          {
            "type": "mc",
            "q": "Files.readString membaca",
            "options": [
              "CSS",
              "seluruh teks",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "readString membaca teks."
          },
          {
            "type": "mc",
            "q": "Files.writeString menulis",
            "options": [
              "teks",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "writeString menulis."
          },
          {
            "type": "mc",
            "q": "BufferedReader membaca",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "per baris efisien"
            ],
            "a": 3,
            "explain": "BufferedReader efisien."
          },
          {
            "type": "mc",
            "q": "Path merepresentasikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lokasi berkas"
            ],
            "a": 3,
            "explain": "Path menunjuk lokasi."
          },
          {
            "type": "mc",
            "q": "Stream I/O harus ditutup",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Tutup stream."
          },
          {
            "type": "mc",
            "q": "try-with-resources menutup",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "otomatis"
            ],
            "a": 3,
            "explain": "Auto close."
          },
          {
            "type": "mc",
            "q": "Character encoding penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Tentukan encoding."
          },
          {
            "type": "mc",
            "q": "NIO buffer memungkinkan",
            "options": [
              "CSS",
              "route",
              "I/O efisien",
              "migrasi"
            ],
            "a": 2,
            "explain": "NIO buffer."
          },
          {
            "type": "mc",
            "q": "Menangani IOException penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Tangani error I/O."
          }
        ]
      },
      {
        "id": "java-21",
        "level": "Advance",
        "title": "Arsitektur Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Layered architecture memisahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "tanggung jawab"
            ],
            "a": 3,
            "explain": "Layer memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Hexagonal architecture mengisolasi",
            "options": [
              "CSS",
              "domain",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hexagonal isolasi domain."
          },
          {
            "type": "mc",
            "q": "Clean architecture bergantung pada",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "abstraksi"
            ],
            "a": 3,
            "explain": "Bergantung pada abstraksi."
          },
          {
            "type": "mc",
            "q": "Dependency injection memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pengujian"
            ],
            "a": 3,
            "explain": "DI memudahkan test."
          },
          {
            "type": "mc",
            "q": "Interfaces memisahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "kontrak dan implementasi"
            ],
            "a": 3,
            "explain": "Interface memisahkan."
          },
          {
            "type": "mc",
            "q": "Domain model sebaiknya",
            "options": [
              "CSS",
              "route",
              "bebas framework",
              "migrasi"
            ],
            "a": 2,
            "explain": "Domain bebas framework."
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
            "explain": "Modul memudahkan scaling."
          },
          {
            "type": "mc",
            "q": "Menghindari god class",
            "options": [
              "penting",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Pecah class besar."
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
          },
          {
            "type": "mc",
            "q": "Refactor bertahap lebih aman",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Bertahap."
          }
        ]
      },
      {
        "id": "java-22",
        "level": "Advance",
        "title": "Keamanan Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Input harus divalidasi",
            "options": [
              "CSS",
              "route",
              "di server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi server wajib."
          },
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "PreparedStatement"
            ],
            "a": 3,
            "explain": "Parameter terikat."
          },
          {
            "type": "mc",
            "q": "Menyimpan password memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "hash kuat"
            ],
            "a": 3,
            "explain": "Hashing kuat."
          },
          {
            "type": "mc",
            "q": "Serialization tak aman bisa",
            "options": [
              "CSS",
              "route",
              "RCE",
              "migrasi"
            ],
            "a": 2,
            "explain": "Deserialisasi tak aman berisiko RCE."
          },
          {
            "type": "mc",
            "q": "Secrets disimpan di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "secret manager"
            ],
            "a": 3,
            "explain": "Rahasia di secret manager."
          },
          {
            "type": "mc",
            "q": "Dependency scanning penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Scan dependency."
          },
          {
            "type": "mc",
            "q": "Mengatur SecurityManager (usang) tidak cukup sendirian",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Perlu pertahanan berlapis."
          },
          {
            "type": "mc",
            "q": "TLS untuk data transit",
            "options": [
              "wajib",
              "opsional",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "TLS wajib."
          },
          {
            "type": "mc",
            "q": "Log tidak boleh berisi rahasia",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Hindari rahasia di log."
          },
          {
            "type": "mc",
            "q": "Audit keamanan berkala",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Audit rutin."
          }
        ]
      },
      {
        "id": "java-23",
        "level": "Advance",
        "title": "Microservices Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Microservices memecah aplikasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "per layanan"
            ],
            "a": 3,
            "explain": "Layanan kecil independen."
          },
          {
            "type": "mc",
            "q": "Komunikasi antar layanan memakai",
            "options": [
              "CSS",
              "HTTP/message",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "HTTP atau pesan."
          },
          {
            "type": "mc",
            "q": "Service discovery membantu",
            "options": [
              "menemukan instance",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Discovery menemukan layanan."
          },
          {
            "type": "mc",
            "q": "Circuit breaker mencegah",
            "options": [
              "CSS",
              "cascading failure",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Circuit breaker."
          },
          {
            "type": "mc",
            "q": "Idempotensi penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "retry aman"
            ],
            "a": 3,
            "explain": "Retry aman."
          },
          {
            "type": "mc",
            "q": "Distributed tracing menghubungkan",
            "options": [
              "span",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Tracing menghubungkan."
          },
          {
            "type": "mc",
            "q": "Gateway menangani",
            "options": [
              "routing/edge",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Gateway mengatur edge."
          },
          {
            "type": "mc",
            "q": "Saga pattern menangani",
            "options": [
              "transaksi terdistribusi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Saga transaksi."
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
            "explain": "Observability."
          },
          {
            "type": "mc",
            "q": "Konfigurasi terpusat membantu",
            "options": [
              "CSS",
              "route",
              "operasional",
              "migrasi"
            ],
            "a": 2,
            "explain": "Config terpusat."
          }
        ]
      },
      {
        "id": "java-24",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengemas aplikasi Java memakai",
            "options": [
              "CSS",
              "route",
              "JAR/WAR atau container",
              "migrasi"
            ],
            "a": 2,
            "explain": "JAR/container."
          },
          {
            "type": "mc",
            "q": "Container memudahkan",
            "options": [
              "CSS",
              "reproduksibilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Container konsisten."
          },
          {
            "type": "mc",
            "q": "Health check penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Health check."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown menuntaskan",
            "options": [
              "CSS",
              "route",
              "request",
              "migrasi"
            ],
            "a": 2,
            "explain": "Shutdown menuntaskan."
          },
          {
            "type": "mc",
            "q": "Logging terpusat membantu",
            "options": [
              "diagnosis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Log terpusat."
          },
          {
            "type": "mc",
            "q": "Metrik membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemantauan"
            ],
            "a": 3,
            "explain": "Metrik pemantauan."
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
            "q": "Secret management penting",
            "options": [
              "tidak",
              "CSS",
              "ya",
              "route"
            ],
            "a": 2,
            "explain": "Kelola secret."
          },
          {
            "type": "mc",
            "q": "Migrasi DB bertahap penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Migrasi bertahap."
          },
          {
            "type": "mc",
            "q": "Backup penting",
            "options": [
              "ya",
              "tidak",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Backup data."
          }
        ]
      },
      {
        "id": "java-25",
        "level": "Advance",
        "title": "JVM Internals",
        "exercises": [
          {
            "type": "mc",
            "q": "Class loader memuat",
            "options": [
              "CSS",
              "class ke JVM",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Class loader memuat class."
          },
          {
            "type": "mc",
            "q": "Heap menyimpan",
            "options": [
              "CSS",
              "route",
              "objek",
              "migrasi"
            ],
            "a": 2,
            "explain": "Heap untuk objek."
          },
          {
            "type": "mc",
            "q": "Stack menyimpan",
            "options": [
              "CSS",
              "frame method",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Stack untuk frame."
          },
          {
            "type": "mc",
            "q": "Garbage collector mengelola",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "objek heap tak terpakai"
            ],
            "a": 3,
            "explain": "GC mereklamasi heap."
          },
          {
            "type": "mc",
            "q": "JIT compiler mengoptimasi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "bytecode saat runtime"
            ],
            "a": 3,
            "explain": "JIT mengoptimasi."
          },
          {
            "type": "mc",
            "q": "Metaspace menyimpan",
            "options": [
              "CSS",
              "metadata class",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Metaspace untuk metadata."
          },
          {
            "type": "mc",
            "q": "Memory leak bisa terjadi karena",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "referensi tertahan"
            ],
            "a": 3,
            "explain": "Referensi tertahan bikin leak."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "CSS",
              "JFR/VisualVM",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "JFR/VisualVM profil."
          },
          {
            "type": "mc",
            "q": "Opsi -Xmx mengatur",
            "options": [
              "CSS",
              "route",
              "heap maksimum",
              "migrasi"
            ],
            "a": 2,
            "explain": "-Xmx batas heap."
          },
          {
            "type": "mc",
            "q": "Escape analysis membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "alokasi/optimasi"
            ],
            "a": 3,
            "explain": "Escape analysis optimasi."
          }
        ]
      },
      {
        "id": "java-26",
        "level": "Advance",
        "title": "Spring Boot",
        "exercises": [
          {
            "type": "mc",
            "q": "Spring Boot memudahkan",
            "options": [
              "CSS",
              "membuat aplikasi Java",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Boot menyederhanakan setup."
          },
          {
            "type": "mc",
            "q": "Dependency injection di Spring memakai",
            "options": [
              "container Spring",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Spring container DI."
          },
          {
            "type": "mc",
            "q": "Anotasi controller memakai",
            "options": [
              "CSS",
              "@RestController",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Anotasi @RestController."
          },
          {
            "type": "mc",
            "q": "Mapping endpoint memakai",
            "options": [
              "CSS",
              "route",
              "@GetMapping/@PostMapping",
              "migrasi"
            ],
            "a": 2,
            "explain": "Anotasi mapping."
          },
          {
            "type": "mc",
            "q": "Spring Data JPA memudahkan",
            "options": [
              "CSS",
              "akses repositori",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Repositori JPA."
          },
          {
            "type": "mc",
            "q": "Konfigurasi memakai",
            "options": [
              "application.yml/properties",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Berkas konfigurasi."
          },
          {
            "type": "mc",
            "q": "Profil Spring memungkinkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konfigurasi per lingkungan"
            ],
            "a": 3,
            "explain": "Profil per env."
          },
          {
            "type": "mc",
            "q": "Validasi memakai",
            "options": [
              "Bean Validation",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Bean validation."
          },
          {
            "type": "mc",
            "q": "Keamanan memakai",
            "options": [
              "CSS",
              "route",
              "Spring Security",
              "migrasi"
            ],
            "a": 2,
            "explain": "Spring Security."
          },
          {
            "type": "mc",
            "q": "Actuator menyediakan",
            "options": [
              "CSS",
              "endpoint monitoring",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Actuator untuk monitoring."
          }
        ]
      },
      {
        "id": "java-27",
        "level": "Advance",
        "title": "Design Pattern Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Singleton memastikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "satu instance"
            ],
            "a": 3,
            "explain": "Singleton satu instance."
          },
          {
            "type": "mc",
            "q": "Factory memusatkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pembuatan objek"
            ],
            "a": 3,
            "explain": "Factory memusatkan."
          },
          {
            "type": "mc",
            "q": "Builder memudahkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pembuatan objek kompleks"
            ],
            "a": 3,
            "explain": "Builder mempermudah."
          },
          {
            "type": "mc",
            "q": "Observer memakai",
            "options": [
              "listener",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Observer listener."
          },
          {
            "type": "mc",
            "q": "Strategy menukar",
            "options": [
              "algoritma",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Strategy menukar algoritma."
          },
          {
            "type": "mc",
            "q": "Adapter menjembatani",
            "options": [
              "CSS",
              "antarmuka berbeda",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Adapter menjembatani."
          },
          {
            "type": "mc",
            "q": "Decorator menambah",
            "options": [
              "CSS",
              "route",
              "perilaku",
              "migrasi"
            ],
            "a": 2,
            "explain": "Decorator menambah perilaku."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "akses data",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Pattern berlebihan berisiko",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "over-engineering"
            ],
            "a": 3,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Immutability membantu",
            "options": [
              "CSS",
              "prediktabilitas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Immutable memudahkan."
          }
        ]
      },
      {
        "id": "java-28",
        "level": "Advance",
        "title": "Records & Java Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "record (Java 16+) membuat",
            "options": [
              "CSS",
              "data carrier ringkas",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Record mengurangi boilerplate."
          },
          {
            "type": "mc",
            "q": "record menghasilkan",
            "options": [
              "CSS",
              "equals/hashCode/toString",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Record otomatis."
          },
          {
            "type": "mc",
            "q": "sealed class membatasi",
            "options": [
              "CSS",
              "route",
              "hierarki",
              "migrasi"
            ],
            "a": 2,
            "explain": "Sealed membatasi subclass."
          },
          {
            "type": "mc",
            "q": "Pattern matching instanceof mempersingkat",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "cast bersyarat"
            ],
            "a": 3,
            "explain": "Pattern instanceof."
          },
          {
            "type": "mc",
            "q": "switch pattern (21) memungkinkan",
            "options": [
              "CSS",
              "pencocokan tipe",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Switch pattern."
          },
          {
            "type": "mc",
            "q": "Text block memakai",
            "options": [
              "'''",
              "```",
              "CSS",
              "\"\"\""
            ],
            "a": 3,
            "explain": "Text block memakai \"\"\"."
          },
          {
            "type": "mc",
            "q": "var membantu",
            "options": [
              "CSS",
              "inferensi tipe lokal",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "var lokal."
          },
          {
            "type": "mc",
            "q": "Virtual threads mengurangi",
            "options": [
              "CSS",
              "route",
              "biaya thread",
              "migrasi"
            ],
            "a": 2,
            "explain": "Virtual threads ringan."
          },
          {
            "type": "mc",
            "q": "Java modern tetap",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "backward compatible"
            ],
            "a": 3,
            "explain": "Kompatibilitas dijaga."
          },
          {
            "type": "mc",
            "q": "Memahami bytecode membantu",
            "options": [
              "CSS",
              "optimasi/debug",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Pahami bytecode."
          }
        ]
      },
      {
        "id": "java-29",
        "level": "Advance",
        "title": "Performance & Optimasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "profiler/JFR",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Profiler menemukan hot spot."
          },
          {
            "type": "mc",
            "q": "Alokasi berlebih memengaruhi",
            "options": [
              "CSS",
              "route",
              "GC",
              "migrasi"
            ],
            "a": 2,
            "explain": "Alokasi menambah GC."
          },
          {
            "type": "mc",
            "q": "StringBuilder di loop penting",
            "options": [
              "tidak",
              "CSS",
              "route",
              "ya"
            ],
            "a": 3,
            "explain": "Builder efisien."
          },
          {
            "type": "mc",
            "q": "Collection tepat memengaruhi",
            "options": [
              "performa",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pilih struktur tepat."
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
            "q": "Caching membantu",
            "options": [
              "CSS",
              "route",
              "operasi mahal",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cache operasi mahal."
          },
          {
            "type": "mc",
            "q": "Concurrency harus",
            "options": [
              "CSS",
              "dikelola benar",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Kelola concurrency."
          },
          {
            "type": "mc",
            "q": "Menghindari object churn",
            "options": [
              "tidak",
              "penting",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Minimalkan objek sementara."
          },
          {
            "type": "mc",
            "q": "Batch I/O membantu",
            "options": [
              "CSS",
              "route",
              "performa",
              "migrasi"
            ],
            "a": 2,
            "explain": "Batch mengurangi roundtrip."
          },
          {
            "type": "mc",
            "q": "Mengukur di beban nyata penting",
            "options": [
              "tidak",
              "ya",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Beban realistis."
          }
        ]
      },
      {
        "id": "java-30",
        "level": "Advance",
        "title": "Testing & Kualitas Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "CSS",
              "route",
              "test implementasi",
              "migrasi"
            ],
            "a": 2,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Mutation testing membantu",
            "options": [
              "CSS",
              "route",
              "mengukur kualitas test",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mutation test mengukur test."
          },
          {
            "type": "mc",
            "q": "Integration test memakai",
            "options": [
              "CSS",
              "Testcontainers/db uji",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Testcontainers untuk integrasi."
          },
          {
            "type": "mc",
            "q": "Contract test menjaga",
            "options": [
              "CSS",
              "route",
              "kompatibilitas API",
              "migrasi"
            ],
            "a": 2,
            "explain": "Contract test menjaga kesepakatan."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "SpotBugs/Checkstyle"
            ],
            "a": 3,
            "explain": "Alat analisis statis."
          },
          {
            "type": "mc",
            "q": "CI menjalankan",
            "options": [
              "build+test+lint",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test performa memakai",
            "options": [
              "CSS",
              "route",
              "JMH/load test",
              "migrasi"
            ],
            "a": 2,
            "explain": "JMH untuk benchmark."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "cakupan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Coverage mengukur."
          },
          {
            "type": "mc",
            "q": "Flaky test harus",
            "options": [
              "CSS",
              "route",
              "diperbaiki",
              "migrasi"
            ],
            "a": 2,
            "explain": "Perbaiki flaky test."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test penting",
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
        "id": "java-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Java",
        "exercises": [
          {
            "type": "mc",
            "q": "Program Java umumnya dijalankan di atas",
            "options": [
              "Bun runtime",
              "Java Virtual Machine (JVM)",
              "Browser CSS engine",
              "MATLAB Live Editor saja"
            ],
            "a": 1,
            "explain": "Bytecode Java dijalankan oleh Java Virtual Machine."
          },
          {
            "type": "mc",
            "q": "Generic seperti `List<String>` membantu",
            "options": [
              "Mengurutkan list otomatis",
              "Menentukan tipe elemen koleksi saat compile",
              "Menyimpan data secara permanen",
              "Menghapus kebutuhan menangani error"
            ],
            "a": 1,
            "explain": "Generic memberi informasi tipe dan membantu pemeriksaan saat compile."
          },
          {
            "type": "mc",
            "q": "Garbage collector Java terutama mengelola",
            "options": [
              "Semua file di disk",
              "Objek heap yang tidak lagi terjangkau",
              "Koneksi jaringan tanpa batas",
              "Urutan import source"
            ],
            "a": 1,
            "explain": "Garbage collector mereklamasi objek heap yang tidak lagi dapat dijangkau."
          },
          {
            "type": "mc",
            "q": "Try-with-resources Java membantu",
            "options": [
              "Menyimpan class ke database",
              "Mengubah exception menjadi komentar",
              "Membuat thread untuk setiap file",
              "Menutup resource yang mengimplementasikan AutoCloseable"
            ],
            "a": 3,
            "explain": "Try-with-resources menutup resource secara deterministik setelah blok selesai."
          },
          {
            "type": "fill",
            "q": "Lengkapi entry point Java:",
            "code": "public static void main(String[] ___)",
            "accept": [
              "args",
              "argv"
            ],
            "explain": "Parameter main Java bernama args."
          }
        ]
      }
    ]
  }
];

export { CONTENT_JAVA };
