/* CodeDuo — Lesson (step / ujian / review): bar, soal, body per tipe, feedback, hasil.
 * Efek (SFX/motion) dipasang di sini; logika penilaian ada di store. */
'use strict';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '../useStore.js';
import {
  getState, getSession, topicById, topicNodes, dueReviewKeys, currentExercise,
  isTopicDone, pickMc, arrangePick, arrangeUnpick, arrangeReorder, arrangeInsert,
  answerCheck, lessonContinue, lessonRetryCurrent, lessonRetry, lessonExit,
  reviewStart, stepStart, tierTest, MAX_HEARTS,
} from '../store.js';
import { STEP_SIZE } from '../../content.js';
import { SFX } from '../../sfx.js';
import { circuitSVG } from '../lib/circuit.js';
import { runSketch } from '../lib/arduino.js';
import { pop, slideUp, fadeOutDown, celebrate, pulse } from '../lib/motion.js';
import { notifyStreakMilestone } from '../notifications.js';

export default function Lesson() {
  useStore();
  const session = getSession();
  const state = getState();
  if (!session) {
    return (<section className="screen"><p>Sesi berakhir. <a href="#/">Ke home</a></p></section>);
  }
  const isReview = session.kind === 'review';
  const topic = isReview ? null : topicById(session.topicId);
  if (!isReview && !topic) {
    return (<section className="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>);
  }

  if (session.phase === 'failed') return <FailView session={session} topic={topic} isReview={isReview} ex={currentExercise()} />;
  if (session.phase === 'done') return <DoneView session={session} topic={topic} isReview={isReview} state={state} />;
  return <RunView session={session} topic={topic} isReview={isReview} />;
}

/* ---------- Run / feedback ---------- */

function RunView({ session, topic, isReview }) {
  const [emptyMsg, setEmptyMsg] = useState(null);
  const ex = currentExercise();
  if (!ex) return (<section className="screen"><p>Soal tidak ditemukan. <a href="#/">Ke home</a></p></section>);
  const total = session.order.length;
  const exitHref = isReview ? '#/' : '#/topic/' + topic.id;
  const curEntry = session.exercises[session.order[session.pos]];
  const keyParts = curEntry && curEntry.key ? curEntry.key.split('|')[1] : null;
  const lessonId = keyParts ? keyParts.split('#')[0] : null;
  const currentLesson = topic && topic.lessons ? topic.lessons.find((l) => l.id === lessonId) : null;
  const metaName = isReview
    ? 'Latihan'
    : topic.name + (currentLesson ? ' · ' + currentLesson.title : ' · ' + (session.label || ''));

  const onSubmit = (answer) => {
    const heartsBefore = session.hearts;
    answerCheck(answer).then((r) => {
      if (!r) return;
      if (r.empty) { setEmptyMsg(r.message); return; }
      setEmptyMsg(null);
      const res = r.result || {};
      if (res.correct) SFX.correct();
      else if (res.close) SFX.close();
      else if (res.failed) SFX.fail();
      /* Nyawa tinggal 1 → bunyi "nyawa berkurang" yang lebih berat, bukan sekadar salah biasa. */
      else if (session.hearts === 1 && heartsBefore > 1) SFX.heartLost();
      else SFX.wrong();
    });
  };

  const onContinue = (sheetEl) => {
    const next = lessonContinue();
    if (next) {
      celebrate();
      const badge = document.querySelector('.top-stats .streak');
      if (badge) pulse(badge);
      SFX.complete();
      setTimeout(() => SFX.streak(), 550);
    }
  };

  return (
    <section className={'screen lesson' + (session.phase === 'feedback' ? ' lesson--fb' : '')}>
      <header className="lesson__bar">
        <a className="lesson__x" href={exitHref} onClick={(e) => { e.preventDefault(); lessonExit(); }} aria-label="Keluar">✕</a>
        <div className="dots">
          {session.order.map((_, i) => (
            <span key={i} className={'dot' + (i < session.pos ? ' dot--done' : i === session.pos ? ' dot--now' : '')} />
          ))}
        </div>
        <div className="hearts">
          {Array.from({ length: MAX_HEARTS }, (_, i) => (
            <span key={i} className={'heart' + (i < session.hearts ? '' : ' heart--lost')}>❤️</span>
          ))}
        </div>
      </header>
      <p className="lesson__meta">{metaName} · soal {session.pos + 1}/{total}</p>
      {session.retryActive && session.closeChances != null && (
        <div className="banner banner--near" style={{
          background: '#fff3c4',
          color: '#6b4e00',
          border: '2px solid var(--gold)',
          borderRadius: '12px',
          padding: '10px 14px',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontWeight: '600',
          fontSize: '0.92rem'
        }}>
          <span>🟡 {session.retryMsg || 'Jawaban hampir benar! Coba perbaiki lagi.'}</span>
          <span style={{
            background: '#f59e0b',
            color: '#fff',
            padding: '3px 10px',
            borderRadius: '999px',
            fontSize: '0.8rem',
            fontWeight: '700',
            whiteSpace: 'nowrap',
            marginLeft: '8px'
          }}>
            Kesempatan: {session.closeChances + 1}x
          </span>
        </div>
      )}
      {ex.circuit && (
        <div className="lesson__circuit" aria-label="Diagram rangkaian"
          dangerouslySetInnerHTML={{ __html: circuitSVG(ex.circuit, { alt: ex.q }) }} />
      )}
      <h2 className="lesson__q">{ex.q}</h2>
      <ExerciseBody key={session.pos + ':' + (session.retryToken || 0)} ex={ex} session={session} onSubmit={onSubmit} />
      {emptyMsg && <div className="banner banner--warn">{emptyMsg}</div>}
      {session.phase === 'run' && (
        <div className="check-bar">
          {ex.type === 'mc' && (
            <button
              className="btn btn--primary btn--wide"
              id="check-btn"
              disabled={session.pendingAnswer == null}
              onClick={(e) => { pop(e.currentTarget); onSubmit(session.pendingAnswer); }}
            >{session.retryActive ? 'CEK LAGI' : 'CEK'}</button>
          )}
          {ex.type === 'fill' && (
            <button className="btn btn--primary btn--wide" id="check-btn" onClick={(e) => { pop(e.currentTarget); const el = document.getElementById('fill-input'); onSubmit(el ? el.value : ''); }}>{session.retryActive ? 'CEK LAGI' : 'CEK'}</button>
          )}
          {(ex.type === 'code' || ex.type === 'preview') && (
            <button className="btn btn--primary btn--wide" id="check-btn" disabled={!!session.checking} onClick={(e) => { pop(e.currentTarget); const el = document.getElementById('code-input'); onSubmit(el ? el.value : ''); }}>{session.checking ? 'MEMERIKSA…' : (session.retryActive ? 'CEK LAGI' : 'CEK')}</button>
          )}
          {ex.type === 'wiring' && (
            <button
              className="btn btn--primary btn--wide"
              id="check-btn"
              disabled={session.answered}
              onClick={(e) => { pop(e.currentTarget); onSubmit(session.wirePicks || {}); }}
            >{session.retryActive ? 'CEK LAGI' : 'CEK'}</button>
          )}
          {ex.type === 'arrange' && (
            <button className="btn btn--primary btn--wide" id="check-btn" onClick={(e) => { pop(e.currentTarget); onSubmit((session.arrPlaced || []).slice()); }}>{session.retryActive ? 'CEK LAGI' : 'CEK'}</button>
          )}
        </div>
      )}
      {session.phase === 'feedback' && session.lastResult && (
        <Feedback session={session} onContinue={onContinue} onRetry={() => lessonRetryCurrent()} />
      )}
    </section>
  );
}

function Feedback({ session, onContinue, onRetry }) {
  const ref = useRef(null);
  const last = session.lastResult;
  useEffect(() => { if (ref.current) slideUp(ref.current); }, []);
  const run = (e) => {
    SFX.click();
    if (ref.current) fadeOutDown(ref.current, () => onContinue());
    else onContinue();
    pop(e.currentTarget);
  };
  const retry = (e) => {
    if (ref.current) fadeOutDown(ref.current, () => onRetry());
    else onRetry();
    pop(e.currentTarget);
  };
  /* Tiga tingkat feedback: benar (hijau) / hampir benar (emas) / salah (merah).
   * "Hampir benar" = aturan longgar: diberi kesempatan 2x memperbaiki tanpa -1 nyawa. */
  const kind = last.correct ? 'ok' : (last.close ? 'near' : 'bad');
  const cls = kind === 'ok' ? 'feedback--ok' : kind === 'near' ? 'feedback--near' : 'feedback--bad';
  const head = kind === 'ok'
    ? '✅ Benar!'
    : kind === 'near'
      ? (last.retryable ? '🟡 Hampir benar! (Bisa diperbaiki)' : '🟡 Hampir benar!')
      : '❌ ' + last.message;
  const note = kind === 'near'
    ? (last.retryable
        ? (last.message || 'Jawabanmu sangat dekat.') + ` Kamu punya ${last.chancesLeft + 1}x kesempatan untuk memperbaiki urutan/jawaban tanpa kehilangan nyawa.`
        : (last.message || 'Jawabanmu sangat dekat.') + ' Soal ini akan diulang di akhir sesi ya.')
    : last.explain;
  return (
    <div className={'feedback ' + cls} ref={ref}>
      <b>{head}</b>
      <p>{note}</p>
      {last.close && last.retryable ? (
        <div className="feedback__actions" style={{ display: 'flex', gap: '10px' }}>
          <button className="btn btn--primary" id="retry-btn" onClick={retry} style={{ flex: 1 }}>
            COBA LAGI (Sisa {last.chancesLeft + 1}x)
          </button>
          <button className="btn btn--ghost" id="skip-btn" onClick={run} style={{ fontSize: '0.88rem' }}>
            Lewati
          </button>
        </div>
      ) : (
        <button className={'btn ' + (kind === 'bad' ? 'btn--danger' : 'btn--primary')} onClick={run}>LANJUT</button>
      )}
    </div>
  );
}

/* ---------- Body per tipe soal ---------- */

function ExerciseBody({ ex, session, onSubmit }) {
  if (ex.type === 'mc') {
    if (!session.mcMap[session.pos]) session.mcMap[session.pos] = shuffleNums(ex.options.length);
    const map = session.mcMap[session.pos];
    return (
      <div className="lesson__body">
        <div className="options">
          {map.map((optIdx) => (
            <button
              key={optIdx}
              className={'option'
                + (optIdx === session.pendingAnswer ? ' option--sel' : '')
                + (session.answered && optIdx === ex.a ? ' option--correct' : '')}
              disabled={session.answered}
              onClick={() => { SFX.pick(); pickMc(optIdx); }}
            >{ex.options[optIdx]}</button>
          ))}
        </div>
      </div>
    );
  }
  if (ex.type === 'fill') {
    return <FillBody ex={ex} session={session} onSubmit={onSubmit} />;
  }
  if (ex.type === 'code') {
    return <CodeBody ex={ex} session={session} onSubmit={onSubmit} />;
  }
  if (ex.type === 'preview') {
    return <PreviewBody ex={ex} session={session} disabled={session.answered} onSubmit={onSubmit} />;
  }
  if (ex.type === 'arrange') {
    return <ArrangeBody ex={ex} session={session} />;
  }
  if (ex.type === 'wiring') {
    return <WiringBody ex={ex} session={session} />;
  }
  return null;
}

function CodeBody({ ex, session, onSubmit }) {
    const [code, setCode] = useState(() => session.lastInput != null ? session.lastInput : (ex.starter || '')); 
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        onSubmit(e.currentTarget.value);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.currentTarget.selectionStart;
        const end = e.currentTarget.selectionEnd;
        const next = code.substring(0, start) + '  ' + code.substring(end);
        setCode(next);
        requestAnimationFrame(() => {
          const el = document.getElementById('code-input');
          if (el) el.selectionStart = el.selectionEnd = start + 2;
        });
      }
    };
    return (
      <div className="lesson__body">
        <textarea
          className="code-input"
          id="code-input"
          spellCheck="false"
          rows={8}
          value={code}
          disabled={session.answered}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {ex.sim === 'arduino' && <ArduinoSimPanel ex={ex} sketch={code} />}
        {ex.tests && ex.tests.length > 0 && (
          <div className="muted" style={{ fontSize: '0.82rem', marginTop: '2px' }}>
            Contoh uji: <code>{ex.fn}({ex.tests[0].args.map((a) => JSON.stringify(a)).join(', ')})</code> → <code>{JSON.stringify(ex.tests[0].expected)}</code>
          </div>
        )}
      </div>
    );
}

