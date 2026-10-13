/* CodeDuo — self-test. Run: node test.js
 * `package.json` = type:module → file ini ESM. Modul mesin tetap dual-mode (export + module.exports),
 * jadi import di sini & require() legacy sama-sama valid. */
'use strict';
import assert from 'node:assert/strict';
import { normalizeCode, checkFill, checkCode, checkArrange } from './checkers.js';
import { CURRICULUM, syncPath, stepsForTopic, allQuestionIds, resolveQuestion, questionKey, TIER_ORDER, STEP_SIZE } from './content.js';
import * as SRS from './srs.js';
import {
  ROBOT_MOODS, ROBOT_STATES, robotSVG, robotSay, robotReact,
  stateFromMood, ledMatrixFor, mountRobotHead,
  RH_MOTION, RH_COLORS, _rhHash, _rhFrame, _rhMotionFor, _rhFaceGrid,
  EXPR_STATES, EXPR_FEATURES, exprFeatures, exprLabelIndex,
  createExpressionModel, restoreExpressionModel, exprLearn, exprProbs, pickExpression, stateToMood,
} from './robot.js';

let passed = 0;
let failed = 0;
function t(name, fn) {
  try {
    fn();
    passed++;
    console.log('ok  ' + name);
  } catch (e) {
    failed++;
    console.error('FAIL ' + name + ' — ' + e.message);
  }
}

/* --- normalizeCode --- */
t('normalize: case + trim + semicolon', () => {
  assert.strictEqual(normalizeCode('  WHERE  ;'), 'where');
});
t('normalize: smart quotes + multiline collapse', () => {
  assert.strictEqual(normalizeCode('“select”\n  *'), '"select" *');
});
t('normalize: null/undefined safe', () => {
  assert.strictEqual(normalizeCode(null), '');
  assert.strictEqual(normalizeCode(undefined), '');
});

/* --- checkFill --- */
t('fill happy: accept variant with different case/semicolon', () => {
  assert.strictEqual(checkFill('WHERE;', ['where']).correct, true);
});
t('fill happy: alternatif accept', () => {
  assert.strictEqual(checkFill('off', ['"off"', 'off']).correct, true);
});
t('fill edge: kosong ditolak', () => {
  const r = checkFill('   ', ['where']);
  assert.strictEqual(r.correct, false);
  assert.strictEqual(r.reason, 'empty');
});
t('fill error: salah ditolak', () => {
  assert.strictEqual(checkFill('selectt', ['select']).correct, false);
});

/* --- checkArrange --- */
const blocks = ['b0', 'b1', 'b2'];
t('arrange happy: urut benar', () => {
  assert.strictEqual(checkArrange(['b0', 'b1', 'b2'], blocks).correct, true);
});
t('arrange edge: belum lengkap', () => {
  const r = checkArrange(['b0'], blocks);
  assert.strictEqual(r.correct, false);
  assert.strictEqual(r.reason, 'incomplete');
});
t('arrange error: urut salah', () => {
  assert.strictEqual(checkArrange(['b2', 'b1', 'b0'], blocks).correct, false);
});
t('arrange error: null userOrder', () => {
  assert.strictEqual(checkArrange(null, blocks).correct, false);
});

/* --- checkCode --- */
const specAdd = {
  fnName: 'tambah',
  tests: [
    { args: [1, 2], expected: 3 },
    { args: [-5, 5], expected: 0 },
  ],
};
t('code happy: fungsi benar lolos semua tes', () => {
  assert.strictEqual(checkCode('function tambah(a,b){ return a+b; }', specAdd).correct, true);
});
t('code edge: tes terakhir gagal → salah', () => {
  const r = checkCode('function tambah(a,b){ return a-b; }', specAdd);
  assert.strictEqual(r.correct, false);
  assert.strictEqual(r.reason, 'wrong-output');
});
t('code error: kosong', () => {
  assert.strictEqual(checkCode('', specAdd).reason, 'empty');
});
t('code error: syntax error ditangkap', () => {
  const r = checkCode('function tambah(a,b){ return a+ }', specAdd);
  assert.strictEqual(r.correct, false);
  assert.strictEqual(r.reason, 'syntax');
});
t('code error: fn tidak ada', () => {
  const r = checkCode('const tambah = 1;', specAdd);
  assert.strictEqual(r.reason, 'missing-fn');
});
t('code error: throw di runtime ditangkap', () => {
  const r = checkCode('function tambah(){ throw new Error("boom"); }', specAdd);
  assert.strictEqual(r.reason, 'runtime');
  assert.ok(r.message.includes('boom'));
});
t('code edge: arrow function juga valid', () => {
  assert.strictEqual(checkCode('const tambah = (a,b) => a+b;', specAdd).correct, true);
});

/* --- CURRICULUM integrity (guards the class of bug where a `tests` expectation
 *     does not match its own `explain` solution, or an mc index is out of range) --- */
const EX_TYPES = ['mc', 'fill', 'code', 'preview', 'arrange'];
let totalSoal = 0;

