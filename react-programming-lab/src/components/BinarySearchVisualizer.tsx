import React, { useEffect, useMemo, useState } from 'react';

export default function BinarySearchVisualizer({
  array = [1, 3, 5, 7, 9, 11, 13],
  target = 7,
  onComplete,
}: {
  array?: number[];
  target?: number;
  onComplete?: () => void;
}) {
  const [lo, setLo] = useState(0);
  const [hi, setHi] = useState(array.length - 1);
  const mid = useMemo(() => Math.floor((lo + hi) / 2), [lo, hi]);
  const [found, setFound] = useState(false);

  const step = () => {
    if (found || lo > hi) return;
    const m = Math.floor((lo + hi) / 2);
    if (array[m] === target) { setFound(true); onComplete?.(); }
    else if (array[m] < target) setLo(m + 1);
    else setHi(m - 1);
  };
  const reset = () => { setLo(0); setHi(array.length - 1); setFound(false); };

  const code = `let lo=${lo}, hi=${hi}; const mid=Math.floor((lo+hi)/2);\nif (arr[mid] === ${target}) found;\nelse if (arr[mid] < ${target}) lo = mid + 1; else hi = mid - 1;`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 6 }}>
        {array.map((v, idx) => (
          <div key={idx} className="badge" style={{
            borderColor: idx === mid ? '#38bdf8' : idx >= lo && idx <= hi ? '#334155' : '#172036',
            background: idx === mid ? 'rgba(56,189,248,0.15)' : undefined,
          }}>{v}</div>
        ))}
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={step} disabled={found}>Step</button>
        <button className="btn" onClick={reset}>Reset</button>
        <span className="badge">lo={lo}</span>
        <span className="badge">mid={mid}</span>
        <span className="badge">hi={hi}</span>
        {found && <span className="badge" style={{ borderColor: '#22c55e' }}>Found {target} at {array.indexOf(target)}</span>}
      </div>
      <div className="muted">Narrow the search range by comparing the middle element to the target.</div>
    </div>
  );
}

