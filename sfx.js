/* CodeDuo SFX — Web Audio oscillator synth. Nol asset file, nol dependency, offline-safe.
 *
 * Rantai sinyal:  osc → env (ADSR) → lowpass → pan → master gain → kompresor → speaker
 * - `master` + kompresor = suara lebih keras tanpa pecah saat beberapa nada menumpuk.
 * - Tiap blip diberi sedikit variasi pitch/timing ("humanize") supaya tidak terdengar robotik.
 * - Volume disimpan terpisah dari state game (localStorage `codeduo_sfx_volume`).
 *
 * Autoplay policy: AudioContext dibuat lazy, resume() pada gesture pertama (unlock()).
 */
'use strict';

const SFX = (() => {
  const VOLUME_KEY = 'codeduo_sfx_volume';
  const DEFAULT_VOLUME = 0.8;

  let ctx = null;
  let master = null;
  let muted = false;
  let volume = DEFAULT_VOLUME;

  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(VOLUME_KEY) : null;
    if (raw != null) {
      const v = Number(raw);
      if (isFinite(v)) volume = Math.min(1, Math.max(0, v));
    }
  } catch (_) { /* storage diblokir → pakai default */ }

  function ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      try {
        ctx = new AC();
      } catch (_) {
        return null;
      }
    }
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    return ctx;
  }

  /* Slider 50% bukan berarti 50% kenyaringan → pakai kurva persepsi. */
  function masterGain(v) { return Math.pow(v, 1.5) * 1.45; }

  function graph(c) {
    if (master) return master;
    master = c.createGain();
    master.gain.value = masterGain(volume);
    const comp = c.createDynamicsCompressor();
    comp.threshold.value = -20;
    comp.knee.value = 24;
    comp.ratio.value = 6;
    comp.attack.value = 0.003;
    comp.release.value = 0.25;
    master.connect(comp);
    comp.connect(c.destination);
    return master;
  }

  /* Ledakan noise pendek: memberi "tekstur" ketukan yang tak bisa dibuat oscillator murni. */
  function noiseBurst(c, out, t0, dur, vol, freq) {
    const len = Math.max(1, Math.floor(c.sampleRate * dur));
    const buf = c.createBuffer(1, len, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < len; i++) {
      data[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 2;
    }
    const src = c.createBufferSource();
    src.buffer = buf;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = freq || 2400;
    bp.Q.value = 1.1;
    const g = c.createGain();
    g.gain.value = vol;
    src.connect(bp);
    bp.connect(g);
    g.connect(out);
    src.start(t0);
    src.stop(t0 + dur);
  }

  function blip(opts) {
    /* force: abaikan state mute — dipakai untuk konfirmasi mute/unmute itu sendiri */
    if (muted && !opts.force) return;
    const c = ensure();
    if (!c) return;
    const out = graph(c);

    const dur = opts.dur || 0.12;
    const vol = opts.vol != null ? opts.vol : 0.26;
    const type = opts.type || 'sine';
    const freq = opts.freq || 440;
    const freq2 = opts.freq2 || null;
    /* Humanize: geser nada ±12 sen & waktu ±6ms supaya tiap klik tidak identik. */
    const human = opts.exact ? 0 : 1;
    const t0 = c.currentTime + (opts.delay || 0) + human * Math.random() * 0.006;
    const detune = human * (Math.random() * 2 - 1) * 12;
    const attack = Math.min(opts.attack || 0.012, dur * 0.4);
    const hold = Math.max(attack + 0.005, dur * (opts.hold || 0.5));
    const sustain = opts.sustain != null ? opts.sustain : 0.35;

    const env = c.createGain();
    env.gain.setValueAtTime(0.0001, t0);
    env.gain.exponentialRampToValueAtTime(vol, t0 + attack);
    env.gain.exponentialRampToValueAtTime(Math.max(0.0001, vol * sustain), t0 + hold);
    env.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

    const filter = c.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(opts.cutoff || 7000, t0);
    filter.Q.value = opts.q || 0.8;

    env.connect(filter);

    if (typeof c.createStereoPanner === 'function') {
      const pan = c.createStereoPanner();
      pan.pan.value = opts.pan || 0;
      filter.connect(pan);
      pan.connect(out);
    } else {
      filter.connect(out);
    }

    const voices = opts.voices || 1;
    for (let i = 0; i < voices; i++) {
      try {
        const osc = c.createOscillator();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, t0);
        osc.detune.value = detune + i * 8;
        if (freq2) osc.frequency.exponentialRampToValueAtTime(freq2, t0 + dur);
        osc.connect(env);
        osc.start(t0);
        osc.stop(t0 + dur + 0.05);
      } catch (_) { /* audio gagal tidak boleh mematikan alur belajar */ }
    }

    if (opts.noise) noiseBurst(c, filter, t0, Math.min(0.06, dur), opts.noise, opts.noiseFreq);
  }

  return {
    setMuted(m) { muted = !!m; },
    isMuted() { return muted; },
    /* 0..1 — dipakai slider pengaturan & disimpan untuk sesi berikutnya. */
    setVolume(v) {
      volume = Math.min(1, Math.max(0, Number(v) || 0));
      if (master) master.gain.value = masterGain(volume);
      try { localStorage.setItem(VOLUME_KEY, String(volume)); } catch (_) {}
    },
    getVolume() { return volume; },
    unlock() { ensure(); },

    /* --- interaksi dasar --- */
    click() { blip({ freq: 740, dur: 0.055, vol: 0.17, type: 'triangle', noise: 0.1, noiseFreq: 3200 }); },
    pick() {
      blip({ freq: 988, dur: 0.07, vol: 0.2, type: 'triangle', noise: 0.08, noiseFreq: 2600 });
      blip({ freq: 1319, dur: 0.09, vol: 0.12, type: 'sine', delay: 0.03 });
    },
    /* whoosh naik saat membuka topik/pelajaran */
    open() {
      blip({ freq: 330, freq2: 720, dur: 0.2, vol: 0.2, type: 'triangle', cutoff: 4200, pan: -0.15 });
      blip({ freq: 660, freq2: 990, dur: 0.16, vol: 0.1, type: 'sine', delay: 0.05, pan: 0.2 });
    },
    /* whoosh turun saat kembali */
    back() {
      blip({ freq: 620, freq2: 300, dur: 0.18, vol: 0.18, type: 'triangle', cutoff: 3800 });
    },

    /* --- ekspresi Bibit --- */
    happy() {
      blip({ freq: 587, freq2: 784, dur: 0.12, vol: 0.24, type: 'sine', voices: 2 });
      blip({ freq: 880, dur: 0.16, vol: 0.22, type: 'triangle', delay: 0.09 });
    },
    angry() {
      blip({ freq: 260, freq2: 185, dur: 0.16, vol: 0.24, type: 'square', cutoff: 2200 });
      blip({ freq: 220, freq2: 146, dur: 0.2, vol: 0.2, type: 'sawtooth', delay: 0.12, cutoff: 1800 });
    },
    sleep() {
      blip({ freq: 392, freq2: 330, dur: 0.26, vol: 0.18, type: 'triangle', cutoff: 2600 });
      blip({ freq: 294, freq2: 220, dur: 0.36, vol: 0.16, type: 'sine', delay: 0.22 });
    },
    wake() {
      blip({ freq: 440, freq2: 660, dur: 0.12, vol: 0.22, type: 'sine' });
      blip({ freq: 784, freq2: 988, dur: 0.16, vol: 0.22, type: 'triangle', delay: 0.08 });
    },
    pet() {
      blip({ freq: 587, freq2: 880, dur: 0.16, vol: 0.24, type: 'sine', voices: 2 });
      blip({ freq: 880, freq2: 1175, dur: 0.2, vol: 0.2, type: 'sine', delay: 0.08 });
    },
    dizzy() {
      blip({ freq: 440, freq2: 220, dur: 0.14, vol: 0.26, type: 'sawtooth', cutoff: 2400, pan: -0.3 });
      blip({ freq: 330, freq2: 165, dur: 0.16, vol: 0.26, type: 'sawtooth', delay: 0.1, cutoff: 2200, pan: 0.3 });
      blip({ freq: 260, freq2: 130, dur: 0.22, vol: 0.26, type: 'sawtooth', delay: 0.22, cutoff: 2000 });
    },
    lift() {
      blip({ freq: 380, freq2: 680, dur: 0.14, vol: 0.2, type: 'triangle', cutoff: 4200 });
    },
    land() {
      blip({ freq: 520, freq2: 784, dur: 0.1, vol: 0.24, type: 'sine', noise: 0.1, noiseFreq: 1800 });
      blip({ freq: 784, freq2: 659, dur: 0.14, vol: 0.2, type: 'sine', delay: 0.08 });
    },

    /* --- penilaian jawaban --- */
    correct() {
      /* Arpeggio mayor pendek + kilau di atasnya: terdengar "berhasil". */
      blip({ freq: 784, dur: 0.1, vol: 0.3, type: 'sine', voices: 2 });
      blip({ freq: 1175, dur: 0.14, vol: 0.3, type: 'sine', delay: 0.09 });
      blip({ freq: 1568, dur: 0.16, vol: 0.14, type: 'triangle', delay: 0.18, cutoff: 9000 });
    },
    wrong() {
      blip({ freq: 220, freq2: 155, dur: 0.24, vol: 0.3, type: 'square', cutoff: 1600 });
      blip({ freq: 165, freq2: 110, dur: 0.26, vol: 0.18, type: 'sawtooth', delay: 0.06, cutoff: 1200 });
    },
    /* Hampir benar: dua nada lembut naik-turun — tidak menghukum */
    close() {
      blip({ freq: 660, freq2: 550, dur: 0.12, vol: 0.24, type: 'triangle' });
      blip({ freq: 550, freq2: 660, dur: 0.16, vol: 0.22, type: 'triangle', delay: 0.1 });
    },
    fail() {
      blip({ freq: 196, freq2: 98, dur: 0.42, vol: 0.3, type: 'sawtooth', cutoff: 1400, noise: 0.14, noiseFreq: 300 });
      blip({ freq: 147, freq2: 73, dur: 0.5, vol: 0.22, type: 'sine', delay: 0.12 });
    },
    /* Nyawa berkurang (beda dari "salah": lebih berat & pendek) */
    heartLost() {
      blip({ freq: 180, freq2: 90, dur: 0.22, vol: 0.3, type: 'sine', cutoff: 1200 });
      blip({ freq: 140, freq2: 70, dur: 0.24, vol: 0.2, type: 'triangle', delay: 0.05, cutoff: 900 });
    },
    complete() {
      [523, 659, 784, 1047].forEach((f, i) => blip({ freq: f, dur: 0.18, vol: 0.26, type: 'sine', delay: i * 0.11, voices: 2 }));
      blip({ freq: 1568, dur: 0.3, vol: 0.12, type: 'triangle', delay: 0.48, cutoff: 9000 });
    },
    streak() { blip({ freq: 880, freq2: 1760, dur: 0.28, vol: 0.22, type: 'triangle', cutoff: 9000 }); },
    /* Mulai ujian tier */
    exam() {
      blip({ freq: 523, dur: 0.12, vol: 0.26, type: 'triangle', voices: 2 });
      blip({ freq: 659, dur: 0.12, vol: 0.24, type: 'triangle', delay: 0.12 });
      blip({ freq: 880, dur: 0.26, vol: 0.26, type: 'triangle', delay: 0.24, cutoff: 9000 });
    },

    /* konfirmasi audio saat suara DIMATIKAN — selalu berbunyi (force) agar user dengar suara terakhirnya */
    muteOn() { blip({ freq: 520, freq2: 260, dur: 0.18, vol: 0.26, type: 'triangle', force: true }); },
    /* konfirmasi audio saat suara DINYALAKAN — selalu berbunyi walau baru di-unmute */
    muteOff() {
      blip({ freq: 520, freq2: 1040, dur: 0.18, vol: 0.26, type: 'triangle', force: true });
      blip({ freq: 1560, dur: 0.12, vol: 0.12, type: 'sine', delay: 0.1, force: true });
    },
  };
})();

export { SFX };
