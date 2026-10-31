/* CodeDuo BGM — Web Audio Acoustic Guitar Synthesizer & Custom BGM Player.
 * Nol dependency, offline-safe, mendukung musik bawaan & musik kustom (Pixabay).
 *
 * 1. Mode Bawaan: Sintesis fisik petikan senar akustik (Karplus-Strong) dipadu resonansi bodi kayu.
 *    - Rantai resonansi bodi gitar (Helmholtz ~105Hz, soundboard ~215Hz, bridge ~430Hz, warmth ~3600Hz).
 *    - Ambience ruangan kayu (early reflection delay ~30ms).
 *    - Komposisi petikan fingerstyle akustik santai (72 BPM) untuk fokus belajar.
 *
 * 2. Mode Kustom: Memutar lagu audio pilihan pengguna (diunduh dari Pixabay atau diunggah via BGM Manager)
 *    yang disimpan secara persisten di IndexedDB (`CodeDuoMusicDB`).
 */
'use strict';

const BGM = (() => {
  const STORAGE_KEY_ENABLED = 'codeduo_bgm_enabled';
  const STORAGE_KEY_VOLUME = 'codeduo_bgm_volume';
  const STORAGE_KEY_ACTIVE_ID = 'codeduo_active_bgm_id';
  const DB_NAME = 'CodeDuoMusicDB';
  const STORE_NAME = 'tracks';

  const DEFAULT_VOLUME = 0.35;
  const BPM = 72;
  const BEAT = 60 / BPM;
  const EIGHTH = BEAT / 2;

  /* Frekuensi nada gitar akustik standar (Hz) */
  const FREQS = {
    E2: 82.41, F2: 87.31, 'F#2': 92.50, G2: 98.00, 'G#2': 103.83, A2: 110.00, 'A#2': 116.54, B2: 123.47,
    C3: 130.81, 'C#3': 138.59, D3: 146.83, 'D#3': 155.56, E3: 164.81, F3: 174.61, 'F#3': 185.00, G3: 196.00, 'G#3': 207.65, A3: 220.00, 'A#3': 233.08, B3: 246.94,
    C4: 261.63, 'C#4': 277.18, D4: 293.66, 'D#4': 311.13, E4: 329.63, F4: 349.23, 'F#4': 369.99, G4: 392.00, 'G#4': 415.30, A4: 440.00, 'A#4': 466.16, B4: 493.88,
    C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00,
  };

  /* Pola petikan fingerstyle akustik 16 birama */
  const SCORE = [
    [ { n: 'C3', v: 0.38, p: -0.15 }, { n: 'E4', v: 0.26, p: 0.15 } ],
    [ { n: 'G3', v: 0.22, p: -0.05 } ],
    [ { n: 'D4', v: 0.24, p: 0.08 } ],
    [ { n: 'B4', v: 0.28, p: 0.22 } ],
    [ { n: 'G3', v: 0.25, p: -0.10 } ],
    [ { n: 'E4', v: 0.22, p: 0.12 } ],
    [ { n: 'G4', v: 0.24, p: 0.18 } ],
    [ { n: 'D4', v: 0.20, p: 0.05 } ],

    [ { n: 'B2', v: 0.36, p: -0.18 }, { n: 'D4', v: 0.25, p: 0.12 } ],
    [ { n: 'G3', v: 0.22, p: -0.05 } ],
    [ { n: 'E4', v: 0.24, p: 0.10 } ],
    [ { n: 'G4', v: 0.28, p: 0.20 } ],
    [ { n: 'D3', v: 0.26, p: -0.12 } ],
    [ { n: 'B3', v: 0.22, p: 0.05 } ],
    [ { n: 'E4', v: 0.24, p: 0.14 } ],
    [ { n: 'G3', v: 0.20, p: -0.05 } ],

    [ { n: 'A2', v: 0.38, p: -0.15 }, { n: 'C4', v: 0.26, p: 0.12 } ],
    [ { n: 'E3', v: 0.22, p: -0.08 } ],
    [ { n: 'G3', v: 0.24, p: -0.02 } ],
    [ { n: 'E4', v: 0.28, p: 0.20 } ],
    [ { n: 'E3', v: 0.26, p: -0.10 } ],
    [ { n: 'C4', v: 0.22, p: 0.10 } ],
    [ { n: 'G4', v: 0.25, p: 0.18 } ],
    [ { n: 'E4', v: 0.20, p: 0.12 } ],

    [ { n: 'F2', v: 0.40, p: -0.20 }, { n: 'A3', v: 0.26, p: 0.05 } ],
    [ { n: 'C3', v: 0.24, p: -0.10 } ],
    [ { n: 'E4', v: 0.28, p: 0.18 } ],
    [ { n: 'G4', v: 0.30, p: 0.24 } ],
    [ { n: 'C3', v: 0.26, p: -0.12 } ],
    [ { n: 'A3', v: 0.22, p: 0.06 } ],
    [ { n: 'E4', v: 0.25, p: 0.16 } ],
    [ { n: 'C4', v: 0.20, p: 0.10 } ],

    [ { n: 'E2', v: 0.40, p: -0.20 }, { n: 'G3', v: 0.25, p: -0.02 } ],
    [ { n: 'B2', v: 0.24, p: -0.12 } ],
    [ { n: 'D4', v: 0.26, p: 0.10 } ],
    [ { n: 'E4', v: 0.28, p: 0.20 } ],
    [ { n: 'B2', v: 0.25, p: -0.14 } ],
    [ { n: 'G3', v: 0.22, p: -0.04 } ],
    [ { n: 'B3', v: 0.24, p: 0.08 } ],
    [ { n: 'D4', v: 0.20, p: 0.12 } ],

    [ { n: 'F2', v: 0.38, p: -0.20 }, { n: 'C4', v: 0.26, p: 0.10 } ],
    [ { n: 'C3', v: 0.24, p: -0.10 } ],
    [ { n: 'A3', v: 0.24, p: 0.04 } ],
    [ { n: 'E4', v: 0.30, p: 0.22 } ],
    [ { n: 'A2', v: 0.25, p: -0.14 } ],
    [ { n: 'C4', v: 0.22, p: 0.08 } ],
    [ { n: 'A4', v: 0.26, p: 0.25 } ],
    [ { n: 'E4', v: 0.20, p: 0.14 } ],

    [ { n: 'D3', v: 0.38, p: -0.14 }, { n: 'F4', v: 0.26, p: 0.16 } ],
    [ { n: 'A3', v: 0.22, p: 0.02 } ],
    [ { n: 'C4', v: 0.24, p: 0.08 } ],
    [ { n: 'E4', v: 0.30, p: 0.20 } ],
    [ { n: 'A3', v: 0.25, p: -0.04 } ],
    [ { n: 'F4', v: 0.22, p: 0.14 } ],
    [ { n: 'D4', v: 0.24, p: 0.10 } ],
    [ { n: 'C4', v: 0.20, p: 0.06 } ],

    [ { n: 'G2', v: 0.40, p: -0.18 }, { n: 'C4', v: 0.26, p: 0.10 } ],
    [ { n: 'D3', v: 0.24, p: -0.08 } ],
    [ { n: 'F3', v: 0.24, p: -0.02 } ],
    [ { n: 'D4', v: 0.26, p: 0.12 } ],
    [ { n: 'D3', v: 0.26, p: -0.10 } ],
    [ { n: 'B3', v: 0.25, p: 0.06 } ],
    [ { n: 'G4', v: 0.26, p: 0.20 } ],
    [ { n: 'D4', v: 0.20, p: 0.10 } ],

    [ { n: 'C3', v: 0.38, p: -0.15 }, { n: 'E4', v: 0.26, p: 0.14 } ],
    [ { n: 'G3', v: 0.22, p: -0.04 } ],
    [ { n: 'C4', v: 0.24, p: 0.06 } ],
    [ { n: 'G4', v: 0.30, p: 0.22 } ],
    [ { n: 'G3', v: 0.25, p: -0.08 } ],
    [ { n: 'E4', v: 0.22, p: 0.12 } ],
    [ { n: 'C5', v: 0.32, p: 0.25 } ],
    [ { n: 'G4', v: 0.20, p: 0.18 } ],

    [ { n: 'G#2', v: 0.36, p: -0.18 }, { n: 'B3', v: 0.24, p: 0.06 } ],
    [ { n: 'E3', v: 0.22, p: -0.08 } ],
    [ { n: 'D4', v: 0.24, p: 0.10 } ],
    [ { n: 'E4', v: 0.26, p: 0.18 } ],
    [ { n: 'A2', v: 0.38, p: -0.15 } ],
    [ { n: 'E3', v: 0.22, p: -0.08 } ],
    [ { n: 'C4', v: 0.26, p: 0.12 } ],
    [ { n: 'G3', v: 0.20, p: 0.02 } ],

    [ { n: 'D3', v: 0.38, p: -0.14 }, { n: 'A4', v: 0.28, p: 0.24 } ],
    [ { n: 'A3', v: 0.22, p: 0.02 } ],
    [ { n: 'C4', v: 0.24, p: 0.08 } ],
    [ { n: 'F4', v: 0.26, p: 0.16 } ],
    [ { n: 'A3', v: 0.25, p: -0.04 } ],
    [ { n: 'D4', v: 0.22, p: 0.10 } ],
    [ { n: 'E4', v: 0.24, p: 0.18 } ],
    [ { n: 'C4', v: 0.20, p: 0.06 } ],

    [ { n: 'G2', v: 0.40, p: -0.18 }, { n: 'B3', v: 0.25, p: 0.05 } ],
    [ { n: 'D3', v: 0.24, p: -0.08 } ],
    [ { n: 'G3', v: 0.24, p: -0.02 } ],
    [ { n: 'E4', v: 0.28, p: 0.18 } ],
    [ { n: 'D3', v: 0.25, p: -0.10 } ],
    [ { n: 'B3', v: 0.22, p: 0.05 } ],
    [ { n: 'G4', v: 0.26, p: 0.20 } ],
    [ { n: 'D4', v: 0.20, p: 0.10 } ],

    [ { n: 'F2', v: 0.38, p: -0.20 }, { n: 'C4', v: 0.26, p: 0.10 } ],
    [ { n: 'C3', v: 0.24, p: -0.10 } ],
    [ { n: 'A3', v: 0.24, p: 0.04 } ],
    [ { n: 'E4', v: 0.30, p: 0.20 } ],
    [ { n: 'C3', v: 0.25, p: -0.12 } ],
    [ { n: 'A3', v: 0.22, p: 0.04 } ],
    [ { n: 'G4', v: 0.26, p: 0.22 } ],
    [ { n: 'E4', v: 0.20, p: 0.14 } ],

    [ { n: 'E2', v: 0.38, p: -0.20 }, { n: 'G3', v: 0.25, p: -0.02 } ],
    [ { n: 'B2', v: 0.24, p: -0.12 } ],
    [ { n: 'D4', v: 0.25, p: 0.10 } ],
    [ { n: 'B4', v: 0.28, p: 0.22 } ],
    [ { n: 'B2', v: 0.25, p: -0.12 } ],
    [ { n: 'G3', v: 0.22, p: -0.04 } ],
    [ { n: 'E4', v: 0.24, p: 0.16 } ],
    [ { n: 'D4', v: 0.20, p: 0.10 } ],

    [ { n: 'D3', v: 0.38, p: -0.14 }, { n: 'F4', v: 0.26, p: 0.16 } ],
    [ { n: 'A3', v: 0.22, p: 0.02 } ],
    [ { n: 'C4', v: 0.24, p: 0.08 } ],
    [ { n: 'E4', v: 0.28, p: 0.20 } ],
    [ { n: 'A3', v: 0.25, p: -0.04 } ],
    [ { n: 'D4', v: 0.22, p: 0.10 } ],
    [ { n: 'C4', v: 0.24, p: 0.06 } ],
    [ { n: 'A3', v: 0.20, p: 0.02 } ],

    [ { n: 'G2', v: 0.40, p: -0.18 }, { n: 'D4', v: 0.26, p: 0.12 } ],
    [ { n: 'D3', v: 0.24, p: -0.08 } ],
    [ { n: 'C4', v: 0.26, p: 0.08 } ],
    [ { n: 'F4', v: 0.28, p: 0.18 } ],
    [ { n: 'D3', v: 0.25, p: -0.10 } ],
    [ { n: 'B3', v: 0.24, p: 0.06 } ],
    [ { n: 'D4', v: 0.24, p: 0.12 } ],
    [ { n: 'G3', v: 0.20, p: -0.02 } ],
  ];

  let ctx = null;
  let master = null;
  let bodyFilterEntry = null;
  let isEnabled = true;
  let isMuted = false;
  let volume = DEFAULT_VOLUME;
  let isRunning = false;
  let timerId = null;
  let currentStep = 0;
  let nextStepTime = 0;
  let hasUnlocked = false;
  const subscribers = new Set();
  const bufferCache = new Map();

  /* Custom Audio Player (dari IndexedDB) */
  let customAudio = null;
  let customObjectUrl = null;
  let activeCustomTrack = null;

  /* Baca preferensi tersimpan */
  try {
    if (typeof localStorage !== 'undefined') {
      const savedEn = localStorage.getItem(STORAGE_KEY_ENABLED);
      if (savedEn != null) isEnabled = savedEn === '1';
      const savedVol = localStorage.getItem(STORAGE_KEY_VOLUME);
      if (savedVol != null) {
        const v = Number(savedVol);
        if (isFinite(v)) volume = Math.min(1, Math.max(0, v));
      }
    }
  } catch (_) { /* abaikan jika storage diblokir */ }

  function notify() {
    subscribers.forEach((fn) => {
      try { fn(); } catch (e) { console.warn('[BGM] listener error:', e); }
    });
  }

  function masterGainValue() {
    if (!isEnabled || isMuted) return 0;
    return Math.pow(volume, 1.6) * 0.9;
  }

  /* Ambil track custom dari IndexedDB jika ada */
  function fetchActiveTrackFromDB() {
    if (typeof window === 'undefined' || typeof indexedDB === 'undefined') return Promise.resolve(null);
    let activeId = null;
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
      if (saved != null) activeId = Number(saved);
    } catch (_) {}

    if (activeId == null || isNaN(activeId)) {
      activeCustomTrack = null;
      return Promise.resolve(null);
    }

    return new Promise((resolve) => {
      try {
        const req = indexedDB.open(DB_NAME, 1);
        req.onupgradeneeded = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) {
            db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
          }
        };
        req.onsuccess = (e) => {
          const db = e.target.result;
          if (!db.objectStoreNames.contains(STORE_NAME)) return resolve(null);
          const tx = db.transaction(STORE_NAME, 'readonly');
          const store = tx.objectStore(STORE_NAME);
          const getReq = store.get(activeId);
          getReq.onsuccess = () => {
            const track = getReq.result;
            if (track && track.blob) {
              activeCustomTrack = { id: track.id, name: track.name, size: track.size, blob: track.blob };
              resolve(activeCustomTrack);
            } else {
              activeCustomTrack = null;
              resolve(null);
            }
          };
          getReq.onerror = () => resolve(null);
        };
        req.onerror = () => resolve(null);
      } catch (_) {
        resolve(null);
      }
    });
  }

  /* Sintesis Karplus-Strong per nada (senar alami) */
  function synthesizePluckBuffer(c, freq, durSec = 2.8) {
    const sr = c.sampleRate;
    const len = Math.floor(durSec * sr);
    const buf = c.createBuffer(1, len, sr);
    const data = buf.getChannelData(0);

    const N = Math.max(2, Math.round(sr / freq));
    const delay = new Float32Array(N);

    let prevNoise = 0;
    for (let i = 0; i < N; i++) {
      const white = Math.random() * 2 - 1;
      prevNoise = prevNoise * 0.68 + white * 0.32;
      delay[i] = prevNoise * Math.sin((Math.PI * i) / N);
    }

    const decay = Math.min(0.9972, Math.max(0.984, 0.995 - (freq / 3500) * 0.012));

    let prev = 0;
    let ptr = 0;
    for (let i = 0; i < len; i++) {
      const cur = delay[ptr];
      const filtered = (cur * 0.51 + prev * 0.49) * decay;
      prev = cur;
      delay[ptr] = filtered;
      ptr++;
      if (ptr >= N) ptr = 0;
      data[i] = cur;
    }
    return buf;
  }

  function getPluckBuffer(c, freq) {
    const key = freq.toFixed(2);
    let variations = bufferCache.get(key);
    if (!variations) {
      variations = [synthesizePluckBuffer(c, freq), synthesizePluckBuffer(c, freq)];
      bufferCache.set(key, variations);
    }
    return variations[Math.floor(Math.random() * variations.length)];
  }

  function ensureGraph() {
    if (!ctx) {
      if (typeof window === 'undefined') return null;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try {
        ctx = new AC();
      } catch (_) {
        return null;
      }
    }

    if (bodyFilterEntry) return ctx;

    const bodyAir = ctx.createBiquadFilter();
    bodyAir.type = 'peaking';
    bodyAir.frequency.value = 105;
    bodyAir.Q.value = 2.6;
    bodyAir.gain.value = 4.2;

    const bodyWood = ctx.createBiquadFilter();
    bodyWood.type = 'peaking';
    bodyWood.frequency.value = 215;
    bodyWood.Q.value = 2.2;
    bodyWood.gain.value = 3.6;

    const bodyUpper = ctx.createBiquadFilter();
    bodyUpper.type = 'peaking';
    bodyUpper.frequency.value = 430;
    bodyUpper.Q.value = 1.9;
    bodyUpper.gain.value = 2.0;

    const bodyWarm = ctx.createBiquadFilter();
    bodyWarm.type = 'lowpass';
    bodyWarm.frequency.value = 3600;
    bodyWarm.Q.value = 0.707;

    bodyAir.connect(bodyWood);
    bodyWood.connect(bodyUpper);
    bodyUpper.connect(bodyWarm);
    bodyFilterEntry = bodyAir;

    const delayL = ctx.createDelay();
    delayL.delayTime.value = 0.028;
    const delayR = ctx.createDelay();
    delayR.delayTime.value = 0.042;

    const delayGainL = ctx.createGain();
    delayGainL.gain.value = 0.12;
    const delayGainR = ctx.createGain();
    delayGainR.gain.value = 0.10;

    const delayFilter = ctx.createBiquadFilter();
    delayFilter.type = 'lowpass';
    delayFilter.frequency.value = 2000;

    master = ctx.createGain();
    master.gain.value = masterGainValue();

    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -22;
    comp.knee.value = 20;
    comp.ratio.value = 3.5;
    comp.attack.value = 0.02;
    comp.release.value = 0.28;

    bodyWarm.connect(master);

    bodyWarm.connect(delayFilter);
    delayFilter.connect(delayL);
    delayFilter.connect(delayR);
    delayL.connect(delayGainL);
    delayR.connect(delayGainR);
    delayGainL.connect(master);
    delayGainR.connect(master);

    master.connect(comp);
    comp.connect(ctx.destination);

    return ctx;
  }

  function playNote(freq, time, vel, pan) {
    if (!bodyFilterEntry || !ctx) return;
    const buf = getPluckBuffer(ctx, freq);
    const src = ctx.createBufferSource();
    src.buffer = buf;

    const noteGain = ctx.createGain();
    const humanVel = vel * (0.92 + Math.random() * 0.16);
    noteGain.gain.setValueAtTime(Math.max(0.01, humanVel), time);

    if (typeof ctx.createStereoPanner === 'function') {
      const panner = ctx.createStereoPanner();
      panner.pan.setValueAtTime(Math.min(1, Math.max(-1, pan)), time);
      src.connect(noteGain);
      noteGain.connect(panner);
      panner.connect(bodyFilterEntry);
    } else {
      src.connect(noteGain);
      noteGain.connect(bodyFilterEntry);
    }

    try {
      src.start(time);
    } catch (_) {}
  }

  function schedule() {
    if (!isRunning || !ctx) return;
    const isHidden = typeof document !== 'undefined' && document.hidden;
    const lookahead = isHidden ? 1.2 : 0.28;

    if (nextStepTime < ctx.currentTime) {
      nextStepTime = ctx.currentTime + 0.05;
    }

    while (nextStepTime < ctx.currentTime + lookahead) {
      const stepNotes = SCORE[currentStep];
      if (stepNotes && stepNotes.length) {
        for (let i = 0; i < stepNotes.length; i++) {
          const item = stepNotes[i];
          const freq = FREQS[item.n];
          if (freq) {
            const jitter = (Math.random() * 2 - 1) * 0.004;
            const t = Math.max(ctx.currentTime, nextStepTime + (item.d || 0) + jitter);
            playNote(freq, t, item.v, item.p || 0);
          }
        }
      }
      nextStepTime += EIGHTH;
      currentStep = (currentStep + 1) % SCORE.length;
    }
  }

  /* Mulai pemutar: jika ada track custom → mainkan customAudio; jika tidak → mainkan synth */
  async function startAudioEngine() {
    if (!isEnabled || isMuted) return;

    /* Periksa track custom */
    const track = await fetchActiveTrackFromDB();
    if (track && track.blob) {
      /* Hentikan synth jika menyala */
      stopSynth();

      if (!customAudio) {
        customAudio = new Audio();
        customAudio.loop = true;
      }
      if (customObjectUrl) {
        URL.revokeObjectURL(customObjectUrl);
      }
      customObjectUrl = URL.createObjectURL(track.blob);
      customAudio.src = customObjectUrl;
      customAudio.volume = isMuted ? 0 : volume;

      try {
        await customAudio.play();
        isRunning = true;
      } catch (e) {
        console.warn('[BGM] Autoplay custom diblokir, menunggu klik:', e);
      }
      notify();
      return;
    }

    /* Fallback ke synthesizer akustik bawaan */
    stopCustomAudio();
    startSynth();
  }

  function startSynth() {
    if (timerId != null) return;
    const c = ensureGraph();
    if (!c) return;
    if (c.state === 'suspended') c.resume().catch(() => {});

    isRunning = true;
    nextStepTime = c.currentTime + 0.1;
    applyMasterGain(true);
    timerId = setInterval(schedule, 40);
    notify();
  }

  function stopSynth() {
    if (timerId != null) {
      clearInterval(timerId);
      timerId = null;
    }
  }

  function stopCustomAudio() {
    if (customAudio) {
      customAudio.pause();
      customAudio.currentTime = 0;
    }
    if (customObjectUrl) {
      URL.revokeObjectURL(customObjectUrl);
      customObjectUrl = null;
    }
  }

  function stopAudioEngine() {
    stopSynth();
    stopCustomAudio();
    isRunning = false;
    applyMasterGain(true);
    notify();
  }

  function applyMasterGain(fade = true) {
    if (customAudio) {
      customAudio.volume = (!isEnabled || isMuted) ? 0 : volume;
    }

    if (!master || !ctx) return;
    const target = masterGainValue();
    const now = ctx.currentTime;
    try {
      master.gain.cancelScheduledValues(now);
      if (fade) {
        master.gain.setValueAtTime(master.gain.value, now);
        master.gain.linearRampToValueAtTime(target, now + 0.35);
      } else {
        master.gain.setValueAtTime(target, now);
      }
    } catch (_) {
      master.gain.value = target;
    }
  }

  /* Autoplay unlock */
  let initialized = false;
  function init() {
    if (initialized) return;
    initialized = true;

    if (typeof window === 'undefined') return;

    fetchActiveTrackFromDB().then(() => notify());

    const unlock = () => {
      hasUnlocked = true;
      ensureGraph();
      if (ctx && ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      if (isEnabled && !isMuted && !isRunning) {
        startAudioEngine();
      }
    };

    window.addEventListener('pointerdown', unlock, { once: true, passive: true });
    window.addEventListener('keydown', unlock, { once: true, passive: true });
    window.addEventListener('touchstart', unlock, { once: true, passive: true });

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && isRunning && ctx && !activeCustomTrack) {
        if (ctx.state === 'suspended') ctx.resume().catch(() => {});
        schedule();
      }
    });

    window.addEventListener('storage', (e) => {
      if (e.key === STORAGE_KEY_ACTIVE_ID) {
        fetchActiveTrackFromDB().then(() => {
          if (isRunning) startAudioEngine();
          notify();
        });
      }
    });
  }

  return {
    init,
    unlock() {
      hasUnlocked = true;
      ensureGraph();
      if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
      if (isEnabled && !isMuted && !isRunning) startAudioEngine();
    },
    play() {
      hasUnlocked = true;
      ensureGraph();
      if (!isRunning) startAudioEngine();
    },
    pause() {
      stopAudioEngine();
    },
    toggle() {
      if (isRunning) {
        this.setEnabled(false);
      } else {
        this.setEnabled(true);
        this.play();
      }
    },
    setEnabled(val) {
      isEnabled = !!val;
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(STORAGE_KEY_ENABLED, isEnabled ? '1' : '0');
        }
      } catch (_) {}

      if (isEnabled && !isMuted && hasUnlocked) {
        startAudioEngine();
      } else {
        stopAudioEngine();
      }
      notify();
    },
    isEnabled() {
      return isEnabled;
    },
    isPlaying() {
      return isRunning && isEnabled && !isMuted;
    },
    setMuted(m) {
      isMuted = !!m;
      applyMasterGain(true);
      if (isMuted) {
        stopAudioEngine();
      } else if (isEnabled && hasUnlocked) {
        startAudioEngine();
      }
      notify();
    },
    isMuted() {
      return isMuted;
    },
    setVolume(v) {
      volume = Math.min(1, Math.max(0, Number(v) || 0));
      try {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(STORAGE_KEY_VOLUME, String(volume));
        }
      } catch (_) {}
      applyMasterGain(false);
      notify();
    },
    getVolume() {
      return volume;
    },
    /* Beralih ke track kustom atau kembali ke synth bawaan */
    async setActiveTrack(trackId) {
      try {
        if (trackId == null) {
          localStorage.removeItem(STORAGE_KEY_ACTIVE_ID);
          activeCustomTrack = null;
        } else {
          localStorage.setItem(STORAGE_KEY_ACTIVE_ID, String(trackId));
        }
      } catch (_) {}

      if (isRunning) {
        await startAudioEngine();
      } else {
        await fetchActiveTrackFromDB();
      }
      notify();
    },
    getActiveTrack() {
      return activeCustomTrack;
    },
    subscribe(fn) {
      subscribers.add(fn);
      return () => { subscribers.delete(fn); };
    },
  };
})();

export { BGM };
