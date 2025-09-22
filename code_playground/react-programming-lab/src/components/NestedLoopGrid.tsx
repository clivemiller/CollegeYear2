import React, { useEffect, useRef, useState } from 'react';

export default function NestedLoopGrid({ rows = 3, cols = 4, onComplete }: {
  rows?: number;
  cols?: number;
  onComplete?: () => void;
}) {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(-1);
  const [done, setDone] = useState(false);
  const timer = useRef<number | null>(null);
  const [playing, setPlaying] = useState(false);

  const step = () => {
    setJ(prev => {
      const nextJ = prev + 1;
      if (nextJ < cols) return nextJ;
      setI(vi => {
        const nextI = vi + 1;
        if (nextI >= rows) {
          setDone(true);
          onComplete?.();
          return vi;
        }
        return nextI;
      });
      return 0;
    });
  };

  useEffect(() => {
    if (!playing || done) return;
    timer.current = window.setInterval(step, 400) as any;
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [playing, done]);

  const reset = () => { setI(0); setJ(-1); setDone(false); setPlaying(false); };
  const code = `for (let i = 0; i < ${rows}; i++) {\n  for (let j = 0; j < ${cols}; j++) {\n    // visiting (i=${i}, j=${Math.max(0, j)})\n  }\n}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 40px)`, gap: 8 }}>
        {Array.from({ length: rows * cols }).map((_, idx) => {
          const rr = Math.floor(idx / cols);
          const cc = idx % cols;
          const active = rr === i && cc === j;
          const visited = rr < i || (rr === i && cc <= j);
          return (
            <div key={idx} style={{
              width: 40, height: 40, borderRadius: 8,
              border: '1px solid #334155',
              background: active ? 'linear-gradient(135deg,#22c55e,#38bdf8)' : visited ? '#0b1220' : 'transparent',
              transition: 'all 0.25s ease',
            }} />
          );
        })}
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={step} disabled={done}>Step</button>
        <button className="btn" onClick={() => setPlaying(p => !p)} disabled={done}>{playing ? 'Pause' : 'Play'}</button>
        <button className="btn" onClick={reset}>Reset</button>
      </div>
      <div className="muted">Observe row-by-row traversal in nested loops.</div>
    </div>
  );
}

