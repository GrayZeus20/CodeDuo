/* CodeDuo — aiDialogue.js: Machine Learning untuk Pengetahuan, Ekspresi, & Dialog Dinamis Bibit.
 * Bibit menyerap konsep dari setiap soal dan modul yang dipelajari pengguna (on-device learning).
 * Dialog Bibit terus BERTAMBAH dan merefleksikan materi koding yang baru saja diselesaikan.
 * Menggunakan Contextual Multi-Armed Bandit & Feature Scoring dengan online SGD tanpa dependensi luar.
 */
'use strict';

export const DIALOGUE_TONES = ['refleksi', 'tips', 'bangga', 'suportif', 'semangat', 'taktis'];

const STORAGE_KEY_KNOWLEDGE = 'codeduo_bibit_knowledge_v1';
const STORAGE_KEY_MODEL = 'codeduo_ai_model_v1';

const RECENT_RESPONSES = [];
const MAX_RECENT_MEMORY = 18;

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
  if (!text) return false;
  const h = hashString(text);
  return RECENT_RESPONSES.includes(h);
}

/* =========================================================================
 * 1. Penyimpanan & Ekstraksi Pengetahuan yang Dipelajari (Knowledge Bank)
 * ========================================================================= */

let bibitKnowledge = loadKnowledge();

function loadKnowledge() {
  if (typeof localStorage === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY_KNOWLEDGE);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) {
    return [];
  }
}

function saveKnowledge() {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY_KNOWLEDGE, JSON.stringify(bibitKnowledge));
  } catch (_) {}
}

