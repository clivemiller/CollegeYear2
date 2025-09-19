import React, { useEffect, useRef, useState } from 'react';

export default function ForLoopVisualizer({ n = 5, speedMs = 450, onComplete }: {
  n?: number;
  speedMs?: number;
  onComplete?: () => void;
}) {
  const [i, setI] = useState(-1);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(speedMs);
  const timer = useRef<number | null>(null);

  const clear = () => { if (timer.current) { window.clearInterval(timer.current); timer.current = null; } };

  useEffect(() => {
    clear();
    if (playing) {
      timer.current = window.setInterval(() => setI(x => x + 1), speed) as any;
    }
    return clear;
  }, [playing, speed]);

  useEffect(() => {
    if (i >= n) {
      clear();
      setPlaying(false);
      onComplete?.();
    }
  }, [i, n, onComplete]);

  const reset = () => { clear(); setI(-1); setPlaying(false); };
  const stepOnce = () => setI(x => x + 1);

  const code = `for (let i = 0; i < ${n}; i++) {\n  // i = ${Math.max(0, i)}\n}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 10, flexWrap: 'wrap' }}>
        {Array.from({ length: n }).map((_, idx) => (
          <div key={idx} style={{
            width: 40, height: 40, borderRadius: 10,
            border: '1px solid #334155',
            background: idx <= i && i >= 0 ? 'linear-gradient(135deg,#22c55e,#38bdf8)' : 'transparent',
            transition: 'all 0.35s ease',
          }} />
        ))}
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={stepOnce} disabled={i >= n}>Step</button>
        <button className="btn" onClick={() => setPlaying(p => !p)} disabled={i >= n}>{playing ? 'Pause' : 'Play'}</button>
        <button className="btn" onClick={reset}>Reset</button>
        <label className="row" style={{ gap: 6, marginLeft: 8 }}>
          <span className="muted">Speed</span>
          <input type="range" min={100} max={1000} step={50} value={speed} onChange={e => setSpeed(Number(e.target.value))} />
        </label>
      </div>
      <div className="muted">Use Step/Play to iterate. Each box lights once per loop iteration.</div>
    </div>
  );
}

