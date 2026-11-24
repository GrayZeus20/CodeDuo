/* CodeDuo — blok konten: topik "Elysia" (dipisah dari Blok Web).
 * 1 topik (elysia) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_ELYSIA = [
  {
    "id": "elysia",
    "name": "Elysia",
    "icon": "🦊",
    "color": "#8b5cf6",
    "desc": "Framework API TypeScript untuk Bun",
    "lessons": [
      {
        "id": "elysia-1",
        "level": "Dasar",
        "title": "Pengenalan Elysia",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia adalah framework untuk",
            "options": [
              "PHP",
              "Ruby",
              "TypeScript/JavaScript",
              "MATLAB"
            ],
            "a": 2,
            "explain": "Elysia adalah framework web TypeScript/JS."
          },
          {
            "type": "mc",
            "q": "Elysia dirancang berjalan terutama di runtime",
            "options": [
              "JVM",
              "Bun",
              "MATLAB",
              "Unity"
            ],
            "a": 1,
            "explain": "Elysia dioptimalkan untuk Bun."
          },
          {
            "type": "mc",
            "q": "Membuat instance aplikasi Elysia memakai",
            "options": [
              "elysia()",
              "createApp()",
              "new Server()",
              "new Elysia()"
            ],
            "a": 3,
            "explain": "new Elysia() membuat aplikasi."
          },
          {
            "type": "mc",
            "q": "Menjalankan server biasanya memakai",
            "options": [
              ".listen(3000)",
              ".serve(3000)",
              ".start(3000)",
              ".run(3000)"
            ],
            "a": 0,
            "explain": "listen memulai server pada port."
          },
          {
            "type": "mc",
            "q": "Elysia menekankan",
            "options": [
              "respons terstruktur",
              "SQL engine",
              "type-safety end-to-end",
              "GUI"
            ],
            "a": 2,
            "explain": "Elysia unggul pada tipe yang aman."
          },
          {
            "type": "mc",
            "q": "Bahasa utama Elysia adalah",
            "options": [
              "Ruby",
              "PHP",
              "TypeScript",
              "Kotlin"
            ],
            "a": 2,
            "explain": "Elysia ditulis untuk TypeScript/JS."
          },
          {
            "type": "mc",
            "q": "Dokumentasi API otomatis bisa lewat",
            "options": [
              "app.handle(request)",
              "plugin swagger/OpenAPI",
              "t.Array(...)",
              "hash kuat (bcrypt/argon2)"
            ],
            "a": 1,
            "explain": "Plugin menghasilkan dokumentasi OpenAPI."
          },
          {
            "type": "mc",
            "q": "Mengimpor Elysia memakai",
            "options": [
              "import elysia from 'elysia'",
              "import { Elysia } from 'elysia'",
              "require elysia",
              "use elysia"
            ],
            "a": 1,
            "explain": "Elysia diekspor sebagai named import."
          },
          {
            "type": "mc",
            "q": "Elysia cocok untuk membangun",
            "options": [
              "server dan API",
              "akses lintas origin",
              "database",
              "mobile UI"
            ],
            "a": 0,
            "explain": "Elysia untuk server/API."
          },
          {
            "type": "mc",
            "q": "Menjalankan skrip Bun memakai",
            "options": [
              "node file.ts selalu",
              "ts-node wajib",
              "php file.ts",
              "bun run file.ts"
            ],
            "a": 3,
            "explain": "bun run menjalankan berkas."
          }
        ]
      },
      {
        "id": "elysia-2",
        "level": "Dasar",
        "title": "Routing Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Mendefinisikan route GET memakai",
            "options": [
              ".fetch('/path')",
              ".route('GET')",
              ".read('/path')",
              ".get('/path', handler)"
            ],
            "a": 3,
            "explain": ".get mendaftar handler GET."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan route POST memakai",
            "options": [
              ".post(...)",
              ".send(...)",
              ".create(...)",
              ".write(...)"
            ],
            "a": 0,
            "explain": ".post menangani POST."
          },
          {
            "type": "mc",
            "q": "Parameter path dinamis ditulis",
            "options": [
              "'/user/{id}'",
              "'/user/:id'",
              "'/user/[id]'",
              "'/user/<id>'"
            ],
            "a": 1,
            "explain": "Titik dua menandai parameter path."
          },
          {
            "type": "mc",
            "q": "Mengakses parameter path memakai",
            "options": [
              "query.id",
              "body.id",
              "ctx.id",
              "params.id"
            ],
            "a": 3,
            "explain": "params berisi nilai segmen path."
          },
          {
            "type": "mc",
            "q": "Mengakses query string memakai",
            "options": [
              "params.nama",
              "body.nama",
              "search.nama",
              "query.nama"
            ],
            "a": 3,
            "explain": "query berisi parameter query."
          },
          {
            "type": "mc",
            "q": "Properti pada objek konteks handler Elysia yang berisi muatan JSON kiriman klien adalah",
            "options": [
              "data",
              "payload",
              "body",
              "form"
            ],
            "a": 2,
            "explain": "body berisi data request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan JSON dari handler dengan",
            "options": [
              "return hanya string",
              "write json",
              "transport dan domain",
              "return objek biasa"
            ],
            "a": 3,
            "explain": "Mengembalikan objek menghasilkan JSON."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan route memakai",
            "options": [
              ".group(...)",
              ".cluster(...)",
              ".section(...)",
              ".folder(...)"
            ],
            "a": 0,
            "explain": "group mengelompokkan route."
          },
          {
            "type": "mc",
            "q": "Menambahkan prefix route memakai",
            "options": [
              ".prefix()",
              ".base()",
              ".group dengan prefix",
              ".root()"
            ],
            "a": 2,
            "explain": "Prefix diterapkan lewat group."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan route wildcard memakai",
            "options": [
              "'/all'",
              "'/*'",
              "'/any'",
              "'/star'"
            ],
            "a": 1,
            "explain": "Wildcard menangkap banyak path."
          }
        ]
      },
      {
        "id": "elysia-3",
        "level": "Dasar",
        "title": "Handler & Context",
        "exercises": [
          {
            "type": "mc",
            "q": "Context handler berisi",
            "options": [
              "properti pada context",
              "params, query, body, dan lain-lain",
              "store saat pembuatan instance",
              "Jest/Vitest atau bun test"
            ],
            "a": 1,
            "explain": "Context menyediakan input request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan status custom memakai",
            "options": [
              "status(code, body)",
              "res.status",
              "return code",
              "investigasi"
            ],
            "a": 0,
            "explain": "Helper status mengatur kode HTTP."
          },
          {
            "type": "mc",
            "q": "Mengembalikan error 404 memakai",
            "options": [
              "throw 404",
              "status(404, ...)",
              "new Elysia()",
              "'/user/:id'"
            ],
            "a": 1,
            "explain": "status 404 menandakan tidak ditemukan."
          },
          {
            "type": "mc",
            "q": "Handler dapat berupa",
            "options": [
              "hanya string",
              "redirect(url)",
              "fungsi async",
              "bad request"
            ],
            "a": 2,
            "explain": "Handler dapat async untuk operasi IO."
          },
          {
            "type": "mc",
            "q": "Mengakses header request memakai",
            "options": [
              "heads",
              "meta",
              "headers",
              "top"
            ],
            "a": 2,
            "explain": "headers berisi header request."
          },
          {
            "type": "mc",
            "q": "Properti pada konteks handler Elysia untuk membaca atau menetapkan data sesi kecil di browser klien adalah",
            "options": [
              "cookies",
              "jar",
              "store",
              "cookie"
            ],
            "a": 3,
            "explain": "Context menyediakan cookie."
          },
          {
            "type": "mc",
            "q": "Menyimpan nilai per request memakai",
            "options": [
              "cache",
              "store",
              "jumlah request",
              "pengujian"
            ],
            "a": 1,
            "explain": "store menyimpan state per request."
          },
          {
            "type": "mc",
            "q": "Mengembalikan teks biasa memakai",
            "options": [
              "return object",
              "throughput",
              "return string",
              "downtime"
            ],
            "a": 2,
            "explain": "String menghasilkan respons teks."
          },
          {
            "type": "mc",
            "q": "Redirect memakai",
            "options": [
              "go(url)",
              "redirect(url)",
              "nav(url)",
              "manipulasi klien"
            ],
            "a": 1,
            "explain": "redirect mengalihkan."
          },
          {
            "type": "mc",
            "q": "Handler harus mengembalikan",
            "options": [
              "respons yang valid",
              "transport dan domain",
              "startup dan eksekusi cepat",
              "satu unit kecil"
            ],
            "a": 0,
            "explain": "Handler wajib mengembalikan respons."
          }
        ]
      },
      {
        "id": "elysia-4",
        "level": "Dasar",
        "title": "Validasi & Schema",
        "exercises": [
          {
            "type": "mc",
            "q": "Schema pada route berguna untuk",
            "options": [
              "return string",
              "memvalidasi input",
              "t.Optional(...)",
              "dibuat"
            ],
            "a": 1,
            "explain": "Schema memvalidasi bentuk input."
          },
          {
            "type": "mc",
            "q": "Elysia memakai library validasi",
            "options": [
              "TypeBox",
              "Jest",
              "Composer",
              "PHPUnit"
            ],
            "a": 0,
            "explain": "Elysia memakai TypeBox untuk schema."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan schema body memakai",
            "options": [
              "body: t.Object({...})",
              "body: {}",
              "dampak kebocoran",
              "perubahan terisolasi"
            ],
            "a": 0,
            "explain": "t.Object mendefinisikan bentuk body."
          },
          {
            "type": "mc",
            "q": "Tipe string pada schema memakai",
            "options": [
              "t.Text",
              "string",
              "t.String()",
              "alur end-to-end"
            ],
            "a": 2,
            "explain": "t.String() menandai tipe string."
          },
          {
            "type": "mc",
            "q": "Tipe angka memakai",
            "options": [
              "t.Int",
              "t.Number()",
              "number",
              "mengurangi beban"
            ],
            "a": 1,
            "explain": "t.Number() menandai angka."
          },
          {
            "type": "mc",
            "q": "Field opsional memakai",
            "options": [
              "optional()",
              "?",
              "memodifikasi respons",
              "t.Optional(...)"
            ],
            "a": 3,
            "explain": "t.Optional menandai field opsional."
          },
          {
            "type": "mc",
            "q": "Validasi gagal menghasilkan status",
            "options": [
              "422",
              "404",
              "500",
              "301"
            ],
            "a": 0,
            "explain": "Validasi gagal umumnya 422."
          },
          {
            "type": "mc",
            "q": "Schema params memvalidasi",
            "options": [
              "t.Object bersarang",
              "token/JWT atau sesi",
              "perubahan skema",
              "parameter path"
            ],
            "a": 3,
            "explain": "params schema memvalidasi path."
          },
          {
            "type": "mc",
            "q": "Schema query memvalidasi",
            "options": [
              "error server",
              "menambah kompleksitas",
              "query string",
              "t.Object bersarang"
            ],
            "a": 2,
            "explain": "query schema memvalidasi query."
          },
          {
            "type": "mc",
            "q": "Schema penting untuk",
            "options": [
              "runtime Bun di server/container",
              "lint dan test otomatis",
              "kontrak API yang konsisten",
              "masa berlaku cache"
            ],
            "a": 2,
            "explain": "Schema menjaga kontrak API."
          }
        ]
      },
      {
        "id": "elysia-5",
        "level": "Dasar",
        "title": "Type Safety",
        "exercises": [
          {
            "type": "mc",
            "q": "TypeScript membantu saat",
            "options": [
              "runtime wajib",
              "pengembangan dan editor",
              "decorator = fungsi/properti, store = data",
              "kontrak dan validasi"
            ],
            "a": 1,
            "explain": "TypeScript memberi pemeriksaan saat pengembangan."
          },
          {
            "type": "mc",
            "q": "Tipe pada Elysia mengalir ke",
            "options": [
              "tipe isi respons",
              "merestart layanan bermasalah",
              "streaming data besar",
              "handler dan client"
            ],
            "a": 3,
            "explain": "Tipe diteruskan ke handler."
          },
          {
            "type": "mc",
            "q": "Inferensi tipe body berarti",
            "options": [
              "keamanan data antar request",
              "test cepat dan terisolasi",
              "melindungi data transit",
              "body bertipe sesuai schema"
            ],
            "a": 3,
            "explain": "Schema menurunkan tipe body."
          },
          {
            "type": "mc",
            "q": "Menjalankan TypeScript butuh",
            "options": [
              "perawatan aplikasi besar",
              "ya, agar tidak timeout",
              "transpilasi/runtime TS seperti Bun",
              "mencegah koneksi menggantung"
            ],
            "a": 2,
            "explain": "Bun menjalankan TS langsung."
          },
          {
            "type": "mc",
            "q": "Tipe any sebaiknya",
            "options": [
              "selalu dipakai",
              "dihindari bila memungkinkan",
              "TypeScript mengenali properti",
              "logging, auth, dan validasi"
            ],
            "a": 1,
            "explain": "any mematikan pemeriksaan tipe."
          },
          {
            "type": "mc",
            "q": "TypeScript tidak menggantikan validasi runtime karena",
            "options": [
              "akses lintas origin",
              "runtime Bun di server/container",
              "input eksternal tetap tak tepercaya",
              "lint dan test otomatis"
            ],
            "a": 2,
            "explain": "Validasi runtime tetap perlu."
          },
          {
            "type": "mc",
            "q": "tsconfig mengatur",
            "options": [
              "store saat pembuatan instance",
              "Jest/Vitest atau bun test",
              "membatasi origin yang diizinkan",
              "perilaku compiler TypeScript"
            ],
            "a": 3,
            "explain": "tsconfig mengatur TypeScript."
          },
          {
            "type": "mc",
            "q": "Strict mode TypeScript membuat",
            "options": [
              "pemeriksaan tipe lebih ketat",
              "httpOnly, secure, sameSite",
              "konfigurasi antar lingkungan",
              "aliran satu arah"
            ],
            "a": 0,
            "explain": "strict menambah ketatnya pemeriksaan."
          },
          {
            "type": "mc",
            "q": "Tipe union memakai",
            "options": [
              "|",
              "&",
              "+",
              "*"
            ],
            "a": 0,
            "explain": "Tanda | menyatakan union."
          },
          {
            "type": "mc",
            "q": "Tipe intersection memakai",
            "options": [
              "|",
              "+",
              "&",
              "*"
            ],
            "a": 2,
            "explain": "Tanda & menyatakan irisan tipe."
          }
        ]
      },
      {
        "id": "elysia-6",
        "level": "Dasar",
        "title": "Response & Status",
        "exercises": [
          {
            "type": "mc",
            "q": "Status 200 berarti",
            "options": [
              "not found",
              "error server",
              "sukses",
              "unauthorized"
            ],
            "a": 2,
            "explain": "200 OK menandakan sukses."
          },
          {
            "type": "mc",
            "q": "Status 201 berarti",
            "options": [
              "tidak ditemukan",
              "error",
              "redirect",
              "dibuat"
            ],
            "a": 3,
            "explain": "201 Created menandakan pembuatan."
          },
          {
            "type": "mc",
            "q": "Status 400 berarti",
            "options": [
              "sukses",
              "bad request",
              "redirect",
              "created"
            ],
            "a": 1,
            "explain": "400 menandakan request tidak valid."
          },
          {
            "type": "mc",
            "q": "Status 401 berarti",
            "options": [
              "sukses",
              "created",
              "redirect",
              "unauthorized"
            ],
            "a": 3,
            "explain": "401 menandakan belum terautentikasi."
          },
          {
            "type": "mc",
            "q": "Status 403 berarti",
            "options": [
              "forbidden",
              "sukses",
              "created",
              "redirect"
            ],
            "a": 0,
            "explain": "403 menandakan terlarang."
          },
          {
            "type": "mc",
            "q": "Status 404 berarti",
            "options": [
              "tidak ditemukan",
              "sukses",
              "created",
              "error server"
            ],
            "a": 0,
            "explain": "404 menandakan resource tidak ada."
          },
          {
            "type": "mc",
            "q": "Status 500 berarti",
            "options": [
              "sukses",
              "error server",
              "created",
              "redirect"
            ],
            "a": 1,
            "explain": "500 menandakan error internal."
          },
          {
            "type": "mc",
            "q": "Mengembalikan header custom memakai",
            "options": [
              "set.headers",
              "reproduksibilitas deploy",
              "fetch bawaan",
              "alur end-to-end"
            ],
            "a": 0,
            "explain": "set.headers mengatur header respons."
          },
          {
            "type": "mc",
            "q": "Mengembalikan file memakai",
            "options": [
              "orientasi",
              "reproduksibilitas",
              ".listen(3000)",
              "file(path)"
            ],
            "a": 3,
            "explain": "file mengirim berkas."
          },
          {
            "type": "mc",
            "q": "Status 204 berarti",
            "options": [
              "sukses tanpa konten",
              "error",
              "created",
              "redirect"
            ],
            "a": 0,
            "explain": "204 No Content tanpa body."
          }
        ]
      },
      {
        "id": "elysia-7",
        "level": "Dasar",
        "title": "Plugin Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Plugin di Elysia berguna untuk",
            "options": [
              "perilaku compiler TypeScript",
              "mengatur akses lintas origin",
              "mengelompokkan fitur yang dapat dipakai ulang",
              "decorator = fungsi/properti, store = data"
            ],
            "a": 2,
            "explain": "Plugin memisahkan dan memakai ulang fitur."
          },
          {
            "type": "mc",
            "q": "Membuat plugin berupa",
            "options": [
              "logika bertahap pada request",
              "menjaga kontrak output",
              "tipe isi respons",
              "instance Elysia yang diekspor"
            ],
            "a": 3,
            "explain": "Plugin adalah instance Elysia."
          },
          {
            "type": "mc",
            "q": "Memakai plugin memakai",
            "options": [
              ".plug()",
              ".add()",
              ".mount()",
              ".use(plugin)"
            ],
            "a": 3,
            "explain": "use mendaftarkan plugin."
          },
          {
            "type": "mc",
            "q": "Plugin dapat menambah",
            "options": [
              "request selesai dengan baik",
              "refine pada object",
              "route, decorator, dan hook",
              "httpOnly, secure, sameSite"
            ],
            "a": 2,
            "explain": "Plugin menambah kemampuan aplikasi."
          },
          {
            "type": "mc",
            "q": "Decorator menambah",
            "options": [
              "dihindari bila memungkinkan",
              "properti pada context",
              "route, decorator, dan hook",
              "TypeScript mengenali properti"
            ],
            "a": 1,
            "explain": "decorate menambah properti context."
          },
          {
            "type": "mc",
            "q": "Plugin autentikasi biasanya menambah",
            "options": [
              "mencegah abuse",
              "fitur lama",
              "dependency konsisten",
              "pemeriksaan sesi/token"
            ],
            "a": 3,
            "explain": "Plugin auth memeriksa kredensial."
          },
          {
            "type": "mc",
            "q": "Plugin logging menambah",
            "options": [
              "dependency konsisten",
              "TypeScript",
              "pencatatan request",
              "headers"
            ],
            "a": 2,
            "explain": "Plugin log mencatat aktivitas."
          },
          {
            "type": "mc",
            "q": "Plugin CORS membantu",
            "options": [
              "status yang jelas",
              "t.Refine / custom check",
              "memastikan aturan benar",
              "mengatur akses lintas origin"
            ],
            "a": 3,
            "explain": "Plugin CORS mengatur header CORS."
          },
          {
            "type": "mc",
            "q": "Plugin dapat bersifat scoped sehingga",
            "options": [
              "instance Elysia yang diekspor",
              "store: {...} pada constructor",
              "ya, sesuai scope",
              "hanya berlaku pada grup"
            ],
            "a": 3,
            "explain": "Scope membatasi efek plugin."
          },
          {
            "type": "mc",
            "q": "Membuat plugin kecil lebih mudah",
            "options": [
              "t.Refine / custom check",
              "memastikan aturan benar",
              "diuji dan dipakai ulang",
              "index dan optimasi"
            ],
            "a": 2,
            "explain": "Plugin kecil lebih modular."
          }
        ]
      },
      {
        "id": "elysia-8",
        "level": "Dasar",
        "title": "Decorator & Store",
        "exercises": [
          {
            "type": "mc",
            "q": "Menambah properti context memakai",
            "options": [
              ".add(...)",
              ".inject(...)",
              ".decorate(...)",
              ".prop(...)"
            ],
            "a": 2,
            "explain": "decorate menambah properti."
          },
          {
            "type": "mc",
            "q": "Mendeklarasikan tipe decorator memakai",
            "options": [
              "melacak request lintas layanan",
              "tidak membocorkan internal",
              "klien memahami kesalahan",
              ".decorate({ as: 'type' })"
            ],
            "a": 3,
            "explain": "Opsi as mendeklarasikan tipe decorator."
          },
          {
            "type": "mc",
            "q": "Store menyimpan state per request",
            "options": [
              "selamanya",
              "JSON",
              "ya",
              "TLS"
            ],
            "a": 2,
            "explain": "store adalah penyimpanan per request."
          },
          {
            "type": "mc",
            "q": "Store dapat diakses di handler",
            "options": [
              "t.String({ format })",
              "injeksi skrip",
              "store.nama",
              "integritas data"
            ],
            "a": 2,
            "explain": "store tersedia pada context."
          },
          {
            "type": "mc",
            "q": "Menetapkan store awal memakai",
            "options": [
              "import { Elysia } from 'elysia'",
              "handler dan client",
              "sukses tanpa konten",
              "store: {...} pada constructor"
            ],
            "a": 3,
            "explain": "Store awal diberikan saat membuat instance."
          },
          {
            "type": "mc",
            "q": "Decorator dipakai ulang lewat",
            "options": [
              "TypeScript",
              "plugin",
              "body",
              "headers"
            ],
            "a": 1,
            "explain": "Plugin membagikan decorator."
          },
          {
            "type": "mc",
            "q": "Tipe decorator penting agar",
            "options": [
              "TypeScript mengenali properti",
              "server dan API",
              "body bertipe sesuai schema",
              "mengelompokkan fitur yang dapat dipakai ulang"
            ],
            "a": 0,
            "explain": "Deklarasi tipe menjaga keamanan tipe."
          },
          {
            "type": "mc",
            "q": "State global aplikasi disimpan di",
            "options": [
              "store saat pembuatan instance",
              "audit dan debugging",
              "status yang jelas",
              "t.Refine / custom check"
            ],
            "a": 0,
            "explain": "Store instance menyimpan state aplikasi."
          },
          {
            "type": "mc",
            "q": "Membedakan decorator dan store karena",
            "options": [
              "sama",
              "pengembangan dan editor",
              "decorator = fungsi/properti, store = data",
              "pemeriksaan tipe lebih ketat"
            ],
            "a": 2,
            "explain": "Decorator menambah kemampuan; store menyimpan data."
          },
          {
            "type": "mc",
            "q": "Menghindari state global mutable berlebihan penting untuk",
            "options": [
              "status yang tepat",
              "request dan durasi",
              "reuse antar route",
              "keamanan data antar request"
            ],
            "a": 3,
            "explain": "State bersama bisa bocor antar request."
          }
        ]
      },
      {
        "id": "elysia-9",
        "level": "Dasar",
        "title": "Middleware/Hook Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Hook menjalankan logika pada",
            "options": [
              "respons yang valid",
              "input eksternal tetap tak tepercaya",
              "properti pada context",
              "titik tertentu siklus request"
            ],
            "a": 3,
            "explain": "Hook menjalankan kode pada tahap tertentu."
          },
          {
            "type": "mc",
            "q": "Hook sebelum handler adalah",
            "options": [
              "beforeHandle",
              "afterHandle",
              "onError",
              "mengurangi beban"
            ],
            "a": 0,
            "explain": "beforeHandle berjalan sebelum handler."
          },
          {
            "type": "mc",
            "q": "Hook setelah handler adalah",
            "options": [
              "beforeHandle",
              "afterHandle",
              "t.Object bersarang",
              "token/JWT atau sesi"
            ],
            "a": 1,
            "explain": "afterHandle berjalan setelah handler."
          },
          {
            "type": "mc",
            "q": "Hook untuk error adalah",
            "options": [
              "onFail",
              "manajemen koneksi",
              "onError",
              "disanitasi"
            ],
            "a": 2,
            "explain": "onError menangani error."
          },
          {
            "type": "mc",
            "q": "Middleware autentikasi biasanya memakai",
            "options": [
              "beforeHandle",
              "cookie",
              "t.String()",
              "error server"
            ],
            "a": 0,
            "explain": "beforeHandle memeriksa sebelum handler."
          },
          {
            "type": "mc",
            "q": "Hook transform dapat mengubah",
            "options": [
              "error di aplikasi",
              "memeriksa izin sebelum handler",
              "request atau respons",
              "mencegah input salah"
            ],
            "a": 2,
            "explain": "Transformasi memodifikasi data."
          },
          {
            "type": "mc",
            "q": "onBeforeHandle berlaku per route group",
            "options": [
              "ya, sesuai scope",
              "handler dan client",
              "sukses tanpa konten",
              "diuji dan dipakai ulang"
            ],
            "a": 0,
            "explain": "Hook berlaku sesuai scope-nya."
          },
          {
            "type": "mc",
            "q": "Membatalkan request di beforeHandle memakai",
            "options": [
              ".get(path, handler)",
              "plugin swagger/OpenAPI",
              ".group(...)",
              "mengembalikan respons/status"
            ],
            "a": 3,
            "explain": "Mengembalikan respons menghentikan alur."
          },
          {
            "type": "mc",
            "q": "Hook berguna untuk",
            "options": [
              "import { Elysia } from 'elysia'",
              "handler dan client",
              "sukses tanpa konten",
              "logging, auth, dan validasi"
            ],
            "a": 3,
            "explain": "Hook menangani lintas-potong."
          },
          {
            "type": "mc",
            "q": "Hook berlebihan dapat",
            "options": [
              "hasil akhir",
              "decorate/store",
              "menambah kompleksitas",
              "latensi jaringan"
            ],
            "a": 2,
            "explain": "Banyak hook menyulitkan pelacakan."
          }
        ]
      },
      {
        "id": "elysia-10",
        "level": "Dasar",
        "title": "Testing Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Menguji route Elysia biasanya dengan",
            "options": [
              "app.run()",
              "kondisi if-none-match",
              "app.handle(request)",
              "manipulasi klien"
            ],
            "a": 2,
            "explain": "handle memproses request di test."
          },
          {
            "type": "mc",
            "q": "Framework test JS populer adalah",
            "options": [
              "PHPUnit",
              "Jest/Vitest atau bun test",
              "RSpec",
              "Composer"
            ],
            "a": 1,
            "explain": "Runner JS untuk test."
          },
          {
            "type": "mc",
            "q": "Perintah CLI bawaan runtime Bun untuk menjalankan seluruh unit pengujian adalah",
            "options": [
              "bun run test",
              "bun test",
              "bun spec",
              "test bun"
            ],
            "a": 1,
            "explain": "bun test menjalankan test."
          },
          {
            "type": "mc",
            "q": "Assertion status memakai",
            "options": [
              "set.headers",
              "store.nama",
              "app.handle(request)",
              "expect(res.status).toBe(200)"
            ],
            "a": 3,
            "explain": "Assertion memeriksa status."
          },
          {
            "type": "mc",
            "q": "Test API sebaiknya menguji",
            "options": [
              "kontrak dan validasi",
              "handler dan client",
              "sukses tanpa konten",
              "diuji dan dipakai ulang"
            ],
            "a": 0,
            "explain": "Test API memverifikasi kontrak."
          },
          {
            "type": "mc",
            "q": "Mocking database pada test penting agar",
            "options": [
              "status yang tepat",
              "request dan durasi",
              "test cepat dan terisolasi",
              "reuse antar route"
            ],
            "a": 2,
            "explain": "Mock menghindari dependensi nyata."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "eksplisit",
              "alat benchmark/load test",
              "test implementasi",
              "strategi invalidasi"
            ],
            "a": 2,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Coverage mengukur",
            "options": [
              "error di aplikasi",
              "bagian kode teruji",
              "memeriksa izin sebelum handler",
              "mencegah input salah"
            ],
            "a": 1,
            "explain": "Coverage menunjukkan cakupan."
          },
          {
            "type": "mc",
            "q": "Menjalankan test di CI membantu",
            "options": [
              "signature/token",
              "kesesuaian API",
              "dihormati",
              "mendeteksi regresi"
            ],
            "a": 3,
            "explain": "CI menjalankan test otomatis."
          },
          {
            "type": "mc",
            "q": "Test validasi gagal memeriksa",
            "options": [
              "status 200",
              "lock/backoff",
              "investigasi",
              "status 422"
            ],
            "a": 3,
            "explain": "Validasi gagal umumnya 422."
          }
        ]
      },
      {
        "id": "elysia-11",
        "level": "Menengah",
        "title": "Schema Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Schema respons bisa didefinisikan untuk",
            "options": [
              "memvalidasi/menghasilkan output",
              "fleksibilitas",
              "keamanan konfigurasi",
              "mengukur cakupan"
            ],
            "a": 0,
            "explain": "Schema response menjaga bentuk output."
          },
          {
            "type": "mc",
            "q": "Nested object pada schema memakai",
            "options": [
              "t.Object bersarang",
              "file pada body/form",
              "crash total",
              "transform"
            ],
            "a": 0,
            "explain": "Object dapat bersarang."
          },
          {
            "type": "mc",
            "q": "Array pada schema memakai",
            "options": [
              "t.List",
              "mengukur cakupan",
              "klien streaming",
              "t.Array(...)"
            ],
            "a": 3,
            "explain": "t.Array menandai array."
          },
          {
            "type": "mc",
            "q": "Enum pada schema memakai",
            "options": [
              "keamanan konfigurasi",
              "mengukur cakupan",
              "klien streaming",
              "t.Union([...]) atau t.Literal"
            ],
            "a": 3,
            "explain": "Union/Literal membatasi nilai."
          },
          {
            "type": "mc",
            "q": "Transformasi nilai memakai",
            "options": [
              "TypeScript",
              "t.Transform",
              "body",
              "headers"
            ],
            "a": 1,
            "explain": "Transform mengubah nilai validasi."
          },
          {
            "type": "mc",
            "q": "Schema kustom untuk format khusus memakai",
            "options": [
              "t.String({ format })",
              "fitur lama",
              "dependency konsisten",
              "TypeScript"
            ],
            "a": 0,
            "explain": "Format memvalidasi string khusus."
          },
          {
            "type": "mc",
            "q": "Default value pada schema memakai",
            "options": [
              ".decorate(...)",
              "mengembalikan respons/status",
              "memvalidasi/menghasilkan output",
              "t.Optional dengan default"
            ],
            "a": 3,
            "explain": "Default mengisi nilai kosong."
          },
          {
            "type": "mc",
            "q": "Validasi referensi silang memakai",
            "options": [
              "body: t.Object({...})",
              "tidak ditemukan",
              ".decorate(...)",
              "custom check/refine"
            ],
            "a": 3,
            "explain": "Pemeriksaan kustom menangani aturan khusus."
          },
          {
            "type": "mc",
            "q": "Schema bersama didefinisikan di",
            "options": [
              "di-log dan tidak membocorkan detail",
              "modul terpisah agar dipakai ulang",
              "header lintas origin",
              "transport dan domain"
            ],
            "a": 1,
            "explain": "Schema modular dapat dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Schema penting untuk",
            "options": [
              "body bertipe sesuai schema",
              "keamanan dan konsistensi",
              "mengelompokkan fitur yang dapat dipakai ulang",
              ".decorate({ as: 'type' })"
            ],
            "a": 1,
            "explain": "Schema melindungi batas API."
          }
        ]
      },
      {
        "id": "elysia-12",
        "level": "Menengah",
        "title": "Autentikasi & Keamanan",
        "exercises": [
          {
            "type": "mc",
            "q": "Autentikasi sering memakai",
            "options": [
              "alat benchmark/load test",
              "strategi invalidasi",
              "pemulihan data",
              "token/JWT atau sesi"
            ],
            "a": 3,
            "explain": "Token/JWT umum untuk API."
          },
          {
            "type": "mc",
            "q": "Menyimpan password sebaiknya memakai",
            "options": [
              "md5",
              "hash kuat (bcrypt/argon2)",
              "plain",
              "pelacakan"
            ],
            "a": 1,
            "explain": "Hashing kuat melindungi password."
          },
          {
            "type": "mc",
            "q": "Verifikasi JWT penting untuk",
            "options": [
              "hanya berlaku pada grup",
              "memastikan token sah",
              "keamanan data antar request",
              "test cepat dan terisolasi"
            ],
            "a": 1,
            "explain": "Verifikasi mencegah token palsu."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia JWT di",
            "options": [
              "kode klien",
              "environment/secret manager",
              "group/guard",
              "origin diizinkan"
            ],
            "a": 1,
            "explain": "Rahasia dijaga di server."
          },
          {
            "type": "mc",
            "q": "Rate limiting membantu mencegah",
            "options": [
              "abuse/brute force",
              "tidak ditemukan",
              ".decorate(...)",
              "mengembalikan respons/status"
            ],
            "a": 0,
            "explain": "Rate limit membatasi request."
          },
          {
            "type": "mc",
            "q": "CORS diatur untuk",
            "options": [
              "reuse antar route",
              "efek terbatas pada area",
              "membatasi origin yang diizinkan",
              "pengiriman bisa berulang"
            ],
            "a": 2,
            "explain": "CORS mengatur sumber yang boleh mengakses."
          },
          {
            "type": "mc",
            "q": "Header keamanan seperti CSP membantu mencegah",
            "options": [
              "injeksi skrip",
              "dependency konsisten",
              "TypeScript",
              "headers"
            ],
            "a": 0,
            "explain": "CSP membatasi sumber skrip."
          },
          {
            "type": "mc",
            "q": "Validasi input mencegah",
            "options": [
              "injeksi dan data tak valid",
              "transport dan domain",
              "startup dan eksekusi cepat",
              "satu unit kecil"
            ],
            "a": 0,
            "explain": "Validasi menjaga integritas."
          },
          {
            "type": "mc",
            "q": "Menggunakan HTTPS penting untuk",
            "options": [
              "melindungi data transit",
              "mengelompokkan fitur yang dapat dipakai ulang",
              ".decorate({ as: 'type' })",
              "request atau respons"
            ],
            "a": 0,
            "explain": "HTTPS mengenkripsi data."
          },
          {
            "type": "mc",
            "q": "Log tidak boleh berisi",
            "options": [
              "throughput",
              "data sensitif",
              "downtime",
              "signature/token"
            ],
            "a": 1,
            "explain": "Log menghindari data sensitif."
          }
        ]
      },
      {
        "id": "elysia-13",
        "level": "Menengah",
        "title": "Database & ORM",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia tidak memaksa ORM tertentu sehingga",
            "options": [
              "instance Elysia yang diekspor",
              "store: {...} pada constructor",
              "ya, sesuai scope",
              "bisa memilih sesuai kebutuhan"
            ],
            "a": 3,
            "explain": "Elysia fleksibel terhadap ORM."
          },
          {
            "type": "mc",
            "q": "ORM populer untuk Bun adalah",
            "options": [
              "klien memahami kesalahan",
              "Drizzle atau Prisma",
              "akses lintas origin",
              "runtime Bun di server/container"
            ],
            "a": 1,
            "explain": "Drizzle/Prisma umum dipakai."
          },
          {
            "type": "mc",
            "q": "Query berparameter penting untuk",
            "options": [
              "route, decorator, dan hook",
              "TypeScript mengenali properti",
              "mencegah SQL injection",
              "logging, auth, dan validasi"
            ],
            "a": 2,
            "explain": "Parameter memisahkan data dan query."
          },
          {
            "type": "mc",
            "q": "Transaksi database menjaga",
            "options": [
              "abuse/brute force",
              "environment",
              "adapter pub/sub bersama",
              "atomisitas operasi"
            ],
            "a": 3,
            "explain": "Transaksi memastikan semua atau tidak sama sekali."
          },
          {
            "type": "mc",
            "q": "Connection pooling mengatur",
            "options": [
              "sukses tanpa konten",
              "diuji dan dipakai ulang",
              "jumlah koneksi DB",
              "titik tertentu siklus request"
            ],
            "a": 2,
            "explain": "Pooling membatasi koneksi."
          },
          {
            "type": "mc",
            "q": "Migration mencatat",
            "options": [
              "query.nama",
              "perubahan skema",
              "fungsi async",
              "TypeBox"
            ],
            "a": 1,
            "explain": "Migration menyimpan riwayat skema."
          },
          {
            "type": "mc",
            "q": "Index mempercepat",
            "options": [
              "pencarian kolom",
              "kualitas",
              "workspaces",
              "type-safety end-to-end"
            ],
            "a": 0,
            "explain": "Index mempercepat query."
          },
          {
            "type": "mc",
            "q": "Mengambil data berelasi menghindari N+1 dengan",
            "options": [
              "join/eager load",
              "loop query",
              "format berurutan",
              "menilai efektivitas"
            ],
            "a": 0,
            "explain": "Join/eager loading mengurangi query."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia koneksi di",
            "options": [
              "kode klien",
              "dihormati",
              "environment",
              "lock/backoff"
            ],
            "a": 2,
            "explain": "Rahasia koneksi dijaga."
          },
          {
            "type": "mc",
            "q": "Validasi sebelum menyimpan penting untuk",
            "options": [
              "downtime",
              "signature/token",
              "integritas data",
              "kesesuaian API"
            ],
            "a": 2,
            "explain": "Validasi menjaga data bersih."
          }
        ]
      },
      {
        "id": "elysia-14",
        "level": "Menengah",
        "title": "Websocket & Realtime",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia mendukung websocket lewat",
            "options": [
              "plugin/ws handler",
              ".post(...)",
              "return string",
              "t.Optional(...)"
            ],
            "a": 0,
            "explain": "Elysia menyediakan dukungan websocket."
          },
          {
            "type": "mc",
            "q": "Websocket memungkinkan",
            "options": [
              "komunikasi dua arah realtime",
              "input eksternal tetap tak tepercaya",
              "properti pada context",
              "store saat pembuatan instance"
            ],
            "a": 0,
            "explain": "Websocket mengirim data dua arah."
          },
          {
            "type": "mc",
            "q": "Menangani event pesan memakai",
            "options": [
              "file(path)",
              "expect(res.status).toBe(200)",
              "handler pesan/onMessage",
              "t.Union([...]) atau t.Literal"
            ],
            "a": 2,
            "explain": "Handler pesan menerima data."
          },
          {
            "type": "mc",
            "q": "Broadcast ke banyak klien memerlukan",
            "options": [
              "manajemen koneksi",
              "dampak kebocoran",
              "perubahan terisolasi",
              ".post(...)"
            ],
            "a": 0,
            "explain": "Perlu melacak koneksi aktif."
          },
          {
            "type": "mc",
            "q": "Autentikasi websocket penting pada",
            "options": [
              ".post(...)",
              "return string",
              "t.Optional(...)",
              "koneksi awal"
            ],
            "a": 3,
            "explain": "Verifikasi saat handshake."
          },
          {
            "type": "mc",
            "q": "Server-Sent Events cocok untuk",
            "options": [
              "aliran data satu arah",
              "reuse antar route",
              "efek terbatas pada area",
              "pengiriman bisa berulang"
            ],
            "a": 0,
            "explain": "SSE mengirim satu arah dari server."
          },
          {
            "type": "mc",
            "q": "Menutup koneksi harus membersihkan",
            "options": [
              "file(path)",
              "plugin",
              "resource terkait",
              "expect(res.status).toBe(200)"
            ],
            "a": 2,
            "explain": "Cleanup mencegah kebocoran."
          },
          {
            "type": "mc",
            "q": "Heartbeat membantu",
            "options": [
              "mencegah input salah",
              "mendeteksi koneksi mati",
              "perawatan aplikasi besar",
              "ya, agar tidak timeout"
            ],
            "a": 1,
            "explain": "Heartbeat menjaga koneksi hidup."
          },
          {
            "type": "mc",
            "q": "Scale websocket memerlukan",
            "options": [
              "resource terkait",
              "mencegah penumpukan",
              "detail field",
              "adapter pub/sub bersama"
            ],
            "a": 3,
            "explain": "Pub/sub menyinkronkan antar instance."
          },
          {
            "type": "mc",
            "q": "Realtime memerlukan penanganan backpressure",
            "options": [
              "ya",
              "tidak",
              "HTTPS",
              "JSON"
            ],
            "a": 0,
            "explain": "Backpressure menjaga klien lambat."
          }
        ]
      },
      {
        "id": "elysia-15",
        "level": "Menengah",
        "title": "File Upload & Streaming",
        "exercises": [
          {
            "type": "mc",
            "q": "Menerima upload di Elysia memakai",
            "options": [
              "mencegah abuse",
              "fitur lama",
              "dependency konsisten",
              "file pada body/form"
            ],
            "a": 3,
            "explain": "Context menyediakan berkas unggahan."
          },
          {
            "type": "mc",
            "q": "Validasi tipe berkas penting untuk",
            "options": [
              "sukses tanpa konten",
              "diuji dan dipakai ulang",
              "mencegah berkas berbahaya",
              "titik tertentu siklus request"
            ],
            "a": 2,
            "explain": "Validasi mencegah risiko."
          },
          {
            "type": "mc",
            "q": "Membatasi ukuran unggahan penting untuk",
            "options": [
              "mencegah penyalahgunaan",
              "body: t.Object({...})",
              "tidak ditemukan",
              ".decorate(...)"
            ],
            "a": 0,
            "explain": "Batas ukuran melindungi server."
          },
          {
            "type": "mc",
            "q": "Mengirim file ke klien memakai",
            "options": [
              "dependency konsisten",
              "TypeScript",
              "file(path)",
              "body"
            ],
            "a": 2,
            "explain": "file mengirim berkas."
          },
          {
            "type": "mc",
            "q": "Streaming respons membantu",
            "options": [
              "t.Refine / custom check",
              "memastikan aturan benar",
              "index dan optimasi",
              "pengiriman data besar"
            ],
            "a": 3,
            "explain": "Streaming mengurangi memori."
          },
          {
            "type": "mc",
            "q": "Menyimpan berkas sebaiknya di",
            "options": [
              "storage/objek storage",
              "keandalan",
              "mengukur cakupan",
              "klien streaming"
            ],
            "a": 0,
            "explain": "Object storage cocok untuk berkas."
          },
          {
            "type": "mc",
            "q": "Nama berkas pengguna sebaiknya",
            "options": [
              "dipakai apa adanya",
              "fleksibilitas",
              "disanitasi",
              "hot spot"
            ],
            "a": 2,
            "explain": "Sanitasi mencegah path traversal."
          },
          {
            "type": "mc",
            "q": "Menangani error upload penting untuk",
            "options": [
              "umpan balik yang jelas",
              "mengelompokkan fitur yang dapat dipakai ulang",
              ".decorate({ as: 'type' })",
              "request atau respons"
            ],
            "a": 0,
            "explain": "Error jelas membantu pengguna."
          },
          {
            "type": "mc",
            "q": "Range request memungkinkan",
            "options": [
              "integritas data",
              "file pada body/form",
              "crash total",
              "unduhan sebagian"
            ],
            "a": 3,
            "explain": "Range mendukung resume/seek."
          },
          {
            "type": "mc",
            "q": "Membersihkan berkas sementara penting untuk",
            "options": [
              "mendeteksi regresi",
              "t.String({ format })",
              "mencegah penumpukan",
              "injeksi skrip"
            ],
            "a": 2,
            "explain": "Cleanup menjaga penyimpanan."
          }
        ]
      },
      {
        "id": "elysia-16",
        "level": "Menengah",
        "title": "Logging & Monitoring",
        "exercises": [
          {
            "type": "mc",
            "q": "Logging membantu",
            "options": [
              "streaming",
              "diagnosis masalah",
              "dampak kebocoran",
              "perubahan terisolasi"
            ],
            "a": 1,
            "explain": "Log mencatat kejadian."
          },
          {
            "type": "mc",
            "q": "Log terstruktur memakai",
            "options": [
              "test",
              "Bun",
              ".post(...)",
              "JSON"
            ],
            "a": 3,
            "explain": "JSON memudahkan pencarian."
          },
          {
            "type": "mc",
            "q": "Level log umum meliputi",
            "options": [
              "debug, info, warn, error",
              "perawatan aplikasi besar",
              "ya, agar tidak timeout",
              "mencegah koneksi menggantung"
            ],
            "a": 0,
            "explain": "Level log memisahkan kepentingan."
          },
          {
            "type": "mc",
            "q": "Mencatat request penting untuk",
            "options": [
              "audit dan debugging",
              "decorator = fungsi/properti, store = data",
              "kontrak dan validasi",
              "injeksi dan data tak valid"
            ],
            "a": 0,
            "explain": "Request log membantu diagnosis."
          },
          {
            "type": "mc",
            "q": "Tracing terdistribusi membantu",
            "options": [
              "akses lintas origin",
              "melacak request lintas layanan",
              "runtime Bun di server/container",
              "lint dan test otomatis"
            ],
            "a": 1,
            "explain": "Tracing menghubungkan span."
          },
          {
            "type": "mc",
            "q": "Metrik penting seperti",
            "options": [
              "store: {...} pada constructor",
              "ya, sesuai scope",
              "keamanan dan konsistensi",
              "latensi dan error rate"
            ],
            "a": 3,
            "explain": "Metrik menunjukkan kesehatan."
          },
          {
            "type": "mc",
            "q": "Health check endpoint membantu",
            "options": [
              ".post(...)",
              "pemantauan kesiapan",
              "return string",
              "t.Optional(...)"
            ],
            "a": 1,
            "explain": "Health check memeriksa layanan."
          },
          {
            "type": "mc",
            "q": "Alert membantu",
            "options": [
              "TypeScript mengenali properti",
              "logging, auth, dan validasi",
              "memastikan token sah",
              "deteksi dini masalah"
            ],
            "a": 3,
            "explain": "Alert memberi tahu anomali."
          },
          {
            "type": "mc",
            "q": "Log tidak boleh mencatat",
            "options": [
              "deploy/restart",
              "backoff",
              "password/token",
              "isolasi test"
            ],
            "a": 2,
            "explain": "Data sensitif tidak dicatat."
          },
          {
            "type": "mc",
            "q": "Sampling log membantu",
            "options": [
              "pertimbangan CPU",
              "batas memori",
              "mengurangi volume",
              "bocor informasi"
            ],
            "a": 2,
            "explain": "Sampling menjaga biaya."
          }
        ]
      },
      {
        "id": "elysia-17",
        "level": "Menengah",
        "title": "Error Handling",
        "exercises": [
          {
            "type": "mc",
            "q": "onError menangani",
            "options": [
              "httpOnly, secure, sameSite",
              "konfigurasi antar lingkungan",
              "error di aplikasi",
              "aliran satu arah"
            ],
            "a": 2,
            "explain": "onError menangkap error."
          },
          {
            "type": "mc",
            "q": "Error handler dapat mengembalikan",
            "options": [
              "komposisi fitur",
              "respons terstruktur",
              "kerjasama tim",
              "pengukuran"
            ],
            "a": 1,
            "explain": "Respons error harus jelas."
          },
          {
            "type": "mc",
            "q": "Membedakan error klien dan server penting untuk",
            "options": [
              "tipe isi respons",
              "merestart layanan bermasalah",
              "streaming data besar",
              "status yang tepat"
            ],
            "a": 3,
            "explain": "Status mencerminkan jenis error."
          },
          {
            "type": "mc",
            "q": "Error validasi harus memberi",
            "options": [
              "data sensitif",
              "plugin/ws handler",
              "detail field",
              "mencegah penyalahgunaan"
            ],
            "a": 2,
            "explain": "Detail membantu klien."
          },
          {
            "type": "mc",
            "q": "Error tak terduga sebaiknya",
            "options": [
              "di-log dan tidak membocorkan detail",
              "perawatan aplikasi besar",
              "ya, agar tidak timeout",
              "mencegah koneksi menggantung"
            ],
            "a": 0,
            "explain": "Jangan bocorkan internal."
          },
          {
            "type": "mc",
            "q": "Retry pada klien memerlukan",
            "options": [
              "keamanan data antar request",
              "test cepat dan terisolasi",
              "status yang jelas",
              "melindungi data transit"
            ],
            "a": 2,
            "explain": "Status memandu retry."
          },
          {
            "type": "mc",
            "q": "Custom error class membantu",
            "options": [
              "query.nama",
              "fungsi async",
              "TypeBox",
              "klasifikasi error"
            ],
            "a": 3,
            "explain": "Kelas error memisahkan jenis."
          },
          {
            "type": "mc",
            "q": "Membungkus error pihak ketiga penting agar",
            "options": [
              "tidak membocorkan internal",
              "titik tertentu siklus request",
              "bagian kode teruji",
              "bisa memilih sesuai kebutuhan"
            ],
            "a": 0,
            "explain": "Wrapping menjaga batas."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown memastikan",
            "options": [
              "reuse antar route",
              "efek terbatas pada area",
              "request selesai dengan baik",
              "pengiriman bisa berulang"
            ],
            "a": 2,
            "explain": "Shutdown menunggu request selesai."
          },
          {
            "type": "mc",
            "q": "Error boundary di level aplikasi mencegah",
            "options": [
              "mengurangi volume",
              "crash total",
              "memodifikasi respons",
              "OPTIONS"
            ],
            "a": 1,
            "explain": "Penanganan terpusat mencegah crash."
          }
        ]
      },
      {
        "id": "elysia-18",
        "level": "Menengah",
        "title": "Middleware Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Middleware berlapis memungkinkan",
            "options": [
              "reuse antar route",
              "efek terbatas pada area",
              "logika bertahap pada request",
              "pengiriman bisa berulang"
            ],
            "a": 2,
            "explain": "Middleware berlapis memproses bertahap."
          },
          {
            "type": "mc",
            "q": "Middleware global didefinisikan di",
            "options": [
              "environment/secret manager",
              "join/eager load",
              "resource terkait",
              "instance utama"
            ],
            "a": 3,
            "explain": "Middleware global pada instance utama."
          },
          {
            "type": "mc",
            "q": "Middleware scoped memakai",
            "options": [
              "mencegah penumpukan",
              "detail field",
              "hasil akhir",
              "group/guard"
            ],
            "a": 3,
            "explain": "Group membatasi middleware."
          },
          {
            "type": "mc",
            "q": "Guard berguna untuk",
            "options": [
              "memeriksa izin sebelum handler",
              "mengatur akses lintas origin",
              "decorator = fungsi/properti, store = data",
              "kontrak dan validasi"
            ],
            "a": 0,
            "explain": "Guard mengecek izin."
          },
          {
            "type": "mc",
            "q": "Middleware transform dapat",
            "options": [
              "streaming",
              "memodifikasi respons",
              "dampak kebocoran",
              "perubahan terisolasi"
            ],
            "a": 1,
            "explain": "Transform memodifikasi respons."
          },
          {
            "type": "mc",
            "q": "Middleware logging mencatat",
            "options": [
              "request dan durasi",
              ".decorate({ as: 'type' })",
              "request atau respons",
              "modul terpisah agar dipakai ulang"
            ],
            "a": 0,
            "explain": "Log mencatat request."
          },
          {
            "type": "mc",
            "q": "Middleware rate limit membatasi",
            "options": [
              ".post(...)",
              "jumlah request",
              "return string",
              "t.Optional(...)"
            ],
            "a": 1,
            "explain": "Rate limit membatasi frekuensi."
          },
          {
            "type": "mc",
            "q": "Middleware CORS mengatur",
            "options": [
              "diuji dan dipakai ulang",
              "titik tertentu siklus request",
              "bagian kode teruji",
              "header lintas origin"
            ],
            "a": 3,
            "explain": "CORS mengatur akses origin."
          },
          {
            "type": "mc",
            "q": "Urutan middleware memengaruhi",
            "options": [
              "hasil akhir",
              "token/JWT atau sesi",
              "perubahan skema",
              "manajemen koneksi"
            ],
            "a": 0,
            "explain": "Urutan menentukan hasil."
          },
          {
            "type": "mc",
            "q": "Middleware berat memperlambat",
            "options": [
              "disanitasi",
              "mengurangi volume",
              "semua request",
              "memodifikasi respons"
            ],
            "a": 2,
            "explain": "Middleware jalan tiap request."
          }
        ]
      },
      {
        "id": "elysia-19",
        "level": "Menengah",
        "title": "Validasi Kustom",
        "exercises": [
          {
            "type": "mc",
            "q": "Validasi kustom memakai",
            "options": [
              "request selesai dengan baik",
              "t.Refine / custom check",
              "refine pada object",
              "httpOnly, secure, sameSite"
            ],
            "a": 1,
            "explain": "Refine menyusun aturan khusus."
          },
          {
            "type": "mc",
            "q": "Pesan error kustom membantu",
            "options": [
              "input eksternal tetap tak tepercaya",
              "klien memahami kesalahan",
              "properti pada context",
              "store saat pembuatan instance"
            ],
            "a": 1,
            "explain": "Pesan jelas memudahkan klien."
          },
          {
            "type": "mc",
            "q": "Validasi lintas field memakai",
            "options": [
              "refine pada object",
              "tidak membocorkan internal",
              "klien memahami kesalahan",
              "akses lintas origin"
            ],
            "a": 0,
            "explain": "Refine menangani aturan antar field."
          },
          {
            "type": "mc",
            "q": "Normalisasi input memakai",
            "options": [
              "koneksi awal",
              "unduhan sebagian",
              "respons terstruktur",
              "transform"
            ],
            "a": 3,
            "explain": "Transform menormalkan nilai."
          },
          {
            "type": "mc",
            "q": "Validasi schema response membantu",
            "options": [
              "menjaga kontrak output",
              "status yang jelas",
              "t.Refine / custom check",
              "memastikan aturan benar"
            ],
            "a": 0,
            "explain": "Response schema menjaga konsistensi."
          },
          {
            "type": "mc",
            "q": "Validasi params penting untuk",
            "options": [
              "mencegah input salah",
              "transpilasi/runtime TS seperti Bun",
              "instance Elysia yang diekspor",
              "store: {...} pada constructor"
            ],
            "a": 0,
            "explain": "Params yang divalidasi aman."
          },
          {
            "type": "mc",
            "q": "Menyatukan schema dipakai",
            "options": [
              "reuse antar route",
              "di-log dan tidak membocorkan detail",
              "header lintas origin",
              "transport dan domain"
            ],
            "a": 0,
            "explain": "Schema dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Validasi berlapis memisahkan",
            "options": [
              "body bertipe sesuai schema",
              "mengelompokkan fitur yang dapat dipakai ulang",
              ".decorate({ as: 'type' })",
              "transport dan domain"
            ],
            "a": 3,
            "explain": "Lapisan validasi terpisah."
          },
          {
            "type": "mc",
            "q": "Error validasi harus",
            "options": [
              "handler pesan/onMessage",
              "storage/objek storage",
              "konsisten formatnya",
              "password/token"
            ],
            "a": 2,
            "explain": "Format konsisten memudahkan klien."
          },
          {
            "type": "mc",
            "q": "Menguji validasi penting untuk",
            "options": [
              "memastikan aturan benar",
              "mengelompokkan fitur yang dapat dipakai ulang",
              ".decorate({ as: 'type' })",
              "request atau respons"
            ],
            "a": 0,
            "explain": "Test memastikan validasi bekerja."
          }
        ]
      },
      {
        "id": "elysia-20",
        "level": "Menengah",
        "title": "CORS & Header",
        "exercises": [
          {
            "type": "mc",
            "q": "CORS mengatur",
            "options": [
              "pemeriksaan tipe lebih ketat",
              "hanya berlaku pada grup",
              "keamanan data antar request",
              "akses lintas origin"
            ],
            "a": 3,
            "explain": "CORS mengatur sumber lintas origin."
          },
          {
            "type": "mc",
            "q": "Header Access-Control-Allow-Origin menetapkan",
            "options": [
              "mengukur cakupan",
              "klien streaming",
              "mencegah abuse",
              "origin diizinkan"
            ],
            "a": 3,
            "explain": "Header menentukan origin."
          },
          {
            "type": "mc",
            "q": "Preflight request memakai method",
            "options": [
              "GET",
              "OPTIONS",
              "POST",
              "HEAD"
            ],
            "a": 1,
            "explain": "OPTIONS untuk preflight."
          },
          {
            "type": "mc",
            "q": "Header keamanan umum adalah",
            "options": [
              "TypeScript",
              "headers",
              "CSP, X-Frame-Options",
              "body: t.Object({...})"
            ],
            "a": 2,
            "explain": "Header keamanan melindungi."
          },
          {
            "type": "mc",
            "q": "Strict-Transport-Security memaksa",
            "options": [
              "password/token",
              "group/guard",
              "HTTPS",
              "eksplisit"
            ],
            "a": 2,
            "explain": "HSTS memaksa HTTPS."
          },
          {
            "type": "mc",
            "q": "Cookie sebaiknya memakai",
            "options": [
              "logika bertahap pada request",
              "menjaga kontrak output",
              "httpOnly, secure, sameSite",
              "tipe isi respons"
            ],
            "a": 2,
            "explain": "Atribut cookie meningkatkan keamanan."
          },
          {
            "type": "mc",
            "q": "Cache-Control mengatur",
            "options": [
              "origin diizinkan",
              "kebijakan cache",
              "eksplisit",
              "alat benchmark/load test"
            ],
            "a": 1,
            "explain": "Cache-Control mengatur caching."
          },
          {
            "type": "mc",
            "q": "Content-Type menetapkan",
            "options": [
              "tipe isi respons",
              "request selesai dengan baik",
              "refine pada object",
              "httpOnly, secure, sameSite"
            ],
            "a": 0,
            "explain": "Content-Type menentukan tipe."
          },
          {
            "type": "mc",
            "q": "Mengatur header respons memakai",
            "options": [
              ".listen(3000)",
              "params.id",
              "status(404, ...)",
              "set.headers"
            ],
            "a": 3,
            "explain": "set.headers mengatur header."
          },
          {
            "type": "mc",
            "q": "CORS terlalu permisif berisiko",
            "options": [
              "bocor informasi",
              "orientasi",
              "keamanan",
              "reproduksibilitas"
            ],
            "a": 2,
            "explain": "CORS longgar membahayakan."
          }
        ]
      },
      {
        "id": "elysia-21",
        "level": "Advance",
        "title": "Arsitektur Modul & Plugin",
        "exercises": [
          {
            "type": "mc",
            "q": "Modularisasi berbasis fitur membantu",
            "options": [
              "store: {...} pada constructor",
              "ya, sesuai scope",
              "perawatan aplikasi besar",
              "keamanan dan konsistensi"
            ],
            "a": 2,
            "explain": "Fitur terpisah mudah dirawat."
          },
          {
            "type": "mc",
            "q": "Plugin bersarang memungkinkan",
            "options": [
              "memasang dependency",
              ".get(path, handler)",
              "komposisi fitur",
              "plugin swagger/OpenAPI"
            ],
            "a": 2,
            "explain": "Plugin dapat menyusun plugin lain."
          },
          {
            "type": "mc",
            "q": "Scoping plugin penting agar",
            "options": [
              ".decorate({ as: 'type' })",
              "efek terbatas pada area",
              "request atau respons",
              "modul terpisah agar dipakai ulang"
            ],
            "a": 1,
            "explain": "Scope mencegah efek global tak diinginkan."
          },
          {
            "type": "mc",
            "q": "Dependency antar plugin sebaiknya",
            "options": [
              "error server",
              "eksplisit",
              "menambah kompleksitas",
              "t.Object bersarang"
            ],
            "a": 1,
            "explain": "Ketergantungan jelas memudahkan perawatan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi plugin penting untuk",
            "options": [
              "data sensitif",
              "plugin/ws handler",
              "mencegah penyalahgunaan",
              "pemakaian ulang"
            ],
            "a": 3,
            "explain": "Dokumentasi memudahkan pemakaian."
          },
          {
            "type": "mc",
            "q": "Memisahkan domain dan transport membantu",
            "options": [
              "pemantauan kesiapan",
              "instance utama",
              "pengujian",
              "konsisten formatnya"
            ],
            "a": 2,
            "explain": "Domain terpisah mudah diuji."
          },
          {
            "type": "mc",
            "q": "Injeksi layanan memakai",
            "options": [
              "komposisi fitur",
              "decorate/store",
              "kerjasama tim",
              "pengukuran"
            ],
            "a": 1,
            "explain": "Decorator/store menyuntikkan layanan."
          },
          {
            "type": "mc",
            "q": "Pola clean architecture memisahkan",
            "options": [
              "urutan kompatibel",
              "kompatibilitas klien",
              "lapisan aplikasi",
              "bug berulang"
            ],
            "a": 2,
            "explain": "Pemisahan lapisan menjaga kode."
          },
          {
            "type": "mc",
            "q": "Mengurangi ketergantungan langsung membantu",
            "options": [
              "kualitas",
              "fleksibilitas",
              "workspaces",
              "type-safety end-to-end"
            ],
            "a": 1,
            "explain": "Dependensi longgar mudah diubah."
          },
          {
            "type": "mc",
            "q": "Konsistensi struktur proyek penting untuk",
            "options": [
              "query.nama",
              "fungsi async",
              "TypeBox",
              "kerjasama tim"
            ],
            "a": 3,
            "explain": "Struktur konsisten memudahkan kolaborasi."
          }
        ]
      },
      {
        "id": "elysia-22",
        "level": "Advance",
        "title": "Performance & Benchmark",
        "exercises": [
          {
            "type": "mc",
            "q": "Bun dikenal karena",
            "options": [
              "ya, agar tidak timeout",
              "mencegah koneksi menggantung",
              "startup dan eksekusi cepat",
              "Bun mendukung TS"
            ],
            "a": 2,
            "explain": "Bun berfokus pada performa."
          },
          {
            "type": "mc",
            "q": "Benchmark endpoint memakai",
            "options": [
              "t.String({ format })",
              "injeksi skrip",
              "alat benchmark/load test",
              "integritas data"
            ],
            "a": 2,
            "explain": "Load test mengukur throughput."
          },
          {
            "type": "mc",
            "q": "Cache respons membantu",
            "options": [
              "pemeriksaan sesi/token",
              "afterHandle",
              "mengurangi beban",
              "mendeteksi regresi"
            ],
            "a": 2,
            "explain": "Cache mengurangi kerja berulang."
          },
          {
            "type": "mc",
            "q": "Query lambat perlu",
            "options": [
              "bagian kode teruji",
              "bisa memilih sesuai kebutuhan",
              "mencegah berkas berbahaya",
              "index dan optimasi"
            ],
            "a": 3,
            "explain": "Optimasi query penting."
          },
          {
            "type": "mc",
            "q": "Connection pooling memengaruhi",
            "options": [
              "fitur lama",
              "dependency konsisten",
              "throughput",
              "TypeScript"
            ],
            "a": 2,
            "explain": "Pooling menentukan kapasitas."
          },
          {
            "type": "mc",
            "q": "Mengurangi payload membantu",
            "options": [
              "mengukur cakupan",
              "latensi jaringan",
              "klien streaming",
              "mencegah abuse"
            ],
            "a": 1,
            "explain": "Payload kecil lebih cepat."
          },
          {
            "type": "mc",
            "q": "Compression respons membantu",
            "options": [
              "hot spot",
              "bandwidth",
              "keamanan konfigurasi",
              "keandalan"
            ],
            "a": 1,
            "explain": "Kompresi menghemat bandwidth."
          },
          {
            "type": "mc",
            "q": "Profiling membantu menemukan",
            "options": [
              "transform",
              "keamanan",
              "fleksibilitas",
              "hot spot"
            ],
            "a": 3,
            "explain": "Profiler menunjukkan bagian lambat."
          },
          {
            "type": "mc",
            "q": "Optimasi berdasarkan",
            "options": [
              "pengukuran",
              "custom check/refine",
              "atomisitas operasi",
              "handler pesan/onMessage"
            ],
            "a": 0,
            "explain": "Pengukuran memandu optimasi."
          },
          {
            "type": "mc",
            "q": "Caching berlapis perlu",
            "options": [
              ".decorate(...)",
              "mengembalikan respons/status",
              "strategi invalidasi",
              "memvalidasi/menghasilkan output"
            ],
            "a": 2,
            "explain": "Invalidasi menjaga data segar."
          }
        ]
      },
      {
        "id": "elysia-23",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Deploy Elysia umumnya memakai",
            "options": [
              "runtime Bun di server/container",
              "reuse antar route",
              "efek terbatas pada area",
              "pengiriman bisa berulang"
            ],
            "a": 0,
            "explain": "Deploy menjalankan Bun di server."
          },
          {
            "type": "mc",
            "q": "Environment variables memisahkan",
            "options": [
              "konfigurasi antar lingkungan",
              "hanya berlaku pada grup",
              "keamanan data antar request",
              "test cepat dan terisolasi"
            ],
            "a": 0,
            "explain": "Env memisahkan konfigurasi."
          },
          {
            "type": "mc",
            "q": "Container memudahkan",
            "options": [
              "pelacakan",
              "reproduksibilitas deploy",
              "pengiriman bertahap",
              "kondisi if-none-match"
            ],
            "a": 1,
            "explain": "Container konsisten antar lingkungan."
          },
          {
            "type": "mc",
            "q": "Health check membantu orchestrator",
            "options": [
              "merestart layanan bermasalah",
              "diuji dan dipakai ulang",
              "titik tertentu siklus request",
              "bagian kode teruji"
            ],
            "a": 0,
            "explain": "Health check memandu orkestrasi."
          },
          {
            "type": "mc",
            "q": "Rolling deploy meminimalkan",
            "options": [
              "downtime",
              "group/guard",
              "origin diizinkan",
              "eksplisit"
            ],
            "a": 0,
            "explain": "Rolling deploy menjaga layanan hidup."
          },
          {
            "type": "mc",
            "q": "Graceful shutdown penting saat",
            "options": [
              "alat benchmark/load test",
              "strategi invalidasi",
              "pemulihan data",
              "deploy/restart"
            ],
            "a": 3,
            "explain": "Shutdown menuntaskan request."
          },
          {
            "type": "mc",
            "q": "Centralized logging membantu",
            "options": [
              "memvalidasi/menghasilkan output",
              "custom check/refine",
              "diagnosis produksi",
              "atomisitas operasi"
            ],
            "a": 2,
            "explain": "Log terpusat memudahkan diagnosis."
          },
          {
            "type": "mc",
            "q": "Secret management penting untuk",
            "options": [
              "handler pesan/onMessage",
              "storage/objek storage",
              "keamanan konfigurasi",
              "password/token"
            ],
            "a": 2,
            "explain": "Rahasia dijaga aman."
          },
          {
            "type": "mc",
            "q": "Migration DB saat deploy perlu",
            "options": [
              "urutan kompatibel",
              "headers",
              "body: t.Object({...})",
              "tidak ditemukan"
            ],
            "a": 0,
            "explain": "Migrasi bertahap menjaga uptime."
          },
          {
            "type": "mc",
            "q": "Backup penting untuk",
            "options": [
              "tidak ditemukan",
              "pemulihan data",
              ".decorate(...)",
              "mengembalikan respons/status"
            ],
            "a": 1,
            "explain": "Backup melindungi data."
          }
        ]
      },
      {
        "id": "elysia-24",
        "level": "Advance",
        "title": "Integrasi & Webhook",
        "exercises": [
          {
            "type": "mc",
            "q": "HTTP client pada Bun memakai",
            "options": [
              "fetch bawaan",
              "keamanan konfigurasi",
              "keandalan",
              "mengukur cakupan"
            ],
            "a": 0,
            "explain": "Bun menyediakan fetch."
          },
          {
            "type": "mc",
            "q": "Webhook diverifikasi dengan",
            "options": [
              "keamanan",
              "signature/token",
              "fleksibilitas",
              "hot spot"
            ],
            "a": 1,
            "explain": "Verifikasi memastikan sumber."
          },
          {
            "type": "mc",
            "q": "Menerima webhook sebaiknya async",
            "options": [
              "ya, agar tidak timeout",
              "bagian kode teruji",
              "bisa memilih sesuai kebutuhan",
              "mencegah berkas berbahaya"
            ],
            "a": 0,
            "explain": "Proses async mencegah timeout."
          },
          {
            "type": "mc",
            "q": "Idempotensi webhook penting karena",
            "options": [
              "pengiriman bisa berulang",
              "satu unit kecil",
              "ya, berisiko bocor",
              "Memvalidasi bentuk input di batas endpoint"
            ],
            "a": 0,
            "explain": "Webhook dapat dikirim ulang."
          },
          {
            "type": "mc",
            "q": "Retry keluar memakai",
            "options": [
              "afterHandle",
              "backoff",
              "mendeteksi regresi",
              "injeksi skrip"
            ],
            "a": 1,
            "explain": "Backoff menghindari banjir retry."
          },
          {
            "type": "mc",
            "q": "Menguji integrasi memakai",
            "options": [
              "parameter path",
              "unauthorized",
              "pemeriksaan sesi/token",
              "mock fetch"
            ],
            "a": 3,
            "explain": "Mock menghindari panggilan nyata."
          },
          {
            "type": "mc",
            "q": "Timeout request keluar penting untuk",
            "options": [
              "JSON",
              "keandalan",
              "crash total",
              "transform"
            ],
            "a": 1,
            "explain": "Timeout mencegah menggantung."
          },
          {
            "type": "mc",
            "q": "Rahasia API disimpan di",
            "options": [
              "injeksi skrip",
              "integritas data",
              "file pada body/form",
              "environment"
            ],
            "a": 3,
            "explain": "Rahasia di environment."
          },
          {
            "type": "mc",
            "q": "Versioning API membantu",
            "options": [
              "eksplisit",
              "alat benchmark/load test",
              "strategi invalidasi",
              "kompatibilitas klien"
            ],
            "a": 3,
            "explain": "Versi memisahkan perubahan."
          },
          {
            "type": "mc",
            "q": "Audit event membantu",
            "options": [
              "password/token",
              "group/guard",
              "origin diizinkan",
              "pelacakan"
            ],
            "a": 3,
            "explain": "Audit mencatat riwayat."
          }
        ]
      },
      {
        "id": "elysia-25",
        "level": "Advance",
        "title": "Testing & Kualitas",
        "exercises": [
          {
            "type": "mc",
            "q": "Test integrasi menguji",
            "options": [
              "alur end-to-end",
              "TypeScript/JavaScript",
              ".get('/path', handler)",
              ".group dengan prefix"
            ],
            "a": 0,
            "explain": "Integrasi menguji beberapa bagian bersama."
          },
          {
            "type": "mc",
            "q": "Test unit menguji",
            "options": [
              "request atau respons",
              "modul terpisah agar dipakai ulang",
              "Drizzle atau Prisma",
              "satu unit kecil"
            ],
            "a": 3,
            "explain": "Unit test fokus pada bagian kecil."
          },
          {
            "type": "mc",
            "q": "Contract testing memverifikasi",
            "options": [
              "kesesuaian API",
              "set.headers",
              "store.nama",
              "app.handle(request)"
            ],
            "a": 0,
            "explain": "Contract test menjaga kesepakatan API."
          },
          {
            "type": "mc",
            "q": "Mock database membantu",
            "options": [
              "isolasi test",
              "t.Array(...)",
              "hash kuat (bcrypt/argon2)",
              "pencarian kolom"
            ],
            "a": 0,
            "explain": "Mock menghindari dependensi nyata."
          },
          {
            "type": "mc",
            "q": "Linting memakai",
            "options": [
              "ESLint/Biome",
              "koneksi awal",
              "unduhan sebagian",
              "respons terstruktur"
            ],
            "a": 0,
            "explain": "Linter menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Static typing membantu menemukan",
            "options": [
              "error lebih awal",
              "keamanan data antar request",
              "test cepat dan terisolasi",
              "melindungi data transit"
            ],
            "a": 0,
            "explain": "Tipe menangkap error dini."
          },
          {
            "type": "mc",
            "q": "Coverage membantu",
            "options": [
              "throughput",
              "downtime",
              "signature/token",
              "mengukur cakupan"
            ],
            "a": 3,
            "explain": "Coverage mengukur test."
          },
          {
            "type": "mc",
            "q": "CI menjalankan",
            "options": [
              "decorator = fungsi/properti, store = data",
              "lint dan test otomatis",
              "kontrak dan validasi",
              "injeksi dan data tak valid"
            ],
            "a": 1,
            "explain": "CI otomatis memeriksa."
          },
          {
            "type": "mc",
            "q": "Test perilaku lebih stabil dari",
            "options": [
              "headers",
              "body: t.Object({...})",
              "tidak ditemukan",
              "test implementasi"
            ],
            "a": 3,
            "explain": "Perilaku jarang berubah."
          },
          {
            "type": "mc",
            "q": "Regression test mencegah",
            "options": [
              "tidak ditemukan",
              ".decorate(...)",
              "mengembalikan respons/status",
              "bug berulang"
            ],
            "a": 3,
            "explain": "Regression test melindungi fitur lama."
          }
        ]
      },
      {
        "id": "elysia-26",
        "level": "Advance",
        "title": "Streaming & SSR Data",
        "exercises": [
          {
            "type": "mc",
            "q": "Streaming respons membantu",
            "options": [
              "pengiriman bertahap",
              "mengurangi volume",
              "memodifikasi respons",
              "OPTIONS"
            ],
            "a": 0,
            "explain": "Streaming mengirim data bertahap."
          },
          {
            "type": "mc",
            "q": "Server-Sent Events cocok untuk",
            "options": [
              "mengelompokkan fitur yang dapat dipakai ulang",
              "aliran satu arah",
              ".decorate({ as: 'type' })",
              "request atau respons"
            ],
            "a": 1,
            "explain": "SSE mengirim event satu arah."
          },
          {
            "type": "mc",
            "q": "Backpressure penting pada",
            "options": [
              "t.Refine / custom check",
              "memastikan aturan benar",
              "index dan optimasi",
              "streaming data besar"
            ],
            "a": 3,
            "explain": "Backpressure mengatur aliran."
          },
          {
            "type": "mc",
            "q": "Mengirim file besar sebaiknya",
            "options": [
              "error server",
              "streaming",
              "menambah kompleksitas",
              "t.Object bersarang"
            ],
            "a": 1,
            "explain": "Streaming menghemat memori."
          },
          {
            "type": "mc",
            "q": "Membatalkan request perlu",
            "options": [
              "dihormati",
              ".group(...)",
              "cookie",
              "t.String()"
            ],
            "a": 0,
            "explain": "Pembatalan menghentikan kerja."
          },
          {
            "type": "mc",
            "q": "Compression streaming perlu",
            "options": [
              "memasang dependency",
              ".get(path, handler)",
              "plugin swagger/OpenAPI",
              "pertimbangan CPU"
            ],
            "a": 3,
            "explain": "Kompresi menambah beban CPU."
          },
          {
            "type": "mc",
            "q": "Timeout streaming membantu",
            "options": [
              "refine pada object",
              "httpOnly, secure, sameSite",
              "mencegah koneksi menggantung",
              "konfigurasi antar lingkungan"
            ],
            "a": 2,
            "explain": "Timeout menjaga resource."
          },
          {
            "type": "mc",
            "q": "Event framing SSE memakai",
            "options": [
              "teks berformat event",
              "properti pada context",
              "store saat pembuatan instance",
              "Jest/Vitest atau bun test"
            ],
            "a": 0,
            "explain": "SSE memakai format event teks."
          },
          {
            "type": "mc",
            "q": "Streaming JSON membutuhkan",
            "options": [
              "komposisi fitur",
              "kerjasama tim",
              "format berurutan",
              "pengukuran"
            ],
            "a": 2,
            "explain": "Format harus dapat di-parse bertahap."
          },
          {
            "type": "mc",
            "q": "Menguji streaming perlu",
            "options": [
              "pemantauan kesiapan",
              "instance utama",
              "klien streaming",
              "konsisten formatnya"
            ],
            "a": 2,
            "explain": "Test memakai klien yang membaca aliran."
          }
        ]
      },
      {
        "id": "elysia-27",
        "level": "Advance",
        "title": "State & Caching Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Cache respons endpoint membantu",
            "options": [
              "t.Optional(...)",
              "dibuat",
              "file(path)",
              "mengurangi beban"
            ],
            "a": 3,
            "explain": "Cache mengurangi kerja."
          },
          {
            "type": "mc",
            "q": "Invalidasi cache penting agar",
            "options": [
              "data segar",
              "plugin",
              "expect(res.status).toBe(200)",
              "environment/secret manager"
            ],
            "a": 0,
            "explain": "Invalidasi menjaga kesegaran."
          },
          {
            "type": "mc",
            "q": "Cache berbasis ETag memakai",
            "options": [
              "perubahan terisolasi",
              ".post(...)",
              "return string",
              "kondisi if-none-match"
            ],
            "a": 3,
            "explain": "ETag mendukung revalidasi."
          },
          {
            "type": "mc",
            "q": "Tidak boleh caching data personal berbagi",
            "options": [
              "efek terbatas pada area",
              "pengiriman bisa berulang",
              "teks berformat event",
              "ya, berisiko bocor"
            ],
            "a": 3,
            "explain": "Cache personal harus terpisah."
          },
          {
            "type": "mc",
            "q": "Store bersama antar instans memakai",
            "options": [
              "Redis",
              "HTTPS",
              "decorate/store",
              "deploy/restart"
            ],
            "a": 0,
            "explain": "Redis menyimpan state bersama."
          },
          {
            "type": "mc",
            "q": "Cache warming membantu",
            "options": [
              "httpOnly, secure, sameSite",
              "respons awal cepat",
              "konfigurasi antar lingkungan",
              "aliran satu arah"
            ],
            "a": 1,
            "explain": "Warming mengisi cache lebih awal."
          },
          {
            "type": "mc",
            "q": "TTL mengatur",
            "options": [
              "decorator = fungsi/properti, store = data",
              "kontrak dan validasi",
              "injeksi dan data tak valid",
              "masa berlaku cache"
            ],
            "a": 3,
            "explain": "TTL menentukan kedaluwarsa."
          },
          {
            "type": "mc",
            "q": "Menghindari cache stampede memakai",
            "options": [
              "mencegah penumpukan",
              "lock/backoff",
              "detail field",
              "hasil akhir"
            ],
            "a": 1,
            "explain": "Lock mencegah lonjakan."
          },
          {
            "type": "mc",
            "q": "Memoization dalam proses perlu",
            "options": [
              "menambah kompleksitas",
              "t.Object bersarang",
              "batas memori",
              "token/JWT atau sesi"
            ],
            "a": 2,
            "explain": "Memoization tanpa batas membengkak."
          },
          {
            "type": "mc",
            "q": "Mengukur cache hit ratio membantu",
            "options": [
              "menilai efektivitas",
              "token/JWT atau sesi",
              "perubahan skema",
              "manajemen koneksi"
            ],
            "a": 0,
            "explain": "Hit ratio menunjukkan manfaat."
          }
        ]
      },
      {
        "id": "elysia-28",
        "level": "Advance",
        "title": "Keamanan Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Rate limiting per pengguna membantu",
            "options": [
              "t.Optional(...)",
              "dibuat",
              "mencegah abuse",
              "file(path)"
            ],
            "a": 2,
            "explain": "Rate limit per pengguna lebih tepat."
          },
          {
            "type": "mc",
            "q": "Input sanitasi mencegah",
            "options": [
              ".post(...)",
              "injeksi",
              "'/*'",
              "return string"
            ],
            "a": 1,
            "explain": "Sanitasi mencegah injeksi."
          },
          {
            "type": "mc",
            "q": "Menyimpan sesi server-side lebih aman dari",
            "options": [
              "environment/secret manager",
              "join/eager load",
              "manipulasi klien",
              "resource terkait"
            ],
            "a": 2,
            "explain": "Sesi server tidak bisa diubah klien."
          },
          {
            "type": "mc",
            "q": "Token rotation membatasi",
            "options": [
              "plugin",
              "expect(res.status).toBe(200)",
              "dampak kebocoran",
              "t.Union([...]) atau t.Literal"
            ],
            "a": 2,
            "explain": "Rotasi token mengurangi risiko."
          },
          {
            "type": "mc",
            "q": "RBAC memeriksa",
            "options": [
              "izin per peran",
              "perilaku compiler TypeScript",
              "mengatur akses lintas origin",
              "decorator = fungsi/properti, store = data"
            ],
            "a": 0,
            "explain": "RBAC memeriksa peran."
          },
          {
            "type": "mc",
            "q": "Audit log membantu",
            "options": [
              "mencegah penumpukan",
              "investigasi",
              "detail field",
              "hasil akhir"
            ],
            "a": 1,
            "explain": "Audit log mendukung investigasi."
          },
          {
            "type": "mc",
            "q": "Menyembunyikan detail error mencegah",
            "options": [
              "pertimbangan CPU",
              "batas memori",
              "orientasi",
              "bocor informasi"
            ],
            "a": 3,
            "explain": "Detail error bisa membocorkan."
          },
          {
            "type": "mc",
            "q": "Dependency scanning membantu",
            "options": [
              "menutup kerentanan",
              "deploy/restart",
              "backoff",
              "isolasi test"
            ],
            "a": 0,
            "explain": "Scan menemukan celah."
          },
          {
            "type": "mc",
            "q": "Enkripsi at-rest penting untuk",
            "options": [
              "params.id",
              "status(404, ...)",
              "memvalidasi input",
              "data sensitif"
            ],
            "a": 3,
            "explain": "Enkripsi melindungi data diam."
          },
          {
            "type": "mc",
            "q": "Enkripsi in-transit memakai",
            "options": [
              "JSON",
              "keamanan",
              "hot spot",
              "TLS"
            ],
            "a": 3,
            "explain": "TLS melindungi data transit."
          }
        ]
      },
      {
        "id": "elysia-29",
        "level": "Advance",
        "title": "Refactor & Kualitas Kode",
        "exercises": [
          {
            "type": "mc",
            "q": "Nama yang jelas membantu",
            "options": [
              "integritas data",
              "file pada body/form",
              "crash total",
              "pemeliharaan"
            ],
            "a": 3,
            "explain": "Nama jelas memudahkan perawatan."
          },
          {
            "type": "mc",
            "q": "Fungsi kecil berfokus membantu",
            "options": [
              "crash total",
              "pengujian",
              "transform",
              "keamanan"
            ],
            "a": 1,
            "explain": "Fungsi kecil mudah diuji."
          },
          {
            "type": "mc",
            "q": "Menghindari duplikasi membantu",
            "options": [
              "fleksibilitas",
              "konsistensi",
              "hot spot",
              "keamanan konfigurasi"
            ],
            "a": 1,
            "explain": "DRY menjaga konsistensi."
          },
          {
            "type": "mc",
            "q": "Pemisahan lapisan membantu",
            "options": [
              "keandalan",
              "perubahan terisolasi",
              "mengukur cakupan",
              "klien streaming"
            ],
            "a": 1,
            "explain": "Lapisan terpisah memudahkan perubahan."
          },
          {
            "type": "mc",
            "q": "Type strict membantu",
            "options": [
              "reproduksibilitas",
              ".listen(3000)",
              "params.id",
              "mencegah bug"
            ],
            "a": 3,
            "explain": "Strict typing mengurangi bug."
          },
          {
            "type": "mc",
            "q": "Dokumentasi kode secukupnya membantu",
            "options": [
              "status(404, ...)",
              "memvalidasi input",
              "orientasi",
              "parameter path"
            ],
            "a": 2,
            "explain": "Dokumentasi membantu pemahaman."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap lebih aman",
            "options": [
              "JSON",
              "TLS",
              "body",
              "ya"
            ],
            "a": 3,
            "explain": "Bertahap mudah diverifikasi."
          },
          {
            "type": "mc",
            "q": "Review kode membantu",
            "options": [
              "mendeteksi regresi",
              "t.String({ format })",
              "injeksi skrip",
              "kualitas"
            ],
            "a": 3,
            "explain": "Review menjaga kualitas."
          },
          {
            "type": "mc",
            "q": "Test regresi melindungi",
            "options": [
              "custom check/refine",
              "atomisitas operasi",
              "fitur lama",
              "handler pesan/onMessage"
            ],
            "a": 2,
            "explain": "Regresi mencegah kerusakan."
          },
          {
            "type": "mc",
            "q": "Linter + formatter menjaga",
            "options": [
              "handler pesan/onMessage",
              "storage/objek storage",
              "password/token",
              "konsistensi"
            ],
            "a": 3,
            "explain": "Tool menjaga gaya."
          }
        ]
      },
      {
        "id": "elysia-30",
        "level": "Advance",
        "title": "Ekosistem Bun & Tooling",
        "exercises": [
          {
            "type": "mc",
            "q": "Bun menyediakan",
            "options": [
              "menjaga kontrak output",
              "runtime, bundler, dan test runner",
              "tipe isi respons",
              "merestart layanan bermasalah"
            ],
            "a": 1,
            "explain": "Bun all-in-one tooling."
          },
          {
            "type": "mc",
            "q": "bun install dipakai untuk",
            "options": [
              "afterHandle",
              "memasang dependency",
              "mendeteksi regresi",
              "t.String({ format })"
            ],
            "a": 1,
            "explain": "bun install memasang paket."
          },
          {
            "type": "mc",
            "q": "bun build membuat",
            "options": [
              "orientasi",
              "bundel",
              ".listen(3000)",
              "params.id"
            ],
            "a": 1,
            "explain": "bun build membundel."
          },
          {
            "type": "mc",
            "q": "Perintah CLI `bun test` secara otomatis mencari dan mengeksekusi berkas",
            "options": [
              "test",
              "params.id",
              "afterHandle",
              "JSON"
            ],
            "a": 0,
            "explain": "bun test menjalankan test."
          },
          {
            "type": "mc",
            "q": "Kompatibilitas Node API membantu",
            "options": [
              "deploy/restart",
              "backoff",
              "isolasi test",
              "migrasi library"
            ],
            "a": 3,
            "explain": "Bun mendukung banyak API Node."
          },
          {
            "type": "mc",
            "q": "Menggunakan TypeScript langsung tanpa transpile manual karena",
            "options": [
              "Bun mendukung TS",
              "hanya berlaku pada grup",
              "keamanan data antar request",
              "test cepat dan terisolasi"
            ],
            "a": 0,
            "explain": "Bun menjalankan TS native."
          },
          {
            "type": "mc",
            "q": "Manajemen versi runtime penting untuk",
            "options": [
              "mencegah penumpukan",
              "reproduksibilitas",
              "detail field",
              "hasil akhir"
            ],
            "a": 1,
            "explain": "Versi konsisten mencegah beda perilaku."
          },
          {
            "type": "mc",
            "q": "Bundler pilihan berpengaruh pada",
            "options": [
              "diuji dan dipakai ulang",
              "titik tertentu siklus request",
              "bagian kode teruji",
              "ukuran dan performa"
            ],
            "a": 3,
            "explain": "Bundler memengaruhi hasil."
          },
          {
            "type": "mc",
            "q": "Monorepo di Bun didukung dengan",
            "options": [
              "plugin",
              "expect(res.status).toBe(200)",
              "environment/secret manager",
              "workspaces"
            ],
            "a": 3,
            "explain": "Workspaces mengelola paket."
          },
          {
            "type": "mc",
            "q": "Lockfile penting agar",
            "options": [
              "dependency konsisten",
              "environment/secret manager",
              "join/eager load",
              "resource terkait"
            ],
            "a": 0,
            "explain": "Lockfile mengunci versi."
          }
        ]
      },
      {
        "id": "elysia-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Elysia",
        "exercises": [
          {
            "type": "mc",
            "q": "Elysia dirancang untuk membangun server/API terutama pada runtime",
            "options": [
              "JVM",
              "MATLAB",
              "Bun",
              "Unity"
            ],
            "a": 2,
            "explain": "Elysia adalah framework web TypeScript/JavaScript yang dirancang untuk Bun."
          },
          {
            "type": "mc",
            "q": "Pada Elysia, route GET sederhana biasanya didaftarkan dengan",
            "options": [
              ".get(path, handler)",
              ".style(path, handler)",
              ".table(path, handler)",
              ".compileCSS(path, handler)"
            ],
            "a": 0,
            "explain": "Metode get mendaftarkan handler untuk request HTTP GET."
          },
          {
            "type": "mc",
            "q": "Schema request pada endpoint Elysia berguna untuk",
            "options": [
              "Melewati pemeriksaan tipe",
              "Menggantikan semua pengujian",
              "Memvalidasi bentuk input di batas endpoint",
              "Mengubah request menjadi file CSS"
            ],
            "a": 2,
            "explain": "Schema membantu memvalidasi input dan menjaga kontrak API."
          },
          {
            "type": "mc",
            "q": "Plugin pada aplikasi Elysia paling berguna untuk",
            "options": [
              "Mengganti semua route dengan CSS",
              "Membuat variabel global tanpa batas",
              "Mengelompokkan dan memakai ulang fitur server",
              "Menjalankan query tanpa koneksi"
            ],
            "a": 2,
            "explain": "Plugin membantu memisahkan fitur dengan cara memakai ulang fitur."
          },
          {
            "type": "fill",
            "q": "Lengkapi pendaftaran plugin:",
            "code": "app.___(plugin)",
            "accept": [
              "use"
            ],
            "explain": "use mendaftarkan plugin pada instance Elysia."
          }
        ]
      }
    ]
  }
];

export { CONTENT_ELYSIA };