const TIERS = TIER_ORDER;

t('curriculum: 10 topik, tiap topik 6 pelajaran berjenjang (2 per tier)', () => {
  assert.strictEqual(CURRICULUM.length, 10);
  CURRICULUM.forEach((topic) => {
    assert.strictEqual(topic.lessons.length, 6, topic.id);
    const counts = { Dasar: 0, Menengah: 0, Advance: 0 };
    topic.lessons.forEach((lesson) => {
      assert.ok(TIERS.includes(lesson.level), topic.id + '/' + lesson.id + ' level=' + lesson.level);
      counts[lesson.level] += 1;
    });
    TIERS.forEach((tier) => assert.strictEqual(counts[tier], 2, topic.id + ' tier ' + tier + '=' + counts[tier]));
  });
});
t('curriculum: TIAP TIER tepat 10 soal (1 step = 10 soal)', () => {
  CURRICULUM.forEach((topic) => {
    TIERS.forEach((tier) => {
      const n = topic.lessons
        .filter((l) => l.level === tier)
        .reduce((s, l) => s + l.exercises.length, 0);
      assert.strictEqual(n, STEP_SIZE, topic.id + ' tier ' + tier + ' = ' + n + ' soal');
    });
  });
});
t('curriculum: id topik & pelajaran unik', () => {
  const topicIds = CURRICULUM.map((x) => x.id);
  assert.strictEqual(new Set(topicIds).size, topicIds.length);
  const lessonIds = CURRICULUM.flatMap((x) => x.lessons.map((l) => l.id));
  assert.strictEqual(new Set(lessonIds).size, lessonIds.length);
});
t('curriculum: tiap soal punya tipe valid + q + explain', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      totalSoal += 1;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(EX_TYPES.includes(ex.type), where + ' tipe=' + ex.type);
      assert.ok(ex.q && ex.q.length > 0, where + ' q kosong');
      assert.ok(ex.explain && ex.explain.length > 0, where + ' explain kosong');
    });
  }));
});
t('curriculum: mc — index jawaban dalam rentang options', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'mc') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(Array.isArray(ex.options) && ex.options.length >= 2, where + ' options');
      assert.ok(Number.isInteger(ex.a) && ex.a >= 0 && ex.a < ex.options.length, where + ' a=' + ex.a);
    });
  }));
});
t('curriculum: fill — accept non-empty array', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'fill') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(Array.isArray(ex.accept) && ex.accept.length > 0, where + ' accept');
      assert.ok(typeof ex.code === 'string' && ex.code.includes('___'), where + ' code harus memuat ___');
    });
  }));
});
t('curriculum: code — fn + tests valid, solusi dari explain lolos', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'code') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(typeof ex.fn === 'string' && ex.fn, where + ' fn');
      assert.ok(Array.isArray(ex.tests) && ex.tests.length > 0, where + ' tests');
      ex.tests.forEach((tc) => assert.ok(Array.isArray(tc.args), where + ' args'));
    });
  }));
});
t('curriculum: code — solusi referensi lolos checkCode (cegah expected≠solusi)', () => {
  let checked = 0;
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'code') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(typeof ex.solution === 'string' && ex.solution.trim(), where + ' wajib punya field solution');
      const r = checkCode(ex.solution, { fnName: ex.fn, tests: ex.tests });
      assert.ok(r.correct, where + ' solusi referensi gagal: ' + (r.message || r.reason));
      checked += 1;
    });
  }));
  assert.ok(checked >= 6, 'harus ada >=6 soal code, dapat ' + checked);
});
t('curriculum: preview — must non-empty & lang html|css', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'preview') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(['html', 'css'].includes(ex.lang), where + ' lang=' + ex.lang);
      assert.ok(Array.isArray(ex.must) && ex.must.length > 0, where + ' must');
    });
  }));
});
t('curriculum: arrange — blocks non-empty', () => {
  CURRICULUM.forEach((topic) => topic.lessons.forEach((lesson) => {
    lesson.exercises.forEach((ex, i) => {
      if (ex.type !== 'arrange') return;
      const where = topic.id + '/' + lesson.id + '#' + i;
      assert.ok(Array.isArray(ex.blocks) && ex.blocks.length >= 2, where + ' blocks');
    });
  }));
});
t('curriculum: jumlah soal terdokumentasi (300)', () => {
  assert.strictEqual(totalSoal, 300);
});
t('curriculum: topik "Blok Web" ada (peta fungsi tiap blok)', () => {
  const web = CURRICULUM.find((t) => t.id === 'web');
  assert.ok(web, 'topik web hilang');
  assert.strictEqual(web.lessons.length, 6);
  assert.ok(web.lessons.some((l) => /css/i.test(l.title + JSON.stringify(l.exercises))), 'harus menyebut CSS');
});

