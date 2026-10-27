/* CodeDuo — blok konten: topik "Ruby on Rails" (dipisah dari Blok Web).
 * 1 topik (rails) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Engine di content.js (barrel) & app.js. Format tipe soal: mc | fill | code | preview | arrange.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_RAILS = [
{
    "id": "rails",
    "name": "Ruby on Rails",
    "icon": "🛤️",
    "color": "#cc0000",
    "desc": "Framework web MVC untuk Ruby",
    "lessons": [
      {
        "id": "rails-1",
        "level": "Dasar",
        "title": "Pengenalan Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Rails adalah framework web untuk",
            "options": [
              "Ruby",
              "PHP",
              "Python",
              "JavaScript"
            ],
            "a": 0,
            "explain": "Rails dibangun dengan Ruby."
          },
          {
            "type": "mc",
            "q": "Pola arsitektur Rails adalah",
            "options": [
              "MVVM",
              "Flux",
              "Hexagonal wajib",
              "MVC"
            ],
            "a": 3,
            "explain": "Rails menganut MVC."
          },
          {
            "type": "mc",
            "q": "Membuat proyek Rails baru memakai",
            "options": [
              "rails new nama",
              "rails create nama",
              "gem new rails",
              "bundle rails new"
            ],
            "a": 0,
            "explain": "rails new men-scaffold aplikasi."
          },
          {
            "type": "mc",
            "q": "Menjalankan server Rails memakai",
            "options": [
              "rails run",
              "rails server (rails s)",
              "rack start",
              "ruby server"
            ],
            "a": 1,
            "explain": "rails s menjalankan server."
          },
          {
            "type": "mc",
            "q": "Konvensi over configuration berarti",
            "options": [
              "tanpa konfigurasi",
              "CSS",
              "route",
              "default wajar mengurangi konfigurasi"
            ],
            "a": 3,
            "explain": "Konvensi mengurangi konfigurasi eksplisit."
          },
          {
            "type": "mc",
            "q": "Direktori aplikasi utama Rails adalah",
            "options": [
              "src",
              "lib/main",
              "app",
              "public"
            ],
            "a": 2,
            "explain": "Kode aplikasi berada di app."
          },
          {
            "type": "mc",
            "q": "Direktori konfigurasi Rails adalah",
            "options": [
              "settings",
              "etc",
              "conf",
              "config"
            ],
            "a": 3,
            "explain": "Konfigurasi ada di config."
          },
          {
            "type": "mc",
            "q": "Bundler dipakai untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengelola gem dependency"
            ],
            "a": 3,
            "explain": "Bundler mengelola dependency gem."
          },
          {
            "type": "mc",
            "q": "Rails menyertakan ORM bernama",
            "options": [
              "Eloquent",
              "Prisma",
              "Hibernate",
              "Active Record"
            ],
            "a": 3,
            "explain": "Active Record adalah ORM Rails."
          },
          {
            "type": "mc",
            "q": "Lingkungan bawaan Rails adalah",
            "options": [
              "dev, prod",
              "development, test, production",
              "local, cloud",
              "staging saja"
            ],
            "a": 1,
            "explain": "Rails memiliki tiga lingkungan bawaan."
          }
        ]
      },
      {
        "id": "rails-2",
        "level": "Dasar",
        "title": "MVC Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Model pada Rails berada di",
            "options": [
              "app/views",
              "app/models",
              "app/controllers",
              "config"
            ],
            "a": 1,
            "explain": "Model berada di app/models."
          },
          {
            "type": "mc",
            "q": "Controller pada Rails berada di",
            "options": [
              "app/models",
              "config",
              "app/controllers",
              "public"
            ],
            "a": 2,
            "explain": "Controller ada di app/controllers."
          },
          {
            "type": "mc",
            "q": "View pada Rails berada di",
            "options": [
              "app/models",
              "app/views",
              "config",
              "lib"
            ],
            "a": 1,
            "explain": "View ada di app/views."
          },
          {
            "type": "mc",
            "q": "Model bertanggung jawab atas",
            "options": [
              "tampilan",
              "routing",
              "data dan aturan bisnis",
              "aset"
            ],
            "a": 2,
            "explain": "Model mengelola data dan logika domain."
          },
          {
            "type": "mc",
            "q": "Controller bertanggung jawab atas",
            "options": [
              "CSS",
              "alur request dan respons",
              "skema",
              "aset"
            ],
            "a": 1,
            "explain": "Controller mengatur alur request."
          },
          {
            "type": "mc",
            "q": "View bertanggung jawab atas",
            "options": [
              "skema DB",
              "routing",
              "tampilan",
              "migrasi"
            ],
            "a": 2,
            "explain": "View merender tampilan."
          },
          {
            "type": "mc",
            "q": "Action pada controller adalah",
            "options": [
              "file CSS",
              "route",
              "migrasi",
              "method publik penangan request"
            ],
            "a": 3,
            "explain": "Action adalah method yang menangani request."
          },
          {
            "type": "mc",
            "q": "Routing memetakan",
            "options": [
              "URL ke action controller",
              "CSS ke HTML",
              "DB ke file",
              "route ke gem"
            ],
            "a": 0,
            "explain": "Router menghubungkan URL dengan controller action."
          },
          {
            "type": "mc",
            "q": "Rails memakai template engine",
            "options": [
              "Blade",
              "ERB",
              "JSX",
              "Twig"
            ],
            "a": 1,
            "explain": "ERB adalah template engine bawaan."
          },
          {
            "type": "mc",
            "q": "Konvensi nama controller untuk resource posts adalah",
            "options": [
              "PostController",
              "PostsCtl",
              "ControllerPosts",
              "PostsController"
            ],
            "a": 3,
            "explain": "Controller resource memakai bentuk jamak PostsController."
          }
        ]
      },
      {
        "id": "rails-3",
        "level": "Dasar",
        "title": "Routing Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Berkas routing Rails berada di",
            "options": [
              "routes/web.php",
              "config/routes.rb",
              "app/routes.rb",
              "config/web.rb"
            ],
            "a": 1,
            "explain": "Route didefinisikan di config/routes.rb."
          },
          {
            "type": "mc",
            "q": "Mendefinisikan route CRUD standar memakai",
            "options": [
              "resource :posts",
              "resources :posts",
              "crud :posts",
              "route :posts"
            ],
            "a": 1,
            "explain": "resources membuat route RESTful."
          },
          {
            "type": "mc",
            "q": "Route untuk satu resource tunggal memakai",
            "options": [
              "resources :profil",
              "singleton :profil",
              "resource :profil",
              "one :profil"
            ],
            "a": 2,
            "explain": "resource (singular) untuk resource tunggal."
          },
          {
            "type": "mc",
            "q": "Melihat daftar route memakai",
            "options": [
              "rails list",
              "rails routes",
              "rails paths",
              "rails show"
            ],
            "a": 1,
            "explain": "rails routes menampilkan route."
          },
          {
            "type": "mc",
            "q": "Root route didefinisikan dengan",
            "options": [
              "root => 'home#index'",
              "get '/'",
              "root 'home#index'",
              "route root"
            ],
            "a": 2,
            "explain": "root menetapkan halaman utama."
          },
          {
            "type": "mc",
            "q": "Route dengan parameter dinamis memakai",
            "options": [
              "get 'posts/{id}'",
              "get 'posts/:id'",
              "get 'posts/[id]'",
              "get 'posts/<id>'"
            ],
            "a": 1,
            "explain": "Rails memakai :id untuk segmen dinamis."
          },
          {
            "type": "mc",
            "q": "Namespace route memakai",
            "options": [
              "namespace :admin do ... end",
              "group :admin",
              "module :admin",
              "prefix :admin"
            ],
            "a": 0,
            "explain": "namespace mengelompokkan route di bawah prefix."
          },
          {
            "type": "mc",
            "q": "Route member/collection ditambahkan pada",
            "options": [
              "config",
              "model",
              "view",
              "blok resources"
            ],
            "a": 3,
            "explain": "member/collection didefinisikan dalam blok resources."
          },
          {
            "type": "mc",
            "q": "Helper path untuk route posts index adalah",
            "options": [
              "posts_url_only",
              "post_path",
              "posts_path",
              "index_posts_path"
            ],
            "a": 2,
            "explain": "posts_path menghasilkan URL index posts."
          },
          {
            "type": "mc",
            "q": "Verb HTTP untuk membuat data adalah",
            "options": [
              "GET",
              "HEAD",
              "POST",
              "OPTIONS"
            ],
            "a": 2,
            "explain": "POST dipakai untuk membuat data."
          }
        ]
      },
      {
        "id": "rails-4",
        "level": "Dasar",
        "title": "Controller & Action",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat controller memakai generator",
            "options": [
              "rails new controller",
              "rails make controller",
              "rails ctrl",
              "rails generate controller Nama"
            ],
            "a": 3,
            "explain": "Generator membuat controller."
          },
          {
            "type": "mc",
            "q": "Membuat aplikasi CRUD scaffold memakai",
            "options": [
              "rails new scaffold",
              "rails scaffold:make",
              "rails generate scaffold Post",
              "rails g modelonly"
            ],
            "a": 2,
            "explain": "scaffold membuat model, controller, dan view."
          },
          {
            "type": "mc",
            "q": "Merender view dari action secara implisit",
            "options": [
              "tidak pernah",
              "ya, sesuai nama action",
              "harus selalu render",
              "hanya JSON"
            ],
            "a": 1,
            "explain": "Rails merender view sesuai nama action."
          },
          {
            "type": "mc",
            "q": "Render kustom memakai",
            "options": [
              "view 'nama'",
              "show 'nama'",
              "render 'nama_view'",
              "template 'nama'"
            ],
            "a": 2,
            "explain": "render memilih template."
          },
          {
            "type": "mc",
            "q": "Redirect memakai",
            "options": [
              "go_to path",
              "jump path",
              "redirect_to path",
              "nav path"
            ],
            "a": 2,
            "explain": "redirect_to mengalihkan."
          },
          {
            "type": "mc",
            "q": "Parameter request diakses lewat",
            "options": [
              "input",
              "params",
              "data",
              "query"
            ],
            "a": 1,
            "explain": "params berisi parameter request."
          },
          {
            "type": "mc",
            "q": "Strong parameters memakai",
            "options": [
              "params.require(:post).permit(:judul)",
              "params.allow",
              "params.ok",
              "params.filter"
            ],
            "a": 0,
            "explain": "require+permit membatasi atribut."
          },
          {
            "type": "mc",
            "q": "Memfilter request sebelum action memakai",
            "options": [
              "pre_action",
              "filter_before",
              "hook",
              "before_action"
            ],
            "a": 3,
            "explain": "before_action menjalankan kode sebelum action."
          },
          {
            "type": "mc",
            "q": "Menentukan format respons JSON memakai",
            "options": [
              "respond_to",
              "format_only",
              "json_out",
              "reply"
            ],
            "a": 0,
            "explain": "respond_to menangani berbagai format."
          },
          {
            "type": "mc",
            "q": "Instance variable dari controller dapat diakses view karena",
            "options": [
              "global",
              "CSS",
              "dibagikan ke view",
              "route"
            ],
            "a": 2,
            "explain": "Instance variable controller diteruskan ke view."
          }
        ]
      },
      {
        "id": "rails-5",
        "level": "Dasar",
        "title": "Active Record Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Model dibuat dengan generator",
            "options": [
              "rails new model",
              "rails generate model Post",
              "rails make model",
              "rails model:new"
            ],
            "a": 1,
            "explain": "Generator model membuat model dan migration."
          },
          {
            "type": "mc",
            "q": "Mengambil semua record memakai",
            "options": [
              "Post.get_all",
              "Post.rows",
              "Post.fetch",
              "Post.all"
            ],
            "a": 3,
            "explain": "all mengambil semua record."
          },
          {
            "type": "mc",
            "q": "Mencari berdasarkan id memakai",
            "options": [
              "Post.get(id)",
              "Post.row(id)",
              "Post.pick(id)",
              "Post.find(id)"
            ],
            "a": 3,
            "explain": "find mencari berdasarkan primary key."
          },
          {
            "type": "mc",
            "q": "Membuat record memakai",
            "options": [
              "Post.new_save(...)",
              "Post.insert(...)",
              "Post.add(...)",
              "Post.create(...)"
            ],
            "a": 3,
            "explain": "create membuat dan menyimpan."
          },
          {
            "type": "mc",
            "q": "Menyimpan record baru memakai",
            "options": [
              "post.store",
              "post.commit",
              "post.save",
              "post.write"
            ],
            "a": 2,
            "explain": "save menyimpan record."
          },
          {
            "type": "mc",
            "q": "Memperbarui record memakai",
            "options": [
              "post.update(...)",
              "post.change(...)",
              "post.set(...)",
              "post.edit(...)"
            ],
            "a": 0,
            "explain": "update mengubah dan menyimpan."
          },
          {
            "type": "mc",
            "q": "Menghapus record memakai",
            "options": [
              "post.delete_only",
              "post.destroy",
              "post.remove",
              "post.drop"
            ],
            "a": 1,
            "explain": "destroy menghapus record."
          },
          {
            "type": "mc",
            "q": "Nama tabel default untuk model Post adalah",
            "options": [
              "Post",
              "post",
              "tbl_posts",
              "posts"
            ],
            "a": 3,
            "explain": "Active Record memakai bentuk jamak snake_case."
          },
          {
            "type": "mc",
            "q": "Query where memakai",
            "options": [
              "Post.filter(aktif: true)",
              "Post.has(aktif: true)",
              "Post.only(aktif: true)",
              "Post.where(aktif: true)"
            ],
            "a": 3,
            "explain": "where menyaring record."
          },
          {
            "type": "mc",
            "q": "Mengurutkan hasil memakai",
            "options": [
              "Post.sort",
              "Post.order(created_at: :desc)",
              "Post.arrange",
              "Post.rank"
            ],
            "a": 1,
            "explain": "order mengurutkan hasil."
          }
        ]
      },
      {
        "id": "rails-6",
        "level": "Dasar",
        "title": "Migration",
        "exercises": [
          {
            "type": "mc",
            "q": "Migration dibuat dengan generator",
            "options": [
              "rails new migration",
              "rails migrate:new",
              "rails schema new",
              "rails generate migration Nama"
            ],
            "a": 3,
            "explain": "Generator migration membuat berkas migration."
          },
          {
            "type": "mc",
            "q": "Menjalankan migration memakai",
            "options": [
              "rails migrate",
              "rails db:apply",
              "rails db:migrate",
              "rails schema:apply"
            ],
            "a": 2,
            "explain": "db:migrate menerapkan migration."
          },
          {
            "type": "mc",
            "q": "Membatalkan migration terakhir memakai",
            "options": [
              "rails db:rollback",
              "rails db:undo",
              "rails migrate:back",
              "rails db:down"
            ],
            "a": 0,
            "explain": "db:rollback membatalkan batch terakhir."
          },
          {
            "type": "mc",
            "q": "Method membuat tabel pada migration adalah",
            "options": [
              "make_table",
              "new_table",
              "create_table",
              "table_create"
            ],
            "a": 2,
            "explain": "create_table membuat tabel."
          },
          {
            "type": "mc",
            "q": "Menambah kolom memakai",
            "options": [
              "create_column",
              "new_column",
              "add_column",
              "column_add"
            ],
            "a": 2,
            "explain": "add_column menambah kolom."
          },
          {
            "type": "mc",
            "q": "Tipe kolom untuk teks pendek adalah",
            "options": [
              "string",
              "text",
              "char",
              "varchar"
            ],
            "a": 0,
            "explain": "string memetakan ke VARCHAR."
          },
          {
            "type": "mc",
            "q": "Menambahkan referensi ke tabel lain memakai",
            "options": [
              "add_reference / references",
              "add_fk",
              "foreign",
              "link_id"
            ],
            "a": 0,
            "explain": "references menambah foreign key dan index."
          },
          {
            "type": "mc",
            "q": "Berkas migration berada di",
            "options": [
              "app/migrate",
              "config/migrate",
              "db/migrate",
              "lib/migrate"
            ],
            "a": 2,
            "explain": "Migration berada di db/migrate."
          },
          {
            "type": "mc",
            "q": "Mengisi data awal memakai",
            "options": [
              "rails db:fill",
              "rails db:seed",
              "rails seed:run",
              "rails data:init"
            ],
            "a": 1,
            "explain": "db:seed menjalankan seeds.rb."
          },
          {
            "type": "mc",
            "q": "Skema yang dihasilkan dicatat di",
            "options": [
              "db/tables.rb",
              "db/schema.rb",
              "config/schema",
              "app/schema"
            ],
            "a": 1,
            "explain": "schema.rb merangkum struktur skema."
          }
        ]
      },
      {
        "id": "rails-7",
        "level": "Dasar",
        "title": "View & ERB",
        "exercises": [
          {
            "type": "mc",
            "q": "Template ERB memakai ekstensi",
            "options": [
              ".html.erb",
              ".erb.html",
              ".html.rails",
              ".rhtml"
            ],
            "a": 0,
            "explain": "Template ERB berekstensi .html.erb."
          },
          {
            "type": "mc",
            "q": "Mencetak nilai di ERB memakai",
            "options": [
              "<% nilai %>",
              "<%= nilai %>",
              "{{ nilai }}",
              "${nilai}"
            ],
            "a": 1,
            "explain": "Tag <%= %> mencetak hasil."
          },
          {
            "type": "mc",
            "q": "Kode tanpa output di ERB memakai",
            "options": [
              "<%= kode %>",
              "<% kode %>",
              "{{ kode }}",
              "[% kode %]"
            ],
            "a": 1,
            "explain": "Tag <% %> menjalankan kode tanpa mencetak."
          },
          {
            "type": "mc",
            "q": "Layout default aplikasi ada di",
            "options": [
              "app/layouts/main.erb",
              "app/views/layouts/application.html.erb",
              "config/layout.erb",
              "public/layout"
            ],
            "a": 1,
            "explain": "Layout utama ada di application.html.erb."
          },
          {
            "type": "mc",
            "q": "Menyisipkan view lain memakai",
            "options": [
              "include_view",
              "insert",
              "render \"partial\"",
              "embed"
            ],
            "a": 2,
            "explain": "render menyisipkan partial."
          },
          {
            "type": "mc",
            "q": "Partial dinamai dengan awalan",
            "options": [
              "garis bawah (_nama.html.erb)",
              "titik",
              "nama.partial",
              "no prefix"
            ],
            "a": 0,
            "explain": "Partial memakai awalan garis bawah."
          },
          {
            "type": "mc",
            "q": "Yield pada layout berarti",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "tempat konten view disisipkan"
            ],
            "a": 3,
            "explain": "yield menandai tempat konten template."
          },
          {
            "type": "mc",
            "q": "Helper url route di view memakai",
            "options": [
              "href_to",
              "link_to \"Teks\", posts_path",
              "anchor",
              "route_link"
            ],
            "a": 1,
            "explain": "link_to membuat tautan."
          },
          {
            "type": "mc",
            "q": "Escape otomatis pada ERB melindungi dari",
            "options": [
              "XSS",
              "SQL injection",
              "race condition",
              "memory leak"
            ],
            "a": 0,
            "explain": "Escaping mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Menampilkan HTML aman secara eksplisit memakai",
            "options": [
              "innerHTML",
              "raw/html_safe hanya untuk konten tepercaya",
              "document.write",
              "eval"
            ],
            "a": 1,
            "explain": "raw membahayakan bila konten tak tepercaya."
          }
        ]
      },
      {
        "id": "rails-8",
        "level": "Dasar",
        "title": "Form Helper",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat form untuk model memakai",
            "options": [
              "form_for_any",
              "form_with model: @post",
              "form_tag_model",
              "new_form"
            ],
            "a": 1,
            "explain": "form_with membuat form model."
          },
          {
            "type": "mc",
            "q": "Field input teks memakai",
            "options": [
              "form.input_text",
              "form.field",
              "form.text_field",
              "form.text"
            ],
            "a": 2,
            "explain": "text_field merender input teks."
          },
          {
            "type": "mc",
            "q": "Submit button memakai",
            "options": [
              "form.button_send",
              "form.send",
              "form.go",
              "form.submit"
            ],
            "a": 3,
            "explain": "submit merender tombol kirim."
          },
          {
            "type": "mc",
            "q": "Field textarea memakai",
            "options": [
              "form.area",
              "form.text_area",
              "form.multiline",
              "form.text"
            ],
            "a": 1,
            "explain": "text_area merender textarea."
          },
          {
            "type": "mc",
            "q": "Select dropdown memakai",
            "options": [
              "form.dropdown",
              "form.choose",
              "form.options",
              "form.select"
            ],
            "a": 3,
            "explain": "select merender dropdown."
          },
          {
            "type": "mc",
            "q": "Checkbox memakai",
            "options": [
              "form.tick",
              "form.check_box",
              "form.checkbox",
              "form.bool"
            ],
            "a": 1,
            "explain": "check_box merender checkbox."
          },
          {
            "type": "mc",
            "q": "CSRF protection pada form Rails",
            "options": [
              "tidak ada",
              "manual CSS",
              "hanya API",
              "otomatis disertakan"
            ],
            "a": 3,
            "explain": "form_with menyertakan token CSRF."
          },
          {
            "type": "mc",
            "q": "Menampilkan error validasi biasanya dari",
            "options": [
              "CSS",
              "route",
              "objek model (errors)",
              "params saja"
            ],
            "a": 2,
            "explain": "model.errors berisi pesan validasi."
          },
          {
            "type": "mc",
            "q": "form_with mengarah ke action berdasarkan",
            "options": [
              "CSS",
              "params",
              "skema",
              "record dan konvensi route"
            ],
            "a": 3,
            "explain": "Rails menyimpulkan URL dari record."
          },
          {
            "type": "mc",
            "q": "Strong parameters tetap wajib pada",
            "options": [
              "view saja",
              "CSS",
              "action yang menerima input",
              "route"
            ],
            "a": 2,
            "explain": "Input harus difilter di server."
          }
        ]
      },
      {
        "id": "rails-9",
        "level": "Dasar",
        "title": "Validasi & Callback",
        "exercises": [
          {
            "type": "mc",
            "q": "Validasi wajib isi memakai",
            "options": [
              "validate(:nama).must",
              "must :nama",
              "check :nama",
              "validates :nama, presence: true"
            ],
            "a": 3,
            "explain": "presence memastikan nilai ada."
          },
          {
            "type": "mc",
            "q": "Validasi panjang memakai",
            "options": [
              "size: 100",
              "max: 100 selalu",
              "length: { maximum: 100 }",
              "len: 100"
            ],
            "a": 2,
            "explain": "length memvalidasi panjang."
          },
          {
            "type": "mc",
            "q": "Validasi keunikan memakai",
            "options": [
              "unique: true",
              "distinct: true",
              "uniqueness: true",
              "only_one: true"
            ],
            "a": 2,
            "explain": "uniqueness memeriksa keunikan."
          },
          {
            "type": "mc",
            "q": "Validasi format email memakai",
            "options": [
              "email: true",
              "pattern: email",
              "format: { with: /.../ }",
              "match: email"
            ],
            "a": 2,
            "explain": "format memvalidasi pola."
          },
          {
            "type": "mc",
            "q": "Callback sebelum menyimpan adalah",
            "options": [
              "before_save",
              "pre_save",
              "on_save",
              "save_before"
            ],
            "a": 0,
            "explain": "before_save bercjalan sebelum menyimpan."
          },
          {
            "type": "mc",
            "q": "Callback setelah membuat record adalah",
            "options": [
              "on_create",
              "post_create",
              "created",
              "after_create"
            ],
            "a": 3,
            "explain": "after_create berjalan setelah pembuatan."
          },
          {
            "type": "mc",
            "q": "Memeriksa validitas model memakai",
            "options": [
              "model.ok?",
              "model.valid?",
              "model.check",
              "model.test"
            ],
            "a": 1,
            "explain": "valid? mengembalikan boolean."
          },
          {
            "type": "mc",
            "q": "Pesan error pada model diakses dengan",
            "options": [
              "model.error",
              "model.errors.full_messages",
              "model.msgs",
              "model.issues"
            ],
            "a": 1,
            "explain": "full_messages berisi pesan lengkap."
          },
          {
            "type": "mc",
            "q": "Validasi kondisional memakai",
            "options": [
              "if: / unless:",
              "when:",
              "only_if:",
              "cond:"
            ],
            "a": 0,
            "explain": "Opsi if/unless membuat validasi bersyarat."
          },
          {
            "type": "mc",
            "q": "Validasi di sisi klien tidak menggantikan",
            "options": [
              "CSS",
              "route",
              "validasi server",
              "migrasi"
            ],
            "a": 2,
            "explain": "Validasi server wajib untuk keamanan."
          }
        ]
      },
      {
        "id": "rails-10",
        "level": "Dasar",
        "title": "Scope & Query Dasar",
        "exercises": [
          {
            "type": "mc",
            "q": "Scope didefinisikan dengan",
            "options": [
              "scope aktif => true",
              "scope :aktif, -> { where(aktif: true) }",
              "def_scope :aktif",
              "scope(:aktif)"
            ],
            "a": 1,
            "explain": "scope membuat query tersimpan."
          },
          {
            "type": "mc",
            "q": "Scope dapat dipanggil sebagai",
            "options": [
              "Post.scope(:aktif)",
              "Post.scoped(:aktif)",
              "Post.aktif",
              "Post.whereScope"
            ],
            "a": 2,
            "explain": "Scope dipanggil seperti method kelas."
          },
          {
            "type": "mc",
            "q": "Mengambil satu record pertama memakai",
            "options": [
              "Post.first",
              "Post.one",
              "Post.head",
              "Post.single"
            ],
            "a": 0,
            "explain": "first mengambil record pertama."
          },
          {
            "type": "mc",
            "q": "Mengambil jumlah record memakai",
            "options": [
              "Post.size_all",
              "Post.count",
              "Post.total",
              "Post.length"
            ],
            "a": 1,
            "explain": "count menghitung record."
          },
          {
            "type": "mc",
            "q": "Membatasi jumlah hasil memakai",
            "options": [
              "Post.take(10) only",
              "Post.max(10)",
              "Post.cap(10)",
              "Post.limit(10)"
            ],
            "a": 3,
            "explain": "limit membatasi jumlah."
          },
          {
            "type": "mc",
            "q": "Melewati sejumlah hasil memakai",
            "options": [
              "Post.skip(20)",
              "Post.from(20)",
              "Post.offset(20)",
              "Post.after(20)"
            ],
            "a": 2,
            "explain": "offset melewati baris."
          },
          {
            "type": "mc",
            "q": "Mencari record yang tidak ada menimbulkan",
            "options": [
              "ActiveRecord::RecordNotFound",
              "nil",
              "error CSS",
              "route"
            ],
            "a": 0,
            "explain": "find yang gagal melempar RecordNotFound."
          },
          {
            "type": "mc",
            "q": "Menggabungkan kondisi memakai",
            "options": [
              "CSS",
              "chaining where",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Query dapat dirangkai."
          },
          {
            "type": "mc",
            "q": "Raw SQL dapat dijalankan dengan",
            "options": [
              "CSS",
              "ActiveRecord::Base.connection.execute / find_by_sql",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "find_by_sql menjalankan SQL kustom."
          },
          {
            "type": "mc",
            "q": "Menghindari N+1 memakai",
            "options": [
              "CSS",
              "includes",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "includes melakukan eager loading."
          }
        ]
      },
      {
        "id": "rails-11",
        "level": "Menengah",
        "title": "Asosiasi Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Relasi satu ke banyak memakai",
            "options": [
              "belongs_to",
              "has_many",
              "has_one",
              "has_and_belongs_to_many"
            ],
            "a": 1,
            "explain": "has_many menyatakan relasi satu ke banyak."
          },
          {
            "type": "mc",
            "q": "Relasi kebalikan memakai",
            "options": [
              "has_many",
              "has_one",
              "through",
              "belongs_to"
            ],
            "a": 3,
            "explain": "belongs_to menyatakan kebalikan."
          },
          {
            "type": "mc",
            "q": "Relasi banyak ke banyak memakai",
            "options": [
              "belongs_to",
              "has_one",
              "CSS",
              "has_many :through / has_and_belongs_to_many"
            ],
            "a": 3,
            "explain": "HABTM/through untuk banyak ke banyak."
          },
          {
            "type": "mc",
            "q": "Asosiasi opsional memakai",
            "options": [
              "nullable: true",
              "optional: true",
              "can_be_nil",
              "maybe"
            ],
            "a": 1,
            "explain": "optional membolehkan foreign key nil."
          },
          {
            "type": "mc",
            "q": "Dependent destroy memakai",
            "options": [
              "on_delete: destroy",
              "cascade: true",
              "dependent: :destroy",
              "remove: true"
            ],
            "a": 2,
            "explain": "dependent: :destroy menghapus relasi terkait."
          },
          {
            "type": "mc",
            "q": "Polymorphic association memakai",
            "options": [
              "morph: true",
              "poly: true",
              "polymorphic: true",
              "as: :parent"
            ],
            "a": 2,
            "explain": "Polymorphic memakai kolom tipe dan id."
          },
          {
            "type": "mc",
            "q": "Eager loading memakai",
            "options": [
              "preload_only",
              "load_all",
              "with(:komentar)",
              "includes(:komentar)"
            ],
            "a": 3,
            "explain": "includes memuat relasi sekaligus."
          },
          {
            "type": "mc",
            "q": "Anti N+1 di view membutuhkan",
            "options": [
              "CSS",
              "eager loading di controller",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Muat relasi sebelum render."
          },
          {
            "type": "mc",
            "q": "Counter cache menyimpan",
            "options": [
              "CSS",
              "jumlah relasi di kolom induk",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Counter cache menambah kolom jumlah untuk performa."
          },
          {
            "type": "mc",
            "q": "Validasi relasi wajib memakai",
            "options": [
              "CSS",
              "belongs_to_required_by_default",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Rails modern mewajibkan belongs_to secara default."
          }
        ]
      },
      {
        "id": "rails-12",
        "level": "Menengah",
        "title": "Active Record Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "updating_all tanpa callback memakai",
            "options": [
              "each_save",
              "update_all",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "update_all memperbarui massal tanpa callback."
          },
          {
            "type": "mc",
            "q": "Memilih kolom tertentu memakai",
            "options": [
              "pick_only",
              "columns",
              "select(:id, :nama)",
              "fields"
            ],
            "a": 2,
            "explain": "select membatasi kolom."
          },
          {
            "type": "mc",
            "q": "Agregasi rata-rata memakai",
            "options": [
              "mean",
              "average(:nilai)",
              "avg",
              "CSS"
            ],
            "a": 1,
            "explain": "average menghitung rata-rata."
          },
          {
            "type": "mc",
            "q": "Group query memakai",
            "options": [
              "CSS",
              "route",
              "group(:kategori).count",
              "migrasi"
            ],
            "a": 2,
            "explain": "group+count mengelompokkan."
          },
          {
            "type": "mc",
            "q": "Mencari dengan beberapa id memakai",
            "options": [
              "find_ids",
              "CSS",
              "route",
              "where(id: [1,2,3])"
            ],
            "a": 3,
            "explain": "where dengan array id."
          },
          {
            "type": "mc",
            "q": "Transaksi database memakai",
            "options": [
              "CSS",
              "ActiveRecord::Base.transaction",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "transaction menjaga atomisitas."
          },
          {
            "type": "mc",
            "q": "Enum pada model memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "enum status: { ... }"
            ],
            "a": 3,
            "explain": "enum memetakan nilai ke simbol."
          },
          {
            "type": "mc",
            "q": "Soft delete memakai gem",
            "options": [
              "paranoia atau discard",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Gem menyediakan soft delete."
          },
          {
            "type": "mc",
            "q": "Membatasi query dengan raw condition aman memakai",
            "options": [
              "where(\"x = #{val}\")",
              "CSS",
              "where(\"x = ?\", val)",
              "route"
            ],
            "a": 2,
            "explain": "Parameter placeholder mencegah injeksi."
          },
          {
            "type": "mc",
            "q": "Mengambil record atau membuatnya memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "find_or_create_by"
            ],
            "a": 3,
            "explain": "find_or_create_by mencari atau membuat."
          }
        ]
      },
      {
        "id": "rails-13",
        "level": "Menengah",
        "title": "Testing Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Framework test bawaan Rails adalah",
            "options": [
              "Jest",
              "PHPUnit",
              "Minitest",
              "RSpec wajib"
            ],
            "a": 2,
            "explain": "Rails menyertakan Minitest; RSpec populer sebagai alternatif."
          },
          {
            "type": "mc",
            "q": "Menjalankan test memakai",
            "options": [
              "rails run:test",
              "rails spec",
              "rails test",
              "rake only"
            ],
            "a": 2,
            "explain": "rails test menjalankan test suite."
          },
          {
            "type": "mc",
            "q": "Test model berada di",
            "options": [
              "test/views",
              "test/routes",
              "test/fixtures",
              "test/models"
            ],
            "a": 3,
            "explain": "Test model di test/models."
          },
          {
            "type": "mc",
            "q": "Fixture menyediakan",
            "options": [
              "data awal untuk test",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Fixture menyiapkan data test."
          },
          {
            "type": "mc",
            "q": "Test controller/system menguji",
            "options": [
              "CSS",
              "route",
              "alur HTTP dan UI",
              "migrasi"
            ],
            "a": 2,
            "explain": "Test sistem menguji alur dari pengguna."
          },
          {
            "type": "mc",
            "q": "Assertion status respons memakai",
            "options": [
              "CSS",
              "route",
              "assert_response :success",
              "migrasi"
            ],
            "a": 2,
            "explain": "assert_response memeriksa status."
          },
          {
            "type": "mc",
            "q": "Test helper untuk request memakai",
            "options": [
              "CSS",
              "route",
              "get/patch/post",
              "migrasi"
            ],
            "a": 2,
            "explain": "Helper request melakukan HTTP dalam test."
          },
          {
            "type": "mc",
            "q": "Coverage diukur dengan",
            "options": [
              "CSS",
              "SimpleCov",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "SimpleCov mengukur cakupan."
          },
          {
            "type": "mc",
            "q": "Test yang baik menguji",
            "options": [
              "detail internal",
              "CSS",
              "route",
              "perilaku"
            ],
            "a": 3,
            "explain": "Test perilaku lebih tahan perubahan."
          },
          {
            "type": "mc",
            "q": "Database test terpisah mencegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengotori data development"
            ],
            "a": 3,
            "explain": "Lingkungan test terpisah menjaga data."
          }
        ]
      },
      {
        "id": "rails-14",
        "level": "Menengah",
        "title": "API & JSON",
        "exercises": [
          {
            "type": "mc",
            "q": "Controller API sering memakai modul",
            "options": [
              "ActionView",
              "ActionCable",
              "ActionController::API",
              "ActiveJob"
            ],
            "a": 2,
            "explain": "ActionController::API lebih ringan tanpa view."
          },
          {
            "type": "mc",
            "q": "Merender JSON memakai",
            "options": [
              "render only_json",
              "respond json",
              "json_render",
              "render json: data"
            ],
            "a": 3,
            "explain": "render json mengirim JSON."
          },
          {
            "type": "mc",
            "q": "Status 201 dikembalikan untuk",
            "options": [
              "resource dibuat",
              "error",
              "redirect",
              "CSS"
            ],
            "a": 0,
            "explain": "201 Created menandakan pembuatan."
          },
          {
            "type": "mc",
            "q": "Strong parameters tetap dipakai pada",
            "options": [
              "view",
              "API",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Filter input di server."
          },
          {
            "type": "mc",
            "q": "Serializer membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "membentuk output JSON"
            ],
            "a": 3,
            "explain": "Serializer memformat JSON."
          },
          {
            "type": "mc",
            "q": "Versioning API memakai",
            "options": [
              "namespace /api/v1",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Namespace versi memisahkan API."
          },
          {
            "type": "mc",
            "q": "Autentikasi API umum memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "token/JWT"
            ],
            "a": 3,
            "explain": "Token/JWT mengautentikasi klien API."
          },
          {
            "type": "mc",
            "q": "Pagination API memakai",
            "options": [
              "CSS",
              "kaminari/will_paginate",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Gem pagination membantu."
          },
          {
            "type": "mc",
            "q": "CORS diatur dengan gem",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "rack-cors"
            ],
            "a": 3,
            "explain": "rack-cors mengatur CORS."
          },
          {
            "type": "mc",
            "q": "Menangani error API konsisten memakai",
            "options": [
              "mengabaikan",
              "CSS",
              "rescue_from dan format respons",
              "route"
            ],
            "a": 2,
            "explain": "rescue_from memusatkan penanganan error."
          }
        ]
      },
      {
        "id": "rails-15",
        "level": "Menengah",
        "title": "Action Mailer & Job",
        "exercises": [
          {
            "type": "mc",
            "q": "Mailer dibuat dengan generator",
            "options": [
              "rails generate mailer Nama",
              "rails new mailer",
              "rails mail:new",
              "rails g email"
            ],
            "a": 0,
            "explain": "Generator mailer membuat mailer."
          },
          {
            "type": "mc",
            "q": "Mengirim email async memakai",
            "options": [
              "send_now",
              "async_send",
              "deliver_later",
              "CSS"
            ],
            "a": 2,
            "explain": "deliver_later mengirim lewat job queue."
          },
          {
            "type": "mc",
            "q": "Backend queue populer untuk Rails adalah",
            "options": [
              "Sidekiq",
              "Jest",
              "Composer",
              "PHPUnit"
            ],
            "a": 0,
            "explain": "Sidekiq memproses job Rails."
          },
          {
            "type": "mc",
            "q": "Job dibuat dengan generator",
            "options": [
              "rails new job",
              "rails job:new",
              "rails generate job Nama",
              "rails g worker"
            ],
            "a": 2,
            "explain": "Generator job membuat Active Job."
          },
          {
            "type": "mc",
            "q": "Menjalankan job memakai",
            "options": [
              "Job.run_now",
              "Job.perform_later",
              "job.send",
              "CSS"
            ],
            "a": 1,
            "explain": "perform_later mengantrikan job."
          },
          {
            "type": "mc",
            "q": "Konfigurasi queue adapter berada di",
            "options": [
              "config/application.rb / config/queue.yml",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Adapter queue dikonfigurasi di Rails config."
          },
          {
            "type": "mc",
            "q": "Template email berada di",
            "options": [
              "public/email",
              "config/mail",
              "app/views/..._mailer",
              "lib/mail"
            ],
            "a": 2,
            "explain": "Template mailer ada di app/views."
          },
          {
            "type": "mc",
            "q": "Konfigurasi SMTP berada di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "config/environments"
            ],
            "a": 3,
            "explain": "Konfigurasi environment mengatur SMTP."
          },
          {
            "type": "mc",
            "q": "Retry job gagal diatur oleh",
            "options": [
              "CSS",
              "route",
              "konfigurasi backend queue",
              "migrasi"
            ],
            "a": 2,
            "explain": "Backend queue mengatur retry."
          },
          {
            "type": "mc",
            "q": "Active Job memberi",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "abstraksi backend queue"
            ],
            "a": 3,
            "explain": "Active Job menyeragamkan API job."
          }
        ]
      },
      {
        "id": "rails-16",
        "level": "Menengah",
        "title": "Asset Pipeline",
        "exercises": [
          {
            "type": "mc",
            "q": "Asset pipeline dikelola oleh",
            "options": [
              "CSS",
              "Propshaft/Sprockets",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Rails memakai pipeline aset."
          },
          {
            "type": "mc",
            "q": "Membundel JavaScript/CSS modern dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "importmap atau jsbundling"
            ],
            "a": 3,
            "explain": "Rails mendukung importmap/jsbundling."
          },
          {
            "type": "mc",
            "q": "Menggunakan gem cssbundling membantu",
            "options": [
              "CSS",
              "mengelola build CSS",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "cssbundling memproses CSS."
          },
          {
            "type": "mc",
            "q": "Menautkan aset di view memakai",
            "options": [
              "CSS",
              "route",
              "stylesheet_link_tag / javascript_include_tag",
              "migrasi"
            ],
            "a": 2,
            "explain": "Helper view menautkan aset."
          },
          {
            "type": "mc",
            "q": "Precompile aset untuk produksi memakai",
            "options": [
              "rails precompile:assets",
              "rake assets:pre",
              "rails assets:precompile",
              "CSS"
            ],
            "a": 2,
            "explain": "assets:precompile menyiapkan aset produksi."
          },
          {
            "type": "mc",
            "q": "Menyimpan gambar di",
            "options": [
              "app/assets/images",
              "public/img always",
              "config/img",
              "lib/img"
            ],
            "a": 0,
            "explain": "Aset gambar ada di app/assets/images."
          },
          {
            "type": "mc",
            "q": "Turbo mengelola",
            "options": [
              "CSS",
              "navigasi halaman cepat",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Turbo mempercepat navigasi."
          },
          {
            "type": "mc",
            "q": "Stimulus untuk",
            "options": [
              "CSS",
              "perilaku JavaScript kecil",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Stimulus mengelola interaksi kecil."
          },
          {
            "type": "mc",
            "q": "Cache asset di produksi memakai",
            "options": [
              "CSS",
              "route",
              "digest nama berkas",
              "migrasi"
            ],
            "a": 2,
            "explain": "Digest mencegah cache basi."
          },
          {
            "type": "mc",
            "q": "Mengelola aset di CDN memerlukan",
            "options": [
              "CSS",
              "route",
              "konfigurasi asset_host",
              "migrasi"
            ],
            "a": 2,
            "explain": "asset_host mengarahkan aset ke CDN."
          }
        ]
      },
      {
        "id": "rails-17",
        "level": "Menengah",
        "title": "Autentikasi Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Scaffold autentikasi modern bawaan memakai",
            "options": [
              "rails generate authentication",
              "gem devise wajib",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Rails 7+ punya generator authentication."
          },
          {
            "type": "mc",
            "q": "Gem autentikasi populer adalah",
            "options": [
              "Jest",
              "Composer",
              "PHPUnit",
              "Devise"
            ],
            "a": 3,
            "explain": "Devise menyediakan autentikasi lengkap."
          },
          {
            "type": "mc",
            "q": "Menampilkan halaman hanya untuk login memakai",
            "options": [
              "CSS",
              "route",
              "before_action :authenticate_user!",
              "migrasi"
            ],
            "a": 2,
            "explain": "before_action membatasi akses."
          },
          {
            "type": "mc",
            "q": "Session login biasanya disimpan di",
            "options": [
              "cookie terenkripsi",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rails memakai cookie sesi."
          },
          {
            "type": "mc",
            "q": "Menyimpan password sebaiknya memakai",
            "options": [
              "md5",
              "has_secure_password (bcrypt)",
              "plain",
              "CSS"
            ],
            "a": 1,
            "explain": "has_secure_password memakai bcrypt."
          },
          {
            "type": "mc",
            "q": "Membatasi akses admin memakai",
            "options": [
              "menyembunyikan tautan saja",
              "CSS",
              "otorisasi per peran",
              "route"
            ],
            "a": 2,
            "explain": "Otorisasi harus ditegakkan di server."
          },
          {
            "type": "mc",
            "q": "Gem otorisasi populer adalah",
            "options": [
              "CSS",
              "route",
              "Pundit / CanCanCan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pundit/CanCanCan menangani otorisasi."
          },
          {
            "type": "mc",
            "q": "CSRF protection untuk API JSON bisa",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dilewati bila pakai token auth"
            ],
            "a": 3,
            "explain": "API berbasis token tidak selalu butuh CSRF."
          },
          {
            "type": "mc",
            "q": "Mencegah session fixation dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "reset_session setelah login"
            ],
            "a": 3,
            "explain": "Reset session setelah login."
          },
          {
            "type": "mc",
            "q": "Membatasi percobaan login membantu mencegah",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "brute force"
            ],
            "a": 3,
            "explain": "Rate limit membatasi percobaan login."
          }
        ]
      },
      {
        "id": "rails-18",
        "level": "Menengah",
        "title": "Active Job & Sidekiq",
        "exercises": [
          {
            "type": "mc",
            "q": "Active Job menyediakan",
            "options": [
              "abstraksi backend queue",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Active Job menyeragamkan API job."
          },
          {
            "type": "mc",
            "q": "Sidekiq membutuhkan",
            "options": [
              "Redis",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Sidekiq memakai Redis sebagai backend."
          },
          {
            "type": "mc",
            "q": "Menjalankan worker Sidekiq memakai",
            "options": [
              "rails worker",
              "CSS",
              "route",
              "bundle exec sidekiq"
            ],
            "a": 3,
            "explain": "Perintah sidekiq menjalankan worker."
          },
          {
            "type": "mc",
            "q": "perform_later mengantrikan job",
            "options": [
              "secara sinkron",
              "CSS",
              "route",
              "secara asinkron"
            ],
            "a": 3,
            "explain": "perform_later menjalankan job di background."
          },
          {
            "type": "mc",
            "q": "perform_now menjalankan job",
            "options": [
              "CSS",
              "langsung (sinkron)",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "perform_now mengeksekusi segera."
          },
          {
            "type": "mc",
            "q": "Opsi retry job diatur oleh",
            "options": [
              "CSS",
              "route",
              "konfigurasi backend",
              "migrasi"
            ],
            "a": 2,
            "explain": "Backend mengatur kebijakan retry."
          },
          {
            "type": "mc",
            "q": "Job idempoten penting karena",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "dapat diulang saat retry"
            ],
            "a": 3,
            "explain": "Retry bisa menjalankan job lebih dari sekali."
          },
          {
            "type": "mc",
            "q": "Antrean prioritas membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "memproses job penting lebih dulu"
            ],
            "a": 3,
            "explain": "Prioritas menentukan urutan proses."
          },
          {
            "type": "mc",
            "q": "Memantau job gagal memakai",
            "options": [
              "dashboard/monitoring",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Dashboard memantau antrean."
          },
          {
            "type": "mc",
            "q": "Menjadwalkan job memakai",
            "options": [
              "set(wait:)",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "set dengan wait menjadwalkan job."
          }
        ]
      },
      {
        "id": "rails-19",
        "level": "Menengah",
        "title": "Routing Lanjutan",
        "exercises": [
          {
            "type": "mc",
            "q": "Constraint pada route memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "constraints"
            ],
            "a": 3,
            "explain": "constraints membatasi route berdasarkan kondisi."
          },
          {
            "type": "mc",
            "q": "Route default (format) diatur dengan",
            "options": [
              "CSS",
              "route",
              "defaults",
              "migrasi"
            ],
            "a": 2,
            "explain": "defaults menetapkan nilai default route."
          },
          {
            "type": "mc",
            "q": "Nested resources memakai",
            "options": [
              "CSS",
              "route",
              "resources :posts do resources :comments end",
              "migrasi"
            ],
            "a": 2,
            "explain": "Nested resources membuat route anak."
          },
          {
            "type": "mc",
            "q": "Shallow nested membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menghindari URL terlalu dalam"
            ],
            "a": 3,
            "explain": "Shallow nesting mempersingkat URL."
          },
          {
            "type": "mc",
            "q": "Route concern membagikan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "opsi route umum"
            ],
            "a": 3,
            "explain": "concern mengelompokkan opsi route."
          },
          {
            "type": "mc",
            "q": "Mount engine di route memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mount"
            ],
            "a": 3,
            "explain": "mount menempelkan Rack app/engine."
          },
          {
            "type": "mc",
            "q": "Redirect route memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "redirect"
            ],
            "a": 3,
            "explain": "redirect membuat route pengalihan."
          },
          {
            "type": "mc",
            "q": "Route untuk API sering memakai",
            "options": [
              "CSS",
              "route",
              "namespace :api",
              "migrasi"
            ],
            "a": 2,
            "explain": "Namespace memisahkan API."
          },
          {
            "type": "mc",
            "q": "Melihat route spesifik memakai",
            "options": [
              "CSS",
              "route",
              "rails routes -g pola",
              "migrasi"
            ],
            "a": 2,
            "explain": "Filter membantu menemukan route."
          },
          {
            "type": "mc",
            "q": "Route wildcard memakai",
            "options": [
              "CSS",
              "*path",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Wildcard menangkap sisa path."
          }
        ]
      },
      {
        "id": "rails-20",
        "level": "Menengah",
        "title": "View Lanjutan & Partials",
        "exercises": [
          {
            "type": "mc",
            "q": "Collection partial memakai",
            "options": [
              "render @posts",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "render koleksi merender partial per item."
          },
          {
            "type": "mc",
            "q": "Layout kustom memakai",
            "options": [
              "CSS",
              "layout \"nama\"",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "layout memilih layout."
          },
          {
            "type": "mc",
            "q": "Content_for/yield membantu",
            "options": [
              "CSS",
              "menyisipkan blok konten di layout",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "content_for menyiapkan blok untuk layout."
          },
          {
            "type": "mc",
            "q": "Local variabel partial dikirim via",
            "options": [
              "CSS",
              "route",
              "locals",
              "migrasi"
            ],
            "a": 2,
            "explain": "locals meneruskan variabel ke partial."
          },
          {
            "type": "mc",
            "q": "Helper view didefinisikan di",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "app/helpers"
            ],
            "a": 3,
            "explain": "Helper ada di app/helpers."
          },
          {
            "type": "mc",
            "q": "Menghindari logika berat di view dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "presenter/helper"
            ],
            "a": 3,
            "explain": "Presenter/helper memindahkan logika."
          },
          {
            "type": "mc",
            "q": "Cache fragment view memakai",
            "options": [
              "CSS",
              "cache block",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "cache di view menyimpan fragmen."
          },
          {
            "type": "mc",
            "q": "Partial untuk form dapat dipakai ulang untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "new dan edit"
            ],
            "a": 3,
            "explain": "Form partial dipakai di new/edit."
          },
          {
            "type": "mc",
            "q": "Turbo Frame di view memakai tag",
            "options": [
              "turbo_frame_tag",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Helper turbo frame menyiapkan frame."
          },
          {
            "type": "mc",
            "q": "Escaping harus tetap dipakai untuk",
            "options": [
              "CSS",
              "konten tak tepercaya",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Escaping mencegah XSS."
          }
        ]
      },
      {
        "id": "rails-21",
        "level": "Advance",
        "title": "Query Lanjutan & Performa",
        "exercises": [
          {
            "type": "mc",
            "q": "Menyertakan relasi untuk menghindari N+1 memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "includes/preload/eager_load"
            ],
            "a": 3,
            "explain": "Eager loading mengurangi query."
          },
          {
            "type": "mc",
            "q": "Perbedaan preload dan eager_load",
            "options": [
              "sama saja",
              "eager_load memakai LEFT JOIN, preload query terpisah",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "eager_load join; preload query terpisah."
          },
          {
            "type": "mc",
            "q": "Menggunakan exists? daripada present? pada relasi karena",
            "options": [
              "lebih lambat",
              "CSS",
              "lebih efisien",
              "route"
            ],
            "a": 2,
            "explain": "exists? menghindari memuat semua record."
          },
          {
            "type": "mc",
            "q": "Memilih kolom untuk mengurangi payload memakai",
            "options": [
              "CSS",
              "select",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "select membatasi kolom termuat."
          },
          {
            "type": "mc",
            "q": "Menambah index untuk kolom yang sering difilter membantu",
            "options": [
              "CSS",
              "route",
              "performa query",
              "migrasi"
            ],
            "a": 2,
            "explain": "Index mempercepat pencarian."
          },
          {
            "type": "mc",
            "q": "Menghindari query di view penting karena",
            "options": [
              "memperlambat render",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Query di view menyulitkan optimasi."
          },
          {
            "type": "mc",
            "q": "Page caching/method caching memakai",
            "options": [
              "CSS",
              "route",
              "cache block/redis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Cache menyimpan hasil mahal."
          },
          {
            "type": "mc",
            "q": "Batched processing memakai",
            "options": [
              "CSS",
              "route",
              "find_each / in_batches",
              "migrasi"
            ],
            "a": 2,
            "explain": "find_each memproses bertahap."
          },
          {
            "type": "mc",
            "q": "Mengukur query memakai",
            "options": [
              "log atau gem seperti bullet",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Bullet membantu mendeteksi N+1."
          },
          {
            "type": "mc",
            "q": "Connection pooling mengatur",
            "options": [
              "CSS",
              "route",
              "jumlah koneksi DB",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pooling membatasi/mengatur koneksi."
          }
        ]
      },
      {
        "id": "rails-22",
        "level": "Advance",
        "title": "Arsitektur Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Fat model skin controller menyarankan",
            "options": [
              "semua di controller",
              "CSS",
              "route",
              "logika di model/service"
            ],
            "a": 3,
            "explain": "Logika bisnis dipisah dari controller."
          },
          {
            "type": "mc",
            "q": "Service object membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mengemas satu operasi bisnis"
            ],
            "a": 3,
            "explain": "Service object memusatkan operasi bisnis."
          },
          {
            "type": "mc",
            "q": "Form object mengelola",
            "options": [
              "CSS",
              "route",
              "validasi dan proses form kompleks",
              "migrasi"
            ],
            "a": 2,
            "explain": "Form object menangani form non-trivial."
          },
          {
            "type": "mc",
            "q": "Query object memusatkan",
            "options": [
              "CSS",
              "query kompleks",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Query object mengelompokkan query."
          },
          {
            "type": "mc",
            "q": "Presenter mengelola",
            "options": [
              "CSS",
              "logika tampilan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Presenter memisahkan logika presentasi."
          },
          {
            "type": "mc",
            "q": "Namespace modul pada app membantu",
            "options": [
              "CSS",
              "route",
              "pengelompokan domain",
              "migrasi"
            ],
            "a": 2,
            "explain": "Module mengelompokkan kode per domain."
          },
          {
            "type": "mc",
            "q": "Concerns berbagi",
            "options": [
              "CSS",
              "perilaku antar model/controller",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Concern membagikan perilaku."
          },
          {
            "type": "mc",
            "q": "Menghindari god object dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "memecah tanggung jawab"
            ],
            "a": 3,
            "explain": "Tanggung jawab dipisah."
          },
          {
            "type": "mc",
            "q": "Membatasi callback kompleks membantu",
            "options": [
              "prediktabilitas",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Callback berlebihan menyulitkan pelacakan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi arsitektur aplikasi membantu",
            "options": [
              "CSS",
              "orientasi tim",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dokumentasi memudahkan kolaborasi."
          }
        ]
      },
      {
        "id": "rails-23",
        "level": "Advance",
        "title": "Keamanan Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Strong parameters melindungi dari",
            "options": [
              "mass assignment berbahaya",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Permit membatasi atribut."
          },
          {
            "type": "mc",
            "q": "Escaping ERB melindungi dari",
            "options": [
              "SQL injection",
              "race condition",
              "XSS",
              "CSS"
            ],
            "a": 2,
            "explain": "Escaping mencegah XSS."
          },
          {
            "type": "mc",
            "q": "Query berparameter melindungi dari",
            "options": [
              "CSS",
              "SQL injection",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Parameter memisahkan data dari query."
          },
          {
            "type": "mc",
            "q": "CSRF protection melindungi dari",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "request lintas situs"
            ],
            "a": 3,
            "explain": "Token CSRF mencegah request palsu."
          },
          {
            "type": "mc",
            "q": "Menyimpan rahasia memakai",
            "options": [
              "credentials/secret manager",
              "kode sumber",
              "CSS",
              "route"
            ],
            "a": 0,
            "explain": "Rahasia disimpan terenkripsi/di luar kode."
          },
          {
            "type": "mc",
            "q": "Membatasi parameter upload penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "mencegah berkas berbahaya"
            ],
            "a": 3,
            "explain": "Validasi upload mencegah risiko."
          },
          {
            "type": "mc",
            "q": "Content Security Policy membantu mencegah",
            "options": [
              "CSS",
              "route",
              "injeksi skrip",
              "migrasi"
            ],
            "a": 2,
            "explain": "CSP membatasi sumber skrip."
          },
          {
            "type": "mc",
            "q": "Mengatur header keamanan memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konfigurasi Rails/initializer"
            ],
            "a": 3,
            "explain": "Initializer mengatur header."
          },
          {
            "type": "mc",
            "q": "Force SSL pada produksi memakai",
            "options": [
              "config.force_ssl",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "force_ssl mengalihkan ke HTTPS."
          },
          {
            "type": "mc",
            "q": "Review dependency rutin untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "menutup kerentanan"
            ],
            "a": 3,
            "explain": "Dependency scanning menemukan celah."
          }
        ]
      },
      {
        "id": "rails-24",
        "level": "Advance",
        "title": "Background Worker & Skala",
        "exercises": [
          {
            "type": "mc",
            "q": "Sidekiq memakai backend",
            "options": [
              "CSS",
              "Redis",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Sidekiq memakai Redis."
          },
          {
            "type": "mc",
            "q": "Tugas berat dipindah ke",
            "options": [
              "request utama",
              "CSS",
              "route",
              "background job"
            ],
            "a": 3,
            "explain": "Job asinkron menjaga request tetap cepat."
          },
          {
            "type": "mc",
            "q": "Idempotensi job penting karena",
            "options": [
              "CSS",
              "job bisa diulang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Retry job memerlukan desain idempoten."
          },
          {
            "type": "mc",
            "q": "Mengatur concurrency worker memengaruhi",
            "options": [
              "CSS",
              "throughput dan beban DB",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Concurrency menentukan paralelisme."
          },
          {
            "type": "mc",
            "q": "Connection pool DB harus sesuai",
            "options": [
              "CSS",
              "route",
              "jumlah thread worker",
              "migrasi"
            ],
            "a": 2,
            "explain": "Pool terlalu kecil menyebabkan antrean."
          },
          {
            "type": "mc",
            "q": "Dead job perlu",
            "options": [
              "dipantau dan ditangani",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Dead queue memerlukan pemantauan."
          },
          {
            "type": "mc",
            "q": "Scheduled job memakai",
            "options": [
              "CSS",
              "set(wait_until:) / cron",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Penjadwalan job memakai opsi wait atau cron."
          },
          {
            "type": "mc",
            "q": "Memantau queue memakai",
            "options": [
              "CSS",
              "dashboard/layanan monitoring",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Dashboard mengawasi antrean."
          },
          {
            "type": "mc",
            "q": "Scaling horizontal aplikasi memerlukan",
            "options": [
              "CSS",
              "session/cache bersama",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "State bersama menjaga konsistensi antar instance."
          },
          {
            "type": "mc",
            "q": "Job berantai memakai",
            "options": [
              "callback job/pipeline",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rangkaian job memerlukan koordinasi."
          }
        ]
      },
      {
        "id": "rails-25",
        "level": "Advance",
        "title": "Deployment & Operasional",
        "exercises": [
          {
            "type": "mc",
            "q": "Migration saat deploy perlu",
            "options": [
              "menghapus tabel dulu",
              "kompatibel dan bertahap",
              "CSS",
              "route"
            ],
            "a": 1,
            "explain": "Migrasi bertahap menjaga tanpa downtime."
          },
          {
            "type": "mc",
            "q": "Menyetel environment produksi memakai",
            "options": [
              "CSS",
              "route",
              "config/environments/production.rb",
              "migrasi"
            ],
            "a": 2,
            "explain": "Konfigurasi produksi berada di environment."
          },
          {
            "type": "mc",
            "q": "Precompile aset sebelum rilis dengan",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "rails assets:precompile"
            ],
            "a": 3,
            "explain": "Precompile menyiapkan aset."
          },
          {
            "type": "mc",
            "q": "Health check membantu",
            "options": [
              "CSS",
              "memantau kesiapan layanan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Health check mendeteksi masalah."
          },
          {
            "type": "mc",
            "q": "Rollback rilis penting untuk",
            "options": [
              "pemulihan cepat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rollback memulihkan versi stabil."
          },
          {
            "type": "mc",
            "q": "Logging terpusat membantu",
            "options": [
              "CSS",
              "diagnosis lintas server",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Log terpusat memudahkan diagnosis."
          },
          {
            "type": "mc",
            "q": "Backup database penting untuk",
            "options": [
              "CSS",
              "pemulihan data",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Backup melindungi data."
          },
          {
            "type": "mc",
            "q": "Menyimpan secret di credentials memakai",
            "options": [
              "CSS",
              "rails credentials",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Rails credentials menyimpan rahasia terenkripsi."
          },
          {
            "type": "mc",
            "q": "Pemantauan error memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "layanan seperti Sentry"
            ],
            "a": 3,
            "explain": "Monitoring error membantu regresi."
          },
          {
            "type": "mc",
            "q": "Dokumentasi proses deploy membantu",
            "options": [
              "CSS",
              "route",
              "konsistensi rilis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Dokumentasi menyamakan langkah rilis."
          }
        ]
      },
      {
        "id": "rails-26",
        "level": "Advance",
        "title": "Rails & Ekosistem Modern",
        "exercises": [
          {
            "type": "mc",
            "q": "Hotwire terdiri dari",
            "options": [
              "React dan Vue",
              "CSS",
              "route",
              "Turbo dan Stimulus"
            ],
            "a": 3,
            "explain": "Hotwire = Turbo + Stimulus."
          },
          {
            "type": "mc",
            "q": "Turbo Frames memungkinkan",
            "options": [
              "CSS",
              "memperbarui sebagian halaman",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Turbo Frames memperbarui fragmen."
          },
          {
            "type": "mc",
            "q": "Turbo Streams mengirim",
            "options": [
              "pembaruan HTML via websocket/SSE",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Turbo Streams memperbarui DOM real-time."
          },
          {
            "type": "mc",
            "q": "Action Cable menangani",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "websocket"
            ],
            "a": 3,
            "explain": "Action Cable mengelola websocket."
          },
          {
            "type": "mc",
            "q": "Solid Queue/Cache/Cable pada Rails modern",
            "options": [
              "CSS",
              "route",
              "backend bawaan berbasis DB/Redis",
              "migrasi"
            ],
            "a": 2,
            "explain": "Rails modern menyertakan backend bawaan."
          },
          {
            "type": "mc",
            "q": "Importmap menghindari",
            "options": [
              "CSS",
              "bundler berat untuk JavaScript",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Importmap memuat modul tanpa bundling penuh."
          },
          {
            "type": "mc",
            "q": "API-only mode dibuat dengan flag",
            "options": [
              "--no-view",
              "CSS",
              "--api",
              "route"
            ],
            "a": 2,
            "explain": "Flag --api membuat aplikasi ringan API."
          },
          {
            "type": "mc",
            "q": "Memilih Rails untuk",
            "options": [
              "aplikasi web full-stack cepat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Rails unggul untuk web full-stack."
          },
          {
            "type": "mc",
            "q": "Konvensi membantu tim karena",
            "options": [
              "CSS",
              "route",
              "menyamakan struktur",
              "migrasi"
            ],
            "a": 2,
            "explain": "Konvensi memudahkan kolaborasi."
          },
          {
            "type": "mc",
            "q": "Memahami Ruby mempercepat Rails karena",
            "options": [
              "framework dibangun dengan Ruby",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Pemahaman bahasa mempermudah framework."
          }
        ]
      },
      {
        "id": "rails-27",
        "level": "Advance",
        "title": "Active Record Canggih",
        "exercises": [
          {
            "type": "mc",
            "q": "Arel dipakai untuk",
            "options": [
              "CSS",
              "membangun query kompleks secara aman",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Arel menyusun query programatik."
          },
          {
            "type": "mc",
            "q": "Lateral join/advanced join memakai",
            "options": [
              "CSS",
              "joins dengan SQL/Arel",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Join lanjutan memakai SQL/Arel."
          },
          {
            "type": "mc",
            "q": "Common Table Expression memerlukan",
            "options": [
              "SQL langsung/Arel",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "CTE membutuhkan SQL."
          },
          {
            "type": "mc",
            "q": "Optimistic locking memakai kolom",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lock_version"
            ],
            "a": 3,
            "explain": "lock_version mendeteksi konflik update."
          },
          {
            "type": "mc",
            "q": "Pessimistic locking memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "lock!"
            ],
            "a": 3,
            "explain": "lock! mengunci baris."
          },
          {
            "type": "mc",
            "q": "Single-table inheritance memakai kolom",
            "options": [
              "CSS",
              "type",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "STI memakai kolom type."
          },
          {
            "type": "mc",
            "q": "Polymorphic inverse_of memakai",
            "options": [
              "CSS",
              "inverse_of",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "inverse_of menyambungkan dua sisi relasi."
          },
          {
            "type": "mc",
            "q": "Delegated types memisahkan",
            "options": [
              "data ke tabel terpisah",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Delegated types memisahkan penyimpanan."
          },
          {
            "type": "mc",
            "q": "Composite primary key (Rails 7.1+) memungkinkan",
            "options": [
              "CSS",
              "route",
              "key gabungan",
              "migrasi"
            ],
            "a": 2,
            "explain": "Composite key memakai beberapa kolom."
          },
          {
            "type": "mc",
            "q": "Mengukur query dengan",
            "options": [
              "ActiveSupport::Notifications",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Notifications mengukur durasi query."
          }
        ]
      },
      {
        "id": "rails-28",
        "level": "Advance",
        "title": "Caching & Performa",
        "exercises": [
          {
            "type": "mc",
            "q": "Fragment caching menyimpan",
            "options": [
              "CSS",
              "route",
              "bagian view",
              "migrasi"
            ],
            "a": 2,
            "explain": "Fragment caching menyimpan potongan view."
          },
          {
            "type": "mc",
            "q": "Cache store populer adalah",
            "options": [
              "CSS",
              "Redis/Memcached",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Redis/Memcached sebagai cache store."
          },
          {
            "type": "mc",
            "q": "Cache expiration memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "expires_in"
            ],
            "a": 3,
            "explain": "expires_in mengatur masa berlaku."
          },
          {
            "type": "mc",
            "q": "Cache key berbasis model memakai",
            "options": [
              "CSS",
              "cache [model, ...]",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Cache key model otomatis diperbarui saat berubah."
          },
          {
            "type": "mc",
            "q": "Russian doll caching berarti",
            "options": [
              "cache bersarang",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Cache bersarang memanfaatkan fragmen."
          },
          {
            "type": "mc",
            "q": "Low-level caching memakai",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "Rails.cache"
            ],
            "a": 3,
            "explain": "Rails.cache menyimpan data mentah."
          },
          {
            "type": "mc",
            "q": "ETag/conditional GET membantu",
            "options": [
              "CSS",
              "revalidasi respons cache",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "ETag mendukung cache HTTP."
          },
          {
            "type": "mc",
            "q": "Menghindari N+1 termasuk",
            "options": [
              "CSS",
              "route",
              "performa penting",
              "migrasi"
            ],
            "a": 2,
            "explain": "Eager loading menghindari N+1."
          },
          {
            "type": "mc",
            "q": "Mengukur performa dengan",
            "options": [
              "profiler/APM",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "APM melacak performa."
          },
          {
            "type": "mc",
            "q": "Background job memindahkan",
            "options": [
              "pekerjaan berat",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Job memindahkan beban dari request."
          }
        ]
      },
      {
        "id": "rails-29",
        "level": "Advance",
        "title": "Integrasi & Webhook",
        "exercises": [
          {
            "type": "mc",
            "q": "HTTP request keluar memakai",
            "options": [
              "CSS",
              "Net::HTTP atau Faraday",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Library HTTP menangani request keluar."
          },
          {
            "type": "mc",
            "q": "Verifikasi webhook masuk memakai",
            "options": [
              "signature/token",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Verifikasi memastikan sumber sah."
          },
          {
            "type": "mc",
            "q": "Menerima webhook sebaiknya memproses",
            "options": [
              "secara async",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Proses async mencegah timeout."
          },
          {
            "type": "mc",
            "q": "Mengulang request gagal memakai",
            "options": [
              "CSS",
              "retry dengan backoff",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Retry dengan jeda."
          },
          {
            "type": "mc",
            "q": "Storing event untuk audit memakai",
            "options": [
              "CSS",
              "tabel event log",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Event log menyimpan riwayat."
          },
          {
            "type": "mc",
            "q": "Integrasi pembayaran perlu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "penanganan idempoten dan verifikasi"
            ],
            "a": 3,
            "explain": "Pembayaran butuh idempotensi."
          },
          {
            "type": "mc",
            "q": "Menguji integrasi memakai",
            "options": [
              "CSS",
              "route",
              "mock/stub HTTP",
              "migrasi"
            ],
            "a": 2,
            "explain": "Mock HTTP menghindari panggilan nyata pada test."
          },
          {
            "type": "mc",
            "q": "Menangani timeout penting untuk",
            "options": [
              "CSS",
              "keandalan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Timeout mencegah request menggantung."
          },
          {
            "type": "mc",
            "q": "Rate limit API eksternal memerlukan",
            "options": [
              "CSS",
              "route",
              "throttling/backoff",
              "migrasi"
            ],
            "a": 2,
            "explain": "Backoff menghormati limit pihak ketiga."
          },
          {
            "type": "mc",
            "q": "Rahasia API disimpan di",
            "options": [
              "CSS",
              "credentials",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Credentials menyimpan rahasia."
          }
        ]
      },
      {
        "id": "rails-30",
        "level": "Advance",
        "title": "Best Practice & Refactor",
        "exercises": [
          {
            "type": "mc",
            "q": "Thin controller berarti",
            "options": [
              "CSS",
              "route",
              "logika bisnis di model/service",
              "migrasi"
            ],
            "a": 2,
            "explain": "Controller tipis memindahkan logika."
          },
          {
            "type": "mc",
            "q": "Validasi kompleks dipindah ke",
            "options": [
              "form object/service",
              "CSS",
              "route",
              "migrasi"
            ],
            "a": 0,
            "explain": "Form object memusatkan validasi."
          },
          {
            "type": "mc",
            "q": "Menghindari callback berlebih membantu",
            "options": [
              "CSS",
              "keterbacaan",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Callback berlebih menyulitkan."
          },
          {
            "type": "mc",
            "q": "Nama method deskriptif membantu",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "pemeliharaan"
            ],
            "a": 3,
            "explain": "Nama jelas memudahkan perawatan."
          },
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
            "explain": "Perilaku jarang berubah dibanding implementasi."
          },
          {
            "type": "mc",
            "q": "RuboCop menjaga",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konsistensi gaya"
            ],
            "a": 3,
            "explain": "Linter menjaga gaya."
          },
          {
            "type": "mc",
            "q": "Membatasi query di view memperbaiki",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "performa"
            ],
            "a": 3,
            "explain": "Query di view memboroskan."
          },
          {
            "type": "mc",
            "q": "Dokumentasi migration penting untuk",
            "options": [
              "CSS",
              "route",
              "migrasi",
              "konsistensi skema"
            ],
            "a": 3,
            "explain": "Migration terdokumentasi menjaga skema."
          },
          {
            "type": "mc",
            "q": "Pemisahan domain membantu",
            "options": [
              "CSS",
              "pengujian dan pemakaian ulang",
              "route",
              "migrasi"
            ],
            "a": 1,
            "explain": "Domain terpisah mudah diuji."
          },
          {
            "type": "mc",
            "q": "Refactor bertahap lebih aman dari",
            "options": [
              "CSS",
              "route",
              "perubahan besar sekaligus",
              "migrasi"
            ],
            "a": 2,
            "explain": "Perubahan bertahap mudah diverifikasi."
          }
        ]
      },
      {
        "id": "rails-31",
        "level": "Advance",
        "title": "Master Review & Best Practice Rails",
        "exercises": [
          {
            "type": "mc",
            "q": "Rails menggunakan pola arsitektur",
            "options": [
              "Memory-Value-Cache",
              "Module-Version-Class",
              "Model-View-Controller",
              "Markup-Visual-Cascade"
            ],
            "a": 2,
            "explain": "Rails mengorganisasi aplikasi web dengan MVC."
          },
          {
            "type": "mc",
            "q": "Deklarasi `resources :posts` pada routes Rails biasanya membuat",
            "options": [
              "Tabel CSS bernama posts",
              "Koneksi database baru",
              "Kumpulan route CRUD untuk resource posts",
              "File JavaScript untuk setiap post"
            ],
            "a": 2,
            "explain": "resources membuat route RESTful standar."
          },
          {
            "type": "mc",
            "q": "Active Record pada Rails berfungsi sebagai",
            "options": [
              "ORM untuk berinteraksi dengan model dan database",
              "Compiler Ruby ke CSS",
              "Sistem untuk menggambar route",
              "Pengganti seluruh controller"
            ],
            "a": 0,
            "explain": "Active Record memetakan objek model Ruby ke record database."
          },
          {
            "type": "fill",
            "q": "Lengkapi perintah menjalankan test:",
            "code": "rails ___",
            "accept": [
              "test",
              "t"
            ],
            "explain": "rails test menjalankan test suite."
          },
          {
            "type": "arrange",
            "q": "Susun alur request Rails sampai respons:",
            "blocks": [
              "Request masuk ke router",
              "Controller action dijalankan",
              "Model/DB dipanggil",
              "View dirender",
              "Respons dikirim"
            ],
            "explain": "Router → controller → model → view → response."
          }
        ]
      }
    ]
  }
];

export { CONTENT_RAILS };
