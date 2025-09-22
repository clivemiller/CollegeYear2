import React from 'react';

export default function SuccessBanner() {
  return (
    <div className="col" style={{ alignItems: 'center', textAlign: 'center', gap: 8 }}>
      <div style={{ fontSize: 48 }}>🎉</div>
      <div className="title">Lesson Completed</div>
      <div className="muted">Great job! Try another lesson from the sidebar.</div>
      <a className="btn success" href="#/">Back to Home</a>
    </div>
  );
}