/* --- syncPath: migrasi path tersimpan saat kurikulum bertambah --- */
t('syncPath: topik baru masuk, urutan lama dipertahankan', () => {
  const old = ['css', 'html', 'js'];
  const out = syncPath(old, () => 0.5);
  assert.strictEqual(out.length, CURRICULUM.length);
  assert.deepStrictEqual(out.slice(0, 3), old, 'urutan lama harus tetap di depan');
  assert.ok(out.includes('web'), 'topik web harus muncul');
});
t('syncPath: id usang (sudah dihapus kurikulum) dibuang', () => {
  const out = syncPath(['css', 'topik-hantu', 'html'], () => 0.5);
  assert.ok(!out.includes('topik-hantu'));
  assert.strictEqual(new Set(out).size, out.length, 'tanpa duplikat');
  assert.strictEqual(out.length, CURRICULUM.length);
});
t('syncPath: input null/rusak → path lengkap penuh', () => {
  [null, undefined, 'bukan-array', []].forEach((bad) => {
    const out = syncPath(bad, () => 0.5);
    assert.strictEqual(out.length, CURRICULUM.length);
  });
});
t('syncPath: deterministik dengan rng sama', () => {
  const a = syncPath(['css'], () => 0.25);
  const b = syncPath(['css'], () => 0.25);
  assert.deepStrictEqual(a, b);
});

/* --- stepsForTopic: pemotongan kurikulum → 3 step + 3 ujian (10 soal masing-masing) --- */
t('steps: tiap topik = 6 node (step + ujian × 3 tier), 3 step 10 soal', () => {
  CURRICULUM.forEach((topic) => {
    const nodes = stepsForTopic(topic);
    assert.strictEqual(nodes.length, 6, topic.id + ' nodes=' + nodes.length);
    const steps = nodes.filter((n) => n.kind === 'step');
    const tests = nodes.filter((n) => n.kind === 'test');
    assert.strictEqual(steps.length, 3, topic.id + ' step');
    assert.strictEqual(tests.length, 3, topic.id + ' ujian');
    steps.forEach((n) => assert.strictEqual(n.questionIds.length, STEP_SIZE, topic.id + '/' + n.id + ' soal=' + n.questionIds.length));
    tests.forEach((n) => {
      assert.strictEqual(n.questionIds.length, STEP_SIZE, topic.id + '/' + n.id + ' soal ujian');
      assert.deepStrictEqual(n.questionIds, steps.find((s) => s.tier === n.tier).questionIds, topic.id + ' ujian harus dari soal tier sama');
    });
    assert.deepStrictEqual(steps.map((n) => n.tier), TIER_ORDER, topic.id + ' urutan tier');
    assert.strictEqual(nodes[0].kind, 'step');
    assert.strictEqual(nodes[1].kind, 'test');
  });
});
t('steps: stepsForTopic menutup SEMUA soal kurikulum (tanpa duplikat/hilang)', () => {
  const seen = new Set();
  CURRICULUM.forEach((topic) => {
    stepsForTopic(topic).filter((n) => n.kind === 'step').forEach((n) => {
      n.questionIds.forEach((k) => {
        assert.ok(!seen.has(k), 'kunci duplikat: ' + k);
        seen.add(k);
      });
    });
  });
  const bank = allQuestionIds();
  assert.strictEqual(seen.size, bank.length, 'step menutup ' + seen.size + ' vs bank ' + bank.length);
  assert.strictEqual(bank.length, 300, 'total bank=' + bank.length);
});
t('steps: id node unik lintas kurikulum + bentuk id benar', () => {
  const ids = CURRICULUM.flatMap((t) => stepsForTopic(t).map((n) => n.id));
  assert.strictEqual(new Set(ids).size, ids.length, 'nodeId duplikat');
  ids.forEach((id) => assert.ok(/^[a-z0-9-]+--\d+$/.test(id) || /^[a-z0-9-]+--\d+--test$/.test(id), 'bentuk id: ' + id));
});
t('steps: questionKey stabil & resolveQuestion mengambil objek yang benar', () => {
  const t0 = CURRICULUM[0];
  const l0 = t0.lessons[0];
  assert.strictEqual(questionKey(t0.id, l0.id, 0), t0.id + '|' + l0.id + '#0');
  const ex = resolveQuestion(t0.id + '|' + l0.id + '#0');
  assert.deepStrictEqual(ex, l0.exercises[0]);
  assert.strictEqual(resolveQuestion('nope|x#0'), null);
  assert.strictEqual(resolveQuestion(t0.id + '|' + l0.id + '#999'), null);
  /* resolveQuestion juga menerima bentuk lama "lessonId#idx" bila topik diketahui */
  assert.strictEqual(resolveQuestion('bukan-kunci'), null);
});

