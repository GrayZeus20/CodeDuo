/* CodeDuo — blok konten: topik "Arduino".
 * 1 topik (arduino) × 31 pelajaran (10 Dasar, 10 Menengah, 11 Advance). Total 305 soal.
 * Khas Arduino: soal `wiring` (rakit rangkaian) + `code` dengan sim:'arduino'
 * (sketsa dijalankan simulator) + diagram rangkaian SVG di `circuit`.
 * ESM murni: dipakai Vite (browser) & Node (test).
 */
'use strict';

const CONTENT_ARDUINO = [
  {
    "id": "arduino",
    "name": "Arduino",
    "icon": "🔌",
    "color": "#00979d",
    "desc": "Arduino: dari Blink sampai alarm parkir, lihat rangkaian & jalankan sketsa",
    "lessons": [
      {
        "id": "arduino-1",
        "level": "Dasar",
        "title": "Kenalan Arduino & Papan",
        "exercises": [
          {
            "type": "mc",
            "q": "Arduino Uno adalah papan mikrokontroler yang diprogram memakai bahasa…",
            "options": [
              "Python",
              "Java",
              "HTML",
              "C++ (Arduino)"
            ],
            "a": 3,
            "explain": "Sketsa Arduino ditulis dalam C++ yang disederhanakan."
          },
          {
            "type": "mc",
            "q": "Fungsi yang dijalankan sekali saat Arduino menyala adalah…",
            "options": [
              "setup()",
              "loop()",
              "main()",
              "start()"
            ],
            "a": 0,
            "explain": "setup() dipanggil sekali di awal."
          },
          {
            "type": "mc",
            "q": "Fungsi yang dijalankan berulang terus-menerus adalah…",
            "options": [
              "setup()",
              "loop()",
              "repeat()",
              "while()"
            ],
            "a": 1,
            "explain": "loop() berjalan terus setelah setup()."
          },
          {
            "type": "mc",
            "q": "Berapa pin digital pada Arduino Uno?",
            "options": [
              "6",
              "8",
              "14 (0–13)",
              "20"
            ],
            "a": 2,
            "explain": "Pin digital 0 sampai 13."
          },
          {
            "type": "mc",
            "q": "Pin analog pada Arduino Uno bernama…",
            "options": [
              "D0–D5",
              "IN0–IN5",
              "P0–P5",
              "A0–A5"
            ],
            "a": 3,
            "explain": "Ada enam pin analog input: A0–A5."
          },
          {
            "type": "mc",
            "q": "Pin digital yang mendukung PWM ditandai dengan simbol…",
            "options": [
              "~ (gelombang)",
              "* (bintang)",
              "# (pagar)",
              "@ (at)"
            ],
            "a": 0,
            "explain": "Simbol ~ menandai pin PWM: 3, 5, 6, 9, 10, 11."
          },
          {
            "type": "mc",
            "q": "Pin yang terhubung ke lampu LED bawaan papan adalah…",
            "options": [
              "pin 0",
              "pin 13 (LED_BUILTIN)",
              "pin A0",
              "pin 5V"
            ],
            "a": 1,
            "explain": "LED_BUILTIN = pin 13."
          },
          {
            "type": "mc",
            "q": "Pin 0 dan 1 sebaiknya dihindari untuk komponen karena dipakai oleh…",
            "options": [
              "catu daya",
              "PWM",
              "komunikasi Serial/USB",
              "sensor analog"
            ],
            "a": 2,
            "explain": "Pin 0 (RX) dan 1 (TX) dipakai Serial."
          },
          {
            "type": "fill",
            "q": "Lengkapi nama pin LED bawaan: pinMode(___, OUTPUT);",
            "code": "pinMode(___, OUTPUT);",
            "accept": [
              "LED_BUILTIN",
              "13"
            ],
            "explain": "LED_BUILTIN adalah nama pin 13."
          },
          {
            "type": "mc",
            "q": "Tegangan kerja Arduino Uno adalah…",
            "options": [
              "12V",
              "220V",
              "3V",
              "5V"
            ],
            "a": 3,
            "explain": "Arduino Uno bekerja pada 5V."
          }
        ]
      },
      {
        "id": "arduino-2",
        "level": "Dasar",
        "title": "Program Pertama: Blink",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah untuk mengeset pin sebagai keluaran adalah…",
            "options": [
              "pinMode(pin, OUTPUT)",
              "digitalWrite(pin, HIGH)",
              "setPin(pin)",
              "pinOut(pin)"
            ],
            "a": 0,
            "explain": "pinMode dengan mode OUTPUT."
          },
          {
            "type": "mc",
            "q": "Perintah menyalakan LED pada pin 13 adalah…",
            "options": [
              "analogWrite(13, HIGH)",
              "digitalWrite(13, HIGH)",
              "digitalRead(13)",
              "pinMode(13, HIGH)"
            ],
            "a": 1,
            "explain": "digitalWrite menulis HIGH/LOW."
          },
          {
            "type": "mc",
            "q": "Konstanta untuk kondisi menyala adalah…",
            "options": [
              "ON",
              "TRUE",
              "HIGH",
              "UP"
            ],
            "a": 2,
            "explain": "HIGH = 1 (menyala)."
          },
          {
            "type": "mc",
            "q": "Konstanta untuk kondisi mati adalah…",
            "options": [
              "OFF",
              "FALSE",
              "DOWN",
              "LOW"
            ],
            "a": 3,
            "explain": "LOW = 0 (mati)."
          },
          {
            "type": "fill",
            "q": "Nyalakan LED lalu tunggu 1 detik:\ndigitalWrite(13, ___);\ndelay(1000);",
            "code": "digitalWrite(13, ___);\ndelay(1000);",
            "accept": [
              "HIGH"
            ],
            "explain": "HIGH menyalakan LED."
          },
          {
            "type": "fill",
            "q": "Matikan lalu tunggu 1 detik:\ndigitalWrite(13, ___);\ndelay(1000);",
            "code": "digitalWrite(13, ___);\ndelay(1000);",
            "accept": [
              "LOW"
            ],
            "explain": "LOW mematikan LED."
          },
          {
            "type": "mc",
            "q": "Satuan argumen delay() adalah…",
            "options": [
              "milidetik (ms)",
              "detik",
              "mikrodetik",
              "menit"
            ],
            "a": 0,
            "explain": "delay(1000) = 1 detik."
          },
          {
            "type": "mc",
            "q": "Letak pinMode(LED_BUILTIN, OUTPUT) yang benar adalah di dalam…",
            "options": [
              "loop()",
              "setup()",
              "delay()",
              "Serial.begin()"
            ],
            "a": 1,
            "explain": "Konfigurasi pin cukup sekali di setup()."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Buat sketsa Blink: nyalakan pin 13, tunggu 1 detik, matikan, tunggu 1 detik. Gunakan setup() dan loop().",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 13,
              "mode": "OUTPUT",
              "digitalToggled": 13
            },
            "solution": "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}",
            "explain": "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(13, HIGH);\n  delay(1000);\n  digitalWrite(13, LOW);\n  delay(1000);\n}"
          },
          {
            "type": "mc",
            "q": "Kalau LED tidak berkedip padahal kode benar, penyebab paling umum adalah…",
            "options": [
              "delay terlalu besar",
              "kabel USB terpasang",
              "loop() dipanggil",
              "pinMode belum diset OUTPUT"
            ],
            "a": 3,
            "explain": "Tanpa pinMode OUTPUT, digitalWrite tidak menggerakkan pin."
          }
        ]
      },
      {
        "id": "arduino-3",
        "level": "Dasar",
        "title": "Breadboard & Merangkai LED",
        "exercises": [
          {
            "type": "mc",
            "q": "Lubang breadboard pada satu baris pendek (5 lubang) saling…",
            "options": [
              "terpisah",
              "berlawanan",
              "terhubung",
              "acak"
            ],
            "a": 2,
            "explain": "Satu baris 5 lubang terhubung secara internal."
          },
          {
            "type": "mc",
            "q": "Celah di tengah breadboard berfungsi untuk…",
            "options": [
              "menghubungkan semua pin",
              "memisahkan dua sisi",
              "catu daya",
              "mengunci kabel"
            ],
            "a": 1,
            "explain": "Celah tengah memisahkan grup kiri dan kanan."
          },
          {
            "type": "mc",
            "q": "Kaki LED yang lebih panjang adalah…",
            "options": [
              "anode (kutub positif)",
              "katode (kutub negatif)",
              "ground",
              "resistor"
            ],
            "a": 0,
            "explain": "Anode = kaki panjang = kutub positif."
          },
          {
            "type": "mc",
            "q": "Kaki LED yang lebih pendek adalah…",
            "options": [
              "anode (kutub positif)",
              "catu daya",
              "sinyal",
              "katode (kutub negatif)"
            ],
            "a": 3,
            "explain": "Katode = kaki pendek = kutub negatif."
          },
          {
            "type": "mc",
            "q": "Mengapa LED perlu resistor?",
            "options": [
              "memperbesar tegangan",
              "menambah warna",
              "membatasi arus agar LED tidak rusak",
              "mempercepat loop"
            ],
            "a": 2,
            "explain": "Resistor membatasi arus."
          },
          {
            "type": "mc",
            "q": "Nilai resistor yang umum untuk LED pada 5V adalah…",
            "options": [
              "10Ω",
              "220Ω",
              "1MΩ",
              "0Ω"
            ],
            "a": 1,
            "explain": "220Ω atau 330Ω lazim dipakai."
          },
          {
            "type": "mc",
            "q": "Urutan warna gelang resistor 220Ω (4 gelang) adalah…",
            "options": [
              "merah, merah, cokelat",
              "cokelat, hitam, merah",
              "merah, hitam, cokelat",
              "hijau, biru, merah"
            ],
            "a": 0,
            "explain": "Merah=2, Merah=2, Cokelat=×10 → 220Ω."
          },
          {
            "type": "mc",
            "q": "Semua rangkaian harus terhubung ke…",
            "options": [
              "hanya 5V",
              "hanya pin digital",
              "VIN",
              "GND (ground bersama)"
            ],
            "a": 3,
            "explain": "GND bersama wajib agar arus kembali."
          },
          {
            "type": "wiring",
            "q": "Pilih sambungan untuk menyalakan LED dari pin 9 dengan resistor pengaman:",
            "circuit": {
              "parts": [
                {
                  "k": "led",
                  "pin": 9,
                  "color": "red",
                  "label": "LED Merah"
                },
                {
                  "k": "resistor",
                  "value": "220"
                }
              ],
              "wires": [
                {
                  "from": "D9",
                  "to": "Resistor 220Ω",
                  "kind": "signal"
                },
                {
                  "from": "Resistor",
                  "to": "LED anode",
                  "kind": "signal"
                },
                {
                  "from": "LED katode",
                  "to": "GND",
                  "kind": "gnd"
                }
              ],
              "note": "Arus: D9 → Resistor → anode LED → katode → GND."
            },
            "slots": [
              {
                "id": "positif",
                "label": "Kaki positif (anode) LED terhubung ke",
                "options": [
                  "Resistor → D9",
                  "GND",
                  "5V",
                  "A0"
                ],
                "a": "Resistor → D9"
              },
              {
                "id": "negatif",
                "label": "Kaki negatif (katode) LED terhubung ke",
                "options": [
                  "GND",
                  "D9",
                  "5V",
                  "A0"
                ],
                "a": "GND"
              }
            ],
            "explain": "Anode ke resistor lalu pin digital; katode ke GND."
          },
          {
            "type": "mc",
            "q": "Jika LED dipasang terbalik (anode-katode tertukar), yang terjadi adalah…",
            "options": [
              "LED meledak",
              "Arduino rusak",
              "LED tidak menyala",
              "LED lebih terang"
            ],
            "a": 2,
            "explain": "LED terbalik tidak mengalirkan arus → tidak menyala."
          }
        ]
      },
      {
        "id": "arduino-4",
        "level": "Dasar",
        "title": "Tombol & digitalRead",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah membaca pin digital adalah…",
            "options": [
              "analogRead(pin)",
              "digitalRead(pin)",
              "readPin(pin)",
              "pinMode(pin)"
            ],
            "a": 1,
            "explain": "digitalRead membaca HIGH/LOW."
          },
          {
            "type": "mc",
            "q": "Mode pin untuk tombol yang membaca sinyal adalah…",
            "options": [
              "INPUT",
              "OUTPUT",
              "PWM",
              "GND"
            ],
            "a": 0,
            "explain": "Tombol = masukan → INPUT."
          },
          {
            "type": "mc",
            "q": "digitalRead mengembalikan nilai…",
            "options": [
              "0 sampai 1023",
              "0 sampai 255",
              "tegangan volt",
              "HIGH atau LOW"
            ],
            "a": 3,
            "explain": "digitalRead hanya HIGH/LOW."
          },
          {
            "type": "mc",
            "q": "Mode INPUT_PULLUP berguna untuk…",
            "options": [
              "menambah kecepatan",
              "menambah PWM",
              "menghindari pin mengambang",
              "menambah tegangan"
            ],
            "a": 2,
            "explain": "Pull-up internal menstabilkan pin."
          },
          {
            "type": "mc",
            "q": "Dengan INPUT_PULLUP, tombol dianggap DITEKAN saat membaca…",
            "options": [
              "HIGH",
              "LOW",
              "0 volt selalu",
              "1023"
            ],
            "a": 1,
            "explain": "Pull-up membuat logika terbalik: LOW = ditekan."
          },
          {
            "type": "fill",
            "q": "Set tombol di pin 2 dengan pull-up internal:\npinMode(2, ___);",
            "code": "pinMode(2, ___);",
            "accept": [
              "INPUT_PULLUP"
            ],
            "explain": "INPUT_PULLUP mengaktifkan resistor pull-up internal."
          },
          {
            "type": "fill",
            "q": "Baca tombol pin 2 ke variabel:\nint nilai = ___(2);",
            "code": "int nilai = ___(2);",
            "accept": [
              "digitalRead"
            ],
            "explain": "digitalRead(2)."
          },
          {
            "type": "mc",
            "q": "Membaca tombol tanpa pull-up/pull-down menyebabkan…",
            "options": [
              "nilai acak (floating)",
              "pin terbakar",
              "PWM rusak",
              "tegangan naik"
            ],
            "a": 0,
            "explain": "Pin mengambang membaca nilai acak."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Tulis sketsa: jika tombol di pin 2 ditekan (LOW, pakai INPUT_PULLUP), nyalakan LED di pin 13 dan cetak \"Ditekan\".",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 2,
              "mode": "INPUT_PULLUP",
              "serialIncludes": "Ditekan"
            },
            "solution": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n    Serial.println(\"Ditekan\");\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "explain": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n    Serial.println(\"Ditekan\");\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "simOptions": {
              "durationMs": 400,
              "buttons": {
                "2": false
              }
            }
          },
          {
            "type": "mc",
            "q": "Percabangan kondisi di Arduino memakai…",
            "options": [
              "if (kondisi) { }",
              "when (kondisi) { }",
              "case (kondisi)",
              "select { }"
            ],
            "a": 0,
            "explain": "Sama seperti C++: if/else."
          }
        ]
      },
      {
        "id": "arduino-5",
        "level": "Dasar",
        "title": "Serial Monitor: Melihat Nilai",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah mengaktifkan Serial dengan baud 9600 adalah…",
            "options": [
              "Serial.start(9600)",
              "Serial.begin(9600)",
              "Serial.open(9600)",
              "Serial.baud(9600)"
            ],
            "a": 1,
            "explain": "Serial.begin memulai komunikasi."
          },
          {
            "type": "mc",
            "q": "Perintah mencetak lalu pindah baris adalah…",
            "options": [
              "Serial.print()",
              "Serial.write()",
              "Serial.println()",
              "console.log()"
            ],
            "a": 2,
            "explain": "println menambah baris baru."
          },
          {
            "type": "mc",
            "q": "Serial.begin sebaiknya diletakkan di dalam…",
            "options": [
              "loop()",
              "delay()",
              "if",
              "setup()"
            ],
            "a": 3,
            "explain": "Cukup sekali di setup()."
          },
          {
            "type": "mc",
            "q": "Jika baud di kode 9600 tetapi Serial Monitor 115200, hasilnya…",
            "options": [
              "teks rusak/berantakan",
              "tetap normal",
              "tidak ada beda",
              "Arduino restart"
            ],
            "a": 0,
            "explain": "Baud harus sama di kedua sisi."
          },
          {
            "type": "fill",
            "q": "Mulai Serial dengan 9600 baud:\nSerial.___(9600);",
            "code": "Serial.___(9600);",
            "accept": [
              "begin"
            ],
            "explain": "Serial.begin(9600)."
          },
          {
            "type": "fill",
            "q": "Cetak nilai lalu pindah baris:\nSerial.___(nilai);",
            "code": "Serial.___(nilai);",
            "accept": [
              "println"
            ],
            "explain": "Serial.println mencetak + newline."
          },
          {
            "type": "mc",
            "q": "Fungsi Serial berguna untuk…",
            "options": [
              "menambah tegangan",
              "melihat nilai variabel saat program berjalan (debug)",
              "mengisi baterai",
              "mengubah warna"
            ],
            "a": 1,
            "explain": "Serial = jendela untuk debug."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Cetak angka 1 sampai 3, satu per baris, lalu \"Selesai\".",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "serialIncludes": "Selesai",
              "serialLines": 4
            },
            "solution": "void setup() {\n  Serial.begin(9600);\n  for (int i = 1; i <= 3; i++) {\n    Serial.println(i);\n  }\n  Serial.println(\"Selesai\");\n}\nvoid loop() {\n  delay(1000);\n}",
            "explain": "void setup() {\n  Serial.begin(9600);\n  for (int i = 1; i <= 3; i++) {\n    Serial.println(i);\n  }\n  Serial.println(\"Selesai\");\n}\nvoid loop() {\n  delay(1000);\n}",
            "simOptions": {
              "durationMs": 200
            }
          },
          {
            "type": "mc",
            "q": "Output Serial yang kosong biasanya karena…",
            "options": [
              "delay terlalu kecil",
              "pinMode salah",
              "Serial.begin belum dipanggil",
              "LED rusak"
            ],
            "a": 2,
            "explain": "Tanpa Serial.begin, print diabaikan."
          },
          {
            "type": "fill",
            "q": "Cetak tanpa pindah baris:\nSerial.___(\"Nilai: \");",
            "code": "Serial.___(\"Nilai: \");",
            "accept": [
              "print"
            ],
            "explain": "Serial.print tidak menambah newline."
          }
        ]
      },
      {
        "id": "arduino-6",
        "level": "Dasar",
        "title": "Variabel & Konstanta",
        "exercises": [
          {
            "type": "mc",
            "q": "Tipe untuk bilangan bulat adalah…",
            "options": [
              "char",
              "String",
              "boolean",
              "int"
            ],
            "a": 3,
            "explain": "int = bilangan bulat."
          },
          {
            "type": "mc",
            "q": "Tipe untuk bilangan desimal adalah…",
            "options": [
              "float",
              "int",
              "byte",
              "boolean"
            ],
            "a": 0,
            "explain": "float = desimal."
          },
          {
            "type": "mc",
            "q": "Tipe untuk teks adalah…",
            "options": [
              "int",
              "String",
              "float",
              "byte"
            ],
            "a": 1,
            "explain": "String menyimpan teks."
          },
          {
            "type": "mc",
            "q": "Cara aman mendefinisikan nomor pin konstanta adalah…",
            "options": [
              "#LED 13",
              "int LED = 13",
              "const int LED = 13;",
              "let LED = 13;"
            ],
            "a": 2,
            "explain": "const int bertipe dan punya titik koma."
          },
          {
            "type": "mc",
            "q": "#define berbeda dari const int karena…",
            "options": [
              "lebih lambat",
              "tidak bisa dipakai pin",
              "butuh titik koma",
              "hanya penggantian teks oleh preprocessor"
            ],
            "a": 3,
            "explain": "#define tidak bertipe; const int bertipe."
          },
          {
            "type": "fill",
            "q": "Deklarasikan konstanta bernama LED bernilai 13:\n___ LED = 13;",
            "code": "___ LED = 13;",
            "accept": [
              "const int"
            ],
            "explain": "const int LED = 13;"
          },
          {
            "type": "mc",
            "q": "Variabel yang dideklarasikan di setup() …",
            "options": [
              "tidak bisa dipakai di loop()",
              "bisa dipakai di mana saja",
              "otomatis global",
              "membuat error"
            ],
            "a": 0,
            "explain": "Scope lokal: hanya di dalam bloknya."
          },
          {
            "type": "mc",
            "q": "Untuk variabel yang dipakai di setup() dan loop(), deklarasikan…",
            "options": [
              "di dalam setup()",
              "di luar kedua fungsi (global)",
              "di dalam loop()",
              "di dalam delay()"
            ],
            "a": 1,
            "explain": "Deklarasi global agar terbaca keduanya."
          },
          {
            "type": "mc",
            "q": "Operator pembanding \"sama dengan\" adalah…",
            "options": [
              "=",
              "=>",
              "==",
              "==="
            ],
            "a": 2,
            "explain": "Satu = untuk menugaskan, == untuk membandingkan."
          },
          {
            "type": "mc",
            "q": "Hasil dari 0.5 bertipe float disimpan ke int akan…",
            "options": [
              "dibulatkan ke 1",
              "error",
              "menjadi 0.5",
              "dipotong menjadi 0"
            ],
            "a": 3,
            "explain": "Konversi int memotong desimal."
          }
        ]
      },
      {
        "id": "arduino-7",
        "level": "Dasar",
        "title": "Pin PWM & analogWrite",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah mengatur kecerahan LED (PWM) adalah…",
            "options": [
              "digitalWrite(pin, nilai)",
              "analogWrite(pin, nilai)",
              "analogRead(pin)",
              "pwmWrite(pin)"
            ],
            "a": 1,
            "explain": "analogWrite menghasilkan PWM."
          },
          {
            "type": "mc",
            "q": "Rentang nilai analogWrite adalah…",
            "options": [
              "0–255",
              "0–1023",
              "0–100",
              "0–5"
            ],
            "a": 0,
            "explain": "PWM 8-bit: 0 sampai 255."
          },
          {
            "type": "mc",
            "q": "Pin berikut yang mendukung PWM adalah…",
            "options": [
              "2",
              "13",
              "A1",
              "9"
            ],
            "a": 3,
            "explain": "Pin PWM: 3, 5, 6, 9, 10, 11."
          },
          {
            "type": "mc",
            "q": "analogWrite(9, 0) menyebabkan LED…",
            "options": [
              "redup",
              "terang penuh",
              "mati",
              "berkedip"
            ],
            "a": 2,
            "explain": "0 = duty cycle 0% = mati."
          },
          {
            "type": "mc",
            "q": "analogWrite(9, 255) menyebabkan LED…",
            "options": [
              "mati",
              "menyala penuh",
              "redup",
              "berkedip"
            ],
            "a": 1,
            "explain": "255 = duty cycle 100%."
          },
          {
            "type": "mc",
            "q": "PWM bekerja dengan cara…",
            "options": [
              "menyalakan-mematikan pin sangat cepat",
              "menambah tegangan",
              "mengubah warna",
              "mengurangi arus"
            ],
            "a": 0,
            "explain": "Duty cycle menentukan rasio nyala."
          },
          {
            "type": "fill",
            "q": "Set kecerahan sedang (128) pada pin 9:\nanalogWrite(9, ___);",
            "code": "analogWrite(9, ___);",
            "accept": [
              "128",
              "127"
            ],
            "explain": "128 ≈ setengah dari 255."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Buat LED di pin 9 menyala dengan kecerahan 128 memakai analogWrite.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pwm": {
                "pin": 9,
                "eq": 128
              }
            },
            "solution": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 128);\n  delay(500);\n}",
            "explain": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 128);\n  delay(500);\n}"
          },
          {
            "type": "mc",
            "q": "analogWrite pada pin tanpa tanda ~ akan…",
            "options": [
              "tetap PWM penuh",
              "merusak papan",
              "menambah terang",
              "tidak menghasilkan PWM"
            ],
            "a": 3,
            "explain": "Hanya pin ~ yang mendukung PWM."
          },
          {
            "type": "mc",
            "q": "Selisih analogRead (0–1023) dan analogWrite (0–255) diatasi dengan…",
            "options": [
              "delay()",
              "Serial()",
              "map()",
              "pinMode()"
            ],
            "a": 2,
            "explain": "map() menskalakan rentang."
          }
        ]
      },
      {
        "id": "arduino-8",
        "level": "Dasar",
        "title": "Lampu Berkedip Bergantian",
        "exercises": [
          {
            "type": "mc",
            "q": "Perulangan untuk mengulang sejumlah kali adalah…",
            "options": [
              "if",
              "for",
              "switch",
              "delay"
            ],
            "a": 1,
            "explain": "for dipakai untuk iterasi."
          },
          {
            "type": "mc",
            "q": "Penulisan for yang benar adalah…",
            "options": [
              "for (int i = 0; i < 3; i++)",
              "for i = 0 to 3",
              "for (i in 3)",
              "repeat 3"
            ],
            "a": 0,
            "explain": "Sintaks for C++ standar."
          },
          {
            "type": "mc",
            "q": "Jumlah perulangan for (int i = 0; i < 3; i++) adalah…",
            "options": [
              "2 kali",
              "4 kali",
              "tak terhingga",
              "3 kali"
            ],
            "a": 3,
            "explain": "i = 0, 1, 2 → 3 kali."
          },
          {
            "type": "mc",
            "q": "Indeks array dimulai dari…",
            "options": [
              "1",
              "-1",
              "0",
              "tak tentu"
            ],
            "a": 2,
            "explain": "Array 0-indexed."
          },
          {
            "type": "mc",
            "q": "Array berisi 3 pin ditulis…",
            "options": [
              "int pins = [3, 5, 6];",
              "int pins[3] = {3, 5, 6};",
              "array pins(3,5,6);",
              "pins{3,5,6};"
            ],
            "a": 1,
            "explain": "Deklarasi array C++."
          },
          {
            "type": "mc",
            "q": "Untuk Akses elemen pertama array pins dipakai…",
            "options": [
              "pins[0]",
              "pins[1]",
              "pins.first",
              "pins(0)"
            ],
            "a": 0,
            "explain": "Elemen pertama = indeks 0."
          },
          {
            "type": "fill",
            "q": "Loop dari 0 sampai kurang dari 3:\nfor (int i = 0; i ___ 3; i++) { }",
            "code": "for (int i = 0; i ___ 3; i++) { }",
            "accept": [
              "<"
            ],
            "explain": "i < 3 → 3 iterasi (0,1,2)."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Nyalakan LED bergantian: pin 3 dan 5 menyala, lalu mati, berulang. Gunakan delay.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "digitalToggled": 3,
              "pin": 3,
              "mode": "OUTPUT"
            },
            "solution": "void setup() {\n  pinMode(3, OUTPUT);\n  pinMode(5, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(3, HIGH);\n  digitalWrite(5, LOW);\n  delay(500);\n  digitalWrite(3, LOW);\n  digitalWrite(5, HIGH);\n  delay(500);\n}",
            "explain": "void setup() {\n  pinMode(3, OUTPUT);\n  pinMode(5, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(3, HIGH);\n  digitalWrite(5, LOW);\n  delay(500);\n  digitalWrite(3, LOW);\n  digitalWrite(5, HIGH);\n  delay(500);\n}"
          },
          {
            "type": "mc",
            "q": "Mengapa pinMode sebaiknya tidak di dalam loop()?",
            "options": [
              "agar PWM jalan",
              "agar Serial aktif",
              "agar delay cepat",
              "agar tidak dijalankan berulang tanpa perlu"
            ],
            "a": 3,
            "explain": "Konfigurasi cukup sekali di setup()."
          },
          {
            "type": "mc",
            "q": "Kesalahan umum off-by-one pada for (int i = 0; i <= 3; i++) untuk array 3 elemen adalah…",
            "options": [
              "tidak error",
              "iterasi kurang",
              "mengakses pins[3] yang tak ada",
              "salah sintaks"
            ],
            "a": 2,
            "explain": "i <= 3 mencapai indeks 3 → di luar array."
          }
        ]
      },
      {
        "id": "arduino-9",
        "level": "Dasar",
        "title": "Papan Uji: Blink & Tombol",
        "exercises": [
          {
            "type": "mc",
            "q": "Untuk membuat LED berkedip, perintah yang bergantian adalah…",
            "options": [
              "analogRead",
              "pinMode",
              "digitalWrite HIGH lalu LOW",
              "Serial.print"
            ],
            "a": 2,
            "explain": "HIGH/LOW bergantian."
          },
          {
            "type": "mc",
            "q": "Mode untuk pin yang menggerakkan komponen adalah…",
            "options": [
              "INPUT",
              "INPUT_PULLUP",
              "GND",
              "OUTPUT"
            ],
            "a": 3,
            "explain": "Menggerakkan komponen = mode OUTPUT."
          },
          {
            "type": "mc",
            "q": "Mode untuk pin yang membaca tombol adalah…",
            "options": [
              "INPUT (atau INPUT_PULLUP)",
              "OUTPUT",
              "PWM",
              "GND"
            ],
            "a": 0,
            "explain": "Membaca = INPUT."
          },
          {
            "type": "mc",
            "q": "Rangkaian: tombol menyalakan LED. Saat tombol ditekan, LED harus…",
            "options": [
              "mati",
              "menyala",
              "berkedip cepat",
              "berubah warna"
            ],
            "a": 1,
            "explain": "Logika if tombol → LED menyala."
          },
          {
            "type": "fill",
            "q": "Jika tombol ditekan, nyalakan LED:\nif (digitalRead(2) == ___) {\n  digitalWrite(13, HIGH);\n}",
            "code": "if (digitalRead(2) == ___) {\n  digitalWrite(13, HIGH);\n}",
            "accept": [
              "LOW"
            ],
            "explain": "Dengan INPUT_PULLUP, ditekan = LOW."
          },
          {
            "type": "wiring",
            "q": "Pilih sambungan tombol dengan pull-up internal dan LED keluaran:",
            "circuit": {
              "parts": [
                {
                  "k": "button",
                  "pin": 2
                },
                {
                  "k": "led",
                  "pin": 13,
                  "color": "green"
                }
              ],
              "wires": [
                {
                  "from": "D2",
                  "to": "Tombol",
                  "kind": "signal"
                },
                {
                  "from": "Tombol",
                  "to": "GND",
                  "kind": "gnd"
                },
                {
                  "from": "D13",
                  "to": "LED",
                  "kind": "signal"
                }
              ],
              "note": "INPUT_PULLUP menggantikan resistor pull-up eksternal."
            },
            "slots": [
              {
                "id": "tombol",
                "label": "Satu kaki tombol ke pin",
                "options": [
                  "D2",
                  "D13",
                  "5V",
                  "A0"
                ],
                "a": "D2"
              },
              {
                "id": "led",
                "label": "Anode LED ke pin",
                "options": [
                  "D13",
                  "D2",
                  "GND",
                  "VIN"
                ],
                "a": "D13"
              }
            ],
            "explain": "Tombol ke D2, LED ke D13."
          },
          {
            "type": "mc",
            "q": "Jika LED menyala saat tombol TIDAK ditekan, kemungkinan besar…",
            "options": [
              "kabel putus",
              "PWM rusak",
              "logika kondisi terbalik",
              "Serial mati"
            ],
            "a": 2,
            "explain": "Periksa HIGH/LOW — logika pull-up terbalik."
          },
          {
            "type": "mc",
            "q": "Perintah untuk menunggu 500 ms adalah…",
            "options": [
              "wait(500)",
              "sleep(500)",
              "pause(500)",
              "delay(500)"
            ],
            "a": 3,
            "explain": "delay dalam milidetik."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Sketsa final: tombol pin 2 (INPUT_PULLUP) menyalakan LED pin 13 bila ditekan, matikan bila tidak.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 2,
              "mode": "INPUT_PULLUP",
              "digital": {
                "pin": 13,
                "value": true
              }
            },
            "solution": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "explain": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "simOptions": {
              "durationMs": 300,
              "buttons": {
                "2": false
              }
            }
          },
          {
            "type": "mc",
            "q": "Saat loop() selesai satu putaran, Arduino akan…",
            "options": [
              "mengulang loop() dari awal",
              "berhenti",
              "kembali ke setup()",
              "restart"
            ],
            "a": 0,
            "explain": "loop() diulang terus."
          }
        ]
      },
      {
        "id": "arduino-10",
        "level": "Menengah",
        "title": "Potensio & analogRead",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah membaca nilai analog adalah…",
            "options": [
              "digitalRead(pin)",
              "analogRead(pin)",
              "analogWrite(pin)",
              "readAnalog(pin)"
            ],
            "a": 1,
            "explain": "analogRead membaca ADC."
          },
          {
            "type": "mc",
            "q": "Rentang nilai analogRead pada Arduino Uno adalah…",
            "options": [
              "0–255",
              "0–100",
              "0–1023",
              "0–5"
            ],
            "a": 2,
            "explain": "ADC 10-bit: 0 sampai 1023."
          },
          {
            "type": "mc",
            "q": "Potensio adalah contoh komponen…",
            "options": [
              "keluaran digital",
              "aktuator",
              "layar",
              "masukan analog"
            ],
            "a": 3,
            "explain": "Potensio memberi tegangan variabel."
          },
          {
            "type": "mc",
            "q": "Kaki tengah potensio biasanya dihubungkan ke…",
            "options": [
              "pin analog (A0)",
              "GND",
              "5V",
              "pin digital"
            ],
            "a": 0,
            "explain": "Kaki tengah = wiper = sinyal."
          },
          {
            "type": "mc",
            "q": "Kedua kaki ujung potensio dihubungkan ke…",
            "options": [
              "A0 dan A1",
              "5V dan GND",
              "D2 dan D3",
              "hanya 5V"
            ],
            "a": 1,
            "explain": "Ujung-ujung ke 5V dan GND."
          },
          {
            "type": "mc",
            "q": "Nilai analogRead 0 berarti tegangan…",
            "options": [
              "5V",
              "2.5V",
              "0V",
              "tak tentu"
            ],
            "a": 2,
            "explain": "0 = 0V, 1023 = 5V."
          },
          {
            "type": "fill",
            "q": "Baca potensio di A0:\nint nilai = ___(A0);",
            "code": "int nilai = ___(A0);",
            "accept": [
              "analogRead"
            ],
            "explain": "analogRead(A0)."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Baca potensio A0 lalu cetak nilainya ke Serial setiap 200 ms.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "serialLines": 2
            },
            "solution": "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  Serial.println(nilai);\n  delay(200);\n}",
            "explain": "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  Serial.println(nilai);\n  delay(200);\n}",
            "simOptions": {
              "durationMs": 500,
              "analog": {
                "A0": 700
              }
            }
          },
          {
            "type": "mc",
            "q": "analogRead tidak memerlukan pinMode karena…",
            "options": [
              "pin analog tidak bisa dibaca",
              "PWM menangani",
              "delay membaca",
              "pin analog sudah otomatis masukan"
            ],
            "a": 3,
            "explain": "Pin analog default sudah INPUT."
          },
          {
            "type": "mc",
            "q": "Nilai 1023 pada analogRead berarti…",
            "options": [
              "mendekati 5V",
              "mendekati 0V",
              "PWM penuh",
              "error"
            ],
            "a": 0,
            "explain": "1023 = tegangan maksimum."
          }
        ]
      },
      {
        "id": "arduino-11",
        "level": "Menengah",
        "title": "map() & Skala Nilai",
        "exercises": [
          {
            "type": "mc",
            "q": "Fungsi untuk mengubah rentang nilai adalah…",
            "options": [
              "scale()",
              "map()",
              "range()",
              "convert()"
            ],
            "a": 1,
            "explain": "map() menskalakan nilai."
          },
          {
            "type": "mc",
            "q": "map(nilai, 0, 1023, 0, 255) mengubah rentang…",
            "options": [
              "0–255 menjadi 0–1023",
              "0–100 menjadi 0–5",
              "tanpa efek",
              "0–1023 menjadi 0–255"
            ],
            "a": 3,
            "explain": "Memetakan ADC ke PWM."
          },
          {
            "type": "mc",
            "q": "Mengapa map() diperlukan saat menghubungkan potensio ke LED PWM?",
            "options": [
              "agar LED berwarna",
              "agar Serial jalan",
              "analogRead 0–1023, analogWrite 0–255",
              "agar tombol terbaca"
            ],
            "a": 2,
            "explain": "Rentang berbeda harus diskalakan."
          },
          {
            "type": "mc",
            "q": "map() pada Arduino memakai perhitungan…",
            "options": [
              "desimal",
              "bilangan bulat",
              "teks",
              "boolean"
            ],
            "a": 1,
            "explain": "map() integer — hasil dipotong."
          },
          {
            "type": "fill",
            "q": "Petakan potensio (0–1023) ke PWM (0–255):\nint pwm = map(nilai, 0, 1023, 0, ___);",
            "code": "int pwm = map(nilai, 0, 1023, 0, ___);",
            "accept": [
              "255"
            ],
            "explain": "Batas atas PWM = 255."
          },
          {
            "type": "mc",
            "q": "Hasil map(512, 0, 1023, 0, 255) kira-kira…",
            "options": [
              "127",
              "255",
              "0",
              "512"
            ],
            "a": 0,
            "explain": "Setengah dari 255 ≈ 127."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Petakan potensio A0 ke kecerahan LED pin 9 memakai map().",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pwm": {
                "pin": 9,
                "min": 200
              }
            },
            "solution": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  int pwm = map(nilai, 0, 1023, 0, 255);\n  analogWrite(9, pwm);\n  delay(50);\n}",
            "explain": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  int pwm = map(nilai, 0, 1023, 0, 255);\n  analogWrite(9, pwm);\n  delay(50);\n}",
            "simOptions": {
              "durationMs": 300,
              "analog": {
                "A0": 1023
              }
            }
          },
          {
            "type": "mc",
            "q": "Jika map() menghasilkan nilai di luar batas, sebaiknya dibungkus…",
            "options": [
              "delay()",
              "Serial()",
              "pinMode()",
              "constrain()"
            ],
            "a": 3,
            "explain": "constrain membatasi ke rentang aman."
          },
          {
            "type": "mc",
            "q": "Urutan argumen map adalah…",
            "options": [
              "minKeluar, maxKeluar, nilai",
              "pin, nilai",
              "nilai, minMasuk, maxMasuk, minKeluar, maxKeluar",
              "maxMasuk, minMasuk"
            ],
            "a": 2,
            "explain": "Nilai dulu, lalu rentang asal, lalu rentang tujuan."
          },
          {
            "type": "mc",
            "q": "map(0, 0, 1023, 0, 255) menghasilkan…",
            "options": [
              "255",
              "0",
              "127",
              "1023"
            ],
            "a": 1,
            "explain": "Nilai minimum tetap minimum."
          }
        ]
      },
      {
        "id": "arduino-12",
        "level": "Menengah",
        "title": "Buzzer & tone()",
        "exercises": [
          {
            "type": "mc",
            "q": "Perintah membunyikan buzzer adalah…",
            "options": [
              "tone(pin, frekuensi)",
              "sound(pin)",
              "beep(pin)",
              "play(pin)"
            ],
            "a": 0,
            "explain": "tone() menghasilkan gelombang."
          },
          {
            "type": "mc",
            "q": "Satuan frekuensi pada tone() adalah…",
            "options": [
              "ms",
              "volt",
              "byte",
              "Hz"
            ],
            "a": 3,
            "explain": "Frekuensi dalam Hertz."
          },
          {
            "type": "mc",
            "q": "Nada lebih tinggi dihasilkan oleh frekuensi yang…",
            "options": [
              "lebih kecil",
              "nol",
              "lebih besar",
              "negatif"
            ],
            "a": 2,
            "explain": "Frekuensi besar = nada tinggi."
          },
          {
            "type": "mc",
            "q": "Perintah menghentikan bunyi adalah…",
            "options": [
              "toneOff(pin)",
              "noTone(pin)",
              "stop(pin)",
              "mute(pin)"
            ],
            "a": 1,
            "explain": "noTone menghentikan."
          },
          {
            "type": "mc",
            "q": "tone(8, 440) menghasilkan nada A4 dengan frekuensi…",
            "options": [
              "440 Hz",
              "440 ms",
              "440 volt",
              "4 Hz"
            ],
            "a": 0,
            "explain": "440 Hz = nada A4."
          },
          {
            "type": "fill",
            "q": "Bunyikan nada 1000 Hz di pin 8:\ntone(8, ___);",
            "code": "tone(8, ___);",
            "accept": [
              "1000"
            ],
            "explain": "Frekuensi 1000 Hz."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Bunyikan nada 880 Hz di pin 8 selama 200 ms, lalu diam 300 ms, berulang.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "tone": 880
            },
            "solution": "void setup() {\n  pinMode(8, OUTPUT);\n}\nvoid loop() {\n  tone(8, 880, 200);\n  delay(500);\n}",
            "explain": "void setup() {\n  pinMode(8, OUTPUT);\n}\nvoid loop() {\n  tone(8, 880, 200);\n  delay(500);\n}",
            "simOptions": {
              "durationMs": 600
            }
          },
          {
            "type": "mc",
            "q": "Buzzer aktif (active buzzer) dibunyikan dengan…",
            "options": [
              "analogWrite 128",
              "tone() wajib",
              "Serial.print",
              "digitalWrite HIGH"
            ],
            "a": 3,
            "explain": "Buzzer aktif cukup diberi HIGH."
          },
          {
            "type": "mc",
            "q": "Buzzer pasif membutuhkan…",
            "options": [
              "hanya GND",
              "PWM 255",
              "tone() dengan frekuensi",
              "delay"
            ],
            "a": 2,
            "explain": "Buzzer pasif perlu sinyal frekuensi."
          },
          {
            "type": "mc",
            "q": "Menghubungkan buzzer langsung ke pin tanpa resistor berisiko…",
            "options": [
              "nada lebih tinggi",
              "pin mengeluarkan arus melebihi batas",
              "buzzer lebih pelan",
              "tidak berisiko"
            ],
            "a": 1,
            "explain": "Arus berlebih dapat merusak pin."
          }
        ]
      },
      {
        "id": "arduino-13",
        "level": "Menengah",
        "title": "Sensor Cahaya (LDR)",
        "exercises": [
          {
            "type": "mc",
            "q": "LDR adalah sensor…",
            "options": [
              "cahaya",
              "suhu",
              "jarak",
              "sentuhan"
            ],
            "a": 0,
            "explain": "LDR = Light Dependent Resistor."
          },
          {
            "type": "mc",
            "q": "Nilai resistansi LDR saat terang akan…",
            "options": [
              "menurun",
              "naik",
              "tetap",
              "nol"
            ],
            "a": 0,
            "explain": "Semakin terang, resistansi makin kecil."
          },
          {
            "type": "mc",
            "q": "LDR biasanya dirangkai sebagai…",
            "options": [
              "filter",
              "pembagi tegangan",
              "kapasitor",
              "induktor"
            ],
            "a": 1,
            "explain": "Pembagi tegangan agar terbaca ADC."
          },
          {
            "type": "mc",
            "q": "Untuk membaca LDR digunakan…",
            "options": [
              "digitalRead",
              "digitalWrite",
              "analogRead",
              "tone"
            ],
            "a": 2,
            "explain": "LDR memberi nilai analog."
          },
          {
            "type": "mc",
            "q": "Pembacaan LDR 0–1023 biasanya dipakai untuk…",
            "options": [
              "mengubah warna",
              "menambah PWM",
              "mengisi baterai",
              "menentukan ambang (threshold)"
            ],
            "a": 3,
            "explain": "Ambang membedakan terang/gelap."
          },
          {
            "type": "fill",
            "q": "Nyalakan LED jika gelap (nilai < 300):\nif (nilai ___ 300) {\n  digitalWrite(13, HIGH);\n}",
            "code": "if (nilai ___ 300) {\n  digitalWrite(13, HIGH);\n}",
            "accept": [
              "<"
            ],
            "explain": "Kurang dari ambang = gelap."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Buat lampu otomatis: jika nilai LDR di A0 < 300, nyalakan LED pin 13; jika tidak, matikan.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "digital": {
                "pin": 13,
                "value": true
              }
            },
            "solution": "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  if (nilai < 300) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(100);\n}",
            "explain": "void setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  if (nilai < 300) {\n    digitalWrite(13, HIGH);\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(100);\n}",
            "simOptions": {
              "durationMs": 300,
              "analog": {
                "A0": 100
              }
            }
          },
          {
            "type": "wiring",
            "q": "Rakit sensor LDR dengan pembagi tegangan ke A0:",
            "circuit": {
              "parts": [
                {
                  "k": "ldr",
                  "pin": "A0"
                },
                {
                  "k": "resistor",
                  "value": "10k",
                  "label": "10kΩ"
                }
              ],
              "wires": [
                {
                  "from": "5V",
                  "to": "LDR",
                  "kind": "power"
                },
                {
                  "from": "LDR",
                  "to": "A0",
                  "kind": "signal"
                },
                {
                  "from": "A0",
                  "to": "Resistor 10k",
                  "kind": "signal"
                },
                {
                  "from": "Resistor",
                  "to": "GND",
                  "kind": "gnd"
                }
              ],
              "note": "Titik tengah pembagi → A0."
            },
            "slots": [
              {
                "id": "titik",
                "label": "Titik tengah pembagi tegangan ke",
                "options": [
                  "A0",
                  "5V",
                  "GND",
                  "D13"
                ],
                "a": "A0"
              },
              {
                "id": "resistor",
                "label": "Ujung resistor 10kΩ ke",
                "options": [
                  "GND",
                  "A0",
                  "5V",
                  "D2"
                ],
                "a": "GND"
              }
            ],
            "explain": "Pembagi: 5V → LDR → A0 → resistor → GND."
          },
          {
            "type": "mc",
            "q": "Mengapa perlu resistor 10kΩ pada rangkaian LDR?",
            "options": [
              "membentuk pembagi tegangan",
              "menambah terang",
              "mengurangi arus LED",
              "mengubah warna"
            ],
            "a": 0,
            "explain": "Tanpa itu, A0 tidak punya tegangan acuan."
          },
          {
            "type": "mc",
            "q": "Nilai LDR berubah-ubah sedikit meski cahaya tetap disebut…",
            "options": [
              "PWM",
              "noise (derau)",
              "bias",
              "offset"
            ],
            "a": 1,
            "explain": "Derau wajar pada sensor analog."
          }
        ]
      },
      {
        "id": "arduino-14",
        "level": "Menengah",
        "title": "Sensor Suhu",
        "exercises": [
          {
            "type": "mc",
            "q": "Sensor suhu analog yang umum di kit pemula adalah…",
            "options": [
              "HC-SR04",
              "LDR",
              "TMP36",
              "SG90"
            ],
            "a": 2,
            "explain": "TMP36 memberi tegangan sebanding suhu."
          },
          {
            "type": "mc",
            "q": "Tegangan keluaran TMP36 dibaca dengan…",
            "options": [
              "digitalRead",
              "tone",
              "pulseIn",
              "analogRead"
            ],
            "a": 3,
            "explain": "Keluaran analog → analogRead."
          },
          {
            "type": "mc",
            "q": "Untuk mengubah nilai ADC ke tegangan (5V) dipakai rumus…",
            "options": [
              "nilai * 5.0 / 1023.0",
              "nilai / 255",
              "nilai * 1023",
              "nilai + 5"
            ],
            "a": 0,
            "explain": "Tegangan = ADC/1023 × 5V."
          },
          {
            "type": "mc",
            "q": "Agar hasil desimal tidak terpotong, gunakan tipe…",
            "options": [
              "int",
              "float",
              "byte",
              "boolean"
            ],
            "a": 1,
            "explain": "float menyimpan desimal."
          },
          {
            "type": "mc",
            "q": "Sensor suhu digital yang populer pada pemula adalah…",
            "options": [
              "TMP36 analog",
              "LDR",
              "DHT11",
              "SG90"
            ],
            "a": 2,
            "explain": "DHT11 memberi nilai digital."
          },
          {
            "type": "fill",
            "q": "Konversi ADC ke tegangan 5V:\nfloat v = nilai * 5.0 / ___;",
            "code": "float v = nilai * 5.0 / ___;",
            "accept": [
              "1023.0",
              "1023"
            ],
            "explain": "1023 = nilai ADC maksimum."
          },
          {
            "type": "fill",
            "q": "Suhu dari TMP36: (tegangan - 0.5) * ___",
            "code": "Suhu dari TMP36: (tegangan - 0.5) * ___",
            "accept": [
              "100"
            ],
            "explain": "TMP36: 10mV per °C → ×100."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Baca suhu dari TMP36 di A0, cetak nilai ADC-nya ke Serial.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "serialLines": 2
            },
            "solution": "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  float tegangan = nilai * 5.0 / 1023.0;\n  Serial.println(nilai);\n  delay(500);\n}",
            "explain": "void setup() {\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  float tegangan = nilai * 5.0 / 1023.0;\n  Serial.println(nilai);\n  delay(500);\n}",
            "simOptions": {
              "durationMs": 600,
              "analog": {
                "A0": 300
              }
            }
          },
          {
            "type": "mc",
            "q": "Menggunakan library DHT membutuhkan…",
            "options": [
              "hanya analogRead",
              "tone()",
              "pinMode OUTPUT",
              "#include <DHT.h>"
            ],
            "a": 3,
            "explain": "#include memuat pustaka."
          },
          {
            "type": "mc",
            "q": "Sensor suhu membaca 0 terus padahal terpasang. Kemungkinan…",
            "options": [
              "salah pin analog atau belum diberi daya",
              "LED rusak",
              "PWM salah",
              "baud salah"
            ],
            "a": 0,
            "explain": "Periksa pin dan catu daya sensor."
          }
        ]
      },
      {
        "id": "arduino-15",
        "level": "Menengah",
        "title": "Servo & Library",
        "exercises": [
          {
            "type": "mc",
            "q": "Untuk memakai servo perlu library…",
            "options": [
              "<Motor.h>",
              "<Servo.h>",
              "<PWM.h>",
              "<LCD.h>"
            ],
            "a": 1,
            "explain": "Servo.h mengatur motor servo."
          },
          {
            "type": "mc",
            "q": "Perintah menyertakan library adalah…",
            "options": [
              "import Servo",
              "using Servo",
              "#include <Servo.h>",
              "require Servo"
            ],
            "a": 2,
            "explain": "#include adalah preprocessor."
          },
          {
            "type": "mc",
            "q": "Membuat objek servo ditulis…",
            "options": [
              "servo myservo;",
              "new Servo();",
              "Servo = myservo;",
              "Servo myservo;"
            ],
            "a": 3,
            "explain": "Deklarasi objek Servo."
          },
          {
            "type": "mc",
            "q": "Menempelkan servo ke pin 9 memakai…",
            "options": [
              "myservo.pin(9)",
              "myservo.attach(9)",
              "myservo.begin(9)",
              "myservo.set(9)"
            ],
            "a": 1,
            "explain": "attach() menentukan pin."
          },
          {
            "type": "mc",
            "q": "Rentang sudut servo standar adalah…",
            "options": [
              "0–180 derajat",
              "0–255",
              "0–1023",
              "0–360"
            ],
            "a": 0,
            "explain": "Servo standar 0–180 derajat."
          },
          {
            "type": "fill",
            "q": "Set servo ke sudut 90 derajat:\nmyservo.___(90);",
            "code": "myservo.___(90);",
            "accept": [
              "write"
            ],
            "explain": "write() mengatur sudut."
          },
          {
            "type": "fill",
            "q": "Petakan potensio ke sudut servo 0–180:\nint sudut = map(nilai, 0, 1023, 0, ___);",
            "code": "int sudut = map(nilai, 0, 1023, 0, ___);",
            "accept": [
              "180"
            ],
            "explain": "Sudut maksimum 180."
          },
          {
            "type": "wiring",
            "q": "Rakit servo dengan potensio sebagai pengatur sudut:",
            "circuit": {
              "parts": [
                {
                  "k": "pot",
                  "pin": "A0"
                },
                {
                  "k": "servo",
                  "pin": 9
                }
              ],
              "wires": [
                {
                  "from": "5V",
                  "to": "Servo VCC",
                  "kind": "power"
                },
                {
                  "from": "GND",
                  "to": "Servo GND",
                  "kind": "gnd"
                },
                {
                  "from": "D9",
                  "to": "Servo sinyal",
                  "kind": "signal"
                },
                {
                  "from": "A0",
                  "to": "Potensio tengah",
                  "kind": "signal"
                }
              ],
              "note": "Servo butuh daya 5V dan GND bersama."
            },
            "slots": [
              {
                "id": "sinyal",
                "label": "Kabel sinyal servo ke",
                "options": [
                  "D9",
                  "A0",
                  "GND",
                  "5V"
                ],
                "a": "D9"
              },
              {
                "id": "pot",
                "label": "Potensio tengah ke",
                "options": [
                  "A0",
                  "D9",
                  "GND",
                  "VIN"
                ],
                "a": "A0"
              }
            ],
            "explain": "Sinyal servo ke pin PWM, potensio ke A0."
          },
          {
            "type": "mc",
            "q": "Servo bergetar dan Arduino restart saat digerakkan. Kemungkinan…",
            "options": [
              "kode salah",
              "sudut > 180",
              "GND berlebih",
              "daya tidak cukup (ambil dari USB)"
            ],
            "a": 3,
            "explain": "Servo butuh arus besar; pakai catu daya terpisah."
          },
          {
            "type": "mc",
            "q": "myservo.write(180) berarti servo…",
            "options": [
              "berputar terus",
              "mati",
              "berputar ke sudut maksimum",
              "berbalik arah"
            ],
            "a": 2,
            "explain": "180 = sudut maksimum."
          }
        ]
      },
      {
        "id": "arduino-16",
        "level": "Menengah",
        "title": "Sensor Jarak (Ultrasonik)",
        "exercises": [
          {
            "type": "mc",
            "q": "Sensor jarak ultrasonik yang umum adalah…",
            "options": [
              "TMP36",
              "HC-SR04",
              "LDR",
              "DHT11"
            ],
            "a": 1,
            "explain": "HC-SR04 mengukur jarak dengan suara."
          },
          {
            "type": "mc",
            "q": "Pin pada HC-SR04 untuk memicu pengukuran adalah…",
            "options": [
              "Trig",
              "Echo",
              "VCC",
              "GND"
            ],
            "a": 0,
            "explain": "Trig memicu pulsa."
          },
          {
            "type": "mc",
            "q": "Pin yang mengukur lama pantulan adalah…",
            "options": [
              "Trig",
              "VCC",
              "GND",
              "Echo"
            ],
            "a": 3,
            "explain": "Echo memberi durasi pulsa."
          },
          {
            "type": "mc",
            "q": "Fungsi membaca durasi pulsa adalah…",
            "options": [
              "analogRead()",
              "digitalRead()",
              "pulseIn()",
              "tone()"
            ],
            "a": 2,
            "explain": "pulseIn mengukur lebar pulsa."
          },
          {
            "type": "mc",
            "q": "Rumus jarak dari durasi pulsa (us) adalah…",
            "options": [
              "durasi * 2",
              "durasi * 0.034 / 2",
              "durasi / 255",
              "durasi + 0.034"
            ],
            "a": 1,
            "explain": "Kecepatan suara 340 m/s, dibagi 2 (pulang-pergi)."
          },
          {
            "type": "fill",
            "q": "Kirim pulsa trigger 10 mikrodetik:\ndigitalWrite(trig, HIGH);\ndelayMicroseconds(___);\ndigitalWrite(trig, LOW);",
            "code": "digitalWrite(trig, HIGH);\ndelayMicroseconds(___);\ndigitalWrite(trig, LOW);",
            "accept": [
              "10"
            ],
            "explain": "HC-SR04 butuh pulsa 10 us."
          },
          {
            "type": "mc",
            "q": "Jarak dihitung dibagi 2 karena…",
            "options": [
              "pulsa menempuh jarak pergi dan pulang",
              "sensor salah kalibrasi",
              "kecepatan suara dua kali",
              "pembulatan"
            ],
            "a": 0,
            "explain": "Pulang-pergi → dibagi dua."
          },
          {
            "type": "wiring",
            "q": "Rakit HC-SR04 dan buzzer sebagai alarm jarak:",
            "circuit": {
              "parts": [
                {
                  "k": "ultrasonic",
                  "pin": 9,
                  "label": "HC-SR04"
                },
                {
                  "k": "buzzer",
                  "pin": 8
                }
              ],
              "wires": [
                {
                  "from": "D9",
                  "to": "Trig",
                  "kind": "signal"
                },
                {
                  "from": "D10",
                  "to": "Echo",
                  "kind": "signal"
                },
                {
                  "from": "D8",
                  "to": "Buzzer",
                  "kind": "signal"
                },
                {
                  "from": "5V",
                  "to": "VCC",
                  "kind": "power"
                }
              ],
              "note": "Trig dan Echo butuh dua pin digital."
            },
            "slots": [
              {
                "id": "trig",
                "label": "Pin Trig ke",
                "options": [
                  "D9",
                  "D8",
                  "A0",
                  "GND"
                ],
                "a": "D9"
              },
              {
                "id": "echo",
                "label": "Pin Echo ke",
                "options": [
                  "D10",
                  "D9",
                  "5V",
                  "GND"
                ],
                "a": "D10"
              }
            ],
            "explain": "Trig dan Echo ke pin digital berbeda."
          },
          {
            "type": "mc",
            "q": "Nilai pulseIn mengembalikan…",
            "options": [
              "jarak dalam cm",
              "nilai 0–1023",
              "frekuensi Hz",
              "durasi dalam mikrodetik"
            ],
            "a": 3,
            "explain": "pulseIn → mikrodetik."
          },
          {
            "type": "mc",
            "q": "Sensor ultrasonik tidak stabil pada permukaan…",
            "options": [
              "keras",
              "logam",
              "lembut/penyerap suara",
              "kaca"
            ],
            "a": 2,
            "explain": "Permukaan lunak menyerap suara."
          }
        ]
      },
      {
        "id": "arduino-17",
        "level": "Menengah",
        "title": "Layar LCD 16×2",
        "exercises": [
          {
            "type": "mc",
            "q": "Library untuk LCD karakter adalah…",
            "options": [
              "<LCD.h>",
              "<LiquidCrystal.h>",
              "<Display.h>",
              "<Screen.h>"
            ],
            "a": 1,
            "explain": "LiquidCrystal mengendalikan LCD."
          },
          {
            "type": "mc",
            "q": "Membuat objek LCD butuh argumen…",
            "options": [
              "pin RS, EN, D4–D7",
              "hanya satu pin",
              "pin analog",
              "baud rate"
            ],
            "a": 0,
            "explain": "Konstruktor LiquidCrystal(rs, en, d4, d5, d6, d7)."
          },
          {
            "type": "mc",
            "q": "Perintah mengaktifkan LCD adalah…",
            "options": [
              "lcd.start()",
              "lcd.open()",
              "lcd.init()",
              "lcd.begin(16, 2)"
            ],
            "a": 3,
            "explain": "begin(kolom, baris)."
          },
          {
            "type": "mc",
            "q": "Perintah menaruh kursor di kolom 0 baris 1 adalah…",
            "options": [
              "lcd.cursor(1)",
              "lcd.goto(0,1)",
              "lcd.setCursor(0, 1)",
              "lcd.move(1,0)"
            ],
            "a": 2,
            "explain": "setCursor(kolom, baris)."
          },
          {
            "type": "mc",
            "q": "Perintah mencetak teks ke LCD adalah…",
            "options": [
              "lcd.write(\"Halo\")",
              "Serial.print(\"Halo\")",
              "lcd.print(\"Halo\")",
              "lcd.show(\"Halo\")"
            ],
            "a": 2,
            "explain": "print seperti Serial."
          },
          {
            "type": "fill",
            "q": "Aktifkan LCD 16 kolom 2 baris:\nlcd.___(16, 2);",
            "code": "lcd.___(16, 2);",
            "accept": [
              "begin"
            ],
            "explain": "lcd.begin(16, 2)."
          },
          {
            "type": "fill",
            "q": "Pindah ke kolom 0 baris 1:\nlcd.setCursor(0, ___);",
            "code": "lcd.setCursor(0, ___);",
            "accept": [
              "1"
            ],
            "explain": "Baris kedua = indeks 1."
          },
          {
            "type": "mc",
            "q": "Jumlah karakter per baris pada LCD 16×2 adalah…",
            "options": [
              "2",
              "32",
              "8",
              "16"
            ],
            "a": 3,
            "explain": "16 kolom × 2 baris."
          },
          {
            "type": "wiring",
            "q": "Rakit LCD 16×2 ke Arduino (mode 4-bit):",
            "circuit": {
              "parts": [
                {
                  "k": "lcd"
                }
              ],
              "wires": [
                {
                  "from": "D12",
                  "to": "RS",
                  "kind": "signal"
                },
                {
                  "from": "D11",
                  "to": "EN",
                  "kind": "signal"
                },
                {
                  "from": "D5–D2",
                  "to": "D4–D7",
                  "kind": "signal"
                },
                {
                  "from": "GND",
                  "to": "VSS/RW",
                  "kind": "gnd"
                },
                {
                  "from": "5V",
                  "to": "VDD",
                  "kind": "power"
                }
              ],
              "note": "Potensiometer kontras ke pin V0."
            },
            "slots": [
              {
                "id": "rs",
                "label": "Pin RS LCD ke",
                "options": [
                  "D12",
                  "D2",
                  "A0",
                  "GND"
                ],
                "a": "D12"
              },
              {
                "id": "en",
                "label": "Pin EN LCD ke",
                "options": [
                  "D11",
                  "D12",
                  "5V",
                  "A1"
                ],
                "a": "D11"
              }
            ],
            "explain": "RS dan EN ke pin digital, data ke D4–D7."
          },
          {
            "type": "mc",
            "q": "LCD menampilkan kotak-kotak hitam semua. Kemungkinan…",
            "options": [
              "kontras (V0) belum disetel",
              "kode salah",
              "baud salah",
              "PWM salah"
            ],
            "a": 0,
            "explain": "Atur potensiometer kontras."
          }
        ]
      },
      {
        "id": "arduino-18",
        "level": "Menengah",
        "title": "Uji Kemampuan: Potensio → Servo",
        "exercises": [
          {
            "type": "mc",
            "q": "Rangkaian potensio → servo melibatkan…",
            "options": [
              "hanya digital",
              "masukan analog dan keluaran servo",
              "hanya Serial",
              "hanya PWM LED"
            ],
            "a": 1,
            "explain": "Masukan → map → keluaran."
          },
          {
            "type": "mc",
            "q": "Untuk membaca potensio dipakai…",
            "options": [
              "digitalRead(A0)",
              "analogWrite(A0)",
              "analogRead(A0)",
              "tone(A0)"
            ],
            "a": 2,
            "explain": "Potensio = analog."
          },
          {
            "type": "mc",
            "q": "Untuk menggerakkan servo dipakai…",
            "options": [
              "analogWrite(servo)",
              "digitalWrite(servo)",
              "tone(servo)",
              "myservo.write(sudut)"
            ],
            "a": 3,
            "explain": "write() khusus servo."
          },
          {
            "type": "mc",
            "q": "map() antara potensio dan servo mengubah rentang…",
            "options": [
              "0–1023 → 0–180",
              "0–255 → 0–180",
              "0–180 → 0–1023",
              "0–1023 → 0–255"
            ],
            "a": 0,
            "explain": "ADC ke derajat."
          },
          {
            "type": "fill",
            "q": "Petakan potensio ke sudut servo:\nint sudut = map(analogRead(A0), 0, 1023, 0, ___);",
            "code": "int sudut = map(analogRead(A0), 0, 1023, 0, ___);",
            "accept": [
              "180"
            ],
            "explain": "Sudut servo 0–180."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Potensio A0 mengatur sudut servo di pin 9 (0–180 derajat).",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "serialLines": 1
            },
            "solution": "#include <Servo.h>\nServo myservo;\nvoid setup() {\n  myservo.attach(9);\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  int sudut = map(nilai, 0, 1023, 0, 180);\n  myservo.write(sudut);\n  Serial.println(sudut);\n  delay(20);\n}",
            "explain": "#include <Servo.h>\nServo myservo;\nvoid setup() {\n  myservo.attach(9);\n  Serial.begin(9600);\n}\nvoid loop() {\n  int nilai = analogRead(A0);\n  int sudut = map(nilai, 0, 1023, 0, 180);\n  myservo.write(sudut);\n  Serial.println(sudut);\n  delay(20);\n}",
            "simOptions": {
              "durationMs": 300,
              "analog": {
                "A0": 512
              }
            }
          },
          {
            "type": "mc",
            "q": "Jika servo bergerak acak, periksa…",
            "options": [
              "warna kabel",
              "daya dan GND bersama",
              "baud rate",
              "panjang kode"
            ],
            "a": 1,
            "explain": "Daya/GND tidak stabil → gerak acak."
          },
          {
            "type": "mc",
            "q": "Urutan logika program yang benar adalah…",
            "options": [
              "keluaran → baca",
              "hanya keluaran",
              "baca masukan → hitung → keluaran",
              "acak"
            ],
            "a": 2,
            "explain": "Baca dulu, baru bertindak."
          },
          {
            "type": "mc",
            "q": "delay() yang terlalu lama pada loop membuat servo…",
            "options": [
              "lebih halus",
              "berputar cepat",
              "mati",
              "terasa tersendat"
            ],
            "a": 3,
            "explain": "delay menghambat pembaruan posisi."
          },
          {
            "type": "mc",
            "q": "Untuk hasil halus, servo sebaiknya diperbarui…",
            "options": [
              "sesering mungkin tanpa delay besar",
              "sekali saja",
              "tiap 5 detik",
              "hanya di setup"
            ],
            "a": 0,
            "explain": "Perbarui cepat agar halus."
          }
        ]
      },
      {
        "id": "arduino-19",
        "level": "Advance",
        "title": "Non-blocking dengan millis()",
        "exercises": [
          {
            "type": "mc",
            "q": "Fungsi mengembalikan waktu sejak Arduino menyala adalah…",
            "options": [
              "micros()",
              "millis()",
              "delay()",
              "time()"
            ],
            "a": 1,
            "explain": "millis() dalam milidetik."
          },
          {
            "type": "mc",
            "q": "Masalah utama delay() adalah…",
            "options": [
              "memakan memori",
              "merusak pin",
              "memblokir seluruh program",
              "mengubah baud"
            ],
            "a": 2,
            "explain": "delay menghentikan eksekusi lain."
          },
          {
            "type": "mc",
            "q": "Pola blink tanpa delay memakai…",
            "options": [
              "delay() besar",
              "tone()",
              "pinMode()",
              "millis() dan selisih waktu"
            ],
            "a": 3,
            "explain": "millis() memungkinkan multitasking."
          },
          {
            "type": "mc",
            "q": "Perbandingan waktu yang aman terhadap rollover adalah…",
            "options": [
              "millis() - sebelumnya >= interval",
              "millis() > interval",
              "millis() == interval",
              "millis() + interval"
            ],
            "a": 0,
            "explain": "Selisih aman saat millis() kembali ke 0."
          },
          {
            "type": "fill",
            "q": "Cek interval 500 ms dengan aman:\nif (millis() - sebelumnya >= ___) {\n  sebelumnya = millis();\n}",
            "code": "if (millis() - sebelumnya >= ___) {\n  sebelumnya = millis();\n}",
            "accept": [
              "500"
            ],
            "explain": "Interval 500 ms."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Kedipkan LED pin 13 tiap 500 ms TANPA delay(), memakai millis().",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "digitalToggled": 13
            },
            "solution": "unsigned long sebelumnya = 0;\nbool nyala = false;\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (millis() - sebelumnya >= 500) {\n    sebelumnya = millis();\n    nyala = !nyala;\n    digitalWrite(13, nyala ? HIGH : LOW);\n  }\n}",
            "explain": "unsigned long sebelumnya = 0;\nbool nyala = false;\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  if (millis() - sebelumnya >= 500) {\n    sebelumnya = millis();\n    nyala = !nyala;\n    digitalWrite(13, nyala ? HIGH : LOW);\n  }\n}",
            "simOptions": {
              "durationMs": 2200
            }
          },
          {
            "type": "mc",
            "q": "millis() akan kembali ke 0 setelah kira-kira…",
            "options": [
              "1 jam",
              "49,7 hari",
              "1 tahun",
              "1 menit"
            ],
            "a": 1,
            "explain": "Rollover unsigned long ±49,7 hari."
          },
          {
            "type": "mc",
            "q": "Tipe yang tepat menyimpan millis() adalah…",
            "options": [
              "int",
              "byte",
              "float",
              "unsigned long"
            ],
            "a": 3,
            "explain": "int 16-bit terlalu kecil."
          },
          {
            "type": "mc",
            "q": "Dengan millis(), tombol tetap responsif karena…",
            "options": [
              "delay lebih cepat",
              "PWM mati",
              "loop tidak pernah diblokir",
              "Serial lambat"
            ],
            "a": 2,
            "explain": "Loop terus berjalan."
          },
          {
            "type": "mc",
            "q": "Yang perlu disimpan antar-putaran loop pada pola millis() adalah…",
            "options": [
              "pinMode",
              "waktu terakhir (variabel global)",
              "baud rate",
              "warna LED"
            ],
            "a": 1,
            "explain": "Simpan waktu terakhir di variabel global."
          }
        ]
      },
      {
        "id": "arduino-20",
        "level": "Advance",
        "title": "Membuat Fungsi Sendiri",
        "exercises": [
          {
            "type": "mc",
            "q": "Membuat fungsi bernama kedip dengan parameter pin ditulis…",
            "options": [
              "void kedip(int pin) { }",
              "function kedip(pin) { }",
              "kedip(int pin) { }",
              "def kedip(pin):"
            ],
            "a": 0,
            "explain": "Tipe balik + nama + parameter."
          },
          {
            "type": "mc",
            "q": "Kata kunci untuk fungsi tanpa nilai balik adalah…",
            "options": [
              "int",
              "return",
              "null",
              "void"
            ],
            "a": 3,
            "explain": "void = tidak mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Kata kunci mengembalikan nilai adalah…",
            "options": [
              "void",
              "break",
              "return",
              "yield"
            ],
            "a": 2,
            "explain": "return mengembalikan nilai."
          },
          {
            "type": "mc",
            "q": "Fungsi yang mengembalikan angka memakai tipe balik…",
            "options": [
              "void",
              "int",
              "String",
              "boolean"
            ],
            "a": 1,
            "explain": "int untuk bilangan bulat."
          },
          {
            "type": "fill",
            "q": "Buat fungsi tanpa nilai balik bernama siap:\n___ siap() {\n  Serial.println(\"Siap\");\n}",
            "code": "___ siap() {\n  Serial.println(\"Siap\");\n}",
            "accept": [
              "void"
            ],
            "explain": "void siap()."
          },
          {
            "type": "fill",
            "q": "Kembalikan hasil dari fungsi:\nint duaKali(int x) {\n  ___ x * 2;\n}",
            "code": "int duaKali(int x) {\n  ___ x * 2;\n}",
            "accept": [
              "return"
            ],
            "explain": "return x * 2;"
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Buat fungsi nyalaKedip(pin) yang menyalakan pin, delay 200 ms, lalu mematikan. Panggil untuk pin 13.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "digitalToggled": 13
            },
            "solution": "void nyalaKedip(int pin) {\n  digitalWrite(pin, HIGH);\n  delay(200);\n  digitalWrite(pin, LOW);\n}\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  nyalaKedip(13);\n  delay(300);\n}",
            "explain": "void nyalaKedip(int pin) {\n  digitalWrite(pin, HIGH);\n  delay(200);\n  digitalWrite(pin, LOW);\n}\nvoid setup() {\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  nyalaKedip(13);\n  delay(300);\n}",
            "simOptions": {
              "durationMs": 500
            }
          },
          {
            "type": "mc",
            "q": "Manfaat membuat fungsi sendiri adalah…",
            "options": [
              "kode bisa dipakai ulang dan lebih rapi",
              "mempercepat CPU",
              "menambah memori",
              "mengubah tegangan"
            ],
            "a": 0,
            "explain": "Fungsi = pakai ulang + keterbacaan."
          },
          {
            "type": "mc",
            "q": "Fungsi harus dideklarasikan…",
            "options": [
              "di dalam loop saja",
              "setelah dipakai",
              "di dalam delay",
              "sebelum dipakai, atau diberi prototipe"
            ],
            "a": 3,
            "explain": "Deklarasi sebelum pemakaian."
          },
          {
            "type": "mc",
            "q": "Parameter fungsi berfungsi untuk…",
            "options": [
              "menyimpan konstanta",
              "mengatur baud",
              "menerima nilai masukan",
              "menyalakan LED"
            ],
            "a": 2,
            "explain": "Parameter = masukan fungsi."
          }
        ]
      },
      {
        "id": "arduino-21",
        "level": "Advance",
        "title": "Array & Pola LED",
        "exercises": [
          {
            "type": "mc",
            "q": "Array menyimpan…",
            "options": [
              "satu nilai",
              "banyak nilai bertipe sama",
              "fungsi",
              "pin"
            ],
            "a": 1,
            "explain": "Array = kumpulan nilai sejenis."
          },
          {
            "type": "mc",
            "q": "Deklarasi array 5 angka ditulis…",
            "options": [
              "int a[5];",
              "int a;",
              "array a(5);",
              "a[5] int;"
            ],
            "a": 0,
            "explain": "int a[5];"
          },
          {
            "type": "mc",
            "q": "Indeks valid array berukuran 5 adalah…",
            "options": [
              "1 sampai 5",
              "0 sampai 5",
              "1 sampai 4",
              "0 sampai 4"
            ],
            "a": 3,
            "explain": "Indeks 0..n-1."
          },
          {
            "type": "mc",
            "q": "Mengakses di luar batas array menyebabkan…",
            "options": [
              "otomatis membesar",
              "aman saja",
              "perilaku tak terduga (UB)",
              "error jelas"
            ],
            "a": 2,
            "explain": "Out-of-bounds = undefined behavior."
          },
          {
            "type": "mc",
            "q": "Untuk mengulang seluruh elemen array dipakai…",
            "options": [
              "if",
              "for dengan indeks",
              "switch",
              "delay"
            ],
            "a": 1,
            "explain": "for mengiterasi indeks."
          },
          {
            "type": "fill",
            "q": "Baca panjang pola dengan indeks i:\ndigitalWrite(pins[___], HIGH); // elemen pertama",
            "code": "digitalWrite(pins[___], HIGH); // elemen pertama",
            "accept": [
              "0"
            ],
            "explain": "Elemen pertama indeks 0."
          },
          {
            "type": "mc",
            "q": "Pola LED berjalan (knight rider) dibuat dengan…",
            "options": [
              "menyalakan satu LED bergiliran",
              "semua LED sekaligus",
              "tone()",
              "Serial"
            ],
            "a": 0,
            "explain": "Satu LED aktif bergeser."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Array pins berisi {3,5,6}. Nyalakan bergiliran: pin 3 HIGH, lalu 5, lalu 6, dengan delay 100 ms.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 3,
              "mode": "OUTPUT"
            },
            "solution": "int pins[3] = {3, 5, 6};\nvoid setup() {\n  for (int i = 0; i < 3; i++) {\n    pinMode(pins[i], OUTPUT);\n  }\n}\nvoid loop() {\n  for (int i = 0; i < 3; i++) {\n    digitalWrite(pins[i], HIGH);\n    delay(100);\n    digitalWrite(pins[i], LOW);\n  }\n}",
            "explain": "int pins[3] = {3, 5, 6};\nvoid setup() {\n  for (int i = 0; i < 3; i++) {\n    pinMode(pins[i], OUTPUT);\n  }\n}\nvoid loop() {\n  for (int i = 0; i < 3; i++) {\n    digitalWrite(pins[i], HIGH);\n    delay(100);\n    digitalWrite(pins[i], LOW);\n  }\n}",
            "simOptions": {
              "durationMs": 800
            }
          },
          {
            "type": "mc",
            "q": "sizeof(array)/sizeof(array[0]) dipakai untuk…",
            "options": [
              "menghitung jumlah elemen",
              "menghapus array",
              "menambah elemen",
              "mengubah tipe"
            ],
            "a": 0,
            "explain": "Menghitung panjang array C."
          },
          {
            "type": "mc",
            "q": "Pada Arduino, array berukuran tetap — untuk data dinamis sebaiknya…",
            "options": [
              "biarkan kosong",
              "tentukan ukuran maksimum sejak awal",
              "pakai tone",
              "pakai delay"
            ],
            "a": 1,
            "explain": "Hindari alokasi dinamis di mikrokontroler."
          }
        ]
      },
      {
        "id": "arduino-22",
        "level": "Advance",
        "title": "State Machine & Debounce",
        "exercises": [
          {
            "type": "mc",
            "q": "State machine adalah pola dengan…",
            "options": [
              "hanya satu kondisi",
              "tanpa percabangan",
              "kondisi/keadaan yang terdefinisi",
              "delay besar"
            ],
            "a": 2,
            "explain": "Program berpindah antar-state."
          },
          {
            "type": "mc",
            "q": "Debounce diperlukan karena tombol mekanik…",
            "options": [
              "terlalu lambat",
              "tidak bisa dibaca",
              "butuh PWM",
              "memantul (bouncing) saat ditekan"
            ],
            "a": 3,
            "explain": "Bouncing menghasilkan banyak sinyal."
          },
          {
            "type": "mc",
            "q": "Debounce sederhana dapat memakai…",
            "options": [
              "delay singkat atau millis()",
              "tone()",
              "analogWrite",
              "Serial.begin"
            ],
            "a": 0,
            "explain": "Tunggu stabil sebelum membaca."
          },
          {
            "type": "mc",
            "q": "Menambahkan pembacaan sebelumnya berguna untuk…",
            "options": [
              "menambah PWM",
              "mendeteksi perubahan state (tepi)",
              "mengubah baud",
              "menghemat daya"
            ],
            "a": 1,
            "explain": "Deteksi tepi = perubahan nilai."
          },
          {
            "type": "fill",
            "q": "Deteksi tombol baru ditekan:\nif (sekarang == LOW && sebelumnya == ___) { }",
            "code": "if (sekarang == LOW && sebelumnya == ___) { }",
            "accept": [
              "HIGH"
            ],
            "explain": "Tepi turun: HIGH → LOW."
          },
          {
            "type": "mc",
            "q": "State machine membuat kode lebih…",
            "options": [
              "panjang tanpa alasan",
              "lambat",
              "mudah dirawat dan diperluas",
              "tidak terbaca"
            ],
            "a": 2,
            "explain": "State jelas = mudah dirawat."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Kedipkan LED hanya saat tombol BARU ditekan (deteksi tepi), pakai millis() 200 ms untuk debounce.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 2,
              "mode": "INPUT_PULLUP"
            },
            "solution": "int sebelumnya = HIGH;\nunsigned long terakhir = 0;\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  int sekarang = digitalRead(2);\n  if (sekarang == LOW && sebelumnya == HIGH && millis() - terakhir > 200) {\n    terakhir = millis();\n    digitalWrite(13, !digitalRead(13));\n  }\n  sebelumnya = sekarang;\n}",
            "explain": "int sebelumnya = HIGH;\nunsigned long terakhir = 0;\nvoid setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n}\nvoid loop() {\n  int sekarang = digitalRead(2);\n  if (sekarang == LOW && sebelumnya == HIGH && millis() - terakhir > 200) {\n    terakhir = millis();\n    digitalWrite(13, !digitalRead(13));\n  }\n  sebelumnya = sekarang;\n}",
            "simOptions": {
              "durationMs": 600,
              "buttons": {
                "2": false
              }
            }
          },
          {
            "type": "mc",
            "q": "Variabel state sebaiknya dideklarasikan…",
            "options": [
              "di dalam loop",
              "di dalam delay",
              "di dalam if",
              "global agar bertahan antar-loop"
            ],
            "a": 3,
            "explain": "State harus bertahan antar-iterasi."
          },
          {
            "type": "mc",
            "q": "Jumlah state pada lampu lalu lintas sederhana adalah…",
            "options": [
              "3 (merah, kuning, hijau)",
              "1",
              "2",
              "4"
            ],
            "a": 0,
            "explain": "Merah, kuning, hijau."
          },
          {
            "type": "mc",
            "q": "Keuntungan debounce berbasis millis() dibanding delay() adalah…",
            "options": [
              "lebih sederhana",
              "tidak memblokir program",
              "tidak perlu variabel",
              "lebih cepat"
            ],
            "a": 1,
            "explain": "Non-blocking lebih responsif."
          }
        ]
      },
      {
        "id": "arduino-23",
        "level": "Advance",
        "title": "Debugging & Kesalahan Umum",
        "exercises": [
          {
            "type": "mc",
            "q": "Pesan \"expected ';' before ...\" menunjukkan…",
            "options": [
              "pin rusak",
              "baud salah",
              "kurang titik koma",
              "LED terbalik"
            ],
            "a": 2,
            "explain": "Sintaks: titik koma hilang."
          },
          {
            "type": "mc",
            "q": "Kesalahan kapitalisasi seperti digitalwrite menyebabkan…",
            "options": [
              "program jalan normal",
              "LED redup",
              "Serial cepat",
              "fungsi tidak dikenali"
            ],
            "a": 3,
            "explain": "C++ case-sensitive."
          },
          {
            "type": "mc",
            "q": "Pesan \"not declared in this scope\" berarti…",
            "options": [
              "variabel dipakai di luar jangkauan",
              "pin rusak",
              "baud salah",
              "PWM mati"
            ],
            "a": 0,
            "explain": "Scope/penulisan nama salah."
          },
          {
            "type": "mc",
            "q": "Serial Monitor menampilkan karakter aneh. Penyebab paling mungkin…",
            "options": [
              "kabel data rusak",
              "baud rate tidak cocok",
              "LED terbalik",
              "PWM salah"
            ],
            "a": 1,
            "explain": "Samakan baud di kode dan monitor."
          },
          {
            "type": "mc",
            "q": "Pin sudah digitalWrite HIGH tapi LED tidak menyala. Periksa…",
            "options": [
              "baud rate",
              "delay",
              "pinMode OUTPUT, polaritas, resistor",
              "tone"
            ],
            "a": 2,
            "explain": "Periksa mode, polaritas, dan jalur arus."
          },
          {
            "type": "fill",
            "q": "Perbaiki: fungsi yang harusnya dikenali:\npinMode(13, ___); // konstanta kapital",
            "code": "pinMode(13, ___); // konstanta kapital",
            "accept": [
              "OUTPUT"
            ],
            "explain": "Konstanta ditulis kapital: OUTPUT."
          },
          {
            "type": "mc",
            "q": "Menggunakan digitalWrite untuk PWM akan membuat LED…",
            "options": [
              "redup halus",
              "berkedip otomatis",
              "mati total",
              "hanya menyala/mati"
            ],
            "a": 3,
            "explain": "digitalWrite bukan PWM."
          },
          {
            "type": "mc",
            "q": "Program terlalu besar untuk RAM Arduino menyebabkan…",
            "options": [
              "lebih cepat",
              "perilaku aneh/restart",
              "lebih terang",
              "Serial lancar"
            ],
            "a": 1,
            "explain": "Kehabisan RAM = perilaku tak terduga."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Perbaiki: tombol pin 2 dengan pull-up menyalakan LED 13 saat DITEKAN, cetak \"OK\".",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pin": 2,
              "mode": "INPUT_PULLUP",
              "serialIncludes": "OK"
            },
            "solution": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n    Serial.println(\"OK\");\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "explain": "void setup() {\n  pinMode(2, INPUT_PULLUP);\n  pinMode(13, OUTPUT);\n  Serial.begin(9600);\n}\nvoid loop() {\n  if (digitalRead(2) == LOW) {\n    digitalWrite(13, HIGH);\n    Serial.println(\"OK\");\n  } else {\n    digitalWrite(13, LOW);\n  }\n  delay(50);\n}",
            "simOptions": {
              "durationMs": 300,
              "buttons": {
                "2": false
              }
            }
          },
          {
            "type": "mc",
            "q": "Cara paling efektif mencari bug adalah…",
            "options": [
              "cetak nilai antara ke Serial",
              "menambah delay besar",
              "mengganti semua kode",
              "menambah LED"
            ],
            "a": 0,
            "explain": "Log nilai = cara utama debug."
          }
        ]
      },
      {
        "id": "arduino-24",
        "level": "Advance",
        "title": "Membaca Datasheet & Library",
        "exercises": [
          {
            "type": "mc",
            "q": "Datasheet komponen berisi…",
            "options": [
              "warna kabel",
              "contoh soal",
              "baud rate",
              "spesifikasi teknis dan pin"
            ],
            "a": 3,
            "explain": "Datasheet = dokumen resmi spesifikasi."
          },
          {
            "type": "mc",
            "q": "Tegangan operasi sensor harus…",
            "options": [
              "selalu 12V",
              "tidak penting",
              "sesuai dengan Arduino (5V atau 3.3V)",
              "selalu 220V"
            ],
            "a": 2,
            "explain": "Salah tegangan = sensor rusak."
          },
          {
            "type": "mc",
            "q": "Arus maksimum per pin digital Arduino Uno kira-kira…",
            "options": [
              "500 mA",
              "20 mA (disarankan)",
              "5 A",
              "1 A"
            ],
            "a": 1,
            "explain": "Sekitar 20 mA kontinu per pin."
          },
          {
            "type": "mc",
            "q": "Untuk beban arus besar (motor) sebaiknya memakai…",
            "options": [
              "transistor/relay dan catu daya terpisah",
              "pin langsung",
              "LED",
              "resistor 220Ω saja"
            ],
            "a": 0,
            "explain": "Pin tidak boleh dibebani arus besar."
          },
          {
            "type": "mc",
            "q": "Menggunakan library diperlukan untuk…",
            "options": [
              "LED tunggal",
              "delay",
              "Serial",
              "perangkat kompleks seperti LCD/servo/DHT"
            ],
            "a": 3,
            "explain": "Library menyederhanakan perangkat kompleks."
          },
          {
            "type": "fill",
            "q": "Sertakan library servo:\n#include <___>",
            "code": "#include <___>",
            "accept": [
              "Servo.h"
            ],
            "explain": "#include <Servo.h>."
          },
          {
            "type": "mc",
            "q": "Pin 3.3V pada Arduino Uno maksimum arus kira-kira…",
            "options": [
              "1 A",
              "500 mA",
              "50 mA",
              "20 A"
            ],
            "a": 2,
            "explain": "Pin 3.3V hanya untuk arus kecil."
          },
          {
            "type": "mc",
            "q": "Datasheet menyebut \"operating voltage 3.3V\". Pada board Uno 5V, sebaiknya…",
            "options": [
              "langsung sambung 5V",
              "pakai pembagi tegangan/level shifter",
              "abaikan",
              "naikkan tegangan"
            ],
            "a": 1,
            "explain": "Sesuaikan level tegangan."
          },
          {
            "type": "mc",
            "q": "Contoh wiring di datasheet berguna untuk…",
            "options": [
              "menentukan sambungan pin yang benar",
              "mengganti kode",
              "mempercepat baud",
              "menambah PWM"
            ],
            "a": 0,
            "explain": "Contoh wiring = petunjuk sambungan."
          },
          {
            "type": "mc",
            "q": "Untuk mengukur arus pada rangkaian dipakai…",
            "options": [
              "multimeter paralel",
              "LED",
              "resistor",
              "multimeter diseri"
            ],
            "a": 3,
            "explain": "Arus diukur seri dengan beban."
          }
        ]
      },
      {
        "id": "arduino-25",
        "level": "Advance",
        "title": "Proyek Capstone: Alarm Jarak Parkir",
        "exercises": [
          {
            "type": "mc",
            "q": "Alarm parkir menggabungkan…",
            "options": [
              "hanya LED",
              "hanya Serial",
              "sensor jarak, buzzer, dan LED",
              "hanya tombol"
            ],
            "a": 2,
            "explain": "Ultrasonik + buzzer + LED."
          },
          {
            "type": "mc",
            "q": "Semakin dekat objek, buzzer sebaiknya…",
            "options": [
              "makin pelan",
              "semakin cepat/bunyi makin tinggi",
              "mati",
              "diam saja"
            ],
            "a": 1,
            "explain": "Makain dekat → makin mendesak."
          },
          {
            "type": "mc",
            "q": "Untuk mengubah jarak menjadi kekerapan bunyi dipakai…",
            "options": [
              "map() pada interval millis()",
              "delay saja",
              "tone tanpa map",
              "Serial"
            ],
            "a": 0,
            "explain": "map() menyesuaikan kecepatan."
          },
          {
            "type": "mc",
            "q": "Bila jarak < 10 cm, LED sebaiknya…",
            "options": [
              "mati",
              "berkedip warna",
              "dibiarkan",
              "menyala sebagai peringatan"
            ],
            "a": 3,
            "explain": "Indikator visual bahaya."
          },
          {
            "type": "mc",
            "q": "Untuk menghindari delay() pada buzzer berulang, gunakan…",
            "options": [
              "delay() besar",
              "while",
              "millis() sebagai pengatur waktu",
              "tone sekali"
            ],
            "a": 2,
            "explain": "millis() agar loop tetap responsif."
          },
          {
            "type": "wiring",
            "q": "Rakit prototipe alarm parkir:",
            "circuit": {
              "parts": [
                {
                  "k": "ultrasonic",
                  "pin": 9,
                  "label": "HC-SR04"
                },
                {
                  "k": "buzzer",
                  "pin": 8
                },
                {
                  "k": "led",
                  "pin": 7,
                  "color": "red",
                  "label": "LED"
                }
              ],
              "wires": [
                {
                  "from": "D9",
                  "to": "Trig",
                  "kind": "signal"
                },
                {
                  "from": "D10",
                  "to": "Echo",
                  "kind": "signal"
                },
                {
                  "from": "D8",
                  "to": "Buzzer",
                  "kind": "signal"
                },
                {
                  "from": "D7",
                  "to": "LED",
                  "kind": "signal"
                },
                {
                  "from": "GND",
                  "to": "GND bersama",
                  "kind": "gnd"
                }
              ],
              "note": "Semua komponen berbagi GND."
            },
            "slots": [
              {
                "id": "trig",
                "label": "Trig HC-SR04 ke",
                "options": [
                  "D9",
                  "D8",
                  "D7",
                  "A0"
                ],
                "a": "D9"
              },
              {
                "id": "buzzer",
                "label": "Buzzer ke",
                "options": [
                  "D8",
                  "D9",
                  "D10",
                  "5V"
                ],
                "a": "D8"
              },
              {
                "id": "led",
                "label": "LED peringatan ke",
                "options": [
                  "D7",
                  "D9",
                  "GND",
                  "VIN"
                ],
                "a": "D7"
              }
            ],
            "explain": "Trig D9, Echo D10, buzzer D8, LED D7."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Jika jarak kurang dari 20 cm, nyalakan LED pin 7 dan bunyikan buzzer pin 8 dengan tone 1000 Hz.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "digital": {
                "pin": 7,
                "value": true
              }
            },
            "solution": "int trig = 9;\nint echo = 10;\nvoid setup() {\n  pinMode(trig, OUTPUT);\n  pinMode(echo, INPUT);\n  pinMode(7, OUTPUT);\n  pinMode(8, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(trig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n  long durasi = pulseIn(echo, HIGH);\n  int jarak = durasi * 0.034 / 2;\n  if (jarak < 20) {\n    digitalWrite(7, HIGH);\n    tone(8, 1000);\n  } else {\n    digitalWrite(7, LOW);\n    noTone(8);\n  }\n  delay(50);\n}",
            "explain": "int trig = 9;\nint echo = 10;\nvoid setup() {\n  pinMode(trig, OUTPUT);\n  pinMode(echo, INPUT);\n  pinMode(7, OUTPUT);\n  pinMode(8, OUTPUT);\n}\nvoid loop() {\n  digitalWrite(trig, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(trig, LOW);\n  long durasi = pulseIn(echo, HIGH);\n  int jarak = durasi * 0.034 / 2;\n  if (jarak < 20) {\n    digitalWrite(7, HIGH);\n    tone(8, 1000);\n  } else {\n    digitalWrite(7, LOW);\n    noTone(8);\n  }\n  delay(50);\n}",
            "simOptions": {
              "durationMs": 400
            }
          },
          {
            "type": "mc",
            "q": "Bagian penting sebelum mengirim proyek ke papan adalah…",
            "options": [
              "langsung upload",
              "ganti kode lengkap",
              "uji bertahap tiap komponen",
              "hapus komentar"
            ],
            "a": 2,
            "explain": "Uji per komponen agar mudah menemukan masalah."
          },
          {
            "type": "mc",
            "q": "Jika hasil ultrasonik selalu 0, periksa…",
            "options": [
              "baud rate",
              "warna LED",
              "panjang kode",
              "kabel Trig/Echo dan daya"
            ],
            "a": 3,
            "explain": "Trig/Echo adalah sumber umum masalah."
          },
          {
            "type": "mc",
            "q": "Untuk memberi jeda antar pengukuran jarak dipakai…",
            "options": [
              "delay(50) atau millis()",
              "tone()",
              "Serial.print",
              "pinMode"
            ],
            "a": 0,
            "explain": "Ultrasonik butuh jeda antar-pulsa."
          }
        ]
      },
      {
        "id": "arduino-26",
        "level": "Dasar",
        "title": "Pinout & Membaca Papan",
        "exercises": [
          {
            "type": "mc",
            "q": "Kelompok pin untuk membaca sensor analog ada di sisi…",
            "options": [
              "kiri atas",
              "kanan bawah, A0–A5",
              "tengah",
              "bawah USB"
            ],
            "a": 1,
            "explain": "A0–A5 di sisi analog/power."
          },
          {
            "type": "mc",
            "q": "Pin yang memberi tegangan 5 volt adalah…",
            "options": [
              "VIN saja",
              "A5",
              "5V",
              "D13"
            ],
            "a": 2,
            "explain": "Pin 5V memberi catu 5V."
          },
          {
            "type": "mc",
            "q": "Pin VIN berfungsi untuk…",
            "options": [
              "membaca sensor",
              "PWM",
              "Serial",
              "memberi daya dari sumber eksternal"
            ],
            "a": 3,
            "explain": "VIN = tegangan masukan eksternal."
          },
          {
            "type": "mc",
            "q": "Pin GND pada Arduino Uno berjumlah…",
            "options": [
              "lebih dari satu (sekitar 3)",
              "hanya satu",
              "tidak ada",
              "enam"
            ],
            "a": 0,
            "explain": "Beberapa pin GND tersedia."
          },
          {
            "type": "mc",
            "q": "Pin bertanda ~ (PWM) berjumlah…",
            "options": [
              "14",
              "6 (3,5,6,9,10,11)",
              "2",
              "tidak ada"
            ],
            "a": 1,
            "explain": "Enam pin PWM."
          },
          {
            "type": "mc",
            "q": "Untuk menghubungkan kabel USB ke komputer digunakan port…",
            "options": [
              "HDMI",
              "jack audio",
              "USB tipe B",
              "microSD"
            ],
            "a": 2,
            "explain": "Arduino Uno memakai USB tipe B."
          },
          {
            "type": "mc",
            "q": "Arduino Uno memakai mikrokontroler…",
            "options": [
              "ESP32",
              "RP2040",
              "STM32",
              "ATmega328P"
            ],
            "a": 3,
            "explain": "Uno = ATmega328P."
          },
          {
            "type": "mc",
            "q": "Pin RESET berfungsi untuk…",
            "options": [
              "mengulang program dari awal",
              "memberi daya",
              "PWM",
              "analog"
            ],
            "a": 0,
            "explain": "Reset menjalankan ulang setup()."
          },
          {
            "type": "fill",
            "q": "Nama pin LED bawaan pada papan:",
            "code": "const int led = ___;",
            "accept": [
              "LED_BUILTIN",
              "13"
            ],
            "explain": "LED_BUILTIN = 13."
          },
          {
            "type": "mc",
            "q": "Arduino Nano umumnya dipakai karena…",
            "options": [
              "lebih cepat",
              "ukurannya lebih kecil",
              "lebih banyak analog",
              "tanpa USB"
            ],
            "a": 1,
            "explain": "Nano = versi kecil Uno."
          }
        ]
      },
      {
        "id": "arduino-27",
        "level": "Menengah",
        "title": "RGB LED & Warna",
        "exercises": [
          {
            "type": "mc",
            "q": "RGB LED terdiri dari…",
            "options": [
              "satu LED putih",
              "dua LED",
              "tiga LED: merah, hijau, biru",
              "layar kecil"
            ],
            "a": 2,
            "explain": "Tiga warna dasar dicampur."
          },
          {
            "type": "mc",
            "q": "RGB LED membutuhkan pin…",
            "options": [
              "hanya satu pin digital",
              "pin analog saja",
              "VIN",
              "bertanda ~ (PWM) untuk tiap warna"
            ],
            "a": 3,
            "explain": "PWM mengatur intensitas tiap warna."
          },
          {
            "type": "mc",
            "q": "analogWrite(9,255); analogWrite(10,0); analogWrite(11,0) menghasilkan warna…",
            "options": [
              "merah",
              "hijau",
              "biru",
              "putih"
            ],
            "a": 0,
            "explain": "Hanya channel merah penuh."
          },
          {
            "type": "mc",
            "q": "Ketiga channel pada 255 menghasilkan…",
            "options": [
              "hitam",
              "putih",
              "merah",
              "biru"
            ],
            "a": 1,
            "explain": "Campuran penuh = putih."
          },
          {
            "type": "mc",
            "q": "RGB LED common cathode berarti kaki bersama ke…",
            "options": [
              "5V",
              "A0",
              "D2",
              "GND"
            ],
            "a": 3,
            "explain": "Common cathode = kaki bersama ke GND."
          },
          {
            "type": "fill",
            "q": "Set kanal merah penuh di pin 9:",
            "code": "analogWrite(9, ___);",
            "accept": [
              "255"
            ],
            "explain": "255 = penuh."
          },
          {
            "type": "mc",
            "q": "Untuk membuat oranye, campuran warna yang tepat adalah…",
            "options": [
              "hijau penuh",
              "biru penuh",
              "merah penuh + sedikit hijau",
              "merah + biru"
            ],
            "a": 2,
            "explain": "Oranye = merah dominan + hijau."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Nyalakan RGB LED di pin 9, 10, 11 menjadi warna kuning (merah 255, hijau 255, biru 0).",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pwm": {
                "pin": 9,
                "eq": 255
              }
            },
            "solution": "void setup() {\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);\n  pinMode(11, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 255);\n  analogWrite(10, 255);\n  analogWrite(11, 0);\n  delay(500);\n}",
            "explain": "void setup() {\n  pinMode(9, OUTPUT);\n  pinMode(10, OUTPUT);\n  pinMode(11, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 255);\n  analogWrite(10, 255);\n  analogWrite(11, 0);\n  delay(500);\n}",
            "simOptions": {
              "durationMs": 300
            }
          },
          {
            "type": "wiring",
            "q": "Rakit RGB LED ke tiga pin PWM:",
            "circuit": {
              "parts": [
                {
                  "k": "led",
                  "pin": 9,
                  "color": "red",
                  "label": "RGB LED"
                }
              ],
              "wires": [
                {
                  "from": "D9",
                  "to": "Merah",
                  "kind": "signal"
                },
                {
                  "from": "D10",
                  "to": "Hijau",
                  "kind": "signal"
                },
                {
                  "from": "D11",
                  "to": "Biru",
                  "kind": "signal"
                },
                {
                  "from": "GND",
                  "to": "Kaki bersama",
                  "kind": "gnd"
                }
              ],
              "note": "Tiap channel butuh resistor 220Ω."
            },
            "slots": [
              {
                "id": "merah",
                "label": "Kanal merah ke",
                "options": [
                  "D9",
                  "D2",
                  "A0",
                  "GND"
                ],
                "a": "D9"
              },
              {
                "id": "biru",
                "label": "Kanal biru ke",
                "options": [
                  "D11",
                  "D12",
                  "5V",
                  "A1"
                ],
                "a": "D11"
              }
            ],
            "explain": "Tiap kanal ke pin PWM, kaki bersama ke GND."
          },
          {
            "type": "mc",
            "q": "Jika warna yang muncul tidak sesuai, kemungkinan…",
            "options": [
              "baud salah",
              "urutan kabel kanal tertukar",
              "delay terlalu kecil",
              "resistor terlalu besar"
            ],
            "a": 1,
            "explain": "Periksa urutan kanal R/G/B."
          }
        ]
      },
      {
        "id": "arduino-28",
        "level": "Advance",
        "title": "EEPROM & Menyimpan Data",
        "exercises": [
          {
            "type": "mc",
            "q": "EEPROM pada Arduino digunakan untuk…",
            "options": [
              "menyimpan data meski daya mati",
              "menambah RAM",
              "PWM",
              "Serial"
            ],
            "a": 0,
            "explain": "EEPROM = memori non-volatile kecil."
          },
          {
            "type": "mc",
            "q": "Library untuk EEPROM adalah…",
            "options": [
              "<Flash.h>",
              "<SD.h>",
              "<Memory.h>",
              "<EEPROM.h>"
            ],
            "a": 3,
            "explain": "EEPROM.h."
          },
          {
            "type": "mc",
            "q": "Perintah menulis byte ke EEPROM adalah…",
            "options": [
              "EEPROM.save()",
              "EEPROM.set()",
              "EEPROM.write(alamat, nilai)",
              "EEPROM.put()"
            ],
            "a": 2,
            "explain": "write(alamat, nilai)."
          },
          {
            "type": "mc",
            "q": "Perintah membaca EEPROM adalah…",
            "options": [
              "EEPROM.load()",
              "EEPROM.read(alamat)",
              "EEPROM.get()",
              "EEPROM.value()"
            ],
            "a": 1,
            "explain": "read(alamat)."
          },
          {
            "type": "mc",
            "q": "Ukuran EEPROM pada ATmega328P adalah…",
            "options": [
              "1 KB (1024 byte)",
              "32 KB",
              "256 byte",
              "16 MB"
            ],
            "a": 0,
            "explain": "1 KB EEPROM."
          },
          {
            "type": "fill",
            "q": "Baca nilai dari EEPROM alamat 0:",
            "code": "byte v = EEPROM.___(0);",
            "accept": [
              "read"
            ],
            "explain": "EEPROM.read(0)."
          },
          {
            "type": "mc",
            "q": "EEPROM memiliki batas jumlah siklus tulis sekitar…",
            "options": [
              "tak terbatas",
              "100 kali",
              "10 juta",
              "100.000 kali"
            ],
            "a": 3,
            "explain": "Batasi penulisan agar awet."
          },
          {
            "type": "mc",
            "q": "Untuk menyimpan nilai besar (int/float) sebaiknya memakai…",
            "options": [
              "write/read byte saja",
              "Serial",
              "EEPROM.put()/get()",
              "analogWrite"
            ],
            "a": 2,
            "explain": "put/get menangani banyak byte."
          },
          {
            "type": "mc",
            "q": "Pola umum menyimpan setelan adalah…",
            "options": [
              "tulis tiap loop",
              "baca EEPROM saat setup, tulis saat berubah",
              "hapus tiap loop",
              "tidak disimpan"
            ],
            "a": 1,
            "explain": "Hindari menulis tiap loop."
          },
          {
            "type": "mc",
            "q": "EEPROM cocok untuk menyimpan…",
            "options": [
              "nilai kalibrasi atau setelan kecil",
              "gambar besar",
              "video",
              "audio panjang"
            ],
            "a": 0,
            "explain": "Hanya data kecil."
          }
        ]
      },
      {
        "id": "arduino-29",
        "level": "Advance",
        "title": "Komunikasi I2C & SPI",
        "exercises": [
          {
            "type": "mc",
            "q": "I2C memakai dua kabel sinyal yaitu…",
            "options": [
              "TX dan RX",
              "MOSI dan MISO",
              "Trig dan Echo",
              "SDA dan SCL"
            ],
            "a": 3,
            "explain": "I2C = SDA (data) + SCL (clock)."
          },
          {
            "type": "mc",
            "q": "Pin I2C pada Arduino Uno berada di…",
            "options": [
              "D0 dan D1",
              "D9 dan D10",
              "A4 (SDA) dan A5 (SCL)",
              "A0 dan A1"
            ],
            "a": 2,
            "explain": "Uno: A4=SDA, A5=SCL."
          },
          {
            "type": "mc",
            "q": "SPI memakai empat kabel utama yaitu…",
            "options": [
              "SDA, SCL",
              "MOSI, MISO, SCK, SS",
              "TX, RX",
              "Trig, Echo"
            ],
            "a": 1,
            "explain": "SPI 4-wire."
          },
          {
            "type": "mc",
            "q": "Perangkat I2C dibedakan berdasarkan…",
            "options": [
              "alamat (address)",
              "warna kabel",
              "baud rate",
              "panjang kabel"
            ],
            "a": 0,
            "explain": "Tiap perangkat punya alamat unik."
          },
          {
            "type": "mc",
            "q": "Library untuk LCD I2C biasanya…",
            "options": [
              "<LiquidCrystal_I2C.h>",
              "<LiquidCrystal.h>",
              "<LCD.h>",
              "<I2C.h>"
            ],
            "a": 0,
            "explain": "LiquidCrystal_I2C."
          },
          {
            "type": "fill",
            "q": "Sertakan library Wire untuk I2C:",
            "code": "#include <___>",
            "accept": [
              "Wire.h"
            ],
            "explain": "#include <Wire.h>."
          },
          {
            "type": "mc",
            "q": "Keuntungan I2C dibanding paralel adalah…",
            "options": [
              "lebih cepat selalu",
              "cukup 2 kabel untuk banyak perangkat",
              "tanpa daya",
              "tanpa alamat"
            ],
            "a": 1,
            "explain": "Hemat pin."
          },
          {
            "type": "mc",
            "q": "Banyak modul I2C butuh resistor pull-up pada…",
            "options": [
              "VCC",
              "GND",
              "SDA dan SCL",
              "MOSI"
            ],
            "a": 2,
            "explain": "Pull-up menjaga level sinyal."
          },
          {
            "type": "mc",
            "q": "Perangkat I2C 3.3V pada Arduino 5V sebaiknya…",
            "options": [
              "langsung sambung",
              "abaikan",
              "naikkan tegangan",
              "pakai level shifter"
            ],
            "a": 3,
            "explain": "Sesuaikan level tegangan."
          },
          {
            "type": "mc",
            "q": "Perangkat I2C tidak terdeteksi. Alat bantu yang berguna adalah…",
            "options": [
              "I2C scanner",
              "multimeter arus",
              "LED",
              "tone"
            ],
            "a": 0,
            "explain": "Scanner memeriksa alamat."
          }
        ]
      },
      {
        "id": "arduino-30",
        "level": "Advance",
        "title": "Optimasi Memori & RAM",
        "exercises": [
          {
            "type": "mc",
            "q": "RAM pada ATmega328P sebesar…",
            "options": [
              "32 KB",
              "2 KB",
              "1 MB",
              "512 byte"
            ],
            "a": 1,
            "explain": "2 KB SRAM."
          },
          {
            "type": "mc",
            "q": "Flash pada ATmega328P sebesar…",
            "options": [
              "2 KB",
              "1 MB",
              "32 KB",
              "512 byte"
            ],
            "a": 2,
            "explain": "32 KB flash untuk program."
          },
          {
            "type": "mc",
            "q": "String literal panjang sebaiknya disimpan di…",
            "options": [
              "RAM",
              "EEPROM saja",
              "stack",
              "memori flash dengan makro F()"
            ],
            "a": 3,
            "explain": "F(\"...\") menghemat RAM."
          },
          {
            "type": "mc",
            "q": "Fungsi F() berguna untuk…",
            "options": [
              "menyimpan string di flash",
              "mempercepat Serial",
              "PWM",
              "reset"
            ],
            "a": 0,
            "explain": "F() menaruh literal di flash."
          },
          {
            "type": "mc",
            "q": "Penggunaan objek String dinamis berisiko…",
            "options": [
              "warna salah",
              "fragmentasi memori",
              "baud salah",
              "pin rusak"
            ],
            "a": 1,
            "explain": "Hindari String dinamis pada RAM kecil."
          },
          {
            "type": "fill",
            "q": "Cetak string dari flash memori:",
            "code": "Serial.println(F(___));",
            "accept": [
              "\"Halo\""
            ],
            "explain": "F(\"Halo\") menyimpan di flash."
          },
          {
            "type": "mc",
            "q": "Variabel global yang besar sebaiknya…",
            "options": [
              "ditambah",
              "dibiarkan",
              "dikurangi atau dipindah ke flash",
              "dihapus semua"
            ],
            "a": 2,
            "explain": "Hemat RAM."
          },
          {
            "type": "mc",
            "q": "Untuk melihat sisa RAM dapat memakai…",
            "options": [
              "Serial.begin",
              "tone()",
              "delay()",
              "fungsi bantu freeRam()"
            ],
            "a": 3,
            "explain": "Fungsi bantu memperkirakan sisa RAM."
          },
          {
            "type": "mc",
            "q": "Jika RAM habis, gejala yang muncul adalah…",
            "options": [
              "restart atau perilaku aneh",
              "LED lebih terang",
              "Serial cepat",
              "PWM halus"
            ],
            "a": 0,
            "explain": "RAM habis = tidak stabil."
          },
          {
            "type": "mc",
            "q": "Tipe data paling hemat untuk nilai 0–255 adalah…",
            "options": [
              "int",
              "byte",
              "long",
              "float"
            ],
            "a": 1,
            "explain": "byte = 1 byte."
          }
        ]
      },
      {
        "id": "arduino-31",
        "level": "Advance",
        "title": "Master Review Arduino",
        "exercises": [
          {
            "type": "mc",
            "q": "Fungsi setup() dijalankan…",
            "options": [
              "setiap loop",
              "saat tombol ditekan",
              "sekali saat papan menyala/reset",
              "tidak pernah"
            ],
            "a": 2,
            "explain": "setup() sekali; loop() berulang."
          },
          {
            "type": "mc",
            "q": "analogWrite memakai rentang…",
            "options": [
              "0–1023 semua pin",
              "0–5",
              "0–100",
              "0–255 pada pin PWM"
            ],
            "a": 3,
            "explain": "PWM 8-bit pada pin bertanda ~."
          },
          {
            "type": "mc",
            "q": "Perbedaan delay() dan millis() yang esensial adalah…",
            "options": [
              "millis lebih lambat",
              "delay memblokir, millis tidak",
              "delay lebih akurat",
              "tidak ada beda"
            ],
            "a": 1,
            "explain": "millis memungkinkan non-blocking."
          },
          {
            "type": "code",
            "sim": "arduino",
            "q": "Sketsa: LED pin 9 berkedip dengan kecerahan bergantian 50 lalu 200 tiap 300 ms.",
            "starter": "void setup() {\n  // tulis di sini\n}\n\nvoid loop() {\n  // tulis di sini\n}",
            "expect": {
              "pwm": {
                "pin": 9
              },
              "pin": 9,
              "mode": "OUTPUT"
            },
            "solution": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 50);\n  delay(300);\n  analogWrite(9, 200);\n  delay(300);\n}",
            "explain": "void setup() {\n  pinMode(9, OUTPUT);\n}\nvoid loop() {\n  analogWrite(9, 50);\n  delay(300);\n  analogWrite(9, 200);\n  delay(300);\n}",
            "simOptions": {
              "durationMs": 800
            }
          },
          {
            "type": "mc",
            "q": "Dengan INPUT_PULLUP, tombol ditekan terbaca sebagai…",
            "options": [
              "LOW",
              "HIGH",
              "1023",
              "255"
            ],
            "a": 0,
            "explain": "Logika terbalik: LOW = ditekan."
          }
        ]
      }
    ]
  }
];

export { CONTENT_ARDUINO };
