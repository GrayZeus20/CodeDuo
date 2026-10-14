/* CodeDuo — aiDialogue.js: Dialog Cerdas & Ringkas ala Maskot Duolingo.
 * Menghasilkan respon singkat, padat, dan kontekstual (1 kalimat pendek, 4-10 kata).
 * Tidak bertele-tele, anti-repetitif, dan selalu to the point.
 */
'use strict';

export const DIALOGUE_TONES = ['taktis', 'suportif', 'semangat', 'fokus'];

const RECENT_RESPONSES = [];
const MAX_RECENT_MEMORY = 16;

function hashString(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) {
    h = ((h << 5) - h + str.charCodeAt(i)) | 0;
  }
  return h;
}

function rememberResponse(text) {
  if (!text) return;
  const h = hashString(text);
  RECENT_RESPONSES.push(h);
  if (RECENT_RESPONSES.length > MAX_RECENT_MEMORY) {
    RECENT_RESPONSES.shift();
  }
}

function isRecentlySaid(text) {
  const h = hashString(text);
  return RECENT_RESPONSES.includes(h);
}

export function createDialogueModel() {
  return {
    weights: { taktis: 1.0, suportif: 1.0, semangat: 1.0, fokus: 1.0 },
    interactions: 0,
    lr: 0.15,
  };
}

export function updateDialogueModel(model, outcome) {
  if (!model || !model.weights) return;
  model.interactions += 1;
  const lr = model.lr;
  if (outcome.correct) {
    model.weights.semangat += lr * 0.5;
    model.weights.taktis += lr * 0.4;
  } else if (outcome.wrong) {
    model.weights.suportif += lr * 0.8;
    model.weights.fokus += lr * 0.6;
  }
}

export function getTimeGreeting() {
  const hour = new Date().getHours();
  if (hour >= 4 && hour < 11) return 'Pagi';
  if (hour >= 11 && hour < 15) return 'Siang';
  if (hour >= 15 && hour < 18) return 'Sore';
  return 'Malam';
}

function pickDiverse(pool, seed, avoidRecent = true) {
  if (!pool || pool.length === 0) return '';
  let candidates = pool;
  if (avoidRecent && pool.length > 2) {
    const filtered = pool.filter((item) => !isRecentlySaid(item));
    if (filtered.length > 0) candidates = filtered;
  }
  const idx = Number.isFinite(seed)
    ? Math.abs(Math.floor(seed)) % candidates.length
    : Math.floor(Math.random() * candidates.length);
  return candidates[idx];
}

/* =========================================================================
 * Generator Respon Tap Dinamis (Ringkas & To the Point)
 * ========================================================================= */
export function getAiTapDialogue(signals = {}, seed = Math.random() * 1000) {
  const s = signals;
  const streak = s.streak || 0;
  const lessonsDone = s.lessonsDone || 0;
  const hearts = Number.isFinite(s.hearts) ? s.hearts : 3;
  const pos = Number.isFinite(s.pos) ? s.pos + 1 : 1;
  const totalInSession = s.totalInSession || 10;
  const route = s.route || 'home';
  const ex = s.currentExercise;

  // 1. Sedang dalam sesi latihan
  if (s.inSession) {
    if (hearts === 1) {
      const res = 'Awas, sisa 1 hati! Lebih teliti ya.';
      rememberResponse(res);
      return res;
    }
    const currentNum = pos + 1;
    if (currentNum >= totalInSession) {
      const res = 'Soal terakhir! Satu langkah lagi tuntas.';
      rememberResponse(res);
      return res;
    }
    const sessionLines = [
      `Soal ${currentNum}/${totalInSession}. Fokus!`,
      'Kamu pasti bisa!',
      `Tinggal ${totalInSession - currentNum} soal lagi. Gas!`,
      ex && ex.type === 'code' ? 'Perhatikan return nilainya ya!' : 'Logikanya sudah tepat, lanjut!',
      'Pelan tapi pasti!',
    ];
    const full = pickDiverse(sessionLines, seed);
    rememberResponse(full);
    return full;
  }

  // 2. Berada di Halaman Topik
  if (route === 'topic' && s.topicTitle) {
    const doneL = s.topicDoneCount || 0;
    const totalL = s.topicTotalCount || 3;
    const topicLines = doneL >= totalL
      ? [`Topik ${s.topicTitle} sudah tuntas! Keren.`, 'Hebat, semua step beres! 🎉']
      : [`Topik ${s.topicTitle}: ${doneL}/${totalL} step selesai. Lanjut!`, 'Ayo taklukkan level ini!'];
    const full = pickDiverse(topicLines, seed);
    rememberResponse(full);
    return full;
  }

  // 3. Berada di Beranda (Home)
  const homeLines = [
    streak > 0 ? `Streak ${streak} hari! Pertahankan! 🔥` : 'Semangat ngoding hari ini!',
    lessonsDone > 0 ? `${lessonsDone} modul selesai. Lanjut lagi!` : 'Halo! Siap belajar koding?',
    'Pilih materi di jalur dan mulai!',
    'Langkah kecil tiap hari bikin kamu jago!',
  ];
  const full = pickDiverse(homeLines, seed);
  rememberResponse(full);
  return full;
}

/* =========================================================================
 * Generator Dialog Kontekstual AI (1 Kalimat Ringkas ala Duolingo)
 * ========================================================================= */
