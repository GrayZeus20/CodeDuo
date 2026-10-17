/* CodeDuo — Topik: jalur 3 tier × (step + ujian), unlock berurutan global. */
'use strict';

import { useState } from 'react';
import { useStore } from '../useStore.js';
import {
  topicById, topicNodes, isNodeDone, stepStart, tierTest,
} from '../store.js';
import { TIER_ORDER } from '../../content.js';
import { pop } from '../lib/motion.js';
import { TOPIC_GUIDES } from '../guidebooks.js';
import TopicIcon from './TopicIcon.jsx';

export default function Topic({ topicId }) {
  useStore();
  const [showGuide, setShowGuide] = useState(false);
  const topic = topicById(topicId);
  if (!topic) {
    return (<section className="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>);
  }
  const guide = TOPIC_GUIDES[topicId];
  const nodes = topicNodes(topicId);
  const stepNodes = nodes.filter((n) => n.kind === 'step');
  const doneSteps = stepNodes.filter((n) => isNodeDone(topicId, n.id)).length;

  return (
    <section className="screen topic">
      <a className="back" href="#/">← Kembali</a>
      <header className="topic__head" style={{ borderColor: topic.color }}>
        <span className="topic__icon"><TopicIcon id={topic.id} size={48} /></span>
        <div>
          <span className="topic-card__tier">{stepNodes.length} step · 10 soal/step · ujian tiap tier</span>
          <h1>{topic.name}</h1>
          <p>{topic.desc}</p>
        </div>
        <span className="topic__progress">{doneSteps}/{stepNodes.length}</span>
      </header>

      {guide && (
        <div className="topic__guide-card card">
          <div className="topic__guide-header">
            <b>💡 Panduan Singkat · {guide.title}</b>
            <button
              className="btn btn--ghost btn--sm"
              onClick={(e) => { pop(e.currentTarget); setShowGuide((v) => !v); }}
            >
              {showGuide ? 'Tutup ▲' : 'Buka Tips ▼'}
            </button>
          </div>
          {showGuide && (
            <div className="topic__guide-body">
              <p className="topic__guide-summary">{guide.summary}</p>
              <ul className="topic__guide-points">
                {guide.keyPoints.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
              {guide.snippet && (
                <pre className="code-block topic__guide-code"><code>{guide.snippet}</code></pre>
              )}
              {guide.bibitTip && (
                <div className="topic__guide-tip">
                  <span aria-hidden="true">🤖</span>
                  <div><b>Tips Bibit:</b> {guide.bibitTip}</div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {TIER_ORDER.map((tier) => {
        const tierSteps = nodes.filter((n) => n.kind === 'step' && n.tier === tier);
        const test = nodes.find((n) => n.kind === 'test' && n.tier === tier);
        if (!tierSteps.length || !test) return null;
        const doneTierSteps = tierSteps.filter((s) => isNodeDone(topicId, s.id)).length;
        const testDone = isNodeDone(topicId, test.id);
        const allTierStepsDone = doneTierSteps === tierSteps.length;
        const testOpen = allTierStepsDone || testDone;

        return (
          <section className="tier" key={tier}>
            <div className="tier__head">
              <span className="tier__name">{tier}</span>
              <span className="tier__count">{doneTierSteps}/{tierSteps.length} step{testDone ? ' · ujian ✓' : ''}</span>
            </div>
            <ol className="lesson-path">
              {tierSteps.map((step) => {
                const idxStep = nodes.indexOf(step);
                const sIdx = stepNodes.indexOf(step);
                const stepDone = isNodeDone(topicId, step.id);
                const prevStepDone = sIdx === 0 || isNodeDone(topicId, stepNodes[sIdx - 1].id);
                const stepOpen = prevStepDone || stepDone;
                return (
                  <NodeItem
                    key={step.id}
                    topicId={topicId}
                    node={step}
                    idx={idxStep}
                    open={stepOpen}
                    kind="step"
                  />
                );
              })}
              <NodeItem
                key={test.id}
                topicId={topicId}
                node={test}
                idx={nodes.indexOf(test)}
                open={testOpen}
                kind="test"
              />
            </ol>
          </section>
        );
      })}
    </section>
  );
}

function NodeItem({ topicId, node, idx, open, kind }) {
  const t = topicById(topicId);
  const done = isNodeDone(topicId, node.id);
  const isTest = kind === 'test';
  const cls = done ? 'node node--done' : open ? 'node node--open' : 'node node--locked';
  const label = done ? '★' : open ? (isTest ? '★' : String(node.stepNo)) : '🔒';
  const title = isTest ? 'Ujian ' + node.tier : 'Step ' + node.stepNo + ' · ' + node.tier;
  const lessonIds = isTest
    ? []
    : [...new Set((node.questionIds || []).map((k) => (k.includes('|') ? k.split('|')[1].split('#')[0] : '')))];
  const stepLessons = t ? t.lessons.filter((l) => lessonIds.includes(l.id)) : [];
  const lessonTitles = stepLessons.map((l) => l.title).join(' · ');
  const firstLesson = stepLessons[0] || null;
  const onClick = open
    ? (e) => { pop(e.currentTarget); if (isTest) tierTest(topicId, node.id); else stepStart(topicId, node.id); }
    : undefined;
  return (
    <li className={'lesson-path__item' + (idx % 2 ? ' lesson-path__item--right' : '')}>
      <button className={cls + (isTest ? ' node--exam' : '')} disabled={!open} aria-disabled={!open} onClick={onClick}>{label}</button>
      <span className="lesson-path__title">
        <span className="topic-card__tier">{isTest ? 'Ujian ' + node.tier : 'Step ' + node.stepNo + ' · ' + (node.questionIds ? node.questionIds.length : 10) + ' soal'}</span><br />
        <b>{title}</b>{done ? ' · selesai' : open ? '' : ' · terkunci'}
        {!isTest && lessonTitles && (
          <span className="topic-card__sub-lessons" style={{ display: 'block', fontSize: '0.78rem', color: 'var(--muted)', marginTop: '2px' }}>
            {lessonTitles}
          </span>
        )}
        {!isTest && firstLesson && (
          <a
            className="materi-link"
            href={'#/materi/' + topicId + '/' + firstLesson.id}
            onClick={(e) => e.stopPropagation()}
            title="Baca materi dulu sebelum latihan"
          >📖 Baca materi</a>
        )}
      </span>
    </li>
  );
}
