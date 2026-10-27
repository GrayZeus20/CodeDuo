/* CodeDuo — blok konten: topik "React" (dipisah dari Blok Web).
 * 1 topik (react) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_REACT = [
{
    "id": "react",
    "name": "React",
    "icon": "⚛️",
    "color": "#61dafb",
    "desc": "Library UI berbasis komponen",
    "lessons": [
      {
        "id": "react-1",
        "level": "Dasar",
        "title": "Komponen & JSX",
        "exercises": [
          {
            "type": "mc",
            "q": "Komponen fungsional React pada dasarnya adalah",
            "options": [
              "fungsi JavaScript yang mengembalikan JSX",
              "file CSS bernama PascalCase",
              "tabel database",
              "skrip shell build"
            ],
            "a": 0,
            "explain": "Komponen fungsional adalah fungsi JS yang mengembalikan elemen JSX."
          },
          {
            "type": "mc",
            "q": "JSX memungkinkan penulisan",
            "options": [
              "SQL di dalam komponen",
              "CSS global saja",
              "markup mirip HTML di dalam JavaScript",
              "route server tanpa render"
            ],
            "a": 2,
            "explain": "JSX dikompilasi menjadi pemanggilan fungsi elemen React."
          },
          {
            "type": "mc",
            "q": "Konvensi penamaan komponen React adalah",
            "options": [
              "camelCase",
              "kebab-case",
              "PascalCase",
              "SCREAMING_SNAKE"
            ],
            "a": 2,
            "explain": "Nama komponen diawali huruf kapital agar dikenali React sebagai komponen."
          },
          {
            "type": "mc",
            "q": "Satu komponen React harus mengembalikan",
            "options": [
              "satu elemen root (atau Fragment)",
              "tepat dua elemen root",
              "tanpa elemen",
              "hanya string"
            ],
            "a": 0,
            "explain": "JSX perlu satu root; Fragment dipakai untuk beberapa elemen bersaudara."
          },
          {
            "type": "mc",
            "q": "Fragment ditulis dengan sintaks",
            "options": [
              "<div-fragment>...</div-fragment>",
              "<frag>...</frag>",
              "<>...</>",
              "<root>...</root>"
            ],
            "a": 2,
            "explain": "Fragment mengelompokkan elemen tanpa menambah node DOM."
          },
          {
            "type": "mc",
            "q": "Menyisipkan ekspresi JavaScript di JSX memakai",
            "options": [
              "<% %>",
              "{ }",
              "${ }",
              "( )"
            ],
            "a": 1,
            "explain": "Kurung kurawal menyisipkan ekspresi di dalam JSX."
          },
          {
            "type": "mc",
            "q": "Atribut class di JSX ditulis sebagai",
            "options": [
              "class",
              "classList",
              "cssClass",
              "className"
            ],
            "a": 3,
            "explain": "JSX memakai className karena class adalah kata kunci JavaScript."
          },
          {
            "type": "mc",
            "q": "Menulis komentar di dalam JSX memakai",
            "options": [
              "{/* komentar */}",
              "// komentar",
              "<!-- komentar -->",
              "# komentar"
            ],
            "a": 0,
            "explain": "Komentar di dalam JSX dibungkus kurung kurawal dan /* */."
          },
          {
            "type": "mc",
            "q": "Atribut style pada JSX menerima",
            "options": [
              "string CSS panjang",
              "array string",
              "objek JavaScript",
              "nama kelas"
            ],
            "a": 2,
            "explain": "style menerima objek dengan properti camelCase."
          },
          {
            "type": "mc",
            "q": "Mengekspor komponen agar bisa diimpor memakai",
            "options": [
              "export default atau export named",
              "module.send",
              "public export",
              "exportFile"
            ],
            "a": 0,
            "explain": "ES module export dipakai untuk membagikan komponen."
          }
        ]
      },
      {
        "id": "react-2",
        "level": "Dasar",
        "title": "Props & Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Komponen anak menerima data dari induk melalui",
            "options": [
              "variabel global",
              "database",
              "nama berkas",
              "props"
            ],
            "a": 3,
            "explain": "Props dikirim induk sebagai atribut JSX."
          },
          {
            "type": "mc",
            "q": "Props sebaiknya diperlakukan sebagai",
            "options": [
              "input yang dibaca, bukan dimutasi",
              "state global bebas diubah",
              "penyimpanan permanen",
              "pengganti event handler"
            ],
            "a": 0,
            "explain": "Memutasi props melanggar alur data satu arah."
          },
          {
            "type": "mc",
            "q": "Memberi nilai default props pada komponen fungsional sering memakai",
            "options": [
              "global var",
              "localStorage",
              "parameter default atau defaultProps",
              "constructor"
            ],
            "a": 2,
            "explain": "Default parameter memberi nilai saat prop undefined."
          },
          {
            "type": "mc",
            "q": "Mengirim fungsi dari induk ke anak berguna untuk",
            "options": [
              "menghapus props lain",
              "meminta anak melaporkan kejadian ke induk",
              "menulis CSS",
              "membuat route"
            ],
            "a": 1,
            "explain": "Callback prop memungkinkan anak memberi tahu induk tentang kejadian."
          },
          {
            "type": "mc",
            "q": "`children` adalah prop khusus yang berisi",
            "options": [
              "nama komponen",
              "state induk",
              "route aktif",
              "konten di antara tag pembuka dan penutup komponen"
            ],
            "a": 3,
            "explain": "children memungkinkan komponen membungkus konten."
          },
          {
            "type": "mc",
            "q": "Untuk merender daftar di React dipakai",
            "options": [
              "array.join()",
              "for loop di JSX",
              "array.toString()",
              "array.map()"
            ],
            "a": 3,
            "explain": "map mengubah array data menjadi array elemen JSX."
          },
          {
            "type": "mc",
            "q": "Setiap item daftar React sebaiknya memiliki",
            "options": [
              "key yang stabil",
              "index sebagai satu-satunya pilihan",
              "class unik acak",
              "id global"
            ],
            "a": 0,
            "explain": "Key stabil membantu React mencocokkan item saat daftar berubah."
          },
          {
            "type": "mc",
            "q": "Memakai index array sebagai key berisiko ketika",
            "options": [
              "daftar statis selamanya",
              "urutan item berubah atau item disisipkan",
              "daftar kosong",
              "item tidak berubah"
            ],
            "a": 1,
            "explain": "Index key menyebabkan salah cocok saat urutan berubah."
          },
          {
            "type": "mc",
            "q": "Komponen yang tidak punya state disebut",
            "options": [
              "stateless (dumb/presentational) component",
              "stateful",
              "class component wajib",
              "route component"
            ],
            "a": 0,
            "explain": "Komponen presentational hanya menerima props dan merender UI."
          },
          {
            "type": "mc",
            "q": "Mengecek tipe props saat pengembangan bisa memakai",
            "options": [
              "CSS validasi",
              "PropTypes",
              "migration",
              "env"
            ],
            "a": 1,
            "explain": "PropTypes membantu menangkap tipe props yang salah saat pengembangan."
          }
        ]
      },
      {
        "id": "react-3",
        "level": "Dasar",
        "title": "State dengan useState",
        "exercises": [
          {
            "type": "mc",
            "q": "Hook untuk menyimpan state lokal adalah",
            "options": [
              "useStore",
              "useState",
              "useValue",
              "useData"
            ],
            "a": 1,
            "explain": "useState memberi nilai state dan setter-nya."
          },
          {
            "type": "mc",
            "q": "useState mengembalikan",
            "options": [
              "objek {value, set}",
              "array [nilai, setter]",
              "fungsi setter saja",
              "Promise"
            ],
            "a": 1,
            "explain": "useState mengembalikan pasangan nilai state dan fungsi pembaru."
          },
          {
            "type": "mc",
            "q": "Memperbarui state dengan setter akan",
            "options": [
              "menulis ke database",
              "memicu render ulang komponen",
              "me-reload halaman",
              "mengubah props"
            ],
            "a": 1,
            "explain": "Mengubah state memicu React merender ulang komponen."
          },
          {
            "type": "mc",
            "q": "Mengubah state array sebaiknya dilakukan dengan",
            "options": [
              "push langsung ke state",
              "membuat array baru, bukan memutasi",
              "menghapus setter",
              "mengubah DOM manual"
            ],
            "a": 1,
            "explain": "Pembaruan immutable memudahkan React mendeteksi perubahan."
          },
          {
            "type": "mc",
            "q": "Menambah item ke state array memakai",
            "options": [
              "items.push(baru)",
              "setItems(items.push(baru))",
              "items.append(baru)",
              "setItems([...items, baru])"
            ],
            "a": 3,
            "explain": "Spread membuat array baru berisi item lama dan baru."
          },
          {
            "type": "mc",
            "q": "Memperbarui state berdasarkan nilai sebelumnya memakai",
            "options": [
              "setCount(count + 1) selalu aman",
              "count += 1",
              "setCount(prev => prev + 1)",
              "setCount = count + 1"
            ],
            "a": 2,
            "explain": "Form fungsi setter memakai nilai state terbaru."
          },
          {
            "type": "mc",
            "q": "Nilai awal state ditulis sebagai argumen",
            "options": [
              "kedua useState",
              "ketiga useState",
              "pertama useState",
              "tidak bisa diisi"
            ],
            "a": 2,
            "explain": "useState(initialValue) menerima nilai awal sebagai argumen pertama."
          },
          {
            "type": "mc",
            "q": "Lazy initial state berguna untuk",
            "options": [
              "menghapus state",
              "menghitung nilai awal yang mahal hanya sekali",
              "mengubah props",
              "membuat route"
            ],
            "a": 1,
            "explain": "Fungsi initializer dijalankan sekali saat render pertama."
          },
          {
            "type": "mc",
            "q": "Menetapkan state ke null saat reset berarti",
            "options": [
              "setState(null)",
              "delete state",
              "setState(undefined) wajib",
              "state tidak bisa null"
            ],
            "a": 0,
            "explain": "null adalah nilai state yang sah untuk menandai kosong."
          },
          {
            "type": "mc",
            "q": "Mengubah objek state sebaiknya memakai",
            "options": [
              "mutasi langsung field",
              "JSON.stringify",
              "delete field",
              "spread objek lama lalu ubah field"
            ],
            "a": 3,
            "explain": "Spread membuat objek baru agar perubahan terdeteksi."
          }
        ]
      },
      {
        "id": "react-4",
        "level": "Dasar",
        "title": "Event Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "Event handler di React ditulis dengan",
            "options": [
              "lowercase, mis. onclick",
              "kebab-case",
              "camelCase, mis. onClick",
              "tanpa nama"
            ],
            "a": 2,
            "explain": "React memakai nama event camelCase seperti onClick."
          },
          {
            "type": "mc",
            "q": "Event handler menerima fungsi, bukan",
            "options": [
              "objek",
              "Promise",
              "array",
              "string kode"
            ],
            "a": 3,
            "explain": "React meneruskan referensi fungsi sebagai handler, bukan string."
          },
          {
            "type": "mc",
            "q": "Mencegah perilaku default form memakai",
            "options": [
              "event.stop()",
              "return false saja",
              "event.cancel()",
              "event.preventDefault()"
            ],
            "a": 3,
            "explain": "preventDefault mencegah submit bawaan browser."
          },
          {
            "type": "mc",
            "q": "Mengirim argumen ke event handler biasanya memakai",
            "options": [
              "string argumen",
              "event.args",
              "handler.parseInt",
              "arrow function pembungkus"
            ],
            "a": 3,
            "explain": "Arrow function memungkinkan memanggil handler dengan argumen."
          },
          {
            "type": "mc",
            "q": "Nilai input terkontrol dihubungkan melalui",
            "options": [
              "defaultValue saja",
              "ref wajib",
              "name saja",
              "value dan onChange"
            ],
            "a": 3,
            "explain": "Input terkontrol membaca value dari state dan memperbaruinya lewat onChange."
          },
          {
            "type": "mc",
            "q": "Untuk menangani submit form dipakai event",
            "options": [
              "onClick pada button saja",
              "onChange pada input",
              "onSubmit pada form",
              "onLoad"
            ],
            "a": 2,
            "explain": "onSubmit menangani pengiriman form."
          },
          {
            "type": "mc",
            "q": "`event.target.value` pada input berisi",
            "options": [
              "nama elemen",
              "id state",
              "nilai yang diketik pengguna",
              "route"
            ],
            "a": 2,
            "explain": "target.value membaca nilai input saat event terjadi."
          },
          {
            "type": "mc",
            "q": "Event handler yang tidak butuh parameter bisa ditulis",
            "options": [
              "{handleClick()}",
              "{\"handleClick\"}",
              "{() => }",
              "{handleClick}"
            ],
            "a": 3,
            "explain": "Meneruskan referensi fungsi mencegah pemanggilan saat render."
          },
          {
            "type": "mc",
            "q": "Untuk menghentikan propagasi event memakai",
            "options": [
              "event.preventDefault()",
              "event.stopPropagation()",
              "return null",
              "event.block()"
            ],
            "a": 1,
            "explain": "stopPropagation menghentikan event naik ke elemen induk."
          },
          {
            "type": "mc",
            "q": "Membuat handler di dalam render berulang dapat memengaruhi",
            "options": [
              "performa bila berlebihan; gunakan useCallback sesuai kebutuhan",
              "kebenaran JSX",
              "CSS global",
              "routing"
            ],
            "a": 0,
            "explain": "Optimasi handler dengan useCallback hanya bila terbukti perlu."
          }
        ]
      },
      {
        "id": "react-5",
        "level": "Dasar",
        "title": "Conditional Rendering",
        "exercises": [
          {
            "type": "mc",
            "q": "Merender elemen bila kondisi benar memakai",
            "options": [
              "{kondisi && <Elemen />}",
              "{kondisi ? }",
              "{if (kondisi)}",
              "{kondisi; <Elemen />}"
            ],
            "a": 0,
            "explain": "Ekspresi && merender elemen hanya bila kondisi truthy."
          },
          {
            "type": "mc",
            "q": "Memilih dua tampilan berbeda memakai",
            "options": [
              "if di dalam JSX",
              "&& ganda",
              "switch di JSX",
              "ternary kondisi ? A : B"
            ],
            "a": 3,
            "explain": "Ternary memilih salah satu elemen berdasarkan kondisi."
          },
          {
            "type": "mc",
            "q": "Merender `null` pada komponen berarti",
            "options": [
              "tidak menampilkan apa pun",
              "menampilkan teks null",
              "error render",
              "menghentikan aplikasi"
            ],
            "a": 0,
            "explain": "Mengembalikan null membuat komponen merender kosong."
          },
          {
            "type": "mc",
            "q": "Menampilkan loading lalu data biasanga memakai",
            "options": [
              "CSS animasi saja",
              "route",
              "kondisi pada state loading",
              "migration"
            ],
            "a": 2,
            "explain": "State loading menentukan apakah tampil spinner atau data."
          },
          {
            "type": "mc",
            "q": "Merender banyak elemen bersyarat sebaiknya",
            "options": [
              "mengekstrak ke komponen terpisah",
              "menulis nested ternary dalam",
              "menghindari kondisi",
              "memakai string HTML"
            ],
            "a": 0,
            "explain": "Nested ternary dalam sulit dibaca; ekstrak komponen."
          },
          {
            "type": "mc",
            "q": "Nilai 0 pada `{0 && <X/>}` akan",
            "options": [
              "merender <X/>",
              "merender teks \"0\"",
              "menghasilkan error",
              "merender null"
            ],
            "a": 1,
            "explain": "0 adalah falsy yang tetap dirender sebagai teks, jadi pakai perbandingan eksplisit bila perlu."
          },
          {
            "type": "mc",
            "q": "Untuk memeriksa array tidak kosong sebelum render pakai",
            "options": [
              "arr && ... selalu tepat",
              "arr.length",
              "arr.length > 0 && ...",
              "arr === null"
            ],
            "a": 2,
            "explain": "arr.length > 0 mencegah render teks \"0\" yang tidak diinginkan."
          },
          {
            "type": "mc",
            "q": "Prioritas ternary bersarang bisa diperjelas dengan",
            "options": [
              "kurung ganda",
              "variabel antara atau fungsi",
              "komentar saja",
              "menghapus kondisi"
            ],
            "a": 1,
            "explain": "Variabel/fungsi antara membuat logika kondisional lebih terbaca."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan elemen tanpa menghapus dari DOM memakai",
            "options": [
              "conditional return null",
              "menghapus state",
              "unmount komponen",
              "style display none atau hidden"
            ],
            "a": 3,
            "explain": "Display none menyembunyikan tetapi elemen tetap ada di DOM."
          },
          {
            "type": "mc",
            "q": "Menampilkan fallback saat data kosong berguna untuk",
            "options": [
              "memberi umpan balik ke pengguna",
              "mempercepat render",
              "menghapus state",
              "mengubah props"
            ],
            "a": 0,
            "explain": "Fallback seperti \"belum ada data\" meningkatkan pengalaman pengguna."
          }
        ]
      },
      {
        "id": "react-6",
        "level": "Dasar",
        "title": "List & Key",
        "exercises": [
          {
            "type": "mc",
            "q": "Merender array komponen memakai",
            "options": [
              "forEach yang mengembalikan",
              "filter saja",
              "reduce ke string",
              "map yang mengembalikan elemen"
            ],
            "a": 3,
            "explain": "map mengembalikan array baru elemen untuk dirender."
          },
          {
            "type": "mc",
            "q": "Key pada item daftar membantu React",
            "options": [
              "mengurutkan otomatis",
              "mencocokkan item antar render",
              "menyimpan ke database",
              "mengatur CSS"
            ],
            "a": 1,
            "explain": "Key stabil membantu rekonsiliasi daftar."
          },
          {
            "type": "mc",
            "q": "Nilai key harus",
            "options": [
              "unik di seluruh aplikasi",
              "sama untuk semua item",
              "angka selalu",
              "unik di antara saudara dalam daftar"
            ],
            "a": 3,
            "explain": "Key cukup unik di antara elemen bersaudara."
          },
          {
            "type": "mc",
            "q": "Key yang baik berasal dari",
            "options": [
              "id data yang stabil",
              "index selalu",
              "Math.random",
              "nama kelas"
            ],
            "a": 0,
            "explain": "id data stabil adalah key yang andal."
          },
          {
            "type": "mc",
            "q": "Mengapa Math.random sebagai key berbahaya",
            "options": [
              "membuat aplikasi crash",
              "menghapus state induk",
              "mengubah CSS",
              "membuat semua item dianggap baru setiap render"
            ],
            "a": 3,
            "explain": "Key acak berubah tiap render sehingga rekonsiliasi kacau."
          },
          {
            "type": "mc",
            "q": "Menambahkan dua daftar bersaudara di JSX memerlukan",
            "options": [
              "tidak ada syarat",
              "key unik bila daftar berupa array elemen",
              "Fragment tanpa key selalu",
              "route"
            ],
            "a": 1,
            "explain": "Daftar array elemen bersaudara memerlukan key."
          },
          {
            "type": "mc",
            "q": "Menghapus item dari state array memakai",
            "options": [
              "filter",
              "delete",
              "splice langsung pada state",
              "push"
            ],
            "a": 0,
            "explain": "filter menghasilkan array baru tanpa item yang dihapus."
          },
          {
            "type": "mc",
            "q": "Mengurutkan daftar tanpa memutasi state memakai",
            "options": [
              "arr.sort() langsung",
              "[...arr].sort(compare)",
              "arr.reverse()",
              "arr.splice()"
            ],
            "a": 1,
            "explain": "Salin array dulu sebelum sort agar state tidak termutasi."
          },
          {
            "type": "mc",
            "q": "Key dipakai React untuk",
            "options": [
              "membuat nama kelas",
              "menyimpan cache",
              "mengenali elemen mana yang berubah, ditambah, atau dihapus",
              "membuat route"
            ],
            "a": 2,
            "explain": "Key memberi identitas pada elemen dalam daftar."
          },
          {
            "type": "mc",
            "q": "Merender nested list memakai",
            "options": [
              "map bersarang dengan key masing-masing",
              "satu map saja",
              "innerHTML",
              "for loop"
            ],
            "a": 0,
            "explain": "Setiap level daftar memerlukan map dan key sendiri."
          }
        ]
      },
      {
        "id": "react-7",
        "level": "Dasar",
        "title": "Form Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Input terkontrol berarti nilainya diatur oleh",
            "options": [
              "DOM saja",
              "state React",
              "server",
              "CSS"
            ],
            "a": 1,
            "explain": "Input terkontrol memperoleh nilai dari state."
          },
          {
            "type": "mc",
            "q": "Input tidak terkontrol biasanya memakai",
            "options": [
              "state",
              "ref",
              "props wajib",
              "context"
            ],
            "a": 1,
            "explain": "Input tidak terkontrol menyimpan nilai di DOM dan diakses lewat ref."
          },
          {
            "type": "mc",
            "q": "Untuk input checkbox pada React dipakai prop",
            "options": [
              "value saja",
              "checked",
              "selected",
              "defaultChecked selalu"
            ],
            "a": 1,
            "explain": "checked mengikat nilai boolean checkbox ke state."
          },
          {
            "type": "mc",
            "q": "Memilih opsi pada select terkontrol memakai",
            "options": [
              "value dan onChange pada select",
              "selected pada option",
              "ref",
              "name"
            ],
            "a": 0,
            "explain": "select terkontrol memakai value dan onChange."
          },
          {
            "type": "mc",
            "q": "Untuk mencegah form reload saat submit dipakai",
            "options": [
              "return null",
              "type=\"button\"",
              "disabled",
              "event.preventDefault()"
            ],
            "a": 3,
            "explain": "preventDefault menghentikan submit bawaan."
          },
          {
            "type": "mc",
            "q": "textarea terkontrol memakai prop",
            "options": [
              "innerHTML",
              "value dan onChange",
              "text",
              "content"
            ],
            "a": 1,
            "explain": "textarea React memakai value dan onChange seperti input."
          },
          {
            "type": "mc",
            "q": "Mengambil nilai beberapa field form memakai",
            "options": [
              "satu variabel global",
              "document.querySelector",
              "state per field atau satu objek state",
              "window.values"
            ],
            "a": 2,
            "explain": "State per field atau satu objek state mengelola nilai form."
          },
          {
            "type": "mc",
            "q": "Input file pada React bersifat",
            "options": [
              "selalu terkontrol",
              "tidak terkontrol (tidak bisa di-set value-nya)",
              "menerima props value",
              "tidak bisa diakses"
            ],
            "a": 1,
            "explain": "Demi keamanan, browser tidak mengizinkan menetapkan value input file."
          },
          {
            "type": "mc",
            "q": "Menonaktifkan tombol saat form tidak valid memakai prop",
            "options": [
              "readonly",
              "disabled",
              "hidden",
              "inert"
            ],
            "a": 1,
            "explain": "Prop disabled menonaktifkan tombol submit."
          },
          {
            "type": "mc",
            "q": "Mengosongkan form setelah submit memakai",
            "options": [
              "mengatur ulang state ke nilai awal",
              "membuat form baru",
              "menghapus komponen",
              "window.reload()"
            ],
            "a": 0,
            "explain": "Reset state mengembalikan tampilan form ke nilai awal."
          }
        ]
      },
      {
        "id": "react-8",
        "level": "Dasar",
        "title": "useEffect Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "useEffect dipakai untuk",
            "options": [
              "sinkronisasi dengan sistem eksternal setelah render",
              "menghitung nilai turunan sederhana",
              "membuat route",
              "menulis CSS"
            ],
            "a": 0,
            "explain": "Effect menangani side effect seperti subscription atau fetch."
          },
          {
            "type": "mc",
            "q": "Array dependensi kosong [] pada useEffect berarti",
            "options": [
              "effect jalan sekali setelah mount",
              "effect jalan setiap render",
              "effect tidak pernah jalan",
              "effect jalan saat unmount"
            ],
            "a": 0,
            "explain": "Array kosong membuat effect hanya berjalan sekali."
          },
          {
            "type": "mc",
            "q": "Bila array dependensi dihilangkan",
            "options": [
              "effect tidak berjalan",
              "effect hanya sekali",
              "effect berjalan setiap render",
              "error"
            ],
            "a": 2,
            "explain": "Tanpa array dependensi, effect berjalan setiap selesai render."
          },
          {
            "type": "mc",
            "q": "Fungsi cleanup pada useEffect dijalankan ketika",
            "options": [
              "setiap render",
              "hanya saat error",
              "komponen unmount atau sebelum effect berikutnya",
              "tidak pernah"
            ],
            "a": 2,
            "explain": "Cleanup membersihkan efek seperti interval atau listener."
          },
          {
            "type": "mc",
            "q": "Membersihkan interval pada useEffect memakai",
            "options": [
              "clearInterval di fungsi cleanup",
              "menghapus state",
              "refresh halaman",
              "membuat komponen baru"
            ],
            "a": 0,
            "explain": "clearInterval pada cleanup mencegah interval berjalan terus."
          },
          {
            "type": "mc",
            "q": "Mengambil data dari API saat mount biasanya memakai",
            "options": [
              "CSS",
              "useEffect lalu set state",
              "migration",
              "route"
            ],
            "a": 1,
            "explain": "Effect memicu fetch dan menyimpan hasil ke state."
          },
          {
            "type": "mc",
            "q": "Nilai turunan sederhana sebaiknya",
            "options": [
              "dihitung saat render, bukan di effect",
              "selalu di effect",
              "disimpan di localStorage",
              "di route"
            ],
            "a": 0,
            "explain": "Nilai turunan cukup dihitung langsung saat render."
          },
          {
            "type": "mc",
            "q": "Menambahkan event listener window di effect memerlukan",
            "options": [
              "cleanup removeEventListener",
              "tidak perlu cleanup",
              "menghapus program",
              "refresh halaman"
            ],
            "a": 0,
            "explain": "Listener perlu dilepas pada cleanup agar tidak bocor."
          },
          {
            "type": "mc",
            "q": "Menyetel judul dokumen saat berubah memakai",
            "options": [
              "useEffect dengan dependency",
              "CSS",
              "route",
              "migration"
            ],
            "a": 0,
            "explain": "Effect dengan dependency memperbarui document.title sesuai perubahan."
          },
          {
            "type": "mc",
            "q": "Effect dijalankan setelah React",
            "options": [
              "sebelum render",
              "melukis UI ke layar (setelah commit)",
              "saat compile",
              "saat build"
            ],
            "a": 1,
            "explain": "Effect berjalan setelah perubahan DOM diterapkan."
          }
        ]
      },
      {
        "id": "react-9",
        "level": "Dasar",
        "title": "Styling di React",
        "exercises": [
          {
            "type": "mc",
            "q": "Cara aman memberi kelas CSS di JSX adalah",
            "options": [
              "class",
              "css",
              "styleName",
              "className"
            ],
            "a": 3,
            "explain": "className dipakai untuk atribut kelas."
          },
          {
            "type": "mc",
            "q": "Menggabungkan kelas secara terprogram memakai",
            "options": [
              "template string atau helper classnames",
              "operator +",
              "concat biasa",
              "json"
            ],
            "a": 0,
            "explain": "Template string atau helper memudahkan penggabungan kelas kondisional."
          },
          {
            "type": "mc",
            "q": "CSS Modules membantu mencegah",
            "options": [
              "render berulang",
              "fetch berlebih",
              "bentrok nama kelas global",
              "route salah"
            ],
            "a": 2,
            "explain": "CSS Modules mengatur cakupan nama kelas per komponen."
          },
          {
            "type": "mc",
            "q": "Inline style pada React memakai",
            "options": [
              "string CSS",
              "objek JavaScript camelCase",
              "array",
              "nomor"
            ],
            "a": 1,
            "explain": "style menerima objek dengan properti camelCase."
          },
          {
            "type": "mc",
            "q": "Nilai beberapa properti inline style berupa",
            "options": [
              "hanya string",
              "hanya angka",
              "string atau angka (mis. px otomatis)",
              "selalu kelas"
            ],
            "a": 2,
            "explain": "Beberapa properti angka otomatis diberi satuan px."
          },
          {
            "type": "mc",
            "q": "CSS-in-JS seperti styled-components memungkinkan",
            "options": [
              "menulis SQL",
              "membuat route",
              "migrasi database",
              "menulis gaya dalam komponen JavaScript"
            ],
            "a": 3,
            "explain": "CSS-in-JS mendefinisikan gaya bersamaan komponen."
          },
          {
            "type": "mc",
            "q": "Library utility CSS populer yang sering dipakai dengan React adalah",
            "options": [
              "Bootstrap (CSS saja, tanpa utilitas)",
              "SCSS murni",
              "Tailwind CSS",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Tailwind menyediakan utilitas kelas yang dipakai langsung di JSX."
          },
          {
            "type": "mc",
            "q": "Mengubah gaya berdasarkan state memakai",
            "options": [
              "menulis ulang CSS",
              "kelas kondisional",
              "migration",
              "route"
            ],
            "a": 1,
            "explain": "Kelas kondisional menyesuaikan gaya dengan nilai state."
          },
          {
            "type": "mc",
            "q": "Global CSS biasanya diimpor di",
            "options": [
              "setiap komponen",
              "migration",
              "entry file aplikasi (main/index)",
              "route"
            ],
            "a": 2,
            "explain": "Global CSS diimpor sekali pada titik masuk aplikasi."
          },
          {
            "type": "mc",
            "q": "Theme terang/gelap biasanya diterapkan lewat",
            "options": [
              "migration",
              "kelas pada root (body/html)",
              "route",
              "props wajib"
            ],
            "a": 1,
            "explain": "Kelas pada elemen root menjadi pemicu variabel CSS tema."
          }
        ]
      },
      {
        "id": "react-10",
        "level": "Dasar",
        "title": "Fragment & Struktur JSX",
        "exercises": [
          {
            "type": "mc",
            "q": "Fragment berguna untuk",
            "options": [
              "menambah div wrapper",
              "menulis CSS",
              "mengelompokkan elemen tanpa menambah node DOM",
              "membuat route"
            ],
            "a": 2,
            "explain": "Fragment membungkus elemen bersaudara tanpa menambah node DOM."
          },
          {
            "type": "mc",
            "q": "Sintaks singkat Fragment adalah",
            "options": [
              "<frag>...</frag>",
              "<group>...</group>",
              "<[]>...</[]>",
              "<>...</>"
            ],
            "a": 3,
            "explain": "Sintaks kosong <>...</> adalah singkatan React.Fragment."
          },
          {
            "type": "mc",
            "q": "Kapan div wrapper tidak diinginkan",
            "options": [
              "selalu",
              "saat struktur markup atau tata letak tidak butuh pembungkus",
              "tidak pernah",
              "saat menulis CSS"
            ],
            "a": 1,
            "explain": "Wrapper tambahan bisa mengganggu tata letak; Fragment menghindarinya."
          },
          {
            "type": "mc",
            "q": "React.Fragment dapat diberi prop key agar",
            "options": [
              "menulis CSS",
              "membuat route",
              "migrasi",
              "bisa dipakai sebagai item dalam daftar"
            ],
            "a": 3,
            "explain": "Fragment berkey dibutuhkan saat merender daftar Fragment."
          },
          {
            "type": "mc",
            "q": "Pada transformasi JSX modern (React 17+), import React untuk JSX",
            "options": [
              "wajib selalu",
              "hanya di class",
              "tidak lagi wajib",
              "hanya di server"
            ],
            "a": 2,
            "explain": "Transformasi otomatis JSX baru tidak mewajibkan import React."
          },
          {
            "type": "mc",
            "q": "Menulis elemen tanpa anak di JSX memakai",
            "options": [
              "<img />",
              "<img>",
              "<img></img> wajib",
              "<img;>"
            ],
            "a": 0,
            "explain": "Elemen tanpa anak ditutup dengan />."
          },
          {
            "type": "mc",
            "q": "Atribut data-* di JSX ditulis",
            "options": [
              "diubah camelCase",
              "dilarang",
              "wajib className",
              "apa adanya dengan tanda hubung"
            ],
            "a": 3,
            "explain": "Atribut data-* dipertahankan dengan tanda hubung."
          },
          {
            "type": "mc",
            "q": "Menyisipkan ekspresi JavaScript di JSX memakai",
            "options": [
              "kurung kurawal",
              "kurung siku",
              "kurung sudut",
              "tanpa tanda"
            ],
            "a": 0,
            "explain": "Ekspresi JS disisipkan lewat kurung kurawal."
          },
          {
            "type": "mc",
            "q": "Anak elemen dalam JSX bisa berupa",
            "options": [
              "hanya string",
              "hanya elemen",
              "hanya angka",
              "string, angka, elemen, atau array elemen"
            ],
            "a": 3,
            "explain": "JSX menerima berbagai tipe anak yang dapat dirender."
          },
          {
            "type": "mc",
            "q": "Menyisipkan HTML mentah berisiko XSS sehingga harus",
            "options": [
              "memakai innerHTML biasa",
              "memakai dangerouslySetInnerHTML hanya untuk konten tepercaya",
              "memakai document.write",
              "memakai eval"
            ],
            "a": 1,
            "explain": "dangerouslySetInnerHTML hanya aman bila konten benar-benar tepercaya."
          }
        ]
      },
      {
        "id": "react-11",
        "level": "Menengah",
        "title": "Hooks Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Hook untuk menyimpan nilai antar render tanpa memicu render adalah",
            "options": [
              "useRef",
              "useState",
              "useEffect",
              "useMemo"
            ],
            "a": 0,
            "explain": "useRef menyimpan nilai yang tidak memicu render saat berubah."
          },
          {
            "type": "mc",
            "q": "useRef sering dipakai untuk",
            "options": [
              "membuat route",
              "mengakses elemen DOM atau menyimpan nilai mutable",
              "migrasi database",
              "CSS"
            ],
            "a": 1,
            "explain": "Ref berguna untuk DOM dan nilai yang tidak perlu dirender."
          },
          {
            "type": "mc",
            "q": "useMemo dipakai untuk",
            "options": [
              "memoize hasil perhitungan mahal",
              "menyimpan state",
              "mengakses DOM",
              "fetch selalu"
            ],
            "a": 0,
            "explain": "useMemo meng-cache hasil perhitungan antar render."
          },
          {
            "type": "mc",
            "q": "useCallback dipakai untuk",
            "options": [
              "menyimpan state",
              "memoize referensi fungsi",
              "mengakses DOM",
              "membuat route"
            ],
            "a": 1,
            "explain": "useCallback menjaga referensi fungsi stabil antar render."
          },
          {
            "type": "mc",
            "q": "useReducer cocok ketika",
            "options": [
              "state sederhana boolean",
              "state kompleks dengan banyak transisi",
              "tanpa state",
              "hanya CSS"
            ],
            "a": 1,
            "explain": "useReducer memusatkan logika transisi state yang kompleks."
          },
          {
            "type": "mc",
            "q": "useContext dipakai untuk",
            "options": [
              "menulis migration",
              "membuat route",
              "membaca nilai context tanpa prop drilling",
              "styling"
            ],
            "a": 2,
            "explain": "useContext mengakses nilai context dari komponen mana pun di dalam provider."
          },
          {
            "type": "mc",
            "q": "Aturan hooks menyatakan hooks dipanggil",
            "options": [
              "di mana saja",
              "hanya di useEffect",
              "hanya di event handler",
              "di level atas komponen, bukan di dalam kondisi atau loop"
            ],
            "a": 3,
            "explain": "Hooks harus dipanggil dengan urutan konsisten setiap render."
          },
          {
            "type": "mc",
            "q": "Hook kustom dibuat dengan",
            "options": [
              "class turunan",
              "file CSS",
              "fungsi yang namanya diawali use",
              "route"
            ],
            "a": 2,
            "explain": "Hook kustom adalah fungsi berawalan use yang memakai hooks lain."
          },
          {
            "type": "mc",
            "q": "useLayoutEffect berbeda dari useEffect karena berjalan",
            "options": [
              "sinkron setelah DOM terupdate, sebelum dilukis",
              "setelah dilukis",
              "saat build",
              "sebelum render"
            ],
            "a": 0,
            "explain": "useLayoutEffect berjalan sebelum browser melukis, untuk pengukuran layout."
          },
          {
            "type": "mc",
            "q": "useRef().current pada elemen DOM memberi",
            "options": [
              "referensi ke node DOM",
              "nilai state",
              "route",
              "CSS"
            ],
            "a": 0,
            "explain": "Ref yang dipasang ke elemen memberi akses ke node DOM-nya."
          }
        ]
      },
      {
        "id": "react-12",
        "level": "Menengah",
        "title": "Context & Reducer",
        "exercises": [
          {
            "type": "mc",
            "q": "Context dibuat dengan",
            "options": [
              "makeContext()",
              "useContext.create()",
              "new Context()",
              "createContext()"
            ],
            "a": 3,
            "explain": "createContext membuat objek context."
          },
          {
            "type": "mc",
            "q": "Menyediakan nilai context ke subtree memakai",
            "options": [
              "Container",
              "Wrapper",
              "Provider",
              "Injector"
            ],
            "a": 2,
            "explain": "Provider menyediakan nilai context bagi komponen di bawahnya."
          },
          {
            "type": "mc",
            "q": "Prop drilling adalah",
            "options": [
              "menghapus props",
              "menulis CSS",
              "membuat route",
              "meneruskan props melewati banyak level"
            ],
            "a": 3,
            "explain": "Prop drilling meneruskan data lewat banyak perantara yang tidak memakainya."
          },
          {
            "type": "mc",
            "q": "Context membantu mengurangi",
            "options": [
              "jumlah render",
              "ukuran bundel",
              "prop drilling",
              "kebutuhan state"
            ],
            "a": 2,
            "explain": "Context menghindari meneruskan prop lewat banyak level."
          },
          {
            "type": "mc",
            "q": "Reducer adalah fungsi berbentuk",
            "options": [
              "(action) => state",
              "(state) => action",
              "(state, action) => newState",
              "() => {}"
            ],
            "a": 2,
            "explain": "Reducer menerima state dan action lalu mengembalikan state baru."
          },
          {
            "type": "mc",
            "q": "Pada useReducer, action biasanya berupa objek dengan",
            "options": [
              "properti type",
              "properti css",
              "properti route",
              "properti db"
            ],
            "a": 0,
            "explain": "Action umumnya memiliki type untuk menentukan transisi."
          },
          {
            "type": "mc",
            "q": "Mengirim action pada useReducer memakai",
            "options": [
              "setState(...)",
              "emit(...)",
              "dispatch({ type: ... })",
              "send(...)"
            ],
            "a": 2,
            "explain": "dispatch mengirim action ke reducer."
          },
          {
            "type": "mc",
            "q": "Nilai context yang sering berubah dapat memicu",
            "options": [
              "error",
              "CSS rusak",
              "route mati",
              "render ulang konsumen"
            ],
            "a": 3,
            "explain": "Perubahan nilai context merender ulang komponen yang memakainya."
          },
          {
            "type": "mc",
            "q": "Memisahkan context per kebutuhan membantu",
            "options": [
              "menghapus state",
              "mengurangi render yang tidak perlu",
              "mempercepat build",
              "mengubah CSS"
            ],
            "a": 1,
            "explain": "Context terpisah membatasi dampak perubahan ke konsumen terkait."
          },
          {
            "type": "mc",
            "q": "Membungkus aplikasi dengan Provider biasanya dilakukan di",
            "options": [
              "entry/root komponen",
              "setiap event handler",
              "migration",
              "CSS"
            ],
            "a": 0,
            "explain": "Provider umumnya dipasang di root agar seluruh aplikasi bisa mengaksesnya."
          }
        ]
      },
      {
        "id": "react-13",
        "level": "Menengah",
        "title": "Performance & Memo",
        "exercises": [
          {
            "type": "mc",
            "q": "React.memo dipakai untuk",
            "options": [
              "melewati render ulang bila props tidak berubah",
              "menyimpan state",
              "membuat route",
              "menulis CSS"
            ],
            "a": 0,
            "explain": "memo mencegah render ulang komponen dengan props sama."
          },
          {
            "type": "mc",
            "q": "React.memo melakukan perbandingan props secara default dengan",
            "options": [
              "perbandingan dangkal (shallow)",
              "deep equal penuh",
              "JSON",
              "referensi state"
            ],
            "a": 0,
            "explain": "memo membandingkan props secara shallow."
          },
          {
            "type": "mc",
            "q": "Props berupa objek/fungsi baru tiap render dapat membuat memo",
            "options": [
              "lebih cepat",
              "error",
              "tidak efektif",
              "hapus state"
            ],
            "a": 2,
            "explain": "Referensi baru tiap render membuat perbandingan shallow selalu berbeda."
          },
          {
            "type": "mc",
            "q": "useMemo cocok untuk",
            "options": [
              "perhitungan mahal yang hasilnya bisa di-cache",
              "semua nilai state",
              "DOM query",
              "route"
            ],
            "a": 0,
            "explain": "useMemo menyimpan hasil perhitungan mahal."
          },
          {
            "type": "mc",
            "q": "Optimasi performa sebaiknya dilakukan",
            "options": [
              "setelah mengukur (profiling), bukan menebak",
              "selalu di semua komponen",
              "tanpa pengukuran",
              "hanya dengan CSS"
            ],
            "a": 0,
            "explain": "Profiling membantu fokus pada bagian yang benar-benar lambat."
          },
          {
            "type": "mc",
            "q": "React DevTools Profiler membantu",
            "options": [
              "menulis CSS",
              "membuat route",
              "melihat komponen yang mahal dirender",
              "migrasi DB"
            ],
            "a": 2,
            "explain": "Profiler menampilkan waktu render tiap komponen."
          },
          {
            "type": "mc",
            "q": "Menghindari membuat fungsi baru berlebihan pada daftar besar memakai",
            "options": [
              "membuat fungsi di dalam map",
              "window.fn",
              "useCallback bila terbukti perlu",
              "global"
            ],
            "a": 2,
            "explain": "useCallback menjaga referensi callback stabil bila diperlukan."
          },
          {
            "type": "mc",
            "q": "Virtualisasi daftar panjang membantu karena",
            "options": [
              "hanya merender item yang terlihat",
              "menghapus data",
              "matikan CSS",
              " membuat route"
            ],
            "a": 0,
            "explain": "Virtual list mengurangi jumlah node DOM yang dirender."
          },
          {
            "type": "mc",
            "q": "Membagi kode dengan React.lazy memungkinkan",
            "options": [
              "memuat komponen saat dibutuhkan",
              "menghapus state",
              "membuat route",
              "migrasi DB"
            ],
            "a": 0,
            "explain": "lazy memuat komponen secara dinamis untuk mengurangi bundel awal."
          },
          {
            "type": "mc",
            "q": "Suspense dipakai untuk",
            "options": [
              "menyimpan state",
              "menangani fallback saat komponen lazy dimuat",
              "styling",
              "routing"
            ],
            "a": 1,
            "explain": "Suspense menampilkan fallback selama konten dimuat."
          }
        ]
      },
      {
        "id": "react-14",
        "level": "Menengah",
        "title": "Data Fetching",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengambil data di komponen biasanya memakai",
            "options": [
              "CSS",
              "migration",
              "fetch/axios di dalam useEffect",
              "route"
            ],
            "a": 2,
            "explain": "Effect memicu permintaan data dan menyimpan hasilnya ke state."
          },
          {
            "type": "mc",
            "q": "Membatalkan fetch saat komponen unmount penting untuk mencegah",
            "options": [
              "CSS rusak",
              "route ganda",
              "update state pada komponen yang sudah dilepas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Update state setelah unmount memicu peringatan dan potensi bug."
          },
          {
            "type": "mc",
            "q": "AbortController dipakai untuk",
            "options": [
              "menulis CSS",
              "membuat route",
              "migrasi",
              "membatalkan request fetch"
            ],
            "a": 3,
            "explain": "AbortController membatalkan permintaan jaringan."
          },
          {
            "type": "mc",
            "q": "State yang perlu dikelola saat fetching meliputi",
            "options": [
              "hanya data",
              "hanya error",
              "loading, error, dan data",
              "hanya loading"
            ],
            "a": 2,
            "explain": "UI perlu menampilkan loading, error, dan data hasil."
          },
          {
            "type": "mc",
            "q": "Library data-fetching populer untuk React adalah",
            "options": [
              "Lodash",
              "jQuery",
              "MATLAB",
              "TanStack Query"
            ],
            "a": 3,
            "explain": "TanStack Query mengelola cache, loading, dan error fetching."
          },
          {
            "type": "mc",
            "q": "Caching pada TanStack Query membantu",
            "options": [
              "menghapus state",
              "mengurangi request berulang dan menampilkan data cepat",
              "membuat route",
              "styling"
            ],
            "a": 1,
            "explain": "Cache library menampilkan data terakhir dan menyegarkan sesuai aturan."
          },
          {
            "type": "mc",
            "q": "Race condition pada fetch diatasi dengan",
            "options": [
              "mengabaikan respons yang sudah tidak relevan",
              "menambahkan lebih banyak request",
              "menghapus state",
              "CSS"
            ],
            "a": 0,
            "explain": "Pastikan hanya respons terbaru yang diterapkan ke state."
          },
          {
            "type": "mc",
            "q": "Refetch saat window kembali fokus adalah perilaku",
            "options": [
              "data fetching library seperti TanStack Query",
              "CSS media query",
              "route server",
              "migration"
            ],
            "a": 0,
            "explain": "Library menyegarkan data saat fokus kembali untuk data segar."
          },
          {
            "type": "mc",
            "q": "Mengirim data ke server (POST) memakai",
            "options": [
              "fetch GET saja",
              "CSS",
              "migrasi",
              "fetch dengan method POST dan body"
            ],
            "a": 3,
            "explain": "POST mengirim data dalam body request."
          },
          {
            "type": "mc",
            "q": "Menangani error jaringan sebaiknya dengan",
            "options": [
              "mengabaikan error",
              "menghapus komponen",
              "menangkap error dan menampilkan pesan",
              "reload selalu"
            ],
            "a": 2,
            "explain": "Menangkap error membuat UI tetap informatif."
          }
        ]
      },
      {
        "id": "react-15",
        "level": "Menengah",
        "title": "Custom Hooks",
        "exercises": [
          {
            "type": "mc",
            "q": "Custom hook adalah",
            "options": [
              "fungsi JavaScript yang memakai hooks lain",
              "class komponen",
              "file CSS",
              "route"
            ],
            "a": 0,
            "explain": "Custom hook membungkus logika berbasis hooks agar dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Konvensi nama custom hook diawali dengan",
            "options": [
              "get",
              "use",
              "with",
              "hook"
            ],
            "a": 1,
            "explain": "Awalan use menandai fungsi sebagai hook."
          },
          {
            "type": "mc",
            "q": "Custom hook mengembalikan biasanya",
            "options": [
              "tag HTML",
              "route",
              "CSS",
              "state atau nilai yang dibutuhkan komponen"
            ],
            "a": 3,
            "explain": "Custom hook mengembalikan nilai yang siap dipakai komponen."
          },
          {
            "type": "mc",
            "q": "Custom hook bisa memanggil",
            "options": [
              "hanya hooks bawaan",
              "tanpa hooks",
              "hanya useEffect",
              "hooks bawaan dan custom hook lain"
            ],
            "a": 3,
            "explain": "Custom hook boleh memanggil hooks lain sesuai aturan hooks."
          },
          {
            "type": "mc",
            "q": "Manfaat utama custom hook adalah",
            "options": [
              "mengubah CSS",
              "membuat route",
              "migrasi DB",
              "memisahkan dan memakai ulang logika stateful"
            ],
            "a": 3,
            "explain": "Custom hook memisahkan logika stateful agar dapat dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Hook untuk mendeteksi lebar window biasanya mengembalikan",
            "options": [
              "CSS",
              "nilai lebar saat ini",
              "route",
              "database"
            ],
            "a": 1,
            "explain": "Custom hook membungkus listener dan mengembalikan nilai lebar."
          },
          {
            "type": "mc",
            "q": "Custom hook useForm biasanya menyediakan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "nilai, handler perubahan, dan submit"
            ],
            "a": 3,
            "explain": "useForm mengelola nilai form dan kejadiannya."
          },
          {
            "type": "mc",
            "q": "Setiap pemanggilan custom hook memiliki",
            "options": [
              "state global sama",
              "tanpa state",
              "state bersama",
              "state sendiri yang terpisah"
            ],
            "a": 3,
            "explain": "Custom hook membuat state baru per pemanggilan."
          },
          {
            "type": "mc",
            "q": "Menambahkan cleanup pada custom hook diletakkan di",
            "options": [
              "useEffect di dalam hook",
              "luar fungsi hook",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Cleanup diletakkan pada effect di dalam hook."
          },
          {
            "type": "mc",
            "q": "Custom hook yang membuat request sebaiknya menangani",
            "options": [
              "hanya data",
              "status loading dan error",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Hook fetching perlu menangani loading, error, dan data."
          }
        ]
      },
      {
        "id": "react-16",
        "level": "Menengah",
        "title": "Routing React",
        "exercises": [
          {
            "type": "mc",
            "q": "Library routing populer untuk React adalah",
            "options": [
              "Composer",
              "Laravel Router",
              "React Router",
              "Rails"
            ],
            "a": 2,
            "explain": "React Router menyediakan routing di sisi klien."
          },
          {
            "type": "mc",
            "q": "Halaman/route dideklarasikan dengan",
            "options": [
              "<Path>",
              "<Page>",
              "<View>",
              "<Route path ...>"
            ],
            "a": 3,
            "explain": "Komponen Route memetakan path ke elemen."
          },
          {
            "type": "mc",
            "q": "Navigasi antarhalaman di React Router memakai",
            "options": [
              "<Link>",
              "<a href> selalu reload",
              "<Nav>",
              "<Go>"
            ],
            "a": 0,
            "explain": "Link melakukan navigasi tanpa reload penuh."
          },
          {
            "type": "mc",
            "q": "Hook untuk membaca parameter URL adalah",
            "options": [
              "usePath",
              "useUrl",
              "useParams",
              "useQueryParamsOnly"
            ],
            "a": 2,
            "explain": "useParams membaca parameter dinamis dari URL."
          },
          {
            "type": "mc",
            "q": "Mengubah halaman lewat kode memakai hook",
            "options": [
              "useGo",
              "useRedirect",
              "usePush",
              "useNavigate"
            ],
            "a": 3,
            "explain": "useNavigate memberikan fungsi untuk navigasi programatik."
          },
          {
            "type": "mc",
            "q": "Membungkus aplikasi agar routing aktif memakai",
            "options": [
              "CssRouter",
              "BrowserRouter",
              "DataWrap",
              "ProvidingRouter"
            ],
            "a": 1,
            "explain": "BrowserRouter menyediakan konteks routing berbasis History API."
          },
          {
            "type": "mc",
            "q": "Route dengan path dinamis ditulis seperti",
            "options": [
              "/blog/:slug",
              "/blog/{slug}",
              "/blog/<slug>",
              "/blog/[slug] selalu"
            ],
            "a": 0,
            "explain": "Tanda :slug menandai segmen dinamis pada React Router."
          },
          {
            "type": "mc",
            "q": "Membaca query string memakai hook",
            "options": [
              "useQuery",
              "useSearchParams",
              "useString",
              "useUrlParams"
            ],
            "a": 1,
            "explain": "useSearchParams mengelola query string URL."
          },
          {
            "type": "mc",
            "q": "Nested route dirender lewat",
            "options": [
              "<Children />",
              "<Outlet />",
              "<Nest />",
              "<Router />"
            ],
            "a": 1,
            "explain": "Outlet merender route anak di dalam layout induk."
          },
          {
            "type": "mc",
            "q": "Route yang tidak cocok ditangani dengan",
            "options": [
              "path=\"404\"",
              "path=\"fallback\"",
              "path=\"none\"",
              "path=\"*\""
            ],
            "a": 3,
            "explain": "Path * menangkap rute yang tidak dikenali."
          }
        ]
      },
      {
        "id": "react-17",
        "level": "Menengah",
        "title": "Komposisi Komponen",
        "exercises": [
          {
            "type": "mc",
            "q": "Komposisi komponen berarti",
            "options": [
              "menghapus komponen",
              "menulis CSS",
              "menyusun UI dari komponen kecil yang digabung",
              "migrasi DB"
            ],
            "a": 2,
            "explain": "Komposisi membangun UI kompleks dari bagian kecil."
          },
          {
            "type": "mc",
            "q": "Komponen container vs presentational memisahkan",
            "options": [
              "CSS dan HTML",
              "logika data dan tampilan",
              "route dan DB",
              "state dan props"
            ],
            "a": 1,
            "explain": "Container mengurus data, presentational mengurus tampilan."
          },
          {
            "type": "mc",
            "q": "Meneruskan props yang tidak dipakai ke elemen DOM memakai",
            "options": [
              "clone",
              "window",
              "rest props (...props)",
              "context wajib"
            ],
            "a": 2,
            "explain": "Rest props meneruskan atribut sisa ke elemen di bawah."
          },
          {
            "type": "mc",
            "q": "Komponen yang membungkus konten memanfaatkan prop",
            "options": [
              "content",
              "inner",
              "children",
              "slot"
            ],
            "a": 2,
            "explain": "children memungkinkan komponen membungkus konten."
          },
          {
            "type": "mc",
            "q": "Higher-Order Component (HOC) adalah",
            "options": [
              "hooks wajib",
              "fungsi yang menerima komponen dan mengembalikan komponen baru",
              "class CSS",
              "route"
            ],
            "a": 1,
            "explain": "HOC menambah perilaku dengan membungkus komponen."
          },
          {
            "type": "mc",
            "q": "Render props memungkinkan",
            "options": [
              "menghapus props",
              "berbagi logika lewat fungsi sebagai prop",
              "styling",
              "routing"
            ],
            "a": 1,
            "explain": "Render props membagikan logika melalui fungsi anak."
          },
          {
            "type": "mc",
            "q": "Slot bernama pada React biasanya dibuat dengan",
            "options": [
              "tag slot HTML",
              "CSS",
              "route",
              "prop berupa elemen/fungsi"
            ],
            "a": 3,
            "explain": "React mensimulasikan slot lewat prop elemen."
          },
          {
            "type": "mc",
            "q": "Memecah komponen terlalu kecil berlebihan dapat",
            "options": [
              "mempercepat segalanya",
              "mempersulit navigasi kode",
              "menghapus state",
              "merusak CSS"
            ],
            "a": 1,
            "explain": "Pemecahan berlebihan menambah kerumitan tanpa manfaat."
          },
          {
            "type": "mc",
            "q": "Komponen terkontrol vs tak terkontrol berkaitan dengan",
            "options": [
              "warna",
              "siapa yang menjadi sumber kebenaran nilai",
              "route",
              "DB"
            ],
            "a": 1,
            "explain": "Terkontrol: state React; tak terkontrol: DOM."
          },
          {
            "type": "mc",
            "q": "Compound component mengekspos",
            "options": [
              "satu file CSS",
              "satu route",
              "beberapa sub-komponen yang bekerja bersama",
              "satu tabel"
            ],
            "a": 2,
            "explain": "Compound component menyediakan sub-komponen dengan konteks bersama."
          }
        ]
      },
      {
        "id": "react-18",
        "level": "Menengah",
        "title": "Error Handling & Boundary",
        "exercises": [
          {
            "type": "mc",
            "q": "Error boundary menangkap error di",
            "options": [
              "event handler browser",
              "server",
              "CSS",
              "pohon komponen anak saat render"
            ],
            "a": 3,
            "explain": "Error boundary menangkap error saat render anak-anaknya."
          },
          {
            "type": "mc",
            "q": "Error boundary diimplementasikan sebagai",
            "options": [
              "fungsi biasa",
              "file CSS",
              "class component dengan componentDidCatch",
              "route"
            ],
            "a": 2,
            "explain": "Error boundary perlu class component dengan componentDidCatch (atau getDerivedStateFromError)."
          },
          {
            "type": "mc",
            "q": "Error pada event handler ditangani error boundary secara",
            "options": [
              "otomatis penuh",
              "dengan CSS",
              "tidak otomatis; tangani manual",
              "oleh server"
            ],
            "a": 2,
            "explain": "Error boundary tidak menangkap error di event handler."
          },
          {
            "type": "mc",
            "q": "Fallback UI pada error boundary berguna untuk",
            "options": [
              "mempercepat render",
              "styling",
              "routing",
              "menampilkan pesan ramah saat komponen gagal"
            ],
            "a": 3,
            "explain": "Fallback menjaga pengalaman pengguna saat komponen error."
          },
          {
            "type": "mc",
            "q": "Error saat fetching data sebaiknya",
            "options": [
              "diabaikan",
              "ditangkap dan ditampilkan pesan",
              "dilempar ke CSS",
              "dihapus"
            ],
            "a": 1,
            "explain": "Menangkap error fetch membuat UI informatif."
          },
          {
            "type": "mc",
            "q": "Validasi props saat pengembangan membantu",
            "options": [
              "mempercepat produksi",
              "styling",
              "routing",
              "menangkap bug lebih awal"
            ],
            "a": 3,
            "explain": "Validasi awal menangkap kesalahan sebelum sampai ke pengguna."
          },
          {
            "type": "mc",
            "q": "Logging error di produksi dapat dikirim ke",
            "options": [
              "CSS",
              "route",
              "layanan monitoring (mis. Sentry)",
              "migration"
            ],
            "a": 2,
            "explain": "Monitoring mengumpulkan error produksi untuk dianalisis."
          },
          {
            "type": "mc",
            "q": "`key` yang berubah dapat mereset",
            "options": [
              "CSS global",
              "route",
              "state komponen anak",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mengganti key memaksa komponen dibuat ulang dengan state baru."
          },
          {
            "type": "mc",
            "q": "Menangani error jaringan pada request memakai",
            "options": [
              "tanpa penanganan",
              "CSS",
              "try/catch atau .catch",
              "reload saja"
            ],
            "a": 2,
            "explain": "Penanganan error membuat request gagal tidak merusak UI."
          },
          {
            "type": "mc",
            "q": "Error boundary tidak menangkap error dari",
            "options": [
              "komponen anak saat render",
              "lifecycle render",
              "kode server-side atau async di luar render",
              "constructor anak"
            ],
            "a": 2,
            "explain": "Error boundary fokus pada error render, bukan error async/server."
          }
        ]
      },
      {
        "id": "react-19",
        "level": "Menengah",
        "title": "Testing React",
        "exercises": [
          {
            "type": "mc",
            "q": "Library pengujian komponen React yang direkomendasikan adalah",
            "options": [
              "jQuery",
              "Lodash",
              "React Testing Library",
              "MATLAB"
            ],
            "a": 2,
            "explain": "React Testing Library menguji komponen dari sudut pandang pengguna."
          },
          {
            "type": "mc",
            "q": "Runner test populer untuk React adalah",
            "options": [
              "Composer",
              "Rails",
              "Vitest atau Jest",
              "make"
            ],
            "a": 2,
            "explain": "Vitest/Jest menjalankan test JavaScript."
          },
          {
            "type": "mc",
            "q": "Prinsip React Testing Library adalah menguji",
            "options": [
              "detail implementasi",
              "perilaku yang terlihat pengguna",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Fokus pada perilaku yang dapat diamati pengguna."
          },
          {
            "type": "mc",
            "q": "Mencari elemen berdasarkan teks memakai query",
            "options": [
              "getByClass",
              "getByName",
              "getByValue",
              "getByText"
            ],
            "a": 3,
            "explain": "getByText mencari elemen dari teksnya."
          },
          {
            "type": "mc",
            "q": "Menyimulasikan klik memakai",
            "options": [
              "click()",
              "trigger()",
              "press()",
              "fireEvent.click / userEvent.click"
            ],
            "a": 3,
            "explain": "fireEvent/userEvent memicu interaksi pengguna pada elemen."
          },
          {
            "type": "mc",
            "q": "Menunggu elemen muncul secara async memakai",
            "options": [
              "sleep",
              "alert",
              "while",
              "findBy... atau waitFor"
            ],
            "a": 3,
            "explain": "findBy/waitFor menunggu perubahan async."
          },
          {
            "type": "mc",
            "q": "Memeriksa elemen tidak ada memakai query",
            "options": [
              "getBy... selalu",
              "findAll",
              "queryBy... bernilai null",
              "getByText"
            ],
            "a": 2,
            "explain": "queryBy mengembalikan null bila elemen tidak ditemukan."
          },
          {
            "type": "mc",
            "q": "Mocking fetch pada test memakai",
            "options": [
              "CSS",
              "route",
              "stub global.fetch atau MSW",
              "migration"
            ],
            "a": 2,
            "explain": "Stub fetch atau MSW mensimulasikan respons API."
          },
          {
            "type": "mc",
            "q": "Test snapshot berguna untuk",
            "options": [
              "mengukur performa",
              "styling",
              "mendeteksi perubahan markup tak terduga",
              "routing"
            ],
            "a": 2,
            "explain": "Snapshot membandingkan keluaran markup antara test."
          },
          {
            "type": "mc",
            "q": "Test berbasis perilaku lebih tahan perubahan dibanding test yang terikat",
            "options": [
              "teks yang terlihat",
              "struktur implementasi internal",
              "perilaku pengguna",
              "label aksesibel"
            ],
            "a": 1,
            "explain": "Menguji perilaku membuat test tidak mudah rusak saat refactor internal."
          }
        ]
      },
      {
        "id": "react-20",
        "level": "Menengah",
        "title": "Refs & DOM Access",
        "exercises": [
          {
            "type": "mc",
            "q": "Untuk mengakses node DOM pada komponen fungsional memakai",
            "options": [
              "document.querySelector",
              "window.dom",
              "useRef lalu pasang ke prop ref",
              "getElementById"
            ],
            "a": 2,
            "explain": "useRef dengan prop ref memberi akses terkontrol ke node DOM."
          },
          {
            "type": "mc",
            "q": "Memasang ref ke elemen memakai prop",
            "options": [
              "domRef",
              "ref",
              "node",
              "el"
            ],
            "a": 1,
            "explain": "Prop ref menerima objek ref yang akan diisi node DOM."
          },
          {
            "type": "mc",
            "q": "Membaca nilai elemen dari ref memakai",
            "options": [
              "ref.value",
              "ref.node",
              "ref.current",
              "ref.el"
            ],
            "a": 2,
            "explain": "ref.current merujuk ke node DOM saat terpasang."
          },
          {
            "type": "mc",
            "q": "Mengubah ref tidak memicu",
            "options": [
              "render ulang komponen",
              "error",
              "CSS rusak",
              "route"
            ],
            "a": 0,
            "explain": "Perubahan ref tidak menjadwalkan render."
          },
          {
            "type": "mc",
            "q": "forwardRef dipakai untuk",
            "options": [
              "menghapus ref",
              "menulis CSS",
              "membuat route",
              "meneruskan ref ke komponen anak"
            ],
            "a": 3,
            "explain": "forwardRef meneruskan ref dari induk ke elemen anak."
          },
          {
            "type": "mc",
            "q": "useImperativeHandle berguna untuk",
            "options": [
              "menyesuaikan nilai yang diekspos lewat ref",
              "menghapus state",
              "menulis CSS",
              "membuat route"
            ],
            "a": 0,
            "explain": "Hook ini mengatur API imperatif yang diekspos melalui ref."
          },
          {
            "type": "mc",
            "q": "Memfokuskan input secara programatik setelah mount memakai",
            "options": [
              "ref.current.focus()",
              "input.focus() global",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Memanggil focus pada node DOM via ref memberi fokus."
          },
          {
            "type": "mc",
            "q": "Mengukur ukuran elemen membutuhkan",
            "options": [
              "CSS",
              "akses DOM via ref setelah render",
              "route",
              "DB"
            ],
            "a": 1,
            "explain": "Pengukuran dilakukan pada node DOM setelah render."
          },
          {
            "type": "mc",
            "q": "Callback ref berguna ketika",
            "options": [
              "tanpa DOM",
              "menulis CSS",
              "perlu tahu saat node terpasang atau dilepas",
              "membuat route"
            ],
            "a": 2,
            "explain": "Callback ref dipanggil saat node dipasang atau dilepas."
          },
          {
            "type": "mc",
            "q": "Setelah komponen unmount, ref.current biasanya",
            "options": [
              "bernilai null",
              "tetap node lama",
              "error",
              "berisi string"
            ],
            "a": 0,
            "explain": "ref.current bernilai null setelah node dilepas."
          }
        ]
      },
      {
        "id": "react-21",
        "level": "Advance",
        "title": "Server Components & RSC",
        "exercises": [
          {
            "type": "mc",
            "q": "Server Component di React menjalankan kodenya di",
            "options": [
              "browser saja",
              "CSS",
              "database",
              "server, tidak dikirim ke browser"
            ],
            "a": 3,
            "explain": "Server Component berjalan di server sehingga kodenya tidak masuk bundel klien."
          },
          {
            "type": "mc",
            "q": "Server Component tidak dapat langsung memakai",
            "options": [
              "query database",
              "state dan event handler browser",
              "secrets server",
              "filesystem"
            ],
            "a": 1,
            "explain": "Interaksi browser membutuhkan Client Component."
          },
          {
            "type": "mc",
            "q": "Client Component ditandai dengan direktif",
            "options": [
              "'use server'",
              "'client-only'",
              "'browser'",
              "'use client'"
            ],
            "a": 3,
            "explain": "Direktif 'use client' menandai batas komponen klien pada Next.js App Router."
          },
          {
            "type": "mc",
            "q": "Manfaat Server Component adalah",
            "options": [
              "menghapus CSS",
              "mempercepat event handler",
              "mengganti route",
              "mengurangi JavaScript klien dan mengambil data di server"
            ],
            "a": 3,
            "explain": "Server Component mengurangi bundel klien dan memudahkan akses data server."
          },
          {
            "type": "mc",
            "q": "Data yang diambil Server Component bisa",
            "options": [
              "hanya lewat event handler",
              "tidak bisa",
              "langsung diakses saat render server",
              "lewat CSS"
            ],
            "a": 2,
            "explain": "Server Component dapat mengakses sumber data di server saat render."
          },
          {
            "type": "mc",
            "q": "Serialisasi props antara Server dan Client Component harus",
            "options": [
              "berupa data yang dapat diserialisasi",
              "fungsi secara bebas",
              "DOM node",
              "stream"
            ],
            "a": 0,
            "explain": "Fungsi/objek khusus tidak dapat dikirim lintas batas server-klien secara sembarangan."
          },
          {
            "type": "mc",
            "q": "Rahasia server pada Server Component aman karena",
            "options": [
              "CSS menyembunyikan",
              "kodenya tidak dikirim ke browser",
              "route terenkripsi",
              "state lokal"
            ],
            "a": 1,
            "explain": "Kode server tidak masuk bundel klien, sehingga rahasia tidak terekspos."
          },
          {
            "type": "mc",
            "q": "Mencampur Server dan Client Component berguna untuk",
            "options": [
              "menghapus state",
              "mempercepat CSS",
              "memakai interaksi klien di dalam struktur server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Komposisi ini memberi interaksi tanpa mengirim seluruh logika ke klien."
          },
          {
            "type": "mc",
            "q": "`use client` sebaiknya diletakkan pada",
            "options": [
              "batas terkecil komponen interaktif",
              "root aplikasi selalu",
              "setiap file CSS",
              "route"
            ],
            "a": 0,
            "explain": "Menandai batas klien seperlunya menjaga sebagian besar tetap di server."
          },
          {
            "type": "mc",
            "q": "Streaming pada React memungkinkan",
            "options": [
              "menghapus state",
              "mengirim HTML bertahap saat data siap",
              "mempercepat CSS",
              "mengganti route"
            ],
            "a": 1,
            "explain": "Streaming mengirim konten bertahap sehingga UI terasa lebih cepat."
          }
        ]
      },
      {
        "id": "react-22",
        "level": "Advance",
        "title": "Concurrent & Transitions",
        "exercises": [
          {
            "type": "mc",
            "q": "useTransition dipakai untuk",
            "options": [
              "menandai pembaruan state non-urgent",
              "menyimpan DOM",
              "membuat route",
              "migrasi"
            ],
            "a": 0,
            "explain": "useTransition menandai pembaruan tertentu agar tidak memblokir UI."
          },
          {
            "type": "mc",
            "q": "Pembaruan non-urgent membantu menjaga",
            "options": [
              "responsivitas input pengguna",
              "ukuran CSS",
              "jumlah route",
              "ukuran DB"
            ],
            "a": 0,
            "explain": "Transition menurunkan prioritas pembaruan berat agar input tetap lancar."
          },
          {
            "type": "mc",
            "q": "useDeferredValue berguna untuk",
            "options": [
              "menunda nilai turunan berat",
              "menyimpan DOM",
              "membuat route",
              "migrasi"
            ],
            "a": 0,
            "explain": "useDeferredValue menunda pembaruan nilai yang mahal."
          },
          {
            "type": "mc",
            "q": "Concurrent rendering memungkinkan React",
            "options": [
              "menghapus state",
              "mempercepat CSS",
              "menginterupsi dan memprioritaskan render",
              "mengganti router"
            ],
            "a": 2,
            "explain": "React dapat menginterupsi render untuk menjaga prioritas."
          },
          {
            "type": "mc",
            "q": "Pembaruan state yang memblokir input pada daftar besar dapat diperbaiki dengan",
            "options": [
              "menghapus daftar",
              "CSS",
              "reload",
              "transition atau deferred value"
            ],
            "a": 3,
            "explain": "Menurunkan prioritas pembaruan berat menjaga input tetap responsif."
          },
          {
            "type": "mc",
            "q": "`isPending` dari useTransition menandakan",
            "options": [
              "error fatal",
              "routing aktif",
              "pembaruan transisi masih berjalan",
              "state kosong"
            ],
            "a": 2,
            "explain": "isPending benar selama transisi berlangsung."
          },
          {
            "type": "mc",
            "q": "Suspense dapat membungkus",
            "options": [
              "hanya CSS",
              "hanya route",
              "komponen yang menunggu data/kode",
              "hanya event"
            ],
            "a": 2,
            "explain": "Suspense menampilkan fallback selama konten menunggu."
          },
          {
            "type": "mc",
            "q": "Prioritas render pada React concurrent ditentukan oleh",
            "options": [
              "React berdasarkan jenis pembaruan",
              "CSS",
              "server",
              "database"
            ],
            "a": 0,
            "explain": "React memprioritaskan pembaruan berdasarkan konteks (mis. transisi)."
          },
          {
            "type": "mc",
            "q": "Menampilkan UI lama saat transisi berjalan memberi",
            "options": [
              "data hilang",
              "CSS rusak",
              "route mati",
              "pengalaman yang lebih mulus"
            ],
            "a": 3,
            "explain": "Menahan UI lama menghindari kedipan selama transisi."
          },
          {
            "type": "mc",
            "q": "Transition tidak menggantikan",
            "options": [
              "state",
              "validasi dan penanganan error",
              "props",
              "hooks"
            ],
            "a": 1,
            "explain": "Transition hanyalah prioritas render, bukan pengganti logika benar/salah."
          }
        ]
      },
      {
        "id": "react-23",
        "level": "Advance",
        "title": "State Management Skala",
        "exercises": [
          {
            "type": "mc",
            "q": "Store global ringan populer untuk React adalah",
            "options": [
              "Zustand",
              "Composer",
              "Rails",
              "MATLAB"
            ],
            "a": 0,
            "explain": "Zustand menyediakan store global yang ringan."
          },
          {
            "type": "mc",
            "q": "Redux Toolkit membantu dengan",
            "options": [
              "pola reducer/prediktif dan perkakas bawaan",
              "CSS",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Redux Toolkit menyederhanakan state management prediktif."
          },
          {
            "type": "mc",
            "q": "Selector pada state management dipakai untuk",
            "options": [
              "menghapus state",
              "mengambil bagian state secara terpilih",
              "CSS",
              "routing"
            ],
            "a": 1,
            "explain": "Selector memilih bagian state yang dibutuhkan komponen."
          },
          {
            "type": "mc",
            "q": "Memilih library state global sebaiknya",
            "options": [
              "berdasarkan kebutuhan, bukan tren",
              "selalu yang terbaru",
              "tanpa mempertimbangkan ukuran",
              "selalu tanpa state"
            ],
            "a": 0,
            "explain": "Pilihan harus sesuai kebutuhan aplikasi."
          },
          {
            "type": "mc",
            "q": "Server state vs client state sebaiknya",
            "options": [
              "dipisah pengelolaannya",
              "digabung selalu",
              "dihapus",
              "di CSS"
            ],
            "a": 0,
            "explain": "Data server (cache API) berbeda dari state UI lokal."
          },
          {
            "type": "mc",
            "q": "Immutability penting pada state management karena",
            "options": [
              "mempercepat CSS",
              "membantu deteksi perubahan dan debugging",
              "mengganti route",
              "menghapus state"
            ],
            "a": 1,
            "explain": "Pembaruan immutable memudahkan perbandingan dan pelacakan perubahan."
          },
          {
            "type": "mc",
            "q": "Middleware pada Redux sering dipakai untuk",
            "options": [
              "CSS",
              "logging, thunk, dan efek samping",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Middleware menangani efek samping atau logging pada dispatch."
          },
          {
            "type": "mc",
            "q": "Normalisasi data pada store membantu",
            "options": [
              "menghindari duplikasi entitas",
              "mempercepat CSS",
              "menghapus route",
              "mengganti DB"
            ],
            "a": 0,
            "explain": "Normalisasi menjaga satu sumber data per entitas."
          },
          {
            "type": "mc",
            "q": "Menghidrasi store dari localStorage perlu hati-hati terhadap",
            "options": [
              "data basi dan keamanan",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Data tersimpan bisa basi atau tidak aman bila berisi informasi sensitif."
          },
          {
            "type": "mc",
            "q": "Membagi store per fitur membantu",
            "options": [
              "mempercepat CSS",
              "skalabilitas dan pemisahan tanggung jawab",
              "menghapus route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Store modular memudahkan pengelolaan pada aplikasi besar."
          }
        ]
      },
      {
        "id": "react-24",
        "level": "Advance",
        "title": "Aksesibilitas di React",
        "exercises": [
          {
            "type": "mc",
            "q": "Atribut aksesibilitas pada JSX memakai",
            "options": [
              "data-* saja",
              "class",
              "aria-* dan role",
              "id"
            ],
            "a": 2,
            "explain": "ARIA membantu teknologi bantu memahami peran dan status elemen."
          },
          {
            "type": "mc",
            "q": "Label input sebaiknya dihubungkan memakai",
            "options": [
              "name saja",
              "placeholder saja",
              "htmlFor dan id",
              "title"
            ],
            "a": 2,
            "explain": "htmlFor menghubungkan label ke input untuk aksesibilitas."
          },
          {
            "type": "mc",
            "q": "Tombol ikon perlu",
            "options": [
              "tanpa label",
              "hanya warna",
              "aria-label yang jelas",
              "title wajib saja"
            ],
            "a": 2,
            "explain": "aria-label memberi nama aksesibel untuk tombol ikon."
          },
          {
            "type": "mc",
            "q": "Mengelola fokus pada modal penting untuk",
            "options": [
              "mempercepat CSS",
              "routing",
              "migrasi",
              "menahan fokus di dalam dialog"
            ],
            "a": 3,
            "explain": "Focus trap mencegah fokus keluar dari modal."
          },
          {
            "type": "mc",
            "q": "Navigasi keyboard harus mendukung",
            "options": [
              "hanya mouse",
              "tanpa fokus",
              "CSS",
              "Tab, Enter, dan Escape sesuai konteks"
            ],
            "a": 3,
            "explain": "Dukungan keyboard adalah bagian penting aksesibilitas."
          },
          {
            "type": "mc",
            "q": "`aria-live` dipakai untuk",
            "options": [
              "styling",
              "mengumumkan perubahan konten dinamis",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "aria-live memberi tahu pembaca layar tentang perubahan."
          },
          {
            "type": "mc",
            "q": "Kontras warna minimum untuk teks biasanya",
            "options": [
              "tidak diatur",
              "memenuhi WCAG AA",
              "bebas",
              "selalu hitam"
            ],
            "a": 1,
            "explain": "Kontras yang memadai memenuhi pedoman WCAG."
          },
          {
            "type": "mc",
            "q": "Elemen interaktif sebaiknya berupa",
            "options": [
              "div dengan onClick saja",
              "span",
              "tanpa peran",
              "elemen semantik seperti button"
            ],
            "a": 3,
            "explain": "Elemen semantik membawa perilaku aksesibilitas bawaan."
          },
          {
            "type": "mc",
            "q": "Urutan heading yang baik membantu",
            "options": [
              "CSS",
              "navigasi pembaca layar",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Hierarki heading yang benar memudahkan navigasi."
          },
          {
            "type": "mc",
            "q": "Menguji aksesibilitas dapat memakai",
            "options": [
              "hanya warna",
              "tanpa uji",
              "CSS saja",
              "pemeriksa otomatis dan uji keyboard"
            ],
            "a": 3,
            "explain": "Alat otomatis dan uji manual membantu menemukan masalah aksesibilitas."
          }
        ]
      },
      {
        "id": "react-25",
        "level": "Advance",
        "title": "Testing Lanjutan & Mocking",
        "exercises": [
          {
            "type": "mc",
            "q": "Mock Service Worker (MSW) bekerja dengan",
            "options": [
              "mengubah CSS",
              "membuat route",
              "mencegat request jaringan pada level network",
              "migrasi"
            ],
            "a": 2,
            "explain": "MSW mencegat fetch/XHR sehingga test memakai respons tiruan realistis."
          },
          {
            "type": "mc",
            "q": "Pengujian integrasi React menguji",
            "options": [
              "satu fungsi murni",
              "interaksi beberapa komponen bersama",
              "CSS",
              "DB"
            ],
            "a": 1,
            "explain": "Test integrasi memverifikasi kerja sama antar komponen."
          },
          {
            "type": "mc",
            "q": "Menguji custom hook dapat memakai",
            "options": [
              "querySelector",
              "renderHook",
              "alert",
              "window.open"
            ],
            "a": 1,
            "explain": "renderHook menyediakan lingkungan untuk menguji hook."
          },
          {
            "type": "mc",
            "q": "act() dipakai untuk memastikan",
            "options": [
              "pembaruan state diterapkan sebelum asersi",
              "CSS termuat",
              "route aktif",
              "DB siap"
            ],
            "a": 0,
            "explain": "act memastikan semua pembaruan state selesai sebelum asersi."
          },
          {
            "type": "mc",
            "q": "Menghindari test yang rapuh dilakukan dengan",
            "options": [
              "menguji perilaku, bukan detail implementasi",
              "menguji class CSS",
              "menguji struktur internal",
              "menguji nama variabel"
            ],
            "a": 0,
            "explain": "Test berbasis perilaku lebih stabil terhadap refactor."
          },
          {
            "type": "mc",
            "q": "Fake timers berguna untuk menguji",
            "options": [
              "CSS",
              "routing",
              "debounce, timeout, dan interval",
              "DB"
            ],
            "a": 2,
            "explain": "Fake timers mengontrol waktu pada test async."
          },
          {
            "type": "mc",
            "q": "Menguji error boundary memerlukan",
            "options": [
              "menghapus komponen",
              "memicu error pada komponen anak",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Test error boundary memicu error agar fallback tampil."
          },
          {
            "type": "mc",
            "q": "Coverage mengukur",
            "options": [
              "kecepatan render",
              "ukuran CSS",
              "bagian kode yang dieksekusi test",
              "jumlah route"
            ],
            "a": 2,
            "explain": "Coverage menunjukkan cakupan pengujian kode."
          },
          {
            "type": "mc",
            "q": "Snapshot besar sebaiknya",
            "options": [
              "selalu dipakai",
              "menghapus test",
              "dipakai bijak; bisa rapuh dan sulit ditinjau",
              "mengganti asersi"
            ],
            "a": 2,
            "explain": "Snapshot besar cenderung rapuh dan sulit direview."
          },
          {
            "type": "mc",
            "q": "Menguji aksesibilitas di level test dapat memakai",
            "options": [
              "CSS inspector",
              "routing",
              "jest-axe atau axe-core",
              "migration"
            ],
            "a": 2,
            "explain": "Alat seperti jest-axe memeriksa pelanggaran aksesibilitas."
          }
        ]
      },
      {
        "id": "react-26",
        "level": "Advance",
        "title": "Arsitektur & Pola Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Feature-based folder structure mengelompokkan kode berdasarkan",
            "options": [
              "ukuran file",
              "warna",
              "fitur, bukan tipe berkas",
              "route"
            ],
            "a": 2,
            "explain": "Struktur berbasis fitur memudahkan navigasi pada aplikasi besar."
          },
          {
            "type": "mc",
            "q": "Boundary antara lapisan UI dan domain penting untuk",
            "options": [
              "memisahkan tanggung jawab",
              "mempercepat CSS",
              "menghapus state",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pemisahan lapisan menjaga kode mudah dirawat dan diuji."
          },
          {
            "type": "mc",
            "q": "Dependency injection pada React sering dilakukan dengan",
            "options": [
              "context atau props",
              "CSS",
              "route",
              "DB"
            ],
            "a": 0,
            "explain": "Context/props menyuntikkan dependensi ke komponen."
          },
          {
            "type": "mc",
            "q": "Adapter untuk API memisahkan",
            "options": [
              "CSS",
              "route",
              "state",
              "detail sumber data dari komponen"
            ],
            "a": 3,
            "explain": "Adapter menyembunyikan detail API dari komponen."
          },
          {
            "type": "mc",
            "q": "Komponen yang mengurus data sebaiknya dipisah dari",
            "options": [
              "CSS global",
              "route",
              "DB",
              "komponen presentasional"
            ],
            "a": 3,
            "explain": "Memisahkan data dan tampilan memudahkan pengujian."
          },
          {
            "type": "mc",
            "q": "Menghindari god component (komponen raksasa) dilakukan dengan",
            "options": [
              "menambah state",
              "menghapus props",
              "memecah berdasarkan tanggung jawab",
              "CSS"
            ],
            "a": 2,
            "explain": "Memecah komponen menjaga tiap bagian fokus."
          },
          {
            "type": "mc",
            "q": "Design system komponen membantu",
            "options": [
              "mempercepat DB",
              "konsistensi UI dan pemakaian ulang",
              "routing",
              "migrasi"
            ],
            "a": 1,
            "explain": "Design system menyeragamkan komponen antarbagian aplikasi."
          },
          {
            "type": "mc",
            "q": "Storybook berguna untuk",
            "options": [
              "migrasi DB",
              "routing",
              "mengembangkan dan mendokumentasikan komponen terisolasi",
              "CSS global"
            ],
            "a": 2,
            "explain": "Storybook memamerkan komponen dalam berbagai state."
          },
          {
            "type": "mc",
            "q": "Mengelola konfigurasi environment pada React memerlukan",
            "options": [
              "variabel build-time/prefix yang sesuai",
              "menulis token di kode",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Hanya variabel yang diekspos saat build yang tersedia di klien."
          },
          {
            "type": "mc",
            "q": "Memisahkan logika bisnis ke fungsi murni memudahkan",
            "options": [
              "pengujian dan pemakaian ulang",
              "styling",
              "routing",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fungsi murni mudah diuji tanpa DOM."
          }
        ]
      },
      {
        "id": "react-27",
        "level": "Advance",
        "title": "Rendering Lanjutan & Portals",
        "exercises": [
          {
            "type": "mc",
            "q": "ReactDOM.createPortal dipakai untuk",
            "options": [
              "menghapus state",
              "CSS",
              "routing",
              "merender anak di luar hierarki DOM induk"
            ],
            "a": 3,
            "explain": "Portal merender konten di node DOM lain, berguna untuk modal."
          },
          {
            "type": "mc",
            "q": "Portal cocok untuk membuat",
            "options": [
              "route",
              "migration",
              "modal, tooltip, dan dropdown",
              "CSS global"
            ],
            "a": 2,
            "explain": "Portal menghindari masalah overflow/stacking context pada modal."
          },
          {
            "type": "mc",
            "q": "Event pada portal tetap mengikuti",
            "options": [
              "DOM induk",
              "CSS",
              "pohon komponen React, bukan DOM",
              "routing"
            ],
            "a": 2,
            "explain": "Event bubbling mengikuti pohon React meski DOM berbeda."
          },
          {
            "type": "mc",
            "q": "StrictMode di React membantu",
            "options": [
              "mempercepat produksi",
              "CSS",
              "routing",
              "menemukan masalah dengan efek dan API usang"
            ],
            "a": 3,
            "explain": "StrictMode memicu pemeriksaan tambahan saat pengembangan."
          },
          {
            "type": "mc",
            "q": "StrictMode dapat memicu",
            "options": [
              "error produksi",
              "efek dijalankan dua kali saat pengembangan",
              "CSS rusak",
              "route hilang"
            ],
            "a": 1,
            "explain": "Pemeriksaan StrictMode menjalankan effect dua kali untuk mendeteksi masalah."
          },
          {
            "type": "mc",
            "q": "Rendering ke string di server memakai API",
            "options": [
              "innerHTML",
              "renderToString / streaming API",
              "toString",
              "JSON"
            ],
            "a": 1,
            "explain": "API server rendering menghasilkan HTML dari komponen."
          },
          {
            "type": "mc",
            "q": "Hydration mengaitkan",
            "options": [
              "CSS ke DOM",
              "route ke DB",
              "state ke server",
              "markup server dengan perilaku React di klien"
            ],
            "a": 3,
            "explain": "Hydration mengaktifkan interaksi pada markup yang dirender server."
          },
          {
            "type": "mc",
            "q": "Mismatch hydration terjadi ketika",
            "options": [
              "markup server dan klien berbeda",
              "CSS tidak termuat",
              "route salah",
              "DB mati"
            ],
            "a": 0,
            "explain": "Perbedaan hasil render server dan klien memicu peringatan hydration."
          },
          {
            "type": "mc",
            "q": "Menyimpan nilai di module scope berisiko pada server karena",
            "options": [
              "dibagi antar request",
              "menghapus CSS",
              "mempercepat route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Module scope pada server dipakai bersama antar request sehingga bisa bocor."
          },
          {
            "type": "mc",
            "q": "Mengukur render dengan Profiler dapat memperlihatkan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "bagian mahal yang perlu dioptimalkan"
            ],
            "a": 3,
            "explain": "Profiler memberi data waktu render per komponen."
          }
        ]
      },
      {
        "id": "react-28",
        "level": "Advance",
        "title": "Best Practice React Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyimpan state pada level terendah yang perlu adalah praktik",
            "options": [
              "state global selalu",
              "lifting state seperlunya",
              "tanpa state",
              "CSS"
            ],
            "a": 1,
            "explain": "State sebaiknya sedekat mungkin dengan komponen yang memakainya."
          },
          {
            "type": "mc",
            "q": "State turunan sebaiknya",
            "options": [
              "dihitung saat render, bukan disimpan ganda",
              "disimpan di banyak tempat",
              "dihapus",
              "di CSS"
            ],
            "a": 0,
            "explain": "Menyimpan nilai turunan ganda berisiko tidak sinkron."
          },
          {
            "type": "mc",
            "q": "Menggunakan key untuk mereset state komponen adalah pola",
            "options": [
              "terlarang",
              "khusus CSS",
              "khusus server",
              "yang sah untuk memaksa remount"
            ],
            "a": 3,
            "explain": "Mengganti key mereset state anak karena komponen dibuat ulang."
          },
          {
            "type": "mc",
            "q": "Menyatukan beberapa state terkait dalam satu objek/satu reducer membantu",
            "options": [
              "mempercepat CSS",
              "routing",
              "menjaga konsistensi transisi",
              "migrasi"
            ],
            "a": 2,
            "explain": "State terkait yang disatukan lebih mudah dijaga konsisten."
          },
          {
            "type": "mc",
            "q": "Komponen sebaiknya tetap",
            "options": [
              "penuh efek samping",
              "tanpa props",
              "murni saat render tanpa efek samping",
              "tanpa state"
            ],
            "a": 2,
            "explain": "Render sebaiknya murni; efek samping diletakkan di effect/event."
          },
          {
            "type": "mc",
            "q": "Menghindari mutasi props/state penting untuk",
            "options": [
              "mempercepat CSS",
              "routing",
              "migrasi",
              "prediktabilitas render"
            ],
            "a": 3,
            "explain": "Immutability membuat render dapat diprediksi."
          },
          {
            "type": "mc",
            "q": "Membagi kode berdasarkan route membantu",
            "options": [
              "menghapus CSS",
              "memperkecil bundel awal",
              "mempercepat DB",
              "migrasi"
            ],
            "a": 1,
            "explain": "Code splitting per route memuat kode saat dibutuhkan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi komponen yang baik mencakup",
            "options": [
              "hanya CSS",
              "hanya warna",
              "props, perilaku, dan contoh pakai",
              "hanya route"
            ],
            "a": 2,
            "explain": "Dokumentasi jelas memudahkan pemakaian ulang komponen."
          },
          {
            "type": "mc",
            "q": "Menjaga dependency tetap mutakhir penting untuk",
            "options": [
              "mempercepat CSS",
              "routing",
              "perbaikan bug dan keamanan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pembaruan dependency membawa perbaikan bug dan patch keamanan."
          },
          {
            "type": "mc",
            "q": "Menghindari premature optimization berarti",
            "options": [
              "mengoptimasi semua dulu",
              "tanpa profiling",
              "optimasi setelah ada bukti masalah performa",
              "menghapus test"
            ],
            "a": 2,
            "explain": "Optimasi sebaiknya berbasis pengukuran, bukan dugaan."
          }
        ]
      },
      {
        "id": "react-29",
        "level": "Advance",
        "title": "Suspense & Streaming Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Suspense memungkinkan komponen menyatakan",
            "options": [
              "error fatal",
              "sedang menunggu lalu menampilkan fallback",
              "CSS baru",
              "route baru"
            ],
            "a": 1,
            "explain": "Suspense menangkap status menunggu dan menampilkan fallback."
          },
          {
            "type": "mc",
            "q": "Fallback pada Suspense ditampilkan saat",
            "options": [
              "selalu",
              "konten anak belum siap",
              "tidak pernah",
              "hanya saat error"
            ],
            "a": 1,
            "explain": "Fallback tampil selama komponen anak dalam keadaan menunggu."
          },
          {
            "type": "mc",
            "q": "Streaming SSR mengirim HTML",
            "options": [
              "sekali setelah semua siap",
              "bertahap saat bagian siap",
              "tanpa JavaScript",
              "hanya JSON"
            ],
            "a": 1,
            "explain": "Streaming mengirim bagian halaman begitu siap."
          },
          {
            "type": "mc",
            "q": "Suspense boundary sebaiknya diletakkan",
            "options": [
              "hanya di root selalu",
              "di dalam CSS",
              "di route",
              "di sekitar bagian yang boleh ditunda"
            ],
            "a": 3,
            "explain": "Boundary lokal memberi fallback terarah tanpa menahan seluruh halaman."
          },
          {
            "type": "mc",
            "q": "Pola data-fetching modern memungkinkan komponen",
            "options": [
              "menghapus state",
              "menulis CSS",
              "membuat route",
              "membaca data lewat cache tanpa mengelola loading manual"
            ],
            "a": 3,
            "explain": "Library menyembunyikan detail loading/cache sehingga komponen lebih sederhana."
          },
          {
            "type": "mc",
            "q": "Menampilkan beberapa fallback per bagian halaman dilakukan dengan",
            "options": [
              "satu boundary di root",
              "CSS",
              "beberapa Suspense boundary",
              "route"
            ],
            "a": 2,
            "explain": "Boundary terpisah memungkinkan fallback per bagian."
          },
          {
            "type": "mc",
            "q": "Streaming bermanfaat terutama untuk",
            "options": [
              "menghapus JavaScript",
              "mengganti CSS",
              "migrasi DB",
              "mempercepat tampilnya konten awal"
            ],
            "a": 3,
            "explain": "Konten awal muncul lebih cepat karena dikirim bertahap."
          },
          {
            "type": "mc",
            "q": "Kesalahan saat menunggu data sebaiknya ditangani oleh",
            "options": [
              "Suspense sendiri",
              "CSS",
              "route",
              "error boundary yang sesuai"
            ],
            "a": 3,
            "explain": "Error boundary menangani kegagalan; Suspense menangani status menunggu."
          },
          {
            "type": "mc",
            "q": "Prefetching data membantu",
            "options": [
              "menghapus state",
              "menulis CSS",
              "migrasi",
              "mempercepat navigasi ke halaman berikutnya"
            ],
            "a": 3,
            "explain": "Memuat data lebih awal mengurangi waktu tunggu saat navigasi."
          },
          {
            "type": "mc",
            "q": "Menunda render bagian berat dapat memakai",
            "options": [
              "CSS inline",
              "route",
              "DB",
              "lazy loading dengan Suspense"
            ],
            "a": 3,
            "explain": "Lazy loading memuat komponen saat dibutuhkan dengan fallback Suspense."
          }
        ]
      },
      {
        "id": "react-30",
        "level": "Advance",
        "title": "Menulis Hook yang Aman",
        "exercises": [
          {
            "type": "mc",
            "q": "Aturan hooks melarang pemanggilan hooks di dalam",
            "options": [
              "kondisi, loop, atau fungsi bersarang",
              "komponen",
              "custom hook",
              "level atas fungsi React"
            ],
            "a": 0,
            "explain": "Urutan hooks harus konsisten sehingga tidak boleh bersyarat."
          },
          {
            "type": "mc",
            "q": "Efek yang berlangganan sesuatu wajib menyediakan",
            "options": [
              "CSS",
              "route",
              "fungsi cleanup",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cleanup mencegah kebocoran langganan."
          },
          {
            "type": "mc",
            "q": "Dependency array effect perlu memuat",
            "options": [
              "semua nilai yang dipakai effect",
              "hanya state",
              "tidak ada",
              "hanya props"
            ],
            "a": 0,
            "explain": "Dependency yang lengkap mencegah nilai basi dalam effect."
          },
          {
            "type": "mc",
            "q": "Menghapus dependency untuk menyembunyikan bug dapat menyebabkan",
            "options": [
              "error CSS",
              "route ganda",
              "migrasi",
              "nilai usang (stale) pada effect"
            ],
            "a": 3,
            "explain": "Tanpa dependency yang benar, effect bisa memakai nilai lama."
          },
          {
            "type": "mc",
            "q": "Memakai nilai terbaru di dalam callback tanpa berlangganan ulang dapat memakai",
            "options": [
              "ref berisi nilai terbaru",
              "variabel global",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Ref menyimpan nilai terbaru tanpa memicu langganan ulang."
          },
          {
            "type": "mc",
            "q": "Custom hook yang mengembalikan fungsi sebaiknya",
            "options": [
              "menstabilkan referensi bila perlu",
              "selalu membuat fungsi baru",
              "menghindari fungsi",
              "memakai global"
            ],
            "a": 0,
            "explain": "Referensi stabil mencegah render atau effect tak perlu."
          },
          {
            "type": "mc",
            "q": "useEffect dengan cleanup cocok untuk",
            "options": [
              "menghitung nilai turunan",
              "menulis className",
              "subscription dan timer",
              "membuat route"
            ],
            "a": 2,
            "explain": "Cleanup penting untuk sumber daya yang perlu dilepas."
          },
          {
            "type": "mc",
            "q": "Menjalankan effect sekali saja memakai dependency",
            "options": [
              "array kosong",
              "tanpa array",
              "berisi semua state",
              "null selalu"
            ],
            "a": 0,
            "explain": "Array kosong menjalankan effect sekali setelah mount."
          },
          {
            "type": "mc",
            "q": "Menguji custom hook memerlukan lingkungan",
            "options": [
              "tanpa React",
              "hanya CSS",
              "yang mendukung aturan hooks (mis. renderHook)",
              "hanya route"
            ],
            "a": 2,
            "explain": "Hook hanya bisa diuji di lingkungan React."
          },
          {
            "type": "mc",
            "q": "Hook yang memakai state harus dipanggil",
            "options": [
              "di level atas komponen atau custom hook",
              "di dalam if",
              "di dalam loop",
              "di event handler sebagai hook"
            ],
            "a": 0,
            "explain": "Hooks hanya boleh dipanggil pada level atas fungsi React."
          }
        ]
      },
      {
        "id": "react-31",
        "level": "Advance",
        "title": "Master Review & Best Practice React",
        "exercises": [
          {
            "type": "mc",
            "q": "Komponen React yang menerima data dari induk sebaiknya memperlakukan props sebagai",
            "options": [
              "variabel global yang diubah",
              "pengganti event handler",
              "penyimpanan permanen",
              "input untuk dibaca, bukan dimutasi"
            ],
            "a": 3,
            "explain": "Props adalah input komponen; perubahan diminta lewat callback atau state owner."
          },
          {
            "type": "mc",
            "q": "Mengapa item list React sebaiknya memakai key stabil seperti id data?",
            "options": [
              "Agar semua komponen dipaksa unmount",
              "Untuk mengenkripsi data",
              "Untuk mengurutkan list alfabetis",
              "Agar React mencocokkan item saat list berubah"
            ],
            "a": 3,
            "explain": "Key stabil membantu React mengenali item yang sama saat list berubah."
          },
          {
            "type": "mc",
            "q": "Pola yang tepat untuk memperbarui state array React adalah",
            "options": [
              "Mengubah array langsung tanpa setter",
              "Membuat array baru, bukan memutasi state lama",
              "Mengedit DOM secara manual",
              "Mengganti array menjadi string"
            ],
            "a": 1,
            "explain": "Pembaruan immutable dengan setter membuat perubahan state terdeteksi."
          },
          {
            "type": "fill",
            "q": "Lengkapi pemanggilan state dengan nilai sebelumnya:",
            "code": "setCount(___ => prev + 1);",
            "accept": [
              "prev",
              "p"
            ],
            "explain": "Form fungsi setter menerima nilai terbaru."
          },
          {
            "type": "arrange",
            "q": "Susun alur data fetch di komponen React:",
            "blocks": [
              "Komponen mount",
              "useEffect memicu fetch",
              "Simpan hasil ke state",
              "Komponen render ulang dengan data"
            ],
            "explain": "Fetch terjadi di effect lalu state memicu render ulang."
          }
        ]
      }
    ]
  }
];

export { CONTENT_REACT };