/* --- SRS: penjadwal ulangan berjarak (retensi ≥30 hari) --- */
t('srs: interval membesar 1→2→4→8→16→32 hari', () => {
  assert.deepStrictEqual(SRS.SRS_INTERVALS, [1, 2, 4, 8, 16, 32]);
  for (let b = 1; b < SRS.SRS_INTERVALS.length; b++) {
    assert.ok(SRS.SRS_INTERVALS[b] > SRS.SRS_INTERVALS[b - 1], 'interval tak membesar di ' + b);
  }
  assert.strictEqual(SRS.intervalFor(0), SRS.DAY_MS);
  assert.ok(SRS.intervalFor(99) <= SRS.SRS_INTERVALS[SRS.SRS_MAX_BOX] * SRS.DAY_MS, 'kotak di-clamp');
});
t('srs: grade benar menaikkan kotak & menjadwalkan mundur; salah mereset', () => {
  const now = 1_000_000_000_000;
  let s = SRS.newSched();
  s = SRS.schedule(s, 'a', 1, now);
  assert.strictEqual(s.a.box, 0);
  assert.strictEqual(s.a.due, now + SRS.DAY_MS);
  s = SRS.schedule(s, 'a', 1, now + SRS.DAY_MS);
  assert.strictEqual(s.a.box, 1);
  assert.strictEqual(s.a.due, now + SRS.DAY_MS + 2 * SRS.DAY_MS);
  assert.strictEqual(s.a.reps, 2);
  s = SRS.schedule(s, 'a', 0, now + 5 * SRS.DAY_MS);
  assert.strictEqual(s.a.box, 0, 'salah → reset kotak');
  assert.strictEqual(s.a.lapses, 1);
  assert.strictEqual(s.a.due, now + 5 * SRS.DAY_MS + SRS.DAY_MS);
});
t('srs: schedule murni (tak memutasi input) & idempoten', () => {
  const now = 5_000;
  const base = SRS.newSched();
  const a = SRS.schedule(base, 'x', 1, now);
  const b = SRS.schedule(base, 'x', 1, now);
  assert.deepStrictEqual(a, b, 'panggilan sama → state sama');
  assert.strictEqual(Object.keys(base).length, 0, 'input tak boleh dimutasi');
});
t('srs: dueItems ambil overdue dulu, lalu soal baru; dueCount cocok', () => {
  const now = 1_000_000;
  let s = SRS.newSched();
  s = SRS.schedule(s, 'a', 1, now - 5 * SRS.DAY_MS); /* sudah lewat jauh */
  s = SRS.schedule(s, 'b', 1, now - 1 * SRS.DAY_MS); /* baru lewat */
  s = SRS.schedule(s, 'c', 1, now);                   /* jatuh tempo besok */
  const bank = ['a', 'b', 'c', 'd']; /* d = baru (belum pernah dijadwalkan) */
  const due = SRS.dueItems(bank, s, now);
  assert.deepStrictEqual(due, ['a', 'b', 'd'], 'urut: overdue terlama → baru; c belum due');
  assert.strictEqual(SRS.dueCount(bank, s, now), 3);
});
t('srs: gradeFromResult benar→1, salah→0', () => {
  assert.strictEqual(SRS.gradeFromResult(true), 1);
  assert.strictEqual(SRS.gradeFromResult(false), 0);
});
t('srs: toJSON/fromJSON round-trip + tolak data korup', () => {
  const now = 42;
  let s = SRS.newSched();
  s = SRS.schedule(s, 'k1', 1, now);
  s = SRS.schedule(s, 'k2', 0, now);
  const json = JSON.stringify(SRS.toJSON(s));
  const back = SRS.fromJSON(json);
  assert.ok(back, 'round-trip valid');
  assert.strictEqual(back.k1.box, 0);
  assert.strictEqual(back.k2.lapses, 1);
  [null, undefined, '', 'bukan-json', {}, { version: 999 }, { version: 1 }, { version: 1, items: [] }].forEach((bad) => {
    assert.strictEqual(SRS.fromJSON(bad), null, 'harus ditolak: ' + JSON.stringify(bad));
  });
  /* entri korup di dalam items dibuang, sisanya tetap lolos */
  const mixed = { version: 1, items: { good: { box: 2, due: 9, last: 1, reps: 3, lapses: 0 }, bad: { box: 'x' } } };
  const cleaned = SRS.fromJSON(mixed);
  assert.ok(cleaned && cleaned.good && !cleaned.bad, 'entri korup dibuang');
});
t('srs: isScheduled/isDue/intervalFor aman utk input asing', () => {
  const s = SRS.newSched();
  assert.strictEqual(SRS.isScheduled(s, 'x'), false);
  assert.strictEqual(SRS.isDue(s, 'x', 0), true, 'belum terjadwal = due');
  s.x = { box: 0, due: 100, last: 0, reps: 1, lapses: 0 };
  assert.strictEqual(SRS.isDue(s, 'x', 50), false);
  assert.strictEqual(SRS.isDue(s, 'x', 100), true);
  assert.strictEqual(SRS.intervalFor(-5), SRS.DAY_MS, 'kotak negatif di-clamp ke 0');
  assert.strictEqual(SRS.intervalFor('x'), SRS.DAY_MS, 'kotak bukan angka → 1 hari');
});