export function generateAiDialogue(contextKey = 'idle', signals = {}, seed = Math.random() * 1000) {
  const s = signals;
  const face = s.face || 'idle';
  const ex = s.currentExercise;

  if (contextKey === 'done') {
    const pool = [
      'Pelajaran tuntas! Keren banget!',
      'Bagus sekali! Modul ini selesai.',
      'Mantap, naik level lagi!',
      'Hebat! Target sesi ini tercapai!',
    ];
    return pickDiverse(pool, seed);
  }

  if (contextKey === 'lost-heart') {
    const pool = [
      'Nyawa habis! Jangan menyerah, coba lagi.',
      'Error itu wajar. Tarik napas lalu coba lagi!',
    ];
    return pickDiverse(pool, seed);
  }

  if (contextKey === 'correct') {
    const pool = [
      'Bagus banget!',
      'Tepat sasaran!',
      'Mantap, 100% benar!',
      'Keren, logikamu pas!',
      'Lanjut terus!',
    ];
    return pickDiverse(pool, seed);
  }

  if (contextKey === 'wrong') {
    const pool = [
      'Hampir tepat! Amati lagi.',
      'Jangan buru-buru, perhatikan kodenya.',
      'Sedikit lagi, coba baca teliti.',
    ];
    return pickDiverse(pool, seed);
  }

  // Dielus-elus via hover
  if (contextKey === 'pet') {
    const pool = [
      'Uwaa, dielus-elus~ Senangnya!',
      'Hehe geli tapi hangat! ^-^',
      'Purr... Bibit suka dielus!',
      'Makasih elusannya, makin semangat!',
      'Nyamannya... Elus lagi dong~',
    ];
    return pickDiverse(pool, seed);
  }

  // Pusing atau marah karena dispam klik
  if (contextKey === 'spam' || contextKey === 'dizzy') {
    const pool = [
      'Aduh pusinggg! Jangan dipencet terus! @~@',
      'Aaa olenggg! Kepalaku muter-muter!',
      'Ihh jangan dispam klik dong, pusing tau! >_<',
      'Overload! Tunggu kepalaku dingin dulu ya!',
      'Ampuuun! Jangan dispam, mataku berputar!',
    ];
    return pickDiverse(pool, seed);
  }

  // Pemulihan setelah pusing
  if (contextKey === 'recovered') {
    const pool = [
      'Fiuh... untung pusingnya udah reda!',
      'Kepalaku udah dingin lagi. Yuk lanjut belajar!',
      'Huft... jangan dispam lagi ya! Hehe.',
    ];
    return pickDiverse(pool, seed);
  }

  // Sedang di-drag / dipindah
  if (contextKey === 'drag') {
    const pool = [
      'Wuuusshhh! Mau pindah ke mana kita? 🚀',
      'Weee! Melayang ke posisi baru!',
      'Pegang erat-erat, aku ikut kamu! ✨',
      'Asyik terbang! Cari spot yang paling nyaman ya!',
      'Geseer terus ke posisi favoritmu!',
    ];
    return pickDiverse(pool, seed);
  }

  // Selesai di-drag / mendarat
  if (contextKey === 'landed') {
    const pool = [
      'Mendarat dengan mulus! Siap nemenin kamu lagi. ✨',
      'Spot baru yang mantap! Di sini enak buat mantau kodinganmu.',
      'Asyik, posisi baru lebih PW! Lanjut yuk!',
      'Landing sempurna! Siap gas ngoding lagi!',
      'Di sini pemandangannya lebih seru!',
    ];
    return pickDiverse(pool, seed);
  }

  // Respon ekspresi wajah
  if (face === 'thinking') return 'Lagi mikir logikanya bareng kamu...';
  if (face === 'working') return 'Fokus mode on! Simulasi kode aktif.';
  if (face === 'searching') return 'Cari kata kunci yang paling pas...';
  if (face === 'listening') {
    if (ex && ex.type === 'mc') return 'Pilih jawaban yang paling pas, aku simak!';
    if (ex && ex.type === 'arrange') return 'Susun bloknya sesuai urutan, aku simak!';
    return 'Ketik aja kodenya, aku simak!';
  }
  if (face === 'speaking') return 'Perhatikan variabel dan urutan ya.';
  if (face === 'sleeping') return 'Zzz... ketuk aku kalau mau lanjut.';

  // Tipe soal
  if (ex) {
    if (ex.type === 'code') return ex.fn ? `Buat fungsi '${ex.fn}', perhatikan return!` : 'Fokus pada return value fungsinya.';
    if (ex.type === 'fill') return 'Isi celah kode yang kosong.';
    if (ex.type === 'arrange') return 'Susun blok kode secara berurutan.';
    if (ex.type === 'preview') return 'Ketik kodenya dan lihat preview.';
    if (ex.type === 'mc') return 'Coret pilihan yang janggal dulu.';
  }

  if (s.hearts === 1) return 'Awas, nyawa sisa 1 hati!';

  const defaults = [
    'Siap ngoding hari ini?',
    'Ayo asah logika kodingmu!',
    'Langkah kecil bikin makin pro!',
  ];
  return pickDiverse(defaults, seed);
}

/* =========================================================================
 * Hint Ringkas (To the Point)
 * ========================================================================= */
export function getAiHintDialogue(exercise) {
  if (!exercise) return 'Baca instruksinya sekali lagi.';
  const ex = exercise;
  if (ex.type === 'code') return ex.fn ? `Fokus parameter dan return pada fungsi '${ex.fn}'.` : 'Pastikan fungsi mengembalikan nilai (return).';
  if (ex.type === 'fill') return 'Cari kata kunci yang tepat untuk mengisi celah.';
  if (ex.type === 'arrange') return 'Urutkan dari deklarasi awal hingga output.';
  if (ex.type === 'preview') return 'Periksa tag HTML atau selector CSS.';
  if (ex.type === 'mc') return 'Eliminasi opsi yang jelas keliru terlebih dahulu.';
  return 'Tenang sejenak dan baca instruksi soal.';
}
