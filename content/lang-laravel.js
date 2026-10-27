/* CodeDuo — blok konten: topik "Laravel" (dipisah dari Blok Web).
 * 1 topik (laravel) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_LARAVEL = [
{
    "id": "laravel",
    "name": "Laravel",
    "icon": "🅻",
    "color": "#ff2d20",
    "desc": "Framework web PHP: routing, ORM, dan ekosistem",
    "lessons": [
      {
        "id": "laravel-1",
        "level": "Dasar",
        "title": "Pengenalan Laravel",
        "exercises": [
          {
            "type": "mc",
            "q": "Laravel adalah framework web untuk bahasa",
            "options": [
              "Python",
              "Ruby",
              "JavaScript",
              "PHP"
            ],
            "a": 3,
            "explain": "Laravel dibangun dengan PHP dan berjalan di atas PHP."
          },
          {
            "type": "mc",
            "q": "Alat resmi untuk membuat proyek Laravel baru dari terminal adalah",
            "options": [
              "npm create laravel",
              "rails new",
              "cargo new",
              "composer create-project"
            ],
            "a": 3,
            "explain": "Proyek Laravel dibuat lewat Composer, package manager PHP."
          },
          {
            "type": "mc",
            "q": "Pola arsitektur yang dianut Laravel secara umum adalah",
            "options": [
              "MVVM murni",
              "MVC (Model-View-Controller)",
              "Flux satu arah",
              "Hexagonal wajib"
            ],
            "a": 1,
            "explain": "Laravel menganut pola MVC: Model data, View tampilan, Controller logika."
          },
          {
            "type": "mc",
            "q": "Direktori tempat menyimpan template tampilan Laravel adalah",
            "options": [
              "app/http",
              "database/schema",
              "resources/views",
              "public/css"
            ],
            "a": 2,
            "explain": "Template Blade disimpan di resources/views."
          },
          {
            "type": "mc",
            "q": "File konfigurasi utama variabel environment Laravel adalah",
            "options": [
              "config.json",
              ".env",
              "settings.ini",
              "env.yaml"
            ],
            "a": 1,
            "explain": "Nilai environment dibaca dari berkas .env."
          },
          {
            "type": "mc",
            "q": "Perintah artisan untuk menjalankan server pengembangan lokal adalah",
            "options": [
              "php artisan run",
              "php artisan serve",
              "php serve app",
              "artisan dev"
            ],
            "a": 1,
            "explain": "php artisan serve menjalankan server pengembangan bawaan Laravel."
          },
          {
            "type": "mc",
            "q": "Direktori tempat menaruh gambar dan aset publik adalah",
            "options": [
              "public",
              "storage/views",
              "resources/js",
              "app/assets"
            ],
            "a": 0,
            "explain": "Aset yang diakses browser langsung diletakkan di public."
          },
          {
            "type": "mc",
            "q": "Manajer dependensi PHP yang dipakai Laravel adalah",
            "options": [
              "Composer",
              "npm",
              "pip",
              "gem"
            ],
            "a": 0,
            "explain": "Composer mengelola package PHP pada proyek Laravel."
          },
          {
            "type": "mc",
            "q": "Blade adalah",
            "options": [
              "database engine",
              "paket CSS",
              "template engine bawaan Laravel",
              "protokol jaringan"
            ],
            "a": 2,
            "explain": "Blade adalah template engine untuk menulis tampilan dengan sintaks ringkas."
          },
          {
            "type": "mc",
            "q": "Perintah artisan untuk melihat daftar perintah yang tersedia adalah",
            "options": [
              "php artisan help",
              "php artisan all",
              "php artisan list",
              "php artisan menu"
            ],
            "a": 2,
            "explain": "php artisan list menampilkan seluruh perintah artisan."
          }
        ]
      },
      {
        "id": "laravel-2",
        "level": "Dasar",
        "title": "Routing Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Route Laravel ditulis di berkas",
            "options": [
              "app/routes.js",
              "config/web.ini",
              "public/route.php",
              "routes/web.php"
            ],
            "a": 3,
            "explain": "Route web didefinisikan di routes/web.php."
          },
          {
            "type": "mc",
            "q": "Fungsi yang mendaftarkan route GET sederhana adalah",
            "options": [
              "Route::post('/halo', ...)",
              "Route::get('/halo', ...)",
              "Route::css('/halo')",
              "Route::table('halo')"
            ],
            "a": 1,
            "explain": "Route::get mendaftarkan handler untuk method HTTP GET."
          },
          {
            "type": "mc",
            "q": "Route dengan parameter dinamis ditulis dengan",
            "options": [
              "/user/(id)",
              "/user/:id?",
              "/user/{id}",
              "/user[id]"
            ],
            "a": 2,
            "explain": "Parameter route Laravel memakai kurung kurawal, mis. {id}."
          },
          {
            "type": "mc",
            "q": "Parameter route bisa diberi batasan dengan",
            "options": [
              "->regex(id)",
              "->filter(id)",
              "->only(id)",
              "->where('id', '[0-9]+')"
            ],
            "a": 3,
            "explain": "where membatasi pola parameter route."
          },
          {
            "type": "mc",
            "q": "Route yang menampilkan view dikembalikan dengan helper",
            "options": [
              "render()",
              "view()",
              "html()",
              "blade()"
            ],
            "a": 1,
            "explain": "Helper view() mengembalikan tampilan Blade."
          },
          {
            "type": "mc",
            "q": "Route bisa diberi nama agar mudah dirujuk dengan",
            "options": [
              "->name('profil')",
              "->alias('profil')",
              "->id('profil')",
              "->tag('profil')"
            ],
            "a": 0,
            "explain": "name memberi nama route untuk dipakai di url() atau route()."
          },
          {
            "type": "mc",
            "q": "Group route biasanya dipakai untuk",
            "options": [
              "mengganti database",
              "menghapus controller",
              "berbagi prefix atau middleware",
              "menulis CSS"
            ],
            "a": 2,
            "explain": "Route group menerapkan atribut bersama pada banyak route."
          },
          {
            "type": "mc",
            "q": "Middleware pada route berfungsi untuk",
            "options": [
              "menambah tabel",
              "memeriksa request sebelum handler",
              "mengubah warna halaman",
              "membuat migration"
            ],
            "a": 1,
            "explain": "Middleware menyaring/memproses request sebelum mencapai handler."
          },
          {
            "type": "mc",
            "q": "Response JSON pada route bisa dikembalikan dengan",
            "options": [
              "json_return($data)",
              "Route::json($data)",
              "render_json($data)",
              "response()->json($data)"
            ],
            "a": 3,
            "explain": "Helper response()->json mengembalikan respons berformat JSON."
          },
          {
            "type": "mc",
            "q": "Route fallback untuk 404 biasanya ditutup dengan",
            "options": [
              "Route::fallback(...)",
              "Route::404(...)",
              "Route::miss(...)",
              "Route::none(...)"
            ],
            "a": 0,
            "explain": "Route::fallback menangani request yang tidak cocok dengan route mana pun."
          }
        ]
      },
      {
        "id": "laravel-3",
        "level": "Dasar",
        "title": "Controller & View",
        "exercises": [
          {
            "type": "mc",
            "q": "Controller dibuat dengan perintah artisan",
            "options": [
              "php artisan new:controller",
              "php artisan add controller",
              "php artisan controller:new",
              "php artisan make:controller"
            ],
            "a": 3,
            "explain": "make:controller menghasilkan class controller baru."
          },
          {
            "type": "mc",
            "q": "Controller biasanya menyimpan logika",
            "options": [
              "penanganan request dan penyusunan respons",
              "styling halaman",
              "skema database",
              "setting web server"
            ],
            "a": 0,
            "explain": "Controller mengatur alur request dan menyiapkan data untuk view."
          },
          {
            "type": "mc",
            "q": "Mengirim data ke view dilakukan dengan",
            "options": [
              "view($nama)",
              "send(['nama' => $nama])",
              "view('profil', ['nama' => $nama])",
              "view()->data($nama)"
            ],
            "a": 2,
            "explain": "Argumen kedua view() menerima array data untuk template."
          },
          {
            "type": "mc",
            "q": "Blade menampilkan variabel dengan sintaks",
            "options": [
              "<% nama %>",
              "${nama}",
              "@nama@",
              "{{ $nama }}"
            ],
            "a": 3,
            "explain": "{{ }} mencetak variabel yang sudah di-escape di Blade."
          },
          {
            "type": "mc",
            "q": "Blade menampilkan HTML mentah dengan",
            "options": [
              "{{ $html }}",
              "@raw($html)@",
              "{!! $html !!}",
              "<raw>$html</raw>"
            ],
            "a": 2,
            "explain": "{!! !!} mencetak tanpa escaping — pakai hanya untuk HTML tepercaya."
          },
          {
            "type": "mc",
            "q": "Percabangan di Blade ditulis dengan",
            "options": [
              "<if> ... </if>",
              "@if ... @endif",
              "#if ... #end",
              "{{if}} ... {{end}}"
            ],
            "a": 1,
            "explain": "Blade menyediakan direktif @if, @else, @endif."
          },
          {
            "type": "mc",
            "q": "Perulangan pada Blade memakai direktif",
            "options": [
              "@loopforeach",
              "@foreach",
              "@repeat",
              "@eachloop"
            ],
            "a": 1,
            "explain": "@foreach mengulang koleksi di template Blade."
          },
          {
            "type": "mc",
            "q": "Layout Blade dipakai ulang dengan direktif",
            "options": [
              "@layout",
              "@extends",
              "@include_layout",
              "@base"
            ],
            "a": 1,
            "explain": "@extends mewarisi layout induk pada Blade."
          },
          {
            "type": "mc",
            "q": "Menyisipkan potongan view lain di Blade memakai",
            "options": [
              "@insert",
              "@part",
              "@include",
              "@mount"
            ],
            "a": 2,
            "explain": "@include menyisipkan sub-view ke template."
          },
          {
            "type": "mc",
            "q": "Escape output di Blade penting untuk mencegah",
            "options": [
              "SQL injection otomatis",
              "memory leak",
              "XSS (cross-site scripting)",
              "race condition"
            ],
            "a": 2,
            "explain": "Escaping mencegah skrip pengguna dieksekusi di browser lain."
          }
        ]
      },
      {
        "id": "laravel-4",
        "level": "Dasar",
        "title": "Migration & Skema",
        "exercises": [
          {
            "type": "mc",
            "q": "Migration dibuat dengan perintah artisan",
            "options": [
              "php artisan create:table",
              "php artisan make:migration",
              "php artisan new:table",
              "php artisan schema:new"
            ],
            "a": 1,
            "explain": "make:migration membuat berkas migration baru."
          },
          {
            "type": "mc",
            "q": "Menjalankan semua migration yang tertunda dengan",
            "options": [
              "php artisan db:run",
              "php artisan schema:apply",
              "php artisan migrate",
              "php artisan migrate:all"
            ],
            "a": 2,
            "explain": "migrate menerapkan migration yang belum dijalankan."
          },
          {
            "type": "mc",
            "q": "Migration berfungsi untuk",
            "options": [
              "mengubah warna UI",
              "menulis route baru",
              "mengompres aset",
              "mencatat perubahan skema database secara bertahap"
            ],
            "a": 3,
            "explain": "Migration menyimpan riwayat perubahan skema agar konsisten antar tim."
          },
          {
            "type": "mc",
            "q": "Membatalkan migration terakhir dengan",
            "options": [
              "php artisan migrate:undo",
              "php artisan migrate:back",
              "php artisan migrate:rollback",
              "php artisan db:drop"
            ],
            "a": 2,
            "explain": "migrate:rollback membatalkan batch migration terakhir."
          },
          {
            "type": "mc",
            "q": "Method yang dipakai untuk mendefinisikan tabel pada migration adalah",
            "options": [
              "Table::new",
              "Schema::create",
              "DB::make",
              "Schema::table"
            ],
            "a": 1,
            "explain": "Schema::create membuat tabel baru pada migration."
          },
          {
            "type": "mc",
            "q": "Tipe kolom untuk teks pendek pada schema builder adalah",
            "options": [
              "text",
              "longchar",
              "string",
              "varchar2"
            ],
            "a": 2,
            "explain": "Kolom string umumnya dipetakan ke VARCHAR."
          },
          {
            "type": "mc",
            "q": "Primary key bertipe integer auto increment dibuat dengan",
            "options": [
              "pk()",
              "auto()",
              "id()",
              "serial()"
            ],
            "a": 2,
            "explain": "Helper id() membuat kolom id primary key auto increment."
          },
          {
            "type": "mc",
            "q": "Menambahkan foreign key dilakukan dengan",
            "options": [
              "fk()->link()",
              "references()->to()",
              "key()->foreign()",
              "foreignId()->constrained()"
            ],
            "a": 3,
            "explain": "foreignId()->constrained() membuat kolom dan constraint relasi."
          },
          {
            "type": "mc",
            "q": "Berkas migration disimpan di direktori",
            "options": [
              "app/migrations",
              "config/migrations",
              "resources/migrations",
              "database/migrations"
            ],
            "a": 3,
            "explain": "Migration disimpan di database/migrations."
          },
          {
            "type": "mc",
            "q": "Seeder dipakai untuk",
            "options": [
              "membuat route",
              "mengisi data awal ke database",
              "mengatur middleware",
              "menulis test"
            ],
            "a": 1,
            "explain": "Seeder mengisi data contoh atau data awal."
          }
        ]
      },
      {
        "id": "laravel-5",
        "level": "Dasar",
        "title": "Eloquent Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Eloquent adalah",
            "options": [
              "ORM bawaan Laravel",
              "template engine",
              "web server",
              "paket CSS"
            ],
            "a": 0,
            "explain": "Eloquent memetakan model PHP ke tabel database."
          },
          {
            "type": "mc",
            "q": "Model dibuat dengan perintah artisan",
            "options": [
              "php artisan new:model",
              "php artisan make:model",
              "php artisan model:create",
              "php artisan db:model"
            ],
            "a": 1,
            "explain": "make:model membuat class model Eloquent."
          },
          {
            "type": "mc",
            "q": "Secara default, nama tabel dari model Post adalah",
            "options": [
              "Post",
              "post_table",
              "tbl_post",
              "posts"
            ],
            "a": 3,
            "explain": "Eloquent memakai bentuk jamak snake_case dari nama model."
          },
          {
            "type": "mc",
            "q": "Mengambil semua record dari model Post memakai",
            "options": [
              "Post::getAll()",
              "Post::all()",
              "Post::fetch_all()",
              "Post::rows()"
            ],
            "a": 1,
            "explain": "all() mengambil seluruh record dari tabel model."
          },
          {
            "type": "mc",
            "q": "Mencari record berdasarkan primary key memakai",
            "options": [
              "Post::find($id)",
              "Post::get($id)",
              "Post::row($id)",
              "Post::pick($id)"
            ],
            "a": 0,
            "explain": "find() mencari berdasarkan primary key."
          },
          {
            "type": "mc",
            "q": "Membuat record baru lalu menyimpan memakai",
            "options": [
              "Post::insert($data)",
              "Post::make($data)",
              "Post::create($data)",
              "Post::push($data)"
            ],
            "a": 2,
            "explain": "create() membuat dan menyimpan record sekaligus."
          },
          {
            "type": "mc",
            "q": "Kolom yang boleh diisi massal dideklarasikan pada properti",
            "options": [
              "$columns",
              "$assign",
              "$mass",
              "$fillable"
            ],
            "a": 3,
            "explain": "$fillable mendaftar atribut yang boleh diisi mass assignment."
          },
          {
            "type": "mc",
            "q": "Relasi satu ke banyak dari User ke Post memakai method",
            "options": [
              "belongsToMany",
              "hasOne",
              "morphOne",
              "hasMany"
            ],
            "a": 3,
            "explain": "hasMany menyatakan relasi satu ke banyak."
          },
          {
            "type": "mc",
            "q": "Relasi kebalikan dari Post ke User memakai method",
            "options": [
              "hasMany",
              "belongsTo",
              "hasManyThrough",
              "morphMany"
            ],
            "a": 1,
            "explain": "belongsTo menyatakan kebalikan relasi anak ke induk."
          },
          {
            "type": "mc",
            "q": "Mengambil query builder dari model dilakukan dengan",
            "options": [
              "Post::builder()",
              "Post::sql()",
              "Post::query()",
              "Post::table()"
            ],
            "a": 2,
            "explain": "query() memulai query builder untuk model tersebut."
          }
        ]
      },
      {
        "id": "laravel-6",
        "level": "Dasar",
        "title": "Request & Form",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengambil input dari request memakai",
            "options": [
              "$request->get_input('nama')",
              "$request->input('nama')",
              "$request->fetch('nama')",
              "$request->value('nama')"
            ],
            "a": 1,
            "explain": "input() membaca nilai input dari request."
          },
          {
            "type": "mc",
            "q": "Mengambil semua input sekaligus memakai",
            "options": [
              "$request->everything()",
              "$request->inputs()",
              "$request->all()",
              "$request->dataAll()"
            ],
            "a": 2,
            "explain": "all() mengembalikan seluruh input request."
          },
          {
            "type": "mc",
            "q": "Memeriksa apakah input ada memakai",
            "options": [
              "$request->isset('nama')",
              "$request->has('nama')",
              "$request->exists('nama')",
              "$request->find('nama')"
            ],
            "a": 1,
            "explain": "has() memeriksa keberadaan input."
          },
          {
            "type": "mc",
            "q": "Validasi request paling ringkas dilakukan dengan",
            "options": [
              "validate($request)",
              "$request->check([...])",
              "$request->validate([...])",
              "Route::validate([...])"
            ],
            "a": 2,
            "explain": "validate() memvalidasi dan otomatis mengarahkan balik bila gagal."
          },
          {
            "type": "mc",
            "q": "Aturan validasi \"wajib diisi\" dituliskan sebagai",
            "options": [
              "must",
              "required",
              "filled?",
              "present*"
            ],
            "a": 1,
            "explain": "Aturan required mewajibkan field terisi."
          },
          {
            "type": "mc",
            "q": "Aturan validasi email memakai",
            "options": [
              "email",
              "mail",
              "address",
              "sure-email"
            ],
            "a": 0,
            "explain": "Aturan email memeriksa format alamat email valid."
          },
          {
            "type": "mc",
            "q": "CSRF protection pada form diwujudkan dengan direktif Blade",
            "options": [
              "@token",
              "@csrf",
              "@secure",
              "@guard"
            ],
            "a": 1,
            "explain": "@csrf menambahkan hidden input token CSRF."
          },
          {
            "type": "mc",
            "q": "Method spoofing pada form (PUT/DELETE) memakai",
            "options": [
              "@verb",
              "@put",
              "@formmethod",
              "@method"
            ],
            "a": 3,
            "explain": "@method menyisipkan hidden input _method."
          },
          {
            "type": "mc",
            "q": "Menampilkan pesan error validasi di Blade memakai",
            "options": [
              "$messages",
              "$errors",
              "$fail",
              "$issues"
            ],
            "a": 1,
            "explain": "Variabel $errors tersedia otomatis setelah validasi gagal."
          },
          {
            "type": "mc",
            "q": "Menampilkan pesan error pertama untuk field memakai",
            "options": [
              "$errors->getFirst('nama')",
              "$errors->first('nama')",
              "$errors['nama']->msg()",
              "$errors->show('nama')"
            ],
            "a": 1,
            "explain": "first() mengambil pesan error pertama untuk field tersebut."
          }
        ]
      },
      {
        "id": "laravel-7",
        "level": "Dasar",
        "title": "Session, Cookie & Flash",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyimpan nilai session memakai",
            "options": [
              "session()->set('kunci', $val)",
              "session()->add('kunci', $val)",
              "session()->put('kunci', $val)",
              "session()->send('kunci', $val)"
            ],
            "a": 2,
            "explain": "put() menyimpan nilai ke session."
          },
          {
            "type": "mc",
            "q": "Membaca nilai session memakai",
            "options": [
              "session('kunci')",
              "session()->read('kunci')",
              "session()->get_val('kunci')",
              "session()->fetch('kunci')"
            ],
            "a": 0,
            "explain": "Helper session() membaca nilai berdasarkan kunci."
          },
          {
            "type": "mc",
            "q": "Menghapus nilai session memakai",
            "options": [
              "session()->remove('kunci')",
              "session()->del('kunci')",
              "session()->forget('kunci')",
              "session()->clear('kunci')"
            ],
            "a": 2,
            "explain": "forget() menghapus satu kunci session."
          },
          {
            "type": "mc",
            "q": "Flash message bertahan untuk",
            "options": [
              "selamanya",
              "satu sesi browser penuh",
              "satu menit saja",
              "satu request berikutnya"
            ],
            "a": 3,
            "explain": "Flash data hanya tersedia pada request berikutnya."
          },
          {
            "type": "mc",
            "q": "Menyimpan flash message memakai",
            "options": [
              "session()->flash('status', $msg)",
              "session()->putFlash('status', $msg)",
              "session()->once('status', $msg)",
              "session()->temp('status', $msg)"
            ],
            "a": 0,
            "explain": "flash() menyimpan data sekali pakai."
          },
          {
            "type": "mc",
            "q": "Menampilkan flash message di Blade biasanya memakai",
            "options": [
              "@if (session('status'))",
              "@flash(status)",
              "@message(status)",
              "@session(status)"
            ],
            "a": 0,
            "explain": "Flash diperiksa dengan helper session() di template."
          },
          {
            "type": "mc",
            "q": "Membaca cookie memakai",
            "options": [
              "Cookie::read('kunci')",
              "cookie_read('kunci')",
              "Cookie::val('kunci')",
              "Cookie::get('kunci')"
            ],
            "a": 3,
            "explain": "Cookie::get membaca nilai cookie pada request saat ini."
          },
          {
            "type": "mc",
            "q": "Membuat cookie memakai",
            "options": [
              "Cookie::create_val(...)",
              "new Cookie(...)",
              "Cookie::make(...)",
              "Cookie::set_new(...)"
            ],
            "a": 2,
            "explain": "Cookie::make menyiapkan objek cookie untuk dikirim."
          },
          {
            "type": "mc",
            "q": "Session driver Laravel dikonfigurasi di file",
            "options": [
              "config/cookie.ini",
              "config/session.php",
              "app/session.php",
              "settings/session.json"
            ],
            "a": 1,
            "explain": "Konfigurasi session ada di config/session.php."
          },
          {
            "type": "mc",
            "q": "Regenerasi ID session setelah login penting untuk mencegah",
            "options": [
              "SQL injection",
              "XSS",
              "memory leak",
              "session fixation"
            ],
            "a": 3,
            "explain": "Regenerasi ID mencegah penyerangan session fixation."
          }
        ]
      },
      {
        "id": "laravel-8",
        "level": "Dasar",
        "title": "Blade Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Komponen Blade dibuat dengan perintah artisan",
            "options": [
              "php artisan new:component",
              "php artisan blade:component",
              "php artisan make:component",
              "php artisan component:make"
            ],
            "a": 2,
            "explain": "make:component membuat class dan view komponen Blade."
          },
          {
            "type": "mc",
            "q": "Komponen Blade dipanggil dengan tag",
            "options": [
              "<blade-nama />",
              "<x-nama-komponen />",
              "<c:nama />",
              "@component(nama)"
            ],
            "a": 1,
            "explain": "Sintaks <x-...> memanggil komponen Blade."
          },
          {
            "type": "mc",
            "q": "Mengirim slot ke komponen dilakukan dengan",
            "options": [
              "<slot-title>",
              "@slot(title)",
              "<x-title>",
              "<x-slot:title>"
            ],
            "a": 3,
            "explain": "<x-slot:...> mendefinisikan slot bernama pada komponen."
          },
          {
            "type": "mc",
            "q": "Direktif untuk menampilkan blok bila belum login adalah",
            "options": [
              "@noauth",
              "@anon",
              "@guest",
              "@public"
            ],
            "a": 2,
            "explain": "@guest menampilkan blok untuk pengguna yang belum login."
          },
          {
            "type": "mc",
            "q": "Direktif untuk menampilkan blok bila sudah login adalah",
            "options": [
              "@login",
              "@user",
              "@auth",
              "@signed"
            ],
            "a": 2,
            "explain": "@auth menampilkan blok untuk pengguna terautentikasi."
          },
          {
            "type": "mc",
            "q": "Memuat aset CSS/JS dengan manifest Vite memakai direktif",
            "options": [
              "@asset",
              "@bundle",
              "@css",
              "@vite"
            ],
            "a": 3,
            "explain": "@vite memuat aset sesuai manifest build Vite."
          },
          {
            "type": "mc",
            "q": "Menulis komentar Blade yang tidak tampil di HTML memakai",
            "options": [
              "<!-- komentar -->",
              "/* komentar */",
              "{{-- komentar --}}",
              "# komentar"
            ],
            "a": 2,
            "explain": "{{-- --}} dihapus saat kompilasi Blade."
          },
          {
            "type": "mc",
            "q": "Menyisipkan partial dengan data tambahan memakai",
            "options": [
              "@partial('part', 1)",
              "@include('part', ['x' => 1])",
              "@insert('part', 'x', 1)",
              "@render('part', 1)"
            ],
            "a": 1,
            "explain": "@include meneruskan array data ke view yang disisipkan."
          },
          {
            "type": "mc",
            "q": "Direktif untuk menampilkan view bila berkas ada adalah",
            "options": [
              "@includeExists",
              "@maybeInclude",
              "@optionalInclude",
              "@includeIf"
            ],
            "a": 3,
            "explain": "@includeIf menyisipkan view hanya jika berkasnya ada."
          },
          {
            "type": "mc",
            "q": "Blade component attribute bag memakai variabel",
            "options": [
              "$attributes",
              "$props",
              "$attrs",
              "$bag"
            ],
            "a": 0,
            "explain": "$attributes memberi akses atribut tambahan yang dikirim ke komponen."
          }
        ]
      },
      {
        "id": "laravel-9",
        "level": "Dasar",
        "title": "Konfigurasi & Environment",
        "exercises": [
          {
            "type": "mc",
            "q": "Membaca variabel environment di kode memakai helper",
            "options": [
              "env('KUNCI')",
              "ENV('KUNCI')",
              "getenv_key('KUNCI')",
              "config_env('KUNCI')"
            ],
            "a": 0,
            "explain": "Helper env membaca nilai dari .env."
          },
          {
            "type": "mc",
            "q": "Membaca nilai konfigurasi memakai helper",
            "options": [
              "cfg('app.name')",
              "config_get('app.name')",
              "config('app.name')",
              "setting('app.name')"
            ],
            "a": 2,
            "explain": "config() membaca nilai dari direktori config."
          },
          {
            "type": "mc",
            "q": "Saat kode di-cache konfigurasi, sebaiknya aplikasi memakai",
            "options": [
              "config(), bukan env(), di luar file config",
              "env() di seluruh controller",
              "langsung getenv() di view",
              "variabel global PHP"
            ],
            "a": 0,
            "explain": "Setelah config:cache, env() hanya andal di berkas config."
          },
          {
            "type": "mc",
            "q": "Perintah untuk meng-cache konfigurasi di produksi adalah",
            "options": [
              "php artisan cache:config",
              "php artisan config:build",
              "php artisan make:cache",
              "php artisan config:cache"
            ],
            "a": 3,
            "explain": "config:cache menggabungkan seluruh konfigurasi jadi satu cache."
          },
          {
            "type": "mc",
            "q": "Mode debug aplikasi diatur oleh variabel",
            "options": [
              "DEBUG_MODE",
              "APP_DEBUG",
              "APP_VERBOSE",
              "SHOW_ERRORS"
            ],
            "a": 1,
            "explain": "APP_DEBUG mengaktifkan pesan error detail."
          },
          {
            "type": "mc",
            "q": "Kunci aplikasi (APP_KEY) penting untuk",
            "options": [
              "styling halaman",
              "enkripsi dan keamanan data sensitif",
              "routing",
              "kompresi gambar"
            ],
            "a": 1,
            "explain": "APP_KEY dipakai untuk enkripsi cookie dan data terenkripsi."
          },
          {
            "type": "mc",
            "q": "Membuat ulang APP_KEY dilakukan dengan",
            "options": [
              "php artisan app:key",
              "php artisan key:generate",
              "php artisan generate:key",
              "php artisan keys:new"
            ],
            "a": 1,
            "explain": "key:generate menghasilkan APP_KEY baru."
          },
          {
            "type": "mc",
            "q": "Berkas .env contoh untuk dibagikan ke tim adalah",
            "options": [
              ".env.sample",
              ".env.template",
              ".env.example",
              ".env.public"
            ],
            "a": 2,
            "explain": ".env.example berisi template variabel tanpa nilai rahasia."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia di repository sebaiknya",
            "options": [
              "dilakukan agar tim mudah",
              "ditulis di README",
              "dihindari; gunakan .env lokal/secret manager",
              "ditaruh di routes/web.php"
            ],
            "a": 2,
            "explain": "Rahasia tidak boleh masuk source control."
          },
          {
            "type": "mc",
            "q": "Direktori untuk konfigurasi aplikasi adalah",
            "options": [
              "settings",
              "conf",
              "config",
              "app/config"
            ],
            "a": 2,
            "explain": "Seluruh berkas konfigurasi berada di direktori config."
          }
        ]
      },
      {
        "id": "laravel-10",
        "level": "Dasar",
        "title": "Artesan & Struktur Proyek",
        "exercises": [
          {
            "type": "mc",
            "q": "Direktori utama kode aplikasi pada Laravel adalah",
            "options": [
              "app",
              "src",
              "lib",
              "code"
            ],
            "a": 0,
            "explain": "Direktori app berisi kode aplikasi utama."
          },
          {
            "type": "mc",
            "q": "Direktori untuk test Laravel adalah",
            "options": [
              "test",
              "tests",
              "spec",
              "qa"
            ],
            "a": 1,
            "explain": "Test disimpan di direktori tests."
          },
          {
            "type": "mc",
            "q": "Perintah untuk membersihkan seluruh cache aplikasi adalah",
            "options": [
              "php artisan cache:clean-all",
              "php artisan clear:all",
              "php artisan optimize:clear",
              "php artisan reset"
            ],
            "a": 2,
            "explain": "optimize:clear membersihkan berbagai cache aplikasi."
          },
          {
            "type": "mc",
            "q": "Perintah untuk menjalankan test adalah",
            "options": [
              "php artisan run:test",
              "php artisan check",
              "php artisan spec",
              "php artisan test"
            ],
            "a": 3,
            "explain": "php artisan test menjalankan test suite aplikasi."
          },
          {
            "type": "mc",
            "q": "Tinker adalah alat untuk",
            "options": [
              "mengompres gambar",
              "membuat migration",
              "berinteraksi dengan aplikasi lewat REPL",
              "menulis CSS"
            ],
            "a": 2,
            "explain": "php artisan tinker membuka REPL untuk bereksperimen dengan aplikasi."
          },
          {
            "type": "mc",
            "q": "Service provider didaftarkan di berkas",
            "options": [
              "routes/web.php",
              "app/providers.php",
              "config/app.php",
              "public/index.php"
            ],
            "a": 2,
            "explain": "Provider aplikasi didaftarkan melalui bootstrap/providers.php atau config/app.php sesuai versi."
          },
          {
            "type": "mc",
            "q": "Kernel HTTP bertanggung jawab atas",
            "options": [
              "menulis template",
              "skema database",
              "memproses request dan middleware",
              "aset statis"
            ],
            "a": 2,
            "explain": "HTTP kernel mengatur alur request melalui middleware."
          },
          {
            "type": "mc",
            "q": "Berkas entry point publik aplikasi adalah",
            "options": [
              "index.php",
              "app/main.php",
              "public/index.php",
              "server.php"
            ],
            "a": 2,
            "explain": "Semua request masuk lewat public/index.php."
          },
          {
            "type": "mc",
            "q": "Direktori untuk job queue dan event listener adalah",
            "options": [
              "queue/ dan events/",
              "jobs/ dan hooks/",
              "app/QueueOnly",
              "app/Jobs dan app/Listeners"
            ],
            "a": 3,
            "explain": "Job dan listener berada di app/Jobs dan app/Listeners."
          },
          {
            "type": "mc",
            "q": "Provider bawaan Laravel yang mendaftarkan binding inti disebut",
            "options": [
              "CoreProvider",
              "MainServiceProvider",
              "AppServiceProvider",
              "BootProvider"
            ],
            "a": 2,
            "explain": "AppServiceProvider adalah tempat umum untuk registrasi layanan aplikasi."
          }
        ]
      },
      {
        "id": "laravel-11",
        "level": "Menengah",
        "title": "Eloquent Relasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Relasi banyak ke banyak didefinisikan dengan method",
            "options": [
              "belongsToMany",
              "hasMany",
              "hasOne",
              "belongsTo"
            ],
            "a": 0,
            "explain": "belongsToMany menyatakan relasi banyak ke banyak lewat tabel pivot."
          },
          {
            "type": "mc",
            "q": "Mengambil relasi beserta data induknya secara efisien memakai",
            "options": [
              "loadAll()",
              "joinAll()",
              "with()",
              "attachAll()"
            ],
            "a": 2,
            "explain": "with() melakukan eager loading relasi untuk mencegah query N+1."
          },
          {
            "type": "mc",
            "q": "Masalah N+1 query terjadi ketika",
            "options": [
              "model tidak punya primary key",
              "relasi dimuat satu per satu di dalam loop",
              "tabel tidak punya index",
              "relasi dibuat dengan with()"
            ],
            "a": 1,
            "explain": "N+1 muncul saat query relasi dijalankan berulang di dalam perulangan."
          },
          {
            "type": "mc",
            "q": "Menambahkan record ke relasi banyak ke banyak memakai",
            "options": [
              "syncOnly()",
              "addPivot()",
              "attach()",
              "linkMany()"
            ],
            "a": 2,
            "explain": "attach() menyisipkan baris pada tabel pivot."
          },
          {
            "type": "mc",
            "q": "Menyinkronkan isi tabel pivot dengan daftar id memakai",
            "options": [
              "sync()",
              "attachAll()",
              "replace()",
              "merge()"
            ],
            "a": 0,
            "explain": "sync() menambah/menghapus baris pivot agar sesuai daftar id."
          },
          {
            "type": "mc",
            "q": "Relasi hasManyThrough berguna untuk",
            "options": [
              "menggabungkan dua tabel tanpa kunci",
              "membuat pivot otomatis",
              "mengakses record melalui relasi perantara",
              "menghapus relasi"
            ],
            "a": 2,
            "explain": "hasManyThrough menjangkau relasi lewat model perantara."
          },
          {
            "type": "mc",
            "q": "Relasi polimorfik satu ke banyak memakai method",
            "options": [
              "polyMany",
              "hasPoly",
              "morphable",
              "morphMany"
            ],
            "a": 3,
            "explain": "morphMany menyatakan relasi polimorfik satu ke banyak."
          },
          {
            "type": "mc",
            "q": "Untuk memuat relasi yang sudah terdefinisi pada koleksi model, pakai",
            "options": [
              "with()",
              "fetch()",
              "load()",
              "eager()"
            ],
            "a": 2,
            "explain": "load() memuat relasi belakangan pada koleksi model."
          },
          {
            "type": "mc",
            "q": "Constraint pada eager loading ditulis dengan",
            "options": [
              "with('posts')->filter('aktif', 1)",
              "with(['posts' => fn($q) => $q->where('aktif', 1)])",
              "load('posts')->where('aktif', 1)",
              "with('posts', 'aktif')"
            ],
            "a": 1,
            "explain": "Closure pada with memberi constraint query relasi."
          },
          {
            "type": "mc",
            "q": "Menghitung jumlah relasi tanpa memuat datanya memakai",
            "options": [
              "withCount()",
              "countRelation()",
              "withSumOnly()",
              "countAll()"
            ],
            "a": 0,
            "explain": "withCount menambah atribut jumlah relasi tanpa memuat semua record."
          }
        ]
      },
      {
        "id": "laravel-12",
        "level": "Menengah",
        "title": "Query Builder & Scope",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat query scope lokal pada model ditulis sebagai",
            "options": [
              "property $scope",
              "method bernama scopeAktif",
              "function aktifScope",
              "trait ScopeAktif"
            ],
            "a": 1,
            "explain": "Scope lokal memakai nama method berawalan scope."
          },
          {
            "type": "mc",
            "q": "Scope lokal dipanggil di query sebagai",
            "options": [
              "Post::scopeAktif()->get()",
              "Post::whereAktif()->get()",
              "Post::localScope(\"aktif\")",
              "Post::aktif()->get()"
            ],
            "a": 3,
            "explain": "Framework memanggil scope tanpa awalan scope."
          },
          {
            "type": "mc",
            "q": "Filter where dengan beberapa kondisi sekaligus memakai",
            "options": [
              "whereAll([...])",
              "filter([...])",
              "whereMany([...])",
              "where([...])"
            ],
            "a": 3,
            "explain": "where menerima array pasangan kolom-nilai."
          },
          {
            "type": "mc",
            "q": "Query untuk mengambil 10 record pertama memakai",
            "options": [
              "first(10)",
              "limit(10)",
              "top(10)",
              "head(10)"
            ],
            "a": 1,
            "explain": "limit() membatasi jumlah baris yang diambil."
          },
          {
            "type": "mc",
            "q": "Pagination siap pakai pada query menghasilkan",
            "options": [
              "page(15)",
              "pager(15)",
              "paginateOnly(15)",
              "paginate(15)"
            ],
            "a": 3,
            "explain": "paginate() menghasilkan paginator dengan metadata halaman."
          },
          {
            "type": "mc",
            "q": "Mengurutkan hasil query menurun memakai",
            "options": [
              "sortBy('created_at', 'desc')",
              "orderBy('created_at', 'desc')",
              "orderDesc('created_at')",
              "arrange('created_at')"
            ],
            "a": 1,
            "explain": "orderBy menentukan kolom dan arah pengurutan."
          },
          {
            "type": "mc",
            "q": "Query join ditulis dengan method",
            "options": [
              "merge()",
              "combine()",
              "link()",
              "join()"
            ],
            "a": 3,
            "explain": "join() menggabungkan tabel dalam query SQL builder."
          },
          {
            "type": "mc",
            "q": "Agregasi jumlah baris memakai",
            "options": [
              "sumAll()",
              "count()",
              "total()",
              "length()"
            ],
            "a": 1,
            "explain": "count() menghitung jumlah baris hasil query."
          },
          {
            "type": "mc",
            "q": "Mengambil satu record pertama atau gagal 404 memakai",
            "options": [
              "firstOr404()",
              "firstOrFail()",
              "oneOrFail()",
              "findOr404()"
            ],
            "a": 1,
            "explain": "firstOrFail melempar exception yang dipetakan ke 404."
          },
          {
            "type": "mc",
            "q": "Chunking hasil besar untuk menghemat memori memakai",
            "options": [
              "chunk()",
              "split()",
              "sliceAll()",
              "batchLoad()"
            ],
            "a": 0,
            "explain": "chunk() memproses hasil dalam potongan agar memori tetap kecil."
          }
        ]
      },
      {
        "id": "laravel-13",
        "level": "Menengah",
        "title": "Validasi & Form Request",
        "exercises": [
          {
            "type": "mc",
            "q": "Form Request dibuat dengan perintah artisan",
            "options": [
              "php artisan new:request",
              "php artisan request:make",
              "php artisan form:request",
              "php artisan make:request"
            ],
            "a": 3,
            "explain": "make:request membuat class Form Request."
          },
          {
            "type": "mc",
            "q": "Method yang mengembalikan aturan validasi adalah",
            "options": [
              "validate()",
              "rules()",
              "checks()",
              "fields()"
            ],
            "a": 1,
            "explain": "rules() mengembalikan array aturan validasi."
          },
          {
            "type": "mc",
            "q": "Method untuk otorisasi pada Form Request adalah",
            "options": [
              "allow()",
              "can()",
              "guard()",
              "authorize()"
            ],
            "a": 3,
            "explain": "authorize() menentukan apakah pengguna boleh mengirim request."
          },
          {
            "type": "mc",
            "q": "Aturan validasi \"unik di tabel users\" dituliskan dengan",
            "options": [
              "distinct('users.email')",
              "notExists('users', 'email')",
              "onlyOne('users', 'email')",
              "unique('users', 'email')"
            ],
            "a": 3,
            "explain": "Aturan unique memeriksa keunikan nilai di tabel."
          },
          {
            "type": "mc",
            "q": "Aturan validasi untuk nullable (boleh kosong) memakai",
            "options": [
              "nullable",
              "optional",
              "maybe",
              "allow-empty"
            ],
            "a": 0,
            "explain": "Aturan nullable membolehkan field bernilai null."
          },
          {
            "type": "mc",
            "q": "Aturan validasi ukuran maksimum string dituliskan sebagai",
            "options": [
              "length:255",
              "size:255",
              "limit:255",
              "max:255"
            ],
            "a": 3,
            "explain": "Aturan max membatasi panjang string atau nilai numerik."
          },
          {
            "type": "mc",
            "q": "Validasi konfirmasi password memakai aturan",
            "options": [
              "same:password",
              "match:password",
              "confirmed",
              "verify:password"
            ],
            "a": 2,
            "explain": "Aturan confirmed mencocokkan nilai dengan field _confirmation."
          },
          {
            "type": "mc",
            "q": "Membuat pesan validasi sendiri dilakukan dengan method",
            "options": [
              "errors()",
              "texts()",
              "custom()",
              "messages()"
            ],
            "a": 3,
            "explain": "messages() memetakan aturan ke pesan kustom."
          },
          {
            "type": "mc",
            "q": "Input yang sudah divalidasi diambil dengan",
            "options": [
              "$request->safe()",
              "$request->clean()",
              "$request->validated()",
              "$request->inputs()"
            ],
            "a": 2,
            "explain": "validated() mengembalikan hanya data yang lolos validasi."
          },
          {
            "type": "mc",
            "q": "Aturan \"harus salah satu dari daftar\" memakai",
            "options": [
              "in:opsi1,opsi2",
              "one:opsi1,opsi2",
              "any:opsi1,opsi2",
              "set:opsi1,opsi2"
            ],
            "a": 0,
            "explain": "Aturan in membatasi nilai pada daftar yang diberikan."
          }
        ]
      },
      {
        "id": "laravel-14",
        "level": "Menengah",
        "title": "Middleware",
        "exercises": [
          {
            "type": "mc",
            "q": "Middleware dibuat dengan perintah artisan",
            "options": [
              "php artisan make:middleware",
              "php artisan new:middleware",
              "php artisan middleware:make",
              "php artisan make:filter"
            ],
            "a": 0,
            "explain": "make:middleware membuat class middleware baru."
          },
          {
            "type": "mc",
            "q": "Middleware mendaftarkan dirinya di berkas",
            "options": [
              "routes/web.php",
              "config/app.php",
              "app/Http/Kernel.php atau bootstrap/app.php",
              "public/index.php"
            ],
            "a": 2,
            "explain": "Registrasi middleware bergantung versi: Kernel (Laravel 10-) atau bootstrap/app.php (11+)."
          },
          {
            "type": "mc",
            "q": "Middleware memproses request lalu meneruskan dengan memanggil",
            "options": [
              "$request->next()",
              "continue($request)",
              "chain($next)",
              "$next($request)"
            ],
            "a": 3,
            "explain": "Middleware wajib memanggil $next($request) untuk melanjutkan alur."
          },
          {
            "type": "mc",
            "q": "Middleware yang membatasi akses pengguna terautentikasi adalah",
            "options": [
              "guard",
              "secure",
              "login",
              "auth"
            ],
            "a": 3,
            "explain": "Middleware auth memastikan pengguna sudah login."
          },
          {
            "type": "mc",
            "q": "Membuat middleware khusus rute memakai alias di",
            "options": [
              "config/middleware.php",
              "$routeMiddleware atau $middlewareAliases",
              "routes/aliases.php",
              "app/aliases.php"
            ],
            "a": 1,
            "explain": "Alias middleware dipetakan agar bisa dipakai pada route."
          },
          {
            "type": "mc",
            "q": "Middleware group berisi kumpulan middleware yang",
            "options": [
              "menghapus cache",
              "membuat tabel",
              "menulis view",
              "dijalankan bersama pada sekelompok route"
            ],
            "a": 3,
            "explain": "Middleware group mengelompokkan middleware yang dijalankan bersama."
          },
          {
            "type": "mc",
            "q": "Middleware terminable menjalankan logika setelah respons dikirim lewat method",
            "options": [
              "afterResponse()",
              "finally()",
              "post()",
              "terminate()"
            ],
            "a": 3,
            "explain": "terminate() dijalankan setelah respons terkirim ke klien."
          },
          {
            "type": "mc",
            "q": "Urutan middleware penting karena",
            "options": [
              "menentukan nama tabel",
              "menghapus kebutuhan route",
              "mengganti controller",
              "mempengaruhi kapan tiap pemeriksaan dijalankan"
            ],
            "a": 3,
            "explain": "Middleware berjalan berurutan; urutan menentukan hasil akhir."
          },
          {
            "type": "mc",
            "q": "Middleware bisa mengubah respons dengan",
            "options": [
              "menghapus controller",
              "menulis ke database",
              "mengganti semua route",
              "membungkus $next($request) lalu mengolah hasilnya"
            ],
            "a": 3,
            "explain": "Middleware dapat mengolah objek respons setelah handler jalan."
          },
          {
            "type": "mc",
            "q": "CORS biasanya ditangani oleh middleware atau konfigurasi di",
            "options": [
              "config/cors.php",
              "routes/api.php",
              "app/cors.php",
              "public/cors.php"
            ],
            "a": 0,
            "explain": "Konfigurasi CORS berada di config/cors.php."
          }
        ]
      },
      {
        "id": "laravel-15",
        "level": "Menengah",
        "title": "API Resource & Controller",
        "exercises": [
          {
            "type": "mc",
            "q": "API Resource dibuat dengan perintah artisan",
            "options": [
              "php artisan new:resource",
              "php artisan api:resource",
              "php artisan resource:api",
              "php artisan make:resource"
            ],
            "a": 3,
            "explain": "make:resource membuat class API Resource untuk transformasi data."
          },
          {
            "type": "mc",
            "q": "Resource mengubah",
            "options": [
              "tabel menjadi migration",
              "view menjadi route",
              "model menjadi struktur JSON terpilih",
              "cookie menjadi session"
            ],
            "a": 2,
            "explain": "Resource memformat model untuk respons API."
          },
          {
            "type": "mc",
            "q": "Controller resource CRUD dibuat dengan flag",
            "options": [
              "--crud",
              "--api-crud",
              "--rest",
              "--resource"
            ],
            "a": 3,
            "explain": "php artisan make:controller --resource membuat method CRUD standar."
          },
          {
            "type": "mc",
            "q": "Controller API tanpa view dibuat dengan flag",
            "options": [
              "--no-view",
              "--api",
              "--json",
              "--headless"
            ],
            "a": 1,
            "explain": "Flag --api menghasilkan controller tanpa method create/edit."
          },
          {
            "type": "mc",
            "q": "Mengembalikan koleksi resource memakai",
            "options": [
              "PostResource::collection($posts)",
              "PostResource::many($posts)",
              "PostResource::all($posts)",
              "PostResource::list($posts)"
            ],
            "a": 0,
            "explain": "::collection membungkus kumpulan model menjadi koleksi resource."
          },
          {
            "type": "mc",
            "q": "Resource hanya menyertakan atribut bersyarat dengan",
            "options": [
              "when()",
              "ifOnly()",
              "maybe()",
              "optional()"
            ],
            "a": 0,
            "explain": "when() menyertakan atribut saat kondisi terpenuhi."
          },
          {
            "type": "mc",
            "q": "Relasi pada Resource disertakan dengan",
            "options": [
              "->withRelation()",
              "->includeRelation()",
              "->whenLoaded()",
              "->loadRelation()"
            ],
            "a": 2,
            "explain": "whenLoaded menyertakan relasi hanya jika sudah dimuat."
          },
          {
            "type": "mc",
            "q": "Status HTTP 201 dikembalikan untuk",
            "options": [
              "request yang gagal validasi",
              "route yang tidak ada",
              "logout",
              "resource yang baru dibuat"
            ],
            "a": 3,
            "explain": "201 Created menandakan sumber daya berhasil dibuat."
          },
          {
            "type": "mc",
            "q": "Validasi pada controller API gagal mengembalikan status",
            "options": [
              "404",
              "301",
              "500",
              "422"
            ],
            "a": 3,
            "explain": "422 Unprocessable Entity umumnya menandakan validasi gagal."
          },
          {
            "type": "mc",
            "q": "Route resource API didaftarkan dengan",
            "options": [
              "Route::resourceApi",
              "Route::apiResource",
              "Route::api",
              "Route::rest"
            ],
            "a": 1,
            "explain": "Route::apiResource mendaftar route CRUD tanpa create/edit."
          }
        ]
      },
      {
        "id": "laravel-16",
        "level": "Menengah",
        "title": "Autentikasi & Otorisasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Scaffold autentikasi Laravel Breeze di pasang dengan",
            "options": [
              "npm add laravel/auth",
              "composer require laravel/breeze --dev",
              "composer require laravel/auth",
              "php artisan auth:install"
            ],
            "a": 1,
            "explain": "Breeze dipasang lewat Composer sebagai starter kit autentikasi."
          },
          {
            "type": "mc",
            "q": "Memeriksa pengguna terautentikasi memakai",
            "options": [
              "Auth::has()",
              "Auth::userExists()",
              "Auth::check()",
              "Auth::logged()"
            ],
            "a": 2,
            "explain": "Auth::check() mengembalikan true bila pengguna login."
          },
          {
            "type": "mc",
            "q": "Mendapatkan objek pengguna aktif memakai",
            "options": [
              "Auth::get()",
              "Auth::user()",
              "Auth::current()",
              "Auth::me()"
            ],
            "a": 1,
            "explain": "Auth::user() mengembalikan model pengguna saat ini."
          },
          {
            "type": "mc",
            "q": "Login secara manual memakai",
            "options": [
              "Auth::login($credentials)",
              "Auth::try($credentials)",
              "Auth::attempt($credentials)",
              "Auth::signin($credentials)"
            ],
            "a": 2,
            "explain": "attempt() memverifikasi kredensial dan login bila cocok."
          },
          {
            "type": "mc",
            "q": "Logout memakai",
            "options": [
              "Auth::exit()",
              "Auth::out()",
              "Auth::logout()",
              "Auth::close()"
            ],
            "a": 2,
            "explain": "logout() mengakhiri sesi pengguna."
          },
          {
            "type": "mc",
            "q": "Gates mendefinisikan",
            "options": [
              "tabel database",
              "route API",
              "komponen Blade",
              "aturan otorisasi berbasis closure"
            ],
            "a": 3,
            "explain": "Gate memeriksa izin dengan closure sederhana."
          },
          {
            "type": "mc",
            "q": "Policy dibuat dengan perintah artisan",
            "options": [
              "php artisan new:policy",
              "php artisan make:policy",
              "php artisan policy:make",
              "php artisan auth:policy"
            ],
            "a": 1,
            "explain": "make:policy membuat class Policy untuk satu model."
          },
          {
            "type": "mc",
            "q": "Memeriksa izin pada Blade memakai direktif",
            "options": [
              "@can",
              "@allow",
              "@auth-only",
              "@permit"
            ],
            "a": 0,
            "explain": "@can memeriksa izin dan menampilkan blok bila diizinkan."
          },
          {
            "type": "mc",
            "q": "Memeriksa izin di kode memakai",
            "options": [
              "Gate::ok('update', $post)",
              "Gate::check('update', $post)",
              "Auth::can(\"update\")",
              "Gate::allows('update', $post)"
            ],
            "a": 3,
            "explain": "Gate::allows memeriksa izin untuk aksi dan model tertentu."
          },
          {
            "type": "mc",
            "q": "Memaksa 403 bila tidak berizin pada controller memakai",
            "options": [
              "$this->authorize(...)",
              "$this->deny(...)",
              "$this->guard(...)",
              "$this->forbid(...)"
            ],
            "a": 0,
            "explain": "authorize() melempar exception 403 bila otorisasi gagal."
          }
        ]
      },
      {
        "id": "laravel-17",
        "level": "Menengah",
        "title": "Queue, Job & Event",
        "exercises": [
          {
            "type": "mc",
            "q": "Job dibuat dengan perintah artisan",
            "options": [
              "php artisan new:job",
              "php artisan job:make",
              "php artisan make:job",
              "php artisan queue:job"
            ],
            "a": 2,
            "explain": "make:job membuat class Job untuk queue."
          },
          {
            "type": "mc",
            "q": "Mengirim job ke queue memakai",
            "options": [
              "Job::queue()",
              "Job::pushNow()",
              "Job::dispatch()",
              "Job::send()"
            ],
            "a": 2,
            "explain": "dispatch() mengirim job ke queue."
          },
          {
            "type": "mc",
            "q": "Konfigurasi queue berada di berkas",
            "options": [
              "config/job.php",
              "app/queue.php",
              "config/queue.php",
              "queue.config.php"
            ],
            "a": 2,
            "explain": "config/queue.php mengatur driver dan koneksi queue."
          },
          {
            "type": "mc",
            "q": "Driver queue untuk pengembangan lokal tanpa worker adalah",
            "options": [
              "redis",
              "sync",
              "sqs",
              "database"
            ],
            "a": 1,
            "explain": "Driver sync menjalankan job langsung secara sinkron."
          },
          {
            "type": "mc",
            "q": "Worker queue dijalankan dengan",
            "options": [
              "php artisan queue:work",
              "php artisan queue:run",
              "php artisan job:work",
              "php artisan worker:start"
            ],
            "a": 0,
            "explain": "queue:work memproses job dari queue."
          },
          {
            "type": "mc",
            "q": "Job yang gagal akan masuk ke",
            "options": [
              "tabel jobs_errors",
              "log saja",
              "tabel failed_jobs",
              "cache"
            ],
            "a": 2,
            "explain": "Job gagal disimpan di tabel failed_jobs untuk ditinjau."
          },
          {
            "type": "mc",
            "q": "Menjalankan ulang job yang gagal memakai",
            "options": [
              "php artisan queue:again",
              "php artisan failed:retry",
              "php artisan queue:retry",
              "php artisan queue:replay"
            ],
            "a": 2,
            "explain": "queue:retry menjalankan ulang job yang gagal."
          },
          {
            "type": "mc",
            "q": "Event dan Listener dibuat dengan perintah",
            "options": [
              "php artisan new:event dan new:listener",
              "php artisan make:event dan make:listener",
              "php artisan event:make",
              "php artisan make:signal"
            ],
            "a": 1,
            "explain": "make:event dan make:listener membuat class event serta listener."
          },
          {
            "type": "mc",
            "q": "Mendaftarkan event ke listener otomatis dilakukan oleh",
            "options": [
              "RouteServiceProvider",
              "AuthServiceProvider",
              "QueueServiceProvider",
              "EventServiceProvider"
            ],
            "a": 3,
            "explain": "EventServiceProvider memetakan event ke listener."
          },
          {
            "type": "mc",
            "q": "Menjalankan pekerjaan setelah respons terkirim memakai fungsi",
            "options": [
              "dispatch()",
              "dispatchAfterResponse()",
              "deferAfter()",
              "dispatchLater()"
            ],
            "a": 1,
            "explain": "dispatchAfterResponse menjalankan job setelah respons dikirim."
          }
        ]
      },
      {
        "id": "laravel-18",
        "level": "Menengah",
        "title": "Testing Laravel",
        "exercises": [
          {
            "type": "mc",
            "q": "Test fitur Laravel dibuat dengan perintah artisan",
            "options": [
              "php artisan make:test",
              "php artisan new:test",
              "php artisan test:make",
              "php artisan feature:test"
            ],
            "a": 0,
            "explain": "make:test membuat berkas test baru."
          },
          {
            "type": "mc",
            "q": "Test fitur biasanya memperluas class",
            "options": [
              "PHPUnit\\Framework\\TestCase murni",
              "App\\TestCaseBare",
              "Laravel\\Test",
              "Tests\\TestCase"
            ],
            "a": 3,
            "explain": "Test fitur Laravel mewarisi TestCase bawaan aplikasi."
          },
          {
            "type": "mc",
            "q": "Memeriksa status respons di test memakai",
            "options": [
              "expectStatus(200)",
              "assertStatus(200)",
              "checkStatus(200)",
              "assertCode(200)"
            ],
            "a": 1,
            "explain": "assertStatus memeriksa kode status respons."
          },
          {
            "type": "mc",
            "q": "Memeriksa sebuah teks tampil di respons memakai",
            "options": [
              "assertText(\"teks\")",
              "expectText(\"teks\")",
              "assertContains(\"teks\")",
              "assertSee(\"teks\")"
            ],
            "a": 3,
            "explain": "assertSee memeriksa konten respons memuat teks."
          },
          {
            "type": "mc",
            "q": "Databases segar untuk test bisa dibuat dengan trait",
            "options": [
              "FreshTables",
              "ResetDb",
              "DatabaseFresh",
              "RefreshDatabase"
            ],
            "a": 3,
            "explain": "Trait RefreshDatabase menyegarkan skema antar test."
          },
          {
            "type": "mc",
            "q": "Membuat data uji model dengan factory memakai",
            "options": [
              "Post::factory()->create()",
              "Post::makeTest()",
              "Post::seedOne()",
              "Post::fake()"
            ],
            "a": 0,
            "explain": "Factory membuat instance model untuk pengujian."
          },
          {
            "type": "mc",
            "q": "Meniru sebuah service dalam test memakai",
            "options": [
              "real database selalu",
              "hapus service",
              "sleep()",
              "Mockery atau fake façade"
            ],
            "a": 3,
            "explain": "Mock atau fake menggantikan dependensi nyata saat test."
          },
          {
            "type": "mc",
            "q": "Fake queue pada test memakai",
            "options": [
              "Queue::mock()",
              "Queue::off()",
              "Queue::fake()",
              "Queue::stub()"
            ],
            "a": 2,
            "explain": "Queue::fake mencegah job benar-benar berjalan saat test."
          },
          {
            "type": "mc",
            "q": "Memeriksa job terkirim pada test memakai",
            "options": [
              "Queue::assertSent",
              "Queue::check",
              "Queue::has",
              "Queue::assertPushed"
            ],
            "a": 3,
            "explain": "assertPushed memverifikasi job yang dikirim ke queue."
          },
          {
            "type": "mc",
            "q": "Menjalankan test paralel untuk mempercepat memakai flag",
            "options": [
              "--fast",
              "--parallel",
              "--multi",
              "--speed"
            ],
            "a": 1,
            "explain": "Flag --parallel menjalankan test secara paralel."
          }
        ]
      },
      {
        "id": "laravel-19",
        "level": "Menengah",
        "title": "File Storage & Upload",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyimpan berkas unggahan dilakukan dengan",
            "options": [
              "$request->file('foto')->store('foto')",
              "$request->upload('foto')",
              "Storage::putFileOnly($request)",
              "$request->save('foto')"
            ],
            "a": 0,
            "explain": "method store() menyimpan berkas ke disk yang dipilih."
          },
          {
            "type": "mc",
            "q": "Konfigurasi disk penyimpanan berada di",
            "options": [
              "config/storage.php",
              "config/filesystems.php",
              "config/upload.php",
              "config/file.php"
            ],
            "a": 1,
            "explain": "filesystems.php mengatur disk seperti public dan s3."
          },
          {
            "type": "mc",
            "q": "Untuk membuat tautan storage ke public memakai",
            "options": [
              "php artisan link:public",
              "php artisan storage:link",
              "php artisan files:link",
              "php artisan serve:link"
            ],
            "a": 1,
            "explain": "storage:link membuat symlink public/storage ke storage/app/public."
          },
          {
            "type": "mc",
            "q": "Validasi berkas unggahan gambar memakai aturan",
            "options": [
              "image",
              "picture",
              "photo",
              "media"
            ],
            "a": 0,
            "explain": "Aturan image memastikan berkas berupa gambar."
          },
          {
            "type": "mc",
            "q": "Membatasi ukuran unggahan dilakukan dengan aturan",
            "options": [
              "max",
              "size-limit",
              "limit",
              "cap"
            ],
            "a": 0,
            "explain": "Aturan max membatasi ukuran berkas dalam kilobyte."
          },
          {
            "type": "mc",
            "q": "Membaca isi berkas dari storage memakai",
            "options": [
              "Storage::get($path)",
              "Storage::read($path)",
              "Storage::load($path)",
              "Storage::open($path)"
            ],
            "a": 0,
            "explain": "Storage::get mengambil isi berkas sebagai string."
          },
          {
            "type": "mc",
            "q": "Menghapus berkas dari storage memakai",
            "options": [
              "Storage::remove($path)",
              "Storage::drop($path)",
              "Storage::unlink($path)",
              "Storage::delete($path)"
            ],
            "a": 3,
            "explain": "Storage::delete menghapus berkas pada disk."
          },
          {
            "type": "mc",
            "q": "Membuat URL publik berkas memakai",
            "options": [
              "Storage::link($path)",
              "Storage::publicUrl($path)",
              "Storage::url($path)",
              "Storage::src($path)"
            ],
            "a": 2,
            "explain": "Storage::url membuat URL sesuai disk yang dikonfigurasi."
          },
          {
            "type": "mc",
            "q": "Menyimpan nama berkas asli dilakukan dengan",
            "options": [
              "storeAs('dir', $request->file('f')->getClientOriginalName())",
              "store() selalu menyimpan nama asli",
              "storeOriginal()",
              "keepName()"
            ],
            "a": 0,
            "explain": "storeAs memungkinkan penentuan nama berkas target."
          },
          {
            "type": "mc",
            "q": "Driver default untuk pengembangan lokal biasanya",
            "options": [
              "local atau public",
              "s3",
              "ftp",
              "gcs"
            ],
            "a": 0,
            "explain": "Disk local/public dipakai untuk pengembangan lokal."
          }
        ]
      },
      {
        "id": "laravel-20",
        "level": "Menengah",
        "title": "Collection & Helper",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengubah hasil query menjadi Collection memakai",
            "options": [
              "->arrayOnly()",
              "->get() atau collect()",
              "->list()",
              "->rows()"
            ],
            "a": 1,
            "explain": "get() mengembalikan Collection; collect() membungkus array menjadi Collection."
          },
          {
            "type": "mc",
            "q": "Mengambil kolom tertentu dari Collection memakai",
            "options": [
              "->pluck('nama')",
              "->pick('nama')",
              "->column('nama')",
              "->field('nama')"
            ],
            "a": 0,
            "explain": "pluck mengambil nilai satu kolom dari tiap item."
          },
          {
            "type": "mc",
            "q": "Memfilter Collection memakai",
            "options": [
              "->whereOnly(callback)",
              "->filter(callback)",
              "->keep(callback)",
              "->select(callback)"
            ],
            "a": 1,
            "explain": "filter menyaring item sesuai kondisi pada callback."
          },
          {
            "type": "mc",
            "q": "Mengubah tiap item Collection memakai",
            "options": [
              "->each(callback) selalu mengubah",
              "->edit(callback)",
              "->change(callback)",
              "->map(callback)"
            ],
            "a": 3,
            "explain": "map menghasilkan Collection baru dari hasil transformasi tiap item."
          },
          {
            "type": "mc",
            "q": "Menjumlahkan nilai kolom Collection memakai",
            "options": [
              "->count('total')",
              "->sum('total')",
              "->add('total')",
              "->total('total')"
            ],
            "a": 1,
            "explain": "sum menjumlahkan nilai kolom numerik pada Collection."
          },
          {
            "type": "mc",
            "q": "Mengelompokkan Collection memakai",
            "options": [
              "->splitBy('kategori')",
              "->keyBy('kategori') saja",
              "->cluster('kategori')",
              "->groupBy('kategori')"
            ],
            "a": 3,
            "explain": "groupBy mengelompokkan item berdasarkan nilai kolom."
          },
          {
            "type": "mc",
            "q": "Mengurutkan Collection memakai",
            "options": [
              "->sortBy(callback) atau sortByDesc",
              "->orderByOnly()",
              "->arrange()",
              "->rank()"
            ],
            "a": 0,
            "explain": "sortBy mengurutkan Collection sesuai nilai yang dikembalikan callback."
          },
          {
            "type": "mc",
            "q": "Helper string untuk mengubah teks menjadi slug adalah",
            "options": [
              "Str::link()",
              "Str::path()",
              "Str::clean()",
              "Str::slug()"
            ],
            "a": 3,
            "explain": "Str::slug mengubah teks menjadi slug ramah URL."
          },
          {
            "type": "mc",
            "q": "Helper untuk mengambil nilai default bila null adalah",
            "options": [
              "optional($x)->name atau ??",
              "nullsafe()",
              "defaultOf()",
              "orElse()"
            ],
            "a": 0,
            "explain": "Operator ?? dan optional() menangani nilai null dengan aman."
          },
          {
            "type": "mc",
            "q": "Fungsi firstWhere pada Collection dipakai untuk",
            "options": [
              "mengambil semua item",
              "menghapus item",
              "mengambil item pertama yang cocok dengan kondisi",
              "mengurutkan item"
            ],
            "a": 2,
            "explain": "firstWhere mengembalikan item pertama yang memenuhi kondisi kolom-nilai."
          }
        ]
      },
      {
        "id": "laravel-21",
        "level": "Advance",
        "title": "Arsitektur Domain & Service",
        "exercises": [
          {
            "type": "mc",
            "q": "Mengekstrak logika bisnis dari controller ke class khusus disebut pola",
            "options": [
              "Fat Controller",
              "Route Closure",
              "Monolit Kecil",
              "Service Class"
            ],
            "a": 3,
            "explain": "Service class memindahkan logika bisnis dari controller agar lebih teruji dan dapat dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Injeksi dependensi di Laravel diselesaikan oleh",
            "options": [
              "service container",
              "session store",
              "queue worker",
              "view compiler"
            ],
            "a": 0,
            "explain": "Container menyelesaikan dan menyuntikkan dependensi sesuai tipe."
          },
          {
            "type": "mc",
            "q": "Binding interface ke implementasi dilakukan di",
            "options": [
              "Route Middleware",
              "Service Provider",
              "Migration",
              "Factory"
            ],
            "a": 1,
            "explain": "Service provider mendaftarkan binding pada container."
          },
          {
            "type": "mc",
            "q": "Mendaftarkan singleton pada container memakai",
            "options": [
              "$this->app->one(...)",
              "$this->app->shared(...)",
              "$this->app->singleton(...)",
              "$this->app->instanceOnly(...)"
            ],
            "a": 2,
            "explain": "singleton membuat satu instance yang dipakai ulang."
          },
          {
            "type": "mc",
            "q": "Repository pattern berguna untuk",
            "options": [
              "mengganti semua route",
              "mengabstraksi akses data dari logika bisnis",
              "menulis CSS",
              "menghapus validasi"
            ],
            "a": 1,
            "explain": "Repository memisahkan detail persistensi dari domain."
          },
          {
            "type": "mc",
            "q": "DTO (Data Transfer Object) dipakai untuk",
            "options": [
              "menulis migration",
              "mengatur middleware",
              "mengganti queue",
              "membawa data terstruktur antar lapisan"
            ],
            "a": 3,
            "explain": "DTO membungkus data agar diteruskan dengan tipe yang jelas."
          },
          {
            "type": "mc",
            "q": "Action class pada Laravel biasanya menangani",
            "options": [
              "semua controller sekaligus",
              "konfigurasi server",
              "aset frontend",
              "satu unit pekerjaan bisnis yang spesifik"
            ],
            "a": 3,
            "explain": "Action class mengemas satu operasi bisnis yang fokus."
          },
          {
            "type": "mc",
            "q": "Events dan listeners membantu mengurangi",
            "options": [
              "jumlah route",
              "keterkaitan langsung antar komponen",
              "jumlah tabel",
              "kebutuhan test"
            ],
            "a": 1,
            "explain": "Event memisahkan pemancar dari penangan sehingga lebih longgar terkait."
          },
          {
            "type": "mc",
            "q": "Facade Laravel pada dasarnya adalah",
            "options": [
              "class final tanpa implementasi",
              "akses statis ke layanan pada container",
              "fitur CSS",
              "pengganti middleware"
            ],
            "a": 1,
            "explain": "Facade meneruskan panggilan statis ke instance layanan yang terdaftar."
          },
          {
            "type": "mc",
            "q": "Menentukan batas modul aplikasi besar terbantu dengan",
            "options": [
              "struktur domain/modul yang jelas",
              "satu controller raksasa",
              "semua logika di route",
              "semua migration dalam satu class"
            ],
            "a": 0,
            "explain": "Pemisahan domain/modul menjaga batas tanggung jawab pada aplikasi besar."
          }
        ]
      },
      {
        "id": "laravel-22",
        "level": "Advance",
        "title": "Eloquent Canggih",
        "exercises": [
          {
            "type": "mc",
            "q": "Memperbarui massal tanpa memuat model memakai",
            "options": [
              "each()->save()",
              "all()->update()",
              "model()->sets()",
              "query()->update([...])"
            ],
            "a": 3,
            "explain": "Query update mengeksekusi satu update massal tanpa memuat model."
          },
          {
            "type": "mc",
            "q": "Membuat atribut turunan yang tidak ada di tabel memakai",
            "options": [
              "Accessor (getAttribute)",
              "Migration baru",
              "Factory state",
              "Route binding"
            ],
            "a": 0,
            "explain": "Accessor menghitung nilai turunan saat atribut diakses."
          },
          {
            "type": "mc",
            "q": "Mutator digunakan untuk",
            "options": [
              "mengubah warna UI",
              "membuat route",
              "mengubah nilai sebelum disimpan",
              "menghapus tabel"
            ],
            "a": 2,
            "explain": "Mutator mengolah atribut saat diset sebelum disimpan."
          },
          {
            "type": "mc",
            "q": "Soft delete memakai trait",
            "options": [
              "Trashed",
              "Archive",
              "Ghost",
              "SoftDeletes"
            ],
            "a": 3,
            "explain": "Trait SoftDeletes menandai record terhapus tanpa benar-benar menghapus."
          },
          {
            "type": "mc",
            "q": "Menyertakan record terhapus pada query soft delete memakai",
            "options": [
              "includeDeleted()",
              "allTrashed()",
              "withTrashed()",
              "restoreAll()"
            ],
            "a": 2,
            "explain": "withTrashed menyertakan record yang sudah di-soft delete."
          },
          {
            "type": "mc",
            "q": "Mengembalikan record terhapus memakai",
            "options": [
              "undo()",
              "revive()",
              "undelete()",
              "restore()"
            ],
            "a": 3,
            "explain": "restore() membatalkan soft delete."
          },
          {
            "type": "mc",
            "q": "Pengamatan perubahan model untuk event bisa memakai",
            "options": [
              "Watchers",
              "Hooks",
              "Signals",
              "Observers"
            ],
            "a": 3,
            "explain": "Observer menangkap event model seperti created dan updated."
          },
          {
            "type": "mc",
            "q": "Relasi dengan kolom pivot tambahan diakses lewat",
            "options": [
              "$model->pivot",
              "$model->extra",
              "$model->through",
              "$model->junction"
            ],
            "a": 0,
            "explain": "Atribut pivot memberi akses kolom tabel perantara."
          },
          {
            "type": "mc",
            "q": "Global scope diterapkan secara",
            "options": [
              "hanya bila dipanggil manual",
              "hanya di migration",
              "hanya di test",
              "otomatis ke setiap query model"
            ],
            "a": 3,
            "explain": "Global scope otomatis menambahkan constraint pada query model."
          },
          {
            "type": "mc",
            "q": "Mencegah update bersamaan dengan optimistic locking memakai kolom",
            "options": [
              "versi atau updated_at check",
              "nama tabel",
              "foreign key",
              "index unik nama"
            ],
            "a": 0,
            "explain": "Kolom versi mendeteksi perubahan bersamaan dan mencegah overwrite."
          }
        ]
      },
      {
        "id": "laravel-23",
        "level": "Advance",
        "title": "Keamanan Aplikasi",
        "exercises": [
          {
            "type": "mc",
            "q": "Mass assignment diatasi dengan",
            "options": [
              "menghapus semua kolom",
              "mendefinisikan $fillable atau $guarded",
              "menonaktifkan validasi",
              "memakai request->all() selalu"
            ],
            "a": 1,
            "explain": "Membatasi atribut massal mencegah penyerang mengubah kolom sensitif."
          },
          {
            "type": "mc",
            "q": "Query dengan parameter terikat mencegah",
            "options": [
              "XSS",
              "CSRF",
              "SQL injection",
              "clickjacking"
            ],
            "a": 2,
            "explain": "Parameter terikat memisahkan data dari struktur query."
          },
          {
            "type": "mc",
            "q": "Escape otomatis Blade membantu mencegah",
            "options": [
              "SQL injection",
              "XSS",
              "DDoS",
              "race condition"
            ],
            "a": 1,
            "explain": "Escaping mencegah skrip injeksi berjalan di browser pengguna."
          },
          {
            "type": "mc",
            "q": "Token CSRF melindungi dari",
            "options": [
              "kebocoran memory",
              "query lambat",
              "kompresi berlebih",
              "request lintas situs yang tidak diinginkan"
            ],
            "a": 3,
            "explain": "Token CSRF memastikan request berasal dari aplikasi sendiri."
          },
          {
            "type": "mc",
            "q": "Rate limiting endpoint memakai middleware",
            "options": [
              "limit",
              "throttle",
              "quota",
              "guard"
            ],
            "a": 1,
            "explain": "Middleware throttle membatasi jumlah request per waktu."
          },
          {
            "type": "mc",
            "q": "Menyimpan password sebaiknya memakai",
            "options": [
              "md5",
              "Hash::make dengan algoritma kuat",
              "base64",
              "plain text"
            ],
            "a": 1,
            "explain": "Hashing satu arah dengan salt melindungi password bila data bocor."
          },
          {
            "type": "mc",
            "q": "Memverifikasi password memakai",
            "options": [
              "Hash::compareText()",
              "Hash::check($plain, $hash)",
              "$hash === $plain",
              "md5($plain)"
            ],
            "a": 1,
            "explain": "Hash::check memverifikasi tanpa membalik hash."
          },
          {
            "type": "mc",
            "q": "Untuk menandai cookie sebagai HSTS/secure gunakan",
            "options": [
              "menghapus cookie",
              "konfigurasi secure & http_only pada cookie",
              "cookie bernama aman",
              "enqueue()"
            ],
            "a": 1,
            "explain": "Atribut secure dan httpOnly membatasi paparan cookie."
          },
          {
            "type": "mc",
            "q": "Memvalidasi berkas unggahan penting untuk mencegah",
            "options": [
              "route salah",
              "unggahan berkas berbahaya",
              "migration ganda",
              "queue lambat"
            ],
            "a": 1,
            "explain": "Validasi tipe dan ukuran mencegah unggahan berbahaya."
          },
          {
            "type": "mc",
            "q": "Kebocoran detail error di produksi dicegah dengan",
            "options": [
              "APP_DEBUG=false",
              "APP_ENV=local",
              "menampilkan stack trace",
              "menghapus log"
            ],
            "a": 0,
            "explain": "Mode debug mati mencegah detail internal bocor ke pengguna."
          }
        ]
      },
      {
        "id": "laravel-24",
        "level": "Advance",
        "title": "Performa & Cache",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyimpan hasil query berat di cache memakai",
            "options": [
              "Cache::storeOnly()",
              "Cache::remember()",
              "Cache::memo()",
              "Cache::keep()"
            ],
            "a": 1,
            "explain": "remember mengambil dari cache atau menjalankan closure bila belum ada."
          },
          {
            "type": "mc",
            "q": "Konfigurasi cache berada di",
            "options": [
              "config/store.php",
              "config/memo.php",
              "config/cache.php",
              "app/cache.php"
            ],
            "a": 2,
            "explain": "config/cache.php mengatur driver dan store cache."
          },
          {
            "type": "mc",
            "q": "Membersihkan cache aplikasi memakai",
            "options": [
              "php artisan cache:clear",
              "php artisan clear:cache",
              "php artisan cache:wipe",
              "php artisan memo:clear"
            ],
            "a": 0,
            "explain": "cache:clear mengosongkan isi cache."
          },
          {
            "type": "mc",
            "q": "Index database membantu mempercepat",
            "options": [
              "render view",
              "kompilasi Blade",
              "pencarian dan join pada kolom terkait",
              "validasi input"
            ],
            "a": 2,
            "explain": "Index mempercepat operasi pencarian pada kolom yang sering dipakai."
          },
          {
            "type": "mc",
            "q": "Eager loading mencegah masalah",
            "options": [
              "CSRF",
              "XSS",
              "N+1 query",
              "deadlock saja"
            ],
            "a": 2,
            "explain": "Eager loading memuat relasi dalam query lebih sedikit."
          },
          {
            "type": "mc",
            "q": "Route dan config caching di produksi mempercepat dengan",
            "options": [
              "php artisan asset:cache",
              "php artisan view:minify",
              "php artisan route:cache dan config:cache",
              "php artisan speed:up"
            ],
            "a": 2,
            "explain": "Cache route dan config mengurangi pekerjaan bootstrap tiap request."
          },
          {
            "type": "mc",
            "q": "Mengurangi ukuran payload API terbantu dengan",
            "options": [
              "mengirim seluruh relasi selalu",
              "menonaktifkan pagination",
              "mengirim model mentah",
              "memilih kolom dan relasi seperlunya"
            ],
            "a": 3,
            "explain": "Hanya mengirim field yang dibutuhkan menekan ukuran respons."
          },
          {
            "type": "mc",
            "q": "Optimalisasi aset frontend pada Laravel biasanya memakai",
            "options": [
              "php artisan compile:css",
              "Artisan view:css",
              "migration",
              "Vite build"
            ],
            "a": 3,
            "explain": "Vite membundel dan meminifikasi aset frontend."
          },
          {
            "type": "mc",
            "q": "Menunda pekerjaan berat dari request memakai",
            "options": [
              "loop di controller",
              "queue job",
              "sleep()",
              "query berulang"
            ],
            "a": 1,
            "explain": "Queue memindahkan pekerjaan berat keluar dari siklus request."
          },
          {
            "type": "mc",
            "q": "Memantau query lambat membantu dengan",
            "options": [
              "query log atau profiler (Telescope)",
              "menambahkan sleep",
              "menghapus index",
              "menonaktifkan cache"
            ],
            "a": 0,
            "explain": "Query log dan profiler membantu menemukan query yang lambat."
          }
        ]
      },
      {
        "id": "laravel-25",
        "level": "Advance",
        "title": "Queue Lanjutan & Batching",
        "exercises": [
          {
            "type": "mc",
            "q": "Job batching memungkinkan",
            "options": [
              "menghapus queue",
              "mengganti migration",
              "menulis CSS",
              "menjalankan banyak job dan memantau penyelesaiannya"
            ],
            "a": 3,
            "explain": "Batch mengelompokkan job dan memberi callback saat selesai."
          },
          {
            "type": "mc",
            "q": "Menjalankan batch memakai",
            "options": [
              "Bus::batch([...])->dispatch()",
              "Queue::batch([...])",
              "Job::all()->run()",
              "Batch::start([...])"
            ],
            "a": 0,
            "explain": "Bus::batch menyiapkan sekumpulan job yang dieksekusi sebagai satu batch."
          },
          {
            "type": "mc",
            "q": "Job yang memiliki beberapa percobaan diatur dengan properti",
            "options": [
              "$attempts",
              "$retryMax",
              "$loop",
              "$tries"
            ],
            "a": 3,
            "explain": "$tries menentukan jumlah maksimum percobaan job."
          },
          {
            "type": "mc",
            "q": "Menunda eksekusi job memakai",
            "options": [
              "->later(...)",
              "->sleep(...)",
              "->after(...)",
              "->delay(...)"
            ],
            "a": 3,
            "explain": "delay menunda job dieksekusi."
          },
          {
            "type": "mc",
            "q": "Membatasi waktu eksekusi job memakai",
            "options": [
              "$limit",
              "$deadline",
              "$maxTime",
              "$timeout"
            ],
            "a": 3,
            "explain": "Properti $timeout membatasi durasi eksekusi job."
          },
          {
            "type": "mc",
            "q": "Job yang unik di queue dapat memakai",
            "options": [
              "UniqueJob",
              "ShouldBeUnique",
              "OnceOnly",
              "SingleJob"
            ],
            "a": 1,
            "explain": "Interface/atribut unik mencegah duplikasi job pada queue."
          },
          {
            "type": "mc",
            "q": "Retry job gagal dengan backoff menggunakan",
            "options": [
              "wait()",
              "pause()",
              "backoff()",
              "hold()"
            ],
            "a": 2,
            "explain": "backoff mengatur jeda antar percobaan ulang."
          },
          {
            "type": "mc",
            "q": "Prioritas queue diatur di",
            "options": [
              "routes/web.php",
              "config/queue.php pada daftar queue",
              "config/app.php",
              "public/index.php"
            ],
            "a": 1,
            "explain": "Urutan queue menentukan prioritas pemrosesan worker."
          },
          {
            "type": "mc",
            "q": "Failed job bisa dihapus massal memakai",
            "options": [
              "queue:clear-all",
              "queue:flush",
              "queue:purge",
              "queue:drop"
            ],
            "a": 1,
            "explain": "queue:flush menghapus seluruh job yang gagal."
          },
          {
            "type": "mc",
            "q": "Horizontal scaling worker berarti",
            "options": [
              "menambah tabel",
              "menambah jumlah worker pemroses",
              "menambah route",
              "mengurangi validasi"
            ],
            "a": 1,
            "explain": "Menambah worker meningkatkan kapasitas pemrosesan queue."
          }
        ]
      },
      {
        "id": "laravel-26",
        "level": "Advance",
        "title": "Event Sourcing & Notification",
        "exercises": [
          {
            "type": "mc",
            "q": "Notifikasi Laravel didukung oleh sistem",
            "options": [
              "Alert",
              "Messenger",
              "Notification",
              "Postman"
            ],
            "a": 2,
            "explain": "Fitur Notification mengirim notifikasi lewat channel seperti mail dan database."
          },
          {
            "type": "mc",
            "q": "Notifikasi dibuat dengan perintah artisan",
            "options": [
              "php artisan new:alert",
              "php artisan notification:make",
              "php artisan notify:create",
              "php artisan make:notification"
            ],
            "a": 3,
            "explain": "make:notification membuat class notifikasi baru."
          },
          {
            "type": "mc",
            "q": "Mengirim notifikasi memakai",
            "options": [
              "$user->send(new Notif)",
              "Notification::to($user)",
              "$user->notify(new Notif(...))",
              "$user->alert(new Notif)"
            ],
            "a": 2,
            "explain": "notify() mengirim notifikasi ke penerima."
          },
          {
            "type": "mc",
            "q": "Channel notifikasi diatur pada method",
            "options": [
              "channels()",
              "via()",
              "routes()",
              "sendVia()"
            ],
            "a": 1,
            "explain": "via() menentukan channel pengiriman notifikasi."
          },
          {
            "type": "mc",
            "q": "Notifikasi database memerlukan migration tabel",
            "options": [
              "notifs",
              "alerts",
              "notifications",
              "messages"
            ],
            "a": 2,
            "explain": "Tabel notifications menyimpan notifikasi untuk pengguna."
          },
          {
            "type": "mc",
            "q": "Broadcast event ke frontend realtime biasanya memakai",
            "options": [
              "Laravel Echo + broadcasting driver",
              "email saja",
              "migration",
              "queue sync"
            ],
            "a": 0,
            "explain": "Broadcasting memancarkan event ke klien realtime melalui driver seperti Pusher."
          },
          {
            "type": "mc",
            "q": "Mail yang bisa di-queue mengimplementasikan interface",
            "options": [
              "ShouldMail",
              "SendLater",
              "ShouldQueue",
              "QueuedMail"
            ],
            "a": 2,
            "explain": "Implementasi ShouldQueue membuat notifikasi/mail dikirim via queue."
          },
          {
            "type": "mc",
            "q": "Template email Laravel dibuat dengan perintah",
            "options": [
              "php artisan make:mail",
              "php artisan new:mail",
              "php artisan mail:make",
              "php artisan email:create"
            ],
            "a": 0,
            "explain": "make:mail membuat class Mailable."
          },
          {
            "type": "mc",
            "q": "Mengirim mailable memakai",
            "options": [
              "Mail::sendTo($user)->go()",
              "Mailable::dispatch($user)",
              "$user->mail(new Mailable)",
              "Mail::to($user)->send(new Mailable)"
            ],
            "a": 3,
            "explain": "Mail facade mengirim mailable ke penerima."
          },
          {
            "type": "mc",
            "q": "Markdown mailable membantu",
            "options": [
              "mengganti database",
              "menghapus validasi",
              "menulis CSS",
              "menulis template email dengan format Markdown"
            ],
            "a": 3,
            "explain": "Markdown mailable menyediakan template email siap pakai berbasis Markdown."
          }
        ]
      },
      {
        "id": "laravel-27",
        "level": "Advance",
        "title": "Pola Desain di Laravel",
        "exercises": [
          {
            "type": "mc",
            "q": "Pipeline pattern di Laravel dipakai untuk",
            "options": [
              "mengganti route",
              "menulis migration",
              "mengalirkan data lewat serangkaian tahap",
              "menghapus event"
            ],
            "a": 2,
            "explain": "Pipeline meneruskan data melalui beberapa tahap pemrosesan berurutan."
          },
          {
            "type": "mc",
            "q": "Pola Strategy cocok ketika",
            "options": [
              "ada beberapa algoritma yang bisa dipilih saat runtime",
              "hanya ada satu cara tetap",
              "tidak butuh abstraksi",
              "semua logika di controller"
            ],
            "a": 0,
            "explain": "Strategy memisahkan algoritma yang dapat ditukar secara dinamis."
          },
          {
            "type": "mc",
            "q": "Pola Factory dipakai untuk",
            "options": [
              "menulis CSS",
              "mengatur middleware",
              "membuat objek tanpa mengikat kelas konkret",
              "menghapus index"
            ],
            "a": 2,
            "explain": "Factory memusatkan pembuatan objek dan menyembunyikan kelas konkret."
          },
          {
            "type": "mc",
            "q": "Pola Observer selaras dengan fitur Laravel",
            "options": [
              "Event dan Listener",
              "Migration",
              "Pagination",
              "Seeder"
            ],
            "a": 0,
            "explain": "Event/Listener mengimplementasikan pola observer."
          },
          {
            "type": "mc",
            "q": "Pola Decorator berguna untuk",
            "options": [
              "menghapus semua dependency",
              "menggabungkan tabel",
              "membuat route",
              "menambah perilaku tanpa mengubah class asli"
            ],
            "a": 3,
            "explain": "Decorator membungkus objek untuk menambah perilaku."
          },
          {
            "type": "mc",
            "q": "Pola Repository lebih mudah diuji karena",
            "options": [
              "menghapus kebutuhan database selalu",
              "akses data dapat diganti implementasi palsu",
              "tidak perlu interface",
              "semua di controller"
            ],
            "a": 1,
            "explain": "Dengan interface, repository dapat diganti mock saat pengujian."
          },
          {
            "type": "mc",
            "q": "Pola Adapter dipakai untuk",
            "options": [
              "menggandakan tabel",
              "menghapus validasi",
              "menjadikan antarmuka dua sistem yang berbeda saling cocok",
              "menulis view"
            ],
            "a": 2,
            "explain": "Adapter menjembatani antarmuka yang tidak kompatibel."
          },
          {
            "type": "mc",
            "q": "Pola Command pada Laravel biasanya merujuk pada",
            "options": [
              "perintah Artisan kustom",
              "class CSS",
              "middleware",
              "tabel"
            ],
            "a": 0,
            "explain": "Perintah Artisan kustom mengimplementasikan pola command."
          },
          {
            "type": "mc",
            "q": "Pola Singleton menjamin",
            "options": [
              "banyak instance tiap panggilan",
              "tanpa state sama sekali",
              "satu instance untuk satu siklus aplikasi",
              "dua instance"
            ],
            "a": 2,
            "explain": "Singleton menyediakan satu instance bersama."
          },
          {
            "type": "mc",
            "q": "Menerapkan pola secara berlebihan berisiko",
            "options": [
              "kode selalu salah",
              "aplikasi tidak bisa build",
              "kompleksitas tak perlu (over-engineering)",
              "database rusak"
            ],
            "a": 2,
            "explain": "Pola sebaiknya dipakai sesuai kebutuhan, bukan sekadar demi pola."
          }
        ]
      },
      {
        "id": "laravel-28",
        "level": "Advance",
        "title": "Multi-Tenancy & Skala",
        "exercises": [
          {
            "type": "mc",
            "q": "Multi-tenancy berarti",
            "options": [
              "satu aplikasi per pengguna",
              "satu database per query",
              "satu aplikasi melayani banyak organisasi/tenant",
              "tanpa isolasi data"
            ],
            "a": 2,
            "explain": "Multi-tenancy memisahkan data antar tenant pada aplikasi yang sama."
          },
          {
            "type": "mc",
            "q": "Isolasi data tenant dapat dilakukan dengan",
            "options": [
              "menghapus semua data",
              "tanpa pembeda",
              "kolom tenant_id atau database terpisah",
              "satu tabel global"
            ],
            "a": 2,
            "explain": "Kolom tenant_id atau database terpisah menjaga isolasi data."
          },
          {
            "type": "mc",
            "q": "Global scope berguna pada multi-tenancy untuk",
            "options": [
              "menghapus middleware",
              "otomatis membatasi query ke tenant aktif",
              "membuat migration",
              "mengubah view"
            ],
            "a": 1,
            "explain": "Global scope memfilter data sesuai tenant aktif secara otomatis."
          },
          {
            "type": "mc",
            "q": "Read replica membantu meningkatkan",
            "options": [
              "kapasitas baca dengan mendistribusikan query",
              "ukuran gambar",
              "jumlah route",
              "validasi"
            ],
            "a": 0,
            "explain": "Replica menangani beban baca dari database utama."
          },
          {
            "type": "mc",
            "q": "Sharding database berarti",
            "options": [
              "menggabungkan semua data",
              "membagi data ke beberapa database",
              "menghapus index",
              "menambahkan view"
            ],
            "a": 1,
            "explain": "Sharding memecah data ke beberapa node database."
          },
          {
            "type": "mc",
            "q": "Cache per tenant perlu memakai",
            "options": [
              "satu kunci global sama",
              "tanpa kunci",
              "hapus semua cache",
              "prefix kunci yang berbeda per tenant"
            ],
            "a": 3,
            "explain": "Prefix berbeda mencegah tenant membaca cache tenant lain."
          },
          {
            "type": "mc",
            "q": "Load balancer berperan untuk",
            "options": [
              "mendistribusikan trafik ke beberapa server",
              "menulis migration",
              "mengganti queue",
              "menyimpan password"
            ],
            "a": 0,
            "explain": "Load balancer membagi trafik ke sejumlah server."
          },
          {
            "type": "mc",
            "q": "Session pada aplikasi multi-server sebaiknya disimpan di",
            "options": [
              "memori lokal tiap server saja",
              "store bersama seperti Redis atau database",
              "file per server",
              "variabel global"
            ],
            "a": 1,
            "explain": "Store bersama memastikan session konsisten antar server."
          },
          {
            "type": "mc",
            "q": "Deploy zero-downtime memerlukan",
            "options": [
              "mematikan server dulu",
              "menghapus migration",
              "menghapus cache",
              "strategi rilis bertahap dan koneksi DB kompatibel"
            ],
            "a": 3,
            "explain": "Migrasi skema kompatibel dan rilis bertahap menjaga layanan tetap hidup."
          },
          {
            "type": "mc",
            "q": "Memantau kesehatan sistem produksi terbantu dengan",
            "options": [
              "menghapus log",
              "menonaktifkan monitoring",
              "health check dan logging terpusat",
              "tanpa metrik"
            ],
            "a": 2,
            "explain": "Health check dan log terpusat membantu mendeteksi masalah cepat."
          }
        ]
      },
      {
        "id": "laravel-29",
        "level": "Advance",
        "title": "Integrasi & Webhook",
        "exercises": [
          {
            "type": "mc",
            "q": "HTTP client bawaan Laravel adalah",
            "options": [
              "Http facade",
              "CurlClient",
              "Fetch",
              "Remote"
            ],
            "a": 0,
            "explain": "Facade Http memudahkan request HTTP keluar."
          },
          {
            "type": "mc",
            "q": "Mengirim request GET memakai",
            "options": [
              "Http::get('https://api...')",
              "Http::fetch('https://api...')",
              "Http::load('https://api...')",
              "Http::call('https://api...')"
            ],
            "a": 0,
            "explain": "Http::get mengirim request GET dan mengembalikan respons."
          },
          {
            "type": "mc",
            "q": "Memeriksa respons sukses memakai",
            "options": [
              "->ok()",
              "->finished()",
              "->done()",
              "->successful()"
            ],
            "a": 3,
            "explain": "successful() memeriksa status 2xx."
          },
          {
            "type": "mc",
            "q": "Mengirim JSON body memakai",
            "options": [
              "Http::json($url, $data)",
              "Http::post($url, $data)",
              "Http::send($url, $data)",
              "Http::write($url, $data)"
            ],
            "a": 1,
            "explain": "post dengan array mengirim body JSON secara otomatis."
          },
          {
            "type": "mc",
            "q": "Mengulang request yang gagal memakai",
            "options": [
              "->retry(3, 100)",
              "->try(3)",
              "->again(3)",
              "->repeat(3)"
            ],
            "a": 0,
            "explain": "retry mengulang request dengan jeda antar percobaan."
          },
          {
            "type": "mc",
            "q": "Webhook adalah",
            "options": [
              "tabel database",
              "jenis middleware",
              "template view",
              "request HTTP dari layanan luar ke aplikasi kita"
            ],
            "a": 3,
            "explain": "Webhook memberi tahu aplikasi kita lewat HTTP saat ada kejadian di layanan lain."
          },
          {
            "type": "mc",
            "q": "Menerima webhook dengan aman sebaiknya memakai",
            "options": [
              "menerima apa saja tanpa cek",
              "verifikasi signature dan token",
              "mematikan HTTPS",
              "menghapus route"
            ],
            "a": 1,
            "explain": "Verifikasi signature memastikan webhook berasal dari sumber terpercaya."
          },
          {
            "type": "mc",
            "q": "Menguji request keluar tanpa memanggil server nyata memakai",
            "options": [
              "Http::mockReal()",
              "Http::real()",
              "Http::block()",
              "Http::fake()"
            ],
            "a": 3,
            "explain": "Http::fake menangkap request dan mengembalikan respons tiruan."
          },
          {
            "type": "mc",
            "q": "Memeriksa request terkirim pada test memakai",
            "options": [
              "Http::assertSent",
              "Http::check",
              "Http::has",
              "Http::count"
            ],
            "a": 0,
            "explain": "assertSent memverifikasi request keluar yang dibuat test."
          },
          {
            "type": "mc",
            "q": "Mengirim file multipart keluar memakai",
            "options": [
              "Http::file()->send()",
              "Http::attach(...)->post(...)",
              "Http::upload()",
              "Http::binary()"
            ],
            "a": 1,
            "explain": "attach menambahkan berkas multipart pada request."
          }
        ]
      },
      {
        "id": "laravel-30",
        "level": "Advance",
        "title": "Refactor & Best Practice",
        "exercises": [
          {
            "type": "mc",
            "q": "Controller ramping (thin controller) berarti",
            "options": [
              "memindahkan logika bisnis ke service/action",
              "menambahkan semua logika ke controller",
              "menghapus controller",
              "menulis logika di route"
            ],
            "a": 0,
            "explain": "Thin controller hanya mengatur alur, logika bisnis di lapisan lain."
          },
          {
            "type": "mc",
            "q": "Validasi paling tepat diletakkan di",
            "options": [
              "Blade",
              "Form Request",
              "Migration",
              "Seeder"
            ],
            "a": 1,
            "explain": "Form Request memusatkan validasi request."
          },
          {
            "type": "mc",
            "q": "Kode berulang di banyak tempat sebaiknya",
            "options": [
              "dibiarkan berulang",
              "dihapus",
              "disatukan ke helper/service yang teruji",
              "disalin lebih banyak"
            ],
            "a": 2,
            "explain": "Menghilangkan duplikasi memudahkan perawatan."
          },
          {
            "type": "mc",
            "q": "Nama method dan variabel sebaiknya",
            "options": [
              "jelas dan menggambarkan tujuan",
              "pendek tanpa makna",
              "acak",
              "bernomor"
            ],
            "a": 0,
            "explain": "Nama bermakna mempermudah pemahaman kode."
          },
          {
            "type": "mc",
            "q": "Mengembalikan data API konsisten terbantu dengan",
            "options": [
              "API Resource",
              "JSON manual berulang",
              "print_r",
              "var_dump"
            ],
            "a": 0,
            "explain": "API Resource menyeragamkan bentuk respons."
          },
          {
            "type": "mc",
            "q": "Transaksi database dipakai untuk",
            "options": [
              "mempercepat CSS",
              "mengganti route",
              "menjaga beberapa operasi berhasil bersama atau batal bersama",
              "menghapus index"
            ],
            "a": 2,
            "explain": "Transaksi menjaga konsistensi operasi yang saling bergantung."
          },
          {
            "type": "mc",
            "q": "Menangani exception terpusat dilakukan di",
            "options": [
              "setiap view",
              "migration",
              "handler exception aplikasi",
              "factory"
            ],
            "a": 2,
            "explain": "Handler exception memusatkan pemetaan error ke respons."
          },
          {
            "type": "mc",
            "q": "Logging yang baik mencatat",
            "options": [
              "password dan token",
              "informasi konteks tanpa data sensitif",
              "semua data pribadi",
              "tanpa struktur"
            ],
            "a": 1,
            "explain": "Log berguna untuk diagnosis namun harus menghindari data sensitif."
          },
          {
            "type": "mc",
            "q": "Konsistensi gaya kode tim dijaga dengan",
            "options": [
              "aturan lisan saja",
              "tanpa aturan",
              "satu controller besar",
              "formatter dan linter (Pint/PHPStan)"
            ],
            "a": 3,
            "explain": "Pint dan PHPStan menjaga gaya serta kualitas kode."
          },
          {
            "type": "mc",
            "q": "Dokumentasi migrasi skema penting agar",
            "options": [
              "route lebih cepat",
              "view lebih rapi",
              "perubahan database terurut dan dapat diulang",
              "CSS lebih kecil"
            ],
            "a": 2,
            "explain": "Migration terdokumentasi menjaga konsistensi skema antar lingkungan."
          }
        ]
      },
      {
        "id": "laravel-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Laravel",
        "exercises": [
          {
            "type": "mc",
            "q": "Menggabungkan migration yang aman untuk zero downtime berarti",
            "options": [
              "menghindari kolom wajib tanpa default pada tabel besar",
              "menghapus semua index",
              "menjalankan delete massal",
              "mematikan aplikasi"
            ],
            "a": 0,
            "explain": "Menambah kolom wajib tanpa default dapat mengunci tabel besar; migrasi bertahap lebih aman."
          },
          {
            "type": "mc",
            "q": "Pemeriksaan otorisasi sebaiknya dilakukan",
            "options": [
              "hanya di tombol UI",
              "tidak perlu",
              "di server sebelum aksi dijalankan",
              "setelah data dihapus"
            ],
            "a": 2,
            "explain": "Otorisasi harus ditegakkan di server; UI saja tidak cukup."
          },
          {
            "type": "mc",
            "q": "Memilih menggunakan queue untuk email karena",
            "options": [
              "email jadi lebih aman",
              "menghapus SMTP",
              "mengurangi waktu tunggu respons request",
              "membuat tabel"
            ],
            "a": 2,
            "explain": "Queue memindahkan pengiriman email keluar dari siklus request."
          },
          {
            "type": "fill",
            "q": "Lengkapi perintah membuat model sekaligus migration:",
            "code": "php artisan make:model Post ___",
            "accept": [
              "-m",
              "--migration"
            ],
            "explain": "Flag -m membuat migration bersama model."
          },
          {
            "type": "arrange",
            "q": "Susun alur request Laravel dari masuk sampai respons:",
            "blocks": [
              "public/index.php",
              "HTTP kernel & middleware",
              "Routing ke controller",
              "Controller memproses & query",
              "Response dikirim ke browser"
            ],
            "explain": "Request masuk lewat index.php, melewati kernel dan middleware, lalu route dan controller."
          }
        ]
      }
    ]
  }
];

export { CONTENT_LARAVEL };
