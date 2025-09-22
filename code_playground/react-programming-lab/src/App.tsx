import React from 'react';
import { Router, Route } from './core/Router';
import { ProgressProvider } from './core/ProgressContext';
import { LessonList } from './core/LessonRegistry';
import LessonLayout from './components/LessonLayout';

function Home() {
  return (
    <div className="col" style={{ gap: 16 }}>
      <div className="card">
        <div className="title">Welcome to React Programming Lab</div>
        <p className="muted">
          Learn programming concepts through interactive, animated lessons. Pick a lesson on the left to get started.
        </p>
      </div>
      <div className="card">
        <div className="title">Available Lessons</div>
        <ul>
          {LessonList.map(l => (
            <li key={l.id} style={{ margin: '8px 0' }}>
              <a className="btn" href={`#/lesson/${l.id}`}>{l.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ProgressProvider>
      <div className="app-shell">
        <header className="header">
          <div className="row">
            <span className="badge"><span>🧪</span> React Programming Lab</span>
          </div>
          <a className="btn" href="#/">Home</a>
        </header>
        <aside className="sidebar">
          <div className="title" style={{ marginBottom: 8 }}>Lessons</div>
          <div className="col">
            {LessonList.map(l => (
              <a key={l.id} className="btn" href={`#/lesson/${l.id}`}>{l.title}</a>
            ))}
          </div>
        </aside>
        <main className="main">
          <Router>
            <Route path="#/" component={Home} />
            <Route path="#/lesson/:lessonId" component={LessonLayout} />
          </Router>
        </main>
      </div>
    </ProgressProvider>
  );
}

