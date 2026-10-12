/* CodeDuo — pure exercise checkers. No DOM. Node-testable.
 * ponytail: checkCode pakai new Function (sandbox = browser user sendiri, tool lokal).
 * upgrade path kalau mau multi-user online: pindah ke Worker + timeout + iframe sandbox.
 */
'use strict';

function normalizeCode(s) {
  return String(s == null ? '' : s)
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/;\s*$/, '')
    .trim();
}

function checkFill(user, accept) {
  const u = normalizeCode(user);
  if (!u) return { correct: false, reason: 'empty', message: 'Jawaban masih kosong.' };
  const list = Array.isArray(accept) ? accept : [accept];
  const ok = list.some((a) => normalizeCode(a) === u);
  return ok
    ? { correct: true }
    : { correct: false, reason: 'wrong', message: 'Jawaban belum tepat.' };
}

function checkArrange(userOrder, blocks) {
  if (!Array.isArray(userOrder) || userOrder.length !== blocks.length) {
    return { correct: false, reason: 'incomplete', message: 'Susun dulu semua bloknya.' };
  }
  const ok = userOrder.every((id, i) => id === blocks[i]);
  return ok
    ? { correct: true }
    : { correct: false, reason: 'wrong', message: 'Urutan blok belum benar.' };
}

function checkCode(userCode, spec) {
  const code = String(userCode == null ? '' : userCode);
  if (!code.trim()) return { correct: false, reason: 'empty', message: 'Kode masih kosong.' };
  let fn;
  try {
    const factory = new Function(
      '"use strict";\n' +
        code +
        '\nreturn typeof ' + spec.fnName + ' === "function" ? ' + spec.fnName + ' : undefined;'
    );
    fn = factory();
  } catch (e) {
    return { correct: false, reason: 'syntax', message: 'Syntax error: ' + e.message };
  }
  if (typeof fn !== 'function') {
    return {
      correct: false,
      reason: 'missing-fn',
      message: 'Fungsi ' + spec.fnName + ' tidak ditemukan. Cek namanya.',
    };
  }
  for (const t of spec.tests) {
    let got;
    try {
      got = fn.apply(null, t.args);
    } catch (e) {
      return {
        correct: false,
        reason: 'runtime',
        message: 'Error waktu jalan: ' + e.message,
      };
    }
    if (JSON.stringify(got) !== JSON.stringify(t.expected)) {
      return {
        correct: false,
        reason: 'wrong-output',
        message:
          'Input ' + JSON.stringify(t.args) +
          ' → hasil ' + JSON.stringify(got) +
          ', seharusnya ' + JSON.stringify(t.expected),
      };
    }
  }
  return { correct: true };
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { normalizeCode, checkFill, checkCode, checkArrange };
}