/* Panel simulasi untuk sketsa Arduino: LED/PWM, tone, dan Serial Monitor.
 * Sketsa dijalankan ulang tiap kali isi editor berubah (debounce ringan) supaya
 * murid melihat efek kodenya — meniru "lihat koding → hasil" ala Tinkercad. */
function ArduinoSimPanel({ ex, sketch }) {
  const [result, setResult] = useState(null);
  const timer = useRef(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      try {
        const r = runSketch(sketch, ex.simOptions || { durationMs: 1500 });
        setResult(r);
      } catch (e) {
        setResult({ ok: false, error: String(e && e.message) });
      }
    }, 250);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [sketch, ex.simOptions]);

  const board = result && result.board;
  const ledPins = Object.entries((board && board.pins) || {})
    .filter(([, st]) => st.mode === 'OUTPUT' || st.pwm > 0 || st.digital)
    .slice(0, 6);
  const serial = (board && board.serial) || [];

  return (
    <div className="sim-panel">
      <div className="sim-panel__title">🔌 Simulasi papan</div>
      {result && !result.ok && (
        <div className="sim-panel__error">{result.error}</div>
      )}
      {board && (
        <>
          <div className="sim-panel__pins">
            {ledPins.length === 0 && <span className="muted">Belum ada pin aktif.</span>}
            {ledPins.map(([pin, st]) => {
              const level = st.pwm > 0 ? st.pwm / 255 : (st.digital ? 1 : 0);
              return (
                <div className="sim-pin" key={pin}>
                  <span className="sim-pin__name">Pin {pin}</span>
                  <span
                    className="sim-pin__led"
                    style={{ opacity: 0.15 + (Math.max(0, Math.min(1, level)) * 0.85), background: st.pwm > 0 ? '#22c55e' : '#ef4444' }}
                    title={st.pwm > 0 ? 'PWM ' + st.pwm : (st.digital ? 'HIGH' : 'LOW')}
                  />
                  <span className="sim-pin__val">{st.pwm > 0 ? 'PWM ' + st.pwm : (st.digital ? 'HIGH' : 'LOW')}</span>
                </div>
              );
            })}
          </div>
          {board.tone && <div className="sim-panel__tone">🔊 tone() {board.tone.freq} Hz</div>}
          <div className="sim-panel__serial">
            <div className="sim-panel__serial-head">Serial Monitor {board.baud ? '(' + board.baud + ')' : ''}</div>
            <pre className="sim-panel__serial-body">{serial.length ? serial.slice(-12).join('\n') : '(belum ada output)'}</pre>
          </div>
        </>
      )}
    </div>
  );
}