/* --- Robot companion (Bibit) --- */
t('robot: setiap mood valid menghasilkan SVG well-formed', () => {
  ROBOT_MOODS.forEach((m) => {
    const svg = robotSVG(m);
    assert.ok(svg.startsWith('<svg') && svg.endsWith('</svg>'), m + ' tidak utuh');
    const open = (svg.match(/<svg/g) || []).length;
    const close = (svg.match(/<\/svg>/g) || []).length;
    assert.strictEqual(open, close, m + ' tag svg tidak seimbang');
    assert.ok(svg.includes('data-mood="' + m + '"'), m + ' mood tidak tertulis');
  });
});
t('robot: mood tak dikenal → fallback idle (bukan crash)', () => {
  const svg = robotSVG('ngawur');
  assert.ok(svg.includes('data-mood="idle"'));
});
t('robot: tiap mood punya markup mata & mulut', () => {
  ROBOT_MOODS.forEach((m) => {
    const svg = robotSVG(m);
    assert.ok(svg.includes('robot__eyes'), m + ' tanpa eyes');
    assert.ok(svg.includes('robot__mouth'), m + ' tanpa mouth');
  });
});
t('robot: say deterministik + non-empty untuk tiap konteks', () => {
  ['greet', 'start', 'correct', 'wrong', 'lost-heart', 'done', 'streak', 'idle-home', 'idle-topic', 'idle-lesson', 'wake', 'tap', 'face-thinking', 'type-code'].forEach((c) => {
    const a = robotSay(c, 3);
    const b = robotSay(c, 3);
    assert.ok(a && a.length > 0, c + ' kosong');
    assert.strictEqual(a, b, c + ' tidak deterministik');
  });
});
t('robot: say konteks tak dikenal → fallback aman', () => {
  assert.ok(robotSay('entah', 0).length > 0);
});
t('robot: react memetakan hasil latihan → mood', () => {
  assert.strictEqual(robotReact({ phase: 'done' }), 'celebrate');
  assert.strictEqual(robotReact({ correct: true }), 'happy');
  assert.strictEqual(robotReact({ correct: false }), 'thinking');
  assert.strictEqual(robotReact({ correct: false, hearts: 0 }), 'sad');
  assert.strictEqual(robotReact(null), 'idle');
});

/* --- Robot head kanvas (port robot-heads) --- */
t('head: 9 state robot-heads terdaftar', () => {
  assert.deepStrictEqual(ROBOT_STATES, [
    'idle', 'thinking', 'searching', 'listening', 'speaking',
    'working', 'happy', 'error', 'sleeping',
  ]);
});
t('head: stateFromMood menutup semua mood valid', () => {
  ROBOT_MOODS.forEach((m) => assert.ok(ROBOT_STATES.includes(stateFromMood(m)), m + ' → state tak valid'));
});
t('head: stateFromMood fallback idle utk input asing', () => {
  assert.strictEqual(stateFromMood('ngawur'), 'idle');
  assert.strictEqual(stateFromMood(undefined), 'idle');
});
t('head: ledMatrixFor — grid 14×22, float 0..1, deterministik', () => {
  ROBOT_STATES.forEach((s) => {
    const a = ledMatrixFor(s);
    const b = ledMatrixFor(s);
    assert.strictEqual(a.length, 14, s + ' rows');
    a.forEach((row) => assert.strictEqual(row.length, 22, s + ' cols'));
    a.forEach((row) => row.forEach((v) => assert.ok(v >= 0 && v <= 1, s + ' nilai=' + v)));
    assert.deepStrictEqual(a, b, s + ' tidak deterministik');
  });
});
t('head: tiap state punya LED menyala (bukan matriks kosong)', () => {
  ROBOT_STATES.forEach((s) => {
    const lit = ledMatrixFor(s).flat().filter((v) => v > 0.02).length;
    assert.ok(lit > 0, s + ' tanpa LED');
  });
});
t('head: state tak dikenal di ledMatrixFor → fallback idle (tak crash)', () => {
  const g = ledMatrixFor('entah');
  assert.strictEqual(g.length, 14);
  assert.strictEqual(g[0].length, 22);
  assert.ok(g.flat().some((v) => v > 0.02));
});
t('head: mountRobotHead aman dipanggil tanpa DOM (Node)', () => {
  assert.strictEqual(mountRobotHead(null), null);
  assert.strictEqual(mountRobotHead({ appendChild: function () {} }), null);
});

