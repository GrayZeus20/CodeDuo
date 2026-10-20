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
import { pop, slideUp, fadeOutDown, celebrate, pulse } from '../lib/motion.js';

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

  if (session.phase === 'failed') return <FailView session={session} topic={topic} isReview={isReview} />;
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
    answerCheck(answer).then((r) => {
      if (!r) return;
      if (r.empty) { setEmptyMsg(r.message); return; }
      setEmptyMsg(null);
      const res = r.result || {};
      if (res.correct) SFX.correct();
      else if (res.close) SFX.close();
      else if (res.failed) SFX.fail();
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
      <h2 className="lesson__q">{ex.q}</h2>
      <ExerciseBody key={session.pos} ex={ex} session={session} onSubmit={onSubmit} />
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
              onClick={() => pickMc(optIdx)}
            >{ex.options[optIdx]}</button>
          ))}
        </div>
      </div>
    );
  }
  if (ex.type === 'fill') {
    const parts = String(ex.code).split('___');
    return (
      <div className="lesson__body">
        <pre className="code-block">{parts[0]}<span className="blank-line" id="fill-slot" />{parts.slice(1).join('___')}</pre>
        <input
          className="input" id="fill-input" type="text" placeholder="Ketik jawaban…"
          autoComplete="off" autoCapitalize="off" spellCheck="false" disabled={session.answered}
          defaultValue={session.lastInput != null ? session.lastInput : ''}
          onKeyDown={(e) => { if (e.key === 'Enter' && !session.answered) onSubmit(e.currentTarget.value); }}
        />
      </div>
    );
  }
  if (ex.type === 'code') {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        onSubmit(e.currentTarget.value);
      } else if (e.key === 'Tab') {
        e.preventDefault();
        const start = e.currentTarget.selectionStart;
        const end = e.currentTarget.selectionEnd;
        const val = e.currentTarget.value;
        e.currentTarget.value = val.substring(0, start) + '  ' + val.substring(end);
        e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 2;
      }
    };
    return (
      <div className="lesson__body">
        <textarea
          className="code-input"
          id="code-input"
          spellCheck="false"
          rows={8}
          defaultValue={session.lastInput != null ? session.lastInput : ex.starter}
          disabled={session.answered}
          onKeyDown={handleKeyDown}
        />
        {ex.tests && ex.tests.length > 0 && (
          <div className="muted" style={{ fontSize: '0.82rem', marginTop: '2px' }}>
            Contoh uji: <code>{ex.fn}({ex.tests[0].args.map((a) => JSON.stringify(a)).join(', ')})</code> → <code>{JSON.stringify(ex.tests[0].expected)}</code>
          </div>
        )}
      </div>
    );
  }
  if (ex.type === 'preview') {
    return <PreviewBody ex={ex} disabled={session.answered} onSubmit={onSubmit} />;
  }
  if (ex.type === 'arrange') {
    return <ArrangeBody ex={ex} session={session} />;
  }
  return null;
}

function PreviewBody({ ex, disabled, onSubmit }) {
  const [code, setCode] = useState(ex.starter || '');
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

function ArrangeBody({ ex, session }) {
  const [dragged, setDragged] = useState(null);
  const [overIndex, setOverIndex] = useState(null);
  const [isOverZone, setIsOverZone] = useState(false);
  const [isOverPool, setIsOverPool] = useState(false);

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
    e.dataTransfer.dropEffect = 'move';
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

  // Touch drag support for mobile / touchscreen
  const touchRef = useRef({ index: -1, id: null, startX: 0, startY: 0, moved: false });

  const onTouchStartPlaced = (e, index, id) => {
    if (session.answered) return;
    const t = e.touches[0];
    touchRef.current = { index, id, startX: t.clientX, startY: t.clientY, moved: false };
  };

  const onTouchMovePlaced = (e) => {
    if (session.answered || touchRef.current.index < 0) return;
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - touchRef.current.startX);
    const dy = Math.abs(t.clientY - touchRef.current.startY);
    if (dx > 8 || dy > 8) {
      touchRef.current.moved = true;
      const el = document.elementFromPoint(t.clientX, t.clientY);
      const btn = el ? el.closest('[data-arr-placed-idx]') : null;
      if (btn) {
        const tIdx = Number(btn.getAttribute('data-arr-placed-idx'));
        if (!isNaN(tIdx) && tIdx !== overIndex) {
          setOverIndex(tIdx);
        }
      }
    }
  };

  const onTouchEndPlaced = (e) => {
    if (session.answered) return;
    if (touchRef.current.moved && overIndex != null && overIndex !== touchRef.current.index) {
      arrangeReorder(touchRef.current.index, overIndex);
    }
    touchRef.current = { index: -1, id: null, startX: 0, startY: 0, moved: false };
    setOverIndex(null);
  };

  return (
    <div className="lesson__body">
      <div
        className={'arr-zone' + (isOverZone ? ' drag-active' : '')}
        id="arr-zone"
        onDragOver={(e) => { e.preventDefault(); if (!isOverZone) setIsOverZone(true); }}
        onDragLeave={() => setIsOverZone(false)}
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
              onDrop={(e) => handleDropItem(e, idx)}
              onDragEnd={handleDragEnd}
              onTouchStart={(e) => onTouchStartPlaced(e, idx, id)}
              onTouchMove={onTouchMovePlaced}
              onTouchEnd={onTouchEndPlaced}
              onClick={() => {
                if (touchRef.current.moved) return;
                arrangeUnpick(id);
              }}
              title="Drag / geser untuk memindahkan urutan blok, atau klik untuk batal"
            >
              <span className="arr-drag-handle" aria-hidden="true">⠿</span>
              {ex.blocks[+id]}
            </button>
          ))
        )}
      </div>
      <div
        className={'arr-pool' + (isOverPool ? ' drag-active' : '')}
        id="arr-pool"
        onDragOver={(e) => { e.preventDefault(); if (!isOverPool) setIsOverPool(true); }}
        onDragLeave={() => setIsOverPool(false)}
        onDrop={handleDropPool}
      >
        {pool.map((id) => (
          <button
            key={id}
            className={'arr-block' + (dragged && dragged.type === 'pool' && dragged.id === id ? ' is-dragging' : '')}
            disabled={session.answered}
            draggable={!session.answered}
            onDragStart={(e) => handleDragStartPool(e, id)}
            onDragEnd={handleDragEnd}
            onClick={() => arrangePick(id)}
            title="Klik atau drag ke kotak susunan di atas"
          >
            {ex.blocks[+id]}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ---------- Failed / Done ---------- */

function FailView({ session, topic, isReview }) {
  const label = session.label || '';
  useEffect(() => { SFX.fail(); }, []);
  return (
    <section className="screen screen--center">
      <div className="card card--fail">💔 Nyawa habis!</div>
      <p className="muted">Jangan berkecil hati! Coba lagi untuk memperkuat pemahamanmu.</p>
      <button className="btn btn--danger" onClick={lessonRetry}>Coba Lagi</button>
      {isReview
        ? <a className="btn btn--ghost" href="#/">Ke home</a>
        : <a className="btn btn--ghost" href={'#/topic/' + topic.id}>Keluar</a>}
    </section>
  );
}

function DoneView({ session, topic, isReview, state }) {
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
