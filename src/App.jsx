/* CodeDuo — App: hash router (home / topic / lesson / review / profile) + topbar + buddy.
 * Router tanpa dependensi: baca routeInfo() dari store, kelola kelas body, scroll ke atas. */
'use strict';

import { Component, useEffect } from 'react';
import { useStore } from './useStore.js';
import { routeInfo } from './store.js';
import Topbar from './components/Topbar.jsx';
import Buddy from './components/Buddy.jsx';
import Home from './components/Home.jsx';
import Topic from './components/Topic.jsx';
import Lesson from './components/Lesson.jsx';
import Materi from './components/Materi.jsx';
import Profile from './components/Profile.jsx';
import BgmSettings from './components/BgmSettings.jsx';
import Terms from './components/Terms.jsx';
import StorageConsentPrompt from './components/StorageConsentPrompt.jsx';
import UiFeedbackHost from './components/UiFeedbackHost.jsx';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: '' };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error && error.message ? error.message : 'Terjadi kesalahan tampilan.' };
  }
  componentDidCatch(error) {
    console.error('[CodeDuo ErrorBoundary]', error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <section className="screen screen--center">
          <div className="card" style={{ maxWidth: '460px', width: '100%', padding: '24px', textAlign: 'left' }}>
            <h1 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Ups, halaman mengalami kendala</h1>
            <p className="muted" style={{ fontSize: '0.88rem', marginBottom: '16px' }}>
              {this.state.errorMsg}
            </p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="btn btn--primary btn--sm"
                onClick={() => {
                  this.setState({ hasError: false, errorMsg: '' });
                  window.location.hash = '#/';
                }}
              >
                Kembali ke Beranda
              </button>
              <button
                type="button"
                className="btn btn--ghost btn--sm"
                onClick={() => window.location.reload()}
              >
                Muat Ulang
              </button>
            </div>
          </div>
        </section>
      );
    }
    return this.props.children;
  }
}

export default function App() {
  useStore();
  const route = routeInfo();
  const isLesson = route.name === 'lesson' || route.name === 'review';

  useEffect(() => {
    if (document.body) document.body.classList.toggle('is-lesson', isLesson);
    window.scrollTo(0, 0);
  }, [isLesson, route.name, route.topicId, route.nodeId, route.lessonId]);

  let screen;
  switch (route.name) {
    case 'topic': screen = <Topic topicId={route.topicId} />; break;
    case 'materi': screen = <Materi topicId={route.topicId} lessonId={route.lessonId} />; break;
    case 'lesson':
    case 'review': screen = <Lesson />; break;
    case 'profile': screen = <Profile />; break;
    case 'bgm-settings': screen = <BgmSettings />; break;
    case 'terms': screen = <Terms />; break;
    default: screen = <Home />;
  }

  return (
    <>
      <Topbar />
      <main id="app">
        <ErrorBoundary key={route.name + ':' + (route.topicId || '') + ':' + (route.nodeId || '') + ':' + (route.lessonId || '')}>
          {screen}
        </ErrorBoundary>
      </main>
      <Buddy />
      <StorageConsentPrompt />
      <UiFeedbackHost />
    </>
  );
}
