import React, { useEffect, useMemo, useState } from 'react';

export default function SortingVisualizer({ data = [5, 3, 8, 1, 4], onComplete }: { data?: number[]; onComplete?: () => void }) {
  const [arr, setArr] = useState<number[]>([...data]);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [swaps, setSwaps] = useState(0);
  const sorted = useMemo(() => arr.every((v, idx, a) => idx === 0 || a[idx - 1] <= v), [arr]);

  useEffect(() => { if (sorted) onComplete?.(); }, [sorted, onComplete]);

  const step = () => {
    setArr(a => {
      const b = [...a];
      if (b[j] > b[j + 1]) {
        const tmp = b[j]; b[j] = b[j + 1]; b[j + 1] = tmp;
        setSwaps(s => s + 1);
      }
      return b;
    });
    setJ(prev => {
      const next = prev + 1;
      if (next >= arr.length - 1 - i) {
        setI(ii => ii + 1);
        return 0;
      }
      return next;
    });
  };

  const reset = () => { setArr([...data]); setI(0); setJ(0); setSwaps(0); };
  const code = `// Bubble sort step\nif (arr[j] > arr[j+1]) swap(arr, j, j+1);\n// i=${i}, j=${j}, swaps=${swaps}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ alignItems: 'flex-end', gap: 6 }}>
        {arr.map((v, idx) => (
          <div key={idx} style={{
            height: 10 + v * 8,
            width: 18,
            background: idx === j || idx === j + 1 ? 'linear-gradient(135deg,#22c55e,#38bdf8)' : '#334155',
            borderRadius: 4,
            transition: 'all 0.2s ease',
          }} title={String(v)} />
        ))}
      </div>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={step} disabled={sorted}>Step</button>
        <button className="btn" onClick={reset}>Reset</button>
        {sorted && <span className="badge" style={{ borderColor: '#22c55e' }}>Sorted ✓</span>}
      </div>
      <div className="muted">Bubble sort compares adjacent items; each pass bubbles a larger element to the end.</div>
    </div>
  );
}

