/* CodeDuo — blok konten: topik "Go" (dipisah dari Blok Web).
 * 1 topik (go) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_GO = [
  {
    "id": "go",
    "name": "Go",
    "icon": "🐹",
    "color": "#00add8",
    "desc": "Bahasa compiled dengan goroutine",
    "lessons": [
      {
        "id": "go-1",
        "level": "Dasar",
        "title": "Pengenalan Go",
        "exercises": [
          {
            "type": "mc",
            "q": "Go dikembangkan oleh",
            "options": [
              "Google",
              "Microsoft",
              "Apple",
              "Oracle"
            ],
            "a": 0,
            "explain": "Go dibuat di Google."
          },
          {
            "type": "mc",
            "q": "Go dikenal dengan dukungan bawaan untuk",
            "options": [
              "fmt.Errorf dengan %w",
              "SQL engine",
              "concurrency (goroutine)",
              "GUI"
            ],
            "a": 2,
            "explain": "Goroutine adalah andalan Go."
          },
          {
            "type": "mc",
            "q": "Berkas Go berekstensi",
            "options": [
              ".golang",
              ".goo",
              ".gd",
              ".go"
            ],
            "a": 3,
            "explain": "Berkas Go berekstensi .go."
          },
          {
            "type": "mc",
            "q": "Menjalankan program Go memakai",
            "options": [
              "node main.go",
              "python main.go",
              "php main.go",
              "go run main.go"
            ],
            "a": 3,
            "explain": "go run mengompilasi dan menjalankan."
          },
          {
            "type": "mc",
            "q": "Membangun binary memakai",
            "options": [
              "go make",
              "go pack",
              "go bin",
              "go build"
            ],
            "a": 3,
            "explain": "go build menghasilkan binary."
          },
          {
            "type": "mc",
            "q": "Manajer modul Go memakai",
            "options": [
              "npm",
              "go mod",
              "composer",
              "gem"
            ],
            "a": 1,
            "explain": "go mod mengelola modul."
          },
          {
            "type": "mc",
            "q": "Go adalah bahasa",
            "options": [
              "compiled dan statically typed",
              "interpreted",
              "tanpa tipe",
              "mengubah nilai asli"
            ],
            "a": 0,
            "explain": "Go dikompilasi dengan tipe statis."
          },
          {
            "type": "mc",
            "q": "Fungsi utama program Go adalah",
            "options": [
              "function main()",
              "func main()",
              "def main()",
              "main()"
            ],
            "a": 1,
            "explain": "Entry point Go adalah func main()."
          },
          {
            "type": "mc",
            "q": "Mengimpor package memakai",
            "options": [
              "import",
              "require",
              "use",
              "include"
            ],
            "a": 0,
            "explain": "Go memakai kata kunci import."
          },
          {
            "type": "mc",
            "q": "Format kode Go otomatis memakai",
            "options": [
              "gofmt",
              "prettier",
              "rubocop",
              "eslint"
            ],
            "a": 0,
            "explain": "gofmt menyeragamkan format."
          }
        ]
      },
      {
        "id": "go-2",
        "level": "Dasar",
        "title": "Variabel & Tipe",
        "exercises": [
          {
            "type": "mc",
            "q": "Variabel dideklarasikan memakai",
            "options": [
              "let nama",
              "nama := let",
              "var nama string",
              "string nama"
            ],
            "a": 2,
            "explain": "Go memakai var untuk deklarasi."
          },
          {
            "type": "mc",
            "q": "Deklarasi singkat memakai",
            "options": [
              ":=",
              "=",
              ":= :",
              "let"
            ],
            "a": 0,
            "explain": ":= mendeklarasikan sekaligus mengisi."
          },
          {
            "type": "mc",
            "q": "Tipe teks di Go adalah",
            "options": [
              "String",
              "text",
              "string",
              "char"
            ],
            "a": 2,
            "explain": "Go memakai string."
          },
          {
            "type": "mc",
            "q": "Bilangan bulat memakai",
            "options": [
              "Integer",
              "int",
              "number",
              "whole"
            ],
            "a": 1,
            "explain": "int adalah tipe bilangan bulat."
          },
          {
            "type": "mc",
            "q": "Nilai benar/salah memakai",
            "options": [
              "bool",
              "boolean",
              "bit",
              "flag"
            ],
            "a": 0,
            "explain": "bool adalah tipe boolean."
          },
          {
            "type": "mc",
            "q": "Nilai kosong default untuk string adalah",
            "options": [
              "null",
              "nil",
              "\"\"",
              "undefined"
            ],
            "a": 2,
            "explain": "String kosong default adalah \"\"."
          },
          {
            "type": "mc",
            "q": "Konstanta memakai",
            "options": [
              "const",
              "final",
              "let",
              "static"
            ],
            "a": 0,
            "explain": "Go memakai const."
          },
          {
            "type": "mc",
            "q": "Mengonversi int ke string memakai",
            "options": [
              "String(int)",
              "strconv.Itoa",
              "as string",
              "str(int)"
            ],
            "a": 1,
            "explain": "strconv.Itoa mengonversi int ke string."
          },
          {
            "type": "mc",
            "q": "Struktur koleksi berurutan di Go yang panjangnya bersifat tetap sejak deklarasi adalah",
            "options": [
              "slice",
              "array",
              "list",
              "vec"
            ],
            "a": 1,
            "explain": "Array berukuran tetap; slice dinamis."
          },
          {
            "type": "mc",
            "q": "Slice dinamis dibuat dengan",
            "options": [
              "array<int>",
              "[]int{...}",
              "list<int>",
              "vec<int>"
            ],
            "a": 1,
            "explain": "Slice memakai sintaks []T."
          }
        ]
      },
      {
        "id": "go-3",
        "level": "Dasar",
        "title": "Kontrol Alur",
        "exercises": [
          {
            "type": "mc",
            "q": "Percabangan di Go memakai",
            "options": [
              "if kondisi { }",
              "if (kondisi) { }",
              "if kondisi then",
              "saling menunggu tanpa kemajuan"
            ],
            "a": 0,
            "explain": "Go memakai if kondisi { }."
          },
          {
            "type": "mc",
            "q": "Kurung kurawal pada if bersifat",
            "options": [
              "opsional",
              "polimorfisme",
              "modul/package",
              "wajib"
            ],
            "a": 3,
            "explain": "Go mewajibkan kurung kurawal."
          },
          {
            "type": "mc",
            "q": "Perulangan di Go memakai",
            "options": [
              "while",
              "loop",
              "for",
              "do"
            ],
            "a": 2,
            "explain": "Go hanya punya for."
          },
          {
            "type": "mc",
            "q": "Switch di Go mengeksekusi",
            "options": [
              "semua case",
              "hanya case pertama cocok (tanpa fallthrough default)",
              "diawali huruf kapital",
              "mengimplementasikan semua method"
            ],
            "a": 1,
            "explain": "Go tidak fallthrough otomatis."
          },
          {
            "type": "mc",
            "q": "switch tanpa kondisi setara",
            "options": [
              "error",
              "context akar",
              "http.Handler pembungkus",
              "switch true"
            ],
            "a": 3,
            "explain": "Switch tanpa ekspresi memakai true."
          },
          {
            "type": "mc",
            "q": "Break menghentikan",
            "options": [
              "durasi",
              "request",
              "loop/switch",
              "memakai sinkronisasi"
            ],
            "a": 2,
            "explain": "break keluar dari loop/switch."
          },
          {
            "type": "mc",
            "q": "Continue melanjutkan ke",
            "options": [
              "menambah konteks",
              "iterasi berikutnya",
              "error kompilasi",
              "melepas resource"
            ],
            "a": 1,
            "explain": "continue melompati sisa iterasi."
          },
          {
            "type": "mc",
            "q": "Range pada slice memberi",
            "options": [
              "mewarisi field/method via komposisi",
              "*T yang menunjuk zero value",
              "index dan nilai",
              "mengembalikan nilai error"
            ],
            "a": 2,
            "explain": "for range mengembalikan index dan elemen."
          },
          {
            "type": "mc",
            "q": "Label pada loop memungkinkan",
            "options": [
              "[]int{...}",
              "jarang disarankan",
              "break/continue loop luar",
              "func literal"
            ],
            "a": 2,
            "explain": "Label menandai loop target."
          },
          {
            "type": "mc",
            "q": "Goto ada di Go tetapi",
            "options": [
              "jarang disarankan",
              "loop/switch",
              "huruf kecil",
              "cap(s)"
            ],
            "a": 0,
            "explain": "Hindari goto berlebihan."
          }
        ]
      },
      {
        "id": "go-4",
        "level": "Dasar",
        "title": "Fungsi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan fungsi memakai",
            "options": [
              "function nama()",
              "func nama() {}",
              "def nama()",
              "fn nama()"
            ],
            "a": 1,
            "explain": "Go memakai kata kunci func."
          },
          {
            "type": "mc",
            "q": "Fungsi mengembalikan nilai dengan",
            "options": [
              "yield",
              "out",
              "return",
              "give"
            ],
            "a": 2,
            "explain": "Go memakai return."
          },
          {
            "type": "mc",
            "q": "Go mendukung multiple return",
            "options": [
              "tidak",
              "hanya pointer",
              "int",
              "ya"
            ],
            "a": 3,
            "explain": "Go mendukung beberapa nilai balik."
          },
          {
            "type": "mc",
            "q": "Nilai balik kedua biasanya untuk",
            "options": [
              "cara berhenti",
              "import",
              "error",
              "const"
            ],
            "a": 2,
            "explain": "Konvensi Go mengembalikan error sebagai nilai kedua."
          },
          {
            "type": "mc",
            "q": "Parameter fungsi ditulis dengan",
            "options": [
              "tipe nama",
              "nama: tipe",
              "tipe->nama",
              "nama tipe"
            ],
            "a": 3,
            "explain": "Go menulis nama lalu tipe."
          },
          {
            "type": "mc",
            "q": "Fungsi variadik memakai",
            "options": [
              "*tipe",
              "&tipe",
              "[tipe]",
              "...tipe"
            ],
            "a": 3,
            "explain": "... menyatakan variadik."
          },
          {
            "type": "mc",
            "q": "Fungsi tanpa nama (closure) memakai",
            "options": [
              "lambda",
              "func literal",
              "arrow",
              "switch true"
            ],
            "a": 1,
            "explain": "Go memakai func literal untuk closure."
          },
          {
            "type": "mc",
            "q": "Nilai balik bernama memudahkan",
            "options": [
              "unit eksekusi ringan",
              "return tanpa argumen",
              "menunggu beberapa operasi channel",
              "menangani error banyak goroutine"
            ],
            "a": 1,
            "explain": "Named return memungkinkan return kosong."
          },
          {
            "type": "mc",
            "q": "defer dipakai untuk",
            "options": [
              "if kondisi { }",
              "menjalankan kode saat fungsi selesai",
              "func (r Receiver) Nama()",
              "mengubah nilai asli"
            ],
            "a": 1,
            "explain": "defer menunda eksekusi sampai fungsi selesai."
          },
          {
            "type": "mc",
            "q": "Fungsi adalah first-class sehingga",
            "options": [
              "tidak bisa dipakai",
              "dapat disimpan di variabel",
              "menunggu beberapa operasi channel",
              "menangani error banyak goroutine"
            ],
            "a": 1,
            "explain": "Fungsi dapat dipakai sebagai nilai."
          }
        ]
      },
      {
        "id": "go-5",
        "level": "Dasar",
        "title": "Struct & Method",
        "exercises": [
          {
            "type": "mc",
            "q": "Struct didefinisikan memakai",
            "options": [
              "class Nama {}",
              "struct Nama",
              "type Nama struct { ... }",
              "object Nama"
            ],
            "a": 2,
            "explain": "Go memakai type ... struct."
          },
          {
            "type": "mc",
            "q": "Membuat instance struct memakai",
            "options": [
              "new Nama()",
              "Nama{...}",
              "Nama()",
              "Nama.new"
            ],
            "a": 1,
            "explain": "Struct literal memakai Nama{...}."
          },
          {
            "type": "mc",
            "q": "Method didefinisikan dengan",
            "options": [
              "func Nama() on r",
              "method r Nama()",
              "func (r Receiver) Nama()",
              "def Nama(r)"
            ],
            "a": 2,
            "explain": "Method menyertakan receiver."
          },
          {
            "type": "mc",
            "q": "Pointer receiver memakai",
            "options": [
              "(r Tipe) selalu",
              "(&Tipe)",
              "(ptr Tipe)",
              "(r *Tipe)"
            ],
            "a": 3,
            "explain": "Pointer receiver ditandai *Tipe."
          },
          {
            "type": "mc",
            "q": "Embedding struct memungkinkan",
            "options": [
              "var nama string",
              "type Nama struct { ... }",
              "mewarisi field/method via komposisi",
              "alamat memori nilai"
            ],
            "a": 2,
            "explain": "Embedding meniru pewarisan lewat komposisi."
          },
          {
            "type": "mc",
            "q": "Tag struct dipakai untuk",
            "options": [
              "penyalinan besar",
              "v := <-ch",
              "json.Marshal",
              "metadata (mis. JSON)"
            ],
            "a": 3,
            "explain": "Tag menyimpan metadata seperti nama JSON."
          },
          {
            "type": "mc",
            "q": "Zero value struct adalah",
            "options": [
              "nil",
              "error",
              "nilai default semua field",
              "compiled dan statically typed"
            ],
            "a": 2,
            "explain": "Struct selalu punya zero value."
          },
          {
            "type": "mc",
            "q": "Field diekspor (public) bila",
            "options": [
              "diawali huruf kapital",
              "diawali garis bawah",
              "selalu",
              "go test -race"
            ],
            "a": 0,
            "explain": "Huruf kapital menandai field/meotd diekspor."
          },
          {
            "type": "mc",
            "q": "Field unexported diawali",
            "options": [
              "huruf kapital",
              "@",
              "huruf kecil",
              "$"
            ],
            "a": 2,
            "explain": "Huruf kecil membuat field unexported."
          },
          {
            "type": "mc",
            "q": "Slice of struct dibuat dengan",
            "options": [
              "Nama[]",
              "list Nama",
              "[]Nama{...}",
              "package nama"
            ],
            "a": 2,
            "explain": "Slice of struct memakai []Nama."
          }
        ]
      },
      {
        "id": "go-6",
        "level": "Dasar",
        "title": "Map & Slice",
        "exercises": [
          {
            "type": "mc",
            "q": "Map dibuat memakai",
            "options": [
              "dict{string:int}",
              "hash[string,int]",
              "package nama",
              "map[string]int{}"
            ],
            "a": 3,
            "explain": "Map memakai sintaks map[K]V."
          },
          {
            "type": "mc",
            "q": "Menambah nilai map memakai",
            "options": [
              "m[\"k\"] = v",
              "m.add(k,v)",
              "m.put()",
              "fmt.Errorf dengan %w"
            ],
            "a": 0,
            "explain": "Assignment menambah/mengganti nilai."
          },
          {
            "type": "mc",
            "q": "Memeriksa key ada memakai",
            "options": [
              "m.has(k)",
              "m.exists(k)",
              "v, ok := m[k]",
              "keamanan tipe dan performa"
            ],
            "a": 2,
            "explain": "Comma-ok mengecek keberadaan key."
          },
          {
            "type": "mc",
            "q": "Menghapus key memakai",
            "options": [
              "m.remove(k)",
              "m.del(k)",
              "delete(m, k)",
              "polimorfisme"
            ],
            "a": 2,
            "explain": "delete menghapus key."
          },
          {
            "type": "mc",
            "q": "Slice ditambah elemen memakai",
            "options": [
              "s.add(x)",
              "s.push(x)",
              "append(s, x)",
              "penyalinan besar"
            ],
            "a": 2,
            "explain": "append menambah elemen."
          },
          {
            "type": "mc",
            "q": "Panjang slice memakai",
            "options": [
              "s.length",
              "s.size",
              "metadata request",
              "len(s)"
            ],
            "a": 3,
            "explain": "len mengembalikan panjang."
          },
          {
            "type": "mc",
            "q": "Kapasitas slice memakai",
            "options": [
              "s.cap",
              "capacity(s)",
              "fungsi cancel",
              "cap(s)"
            ],
            "a": 3,
            "explain": "cap mengembalikan kapasitas."
          },
          {
            "type": "mc",
            "q": "Membuat slice dengan make memakai",
            "options": [
              "new([]int)",
              "slice(10)",
              "membersihkan dependency",
              "make([]int, 0, 10)"
            ],
            "a": 3,
            "explain": "make menyiapkan len/cap."
          },
          {
            "type": "mc",
            "q": "Menyalin slice memakai",
            "options": [
              "dst = src selalu",
              "clone()",
              "close(ch)",
              "copy(dst, src)"
            ],
            "a": 3,
            "explain": "copy menyalin elemen."
          },
          {
            "type": "mc",
            "q": "Slice adalah",
            "options": [
              "list tertaut",
              "view atas array dengan len dan cap",
              "hash",
              "kondisi tak terpulihkan"
            ],
            "a": 1,
            "explain": "Slice mereferensikan array dengan len/cap."
          }
        ]
      },
      {
        "id": "go-7",
        "level": "Dasar",
        "title": "Pointer & Referensi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengambil alamat variabel memakai",
            "options": [
              "*x",
              "x.addr",
              "&x",
              "panic"
            ],
            "a": 2,
            "explain": "Operator & mengambil alamat."
          },
          {
            "type": "mc",
            "q": "Mendereferensi pointer memakai",
            "options": [
              "&p",
              "p.value",
              "*p",
              "int"
            ],
            "a": 2,
            "explain": "Operator * mengakses nilai pointer."
          },
          {
            "type": "mc",
            "q": "Pointer dideklarasikan dengan",
            "options": [
              "&int",
              "int*",
              "ya, penting",
              "*int"
            ],
            "a": 3,
            "explain": "Tipe pointer ditulis *T."
          },
          {
            "type": "mc",
            "q": "Pointer menunjuk ke",
            "options": [
              "nilai salinan",
              "alamat memori nilai",
              "logging, metrics, tracing",
              "Deadline dan sinyal pembatalan"
            ],
            "a": 1,
            "explain": "Pointer menyimpan alamat."
          },
          {
            "type": "mc",
            "q": "Mengirim pointer ke fungsi memungkinkan",
            "options": [
              "salinan",
              "mengubah nilai asli",
              "dari package lain",
              "tidak pernah selesai"
            ],
            "a": 1,
            "explain": "Pointer memungkinkan mutasi nilai asli."
          },
          {
            "type": "mc",
            "q": "Nilai default pointer adalah",
            "options": [
              "0",
              "error",
              "ch <- v",
              "nil"
            ],
            "a": 3,
            "explain": "Pointer tanpa inisialisasi bernilai nil."
          },
          {
            "type": "mc",
            "q": "new(T) mengembalikan",
            "options": [
              "T",
              "error",
              "nil",
              "*T yang menunjuk zero value"
            ],
            "a": 3,
            "explain": "new mengembalikan pointer ke zero value."
          },
          {
            "type": "mc",
            "q": "Mengakses field via pointer memakai",
            "options": [
              "(*p).field wajib",
              "p.field",
              "p->field",
              "field comparable"
            ],
            "a": 1,
            "explain": "Go otomatis mendereferensi pointer."
          },
          {
            "type": "mc",
            "q": "Pointer berlebihan menyulitkan",
            "options": [
              "keterbacaan",
              "modul/package",
              "argumen pertama",
              "{id}"
            ],
            "a": 0,
            "explain": "Gunakan pointer sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Interface lebih disukai daripada pointer ke interface",
            "options": [
              "ya",
              "tidak",
              "panic",
              "t.Run"
            ],
            "a": 0,
            "explain": "Jangan pakai pointer ke interface."
          }
        ]
      },
      {
        "id": "go-8",
        "level": "Dasar",
        "title": "Interface",
        "exercises": [
          {
            "type": "mc",
            "q": "Interface didefinisikan dengan",
            "options": [
              "type Nama interface { ... }",
              "interface Nama {}",
              "class Nama interface",
              "statis dan mandiri"
            ],
            "a": 0,
            "explain": "Interface memakai type ... interface."
          },
          {
            "type": "mc",
            "q": "Tipe memenuhi interface bila",
            "options": [
              "didaftarkan manual",
              "nilai dinamis bertipe",
              "variabel error pembanding",
              "mengimplementasikan semua method"
            ],
            "a": 3,
            "explain": "Go memakai implementasi implisit."
          },
          {
            "type": "mc",
            "q": "Interface kosong interface{} berarti",
            "options": [
              "tanpa method saja",
              "layanan inti tetap jalan",
              "mengurangi alokasi objek berulang",
              "tipe apa saja"
            ],
            "a": 3,
            "explain": "Any di Go adalah interface{}/any."
          },
          {
            "type": "mc",
            "q": "Type assertion memakai",
            "options": [
              "v.(Tipe)",
              "v as Tipe",
              "cast(v)",
              "import"
            ],
            "a": 0,
            "explain": "Type assertion memeriksa tipe konkret."
          },
          {
            "type": "mc",
            "q": "Type switch memakai",
            "options": [
              "switch type(x)",
              "case type",
              "switch v := x.(type)",
              "runtime scheduler Go"
            ],
            "a": 2,
            "explain": "Type switch memeriksa tipe dinamis."
          },
          {
            "type": "mc",
            "q": "Interface error didefinisikan dengan method",
            "options": [
              "Err() error",
              "Error() string",
              "Message()",
              "throughput"
            ],
            "a": 1,
            "explain": "error membutuhkan method Error() string."
          },
          {
            "type": "mc",
            "q": "Mengembalikan error nil berarti",
            "options": [
              "error fatal",
              "versi binary & skema kompatibel",
              "tidak ada error",
              "keamanan tipe dan performa"
            ],
            "a": 2,
            "explain": "nil menandakan keberhasilan."
          },
          {
            "type": "mc",
            "q": "Empty interface menyimpan",
            "options": [
              "nilai dinamis bertipe",
              "hanya pointer",
              "mengembalikan nilai error",
              "modul dan dependency"
            ],
            "a": 0,
            "explain": "Interface menyimpan tipe dan nilai dinamis."
          },
          {
            "type": "mc",
            "q": "Interface memungkinkan",
            "options": [
              "tipe dinamis",
              "net/http/pprof & runtime/pprof",
              "alokasi stack",
              "polimorfisme"
            ],
            "a": 3,
            "explain": "Interface memberi polimorfisme."
          },
          {
            "type": "mc",
            "q": "Error wrapping memakai",
            "options": [
              "fmt.Errorf dengan %w",
              "jumlah P/prosesor logis",
              "akses data",
              "mengurangi alokasi"
            ],
            "a": 0,
            "explain": "Verb %w membungkus error."
          }
        ]
      },
      {
        "id": "go-9",
        "level": "Dasar",
        "title": "Error Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Konvensi error di Go adalah",
            "options": [
              "exception",
              "panic selalu",
              "modul dan dependency",
              "mengembalikan nilai error"
            ],
            "a": 3,
            "explain": "Go mengembalikan error sebagai nilai."
          },
          {
            "type": "mc",
            "q": "Memeriksa error memakai",
            "options": [
              "try/catch",
              "except",
              "if err != nil",
              "versi binary & skema kompatibel"
            ],
            "a": 2,
            "explain": "Pola umum memeriksa err != nil."
          },
          {
            "type": "mc",
            "q": "Membuat error baru memakai",
            "options": [
              "new Error",
              "throw",
              "membersihkan dependency",
              "errors.New(\"...\")"
            ],
            "a": 3,
            "explain": "errors.New membuat error sederhana."
          },
          {
            "type": "mc",
            "q": "panic dipakai untuk",
            "options": [
              "kondisi tak terpulihkan",
              "error biasa",
              "statis dan mandiri",
              "introspeksi tipe saat runtime"
            ],
            "a": 0,
            "explain": "panic untuk kondisi fatal."
          },
          {
            "type": "mc",
            "q": "recover dipakai untuk",
            "options": [
              "tidak ada error",
              "memulihkan dari panic",
              "mengambil tipe error tertentu",
              "panic menjatuhkan server"
            ],
            "a": 1,
            "explain": "recover menangani panic pada defer."
          },
          {
            "type": "mc",
            "q": "errors.Is dipakai untuk",
            "options": [
              "membandingkan error target",
              "layanan inti tetap jalan",
              "mengurangi alokasi objek berulang",
              "import dari luar modul"
            ],
            "a": 0,
            "explain": "errors.Is memeriksa rantai error."
          },
          {
            "type": "mc",
            "q": "errors.As dipakai untuk",
            "options": [
              "mengambil tipe error tertentu",
              "switch v := x.(type)",
              "membandingkan error target",
              "request dan status"
            ],
            "a": 0,
            "explain": "errors.As mengekstrak tipe error."
          },
          {
            "type": "mc",
            "q": "Mengabaikan error berbahaya karena",
            "options": [
              "banyak metadata",
              "make(chan T, n)",
              "menyembunyikan masalah",
              "json.Unmarshal"
            ],
            "a": 2,
            "explain": "Error yang diabaikan bisa memicu bug."
          },
          {
            "type": "mc",
            "q": "Error wrapping memungkinkan",
            "options": [
              "menambah konteks",
              "make(chan T)",
              "context",
              "r.URL.Query().Get(...)"
            ],
            "a": 0,
            "explain": "Wrapping menambah konteks."
          },
          {
            "type": "mc",
            "q": "Sentinel error adalah",
            "options": [
              "at-least-once + idempoten",
              "goroutine dihentikan sementara",
              "dihindari bila memungkinkan",
              "variabel error pembanding"
            ],
            "a": 3,
            "explain": "Sentinel error dipakai dengan errors.Is."
          }
        ]
      },
      {
        "id": "go-10",
        "level": "Dasar",
        "title": "Package & Modul",
        "exercises": [
          {
            "type": "mc",
            "q": "Setiap berkas Go diawali",
            "options": [
              "import nama",
              "package nama",
              "module nama",
              "protoc"
            ],
            "a": 1,
            "explain": "Deklarasi package di awal berkas."
          },
          {
            "type": "mc",
            "q": "Package utama memakai nama",
            "options": [
              "app",
              "root",
              "core",
              "main"
            ],
            "a": 3,
            "explain": "Package main menghasilkan executable."
          },
          {
            "type": "mc",
            "q": "go.mod mengelola",
            "options": [
              "var nama string",
              "type Nama struct { ... }",
              "modul dan dependency",
              "alamat memori nilai"
            ],
            "a": 2,
            "explain": "go.mod mendefinisikan modul."
          },
          {
            "type": "mc",
            "q": "Menambah dependency memakai",
            "options": [
              "go add",
              "go get",
              "go install:new",
              "go mod"
            ],
            "a": 1,
            "explain": "go get menambah dependency."
          },
          {
            "type": "mc",
            "q": "Mengimpor package memakai path",
            "options": [
              "Redis/etcd",
              "modul/package",
              "deployment",
              "pprof"
            ],
            "a": 1,
            "explain": "Import memakai path modul."
          },
          {
            "type": "mc",
            "q": "Nama package yang diekspor diawali",
            "options": [
              "garis bawah",
              "huruf kapital",
              "@",
              "multi-stage build"
            ],
            "a": 1,
            "explain": "Identifier kapital diekspor."
          },
          {
            "type": "mc",
            "q": "init() dijalankan",
            "options": [
              "saat package diinisialisasi",
              "Deadline dan sinyal pembatalan",
              "menjalankan kode saat fungsi selesai",
              "v, ok := m[k]"
            ],
            "a": 0,
            "explain": "init dijalankan otomatis."
          },
          {
            "type": "mc",
            "q": "go mod tidy dipakai untuk",
            "options": [
              "membersihkan dependency",
              "alokasi berlebihan",
              "GOOS/GOARCH",
              "urutan kompatibel"
            ],
            "a": 0,
            "explain": "tidy merapikan go.mod."
          },
          {
            "type": "mc",
            "q": "Vendor directory dipakai untuk",
            "options": [
              "menyalin dependency",
              "performa fungsi",
              "abstraksi DB",
              "pembatalan/timeout"
            ],
            "a": 0,
            "explain": "Vendor menyimpan salinan dependency."
          },
          {
            "type": "mc",
            "q": "Import cycle menyebabkan",
            "options": [
              "env/flag",
              "throughput",
              "error kompilasi",
              "melepas koneksi"
            ],
            "a": 2,
            "explain": "Import melingkar tidak diizinkan."
          }
        ]
      },
      {
        "id": "go-11",
        "level": "Menengah",
        "title": "Context & Pembatalan",
        "exercises": [
          {
            "type": "mc",
            "q": "context.Background membuat",
            "options": [
              "context akar",
              "menyalin dependency",
              "metadata request",
              "mencatat status"
            ],
            "a": 0,
            "explain": "Background adalah context akar."
          },
          {
            "type": "mc",
            "q": "context.WithCancel memberi",
            "options": [
              "http.ServeMux",
              "semua field",
              "fungsi cancel",
              "ch <- v"
            ],
            "a": 2,
            "explain": "WithCancel menyediakan cancel."
          },
          {
            "type": "mc",
            "q": "ctx.Done() mengembalikan",
            "options": [
              "if err != nil",
              "saat package diinisialisasi",
              "jika disimpan sebagai value di map",
              "channel sinyal selesai"
            ],
            "a": 3,
            "explain": "Done menandakan pembatalan."
          },
          {
            "type": "mc",
            "q": "Meneruskan context sebaiknya sebagai",
            "options": [
              "v.(Tipe)",
              "package nama",
              "context akar",
              "argumen pertama"
            ],
            "a": 3,
            "explain": "Idiom: context argumen pertama."
          },
          {
            "type": "mc",
            "q": "Jangan menyimpan context di struct",
            "options": [
              "salah",
              "*int",
              "benar",
              "huruf kapital"
            ],
            "a": 2,
            "explain": "Context diteruskan, bukan disimpan."
          },
          {
            "type": "mc",
            "q": "context.WithTimeout membatasi",
            "options": [
              "keterbacaan",
              "menambah konteks",
              "error kompilasi",
              "durasi"
            ],
            "a": 3,
            "explain": "WithTimeout membatasi waktu."
          },
          {
            "type": "mc",
            "q": "context.WithValue cocok untuk",
            "options": [
              "metadata request",
              "delete(m, k)",
              "polimorfisme",
              "modul/package"
            ],
            "a": 0,
            "explain": "Value untuk data lintas fungsi."
          },
          {
            "type": "mc",
            "q": "Pembatalan harus dihormati di IO",
            "options": [
              "tidak",
              "Test",
              "ya",
              "GC"
            ],
            "a": 2,
            "explain": "Operasi IO harus cek ctx."
          },
          {
            "type": "mc",
            "q": "WithValue berlebihan menyulitkan",
            "options": [
              "json.Marshal",
              "io.ReadAll(r.Body)",
              "[T any]",
              "keterbacaan"
            ],
            "a": 3,
            "explain": "Gunakan sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Memanggil cancel penting untuk",
            "options": [
              "non-blocking",
              "melepas resource",
              "http.ListenAndServe",
              "menambah kompleksitas"
            ],
            "a": 1,
            "explain": "Cancel melepas resource."
          }
        ]
      },
      {
        "id": "go-12",
        "level": "Menengah",
        "title": "Middleware HTTP",
        "exercises": [
          {
            "type": "mc",
            "q": "Middleware HTTP adalah",
            "options": [
              "menganalisis memori",
              "http.Handler pembungkus",
              "ketergantungan langsung",
              "prometheus client"
            ],
            "a": 1,
            "explain": "Middleware membungkus handler."
          },
          {
            "type": "mc",
            "q": "Membuat middleware memakai",
            "options": [
              "unit eksekusi ringan",
              "menunggu beberapa operasi channel",
              "fungsi yang menerima dan mengembalikan Handler",
              "menangani error banyak goroutine"
            ],
            "a": 2,
            "explain": "Signature middleware Go."
          },
          {
            "type": "mc",
            "q": "Routing memakai",
            "options": [
              "GOOS/GOARCH",
              "urutan kompatibel",
              "interface{}",
              "http.ServeMux"
            ],
            "a": 3,
            "explain": "ServeMux menangani routing."
          },
          {
            "type": "mc",
            "q": "Path parameter pada ServeMux Go 1.22 memakai",
            "options": [
              ":id",
              "{id}",
              "deployment",
              "pprof"
            ],
            "a": 1,
            "explain": "Go 1.22 mendukung pola path."
          },
          {
            "type": "mc",
            "q": "Middleware logging mencatat",
            "options": [
              "overhead per operasi",
              "request dan status",
              "var nama string",
              "type Nama struct { ... }"
            ],
            "a": 1,
            "explain": "Log mencatat detail request."
          },
          {
            "type": "mc",
            "q": "Middleware recover mencegah",
            "options": [
              "panic menjatuhkan server",
              "dari package lain",
              "tidak pernah selesai",
              "deadline dan pembatalan"
            ],
            "a": 0,
            "explain": "Recover menangani panic."
          },
          {
            "type": "mc",
            "q": "Urutan middleware penting",
            "options": [
              "tidak",
              "ya",
              "&x",
              "main"
            ],
            "a": 1,
            "explain": "Urutan menentukan alur."
          },
          {
            "type": "mc",
            "q": "CORS middleware mengatur",
            "options": [
              "performa fungsi",
              "abstraksi DB",
              "header origin",
              "pembatalan/timeout"
            ],
            "a": 2,
            "explain": "Header CORS diatur middleware."
          },
          {
            "type": "mc",
            "q": "Rate limiting middleware membatasi",
            "options": [
              "throughput",
              "melepas koneksi",
              "request",
              "konsistensi format"
            ],
            "a": 2,
            "explain": "Membatasi frekuensi."
          },
          {
            "type": "mc",
            "q": "Response writer wrapper memungkinkan",
            "options": [
              "blank import",
              "mencatat status",
              "join/query batch",
              "struct konkret"
            ],
            "a": 1,
            "explain": "Wrapper memantau respons."
          }
        ]
      },
      {
        "id": "go-13",
        "level": "Menengah",
        "title": "Struct Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Anonymous struct berguna untuk",
            "options": [
              "bila didesain demikian",
              "menerima sampai channel ditutup",
              "jumlah pekerja bersamaan",
              "struktur data sekali pakai"
            ],
            "a": 3,
            "explain": "Anonymous struct untuk data sementara."
          },
          {
            "type": "mc",
            "q": "Embedding interface memungkinkan",
            "options": [
              "komposisi method",
              "field comparable",
              "make(chan T)",
              "context"
            ],
            "a": 0,
            "explain": "Interface dapat diembed."
          },
          {
            "type": "mc",
            "q": "Method value vs method expression",
            "options": [
              "dari package lain",
              "tidak pernah selesai",
              "deadline dan pembatalan",
              "bound vs unbound"
            ],
            "a": 3,
            "explain": "Method value terikat receiver."
          },
          {
            "type": "mc",
            "q": "Struct tidak bisa diubah setelah di-map",
            "options": [
              "jika disimpan sebagai value di map",
              "overhead per operasi",
              "var nama string",
              "type Nama struct { ... }"
            ],
            "a": 0,
            "explain": "Nilai struct di map tidak addressable."
          },
          {
            "type": "mc",
            "q": "Struct comparison dengan == memerlukan",
            "options": [
              "argumen pertama",
              "penyalinan besar",
              "field comparable",
              "v := <-ch"
            ],
            "a": 2,
            "explain": "Field harus comparable."
          },
          {
            "type": "mc",
            "q": "Copy struct menyalin",
            "options": [
              "menyalin dependency",
              "semua field",
              "metadata request",
              "mencatat status"
            ],
            "a": 1,
            "explain": "Assignment menyalin seluruh struct."
          },
          {
            "type": "mc",
            "q": "Pointer ke struct menghindari",
            "options": [
              "header origin",
              "penyalinan besar",
              "banyak metadata",
              "make(chan T, n)"
            ],
            "a": 1,
            "explain": "Pointer menghindari copy."
          },
          {
            "type": "mc",
            "q": "Struct tag ganda memungkinkan",
            "options": [
              "melepas resource",
              "banyak metadata",
              "komposisi method",
              "dibatasi (pool/semaphore)"
            ],
            "a": 1,
            "explain": "Tag dapat memuat beberapa key."
          },
          {
            "type": "mc",
            "q": "Unexported field tidak bisa diakses",
            "options": [
              "dari package lain",
              "melindungi data bersama",
              "mendistribusikan lalu menggabungkan hasil",
              "mencegah koneksi menggantung"
            ],
            "a": 0,
            "explain": "Unexported bersifat private."
          },
          {
            "type": "mc",
            "q": "Zero value struct tetap aman dipakai",
            "options": [
              "bila didesain demikian",
              "Deadline dan sinyal pembatalan",
              "menjalankan kode saat fungsi selesai",
              "v, ok := m[k]"
            ],
            "a": 0,
            "explain": "Desain struct yang siap pakai."
          }
        ]
      },
      {
        "id": "go-14",
        "level": "Menengah",
        "title": "Goroutine",
        "exercises": [
          {
            "type": "mc",
            "q": "Goroutine dijalankan memakai",
            "options": [
              "goroutine fungsi()",
              "async fungsi()",
              "thread fungsi()",
              "go fungsi()"
            ],
            "a": 3,
            "explain": "Kata kunci go menjalankan goroutine."
          },
          {
            "type": "mc",
            "q": "Goroutine adalah",
            "options": [
              "proses terpisah",
              "unit eksekusi ringan",
              "kondisi tak terpulihkan",
              "channel sinyal selesai"
            ],
            "a": 1,
            "explain": "Goroutine ringan dibanding thread."
          },
          {
            "type": "mc",
            "q": "Main menunggu goroutine bila",
            "options": [
              "logika bisnis",
              "memakai sinkronisasi",
              "strings.Builder",
              "*sql.Rows"
            ],
            "a": 1,
            "explain": "Program berakhir saat main selesai."
          },
          {
            "type": "mc",
            "q": "waitGroup dipakai untuk",
            "options": [
              "menunggu beberapa goroutine",
              "memulihkan dari panic",
              "fungsi yang menerima dan mengembalikan Handler",
              "bila didesain demikian"
            ],
            "a": 0,
            "explain": "WaitGroup menunggu goroutine selesai."
          },
          {
            "type": "mc",
            "q": "wg.Add(1) sebelum memulai goroutine",
            "options": [
              "ya, penting",
              "tidak perlu",
              "jumlah P/prosesor logis",
              "akses data"
            ],
            "a": 0,
            "explain": "Add harus dipanggil sebelum go."
          },
          {
            "type": "mc",
            "q": "Data race terjadi ketika",
            "options": [
              "membandingkan error target",
              "request dan status",
              "akses bersamaan tanpa sinkronisasi",
              "unit eksekusi ringan"
            ],
            "a": 2,
            "explain": "Akses data bersama tanpa sinkronisasi."
          },
          {
            "type": "mc",
            "q": "Mutex dipakai untuk",
            "options": [
              "introspeksi tipe saat runtime",
              "constructor dan interface",
              "Mengirim nilai dan berkoordinasi antar goroutine",
              "melindungi data bersama"
            ],
            "a": 3,
            "explain": "Mutex menyinkronkan akses."
          },
          {
            "type": "mc",
            "q": "Detektor data race dijalankan dengan",
            "options": [
              "mengambil tipe error tertentu",
              "panic menjatuhkan server",
              "go test -race",
              "menunggu beberapa goroutine"
            ],
            "a": 2,
            "explain": "Flag -race mendeteksi race."
          },
          {
            "type": "mc",
            "q": "Goroutine yang bocor terjadi bila",
            "options": [
              "statis dan mandiri",
              "introspeksi tipe saat runtime",
              "tidak pernah selesai",
              "constructor dan interface"
            ],
            "a": 2,
            "explain": "Goroutine menggantung memboroskan memory."
          },
          {
            "type": "mc",
            "q": "Jumlah goroutine berlebihan perlu",
            "options": [
              "(r *Tipe)",
              "dibatasi (pool/semaphore)",
              "append(s, x)",
              "fmt.Errorf dengan %w"
            ],
            "a": 1,
            "explain": "Batasi konkurensi."
          }
        ]
      },
      {
        "id": "go-15",
        "level": "Menengah",
        "title": "Channel",
        "exercises": [
          {
            "type": "mc",
            "q": "Channel dibuat memakai",
            "options": [
              "new chan",
              "make(chan T)",
              "chan T{}",
              "mencatat status"
            ],
            "a": 1,
            "explain": "make membuat channel."
          },
          {
            "type": "mc",
            "q": "Mengirim ke channel memakai",
            "options": [
              "ch.send(v)",
              "ch.put(v)",
              "http.ServeMux",
              "ch <- v"
            ],
            "a": 3,
            "explain": "Operator <- untuk kirim."
          },
          {
            "type": "mc",
            "q": "Menerima dari channel memakai",
            "options": [
              "ch.recv(v)",
              "ch.get()",
              "durasi",
              "v := <-ch"
            ],
            "a": 3,
            "explain": "Operator <- untuk terima."
          },
          {
            "type": "mc",
            "q": "Channel buffered dibuat dengan",
            "options": [
              "new chan T n",
              "make(chan T, n)",
              "chan T buffer n",
              "context akar"
            ],
            "a": 1,
            "explain": "Argumen kedua kapasitas buffer."
          },
          {
            "type": "mc",
            "q": "Menutup channel memakai",
            "options": [
              "ch.close()",
              "ch.end()",
              "context",
              "close(ch)"
            ],
            "a": 3,
            "explain": "close menutup channel."
          },
          {
            "type": "mc",
            "q": "Pola for range pada channel",
            "options": [
              "tidak pernah selesai",
              "deadline dan pembatalan",
              "menerima sampai channel ditutup",
              "func Map[T, U any](...)"
            ],
            "a": 2,
            "explain": "Range membaca sampai close."
          },
          {
            "type": "mc",
            "q": "select dipakai untuk",
            "options": [
              "var nama string",
              "type Nama struct { ... }",
              "menunggu beberapa operasi channel",
              "alamat memori nilai"
            ],
            "a": 2,
            "explain": "select memilih channel yang siap."
          },
          {
            "type": "mc",
            "q": "Default pada select memungkinkan",
            "options": [
              "penyalinan besar",
              "non-blocking",
              "v := <-ch",
              "json.Marshal"
            ],
            "a": 1,
            "explain": "Default membuat jalur non-blocking."
          },
          {
            "type": "mc",
            "q": "Mengirim ke channel tertutup menyebabkan",
            "options": [
              "nil",
              "error",
              "&x",
              "panic"
            ],
            "a": 3,
            "explain": "Kirim ke channel tertutup panic."
          },
          {
            "type": "mc",
            "q": "Channel adalah cara Go untuk",
            "options": [
              "secara bertahap lewat channel",
              "go test -cover",
              "instance tidak sehat",
              "berbagi data dengan komunikasi"
            ],
            "a": 3,
            "explain": "Idiom: share memory by communicating."
          }
        ]
      },
      {
        "id": "go-16",
        "level": "Menengah",
        "title": "Concurrency Pattern",
        "exercises": [
          {
            "type": "mc",
            "q": "Worker pool memakai",
            "options": [
              "statis dan mandiri",
              "introspeksi tipe saat runtime",
              "constructor dan interface",
              "goroutine dengan channel job"
            ],
            "a": 3,
            "explain": "Worker pool mengantrekan pekerjaan."
          },
          {
            "type": "mc",
            "q": "Fan-out/fan-in berarti",
            "options": [
              "tidak ada error",
              "mengambil tipe error tertentu",
              "mendistribusikan lalu menggabungkan hasil",
              "panic menjatuhkan server"
            ],
            "a": 2,
            "explain": "Fan-out pekerja, fan-in hasil."
          },
          {
            "type": "mc",
            "q": "Pipeline memproses data",
            "options": [
              "layanan inti tetap jalan",
              "mengurangi alokasi objek berulang",
              "import dari luar modul",
              "secara bertahap lewat channel"
            ],
            "a": 3,
            "explain": "Pipeline menyusun tahap channel."
          },
          {
            "type": "mc",
            "q": "context.Context dipakai untuk",
            "options": [
              "switch v := x.(type)",
              "deadline dan pembatalan",
              "membandingkan error target",
              "request dan status"
            ],
            "a": 1,
            "explain": "Context membawa pembatalan."
          },
          {
            "type": "mc",
            "q": "Pembatalan goroutine menghormati",
            "options": [
              "alokasi stack",
              "context",
              "db.SetMaxOpenConns",
              "komentar package"
            ],
            "a": 1,
            "explain": "Goroutine harus cek ctx.Done()."
          },
          {
            "type": "mc",
            "q": "Semaphore membatasi",
            "options": [
              "mengembalikan nilai error",
              "jumlah pekerja bersamaan",
              "modul dan dependency",
              "bound vs unbound"
            ],
            "a": 1,
            "explain": "Semaphore mengatur konkurensi."
          },
          {
            "type": "mc",
            "q": "errgroup memudahkan",
            "options": [
              "versi binary & skema kompatibel",
              "menangani error banyak goroutine",
              "keamanan tipe dan performa",
              "domain dari transport"
            ],
            "a": 1,
            "explain": "errgroup menyatukan error goroutine."
          },
          {
            "type": "mc",
            "q": "Timeout memakai",
            "options": [
              "melepas koneksi",
              "konsistensi format",
              "context.WithTimeout",
              "concurrency (goroutine)"
            ],
            "a": 2,
            "explain": "WithTimeout membatasi waktu."
          },
          {
            "type": "mc",
            "q": "Mutex vs channel",
            "options": [
              "span antar service",
              "goroutine, M, P",
              "mutex untuk state; channel untuk komunikasi",
              "reuse tanpa duplikasi"
            ],
            "a": 2,
            "explain": "Pilih sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Deadlock terjadi bila",
            "options": [
              "type Nama interface { ... }",
              "saling menunggu tanpa kemajuan",
              "if err != nil",
              "saat package diinisialisasi"
            ],
            "a": 1,
            "explain": "Deadlock menghentikan progres."
          }
        ]
      },
      {
        "id": "go-17",
        "level": "Menengah",
        "title": "JSON & HTTP",
        "exercises": [
          {
            "type": "mc",
            "q": "Encoding struct ke JSON memakai",
            "options": [
              "json.EncodeJSON",
              "json.Marshal",
              "toJSON()",
              "menyalin dependency"
            ],
            "a": 1,
            "explain": "json.Marshal menghasilkan bytes JSON."
          },
          {
            "type": "mc",
            "q": "Decoding JSON memakai",
            "options": [
              "json.Unmarshal",
              "json.DecodeJSON",
              "fromJSON()",
              "fungsi cancel"
            ],
            "a": 0,
            "explain": "json.Unmarshal mengisi struct."
          },
          {
            "type": "mc",
            "q": "Tag JSON memakai",
            "options": [
              "`json:\"nama\"`",
              "`name=\"json\"`",
              "({json})",
              "melepas resource"
            ],
            "a": 0,
            "explain": "Tag menentukan nama field JSON."
          },
          {
            "type": "mc",
            "q": "Server HTTP dibuat dengan",
            "options": [
              "http.Server.start",
              "http.ListenAndServe",
              "server.run",
              "argumen pertama"
            ],
            "a": 1,
            "explain": "ListenAndServe menjalankan server."
          },
          {
            "type": "mc",
            "q": "Handler adalah",
            "options": [
              "field comparable",
              "make(chan T)",
              "r.URL.Query().Get(...)",
              "fungsi http.HandlerFunc"
            ],
            "a": 3,
            "explain": "Handler menerima ResponseWriter dan Request."
          },
          {
            "type": "mc",
            "q": "Membaca query memakai",
            "options": [
              "r.query",
              "header origin",
              "r.URL.Query().Get(...)",
              "banyak metadata"
            ],
            "a": 2,
            "explain": "URL.Query membaca parameter."
          },
          {
            "type": "mc",
            "q": "Encoding/json mengabaikan field unexported",
            "options": [
              "tidak",
              "1.18",
              ":=",
              "ya"
            ],
            "a": 3,
            "explain": "Hanya field diekspor yang diserialisasi."
          },
          {
            "type": "mc",
            "q": "Status respons diset memakai",
            "options": [
              "w.status = code",
              "w.WriteHeader(code)",
              "memakai sinkronisasi",
              "close(ch)"
            ],
            "a": 1,
            "explain": "WriteHeader menetapkan status."
          },
          {
            "type": "mc",
            "q": "Timeout server penting untuk",
            "options": [
              "mengambil tipe error tertentu",
              "panic menjatuhkan server",
              "mencegah koneksi menggantung",
              "menunggu beberapa goroutine"
            ],
            "a": 2,
            "explain": "Timeout menjaga resource."
          },
          {
            "type": "mc",
            "q": "Membaca body memakai",
            "options": [
              "r.body.string()",
              "io.ReadAll(r.Body)",
              "non-blocking",
              "http.ListenAndServe"
            ],
            "a": 1,
            "explain": "io.ReadAll membaca body."
          }
        ]
      },
      {
        "id": "go-18",
        "level": "Menengah",
        "title": "Testing Go",
        "exercises": [
          {
            "type": "mc",
            "q": "Paket standar Go yang diimpor untuk menulis unit pengujian otomatis adalah",
            "options": [
              "assert",
              "jest",
              "testing",
              "backoff"
            ],
            "a": 2,
            "explain": "Go memakai package testing."
          },
          {
            "type": "mc",
            "q": "Test file berakhiran",
            "options": [
              "_test.js",
              ".test.go",
              "test.go",
              "_test.go"
            ],
            "a": 3,
            "explain": "Berkas test berakhiran _test.go."
          },
          {
            "type": "mc",
            "q": "Fungsi test diawali",
            "options": [
              "test",
              "Check",
              "Verify",
              "Test"
            ],
            "a": 3,
            "explain": "Fungsi test diawali Test."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "go run test",
              "test go",
              "go test",
              "go mod"
            ],
            "a": 2,
            "explain": "go test menjalankan test."
          },
          {
            "type": "mc",
            "q": "Coverage memakai",
            "options": [
              "go cover",
              "membandingkan error target",
              "go test -cover",
              "request dan status"
            ],
            "a": 2,
            "explain": "Flag -cover menampilkan cakupan."
          },
          {
            "type": "mc",
            "q": "Subtests memakai",
            "options": [
              "t.Run",
              "sub()",
              "interface{}",
              "blank import"
            ],
            "a": 0,
            "explain": "t.Run membuat subtest."
          },
          {
            "type": "mc",
            "q": "Benchmark diawali",
            "options": [
              "bench",
              "Benchmark",
              "Bench",
              "latensi"
            ],
            "a": 1,
            "explain": "Fungsi benchmark diawali Benchmark."
          },
          {
            "type": "mc",
            "q": "Table-driven tests umum di Go",
            "options": [
              "tidak",
              "ya",
              "|",
              "const"
            ],
            "a": 1,
            "explain": "Table-driven test idiomatik."
          },
          {
            "type": "mc",
            "q": "Mocking memakai interface",
            "options": [
              "pprof",
              ".go",
              "ya",
              "bool"
            ],
            "a": 2,
            "explain": "Interface memudahkan mock."
          },
          {
            "type": "mc",
            "q": "Race test memakai",
            "options": [
              "dihindari bila memungkinkan",
              "go test -race",
              "overhead per operasi",
              "var nama string"
            ],
            "a": 1,
            "explain": "Flag -race mendeteksi race."
          }
        ]
      },
      {
        "id": "go-19",
        "level": "Menengah",
        "title": "Generics",
        "exercises": [
          {
            "type": "mc",
            "q": "Generics diperkenalkan pada Go",
            "options": [
              "1.0",
              "1.18",
              "2.0",
              "import"
            ],
            "a": 1,
            "explain": "Generics tersedia sejak Go 1.18."
          },
          {
            "type": "mc",
            "q": "Type parameter diapit",
            "options": [
              "<T>",
              "(T)",
              "{T}",
              "[T any]"
            ],
            "a": 3,
            "explain": "Type parameter memakai kurung siku."
          },
          {
            "type": "mc",
            "q": "Constraint dasar any berarti",
            "options": [
              "goroutine dengan channel job",
              "tipe apa saja",
              "saling menunggu tanpa kemajuan",
              "span antar service"
            ],
            "a": 1,
            "explain": "any/interface{} menerima semua."
          },
          {
            "type": "mc",
            "q": "Constraint comparable dipakai untuk",
            "options": [
              ".proto",
              "backoff",
              "perbandingan ==",
              "alokasi/overhead"
            ],
            "a": 2,
            "explain": "comparable mendukung ==."
          },
          {
            "type": "mc",
            "q": "Fungsi generik contohnya",
            "options": [
              "func Map<T,U>()",
              "func Map[T, U any](...)",
              "mendistribusikan lalu menggabungkan hasil",
              "mencegah koneksi menggantung"
            ],
            "a": 1,
            "explain": "Fungsi generik memakai type parameter."
          },
          {
            "type": "mc",
            "q": "Type set interface memungkinkan",
            "options": [
              "os.WriteFile",
              "membatasi tipe",
              "HTTP/2 dan Protobuf",
              "crypto/tls"
            ],
            "a": 1,
            "explain": "Constraint membatasi tipe."
          },
          {
            "type": "mc",
            "q": "Generics menghindari",
            "options": [
              "duplikasi kode tipe",
              "secara bertahap lewat channel",
              "go test -cover",
              "instance tidak sehat"
            ],
            "a": 0,
            "explain": "Generics mengurangi duplikasi."
          },
          {
            "type": "mc",
            "q": "Generics berlebihan dapat",
            "options": [
              "os.ReadFile",
              "path/filepath",
              "menambah kompleksitas",
              "gorilla/websocket"
            ],
            "a": 2,
            "explain": "Gunakan bila perlu."
          },
          {
            "type": "mc",
            "q": "Inferensi tipe pada generics memungkinkan",
            "options": [
              "memanggil tanpa tipe eksplisit",
              "deadline dan pembatalan",
              "func Map[T, U any](...)",
              "layanan inti tetap jalan"
            ],
            "a": 0,
            "explain": "Tipe sering bisa diinferensi."
          },
          {
            "type": "mc",
            "q": "Generic type tidak bisa memakai method tambahan tanpa constraint",
            "options": [
              "salah",
              "benar",
              "Test",
              "os.Stdin"
            ],
            "a": 1,
            "explain": "Method harus ada pada constraint."
          }
        ]
      },
      {
        "id": "go-20",
        "level": "Menengah",
        "title": "File & IO",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca berkas memakai",
            "options": [
              "os.read",
              "os.ReadFile",
              "latensi",
              "Shutdown(context)"
            ],
            "a": 1,
            "explain": "os.ReadFile membaca seluruh berkas."
          },
          {
            "type": "mc",
            "q": "Menulis berkas memakai",
            "options": [
              "os.write",
              "cascading failure",
              "os.WriteFile",
              "operasional"
            ],
            "a": 2,
            "explain": "os.WriteFile menulis berkas."
          },
          {
            "type": "mc",
            "q": "Membuka berkas memakai",
            "options": [
              "os.get",
              "backoff",
              "alokasi/overhead",
              "os.Open"
            ],
            "a": 3,
            "explain": "os.Open membuka berkas."
          },
          {
            "type": "mc",
            "q": "defer file.Close() penting untuk",
            "options": [
              "mencegah menggantung",
              "penggunaan memori",
              "melepas resource",
              "Redis/etcd"
            ],
            "a": 2,
            "explain": "Close wajib dilepas."
          },
          {
            "type": "mc",
            "q": "bufio.Scanner dipakai untuk",
            "options": [
              "pprof",
              "membaca baris",
              "http.Server.Shutdown",
              "pengukuran"
            ],
            "a": 1,
            "explain": "Scanner membaca per baris."
          },
          {
            "type": "mc",
            "q": "Membuat direktori memakai",
            "options": [
              "os.createDir",
              "urutan kompatibel",
              "os.MkdirAll",
              "interface{}"
            ],
            "a": 2,
            "explain": "MkdirAll membuat direktori rekursif."
          },
          {
            "type": "mc",
            "q": "Memeriksa error IO wajib",
            "options": [
              "tidak",
              "int",
              "ya",
              "*p"
            ],
            "a": 2,
            "explain": "Error IO perlu diperiksa."
          },
          {
            "type": "mc",
            "q": "io.Copy dipakai untuk",
            "options": [
              "ketergantungan langsung",
              "menyalin stream",
              "prometheus client",
              "performa fungsi"
            ],
            "a": 1,
            "explain": "io.Copy menyalin aliran."
          },
          {
            "type": "mc",
            "q": "Membaca dari stdin memakai",
            "options": [
              "abstraksi DB",
              "pembatalan/timeout",
              "cara berhenti",
              "os.Stdin"
            ],
            "a": 3,
            "explain": "os.Stdin adalah input standar."
          },
          {
            "type": "mc",
            "q": "Path file memakai package",
            "options": [
              "strings.Builder",
              "path/filepath",
              "*sql.Rows",
              "kesederhanaan"
            ],
            "a": 1,
            "explain": "filepath menangani path lintas OS."
          }
        ]
      },
      {
        "id": "go-21",
        "level": "Advance",
        "title": "Networking & gRPC",
        "exercises": [
          {
            "type": "mc",
            "q": "gRPC memakai",
            "options": [
              "HTTP/2 dan Protobuf",
              "jarang disarankan",
              "func literal",
              "m[\"k\"] = v"
            ],
            "a": 0,
            "explain": "gRPC memakai HTTP/2 + protobuf."
          },
          {
            "type": "mc",
            "q": "Protobuf didefinisikan di",
            "options": [
              ".gproto",
              "error",
              "huruf kecil",
              ".proto"
            ],
            "a": 3,
            "explain": "Definisi protobuf di .proto."
          },
          {
            "type": "mc",
            "q": "Codegen gRPC memakai",
            "options": [
              "penyalinan besar",
              "v := <-ch",
              "json.Marshal",
              "protoc"
            ],
            "a": 3,
            "explain": "protoc menghasilkan kode."
          },
          {
            "type": "mc",
            "q": "HTTP client memakai",
            "options": [
              "dibatasi (pool/semaphore)",
              "net/http.Client",
              "fungsi http.HandlerFunc",
              "os.ReadFile"
            ],
            "a": 1,
            "explain": "http.Client untuk request."
          },
          {
            "type": "mc",
            "q": "Timeout client penting untuk",
            "options": [
              "http.ServeMux",
              "mencegah menggantung",
              "semua field",
              "ch <- v"
            ],
            "a": 1,
            "explain": "Timeout menjaga keandalan."
          },
          {
            "type": "mc",
            "q": "Reuse client memungkinkan",
            "options": [
              "mencatat status",
              "connection pooling",
              "ya, penting",
              "non-blocking"
            ],
            "a": 1,
            "explain": "Client dipakai ulang untuk pooling."
          },
          {
            "type": "mc",
            "q": "Websocket didukung via library",
            "options": [
              "context akar",
              "http.Handler pembungkus",
              "gorilla/websocket",
              "field comparable"
            ],
            "a": 2,
            "explain": "Library menyediakan websocket."
          },
          {
            "type": "mc",
            "q": "TLS server memakai",
            "options": [
              "crypto/tls",
              "durasi",
              "request",
              "memakai sinkronisasi"
            ],
            "a": 0,
            "explain": "crypto/tls menangani TLS."
          },
          {
            "type": "mc",
            "q": "Retry client perlu",
            "options": [
              "menambah konteks",
              "error kompilasi",
              "backoff",
              "melepas resource"
            ],
            "a": 2,
            "explain": "Backoff menghindari lonjakan."
          },
          {
            "type": "mc",
            "q": "Load balancing antar server memerlukan",
            "options": [
              "huruf kapital",
              "header origin",
              "banyak metadata",
              "resolver/health check"
            ],
            "a": 3,
            "explain": "Health check menjaga kualitas."
          }
        ]
      },
      {
        "id": "go-22",
        "level": "Advance",
        "title": "Memory & GC Tuning",
        "exercises": [
          {
            "type": "mc",
            "q": "GOGC mengatur",
            "options": [
              "_test.go",
              "target GC",
              "membatasi tipe",
              "menyalin stream"
            ],
            "a": 1,
            "explain": "GOGC menyesuaikan frekuensi GC."
          },
          {
            "type": "mc",
            "q": "memory limit runtime membatasi",
            "options": [
              "penggunaan memori",
              "r.URL.Query().Get(...)",
              "Benchmark",
              "os.WriteFile"
            ],
            "a": 0,
            "explain": "Memory limit mengatur batas."
          },
          {
            "type": "mc",
            "q": "Objek besar berdampak pada",
            "options": [
              "\"\"",
              "GC",
              "ya",
              "nil"
            ],
            "a": 1,
            "explain": "Objek besar menambah beban GC."
          },
          {
            "type": "mc",
            "q": "Mengurangi pointer density membantu",
            "options": [
              "GC",
              "1.18",
              ":=",
              "array"
            ],
            "a": 0,
            "explain": "Pointer density memengaruhi GC."
          },
          {
            "type": "mc",
            "q": "Free memory tidak langsung kembali OS selalu",
            "options": [
              "salah",
              "path/filepath",
              "abstraksi DB",
              "benar"
            ],
            "a": 3,
            "explain": "Runtime dapat menahan memori."
          },
          {
            "type": "mc",
            "q": "pprof heap membantu",
            "options": [
              "membaca baris",
              "resolver/health check",
              "latensi",
              "menganalisis memori"
            ],
            "a": 3,
            "explain": "Heap profile menganalisis memori."
          },
          {
            "type": "mc",
            "q": "Allocation profiling menemukan",
            "options": [
              "alokasi berlebihan",
              "crypto/tls",
              "GOOS/GOARCH",
              "urutan kompatibel"
            ],
            "a": 0,
            "explain": "Profile menemukan alokasi."
          },
          {
            "type": "mc",
            "q": "Batching mengurangi",
            "options": [
              "alokasi/overhead",
              "net/http.Client",
              "target GC",
              "retry aman"
            ],
            "a": 0,
            "explain": "Batch mengurangi overhead."
          },
          {
            "type": "mc",
            "q": "Mengukur sebelum tuning",
            "options": [
              "tidak perlu",
              "make(chan T)",
              "context",
              "wajib"
            ],
            "a": 3,
            "explain": "Ukur sebelum optimasi."
          },
          {
            "type": "mc",
            "q": "GC pause singkat membantu",
            "options": [
              "latensi",
              "benar",
              "header origin",
              "banyak metadata"
            ],
            "a": 0,
            "explain": "Pause singkat menjaga latensi."
          }
        ]
      },
      {
        "id": "go-23",
        "level": "Advance",
        "title": "Distributed Systems",
        "exercises": [
          {
            "type": "mc",
            "q": "Idempotensi penting untuk",
            "options": [
              "r.URL.Query().Get(...)",
              "Benchmark",
              "retry aman",
              "os.WriteFile"
            ],
            "a": 2,
            "explain": "Retry memerlukan idempotensi."
          },
          {
            "type": "mc",
            "q": "Distributed lock memakai",
            "options": [
              "_test.go",
              "Redis/etcd",
              "membatasi tipe",
              "menyalin stream"
            ],
            "a": 1,
            "explain": "Lock terdistribusi perlu store bersama."
          },
          {
            "type": "mc",
            "q": "Circuit breaker mencegah",
            "options": [
              "os.Open",
              ".proto",
              "backoff",
              "cascading failure"
            ],
            "a": 3,
            "explain": "Circuit breaker menghentikan gagal berantai."
          },
          {
            "type": "mc",
            "q": "Retry dengan jitter membantu",
            "options": [
              "struktur data sekali pakai",
              "menghindari thundering herd",
              "akses bersamaan tanpa sinkronisasi",
              "goroutine dengan channel job"
            ],
            "a": 1,
            "explain": "Jitter menyebar retry."
          },
          {
            "type": "mc",
            "q": "Timeout antar layanan wajib",
            "options": [
              "tidak",
              "Test",
              "ya",
              "GC"
            ],
            "a": 2,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Tracing terdistribusi menghubungkan",
            "options": [
              "dari package lain",
              "span antar service",
              "tidak pernah selesai",
              "deadline dan pembatalan"
            ],
            "a": 1,
            "explain": "Tracing melacak request lintas layanan."
          },
          {
            "type": "mc",
            "q": "Message queue memutus",
            "options": [
              "fungsi http.HandlerFunc",
              "os.ReadFile",
              "ketergantungan langsung",
              "path/filepath"
            ],
            "a": 2,
            "explain": "Queue memisahkan pengirim/penerima."
          },
          {
            "type": "mc",
            "q": "Exactly-once sangat sulit; umumnya",
            "options": [
              "at-least-once + idempoten",
              "jika disimpan sebagai value di map",
              "go test -race",
              "secara bertahap lewat channel"
            ],
            "a": 0,
            "explain": "Praktik umum at-least-once."
          },
          {
            "type": "mc",
            "q": "Health check membantu deteksi",
            "options": [
              "pendek dan jelas",
              "hanya case pertama cocok (tanpa fallthrough default)",
              "mewarisi field/method via komposisi",
              "instance tidak sehat"
            ],
            "a": 3,
            "explain": "Health check menjaga ketersediaan."
          },
          {
            "type": "mc",
            "q": "Graceful degradation menjaga",
            "options": [
              "unit eksekusi ringan",
              "menunggu beberapa operasi channel",
              "menangani error banyak goroutine",
              "layanan inti tetap jalan"
            ],
            "a": 3,
            "explain": "Degradasi menjaga fungsi inti."
          }
        ]
      },
      {
        "id": "go-24",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Binary Go mudah dideploy karena",
            "options": [
              "unit eksekusi ringan",
              "statis dan mandiri",
              "menunggu beberapa operasi channel",
              "menangani error banyak goroutine"
            ],
            "a": 1,
            "explain": "Binary statis tanpa runtime."
          },
          {
            "type": "mc",
            "q": "Cross-compile memakai",
            "options": [
              "GOOS/GOARCH",
              "w.WriteHeader(code)",
              "1.18",
              "os.Open"
            ],
            "a": 0,
            "explain": "Env GOOS/GOARCH mengatur target."
          },
          {
            "type": "mc",
            "q": "Docker image Go bisa sangat kecil dengan",
            "options": [
              "`json:\"nama\"`",
              "_test.go",
              "membatasi tipe",
              "multi-stage build"
            ],
            "a": 3,
            "explain": "Multi-stage mengurangi ukuran."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown memakai",
            "options": [
              "context",
              "Shutdown(context)",
              "r.URL.Query().Get(...)",
              "Benchmark"
            ],
            "a": 1,
            "explain": "Shutdown menuntaskan request."
          },
          {
            "type": "mc",
            "q": "Signal handling memakai",
            "options": [
              "make(chan T, n)",
              "json.Unmarshal",
              "testing",
              "os/signal"
            ],
            "a": 3,
            "explain": "os/signal menangani sinyal."
          },
          {
            "type": "mc",
            "q": "Config via environment memudahkan",
            "options": [
              "dibatasi (pool/semaphore)",
              "panic",
              "fungsi http.HandlerFunc",
              "deployment"
            ],
            "a": 3,
            "explain": "Env memisahkan konfigurasi."
          },
          {
            "type": "mc",
            "q": "Logging terstruktur membantu",
            "options": [
              "penyalinan besar",
              "v := <-ch",
              "operasional",
              "json.Marshal"
            ],
            "a": 2,
            "explain": "Log terstruktur memudahkan analisis."
          },
          {
            "type": "mc",
            "q": "Metrics endpoint memakai",
            "options": [
              "mencatat status",
              "prometheus client",
              "ya, penting",
              "non-blocking"
            ],
            "a": 1,
            "explain": "Client prometheus menyediakan metrics."
          },
          {
            "type": "mc",
            "q": "Migration DB saat deploy perlu",
            "options": [
              "http.ServeMux",
              "semua field",
              "ch <- v",
              "urutan kompatibel"
            ],
            "a": 3,
            "explain": "Migrasi bertahap menjaga uptime."
          },
          {
            "type": "mc",
            "q": "Rollback memerlukan",
            "options": [
              "compiled dan statically typed",
              "versi binary & skema kompatibel",
              "dapat disimpan di variabel",
              "view atas array dengan len dan cap"
            ],
            "a": 1,
            "explain": "Rollback butuh kompatibilitas."
          }
        ]
      },
      {
        "id": "go-25",
        "level": "Advance",
        "title": "Runtime & Scheduler",
        "exercises": [
          {
            "type": "mc",
            "q": "Goroutine dijadwalkan oleh",
            "options": [
              "tipe apa saja",
              "memulihkan dari panic",
              "runtime scheduler Go",
              "fungsi yang menerima dan mengembalikan Handler"
            ],
            "a": 2,
            "explain": "Scheduler mengelola goroutine."
          },
          {
            "type": "mc",
            "q": "GOMAXPROCS mengatur",
            "options": [
              "jumlah P/prosesor logis",
              "alokasi stack",
              "db.SetMaxOpenConns",
              "komentar package"
            ],
            "a": 0,
            "explain": "GOMAXPROCS menentukan paralelisme."
          },
          {
            "type": "mc",
            "q": "Model GMP terdiri dari",
            "options": [
              "goroutine, M, P",
              "switch v := x.(type)",
              "membandingkan error target",
              "request dan status"
            ],
            "a": 0,
            "explain": "Scheduler memakai G, M, P."
          },
          {
            "type": "mc",
            "q": "Preemption memungkinkan",
            "options": [
              "instance tidak sehat",
              "alokasi stack vs heap",
              "goroutine dihentikan sementara",
              "cmd, internal, pkg"
            ],
            "a": 2,
            "explain": "Preemption menjaga keadilan."
          },
          {
            "type": "mc",
            "q": "Garbage collector Go adalah",
            "options": [
              "konsistensi format",
              "concurrency (goroutine)",
              "func nama() {}",
              "concurrent mark-sweep"
            ],
            "a": 3,
            "explain": "GC Go berjalan concurrent."
          },
          {
            "type": "mc",
            "q": "Menurunkan alokasi membantu",
            "options": [
              "gofmt",
              "panic",
              "t.Run",
              "GC"
            ],
            "a": 3,
            "explain": "Alokasi lebih sedikit = GC lebih ringan."
          },
          {
            "type": "mc",
            "q": "Escape analysis menentukan",
            "options": [
              "mengimplementasikan semua method",
              "alokasi stack vs heap",
              "kondisi tak terpulihkan",
              "channel sinyal selesai"
            ],
            "a": 1,
            "explain": "Escape analysis menentukan lokasi alokasi."
          },
          {
            "type": "mc",
            "q": "sync.Pool dipakai untuk",
            "options": [
              "span antar service",
              "mengurangi alokasi objek berulang",
              "goroutine, M, P",
              "reuse tanpa duplikasi"
            ],
            "a": 1,
            "explain": "sync.Pool memakai ulang objek."
          },
          {
            "type": "mc",
            "q": "Goroutine stack bersifat",
            "options": [
              "tetap besar",
              "penggunaan memori",
              "Redis/etcd",
              "tumbuh dinamis"
            ],
            "a": 3,
            "explain": "Stack goroutine tumbuh sesuai kebutuhan."
          },
          {
            "type": "mc",
            "q": "Profil CPU/memori tersedia via",
            "options": [
              "akses data",
              "pprof",
              "SQL injection",
              "pemakai"
            ],
            "a": 1,
            "explain": "pprof menyediakan profil."
          }
        ]
      },
      {
        "id": "go-26",
        "level": "Advance",
        "title": "Reflection & Generics Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Package reflect memungkinkan",
            "options": [
              "goroutine dihentikan sementara",
              "dihindari bila memungkinkan",
              "overhead per operasi",
              "introspeksi tipe saat runtime"
            ],
            "a": 3,
            "explain": "reflect memeriksa tipe runtime."
          },
          {
            "type": "mc",
            "q": "reflect.TypeOf mengembalikan",
            "options": [
              "tipe dinamis",
              "menambah konteks",
              "error kompilasi",
              "melepas resource"
            ],
            "a": 0,
            "explain": "TypeOf memberi tipe."
          },
          {
            "type": "mc",
            "q": "Reflection mengorbankan",
            "options": [
              "goroutine, M, P",
              "reuse tanpa duplikasi",
              "keamanan tipe dan performa",
              "GC dan kecepatan"
            ],
            "a": 2,
            "explain": "Reflection lebih lambat/rawan."
          },
          {
            "type": "mc",
            "q": "Struct tag dibaca via reflect",
            "options": [
              "tidak",
              "gofmt",
              "ya",
              "panic"
            ],
            "a": 2,
            "explain": "Tag dibaca lewat reflection."
          },
          {
            "type": "mc",
            "q": "Constraint union memakai",
            "options": [
              "&",
              "+",
              "|",
              "*"
            ],
            "a": 2,
            "explain": "Union memakai |."
          },
          {
            "type": "mc",
            "q": "Constraint ~T berarti",
            "options": [
              "tipe dengan underlying T",
              "mengambil tipe error tertentu",
              "panic menjatuhkan server",
              "menunggu beberapa goroutine"
            ],
            "a": 0,
            "explain": "~ mencakup tipe turunan underlying."
          },
          {
            "type": "mc",
            "q": "Generic di kumpulan data memudahkan",
            "options": [
              "alokasi stack vs heap",
              "cmd, internal, pkg",
              "reuse tanpa duplikasi",
              "performa dan keamanan"
            ],
            "a": 2,
            "explain": "Generics memangkas duplikasi."
          },
          {
            "type": "mc",
            "q": "Reflection berlebihan sebaiknya",
            "options": [
              "membandingkan error target",
              "request dan status",
              "dihindari bila memungkinkan",
              "unit eksekusi ringan"
            ],
            "a": 2,
            "explain": "Gunakan generics/interfaces bila bisa."
          },
          {
            "type": "mc",
            "q": "any adalah alias dari",
            "options": [
              "string",
              "int",
              "interface{}",
              "context"
            ],
            "a": 2,
            "explain": "any = interface{}."
          },
          {
            "type": "mc",
            "q": "Interface constraint dapat memuat method",
            "options": [
              "tidak",
              "int",
              "ya",
              "wajib"
            ],
            "a": 2,
            "explain": "Constraint dapat mewajibkan method."
          }
        ]
      },
      {
        "id": "go-27",
        "level": "Advance",
        "title": "Arsitektur Aplikasi Go",
        "exercises": [
          {
            "type": "mc",
            "q": "Layout proyek umum memisahkan",
            "options": [
              "diawali huruf kapital",
              "cmd, internal, pkg",
              "mengimplementasikan semua method",
              "kondisi tak terpulihkan"
            ],
            "a": 1,
            "explain": "Struktur standar Go memisahkan peran."
          },
          {
            "type": "mc",
            "q": "internal/ mencegah",
            "options": [
              "import dari luar modul",
              "saling menunggu tanpa kemajuan",
              "span antar service",
              "goroutine, M, P"
            ],
            "a": 0,
            "explain": "internal membatasi import eksternal."
          },
          {
            "type": "mc",
            "q": "Dependency injection sering memakai",
            "options": [
              "nilai default semua field",
              "type Nama interface { ... }",
              "constructor dan interface",
              "if err != nil"
            ],
            "a": 2,
            "explain": "DI via constructor/interface."
          },
          {
            "type": "mc",
            "q": "Repository pattern memisahkan",
            "options": [
              "akses data",
              "durasi",
              "request",
              "memakai sinkronisasi"
            ],
            "a": 0,
            "explain": "Repository mengabstraksi data."
          },
          {
            "type": "mc",
            "q": "Service layer menampung",
            "options": [
              "http.ServeMux",
              "logika bisnis",
              "semua field",
              "ch <- v"
            ],
            "a": 1,
            "explain": "Service menampung aturan bisnis."
          },
          {
            "type": "mc",
            "q": "Clean architecture mengisolasi",
            "options": [
              "domain dari transport",
              "menangani error banyak goroutine",
              "memanggil tanpa tipe eksplisit",
              "versi binary & skema kompatibel"
            ],
            "a": 0,
            "explain": "Domain terpisah dari detail."
          },
          {
            "type": "mc",
            "q": "Interface kecil lebih idiomatik",
            "options": [
              "tidak",
              "&x",
              "main",
              "ya"
            ],
            "a": 3,
            "explain": "Interface kecil lebih mudah dipakai."
          },
          {
            "type": "mc",
            "q": "Konfigurasi memakai",
            "options": [
              "panic",
              "t.Run",
              "os.ReadFile",
              "env/flag"
            ],
            "a": 3,
            "explain": "Env/flag mengatur konfigurasi."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown memakai",
            "options": [
              "http.Server.Shutdown",
              "func nama() {}",
              "Nama{...}",
              "delete(m, k)"
            ],
            "a": 0,
            "explain": "Shutdown menuntaskan request."
          },
          {
            "type": "mc",
            "q": "Observability memakai",
            "options": [
              "logging, metrics, tracing",
              "duplikasi kode tipe",
              "statis dan mandiri",
              "introspeksi tipe saat runtime"
            ],
            "a": 0,
            "explain": "Observability tiga pilar."
          }
        ]
      },
      {
        "id": "go-28",
        "level": "Advance",
        "title": "Performance & Optimasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Profiling memakai package",
            "options": [
              "net/http/pprof & runtime/pprof",
              "errors.New(\"...\")",
              "membersihkan dependency",
              "memakai sinkronisasi"
            ],
            "a": 0,
            "explain": "pprof untuk profil."
          },
          {
            "type": "mc",
            "q": "Benchmark mengukur",
            "options": [
              "performa fungsi",
              "copy(dst, src)",
              "v.(Tipe)",
              "package nama"
            ],
            "a": 0,
            "explain": "Benchmark mengukur operasi."
          },
          {
            "type": "mc",
            "q": "Menghindari alokasi di loop membantu",
            "options": [
              "performa dan keamanan",
              "if kondisi { }",
              "GC dan kecepatan",
              "func (r Receiver) Nama()"
            ],
            "a": 2,
            "explain": "Alokasi lebih sedikit lebih cepat."
          },
          {
            "type": "mc",
            "q": "Preallocate slice memakai",
            "options": [
              "make([]T)",
              "[]Nama{...}",
              "make([]T, 0, n)",
              "make([]int, 0, 10)"
            ],
            "a": 2,
            "explain": "Kapasitas awal mengurangi realloc."
          },
          {
            "type": "mc",
            "q": "sync.Pool membantu",
            "options": [
              "error kompilasi",
              "mengurangi alokasi",
              "melepas resource",
              "komposisi method"
            ],
            "a": 1,
            "explain": "Pool memakai ulang objek."
          },
          {
            "type": "mc",
            "q": "String concatenation di loop sebaiknya",
            "options": [
              "modul/package",
              "argumen pertama",
              "penyalinan besar",
              "strings.Builder"
            ],
            "a": 3,
            "explain": "Builder lebih efisien."
          },
          {
            "type": "mc",
            "q": "Mutex contention mengurangi",
            "options": [
              "menyembunyikan masalah",
              "menyalin dependency",
              "metadata request",
              "throughput"
            ],
            "a": 3,
            "explain": "Kontensi mengunci lebih lama."
          },
          {
            "type": "mc",
            "q": "Batching mengurangi",
            "options": [
              "dari package lain",
              "tidak pernah selesai",
              "deadline dan pembatalan",
              "overhead per operasi"
            ],
            "a": 3,
            "explain": "Batch mengurangi overhead."
          },
          {
            "type": "mc",
            "q": "Optimasi berbasis",
            "options": [
              "array",
              "break/continue loop luar",
              "pengukuran",
              "...tipe"
            ],
            "a": 2,
            "explain": "Ukur sebelum optimasi."
          },
          {
            "type": "mc",
            "q": "Escape analysis membantu",
            "options": [
              "return",
              "alokasi stack",
              "(r *Tipe)",
              "append(s, x)"
            ],
            "a": 1,
            "explain": "Hindari escape agar stack dipakai."
          }
        ]
      },
      {
        "id": "go-29",
        "level": "Advance",
        "title": "Database & SQL",
        "exercises": [
          {
            "type": "mc",
            "q": "Package database/sql menyediakan",
            "options": [
              "abstraksi DB",
              "r.URL.Query().Get(...)",
              "Benchmark",
              "os.WriteFile"
            ],
            "a": 0,
            "explain": "database/sql menyediakan interface DB."
          },
          {
            "type": "mc",
            "q": "Driver DB diimpor secara",
            "options": [
              "blank import",
              "_test.go",
              "membatasi tipe",
              "menyalin stream"
            ],
            "a": 0,
            "explain": "Blank import mendaftarkan driver."
          },
          {
            "type": "mc",
            "q": "Query berparameter mencegah",
            "options": [
              "SQL injection",
              "panic",
              "fungsi http.HandlerFunc",
              "t.Run"
            ],
            "a": 0,
            "explain": "Parameter memisahkan data."
          },
          {
            "type": "mc",
            "q": "db.Query mengembalikan",
            "options": [
              "json.Unmarshal",
              "testing",
              "*sql.Rows",
              "perbandingan =="
            ],
            "a": 2,
            "explain": "Query mengembalikan rows."
          },
          {
            "type": "mc",
            "q": "Menutup rows penting untuk",
            "options": [
              "ya, penting",
              "non-blocking",
              "melepas koneksi",
              "http.ListenAndServe"
            ],
            "a": 2,
            "explain": "Rows perlu ditutup."
          },
          {
            "type": "mc",
            "q": "Transaksi memakai",
            "options": [
              "v := <-ch",
              "json.Marshal",
              "io.ReadAll(r.Body)",
              "db.Begin"
            ],
            "a": 3,
            "explain": "Begin memulai transaksi."
          },
          {
            "type": "mc",
            "q": "Prepared statement membantu",
            "options": [
              "index dan nilai",
              "nilai default semua field",
              "type Nama interface { ... }",
              "performa dan keamanan"
            ],
            "a": 3,
            "explain": "Prepared statement efisien dan aman."
          },
          {
            "type": "mc",
            "q": "Connection pool diatur via",
            "options": [
              "semua field",
              "db.SetMaxOpenConns",
              "ch <- v",
              "context.WithTimeout"
            ],
            "a": 1,
            "explain": "SetMaxOpenConns membatasi pool."
          },
          {
            "type": "mc",
            "q": "context pada query memungkinkan",
            "options": [
              "penggunaan memori",
              "Redis/etcd",
              "pembatalan/timeout",
              "deployment"
            ],
            "a": 2,
            "explain": "Context membatalkan query."
          },
          {
            "type": "mc",
            "q": "Menghindari N+1 memakai",
            "options": [
              "alokasi/overhead",
              "multi-stage build",
              "jumlah P/prosesor logis",
              "join/query batch"
            ],
            "a": 3,
            "explain": "Batch mengurangi query."
          }
        ]
      },
      {
        "id": "go-30",
        "level": "Advance",
        "title": "Best Practice Go",
        "exercises": [
          {
            "type": "mc",
            "q": "Error harus menambah konteks memakai",
            "options": [
              "db.Begin",
              "fmt.Errorf dengan %w",
              "potensi bug",
              "(r *Tipe)"
            ],
            "a": 1,
            "explain": "Wrapping menambah konteks."
          },
          {
            "type": "mc",
            "q": "Interface didefinisikan di sisi",
            "options": [
              "Goroutine",
              "array",
              "...tipe",
              "pemakai"
            ],
            "a": 3,
            "explain": "Idiom: interface di pemakai."
          },
          {
            "type": "mc",
            "q": "Nama package sebaiknya",
            "options": [
              "pendek dan jelas",
              "saat package diinisialisasi",
              "jika disimpan sebagai value di map",
              "go test -race"
            ],
            "a": 0,
            "explain": "Nama package ringkas."
          },
          {
            "type": "mc",
            "q": "Menghindari panic untuk error normal",
            "options": [
              "benar",
              "salah",
              "Google",
              "string"
            ],
            "a": 0,
            "explain": "panic untuk kondisi tak terpulihkan."
          },
          {
            "type": "mc",
            "q": "Go proverbs menekankan",
            "options": [
              "import",
              "const",
              "kesederhanaan",
              "loop/switch"
            ],
            "a": 2,
            "explain": "Kesederhanaan idiomatik di Go."
          },
          {
            "type": "mc",
            "q": "gofmt/goimports menjaga",
            "options": [
              "func nama() {}",
              "Nama{...}",
              "delete(m, k)",
              "konsistensi format"
            ],
            "a": 3,
            "explain": "Formatter menyeragamkan."
          },
          {
            "type": "mc",
            "q": "go vet memeriksa",
            "options": [
              "potensi bug",
              "strconv.Itoa",
              "iterasi berikutnya",
              "nama tipe"
            ],
            "a": 0,
            "explain": "go vet menemukan masalah."
          },
          {
            "type": "mc",
            "q": "Dokumentasi package diawali",
            "options": [
              "return",
              "(r *Tipe)",
              "append(s, x)",
              "komentar package"
            ],
            "a": 3,
            "explain": "Komentar package untuk dokumentasi."
          },
          {
            "type": "mc",
            "q": "Goroutine harus punya",
            "options": [
              "GOOS/GOARCH",
              "urutan kompatibel",
              "cara berhenti",
              "interface{}"
            ],
            "a": 2,
            "explain": "Hindari goroutine bocor."
          },
          {
            "type": "mc",
            "q": "Mengembalikan interface vs struct: umumkan",
            "options": [
              "struct konkret",
              "deployment",
              "pprof",
              "http.Server.Shutdown"
            ],
            "a": 0,
            "explain": "Biasakan mengembalikan tipe konkret."
          }
        ]
      },
      {
        "id": "go-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Go",
        "exercises": [
          {
            "type": "mc",
            "q": "Unit concurrency ringan yang dijalankan dengan kata kunci `go` disebut",
            "options": [
              "ThreadClass",
              "PromiseBlock",
              "Goroutine",
              "TaskNode"
            ],
            "a": 2,
            "explain": "Goroutine adalah unit eksekusi ringan yang dikelola runtime Go."
          },
          {
            "type": "mc",
            "q": "Channel Go terutama digunakan untuk",
            "options": [
              "Menyimpan style halaman",
              "Mengirim nilai dan berkoordinasi antar goroutine",
              "Mengganti fungsi menjadi class",
              "Membuat tabel SQL"
            ],
            "a": 1,
            "explain": "Channel memungkinkan goroutine berkomunikasi dan menyinkronkan pekerjaan."
          },
          {
            "type": "mc",
            "q": "Pola penanganan error Go yang umum adalah",
            "options": [
              "Mengabaikan semua error",
              "Mengembalikan nilai error dan memeriksanya",
              "Mengandalkan exception tersembunyi",
              "Mengubah error menjadi komentar"
            ],
            "a": 1,
            "explain": "Go biasanya mengembalikan error sebagai nilai agar pemanggil menanganinya."
          },
          {
            "type": "mc",
            "q": "`context.Context` pada handler Go dapat membawa",
            "options": [
              "Deadline dan sinyal pembatalan",
              "Warna CSS",
              "Data tanpa batas waktu",
              "Route browser"
            ],
            "a": 0,
            "explain": "Context meneruskan deadline dan pembatalan sepanjang operasi request."
          },
          {
            "type": "fill",
            "q": "Lengkapi perintah test dengan deteksi race:",
            "code": "go test ___",
            "accept": [
              "-race",
              "--race"
            ],
            "explain": "Flag -race mendeteksi data race."
          }
        ]
      }
    ]
  }
];

export { CONTENT_GO };
