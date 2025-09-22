import React, { useEffect, useState } from 'react';

export default function RecursionVisualizer({ n = 4, onComplete }: { n?: number; onComplete?: () => void }) {
  const [depth, setDepth] = useState(0);
  const [stack, setStack] = useState<number[]>([]);
  const [result, setResult] = useState<number | null>(null);

  const push = () => {
    if (depth >= n) return;
    setStack(s => [...s, depth + 1]);
    setDepth(d => d + 1);
  };
  const pop = () => {
    setStack(s => s.slice(0, -1));
    setDepth(d => d - 1);
  };

  useEffect(() => {
    if (depth === n) {
      // compute factorial via iterative unwind
      let acc = 1;
      for (let i = 1; i <= n; i++) acc *= i;
      setResult(acc);
      onComplete?.();
    } else {
      setResult(null);
    }
  }, [depth, n, onComplete]);

  const code = `function fact(n) {\n  if (n <= 1) return 1;\n  return n * fact(n - 1);\n}\n// current depth = ${depth} / ${n}\n// stack = [${stack.join(', ')}]\n// result = ${result ?? '…'}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 8 }}>
        <button className="btn" onClick={push} disabled={depth >= n}>Recurse</button>
        <button className="btn" onClick={pop} disabled={depth <= 0}>Return</button>
        {result !== null && <span className="badge" style={{ borderColor: '#22c55e' }}>fact({n}) = {result}</span>}
      </div>
      <div className="muted">Use Recurse to go deeper and Return to unwind like a call stack.</div>
    </div>
  );
}

