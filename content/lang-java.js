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
              "RCE",
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
              "throws"
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
              "inferensi tipe lokal"
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
              "kondisi ? a : b"
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
              "kondisi benar",
              "semua konstanta",
              "arsip bytecode/library",
              "cek tipe/cast eksplisit"
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
              "konfigurasi per lingkungan"
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
              "data carrier ringkas",
              "public static void main(String[] args)",
              "arrow -> dan yield",
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
              "modifikasi string efisien",
              "Producer Extends Consumer Super",
              "visibility antar thread"
            ],
            "a": 0,
            "explain": "var untuk tipe lokal."
          },
          {
            "type": "mc",
            "q": "String immutable",
            "options": [
              "tidak",
              "+",
              "JUnit",
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
              "GC"
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
              "prediktabilitas"
            ],
            "a": 2,
            "explain": "Java memakai if/else."
          },
          {
            "type": "mc",
            "q": "Percabangan multi memakai",
            "options": [
              "when",
              "HashMap",
              "switch",
              "referensi"
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
              "new int[5] / {}",
              "objek diperlakukan sebagai tipe induk"
            ],
            "a": 0,
            "explain": "For klasik memakai tiga bagian."
          },
          {
            "type": "mc",
            "q": "Enhanced for memakai",
            "options": [
              "for (x of koleksi)",
              "nilai tanpa hasil",
              "objek heap tak terpakai",
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
              "routing/edge",
              "pemantauan",
              "heap maksimum"
            ],
            "a": 0,
            "explain": "While bergantung kondisi."
          },
          {
            "type": "mc",
            "q": "do-while menjalankan blok",
            "options": [
              "switch",
              "int[][]",
              "minimal sekali",
              "getX()/setX()"
            ],
            "a": 2,
            "explain": "Do-while dieksekusi minimal sekali."
          },
          {
            "type": "mc",
            "q": "break/continue berlaku",
            "options": [
              "get(index)",
              "di loop",
              "RuntimeException",
              "<T extends Batas>"
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
              "per baris efisien",
              "pembuatan objek kompleks"
            ],
            "a": 0,
            "explain": "Ternary memilih nilai."
          },
          {
            "type": "mc",
            "q": "Label pada loop memungkinkan",
            "options": [
              "break/continue bertarget",
              "class Box<T>",
              "<T> T method()",
              "sejumlah event"
            ],
            "a": 0,
            "explain": "Label memberi target."
          },
          {
            "type": "mc",
            "q": "switch modern (Java 14+) memakai",
            "options": [
              "=> ",
              "? extends T",
              "aksi per elemen",
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
              "ditangani atau dideklarasikan",
              "data per thread",
              "saling menunggu lock"
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
              "arr[0]"
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
              "diperbaiki",
              ".length"
            ],
            "a": 1,
            "explain": "Array diakses dengan []."
          },
          {
            "type": "mc",
            "q": "Array multidimensi memakai",
            "options": [
              "int[,]",
              "pengujian",
              "int[][]",
              "RCE"
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
              "info generic hilang saat runtime",
              "T ke R"
            ],
            "a": 0,
            "explain": "Java memakai enum."
          },
          {
            "type": "mc",
            "q": "Enum dapat memiliki",
            "options": [
              "public static void main(String[] args)",
              "arrow -> dan yield",
              "method sama nama beda parameter",
              "field dan method"
            ],
            "a": 3,
            "explain": "Enum Java punya member."
          },
          {
            "type": "mc",
            "q": "values() pada enum memberi",
            "options": [
              "JFR/VisualVM",
              "application.yml/properties",
              "semua konstanta",
              "algoritma"
            ],
            "a": 2,
            "explain": "values mengembalikan konstanta."
          },
          {
            "type": "mc",
            "q": "Array index out of bounds memicu",
            "options": [
              "extends Thread/mengimplementasikan Runnable",
              "ArrayIndexOutOfBoundsException",
              "I/O efisien",
              "per layanan"
            ],
            "a": 1,
            "explain": "Index salah melempar exception."
          },
          {
            "type": "mc",
            "q": "Metode utilitas `Arrays.sort()` di Java digunakan untuk mengurutkan elemen pada",
            "options": [
              "array",
              "di loop",
              "super()",
              "ArrayList"
            ],
            "a": 0,
            "explain": "Arrays.sort mengurutkan."
          },
          {
            "type": "mc",
            "q": "Arrays.asList mengubah",
            "options": [
              "for (init; cond; step)",
              "pemrosesan deklaratif koleksi",
              "info generic hilang saat runtime",
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
              "hierarki"
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
              "info generic hilang saat runtime"
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
              "nilai"
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
              "request"
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
              ".length",
              "new Nama()"
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
              "semua selesai"
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
              "seluruh teks"
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
              "\"\"\""
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
              "get(key)",
              ".split()"
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
              "menambah kompleksitas",
              "hasil async"
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
              "String",
              "if/else",
              "tidak"
            ],
            "a": 3,
            "explain": "Java hanya pewarisan tunggal."
          },
          {
            "type": "mc",
            "q": "Interface memungkinkan",
            "options": [
              "setAutoCommit(false)/commit",
              "lokasi berkas",
              "banyak implementasi",
              "bebas framework"
            ],
            "a": 2,
            "explain": "Class dapat implement banyak interface."
          },
          {
            "type": "mc",
            "q": "Method overriding berarti",
            "options": [
              "bytecode saat runtime",
              "Menentukan tipe elemen koleksi saat compile",
              "subclass menimpa method induk",
              "inferensi tipe lokal"
            ],
            "a": 2,
            "explain": "Override mengubah perilaku."
          },
          {
            "type": "mc",
            "q": "Method overloading berarti",
            "options": [
              "menaikkan ke tipe induk",
              "method sama nama beda parameter",
              "? extends T",
              "aksi per elemen"
            ],
            "a": 1,
            "explain": "Overload beda signature."
          },
          {
            "type": "mc",
            "q": "Polimorfisme memungkinkan",
            "options": [
              "konfigurasi per lingkungan",
              "Menutup resource yang mengimplementasikan AutoCloseable",
              "for (T x : koleksi)",
              "objek diperlakukan sebagai tipe induk"
            ],
            "a": 3,
            "explain": "Polimorfisme via tipe induk."
          },
          {
            "type": "mc",
            "q": "Upcasting berarti",
            "options": [
              "pemrosesan deklaratif koleksi",
              "info generic hilang saat runtime",
              "menaikkan ke tipe induk",
              "T ke R"
            ],
            "a": 2,
            "explain": "Upcast aman."
          },
          {
            "type": "mc",
            "q": "Downcasting memerlukan",
            "options": [
              "cek tipe/cast eksplisit",
              "get(index)",
              ".replace()/replaceAll()",
              "RuntimeException"
            ],
            "a": 0,
            "explain": "Downcast bisa gagal."
          },
          {
            "type": "mc",
            "q": "instanceof memeriksa",
            "options": [
              "Spring Security",
              "tipe objek",
              "perilaku",
              "pencocokan tipe"
            ],
            "a": 1,
            "explain": "instanceof cek tipe."
          },
          {
            "type": "mc",
            "q": "final pada class berarti",
            "options": [
              "satu method abstrak",
              "kontrak dan implementasi",
              "tidak bisa diwarisi",
              "data carrier ringkas"
            ],
            "a": 2,
            "explain": "final mencegah pewarisan."
          },
          {
            "type": "mc",
            "q": "Composition sering disarankan",
            "options": [
              "tidak",
              "GC",
              "ya",
              "javac"
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
              "container Spring",
              "endpoint monitoring"
            ],
            "a": 0,
            "explain": "ArrayList implementasi List."
          },
          {
            "type": "mc",
            "q": "Map umum adalah",
            "options": [
              "MapArray",
              "implements",
              "HashMap",
              "tipe objek"
            ],
            "a": 2,
            "explain": "HashMap implementasi Map."
          },
          {
            "type": "mc",
            "q": "Set umum adalah",
            "options": [
              "SetArray",
              ".equals()",
              "throws",
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
              "@BeforeEach"
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
              ".java"
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
              "try/catch"
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
              "metadata"
            ],
            "a": 0,
            "explain": "Map memakai get()."
          },
          {
            "type": "mc",
            "q": "Generics pada koleksi memakai",
            "options": [
              "List of String",
              "penting",
              "List<String>",
              "per layanan"
            ],
            "a": 2,
            "explain": "Java memakai <T>."
          },
          {
            "type": "mc",
            "q": "Iterasi koleksi memakai",
            "options": [
              "new Nama()",
              "abstract class",
              "HashSet",
              "for-each/Iterator"
            ],
            "a": 3,
            "explain": "For-each/Iterator."
          },
          {
            "type": "mc",
            "q": "Stream API memungkinkan",
            "options": [
              "konfigurasi per lingkungan",
              "Menutup resource yang mengimplementasikan AutoCloseable",
              "pemrosesan deklaratif koleksi",
              "for (T x : koleksi)"
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
              "subclass menimpa method induk",
              "operasi menghasilkan string baru",
              "modifikasi string efisien",
              "Producer Extends Consumer Super"
            ],
            "a": 1,
            "explain": "String tidak berubah."
          },
          {
            "type": "mc",
            "q": "StringBuilder dipakai untuk",
            "options": [
              "objek heap tak terpakai",
              "Java Virtual Machine (JVM)",
              "modifikasi string efisien",
              "konversi primitif ke wrapper otomatis"
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
              "ReentrantLock"
            ],
            "a": 2,
            "explain": "String memakai length()."
          },
          {
            "type": "mc",
            "q": "Mengubah huruf besar memakai",
            "options": [
              ".upper()",
              "switch",
              "int[][]",
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
              "backward compatible",
              "String"
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
              "lokasi berkas",
              "bebas framework"
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
              "lock intrinsic",
              "banyak kasus"
            ],
            "a": 1,
            "explain": "split memecah."
          },
          {
            "type": "mc",
            "q": "Membandingkan isi string memakai",
            "options": [
              "== selalu",
              "for-each/Iterator",
              ".equals()",
              "referensi"
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
              "ke List",
              "interface fungsional"
            ],
            "a": 1,
            "explain": "== membandingkan referensi."
          },
          {
            "type": "mc",
            "q": "String formatting memakai",
            "options": [
              "HashSet",
              ".length()",
              "String.format",
              "resource otomatis"
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
              "skalabilitas"
            ],
            "a": 2,
            "explain": "Java memakai try/catch."
          },
          {
            "type": "mc",
            "q": "finally dijalankan",
            "options": [
              "JVM",
              "selalu",
              "int",
              "switch"
            ],
            "a": 1,
            "explain": "finally selalu dijalankan."
          },
          {
            "type": "mc",
            "q": "Checked exception harus",
            "options": [
              "ditangani atau dideklarasikan",
              "visibility antar thread",
              "bytecode saat runtime",
              "Menentukan tipe elemen koleksi saat compile"
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
              "map thread-safe",
              "JaCoCo"
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
              "hasil async",
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
              "alokasi/optimasi",
              "throws",
              "Spring Security"
            ],
            "a": 2,
            "explain": "throws pada signature."
          },
          {
            "type": "mc",
            "q": "Custom exception mewarisi",
            "options": [
              "semua konstanta",
              "cek tipe/cast eksplisit",
              "get(index)",
              "Exception/RuntimeException"
            ],
            "a": 3,
            "explain": "Mewarisi Exception."
          },
          {
            "type": "mc",
            "q": "try-with-resources menutup",
            "options": [
              "Serializable",
              "stream()",
              "pemrosesan paralel",
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
              "span",
              ".java"
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
              "abstraksi",
              "hash kuat"
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
              "field dan method",
              "tipe aman dan pemakaian ulang",
              "tidak bisa diwarisi",
              "? super T"
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
              "get(index)",
              ".replace()/replaceAll()"
            ],
            "a": 0,
            "explain": "Java memakai <T>."
          },
          {
            "type": "mc",
            "q": "Batasan generic memakai",
            "options": [
              "type safety",
              "<T extends Batas>",
              "parallel processing",
              "performa/type safety"
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
              "+",
              "?"
            ],
            "a": 3,
            "explain": "Java memakai ? untuk wildcard."
          },
          {
            "type": "mc",
            "q": "Wildcard extends memakai",
            "options": [
              "method sama nama beda parameter",
              "ditangani atau dideklarasikan",
              "data per thread",
              "? extends T"
            ],
            "a": 3,
            "explain": "Upper bound wildcard."
          },
          {
            "type": "mc",
            "q": "Wildcard super memakai",
            "options": [
              "class ke JVM",
              "mengukur kualitas test",
              "? super T",
              "tipe nama = nilai;"
            ],
            "a": 2,
            "explain": "Lower bound wildcard."
          },
          {
            "type": "mc",
            "q": "Type erasure berarti",
            "options": [
              "info generic hilang saat runtime",
              "menaikkan ke tipe induk",
              "? extends T",
              "aksi per elemen"
            ],
            "a": 0,
            "explain": "Erasure menghapus generic runtime."
          },
          {
            "type": "mc",
            "q": "List<Object> tidak sama dengan",
            "options": [
              "List<String>",
              "ke List",
              "interface fungsional",
              "map thread-safe"
            ],
            "a": 0,
            "explain": "Generics invarian."
          },
          {
            "type": "mc",
            "q": "Generics menghindari",
            "options": [
              "for-each/Iterator",
              "referensi",
              "cast manual",
              "Exception/RuntimeException"
            ],
            "a": 2,
            "explain": "Generics mengurangi cast."
          },
          {
            "type": "mc",
            "q": "Generics berlebihan dapat",
            "options": [
              "lock intrinsic",
              "banyak kasus",
              "HikariCP",
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
              "? extends T",
              "aksi per elemen",
              "per baris efisien"
            ],
            "a": 0,
            "explain": "Erasure menghapus tipe."
          },
          {
            "type": "mc",
            "q": "Membuat array generic berisiko",
            "options": [
              "menemukan instance",
              "JAR/WAR atau container",
              "frame method",
              "karena erasure"
            ],
            "a": 3,
            "explain": "Array generic tidak aman."
          },
          {
            "type": "mc",
            "q": "Wildcard membantu",
            "options": [
              "memisahkan API",
              "hasil stream",
              "lock intrinsic",
              "fleksibilitas tipe"
            ],
            "a": 3,
            "explain": "Wildcard menambah fleksibilitas."
          },
          {
            "type": "mc",
            "q": "PECS singkatan dari",
            "options": [
              "public static void main(String[] args)",
              "Producer Extends Consumer Super",
              "arrow -> dan yield",
              "method sama nama beda parameter"
            ],
            "a": 1,
            "explain": "Prinsip PECS generics."
          },
          {
            "type": "mc",
            "q": "Generic method memakai",
            "options": [
              "banyak implementasi",
              "<T> T method()",
              "size()",
              ".trim()"
            ],
            "a": 1,
            "explain": "Generic method deklarasi."
          },
          {
            "type": "mc",
            "q": "Bounded type parameter memakai",
            "options": [
              "antarmuka berbeda",
              "cast bersyarat",
              "build+test+lint",
              "extends"
            ],
            "a": 3,
            "explain": "extends membatasi."
          },
          {
            "type": "mc",
            "q": "Raw type sebaiknya",
            "options": [
              "akses database",
              "Flyway/Liquibase",
              "dihindari",
              "tanggung jawab"
            ],
            "a": 2,
            "explain": "Hindari raw type."
          },
          {
            "type": "mc",
            "q": "Generics membantu",
            "options": [
              "<T extends Batas>",
              "dihindari",
              "type safety",
              "producer-consumer"
            ],
            "a": 2,
            "explain": "Generics menjaga tipe."
          },
          {
            "type": "mc",
            "q": "Wildcard berlebihan dapat",
            "options": [
              "routing/edge",
              "mengurangi keterbacaan",
              "pemantauan",
              "heap maksimum"
            ],
            "a": 1,
            "explain": "Gunakan jelas."
          },
          {
            "type": "mc",
            "q": "Generics dan inheritance",
            "options": [
              "Serializable",
              "stream()",
              "invarian",
              "pemrosesan paralel"
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
              "switch",
              "ReentrantLock",
              "int[][]",
              "getX()/setX()"
            ],
            "a": 1,
            "explain": "ReentrantLock lock eksplisit."
          },
          {
            "type": "mc",
            "q": "Semaphore membatasi",
            "options": [
              "resource otomatis",
              "akses bersamaan",
              "karena erasure",
              "ReentrantLock"
            ],
            "a": 1,
            "explain": "Semaphore batasi akses."
          },
          {
            "type": "mc",
            "q": "CountDownLatch menunggu",
            "options": [
              "JaCoCo",
              "setAutoCommit(false)/commit",
              "sejumlah event",
              "lokasi berkas"
            ],
            "a": 2,
            "explain": "Latch menunggu event."
          },
          {
            "type": "mc",
            "q": "BlockingQueue memudahkan",
            "options": [
              "pembuatan objek",
              "prediktabilitas",
              "backward compatible",
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
              "Spring Security",
              "perilaku",
              "pencocokan tipe"
            ],
            "a": 0,
            "explain": "ForkJoin paralel."
          },
          {
            "type": "mc",
            "q": "CompletableFuture.allOf menunggu",
            "options": [
              "extends",
              "cek tipe/cast eksplisit",
              "semua selesai",
              "get(index)"
            ],
            "a": 2,
            "explain": "allOf menunggu semua."
          },
          {
            "type": "mc",
            "q": "ThreadLocal menyimpan",
            "options": [
              "kontrak dan implementasi",
              "data per thread",
              "data carrier ringkas",
              "public static void main(String[] args)"
            ],
            "a": 1,
            "explain": "ThreadLocal per thread."
          },
          {
            "type": "mc",
            "q": "Deadlock dihindari dengan",
            "options": [
              "array ke list",
              "urutan lock konsisten",
              "pemrosesan deklaratif koleksi",
              "info generic hilang saat runtime"
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
              "add()",
              "class"
            ],
            "a": 1,
            "explain": "Uji concurrency."
          },
          {
            "type": "mc",
            "q": "Virtual threads membantu",
            "options": [
              "akses database",
              "skalabilitas IO",
              "Flyway/Liquibase",
              "tanggung jawab"
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
              "int[][]",
              "getX()/setX()",
              "banyak implementasi",
              "introspeksi runtime"
            ],
            "a": 3,
            "explain": "Reflection introspeksi."
          },
          {
            "type": "mc",
            "q": "Metode `Class.forName()` pada Java Reflection memuat definisi runtime sebuah",
            "options": [
              "heap maksimum",
              "class",
              "cast bersyarat",
              "GC"
            ],
            "a": 1,
            "explain": "Memuat class by name."
          },
          {
            "type": "mc",
            "q": "Anotasi memberi",
            "options": [
              "bebas framework",
              "secret manager",
              "metadata",
              "span"
            ],
            "a": 2,
            "explain": "Anotasi metadata."
          },
          {
            "type": "mc",
            "q": "Retention menentukan",
            "options": [
              "introspeksi runtime",
              "akses reflection",
              "ketersediaan anotasi",
              "operasi terminal"
            ],
            "a": 2,
            "explain": "Retention mengatur masa hidup."
          },
          {
            "type": "mc",
            "q": "Reflection mengorbankan",
            "options": [
              "referensi",
              "performa/type safety",
              "Exception/RuntimeException",
              "kompleksitas"
            ],
            "a": 1,
            "explain": "Reflection lebih lambat."
          },
          {
            "type": "mc",
            "q": "Framework memakai reflection untuk",
            "options": [
              "Testcontainers/db uji",
              "Sun Microsystems/Oracle",
              "String",
              "DI/routing"
            ],
            "a": 3,
            "explain": "Framework memakai reflection."
          },
          {
            "type": "mc",
            "q": "Reflection berlebihan sebaiknya",
            "options": [
              "@RestController",
              "satu instance",
              "over-engineering",
              "dihindari"
            ],
            "a": 3,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Anotasi kustom didefinisikan dengan",
            "options": [
              "lock intrinsic",
              "banyak kasus",
              "HikariCP",
              "@interface"
            ],
            "a": 3,
            "explain": "Anotasi via @interface."
          },
          {
            "type": "mc",
            "q": "Modul (JPMS) membatasi",
            "options": [
              "ketersediaan anotasi",
              "akses reflection",
              "keamanan",
              "elemen"
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
              "array",
              "span"
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
              "JaCoCo",
              "setAutoCommit(false)/commit",
              "lokasi berkas"
            ],
            "a": 0,
            "explain": "Serializable interface."
          },
          {
            "type": "mc",
            "q": "JSON library populer adalah",
            "options": [
              "pembuatan objek",
              "prediktabilitas",
              "Jackson/Gson",
              "backward compatible"
            ],
            "a": 2,
            "explain": "Jackson/Gson JSON."
          },
          {
            "type": "mc",
            "q": "Deserialization data tak tepercaya berisiko",
            "options": [
              "keamanan",
              "JVM",
              "int",
              "switch"
            ],
            "a": 0,
            "explain": "Deserialisasi tak aman."
          },
          {
            "type": "mc",
            "q": "Membuat DTO membantu",
            "options": [
              "resource otomatis",
              "karena erasure",
              "memisahkan API",
              "ReentrantLock"
            ],
            "a": 2,
            "explain": "DTO memisahkan API."
          },
          {
            "type": "mc",
            "q": "Mengontrol field JSON memakai",
            "options": [
              "menemukan instance",
              "frame method",
              "anotasi",
              "@RestController"
            ],
            "a": 2,
            "explain": "Anotasi mengatur field."
          },
          {
            "type": "mc",
            "q": "Menangani tanggal serialisasi perlu",
            "options": [
              ".class",
              "final",
              "di loop",
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
              "nilai",
              "wajib"
            ],
            "a": 1,
            "explain": "Tangani error parsing."
          },
          {
            "type": "mc",
            "q": "Validasi input penting",
            "options": [
              "tidak",
              "::",
              "ya",
              "teks"
            ],
            "a": 2,
            "explain": "Validasi input."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "tidak",
              "GC",
              "javac",
              "ya"
            ],
            "a": 3,
            "explain": "Kompatibilitas."
          },
          {
            "type": "mc",
            "q": "Serialization sebaiknya",
            "options": [
              "size()",
              "teruji",
              ".trim()",
              "selalu"
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
              "DI/routing",
              "anotasi",
              "ke List"
            ],
            "a": 0,
            "explain": "Koleksi menyediakan stream()."
          },
          {
            "type": "mc",
            "q": "map pada Stream",
            "options": [
              "new Nama()",
              "abstract class",
              ".length()",
              "mentransformasi elemen"
            ],
            "a": 3,
            "explain": "map mentransformasi."
          },
          {
            "type": "mc",
            "q": "filter menyaring",
            "options": [
              "akses repositori",
              "listener",
              "elemen",
              "optimasi/debug"
            ],
            "a": 2,
            "explain": "filter menyaring."
          },
          {
            "type": "mc",
            "q": "collect mengumpulkan",
            "options": [
              "operasi atomik",
              "assertThrows",
              "Hibernate/JPA",
              "hasil stream"
            ],
            "a": 3,
            "explain": "collect menghasilkan koleksi."
          },
          {
            "type": "mc",
            "q": "Collectors.toList mengumpulkan",
            "options": [
              "try/catch",
              "ke List",
              ".getMessage()",
              "fleksibilitas tipe"
            ],
            "a": 1,
            "explain": "toList mengumpulkan ke List."
          },
          {
            "type": "mc",
            "q": "reduce mengakumulasi",
            "options": [
              ".java",
              "double",
              "kondisi benar",
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
              "ditangani atau dideklarasikan",
              "data per thread",
              "saling menunggu lock"
            ],
            "a": 0,
            "explain": "forEach iterasi."
          },
          {
            "type": "mc",
            "q": "Stream bersifat lazy hingga",
            "options": [
              "operasi terminal",
              "metadata",
              "Jackson/Gson",
              "mentransformasi elemen"
            ],
            "a": 0,
            "explain": "Lazy sampai terminal."
          },
          {
            "type": "mc",
            "q": "parallelStream memungkinkan",
            "options": [
              "routing/edge",
              "pemantauan",
              "heap maksimum",
              "pemrosesan paralel"
            ],
            "a": 3,
            "explain": "Parallel stream."
          },
          {
            "type": "mc",
            "q": "Pipeline stream berlebihan dapat",
            "options": [
              "Serializable",
              "stream()",
              "menambah kompleksitas",
              "pemrosesan paralel"
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
              "domain",
              "(a) -> expr"
            ],
            "a": 3,
            "explain": "Java memakai ->."
          },
          {
            "type": "mc",
            "q": "Functional interface memiliki",
            "options": [
              "urutan lock konsisten",
              "satu method abstrak",
              "mengurangi biaya thread",
              "konfigurasi per lingkungan"
            ],
            "a": 1,
            "explain": "Satu method abstrak."
          },
          {
            "type": "mc",
            "q": "Function<T,R> mengubah",
            "options": [
              "konversi primitif ke wrapper otomatis",
              "enum Nama { A, B }",
              "menaikkan ke tipe induk",
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
              "thread pool",
              "akses database",
              "Flyway/Liquibase"
            ],
            "a": 0,
            "explain": "Predicate boolean."
          },
          {
            "type": "mc",
            "q": "Consumer<T> memakai",
            "options": [
              "public static void main(String[] args)",
              "arrow -> dan yield",
              "method sama nama beda parameter",
              "nilai tanpa hasil"
            ],
            "a": 3,
            "explain": "Consumer tanpa hasil."
          },
          {
            "type": "mc",
            "q": "Supplier<T> menyediakan",
            "options": [
              "int[][]",
              "getX()/setX()",
              "nilai",
              "size()"
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
              "JUnit",
              "::"
            ],
            "a": 3,
            "explain": "Java memakai ::."
          },
          {
            "type": "mc",
            "q": "@FunctionalInterface menandai",
            "options": [
              "parallel processing",
              "performa/type safety",
              "interface fungsional",
              "memisahkan API"
            ],
            "a": 2,
            "explain": "Anotasi menandai."
          },
          {
            "type": "mc",
            "q": "Lambda menangkap variabel effectively final",
            "options": [
              "tidak",
              "+",
              "ya",
              "JUnit"
            ],
            "a": 2,
            "explain": "Variabel harus effectively final."
          },
          {
            "type": "mc",
            "q": "Lambda memudahkan",
            "options": [
              "operasi mahal",
              "kode ringkas",
              "JMH/load test",
              ".class"
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
              "cascading failure",
              "extends Thread/mengimplementasikan Runnable",
              "reproduksibilitas",
              "@GetMapping/@PostMapping"
            ],
            "a": 1,
            "explain": "Thread atau Runnable."
          },
          {
            "type": "mc",
            "q": "ExecutorService mengelola",
            "options": [
              "skalabilitas",
              "wajib",
              "thread pool",
              "routing/edge"
            ],
            "a": 2,
            "explain": "Executor mengelola pool."
          },
          {
            "type": "mc",
            "q": "Future mewakili",
            "options": [
              ".split()",
              "throw",
              "type safety",
              "hasil async"
            ],
            "a": 3,
            "explain": "Future hasil async."
          },
          {
            "type": "mc",
            "q": "CompletableFuture memungkinkan",
            "options": [
              "dikelola benar",
              "cakupan",
              "komposisi async",
              "Maven/Gradle"
            ],
            "a": 2,
            "explain": "CompletableFuture komposisi."
          },
          {
            "type": "mc",
            "q": "synchronized memakai",
            "options": [
              "alokasi/optimasi",
              "lock intrinsic",
              "Spring Security",
              "perilaku"
            ],
            "a": 1,
            "explain": "synchronized mengunci."
          },
          {
            "type": "mc",
            "q": "volatile menjamin",
            "options": [
              "T ke R",
              "class ke JVM",
              "visibility antar thread",
              "mengukur kualitas test"
            ],
            "a": 2,
            "explain": "volatile visibility."
          },
          {
            "type": "mc",
            "q": "ConcurrentHashMap untuk",
            "options": [
              "map thread-safe",
              "Serializable",
              "stream()",
              "pemrosesan paralel"
            ],
            "a": 0,
            "explain": "Concurrent HashMap aman."
          },
          {
            "type": "mc",
            "q": "AtomicInteger untuk",
            "options": [
              "semua konstanta",
              "operasi atomik",
              "extends",
              "cek tipe/cast eksplisit"
            ],
            "a": 1,
            "explain": "Atomic untuk atomik."
          },
          {
            "type": "mc",
            "q": "Deadlock terjadi bila",
            "options": [
              "enum Nama { A, B }",
              "menaikkan ke tipe induk",
              "? extends T",
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
              "konfigurasi per lingkungan",
              "Menutup resource yang mengimplementasikan AutoCloseable",
              "for (T x : koleksi)"
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
              "(a) -> expr",
              "komposisi async",
              "@BeforeEach",
              "assertEquals/assertThrows"
            ],
            "a": 3,
            "explain": "JUnit menyediakan assert."
          },
          {
            "type": "mc",
            "q": "Mocking memakai",
            "options": [
              "HikariCP",
              "teks",
              "Mockito",
              "pengujian"
            ],
            "a": 2,
            "explain": "Mockito untuk mock."
          },
          {
            "type": "mc",
            "q": "Test setup memakai",
            "options": [
              "over-engineering",
              "biaya thread",
              "@BeforeEach",
              "test implementasi"
            ],
            "a": 2,
            "explain": "Anotasi setup."
          },
          {
            "type": "mc",
            "q": "Parameterized test memudahkan",
            "options": [
              "String",
              "if/else",
              "arr[0]",
              "banyak kasus"
            ],
            "a": 3,
            "explain": "Test berparameter."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "kompleksitas",
              "JaCoCo",
              "invarian",
              "skalabilitas IO"
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
              "JUnit",
              "final"
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
              "span",
              ".java"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test exception memakai",
            "options": [
              "antarmuka berbeda",
              "cast bersyarat",
              "build+test+lint",
              "assertThrows"
            ],
            "a": 3,
            "explain": "assertThrows menguji exception."
          },
          {
            "type": "mc",
            "q": "Integration test menguji",
            "options": [
              "banyak implementasi",
              "size()",
              "alur nyata",
              ".trim()"
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
              "kondisi benar",
              "semua konstanta",
              "extends"
            ],
            "a": 0,
            "explain": "JDBC API database."
          },
          {
            "type": "mc",
            "q": "PreparedStatement mencegah",
            "options": [
              "downtime",
              "alokasi/optimasi",
              "SQL injection",
              "Spring Security"
            ],
            "a": 2,
            "explain": "Parameter terikat aman."
          },
          {
            "type": "mc",
            "q": "ResultSet berisi",
            "options": [
              "menambah kompleksitas",
              "hasil async",
              "Mockito",
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
              "throw",
              "?"
            ],
            "a": 1,
            "explain": "Tutup koneksi/statement."
          },
          {
            "type": "mc",
            "q": "Connection pool memakai",
            "options": [
              ".length()",
              "String.format",
              "resource otomatis",
              "HikariCP"
            ],
            "a": 3,
            "explain": "HikariCP umum."
          },
          {
            "type": "mc",
            "q": "Transaksi memakai",
            "options": [
              "optimasi/debug",
              "setAutoCommit(false)/commit",
              "kompatibilitas API",
              "getX()/setX()"
            ],
            "a": 1,
            "explain": "Transaksi manual."
          },
          {
            "type": "mc",
            "q": "ORM populer adalah",
            "options": [
              "otomatis",
              "Hibernate/JPA",
              "skalabilitas",
              "wajib"
            ],
            "a": 1,
            "explain": "Hibernate ORM."
          },
          {
            "type": "mc",
            "q": "Batch insert membantu",
            "options": [
              "akses bersamaan",
              "class",
              "Serializable",
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
              "::",
              "teks"
            ],
            "a": 0,
            "explain": "Tangani error DB."
          },
          {
            "type": "mc",
            "q": "Versioning skema memakai",
            "options": [
              "Flyway/Liquibase",
              "break/continue bertarget",
              "class Nama {}",
              "@Override"
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
              "(a) -> expr",
              "komposisi async",
              "java.nio.file.Files",
              "@BeforeEach"
            ],
            "a": 2,
            "explain": "Files API modern."
          },
          {
            "type": "mc",
            "q": "Files.readString membaca",
            "options": [
              "ArrayList",
              "seluruh teks",
              "List<String>",
              ".equals()"
            ],
            "a": 1,
            "explain": "readString membaca teks."
          },
          {
            "type": "mc",
            "q": "Files.writeString menulis",
            "options": [
              "teks",
              "diperbaiki",
              ".length",
              "new Nama()"
            ],
            "a": 0,
            "explain": "writeString menulis."
          },
          {
            "type": "mc",
            "q": "BufferedReader membaca",
            "options": [
              "sama dengan class",
              "operasi menghasilkan string baru",
              "info tipe hilang runtime",
              "per baris efisien"
            ],
            "a": 3,
            "explain": "BufferedReader efisien."
          },
          {
            "type": "mc",
            "q": "Path merepresentasikan",
            "options": [
              "kompleksitas",
              "invarian",
              "skalabilitas IO",
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
              "add()",
              "class"
            ],
            "a": 1,
            "explain": "Tutup stream."
          },
          {
            "type": "mc",
            "q": "try-with-resources menutup",
            "options": [
              "span",
              "diagnosis",
              "JFR/VisualVM",
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
              "JUnit",
              "final",
              "ya"
            ],
            "a": 3,
            "explain": "Tentukan encoding."
          },
          {
            "type": "mc",
            "q": "NIO buffer memungkinkan",
            "options": [
              "request",
              "referensi tertahan",
              "I/O efisien",
              "akses repositori"
            ],
            "a": 2,
            "explain": "NIO buffer."
          },
          {
            "type": "mc",
            "q": "Menangani IOException penting",
            "options": [
              "tidak",
              "nilai",
              "wajib",
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
              "tidak",
              "add()",
              ".toUpperCase()",
              "tanggung jawab"
            ],
            "a": 3,
            "explain": "Layer memisahkan tanggung jawab."
          },
          {
            "type": "mc",
            "q": "Hexagonal architecture mengisolasi",
            "options": [
              "format khusus",
              "domain",
              "nilai",
              "kode ringkas"
            ],
            "a": 1,
            "explain": "Hexagonal isolasi domain."
          },
          {
            "type": "mc",
            "q": "Clean architecture bergantung pada",
            "options": [
              "alur nyata",
              "performa",
              "I/O efisien",
              "abstraksi"
            ],
            "a": 3,
            "explain": "Bergantung pada abstraksi."
          },
          {
            "type": "mc",
            "q": "Dependency injection memudahkan",
            "options": [
              "algoritma",
              "hierarki",
              "profiler/JFR",
              "pengujian"
            ],
            "a": 3,
            "explain": "DI memudahkan test."
          },
          {
            "type": "mc",
            "q": "Interfaces memisahkan",
            "options": [
              "pemrosesan deklaratif koleksi",
              "info generic hilang saat runtime",
              "T ke R",
              "kontrak dan implementasi"
            ],
            "a": 3,
            "explain": "Interface memisahkan."
          },
          {
            "type": "mc",
            "q": "Domain model sebaiknya",
            "options": [
              "hasil query",
              "seluruh teks",
              "bebas framework",
              "abstraksi"
            ],
            "a": 2,
            "explain": "Domain bebas framework."
          },
          {
            "type": "mc",
            "q": "Modularisasi membantu",
            "options": [
              "retry aman",
              "skalabilitas",
              "request",
              "referensi tertahan"
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
              ".length",
              "new Nama()"
            ],
            "a": 0,
            "explain": "Pecah class besar."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur penting",
            "options": [
              "tidak",
              "+",
              "JUnit",
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
              "final",
              "array"
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
              "referensi",
              "kompleksitas",
              "di server",
              "invarian"
            ],
            "a": 2,
            "explain": "Validasi server wajib."
          },
          {
            "type": "mc",
            "q": "SQL injection dicegah dengan",
            "options": [
              "Testcontainers/db uji",
              "Sun Microsystems/Oracle",
              "String",
              "PreparedStatement"
            ],
            "a": 3,
            "explain": "Parameter terikat."
          },
          {
            "type": "mc",
            "q": "Menyimpan password memakai",
            "options": [
              "@RestController",
              "satu instance",
              "over-engineering",
              "hash kuat"
            ],
            "a": 3,
            "explain": "Hashing kuat."
          },
          {
            "type": "mc",
            "q": "Serialization tak aman bisa",
            "options": [
              "HikariCP",
              "teks",
              "RCE",
              "request"
            ],
            "a": 2,
            "explain": "Deserialisasi tak aman berisiko RCE."
          },
          {
            "type": "mc",
            "q": "Secrets disimpan di",
            "options": [
              "int[][]",
              "getX()/setX()",
              "banyak implementasi",
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
              "GC",
              "javac",
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
              "span",
              ".java"
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
              "teruji",
              "JUnit"
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
              "final",
              "array"
            ],
            "a": 0,
            "explain": "Hindari rahasia di log."
          },
          {
            "type": "mc",
            "q": "Audit keamanan berkala",
            "options": [
              "tidak",
              "+",
              "JUnit",
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
              "get(key)",
              ".split()",
              "throw",
              "per layanan"
            ],
            "a": 3,
            "explain": "Layanan kecil independen."
          },
          {
            "type": "mc",
            "q": "Komunikasi antar layanan memakai",
            "options": [
              "menambah kompleksitas",
              "HTTP/message",
              "hasil async",
              "Mockito"
            ],
            "a": 1,
            "explain": "HTTP atau pesan."
          },
          {
            "type": "mc",
            "q": "Service discovery membantu",
            "options": [
              "menemukan instance",
              "downtime",
              "alokasi/optimasi",
              "Spring Security"
            ],
            "a": 0,
            "explain": "Discovery menemukan layanan."
          },
          {
            "type": "mc",
            "q": "Circuit breaker mencegah",
            "options": [
              "kondisi benar",
              "cascading failure",
              "semua konstanta",
              "extends"
            ],
            "a": 1,
            "explain": "Circuit breaker."
          },
          {
            "type": "mc",
            "q": "Idempotensi penting untuk",
            "options": [
              "akses bersamaan",
              "class",
              "Serializable",
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
              "otomatis",
              "wajib",
              "pemantauan"
            ],
            "a": 0,
            "explain": "Tracing menghubungkan."
          },
          {
            "type": "mc",
            "q": "Gateway menangani",
            "options": [
              "routing/edge",
              "optimasi/debug",
              "kompatibilitas API",
              "switch"
            ],
            "a": 0,
            "explain": "Gateway mengatur edge."
          },
          {
            "type": "mc",
            "q": "Saga pattern menangani",
            "options": [
              "transaksi terdistribusi",
              ".length()",
              "String.format",
              "resource otomatis"
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
              "span",
              ".java"
            ],
            "a": 1,
            "explain": "Observability."
          },
          {
            "type": "mc",
            "q": "Konfigurasi terpusat membantu",
            "options": [
              "metadata class",
              "@GetMapping/@PostMapping",
              "operasional",
              "pembuatan objek"
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
              "kondisi benar",
              "semua konstanta",
              "JAR/WAR atau container",
              "cek tipe/cast eksplisit"
            ],
            "a": 2,
            "explain": "JAR/container."
          },
          {
            "type": "mc",
            "q": "Container memudahkan",
            "options": [
              "downtime",
              "reproduksibilitas",
              "alokasi/optimasi",
              "Spring Security"
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
              "+",
              "JUnit"
            ],
            "a": 1,
            "explain": "Health check."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown menuntaskan",
            "options": [
              "get(key)",
              ".split()",
              "request",
              "throw"
            ],
            "a": 2,
            "explain": "Shutdown menuntaskan."
          },
          {
            "type": "mc",
            "q": "Logging terpusat membantu",
            "options": [
              "diagnosis",
              "dikelola benar",
              "cakupan",
              "Maven/Gradle"
            ],
            "a": 0,
            "explain": "Log terpusat."
          },
          {
            "type": "mc",
            "q": "Metrik membantu",
            "options": [
              "seluruh teks",
              "abstraksi",
              "hash kuat",
              "pemantauan"
            ],
            "a": 3,
            "explain": "Metrik pemantauan."
          },
          {
            "type": "mc",
            "q": "Rolling deploy meminimalkan",
            "options": [
              "mengurangi keterbacaan",
              "semua selesai",
              "downtime",
              "DI/routing"
            ],
            "a": 2,
            "explain": "Rolling deploy."
          },
          {
            "type": "mc",
            "q": "Secret management penting",
            "options": [
              "tidak",
              "class",
              "ya",
              "objek"
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
              "JVM",
              "int"
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
              "nilai",
              "wajib"
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
              "konversi primitif ke wrapper otomatis",
              "class ke JVM",
              "enum Nama { A, B }",
              "menaikkan ke tipe induk"
            ],
            "a": 1,
            "explain": "Class loader memuat class."
          },
          {
            "type": "mc",
            "q": "Heap menyimpan",
            "options": [
              "akses data",
              "\"\"\"",
              "objek",
              "dikelola benar"
            ],
            "a": 2,
            "explain": "Heap untuk objek."
          },
          {
            "type": "mc",
            "q": "Stack menyimpan",
            "options": [
              "biaya thread",
              "frame method",
              "test implementasi",
              "diperbaiki"
            ],
            "a": 1,
            "explain": "Stack untuk frame."
          },
          {
            "type": "mc",
            "q": "Garbage collector mengelola",
            "options": [
              "urutan lock konsisten",
              "mengurangi biaya thread",
              "konfigurasi per lingkungan",
              "objek heap tak terpakai"
            ],
            "a": 3,
            "explain": "GC mereklamasi heap."
          },
          {
            "type": "mc",
            "q": "JIT compiler mengoptimasi",
            "options": [
              "kondisi ? a : b",
              "subclass menimpa method induk",
              "modifikasi string efisien",
              "bytecode saat runtime"
            ],
            "a": 3,
            "explain": "JIT mengoptimasi."
          },
          {
            "type": "mc",
            "q": "Metaspace menyimpan",
            "options": [
              "pengujian",
              "metadata class",
              "retry aman",
              "request"
            ],
            "a": 1,
            "explain": "Metaspace untuk metadata."
          },
          {
            "type": "mc",
            "q": "Memory leak bisa terjadi karena",
            "options": [
              "diagnosis",
              "JFR/VisualVM",
              "application.yml/properties",
              "referensi tertahan"
            ],
            "a": 3,
            "explain": "Referensi tertahan bikin leak."
          },
          {
            "type": "mc",
            "q": "Profiling memakai",
            "options": [
              "if/else",
              "JFR/VisualVM",
              "arr[0]",
              "modifier private"
            ],
            "a": 1,
            "explain": "JFR/VisualVM profil."
          },
          {
            "type": "mc",
            "q": "Opsi -Xmx mengatur",
            "options": [
              "referensi tertahan",
              "akses repositori",
              "heap maksimum",
              "listener"
            ],
            "a": 2,
            "explain": "-Xmx batas heap."
          },
          {
            "type": "mc",
            "q": "Escape analysis membantu",
            "options": [
              ".length",
              "new Nama()",
              "abstract class",
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
              "for (T x : koleksi)",
              "membuat aplikasi Java",
              "sama dengan class",
              "operasi menghasilkan string baru"
            ],
            "a": 1,
            "explain": "Boot menyederhanakan setup."
          },
          {
            "type": "mc",
            "q": "Dependency injection di Spring memakai",
            "options": [
              "container Spring",
              "metadata",
              "Jackson/Gson",
              "mentransformasi elemen"
            ],
            "a": 0,
            "explain": "Spring container DI."
          },
          {
            "type": "mc",
            "q": "Anotasi controller memakai",
            "options": [
              "try/catch",
              "@RestController",
              ".getMessage()",
              "fleksibilitas tipe"
            ],
            "a": 1,
            "explain": "Anotasi @RestController."
          },
          {
            "type": "mc",
            "q": "Mapping endpoint memakai",
            "options": [
              "SpotBugs/Checkstyle",
              "kondisi benar",
              "@GetMapping/@PostMapping",
              "semua konstanta"
            ],
            "a": 2,
            "explain": "Anotasi mapping."
          },
          {
            "type": "mc",
            "q": "Spring Data JPA memudahkan",
            "options": [
              "listener",
              "akses repositori",
              "equals/hashCode/toString",
              "optimasi/debug"
            ],
            "a": 1,
            "explain": "Repositori JPA."
          },
          {
            "type": "mc",
            "q": "Konfigurasi memakai",
            "options": [
              "application.yml/properties",
              "operasi atomik",
              "assertThrows",
              "Hibernate/JPA"
            ],
            "a": 0,
            "explain": "Berkas konfigurasi."
          },
          {
            "type": "mc",
            "q": "Profil Spring memungkinkan",
            "options": [
              "statically typed dan OOP",
              "kondisi ? a : b",
              "subclass menimpa method induk",
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
              "new Nama()",
              "abstract class",
              "HashSet"
            ],
            "a": 0,
            "explain": "Bean validation."
          },
          {
            "type": "mc",
            "q": "Keamanan memakai",
            "options": [
              "cakupan",
              "Maven/Gradle",
              "Spring Security",
              "break/continue bertarget"
            ],
            "a": 2,
            "explain": "Spring Security."
          },
          {
            "type": "mc",
            "q": "Actuator menyediakan",
            "options": [
              "hash kuat",
              "endpoint monitoring",
              "cascading failure",
              "reproduksibilitas"
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
              "Spring Security",
              "perilaku",
              "pencocokan tipe",
              "satu instance"
            ],
            "a": 3,
            "explain": "Singleton satu instance."
          },
          {
            "type": "mc",
            "q": "Factory memusatkan",
            "options": [
              "extends",
              "cek tipe/cast eksplisit",
              "get(index)",
              "pembuatan objek"
            ],
            "a": 3,
            "explain": "Factory memusatkan."
          },
          {
            "type": "mc",
            "q": "Builder memudahkan",
            "options": [
              "info tipe hilang runtime",
              "nilai tanpa hasil",
              "objek heap tak terpakai",
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
              "wajib",
              "routing/edge",
              "pemantauan"
            ],
            "a": 0,
            "explain": "Observer listener."
          },
          {
            "type": "mc",
            "q": "Strategy menukar",
            "options": [
              "algoritma",
              "hash kuat",
              "cascading failure",
              "reproduksibilitas"
            ],
            "a": 0,
            "explain": "Strategy menukar algoritma."
          },
          {
            "type": "mc",
            "q": "Adapter menjembatani",
            "options": [
              "cakupan",
              "antarmuka berbeda",
              "Maven/Gradle",
              "break/continue bertarget"
            ],
            "a": 1,
            "explain": "Adapter menjembatani."
          },
          {
            "type": "mc",
            "q": "Decorator menambah",
            "options": [
              "throw",
              "type safety",
              "perilaku",
              "parallel processing"
            ],
            "a": 2,
            "explain": "Decorator menambah perilaku."
          },
          {
            "type": "mc",
            "q": "Repository memisahkan",
            "options": [
              "akses data",
              "Mockito",
              "SQL injection",
              "java.nio.file.Files"
            ],
            "a": 0,
            "explain": "Repository data."
          },
          {
            "type": "mc",
            "q": "Pattern berlebihan berisiko",
            "options": [
              "@Override",
              "HashMap",
              "for-each/Iterator",
              "over-engineering"
            ],
            "a": 3,
            "explain": "Gunakan seperlunya."
          },
          {
            "type": "mc",
            "q": "Immutability membantu",
            "options": [
              "memisahkan API",
              "prediktabilitas",
              "hasil stream",
              "lock intrinsic"
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
              "objek diperlakukan sebagai tipe induk",
              "data carrier ringkas",
              "tipe aman dan pemakaian ulang",
              "urutan lock konsisten"
            ],
            "a": 1,
            "explain": "Record mengurangi boilerplate."
          },
          {
            "type": "mc",
            "q": "record menghasilkan",
            "options": [
              "interface fungsional",
              "equals/hashCode/toString",
              "map thread-safe",
              "setAutoCommit(false)/commit"
            ],
            "a": 1,
            "explain": "Record otomatis."
          },
          {
            "type": "mc",
            "q": "sealed class membatasi",
            "options": [
              "abstract class",
              "HashSet",
              "hierarki",
              ".length()"
            ],
            "a": 2,
            "explain": "Sealed membatasi subclass."
          },
          {
            "type": "mc",
            "q": "Pattern matching instanceof mempersingkat",
            "options": [
              "listener",
              "equals/hashCode/toString",
              "optimasi/debug",
              "cast bersyarat"
            ],
            "a": 3,
            "explain": "Pattern instanceof."
          },
          {
            "type": "mc",
            "q": "switch pattern (21) memungkinkan",
            "options": [
              "assertThrows",
              "pencocokan tipe",
              "Hibernate/JPA",
              "otomatis"
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
              "class",
              "\"\"\""
            ],
            "a": 3,
            "explain": "Text block memakai \"\"\"."
          },
          {
            "type": "mc",
            "q": "var membantu",
            "options": [
              "ditangani atau dideklarasikan",
              "inferensi tipe lokal",
              "data per thread",
              "saling menunggu lock"
            ],
            "a": 1,
            "explain": "var lokal."
          },
          {
            "type": "mc",
            "q": "Virtual threads mengurangi",
            "options": [
              "per layanan",
              "transaksi terdistribusi",
              "biaya thread",
              "downtime"
            ],
            "a": 2,
            "explain": "Virtual threads ringan."
          },
          {
            "type": "mc",
            "q": "Java modern tetap",
            "options": [
              "Jackson/Gson",
              "mentransformasi elemen",
              "menambah kompleksitas",
              "backward compatible"
            ],
            "a": 3,
            "explain": "Kompatibilitas dijaga."
          },
          {
            "type": "mc",
            "q": "Memahami bytecode membantu",
            "options": [
              "implements",
              "optimasi/debug",
              "tipe objek",
              "get(key)"
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
              "di server",
              "HTTP/message",
              "operasional"
            ],
            "a": 0,
            "explain": "Profiler menemukan hot spot."
          },
          {
            "type": "mc",
            "q": "Alokasi berlebih memengaruhi",
            "options": [
              "javac",
              "throw",
              "GC",
              "?"
            ],
            "a": 2,
            "explain": "Alokasi menambah GC."
          },
          {
            "type": "mc",
            "q": "StringBuilder di loop penting",
            "options": [
              "tidak",
              "array",
              "span",
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
              "ketersediaan anotasi",
              "keamanan",
              "elemen"
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
              "algoritma",
              "hierarki"
            ],
            "a": 1,
            "explain": "Ukur dulu."
          },
          {
            "type": "mc",
            "q": "Caching membantu",
            "options": [
              "modifier private",
              "tidak",
              "operasi mahal",
              "add()"
            ],
            "a": 2,
            "explain": "Cache operasi mahal."
          },
          {
            "type": "mc",
            "q": "Concurrency harus",
            "options": [
              "selalu",
              "dikelola benar",
              "class Box<T>",
              "<T> T method()"
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
              "JUnit",
              "alur nyata"
            ],
            "a": 1,
            "explain": "Minimalkan objek sementara."
          },
          {
            "type": "mc",
            "q": "Batch I/O membantu",
            "options": [
              "introspeksi runtime",
              "akses reflection",
              "performa",
              "teruji"
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
              "span",
              ".java"
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
              "listener",
              "equals/hashCode/toString",
              "test implementasi",
              "optimasi/debug"
            ],
            "a": 2,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Mutation testing membantu",
            "options": [
              "Objek heap yang tidak lagi terjangkau",
              "for (init; cond; step)",
              "mengukur kualitas test",
              "array ke list"
            ],
            "a": 2,
            "explain": "Mutation test mengukur test."
          },
          {
            "type": "mc",
            "q": "Integration test memakai",
            "options": [
              "interface fungsional",
              "Testcontainers/db uji",
              "map thread-safe",
              "setAutoCommit(false)/commit"
            ],
            "a": 1,
            "explain": "Testcontainers untuk integrasi."
          },
          {
            "type": "mc",
            "q": "Contract test menjaga",
            "options": [
              "cascading failure",
              "reproduksibilitas",
              "kompatibilitas API",
              "metadata class"
            ],
            "a": 2,
            "explain": "Contract test menjaga kesepakatan."
          },
          {
            "type": "mc",
            "q": "Static analysis memakai",
            "options": [
              "per layanan",
              "transaksi terdistribusi",
              "downtime",
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
              "double",
              "kondisi benar",
              "semua konstanta"
            ],
            "a": 0,
            "explain": "CI otomasi."
          },
          {
            "type": "mc",
            "q": "Test performa memakai",
            "options": [
              ".getMessage()",
              "fleksibilitas tipe",
              "JMH/load test",
              "akses bersamaan"
            ],
            "a": 2,
            "explain": "JMH untuk benchmark."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "cakupan",
              "assertThrows",
              "Hibernate/JPA",
              "otomatis"
            ],
            "a": 0,
            "explain": "Coverage mengukur."
          },
          {
            "type": "mc",
            "q": "Flaky test harus",
            "options": [
              "@BeforeEach",
              "hasil query",
              "diperbaiki",
              "seluruh teks"
            ],
            "a": 2,
            "explain": "Perbaiki flaky test."
          },
          {
            "type": "mc",
            "q": "Dokumentasi test penting",
            "options": [
              "tidak",
              "\"\"\"",
              "ya",
              "nilai"
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
