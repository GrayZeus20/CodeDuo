/* CodeDuo — lapisan motion (anime.js + canvas-confetti). Semua no-op saat
 * prefers-reduced-motion. Dipanggil dari komponen lewat efek; logika store tak tahu motion. */
'use strict';

import anime from 'animejs';
import confetti from 'canvas-confetti';

export const REDUCED = typeof window !== 'undefined'
  && typeof window.matchMedia === 'function'
  && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function pop(el) {
  if (REDUCED || !el) return;
  anime({
    targets: el,
    scale: [
      { value: 1.06, duration: 110, easing: 'easeOutQuad' },
      { value: 1, duration: 160, easing: 'easeOutBack' },
    ],
  });
}

export function slideUp(el) {
  if (REDUCED || !el) return;
  anime({ targets: el, translateY: [40, 0], opacity: [0, 1], duration: 280, easing: 'easeOutCubic' });
}

export function fadeOutDown(el, done) {
  if (REDUCED || !el) { if (done) done(); return; }
  anime({ targets: el, translateY: 0, opacity: 0, duration: 180, easing: 'easeInCubic', complete: done });
}

export function celebrate() {
  if (REDUCED || typeof confetti !== 'function') return;
  confetti({ particleCount: 140, spread: 78, origin: { y: 0.6 }, colors: ['#58cc02', '#ffc800', '#1cb0f6', '#ff4b4b'] });
  setTimeout(() => confetti({ particleCount: 80, spread: 100, origin: { y: 0.7 } }), 250);
}

export function pulse(el) {
  if (REDUCED || !el) return;
  anime({
    targets: el,
    scale: [
      { value: 1.35, duration: 180, easing: 'easeOutBack' },
      { value: 1, duration: 320, easing: 'easeOutElastic(1, .5)' },
    ],
  });
}

export { anime, confetti };
