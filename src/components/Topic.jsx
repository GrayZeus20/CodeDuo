/* CodeDuo — Topik: jalur 3 tier × (step + ujian), unlock berurutan global. */
'use strict';

import { useStore } from '../useStore.js';
import {
  topicById, topicNodes, isNodeDone, stepStart, tierTest,
} from '../store.js';
import { TIER_ORDER } from '../../content.js';
import { pop } from '../lib/motion.js';

export default function Topic({ topicId }) {
  useStore();
  const topic = topicById(topicId);
  if (!topic) {
    return (<section className="screen"><p>Topik tidak ditemukan. <a href="#/">Ke home</a></p></section>);
  }
  const nodes = topicNodes(topicId);
  const stepNodes = nodes.filter((n) => n.kind === 'step');
  const doneSteps = stepNodes.filter((n) => isNodeDone(topicId, n.id)).length;

  return (
    <section className="screen topic">
      <a className="back" href="#/">← Kembali</a>
      <header className="topic__head" style={{ borderColor: topic.color }}>
        <span className="topic__icon">{topic.icon}</span>
        <div>
          <span className="topic-card__tier">3 step · 10 soal/step · ujian tiap tier</span>
          <h1>{topic.name}</h1>
          <p>{topic.desc}</p>
        </div>
        <span className="topic__progress">{doneSteps}/{stepNodes.length}</span>
      </header>

      {TIER_ORDER.map((tier) => {
        const step = nodes.find((n) => n.kind === 'step' && n.tier === tier);
        const test = nodes.find((n) => n.kind === 'test' && n.tier === tier);
        if (!step || !test) return null;
        const idxStep = nodes.indexOf(step);
        const idxTest = nodes.indexOf(test);
        const stepDone = isNodeDone(topicId, step.id);
        const testDone = isNodeDone(topicId, test.id);
        const stepOpen = idxStep === 0 || isNodeDone(topicId, nodes[idxStep - 1].id) || stepDone;
        const testOpen = stepDone || testDone;
        return (
          <section className="tier" key={tier}>
            <div className="tier__head">
              <span className="tier__name">{tier}</span>
              <span className="tier__count">{stepDone ? '1' : '0'}/1 step{testDone ? ' · ujian ✓' : ''}</span>
            </div>
            <ol className="lesson-path">
              <NodeItem topicId={topicId} node={step} idx={idxStep} open={stepOpen} kind="step" />
              <NodeItem topicId={topicId} node={test} idx={idxTest} open={testOpen} kind="test" />
            </ol>
          </section>
        );
      })}
    </section>
  );
}

function NodeItem({ topicId, node, idx, open, kind }) {
  const done = isNodeDone(topicId, node.id);
  const isTest = kind === 'test';
  const cls = done ? 'node node--done' : open ? 'node node--open' : 'node node--locked';
  const label = done ? '★' : open ? (isTest ? '★' : String(node.stepNo)) : '🔒';
  const title = isTest ? 'Ujian ' + node.tier : 'Step ' + node.stepNo + ' · ' + node.tier;
  const onClick = open
    ? (e) => { pop(e.currentTarget); if (isTest) tierTest(topicId, node.id); else stepStart(topicId, node.id); }
    : undefined;
  return (
    <li className={'lesson-path__item' + (idx % 2 ? ' lesson-path__item--right' : '')}>
      <button className={cls + (isTest ? ' node--exam' : '')} disabled={!open} aria-disabled={!open} onClick={onClick}>{label}</button>
      <span className="lesson-path__title">
        <span className="topic-card__tier">{isTest ? 'Ujian' : 'Step ' + node.stepNo + ' · 10 soal'}</span><br />
        {title}{done ? ' · selesai' : open ? '' : ' · terkunci'}
      </span>
    </li>
  );
}