/** Menyaring penjelasan soal menjadi intisari konsep ringkas (1 kalimat padat) */
export function distillConceptInsight(explain, q) {
  const src = (explain || q || '').trim();
  if (!src) return '';

  // Bersihkan tag wrapper HTML sederhana atau markdown code, pertahankan nama tag seperti <body>
  let clean = src
    .replace(/<\/?(?:code|span|div|b|strong|i|em)\b[^>]*>/gi, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();

  // Ambil kalimat pertama jika ada tanda titik
  const dotIdx = clean.indexOf('. ');
  if (dotIdx > 15 && dotIdx < 85) {
    clean = clean.slice(0, dotIdx + 1);
  } else if (clean.length > 85) {
    clean = clean.slice(0, 82) + '...';
  }

  // Pastikan akhiran rapi
  if (!/[.!?]$/.test(clean)) clean += '.';
  return clean;
}

/**
 * Menyerap konsep baru ke dalam memori Bibit saat pengguna menjawab soal.
 */
export function learnConceptFromExercise({ topicId, topicName, lessonTitle, ex, correct }) {
  if (!ex || !topicId) return null;
  const insight = distillConceptInsight(ex.explain, ex.q);
  if (!insight || insight.length < 5) return null;

  const conceptId = `${topicId}:${lessonTitle || 'latihan'}:${hashString(insight)}`;
  const now = Date.now();

  const existingIdx = bibitKnowledge.findIndex((item) => item.id === conceptId);
  if (existingIdx >= 0) {
    const item = bibitKnowledge[existingIdx];
    item.reinforcements = (item.reinforcements || 1) + 1;
    item.mastery = (item.mastery || 0.5) * 0.7 + (correct ? 0.3 : 0.0);
    item.learnedAt = now;
  } else {
    bibitKnowledge.unshift({
      id: conceptId,
      topicId,
      topicName: topicName || topicId,
      lessonTitle: lessonTitle || 'Latihan',
      insight,
      learnedAt: now,
      reinforcements: 1,
      mastery: correct ? 1.0 : 0.5,
      timesMentioned: 0,
    });
  }

  // Batasi memori hingga 60 konsep teratas agar efisien di localStorage
  if (bibitKnowledge.length > 60) {
    bibitKnowledge.sort((a, b) => (b.learnedAt + b.reinforcements * 60000) - (a.learnedAt + a.reinforcements * 60000));
    bibitKnowledge = bibitKnowledge.slice(0, 60);
  }

  saveKnowledge();
  return conceptId;
}

/**
 * Menyerap pencapaian saat pengguna menuntaskan satu modul / pelajaran.
 */
export function learnConceptFromLessonFinish({ topicId, topicName, nodeId, lessonTitle, tier, exercises = [] }) {
  if (!topicId) return;

  // Ekstrak 2 soal dengan penjelasan terbaik untuk diperkuat di memori
  const samples = (exercises || [])
    .map((item) => (item && item.ex ? item.ex : item))
    .filter((e) => e && e.explain && e.explain.length > 10)
    .slice(0, 2);

  samples.forEach((ex) => {
    learnConceptFromExercise({
      topicId,
      topicName,
      lessonTitle,
      ex,
      correct: true,
    });
  });

  // Tambahkan juga pencapaian modul
  const finishId = `${topicId}:tuntas:${nodeId || lessonTitle}`;
  const now = Date.now();
  const existingIdx = bibitKnowledge.findIndex((item) => item.id === finishId);
  if (existingIdx >= 0) {
    bibitKnowledge[existingIdx].reinforcements += 1;
    bibitKnowledge[existingIdx].learnedAt = now;
  } else {
    bibitKnowledge.unshift({
      id: finishId,
      topicId,
      topicName: topicName || topicId,
      lessonTitle: lessonTitle || 'Modul',
      insight: `Modul '${lessonTitle}' level ${tier || 'Dasar'} berhasil dituntaskan.`,
      learnedAt: now,
      reinforcements: 1,
      mastery: 1.0,
      timesMentioned: 0,
      isMilestone: true,
    });
  }

  saveKnowledge();
}

/** Membaca seluruh konsep yang telah diserap Bibit */
export function getLearnedConcepts() {
  return bibitKnowledge.slice();
}

/** Mengosongkan memori konsep (misal saat reset data di profil) */
export function clearLearnedConcepts() {
  bibitKnowledge = [];
  saveKnowledge();
}

/* =========================================================================
 * 2. Model Machine Learning Pembelajaran Dialog & Bobot Preferensi
 * ========================================================================= */

export function createDialogueModel() {
  return {
    weights: {
      refleksi: 1.5,   // membahas materi koding yang baru dipelajari
      tips: 1.3,       // tips & gotchas materi
      bangga: 1.4,     // memuji kemajuan materi yang dikuasai
      suportif: 1.1,   // menyemangati saat materi menantang
      semangat: 1.2,   // motivasi umum
      taktis: 1.0,     // fokus teknis saat sesi kuis
    },
    topicWeights: {},  // ketertarikan Bibit pada tiap topik koding
    interactions: 0,
    lr: 0.15,
  };
}

/**
 * Pembelajaran online (Online SGD) saat pengguna berinteraksi atau menyelesaikan latihan.
 */
export function updateDialogueModel(model, outcome = {}) {
  if (!model || !model.weights) return;
  model.interactions = (model.interactions || 0) + 1;
  const lr = model.lr || 0.15;

  if (outcome.topicId) {
    model.topicWeights[outcome.topicId] = (model.topicWeights[outcome.topicId] || 1.0) + lr * 0.25;
  }

  if (outcome.correct) {
    model.weights.bangga = Math.min(3.0, (model.weights.bangga || 1.0) + lr * 0.4);
    model.weights.refleksi = Math.min(3.0, (model.weights.refleksi || 1.0) + lr * 0.35);
    model.weights.semangat = Math.min(3.0, (model.weights.semangat || 1.0) + lr * 0.2);
  } else if (outcome.wrong || outcome.close) {
    model.weights.suportif = Math.min(3.0, (model.weights.suportif || 1.0) + lr * 0.5);
    model.weights.tips = Math.min(3.0, (model.weights.tips || 1.0) + lr * 0.4);
    model.weights.taktis = Math.min(3.0, (model.weights.taktis || 1.0) + lr * 0.3);
  }
}

/* =========================================================================
 * 3. Mesin Sintesis & Penilaian (Scoring & Ranking) Dialog Pembelajaran
 * ========================================================================= */

/**
 * Menghasilkan dan menilai kandidat obrolan dari konsep-konsep koding yang baru diserap.
 */
export function scoreAndRankLearnedDialogues(signals = {}, model = null, seed = Math.random() * 1000) {
  if (!bibitKnowledge || bibitKnowledge.length === 0) return null;

  const now = Date.now();
  const currentTopicId = signals.topicId || (signals.topicTitle ? signals.topicTitle.toLowerCase() : null);
  const candidates = [];

  // Bangun variasi dialog berdasarkan konsep-konsep yang ada di memori
  bibitKnowledge.slice(0, 15).forEach((item) => {
    const tName = item.topicName || 'koding';
    const lTitle = item.lessonTitle || 'materi';
    const insight = item.insight || '';

    // Template 1: Refleksi / Callback Pengetahuan
    candidates.push({
      concept: item,
      tone: 'refleksi',
      face: 'speaking',
      mood: 'excited',
      text: `Tadi di ${tName} [${lTitle}], kita pelajari: ${insight} 💡`,
    });

    // Template 2: Pujian Kemajuan & Penguasaan
    candidates.push({
      concept: item,
      tone: 'bangga',
      face: 'happy',
      mood: 'celebrate',
      text: `Kodingan ${tName}-mu makin rapi! Konsep '${lTitle}' udah kamu kuasai. ✨`,
    });

    // Template 3: Tips Praktis
    candidates.push({
      concept: item,
      tone: 'tips',
      face: 'thinking',
      mood: 'thinking',
      text: `Tips dari materi ${tName}: ${insight} Bakal sering kepake di project!`,
    });

    // Template 4: Pengetahuan yang Ikut Diserap Bibit
    candidates.push({
      concept: item,
      tone: 'refleksi',
      face: 'speaking',
      mood: 'happy',
      text: `Bibit ikutan paham '${insight}' dari latihan ${tName} kamu tadi! 🤖`,
    });
  });

  if (candidates.length === 0) return null;

  // Hitung Skor Tiap Kandidat menggunakan Fitur Relevansi & Model Bobot
  const m = model || createDialogueModel();
  const scored = candidates.map((c) => {
    const item = c.concept;
    // 1. Recency Decay (waktu meluruh dengan half-life ~12 jam)
    const ageHours = Math.max(0, (now - (item.learnedAt || now)) / 3600000);
    const recencyScore = Math.exp(-ageHours / 12);

    // 2. Kecocokan Topik yang sedang dibuka / dipelajari
    const topicMatch = (currentTopicId && item.topicId && currentTopicId.includes(item.topicId.toLowerCase())) ? 1.8 : 0.0;

    // 3. Bobot Tone dari Model
    const toneWeight = (m.weights && m.weights[c.tone]) || 1.0;

    // 4. Afinitas Topik dari Model
    const topicAffinity = (m.topicWeights && m.topicWeights[item.topicId]) || 1.0;

    // 5. Anti-Repetition Penalty (hindari yang sering diucapkan atau baru saja tampil)
    const mentionPenalty = (item.timesMentioned || 0) * 0.45;
    const recentPenalty = isRecentlySaid(c.text) ? 6.0 : 0.0;

    const rawScore = (recencyScore * 2.2) + topicMatch + (toneWeight * 1.2) + (topicAffinity * 0.8) - mentionPenalty - recentPenalty;

    return { candidate: c, score: Math.max(0.01, rawScore) };
  });

  // Softmax Sampling dengan Suhu T = 0.55
  const T = 0.55;
  const expScores = scored.map((s) => Math.exp(s.score / T));
  const sumExp = expScores.reduce((a, b) => a + b, 0);
  const probs = expScores.map((e) => e / sumExp);

  // Eksplorasi 10%
  let chosen = null;
  const rnd = Number.isFinite(seed) ? Math.abs(Math.sin(seed)) : Math.random();
  if (rnd < 0.10) {
    const randIdx = Math.floor(rnd * scored.length / 0.10) % scored.length;
    chosen = scored[randIdx].candidate;
  } else {
    let acc = 0;
    const pickVal = (rnd - 0.10) / 0.90;
    for (let i = 0; i < probs.length; i++) {
      acc += probs[i];
      if (pickVal <= acc || i === probs.length - 1) {
        chosen = scored[i].candidate;
        break;
      }
    }
  }

  if (chosen) {
    chosen.concept.timesMentioned = (chosen.concept.timesMentioned || 0) + 1;
    rememberResponse(chosen.text);
    return {
      text: chosen.text,
      face: chosen.face,
      mood: chosen.mood,
      tone: chosen.tone,
      concept: chosen.concept,
    };
  }

  return null;
}

/* =========================================================================
 * 4. Generator Respon Tap Dinamis (Integrasi Machine Learning Konsep)
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

  // A. Jika dalam sesi latihan dan kondisi kritis: beri peringatan spesifik
  if (s.inSession) {
    if (hearts === 1) {
      const res = 'Awas, sisa 1 hati! Lebih teliti ya.';
      rememberResponse(res);
      return { text: res, face: 'thinking', mood: 'thinking' };
    }
    const currentNum = pos + 1;
    if (currentNum >= totalInSession) {
      const res = 'Soal terakhir! Satu langkah lagi tuntas.';
      rememberResponse(res);
      return { text: res, face: 'speaking', mood: 'excited' };
    }
  }

  // B. PRIORITAS ML: Gunakan konsep yang baru dipelajari (~65% peluang jika ada konsep)
  const rnd = Number.isFinite(seed) ? Math.abs(Math.sin(seed * 3.14)) : Math.random();
  if (bibitKnowledge.length > 0 && rnd < 0.68) {
    const learned = scoreAndRankLearnedDialogues(s, null, seed);
    if (learned && learned.text) {
      return learned;
    }
  }

  // C. Fallback: Dialog Kontekstual Dinamis Berdasarkan Kondisi Pengguna
  if (s.inSession) {
    const sessionLines = [
      `Soal ${pos}/${totalInSession}. Fokus!`,
      'Kamu pasti bisa!',
      `Tinggal ${totalInSession - pos} soal lagi. Gas!`,
      ex && ex.type === 'code' ? 'Perhatikan return nilainya ya!' : 'Logikanya sudah tepat, lanjut!',
      'Pelan tapi pasti!',
    ];
    const full = pickDiverse(sessionLines, seed);
    rememberResponse(full);
    return { text: full, face: 'speaking', mood: 'excited' };
  }

  if (route === 'topic' && s.topicTitle) {
    const doneL = s.topicDoneCount || 0;
    const totalL = s.topicTotalCount || 3;
    const topicLines = doneL >= totalL
      ? [`Topik ${s.topicTitle} sudah tuntas! Keren.`, 'Hebat, semua step beres! 🎉']
      : [`Topik ${s.topicTitle}: ${doneL}/${totalL} step selesai. Lanjut!`, 'Ayo taklukkan level ini!'];
    const full = pickDiverse(topicLines, seed);
    rememberResponse(full);
    return { text: full, face: 'speaking', mood: 'excited' };
  }

  const homeLines = [
    streak > 0 ? `Streak ${streak} hari! Pertahankan! 🔥` : 'Semangat ngoding hari ini!',
    lessonsDone > 0 ? `${lessonsDone} modul selesai. Lanjut lagi!` : 'Halo! Siap belajar koding?',
    'Pilih materi di jalur dan mulai!',
    'Langkah kecil tiap hari bikin kamu jago!',
  ];
  const full = pickDiverse(homeLines, seed);
  rememberResponse(full);
  return { text: full, face: 'happy', mood: 'happy' };
}

/* =========================================================================
 * 5. Generator Dialog Kontekstual Acara (Event-based)
 * ========================================================================= */

export function generateAiDialogue(contextKey = 'idle', signals = {}, seed = Math.random() * 1000) {
  const s = signals;
  const face = s.face || 'idle';
  const ex = s.currentExercise;

  if (contextKey === 'done') {
    // Jika ada konsep yang baru dituntaskan, buat selebrasi cerdas
    if (bibitKnowledge.length > 0 && Math.random() < 0.6) {
      const top = bibitKnowledge[0];
      return `Pelajaran tuntas! Sekarang kamu kuasai '${top.lessonTitle}' di ${top.topicName}! 🎉`;
    }
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

  if (contextKey === 'wake-pet') {
    const pool = [
      'Hoamm... Eh? Dielus sampai bangun~',
      'Uwaa hangatnya... Aku udah bangun dan siap nemenin!',
      'Nyamannya elusanmu... Langsung melek dan segar lagi!',
      'Hoam... Makasih udah dibangunin dengan lembut ^-^',
      'Bangun-bangun langsung disayang~ Siap ngoding lagi!',
    ];
    return pickDiverse(pool, seed);
  }

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

  if (contextKey === 'recovered') {
    const pool = [
      'Fiuh... untung pusingnya udah reda!',
      'Kepalaku udah dingin lagi. Yuk lanjut belajar!',
      'Huft... jangan dispam lagi ya! Hehe.',
    ];
    return pickDiverse(pool, seed);
  }

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

  // Jika sedang idle di halaman beranda atau jeda materi, sesekali gunakan materi yang dipelajari
  if (contextKey === 'idle' || contextKey === 'greet') {
    if (bibitKnowledge.length > 0 && Math.random() < 0.5) {
      const learned = scoreAndRankLearnedDialogues(s, null, seed);
      if (learned && learned.text) return learned.text;
    }
  }

  if (face === 'thinking') return 'Lagi mikir logikanya bareng kamu...';
  if (face === 'working') return 'Fokus mode on! Simulasi kode aktif.';
  if (face === 'searching') return 'Cari kata kunci yang paling pas...';
  if (face === 'listening') {
    if (ex && ex.type === 'mc') return 'Pilih jawaban yang paling pas, aku simak!';
    if (ex && ex.type === 'arrange') return 'Susun bloknya sesuai urutan, aku simak!';
    return 'Ketik aja kodenya, aku simak!';
  }
  if (face === 'speaking') return 'Perhatikan variabel dan urutan ya.';
  if (face === 'sleeping') return 'Zzz... ketuk aku buat bangunin.';

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
