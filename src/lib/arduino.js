/* CodeDuo — simulator sketsa Arduino (subset C++ → JS).
 *
 * Kenapa ada: soal `code` bawaan menjalankan JavaScript (new Function) sehingga
 * sketsa `void setup()` / `digitalWrite()` tidak bisa dieksekusi. Modul ini
 * menerjemahkan subset Arduino C++ yang dipakai pelajaran menjadi JS, lalu
 * menjalankannya terhadap "papan virtual" (pin, LED, PWM, Serial, potensio).
 *
 * Murni & deterministik: tanpa DOM, tanpa timer nyata — waktu dipercepat supaya
 * `delay(1000)` tidak benar-benar menunggu 1 detik. Aman dipakai di Node (test)
 * maupun browser (preview).
 */
'use strict';

/* ============================ Papan virtual ============================ */

/* Catatan pin yang bisa "hidup": nilai tiap pin digital + duty PWM-nya. */
function createBoard(opts) {
  const o = opts || {};
  return {
    pins: {},            /* pin -> { mode, digital, pwm } */
    serial: [],          /* baris output Serial */
    serialOpen: false,
    baud: 0,
    timeMs: 0,           /* waktu simulasi (ms) */
    analog: Object.assign({}, o.analog), /* A0..A5 -> 0..1023 (default) */
    tone: null,          /* { pin, freq, start } */
    errors: [],          /* kesalahan runtime (mis. pin salah) */
    log: [],             /* jejak kejadian: digitalWrite/analogWrite/tone */
    buttonStates: Object.assign({}, o.buttons), /* pin -> HIGH/LOW */
    maxSteps: o.maxSteps || 20000,
    steps: 0,
  };
}

const HIGH = 1;
const LOW = 0;

function pinState(board, pin) {
  const key = String(pin);
  if (!board.pins[key]) board.pins[key] = { mode: 'INPUT', digital: LOW, pwm: 0 };
  return board.pins[key];
}

function noteError(board, msg) {
  if (board.errors.length < 20) board.errors.push(msg);
}

/* Pin PWM pada Arduino Uno: 3, 5, 6, 9, 10, 11 */
const PWM_PINS = [3, 5, 6, 9, 10, 11];

function isPwmPin(pin) {
  return PWM_PINS.includes(Number(pin));
}

/* ============================ Transpiler ============================ */

/* Terjemahkan sketsa Arduino (subset) menjadi body fungsi JS yang menerima
 * objek `A` (API Arduino). Hasilnya string JS, dieksekusi dengan new Function. */