function FillBody({ ex, session, onSubmit }) {
  const initial = typeof session.lastInput === 'string' ? session.lastInput : '';
  const [value, setValue] = useState(initial);
  const parts = String(ex.code).split('___');
  const blank = (i) => (
    <span key={'b' + i} className={'blank-line' + (value ? ' blank-line--filled' : '')}>
      {value}
    </span>
  );
  return (
    <div className="lesson__body">
      <pre className="code-block">
        {parts.map((part, i) => (
          <span key={i}>{part}{i < parts.length - 1 ? blank(i) : null}</span>
        ))}
      </pre>
      <input
        className="input" id="fill-input" type="text" placeholder="Ketik jawaban…"
        name="codeduo-answer" autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false"
        enterKeyHint="done" disabled={session.answered}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => { if (e.key === 'Enter' && !session.answered) onSubmit(e.currentTarget.value); }}
      />
    </div>
  );
}

function PreviewBody({ ex, session, disabled, onSubmit }) {
  const [code, setCode] = useState(() => (session.lastInput != null ? session.lastInput : (ex.starter || '')));
  const frame = useRef(null);
  useEffect(() => {
    if (!frame.current) return;
    const src = ex.lang === 'css'
      ? '<!doctype html><html><head><meta charset="utf-8"><style>' + code + '</style></head><body>' + (ex.html || '') + '</body></html>'
      : code;
    frame.current.srcdoc = src;
  }, [code, ex.lang, ex.html]);

  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      if (onSubmit) onSubmit(code);
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.target.selectionStart;
      const end = e.target.selectionEnd;
      const val = code;
      const updated = val.substring(0, start) + '  ' + val.substring(end);
      setCode(updated);
      setTimeout(() => {
        if (e.target) e.target.selectionStart = e.target.selectionEnd = start + 2;
      }, 0);
    }
  };

  return (
    <div className="lesson__body">
      <textarea
        className="code-input"
        id="code-input"
        spellCheck="false"
        rows={8}
        value={code}
        disabled={disabled}
        onChange={(e) => setCode(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="preview-label" style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--muted)', marginTop: '2px' }}>
        👁️ Hasil Tampilan (Live Preview)
      </div>
      <iframe className="preview-frame" id="preview-frame" ref={frame} sandbox title="Preview" />
    </div>
  );
}

