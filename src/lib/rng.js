/* CodeDuo — util murni (RNG ber-seed + shuffle). Dipisah dari store supaya Node-testable. */
'use strict';

export const MAX_HEARTS = 3;

/* PRNG deterministik (mulberry32) — path personal per seed. */
export function mulberry32(a) {
  return function () {
    a |= 0; a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* Fisher-Yates. rng opsional (default Math.random). Tak memutasi input. */
export function shuffled(arr, rng) {
  const a = arr.slice();
  const r = rng || Math.random;
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MAX_HEARTS, mulberry32, shuffled };
}