function transpileSketch(sketch) {
  let src = String(sketch == null ? '' : sketch);

  /* Buang komentar // dan blok, tapi pertahankan di dalam string sederhana. */
  src = src.replace(/\/\*[\s\S]*?\*\//g, '');
  src = src.replace(/(^|[^:])\/\/[^\n]*/g, '$1');

  /* Buang preprocessor (#include, #define) — kita sediakan semua yang dipakai. */
  const defines = {};
  src = src.replace(/^\s*#define\s+([A-Za-z_]\w*)\s+([^\n]+)$/gm, (m, name, val) => {
    defines[name] = val.trim();
    return '';
  });
  src = src.replace(/^\s*#include\s*[<"][^>"]*[>"]\s*$/gm, '');

  /* Ganti SHOUTY_CASE konstanta Arduino dengan nilai JS. */
  const CONST = {
    HIGH: '1', LOW: '0',
    INPUT: "'INPUT'", OUTPUT: "'OUTPUT'", INPUT_PULLUP: "'INPUT_PULLUP'",
    LED_BUILTIN: '13',
    true: 'true', false: 'false',
  };
  Object.keys(defines).forEach((k) => { CONST[k] = defines[k]; });
  /* Aplikasikan sebagai kata utuh saja (hindari kena nama variabel). */
  Object.keys(CONST).forEach((k) => {
    src = src.replace(new RegExp('\\b' + k + '\\b', 'g'), CONST[k]);
  });

  /* Tipe data → JS. Urutan penting (yang lebih panjang dulu). */
  src = src
    .replace(/\bunsigned\s+long\b/g, 'let ')
    .replace(/\bunsigned\s+int\b/g, 'let ')
    .replace(/\bunsigned\s+char\b/g, 'let ')
    .replace(/\b(const|static|volatile|register)\s+/g, '')
    .replace(/\b(float|double|long|short|byte|word|boolean|bool)\b(?=\s+[A-Za-z_])/g, 'let ')
    .replace(/\bint\b(?=\s+[A-Za-z_])/g, 'let ')
    .replace(/\bchar\b(?=\s+[A-Za-z_]\w*\s*\[)/g, 'let ')
    .replace(/\bchar\b(?=\s+[A-Za-z_])/g, 'let ')
    .replace(/\bString\b(?=\s+[A-Za-z_])/g, 'let ')
    .replace(/\bvoid\b(?=\s+[A-Za-z_])/g, 'function ')
    .replace(/\bconst\s+(?=A[0-5]\b)/g, '');
  /* Array: `int a[3] = {1,2,3};` → `let a = [1,2,3];` (kurung kurawal pembuka
   * DAN penutup ikut diganti). `int a[3];` → `let a = [0,0,0];`. */
  src = src.replace(/\b(let)\s+([A-Za-z_]\w*)\s*\[\s*(\d*)\s*\]\s*=\s*\{([^{}]*)\}/g,
    (m, kw, name, len, items) => `let ${name} = [${items}]`);
  src = src.replace(/\b(let)\s+([A-Za-z_]\w*)\s*\[\s*(\d+)\s*\]\s*;/g,
    (m, kw, name, len) => `let ${name} = new Array(${len}).fill(0);`);

  /* Objek library sederhana: `Servo myservo;` / `DHT dht(2, DHT11);` →
   * variabel biasa yang bisa dipanggil method-nya (stub). */
  src = src.replace(/\b(Servo|LiquidCrystal|LiquidCrystal_I2C|DHT|SoftwareSerial|Adafruit_\w+)\s+([A-Za-z_]\w*)\s*(\([^;]*\))?\s*;/g,
    (m, type, name, ctorArgs) => {
      const stub = `{ attach: function(){}, write: function(){}, writeMicroseconds: function(){}, ` +
        `read: function(){ return 0; }, begin: function(){}, print: function(){}, ` +
        `println: function(){}, setCursor: function(){}, clear: function(){}, ` +
        `backlight: function(){}, home: function(){}, createChar: function(){}, ` +
        `noDisplay: function(){}, display: function(){}, blink: function(){}, ` +
        `noBlink: function(){}, cursor: function(){}, noCursor: function(){}, ` +
        `scrollDisplayLeft: function(){}, scrollDisplayRight: function(){}, ` +
        `readTemperature: function(){ return 25; }, readHumidity: function(){ return 50; } }`;
      return `let ${name} = ${stub};`;
    });

  /* Deklarasi fungsi: `function nama(args) {` → tetap, tapi pastikan tidak ada
   * tipe balik tersisa. Sudah ditangani oleh replace void/tipe di atas, tapi
   * tipe balik non-void (`int hitung(int a)`) perlu dibuang. */
  src = src.replace(/\b(let|const)\s+([A-Za-z_]\w*)\s*\(([^)]*)\)\s*\{/g,
    (m, kw, name, args) => `function ${name}(${args}) {`);
  /* Bersihkan tipe pada parameter fungsi: `(let a, let b)` → `(a, b)`.
   * HANYA untuk daftar parameter fungsi (`function nama(...)`), bukan header
   * `for (...)` — kalau tidak, `for (let i = 0; ...)` ikut kehapus dan rusak. */
  src = src.replace(/\bfunction\s+([A-Za-z_]\w*)\s*\(([^)]*)\)/g,
    (m, name, args) => `function ${name}(${args.replace(/\blet\s+/g, '')})`);

  /* String C++ "..." tetap valid di JS. char 'a' valid. */

  return { code: src, defines };
}

/* ============================ Runner ============================ */

/* Jalankan sketsa. Mengembalikan { ok, board, error }.
 * `durationMs` = lama simulasi loop (default 2000 ms) supaya `delay()` panjang
 * tidak membuat loop tak berujung. */
function runSketch(sketch, opts) {
  const o = opts || {};
  const board = createBoard(o);
  const durationMs = o.durationMs || 2000;
  const maxIterations = o.maxIterations || 500;

  let compiled;
  try {
    compiled = transpileSketch(sketch);
  } catch (e) {
    return { ok: false, board, error: 'Gagal membaca sketsa: ' + e.message };
  }

  /* API Arduino yang tersedia untuk sketsa. */
  const A = {
    HIGH: HIGH, LOW: LOW,
    INPUT: 'INPUT', OUTPUT: 'OUTPUT', INPUT_PULLUP: 'INPUT_PULLUP',
    LED_BUILTIN: 13,
    A0: 'A0', A1: 'A1', A2: 'A2', A3: 'A3', A4: 'A4', A5: 'A5',

    pinMode(pin, mode) {
      pinState(board, pin).mode = mode;
    },
    digitalWrite(pin, val) {
      const st = pinState(board, pin);
      st.digital = val ? HIGH : LOW;
      board.log.push({ t: board.timeMs, type: 'digitalWrite', pin: String(pin), value: st.digital });
    },
    digitalRead(pin) {
      const key = String(pin);
      if (key in board.buttonStates) return board.buttonStates[key] ? HIGH : LOW;
      return pinState(board, pin).digital ? HIGH : LOW;
    },
    analogRead(pin) {
      const key = String(pin).replace(/^A/i, 'A');
      const v = board.analog[key];
      if (v == null) return 0;
      return v;
    },
    analogWrite(pin, val) {
      const st = pinState(board, pin);
      let n = Number(val) || 0;
      if (n < 0) n = 0;
      if (n > 255) n = 255;
      st.pwm = n;
      st.digital = n > 0 ? HIGH : LOW;
      if (!isPwmPin(pin)) noteError(board, `analogWrite(${pin}) diabaikan: pin ${pin} bukan pin PWM (~).`);
      board.log.push({ t: board.timeMs, type: 'analogWrite', pin: String(pin), value: n });
    },
    delay(ms) {
      board.timeMs += Math.max(0, Number(ms) || 0);
      board.steps += 1;
    },
    delayMicroseconds(us) {
      board.timeMs += (Number(us) || 0) / 1000;
    },
    millis() { return Math.floor(board.timeMs); },
    micros() { return Math.floor(board.timeMs * 1000); },
    map(v, inMin, inMax, outMin, outMax) {
      if (inMax === inMin) return outMin;
      return Math.floor((v - inMin) * (outMax - outMin) / (inMax - inMin) + outMin);
    },
    constrain(v, lo, hi) { return Math.min(hi, Math.max(lo, v)); },
    min(a, b) { return Math.min(a, b); },
    max(a, b) { return Math.max(a, b); },
    abs(v) { return Math.abs(v); },
    random(a, b) {
      if (b == null) return Math.floor(Math.random() * a);
      return a + Math.floor(Math.random() * (b - a));
    },
    sq(v) { return v * v; },
    sqrt(v) { return Math.sqrt(v); },
    pow(a, b) { return Math.pow(a, b); },
    tone(pin, freq, dur) {
      board.tone = { pin: String(pin), freq: Number(freq) || 0 };
      board.log.push({ t: board.timeMs, type: 'tone', pin: String(pin), value: Number(freq) || 0 });
      if (dur) board.timeMs += Number(dur) || 0;
    },
    noTone() { board.tone = null; },
    pulseIn(pin, value, timeout) {
      /* Simulasi jarak ultrasonik: pakai analog A? atau default 1000 us. */
      const key = 'PULSE_' + String(pin);
      const us = board[key] != null ? board[key] : 1000;
      return us;
    },
    Serial: {
      begin(baud) { board.serialOpen = true; board.baud = baud || 9600; },
      print(v) { if (!board.serialOpen) noteError(board, 'Serial.print dipanggil sebelum Serial.begin().'); board.serial.push(String(v)); },
      println(v) { if (!board.serialOpen) noteError(board, 'Serial.println dipanggil sebelum Serial.begin().'); board.serial.push(v == null ? '' : String(v)); },
      write(v) { board.serial.push(String.fromCharCode(Number(v) || 0)); },
      available() { return 0; },
      read() { return -1; },
    },
  };

  /* String() untuk C++ juga. */
  const helpers = {
    String: (v) => String(v == null ? '' : v),
    abs: Math.abs, map: A.map, min: Math.min, max: Math.max,
    constrain: A.constrain, random: A.random, tone: A.tone, noTone: A.noTone,
    millis: A.millis, micros: A.micros, delay: A.delay,
    delayMicroseconds: A.delayMicroseconds, pulseIn: A.pulseIn,
    sq: A.sq, sqrt: A.sqrt, pow: A.pow,
    pinMode: A.pinMode, digitalWrite: A.digitalWrite, digitalRead: A.digitalRead,
    analogRead: A.analogRead, analogWrite: A.analogWrite,
    HIGH: HIGH, LOW: LOW, INPUT: 'INPUT', OUTPUT: 'OUTPUT', INPUT_PULLUP: 'INPUT_PULLUP',
    LED_BUILTIN: 13, A0: 'A0', A1: 'A1', A2: 'A2', A3: 'A3', A4: 'A4', A5: 'A5',
    Serial: A.Serial,
  };

  const names = Object.keys(helpers).filter((k) => k !== 'String');
  const argList = names.concat(['String']);
  const argVals = names.map((k) => helpers[k]).concat([helpers.String]);

  let runner;
  try {
    /* Sediakan `#define` yang belum tercakup sebagai variabel. */
    const defineKeys = Object.keys(compiled.defines);
    const defineArgs = [];
    const defineVals = [];
    defineKeys.forEach((k) => {
      const raw = compiled.defines[k];
      defineArgs.push(k);
      defineVals.push(/^-?\d+(\.\d+)?$/.test(raw) ? Number(raw) : raw.replace(/"/g, ''));
    });

    const factory = new Function(
      ...argList, ...defineArgs,
      `"use strict";\n${compiled.code}\n;return { setup: typeof setup === 'function' ? setup : null, loop: typeof loop === 'function' ? loop : null };`
    );
    runner = factory(...argVals, ...defineVals);
  } catch (e) {
    return { ok: false, board, error: 'Sketsa gagal dikompilasi: ' + e.message };
  }

  if (!runner.loop && !runner.setup) {
    return { ok: false, board, error: 'Sketsa tidak punya setup() maupun loop().' };
  }

  try {
    if (runner.setup) runner.setup();
    if (runner.loop) {
      /* Jalankan loop sampai durasi simulasi habis atau batas iterasi.
       * Tiap iterasi menambah waktu kecil (seperti loop nyata yang tidak instan)
       * supaya pola non-blocking berbasis millis() ikut maju walau tanpa delay(). */
      const perIterationMs = 1;
      /* Batas iterasi diperlonggar bila sketsa tidak memakai delay(): waktu hanya
       * maju 1 ms/iterasi, jadi butuh lebih banyak putaran untuk mencapai durasi. */
      const iterationCap = Math.max(maxIterations, Math.min(200000, durationMs * 4));
      let guard = 0;
      while (board.timeMs < durationMs && guard < iterationCap) {
        const t0 = board.timeMs;
        runner.loop();
        guard += 1;
        if (board.timeMs === t0) {
          /* Loop tanpa delay(): majukan waktu sedikit agar millis() berjalan. */
          board.timeMs += perIterationMs;
        }
      }
    }
  } catch (e) {
    return { ok: false, board, error: 'Error saat menjalankan sketsa: ' + e.message };
  }

  return { ok: true, board, error: null };
}

/* ============================ Pemeriksa ============================ */

/* Cek sketsa terhadap `expect`. Mengembalikan { correct, message, explain? }.
 *
 * Bentuk `expect` yang didukung (semua opsional, digabung AND):
 *   { pin, mode }              → pinMode tertentu dipanggil
 *   { pwm: {pin, min|max|eq} } → analogWrite mencapai nilai tertentu
 *   { digital: {pin, value} }  → digitalWrite terakhir untuk pin = HIGH/LOW
 *   { serialIncludes: '...' }  → output Serial memuat teks
 *   { serialLines: n }         → minimal n baris Serial
 *   { tone: freq }             → tone() dipanggil dengan frekuensi itu
 *   { runs: true }             → sketsa harus berjalan tanpa error
 */
function checkSketch(sketch, expect) {
  const exp = expect || {};
  /* Sumber opsi simulasi: `options` di dalam expect, atau `simOptions` di soal. */
  const res = runSketch(sketch, exp.options || exp.simOptions);

  if (!res.ok) {
    return { correct: false, message: res.error || 'Sketsa gagal dijalankan.' };
  }

  const board = res.board;
  const fail = (msg) => ({ correct: false, message: msg });

  if (exp.pin && exp.mode) {
    const st = board.pins[String(exp.pin)];
    if (!st || st.mode !== exp.mode) {
      return fail(`Pin ${exp.pin} belum diset sebagai ${exp.mode}.`);
    }
  }

  if (exp.pinOk) {
    /* pinMode harus dipanggil untuk pin ini (mode apa pun). */
    const st = board.pins[String(exp.pinOk)];
    if (!st) return fail(`pinMode(${exp.pinOk}) belum dipanggil.`);
  }

  if (exp.pwm) {
    const writes = board.log.filter((l) => l.type === 'analogWrite' && l.pin === String(exp.pwm.pin));
    if (!writes.length) return fail(`analogWrite ke pin ${exp.pwm.pin} belum dipanggil.`);
    const vals = writes.map((w) => w.value);
    if (exp.pwm.eq != null && !vals.includes(exp.pwm.eq)) {
      return fail(`analogWrite(${exp.pwm.pin}) belum pernah bernilai ${exp.pwm.eq}.`);
    }
    if (exp.pwm.min != null && Math.max(...vals) < exp.pwm.min) {
      return fail(`analogWrite(${exp.pwm.pin}) belum mencapai nilai ≥ ${exp.pwm.min}.`);
    }
    if (exp.pwm.max != null && Math.min(...vals) > exp.pwm.max) {
      return fail(`analogWrite(${exp.pwm.pin}) nilai terkecil masih > ${exp.pwm.max}.`);
    }
  }

  if (exp.digital) {
    const writes = board.log.filter((l) => l.type === 'digitalWrite' && l.pin === String(exp.digital.pin));
    if (!writes.length) return fail(`digitalWrite ke pin ${exp.digital.pin} belum dipanggil.`);
    const want = exp.digital.value ? HIGH : LOW;
    if (!writes.some((w) => w.value === want)) {
      return fail(`digitalWrite(${exp.digital.pin}, ${exp.digital.value ? 'HIGH' : 'LOW'}) belum pernah dijalankan.`);
    }
  }

  if (exp.digitalToggled) {
    const writes = board.log.filter((l) => l.type === 'digitalWrite' && l.pin === String(exp.digitalToggled));
    const hasHigh = writes.some((w) => w.value === HIGH);
    const hasLow = writes.some((w) => w.value === LOW);
    if (!(hasHigh && hasLow)) return fail(`Pin ${exp.digitalToggled} belum bergantian HIGH dan LOW (blink).`);
  }

  if (exp.serialIncludes) {
    const text = board.serial.join('\n');
    if (!text.includes(exp.serialIncludes)) {
      return fail(`Serial belum mencetak "${exp.serialIncludes}".`);
    }
  }

  if (exp.serialLines != null) {
    if (board.serial.length < exp.serialLines) {
      return fail(`Serial baru mencetak ${board.serial.length} baris, minimal ${exp.serialLines}.`);
    }
  }

  if (exp.tone != null) {
    const tones = board.log.filter((l) => l.type === 'tone');
    if (!tones.length) return fail('tone() belum dipanggil.');
    if (exp.tone && !tones.some((t) => t.value === exp.tone)) {
      return fail(`tone() belum dipanggil dengan frekuensi ${exp.tone} Hz.`);
    }
  }

  /* Kesalahan pin PWM tetap dianggap salah bila penyebabnya salah pin. */
  if (board.errors.length) {
    return { correct: false, message: board.errors[0] };
  }

  return { correct: true, board };
}

export {
  runSketch, transpileSketch, checkSketch, createBoard,
  PWM_PINS, isPwmPin, HIGH, LOW,
};