/* Soal `wiring`: pilih pin/sambungan tiap komponen. Pilihan disimpan di sesi
 * (session.wirePicks) supaya tidak hilang saat soal di-retry. */
function WiringBody({ ex, session }) {
  const slots = Array.isArray(ex.slots) ? ex.slots : [];
  /* Pilihan disimpan di sesi agar tidak hilang saat di-retry, tapi ditampilkan
   * lewat state lokal supaya UI langsung re-render. */
  const [picks, setPicks] = useState(() => session.wirePicks || {});
  const disabled = session.answered;
  useEffect(() => { session.wirePicks = picks; }, [picks, session]);

  return (
    <div className="lesson__body wiring">
      {slots.map((slot) => (
        <div className="wiring__row" key={slot.id}>
          <div className="wiring__label">{slot.label}</div>
          <div className="wiring__opts">
            {(slot.options || []).map((opt) => {
              const active = String(picks[slot.id]) === String(opt);
              return (
                <button
                  key={opt}
                  type="button"
                  className={'wiring__chip' + (active ? ' wiring__chip--on' : '')}
                  disabled={disabled}
                  onClick={() => setPicks((prev) => Object.assign({}, prev, { [slot.id]: opt }))}
                >{opt}</button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

function ArrangeBody({ ex, session }) {
  const [dragged, setDragged] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  const [isOverZone, setIsOverZone] = useState(false);
  const [isOverPool, setIsOverPool] = useState(false);
  const [touchPos, setTouchPos] = useState(null);

  const placed = session.arrPlaced || [];
  const all = ex.blocks.map((_, i) => String(i));
  if (!session.arrMap[session.pos]) session.arrMap[session.pos] = shuffleNums(all.length).map(String);
  const pool = session.arrMap[session.pos].filter((id) => !placed.includes(id));

  const handleDragStartPlaced = (e, index, id) => {
    if (session.answered) return;
    const data = { type: 'placed', index, id };
    setDragged(data);
    e.dataTransfer.setData('text/plain', JSON.stringify(data));
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragStartPool = (e, id) => {
    if (session.answered) return;
    const data = { type: 'pool', id };
    setDragged(data);
    e.dataTransfer.setData('text/plain', JSON.stringify(data));
    e.dataTransfer.effectAllowed = 'copyMove';
  };

  const handleDragOverItem = (e, targetIndex) => {
    if (session.answered) return;
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    if (dragged && dragged.type === 'placed' && dragged.index === targetIndex) {
      if (overIndex !== null) setOverIndex(null);
      return;
    }
    if (overIndex !== targetIndex) setOverIndex(targetIndex);
  };

  const handleDropItem = (e, targetIndex) => {
    if (session.answered) return;
    e.preventDefault();
    e.stopPropagation();
    let data = dragged;
    try {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) data = JSON.parse(raw);
    } catch (_) {}
    if (!data) return;
    if (data.type === 'placed') {
      arrangeReorder(data.index, targetIndex);
    } else if (data.type === 'pool') {
      arrangeInsert(data.id, targetIndex);
    }
    setDragged(null);
    setOverIndex(null);
    setIsOverZone(false);
  };

  const handleDropZone = (e) => {
    if (session.answered) return;
    e.preventDefault();
    let data = dragged;
    try {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) data = JSON.parse(raw);
    } catch (_) {}
    if (!data) return;
    if (data.type === 'placed') {
      arrangeReorder(data.index, placed.length - 1);
    } else if (data.type === 'pool') {
      arrangePick(data.id);
    }
    setDragged(null);
    setOverIndex(null);
    setIsOverZone(false);
  };

  const handleDropPool = (e) => {
    if (session.answered) return;
    e.preventDefault();
    e.stopPropagation();
    let data = dragged;
    try {
      const raw = e.dataTransfer.getData('text/plain');
      if (raw) data = JSON.parse(raw);
    } catch (_) {}
    if (data && data.type === 'placed') {
      arrangeUnpick(data.id);
    }
    setDragged(null);
    setIsOverPool(false);
  };

  const handleDragEnd = () => {
    setDragged(null);
    setOverIndex(null);
    setIsOverZone(false);
    setIsOverPool(false);
  };

  // Touch drag: HTML5 DnD tidak berjalan di layar sentuh, jadi sentuhan dipetakan
  // manual ke blok tujuan/zona dengan floating ghost avatar. Klik tetap dipakai untuk tambah/hapus.
  const touchRef = useRef({ mode: null, index: -1, id: null, startX: 0, startY: 0, moved: false, target: null });
  const suppressClickRef = useRef(false);

  const resolveTouchTarget = (x, y) => {
    const el = document.elementFromPoint(x, y);
    if (!el) return null;
    const item = el.closest('[data-arr-placed-idx]');
    if (item) return { type: 'item', index: Number(item.getAttribute('data-arr-placed-idx')) };
    if (el.closest('#arr-zone')) return { type: 'zone' };
    if (el.closest('#arr-pool')) return { type: 'pool' };
    return null;
  };

  const onTouchStart = (e, mode, index, id) => {
    if (session.answered || e.touches.length > 1) return;
    const t = e.touches[0];
    touchRef.current = { mode, index, id, startX: t.clientX, startY: t.clientY, moved: false, target: null };
  };

  const onTouchMove = (e) => {
    const st = touchRef.current;
    if (session.answered || !st.mode) return;
    const t = e.touches[0];
    if (!t) return;
    if (!st.moved) {
      if (Math.hypot(t.clientX - st.startX, t.clientY - st.startY) <= 6) return;
      st.moved = true;
      setDragged(st.mode === 'placed' ? { type: 'placed', index: st.index, id: st.id } : { type: 'pool', id: st.id });
    }
    setTouchPos({ x: t.clientX, y: t.clientY });
    const target = resolveTouchTarget(t.clientX, t.clientY);
    st.target = target;
    const isSelf = st.mode === 'placed' && target && target.type === 'item' && target.index === st.index;
    setOverIndex(target && target.type === 'item' && !isSelf ? target.index : null);
    setIsOverZone(!!target && target.type === 'zone');
    setIsOverPool(!!target && target.type === 'pool');
  };

  const onTouchEnd = (e) => {
    const st = touchRef.current;
    if (st.moved && e && e.changedTouches && e.changedTouches[0]) {
      st.target = resolveTouchTarget(e.changedTouches[0].clientX, e.changedTouches[0].clientY) || st.target;
    }
    touchRef.current = { mode: null, index: -1, id: null, startX: 0, startY: 0, moved: false, target: null };
    setOverIndex(null);
    setIsOverZone(false);
    setIsOverPool(false);
    setDragged(null);
    setTouchPos(null);
    if (!st.moved) return; /* tap → onClick yang menangani */
    suppressClickRef.current = true;
    setTimeout(() => { suppressClickRef.current = false; }, 350);
    const target = st.target;
    if (!target) return;
    if (st.mode === 'placed') {
      if (target.type === 'item' && target.index !== st.index) arrangeReorder(st.index, target.index);
      else if (target.type === 'pool') arrangeUnpick(st.id);
      else if (target.type === 'zone') arrangeReorder(st.index, placed.length - 1);
    } else if (st.mode === 'pool') {
      if (target.type === 'item') arrangeInsert(st.id, target.index);
      else if (target.type === 'zone') arrangePick(st.id);
    }
  };

  return (
    <div className="lesson__body">
      <div
        className={'arr-zone' + (isOverZone ? ' drag-active' : '')}
        id="arr-zone"
        onDragOver={(e) => { e.preventDefault(); if (!isOverZone) setIsOverZone(true); }}
        onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsOverZone(false); }}
        onDrop={handleDropZone}
      >
        {placed.length === 0 ? (
          <p className="muted">Klik blok di bawah atau drag untuk menyusun urutan.</p>
        ) : (
          placed.map((id, idx) => (
            <button
              key={id}
              data-arr-placed-idx={idx}
              className={'arr-block arr-block--placed'
                + (dragged && dragged.type === 'placed' && dragged.index === idx ? ' is-dragging' : '')
                + (overIndex === idx ? ' drag-over' : '')}
              disabled={session.answered}
              draggable={!session.answered}
              onDragStart={(e) => handleDragStartPlaced(e, idx, id)}
              onDragOver={(e) => handleDragOverItem(e, idx)}
              onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setOverIndex(null); }}
              onDrop={(e) => handleDropItem(e, idx)}
              onDragEnd={handleDragEnd}
              onTouchStart={(e) => onTouchStart(e, 'placed', idx, id)}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onTouchCancel={onTouchEnd}
              onClick={() => {
                if (suppressClickRef.current) return;
                arrangeUnpick(id);
              }}
              title="Drag / geser untuk memindahkan urutan blok, atau klik untuk batal"
            >
              {ex.blocks[+id]}
            </button>
          ))
        )}
      </div>
      <div
        className={'arr-pool' + (isOverPool ? ' drag-active' : '')}
        id="arr-pool"
        onDragOver={(e) => { e.preventDefault(); if (!isOverPool) setIsOverPool(true); }}
        onDragLeave={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setIsOverPool(false); }}
        onDrop={handleDropPool}
      >
        {pool.map((id) => (
          <button
            key={id}
            className={'arr-block' + (dragged && dragged.type === 'pool' && dragged.id === id ? ' is-dragging' : '')}
            disabled={session.answered}
            draggable={!session.answered}
            onDragStart={(e) => handleDragStartPool(e, id)}
            onDragOver={(e) => { e.preventDefault(); if (!isOverPool) setIsOverPool(true); }}
            onDrop={handleDropPool}
            onDragEnd={handleDragEnd}
            onTouchStart={(e) => onTouchStart(e, 'pool', -1, id)}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onTouchCancel={onTouchEnd}
            onClick={() => {
              if (suppressClickRef.current) return;
              arrangePick(id);
            }}
            title="Klik atau drag ke kotak susunan di atas"
          >
            {ex.blocks[+id]}
          </button>
        ))}
      </div>
      {touchPos && dragged && (
        <div
          className="arr-drag-ghost"
          style={{
            position: 'fixed',
            left: touchPos.x,
            top: touchPos.y - 34,
            transform: 'translate(-50%, -50%) scale(1.06)',
            pointerEvents: 'none',
            zIndex: 9999,
            boxShadow: '0 8px 24px rgba(0,0,0,0.22), 0 0 0 2px var(--blue)',
            background: '#fff',
            borderRadius: '10px',
            padding: '10px 14px',
            fontFamily: 'var(--mono)',
            fontSize: '0.88rem',
            fontWeight: '700',
            color: 'var(--text)',
            whiteSpace: 'nowrap',
          }}
        >
          {dragged.type === 'placed' && placed[dragged.index] != null
            ? ex.blocks[+placed[dragged.index]]
            : ex.blocks[+dragged.id]}
        </div>
      )}
    </div>
  );
}

/* ---------- Failed / Done ---------- */

function FailView({ session, topic, isReview, ex }) {
  const expected = ex ? getExpectedAnswer(ex) : '';
  useEffect(() => { SFX.fail(); }, []);
  return (
    <section className="screen screen--center">
      {ex && session.lastResult && (
        <article className="card fail-review">
          <h2>Pembahasan soal terakhir</h2>
          <p className="fail-review__question">{ex.q}</p>
          <p><b>Kenapa belum benar:</b> {session.lastResult.message}</p>
          {session.lastResult.explain && <p><b>Petunjuk:</b> {session.lastResult.explain}</p>}
          {expected && (
            <div>
              <b>{ex.type === 'preview' ? 'Hal yang perlu ada:' : 'Jawaban yang benar:'}</b>
              <pre className="fail-review__answer"><code>{expected}</code></pre>
            </div>
          )}
        </article>
      )}
      <div className="card card--fail">💔 Nyawa habis!</div>
      <p className="muted">Jangan berkecil hati! Coba lagi untuk memperkuat pemahamanmu.</p>
      <button className="btn btn--danger" onClick={lessonRetry}>Coba Lagi</button>
      {isReview
        ? <a className="btn btn--ghost" href="#/">Ke home</a>
        : <a className="btn btn--ghost" href={'#/topic/' + topic.id}>Keluar</a>}
    </section>
  );
}

function getExpectedAnswer(ex) {
  if (ex.type === 'mc') return ex.options[ex.a];
  if (ex.type === 'fill') return ex.accept.join(' / ');
  if (ex.type === 'code') return ex.solution || ex.explain;
  if (ex.type === 'arrange') return ex.blocks.join('\n');
  if (ex.type === 'preview') return Array.isArray(ex.must) ? ex.must.join('\n') : ex.explain;
  return ex.explain || '';
}

function DoneView({ session, topic, isReview, state }) {
  useEffect(() => {
    if (state && state.streak && state.streak.count > 0) {
      notifyStreakMilestone(state.streak.count).catch(() => {});
    }
  }, [state && state.streak ? state.streak.count : 0]);
  const allDone = state.path.every(isTopicDone);
  const nodes = isReview ? [] : topicNodes(topic.id);
  const idx = isReview ? -1 : nodes.findIndex((n) => n.id === session.nodeId);
  const nextNode = idx >= 0 ? nodes[idx + 1] : null;
  const nextTopicId = isReview ? null : state.path[state.path.indexOf(topic.id) + 1];
  const title = isReview ? 'Latihan selesai!' : (session.kind === 'test' ? 'Ujian ' + session.tier + ' lulus!' : 'Step ' + String(session.nodeId).split('--')[1] + ' tuntas!');
  const more = isReview ? dueReviewKeys().length : 0;

  return (
    <section className="screen screen--center result">
      <div className="result__burst">🎉</div>
      <h1 className="result__title">{title}</h1>
      <p className="result__streak">🔥 Streak: {state.streak.count} hari</p>
      <p className="muted">{session.label}{topic ? ' · ' + topic.name : ''}</p>
      <p className="muted">Langkah hebat untuk pemahaman kodingmu!</p>
      <div className="result__actions">
        {isReview ? (
          more > 0
            ? <button className="btn btn--primary" onClick={reviewStart}>Lanjut latihan ({Math.min(more, STEP_SIZE)} lagi)</button>
            : <a className="btn btn--primary" href="#/">Ke home</a>
        ) : nextNode ? (
          <button
            className="btn btn--primary"
            onClick={() => { if (nextNode.kind === 'test') tierTest(topic.id, nextNode.id); else stepStart(topic.id, nextNode.id); }}
          >{nextNode.label}</button>
        ) : (
          <a className="btn btn--primary" href="#/">{(nextTopicId || allDone) ? 'Lanjut ke topik lain 🔓' : 'Ke home'}</a>
        )}
      </div>
    </section>
  );
}

/* ---------- utils ---------- */

function shuffleNums(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}
