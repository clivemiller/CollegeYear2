import React, { useEffect, useState } from 'react';

export default function CounterPlayground({ target = 5, onComplete }: { target?: number; onComplete?: () => void }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= target) onComplete?.();
  }, [count, target, onComplete]);

  return (
    <div className="col" style={{ gap: 12 }}>
      <div className="code">let x = {count}; // Try to reach {target}</div>
      <div className="row">
        <button className="btn" onClick={() => setCount(c => Math.max(0, c - 1))}>-1</button>
        <button className="btn primary" onClick={() => setCount(c => c + 1)}>+1</button>
        <button className="btn" onClick={() => setCount(0)}>Reset</button>
        <span className="badge">x = {count}</span>
      </div>
      <div className="muted">This simulates assigning to a variable. Each click updates x.</div>
    </div>
  );
}

