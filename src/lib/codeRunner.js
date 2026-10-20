/* CodeDuo — penjalan jawaban 'code' murid dengan batas waktu.
 * Worker + timeout: `while(true)` di jawaban murid tidak membekukan tab (worker di-terminate).
 * Node/test (tanpa Worker) → jalur sinkron checkCode, jadi modul ini tetap Node-testable.
 * ponytail: sync fallback kalau Worker tak bisa dibuat (browser eksotis) — risiko freeze
 * kembali; upgrade path: tampilkan pesan "tak bisa memeriksa" alih-alih fallback sinkron. */
'use strict';

import { checkCode } from '../../checkers.js';

const TIMEOUT_MS = 1200;

/* close:true → tidak mengurangi nyawa, soal diulang di akhir sesi (aturan longgar). */
const TIMEOUT_RESULT = {
  correct: false,
  close: true,
  message: 'Kodenya jalan kelamaan (mungkin loop tak berujung). Rapikan dulu, lalu cek lagi.',
};
const ERROR_RESULT = {
  correct: false,
  close: true,
  message: 'Pemeriksa kode gagal dijalankan. Coba tekan Cek lagi.',
};

export function runCodeCheck(code, spec, timeoutMs) {
  if (typeof window === 'undefined' || typeof Worker !== 'function') {
    return Promise.resolve(checkCode(code, spec));
  }
  return new Promise((resolve) => {
    let worker;
    let timer;
    let settled = false;
    const done = (result) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { worker.terminate(); } catch (_) {}
      resolve(result);
    };
    try {
      worker = new Worker(new URL('./codeWorker.js', import.meta.url), { type: 'module' });
    } catch (_) {
      resolve(checkCode(code, spec));
      return;
    }
    timer = setTimeout(() => done(TIMEOUT_RESULT), Number.isFinite(timeoutMs) ? timeoutMs : TIMEOUT_MS);
    worker.onmessage = (e) => done(e.data);
    worker.onerror = () => done(ERROR_RESULT);
    worker.postMessage({ code: code, spec: spec });
  });
}
