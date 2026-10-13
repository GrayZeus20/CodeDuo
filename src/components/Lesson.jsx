/* CodeDuo — Lesson (step / ujian / review): bar, soal, body per tipe, feedback, hasil.
 * Efek (SFX/motion) dipasang di sini; logika penilaian ada di store. */
'use strict';

import { useEffect, useRef, useState } from 'react';
import { useStore } from '../useStore.js';
import {
  getState, getSession, topicById, topicNodes, dueReviewKeys, currentExercise,
  isTopicDone, pickMc, arrangePick, arrangeUnpick, answerCheck, lessonContinue,
  lessonRetry, lessonExit, reviewStart, stepStart, tierTest, MAX_HEARTS,
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
    const r = answerCheck(answer);
    if (!r) return;
    if (r.empty) { setEmptyMsg(r.message); }
    else {
      setEmptyMsg(null);
      const failed = r.result && r.result.failed;
      if (r.result && r.result.correct) SFX.correct();
      else if (failed) SFX.fail();
      else SFX.wrong();
    }
  };

  const onContinue = (sheetEl) => {
    const next = lessonContinue();
    if (next) {
      SFX.complete();
      celebrate();
      const badge = document.querySelector('.top-stats .streak');
      if (badge) pulse(badge);
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
            >CEK</button>
          )}
          {ex.type === 'fill' && (
            <button className="btn btn--primary btn--wide" id="check-btn" onClick={(e) => { pop(e.currentTarget); const el = document.getElementById('fill-input'); onSubmit(el ? el.value : ''); }}>CEK</button>
          )}
          {(ex.type === 'code' || ex.type === 'preview') && (
            <button className="btn btn--primary btn--wide" id="check-btn" onClick={(e) => { pop(e.currentTarget); const el = document.getElementById('code-input'); onSubmit(el ? el.value : ''); }}>CEK</button>
          )}
          {ex.type === 'arrange' && (
            <button className="btn btn--primary btn--wide" id="check-btn" onClick={(e) => { pop(e.currentTarget); onSubmit((session.arrPlaced || []).slice()); }}>CEK</button>
          )}
        </div>
      )}
      {session.phase === 'feedback' && session.lastResult && (
        <Feedback session={session} onContinue={onContinue} />
      )}
    </section>
  );
}

function Feedback({ session, onContinue }) {
  const ref = useRef(null);
  const last = session.lastResult;
  useEffect(() => { if (ref.current) slideUp(ref.current); }, []);
  const run = (e) => {
    if (ref.current) fadeOutDown(ref.current, () => onContinue());
    else onContinue();
    pop(e.currentTarget);
  };
  return (
    <div className={'feedback ' + (last.correct ? 'feedback--ok' : 'feedback--bad')} ref={ref}>
      <b>{last.correct ? '✅ Benar!' : '❌ ' + last.message}</b>
      <p>{last.explain}</p>
      <button className={'btn ' + (last.correct ? 'btn--primary' : 'btn--danger')} onClick={run}>LANJUT</button>
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
          defaultValue={ex.starter}
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
  const placed = session.arrPlaced || [];
  const all = ex.blocks.map((_, i) => String(i));
  if (!session.arrMap[session.pos]) session.arrMap[session.pos] = shuffleNums(all.length).map(String);
  const pool = session.arrMap[session.pos].filter((id) => !placed.includes(id));
  return (
    <div className="lesson__body">
      <div className="arr-zone" id="arr-zone">
        {placed.length === 0
          ? <p className="muted">Klik blok di bawah untuk menyusun urutan.</p>
          : placed.map((id) => (
            <button
              key={id}
              className="arr-block arr-block--placed"
              disabled={session.answered}
              onClick={() => arrangeUnpick(id)}
            >{ex.blocks[+id]}</button>
          ))}
      </div>
      <div className="arr-pool" id="arr-pool">
        {pool.map((id) => (
          <button
            key={id}
            className="arr-block"
            disabled={session.answered}
            onClick={() => arrangePick(id)}
          >{ex.blocks[+id]}</button>
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
