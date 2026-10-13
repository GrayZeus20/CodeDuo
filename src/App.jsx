/* CodeDuo — App: hash router (home / topic / lesson / review / profile) + topbar + buddy.
 * Router tanpa dependensi: baca routeInfo() dari store, kelola kelas body, scroll ke atas. */
'use strict';

import { useEffect } from 'react';
import { useStore } from './useStore.js';
import { routeInfo, getState } from './store.js';
import Topbar from './components/Topbar.jsx';
import Buddy from './components/Buddy.jsx';
import Home from './components/Home.jsx';
import Topic from './components/Topic.jsx';
import Lesson from './components/Lesson.jsx';
import Profile from './components/Profile.jsx';

export default function App() {
  useStore();
  const state = getState();
  const buddyHidden = state ? !!state.buddyHidden : false;
  const route = routeInfo();
  const isLesson = route.name === 'lesson' || route.name === 'review';

  useEffect(() => {
    if (document.body) document.body.classList.toggle('is-lesson', isLesson);
    window.scrollTo(0, 0);
  }, [isLesson, route.name, route.topicId, route.nodeId]);

  let screen;
  switch (route.name) {
    case 'topic': screen = <Topic topicId={route.topicId} />; break;
    case 'lesson':
    case 'review': screen = <Lesson />; break;
    case 'profile': screen = <Profile />; break;
    default: screen = <Home />;
  }

  return (
    <>
      <Topbar />
      <main id="app">{screen}</main>
      {!buddyHidden && <Buddy />}
    </>
  );
}