/* --- Animasi head: mesin gerak murni (port robot-heads, tiap state hidup) --- */
t('motion: tiap state robot-heads punya tempo animasi sendiri', () => {
  ROBOT_STATES.forEach((s) => {
    const m = _rhMotionFor(s);
    assert.ok(m && typeof m === 'object', s + ' tanpa motion');
    ['blink', 'glance', 'mouth', 'scan', 'bob', 'hop', 'shake', 'zzz'].forEach((k) =>
      assert.ok(Number.isFinite(m[k]) && m[k] >= 0, s + '.' + k + ' tak valid: ' + m[k]));
  });
  assert.notStrictEqual(RH_MOTION.idle.blink, RH_MOTION.happy.blink, 'tempo tak boleh seragam semua');
});
t('motion: state tak dikenal → tempo idle, tak crash', () => {
  assert.strictEqual(_rhMotionFor('entah'), RH_MOTION.idle);
  assert.strictEqual(_rhMotionFor(undefined), RH_MOTION.idle);
});
t('motion: _rhFrame deterministik + nilai terbatas (blink 0..1, glance/mouth integer)', () => {
  ROBOT_STATES.forEach((s) => {
    [0, 500, 1234, 9999].forEach((t) => {
      const a = _rhFrame(s, t, 0.37), b = _rhFrame(s, t, 0.37);
      assert.deepStrictEqual(a, b, s + '@' + t + ' harus deterministik');
      assert.ok(a.blink >= 0 && a.blink <= 1, s + ' blink=' + a.blink);
      assert.ok([-1, 0, 1].includes(a.glance), s + ' glance=' + a.glance);
      assert.ok([-1, 0, 1].includes(a.mouth), s + ' mouth=' + a.mouth);
      assert.ok(a.scan >= 0 && a.scan <= 22, s + ' scan=' + a.scan);
      assert.ok(a.prog >= 0 && a.prog <= 1, s + ' prog=' + a.prog);
      assert.ok(a.zzz >= 0 && a.zzz <= 1, s + ' zzz=' + a.zzz);
    });
  });
});
t('motion: idle berkedip (blink pernah < 1), happy tidak (mata ^^ tetap)', () => {
  let idleBlinked = false;
  for (let t = 0; t <= 4000; t += 20) if (_rhFrame('idle', t, 0.1).blink < 0.9) { idleBlinked = true; break; }
  assert.ok(idleBlinked, 'idle harus pernah berkedip');
  for (let t = 0; t <= 4000; t += 20) assert.strictEqual(_rhFrame('happy', t, 0.1).blink, 1, 'happy tak boleh kedip');
});
t('motion: scan (searching) bergerak lintasi kolom; overlay only where expected', () => {
  const a = _rhFrame('searching', 0, 0), b = _rhFrame('searching', 500, 0);
  assert.notStrictEqual(a.scan, b.scan, 'berkas scan harus bergerak');
  assert.strictEqual(_rhMotionFor('idle').scan, 0, 'idle tanpa scan');
  assert.strictEqual(_rhMotionFor('sleeping').zzz, 1, 'sleeping punya z');
});
t('motion: _rhHash deterministik, rentang 0..1, beda antar state', () => {
  ROBOT_STATES.forEach((s) => {
    const h = _rhHash(s);
    assert.ok(h >= 0 && h < 1, s + ' hash=' + h);
    assert.strictEqual(h, _rhHash(s), s + ' tak deterministik');
  });
  assert.notStrictEqual(_rhHash('idle'), _rhHash('happy'));
  assert.ok(_rhHash(null) >= 0 && _rhHash(null) < 1);
});
t('motion: tiap state punya warna LED (dibocorkan untuk inspeksi)', () => {
  ROBOT_STATES.forEach((s) => assert.ok(/^#/.test(RH_COLORS[s]), s + ' tanpa warna: ' + RH_COLORS[s]));
});

/* --- Wajah LED per state (pola khas robot-heads) --- */
const _lit = (g) => g.flat().filter((v) => v > 0.05).length;
t('face: dimensi 22×14 utk semua state + deterministik', () => {
  ROBOT_STATES.forEach((s) => {
    const g = _rhFaceGrid(s, { time: 0.3, seed: 0, side: 1 });
    assert.strictEqual(g.length, 14, s + ' rows');
    g.forEach((row) => assert.strictEqual(row.length, 22, s + ' cols'));
    assert.deepStrictEqual(g, _rhFaceGrid(s, { time: 0.3, seed: 0, side: 1 }), s + ' tak deterministik');
  });
});
t('face: happy = dua mata ^ + senyum, bukan X', () => {
  const g = _rhFaceGrid('happy', { time: 0, seed: 0, side: 1 });
  assert.ok(g[5][8] === 0, 'happy tak boleh punya mata blok di kolom 8');
  const row8 = g[8].concat(g[7]); /* pupil kiri/kanan kemungkinan bergeser 1 baris oleh bob */
  assert.ok(row8.some((v) => v > 0), 'happy harus ada mata ^');
  const smileRow = 11;
  assert.ok(g[smileRow].slice(8, 15).some((v) => v > 0), 'happy harus ada senyum');
});
t('face: error = X X, tidak ada blok mata solid; tidur = z naik + mata pejam', () => {
  const e = _rhFaceGrid('error', { time: 0.2, seed: 0, side: 1 });
  assert.ok(_lit(e) > 0, 'error tanpa LED');
  const sl = _rhFaceGrid('sleeping', { time: 1.0, seed: 0, side: 1 });
  const zCols = [16, 17, 18, 19, 20, 21];
  assert.ok(zCols.some((x) => sl.slice(0, 5).some((row) => row[x] > 0.05)), 'tidur tanpa huruf z');
});
t('face: speaking = mulut (baris bawah) bergerak mengikuti waktu', () => {
  const a = _rhFaceGrid('speaking', { time: 0.2, seed: 0, side: 1 }).slice(10);
  const b = _rhFaceGrid('speaking', { time: 1.1, seed: 0, side: 1 }).slice(10);
  assert.notDeepStrictEqual(a, b, 'mulut speaking harus bergerak');
});
t('face: searching = berkas scan bergerak lintasi kolom', () => {
  const colAt = (t) => {
    const g = _rhFaceGrid('searching', { time: t, seed: 0, side: 1 });
    const beam = (Math.sin(t * 1.6 + 0.4) * 0.5 + 0.5) * 21;
    const x = Math.max(0, Math.min(21, Math.round(beam)));
    return g.slice(1, 13).filter((row) => row[x] > 0.05).length;
  };
  assert.ok(colAt(0) > 0, 'scan harus menyala di kolom berkas');
  assert.ok(colAt(0.5) > 0, 'scan harus menyala di kolom berkas (t lain)');
  const g0 = _rhFaceGrid('searching', { time: 0, seed: 0, side: 1 });
  const g1 = _rhFaceGrid('searching', { time: 0.6, seed: 0, side: 1 });
  assert.notDeepStrictEqual(g0, g1, 'berkas scan harus bergerak');
});

/* --- Model ekspresi (softmax regression + SGD) --- */
t('expr: 9 kelas = state robot-heads; vektor fitur seragam', () => {
  assert.deepStrictEqual(EXPR_STATES, ROBOT_STATES);
  assert.strictEqual(EXPR_FEATURES[0], 'bias');
  assert.strictEqual(EXPR_FEATURES.length, 14);
});
t('expr: exprFeatures deterministik + nilai terbatas 0..1', () => {
  const sig = { correct: 1, hearts: 0.66, progress: 0.5, streak: 99, firstTry: 7, fast: 0.3 };
  const a = exprFeatures(sig);
  const b = exprFeatures(sig);
  assert.deepStrictEqual(a, b);
  a.forEach((v) => assert.ok(v >= 0 && v <= 1, 'fitur di luar 0..1: ' + v));
  assert.strictEqual(a[0], 1, 'bias harus 1');
});
t('expr: exprFeatures aman utk input kosong/asing', () => {
  const a = exprFeatures(null);
  assert.strictEqual(a.length, EXPR_FEATURES.length);
  assert.ok(a.every((v) => Number.isFinite(v)));
});
t('expr: exprFeatures memetakan firstTry/fast persis di indeksnya', () => {
  const f = exprFeatures({ correct: 1, firstTry: 1, fast: 0.5 });
  assert.strictEqual(f[EXPR_FEATURES.indexOf('firstTry')], 1);
  assert.strictEqual(f[EXPR_FEATURES.indexOf('fast')], 0.5);
  const g = exprFeatures({ correct: 1 });
  assert.strictEqual(g[EXPR_FEATURES.indexOf('firstTry')], 0, 'absen → 0');
  assert.strictEqual(g[EXPR_FEATURES.indexOf('heartLo')], 1, 'heartLo = 1 - default hearts');
});
t('expr: exprLabelIndex memetakan sinyal → kelas valid', () => {
  [
    { correct: true, hearts: 1 },
    { wrong: true, hearts: 0.66 },
    { hearts: 0 },
    { lesson: true, progress: 1 },
    { pick: true },
    { nav: true },
    { tap: true },
    {},
  ].forEach((sig) => {
    const yi = exprLabelIndex(sig);
    assert.ok(Number.isInteger(yi) && yi >= 0 && yi < EXPR_STATES.length, JSON.stringify(sig) + ' → ' + yi);
  });
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ correct: true, hearts: 1 })], 'happy');
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ wrong: true, hearts: 0.66 })], 'thinking');
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ hearts: 0 })], 'error');
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ lesson: true, progress: 1 })], 'happy');
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ nav: true })], 'searching');
  assert.strictEqual(EXPR_STATES[exprLabelIndex({ tap: true })], 'speaking');
});
t('expr: model baru → probs seragam & normal (jumlah ~1)', () => {
  const m = createExpressionModel();
  const p = exprProbs(m, { correct: true, hearts: 1 });
  assert.strictEqual(p.length, EXPR_STATES.length);
  const sum = p.reduce((a, b) => a + b, 0);
  assert.ok(Math.abs(sum - 1) < 1e-6, 'jumlah=' + sum);
  p.forEach((v) => assert.ok(v > 0 && v < 1, 'p=' + v));
  assert.ok(Math.abs(p[0] - 1 / EXPR_STATES.length) < 1e-6, 'harus seragam');
});
t('expr: SGD menurunkan loss rata-rata & menaikkan peluang kelas benar', () => {
  const m = createExpressionModel();
  const x = exprFeatures({ correct: true, hearts: 1, progress: 0.5, n: 0.2 });
  const yi = EXPR_STATES.indexOf('happy');
  const first = exprLearn(m, x, yi, 0.3).loss;
  let last = first;
  for (let i = 0; i < 300; i++) last = exprLearn(m, x, yi, 0.3).loss; /* konvergen → loss kecil */
  assert.ok(last < first, 'loss tidak turun: ' + first + ' → ' + last);
  assert.ok(last < 0.05, 'loss akhir masih besar: ' + last);
  const p = exprProbs(m, { correct: true, hearts: 1, progress: 0.5, n: 0.2 });
  assert.strictEqual(EXPR_STATES[p.indexOf(Math.max.apply(null, p))], 'happy');
  assert.ok(p[yi] > 0.6, 'peluang kelas benar terlalu kecil: ' + p[yi]);
});
t('expr: model belajar membedakan sinyal benar vs salah (bukan satu kelas menang selalu)', () => {
  const m = createExpressionModel();
  const xs = { correct: exprFeatures({ correct: true, hearts: 1 }), wrong: exprFeatures({ wrong: true, hearts: 0.66 }) };
  const yCorrect = EXPR_STATES.indexOf('happy');
  const yWrong = EXPR_STATES.indexOf('thinking');
  for (let i = 0; i < 200; i++) { exprLearn(m, xs.correct, yCorrect, 0.3); exprLearn(m, xs.wrong, yWrong, 0.3); }
  const topCorrect = EXPR_STATES[exprProbs(m, { correct: true, hearts: 1 }).indexOf(Math.max.apply(null, exprProbs(m, { correct: true, hearts: 1 })))];
  const topWrong = EXPR_STATES[exprProbs(m, { wrong: true, hearts: 0.66 }).indexOf(Math.max.apply(null, exprProbs(m, { wrong: true, hearts: 0.66 })))];
  assert.strictEqual(topCorrect, 'happy');
  assert.strictEqual(topWrong, 'thinking');
});
t('expr: bobot tetap finite walau dilatih ribuan kali (tak overflow)', () => {
  const m = createExpressionModel();
  const sigs = [
    { correct: true, hearts: 1, n: 0.1 },
    { wrong: true, hearts: 0.33, n: 0.8 },
    { hearts: 0, n: 0.9 },
    { lesson: true, progress: 1, n: 1 },
    { pick: true, n: 0.4 },
  ];
  for (let i = 0; i < 2000; i++) {
    const s = sigs[i % sigs.length];
    exprLearn(m, exprFeatures(s), exprLabelIndex(s));
  }
  m.W.forEach((row) => row.forEach((w) => assert.ok(Number.isFinite(w), 'bobot non-finite: ' + w)));
});
t('expr: pickExpression selalu mengembalikan state valid', () => {
  const m = createExpressionModel();
  m.W[0][0] = 6; /* dorong bias kelas 0 biar dominan */
  for (let i = 0; i < 200; i++) {
    assert.ok(EXPR_STATES.includes(pickExpression(m, { correct: true, hearts: 1 }, Math.random, null)));
  }
});
t('expr: pickExpression menghindari state yang barusan tampil', () => {
  const m = createExpressionModel();
  const sig = { correct: true, hearts: 1 };
  let repeat = 0;
  for (let i = 0; i < 200; i++) {
    if (pickExpression(m, sig, Math.random, 'idle') === 'idle') repeat++;
  }
  assert.ok(repeat < 20, 'terlalu sering mengulang "idle": ' + repeat + '/200');
});
t('expr: pickExpression aman tanpa model (uniform)', () => {
  assert.ok(EXPR_STATES.includes(pickExpression(null, { nav: true }, () => 0.5, null)));
});
t('expr: restore menolak data korup, menerima round-trip', () => {
  [null, undefined, '', 'bukan-json', {}, { W: [] }, { W: [[1, 2]] }, 42].forEach((bad) => {
    assert.strictEqual(restoreExpressionModel(bad), null, 'harus ditolak: ' + JSON.stringify(bad));
  });
  const m = createExpressionModel();
  exprLearn(m, exprFeatures({ correct: true, hearts: 1 }), 0);
  const back = restoreExpressionModel(JSON.stringify(m));
  assert.ok(back, 'round-trip harus valid');
  assert.strictEqual(back.n, m.n);
  assert.deepStrictEqual(back.W, m.W);
});
t('expr: stateToMood menutup semua state → mood valid', () => {
  EXPR_STATES.forEach((s) => assert.ok(ROBOT_MOODS.includes(stateToMood(s)), s + ' → mood tak valid'));
  assert.strictEqual(stateToMood('error'), 'sad');
  assert.strictEqual(stateToMood('happy'), 'celebrate');
});

console.log('\n' + passed + ' passed, ' + failed + ' failed');
process.exit(failed === 0 ? 0 : 1);