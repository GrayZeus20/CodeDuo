/* CodeDuo SFX — Web Audio oscillator synth. Nol asset file, nol dependency, offline-safe.
 * Autoplay policy: AudioContext dibuat lazy, resume() pada gesture pertama (unlock()).
 * ponytail: oscillator envelope sederhana — kalau mau musik BGM nanti: AudioBuffer + fetch mp3.
 */
'use strict';

const SFX = (() => {
  let ctx = null;
  let muted = false;

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

  function blip(opts) {
    /* force: abaikan state mute — dipakai untuk konfirmasi mute/unmute itu sendiri */
    if (muted && !opts.force) return;
    const c = ensure();
    if (!c) return;
    const freq = opts.freq || 440;
    const freq2 = opts.freq2 || null;
    const type = opts.type || 'sine';
    const dur = opts.dur || 0.12;
    const vol = opts.vol || 0.15;
    const delay = opts.delay || 0;
    try {
      const t0 = c.currentTime + delay;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, t0);
      if (freq2) osc.frequency.exponentialRampToValueAtTime(freq2, t0 + dur);
      gain.gain.setValueAtTime(0.0001, t0);
      gain.gain.exponentialRampToValueAtTime(vol, t0 + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(t0);
      osc.stop(t0 + dur + 0.03);
    } catch (_) { /* audio gagal tidak boleh mematikan alur belajar */ }
  }

  return {
    setMuted(m) { muted = !!m; },
    isMuted() { return muted; },
    unlock() { ensure(); },
    click() { blip({ freq: 660, dur: 0.05, vol: 0.07, type: 'triangle' }); },
    correct() {
      blip({ freq: 784, dur: 0.1, vol: 0.15, type: 'sine' });
      blip({ freq: 1175, dur: 0.14, vol: 0.15, type: 'sine', delay: 0.09 });
    },
    wrong() { blip({ freq: 220, freq2: 155, dur: 0.22, vol: 0.13, type: 'square' }); },
    fail() { blip({ freq: 196, freq2: 98, dur: 0.4, vol: 0.15, type: 'sawtooth' }); },
    complete() {
      [523, 659, 784, 1047].forEach((f, i) => blip({ freq: f, dur: 0.16, vol: 0.14, type: 'sine', delay: i * 0.11 }));
    },
    streak() { blip({ freq: 880, freq2: 1760, dur: 0.28, vol: 0.11, type: 'triangle' }); },
    /* Efek suara dielus-elus (purr / chime hangat) */
    pet() {
      blip({ freq: 587, freq2: 880, dur: 0.16, vol: 0.12, type: 'sine' });
      blip({ freq: 880, freq2: 1175, dur: 0.2, vol: 0.1, type: 'sine', delay: 0.08 });
    },
    /* Efek suara pusing saat dispam klik */
    dizzy() {
      blip({ freq: 440, freq2: 220, dur: 0.14, vol: 0.16, type: 'sawtooth' });
      blip({ freq: 330, freq2: 165, dur: 0.16, vol: 0.16, type: 'sawtooth', delay: 0.1 });
      blip({ freq: 260, freq2: 130, dur: 0.22, vol: 0.16, type: 'sawtooth', delay: 0.22 });
    },
    /* Efek suara diangkat saat di-drag */
    lift() {
      blip({ freq: 380, freq2: 680, dur: 0.14, vol: 0.12, type: 'triangle' });
    },
    /* Efek suara mendarat setelah di-drag */
    land() {
      blip({ freq: 520, freq2: 784, dur: 0.1, vol: 0.14, type: 'sine' });
      blip({ freq: 784, freq2: 659, dur: 0.14, vol: 0.12, type: 'sine', delay: 0.08 });
    },
    /* konfirmasi audio saat suara DIMATIKAN — selalu berbunyi (force) agar user dengar suara terakhirnya */
    muteOn() {
      blip({ freq: 520, freq2: 260, dur: 0.18, vol: 0.16, type: 'triangle', force: true });
    },
    /* konfirmasi audio saat suara DINYALAKAN — selalu berbunyi walau baru di-unmute */
    muteOff() {
      blip({ freq: 520, freq2: 1040, dur: 0.18, vol: 0.16, type: 'triangle', force: true });
    },
  };
})();

export { SFX };

/* Node CJS tetap jalan bila di-require (tak dipakai test; aman). */
if (typeof module !== 'undefined' && module.exports) module.exports = SFX;
