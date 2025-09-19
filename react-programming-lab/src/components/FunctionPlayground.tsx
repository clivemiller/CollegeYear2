import React, { useEffect, useState } from 'react';

type Op = 'add' | 'multiply' | 'subtract';

export default function FunctionPlayground({ target = 7, op = 'add', onComplete }: {
  target?: number;
  op?: Op;
  onComplete?: () => void;
}) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const compute = (x: number, y: number) => {
    switch (op) {
      case 'add': return x + y;
      case 'multiply': return x * y;
      case 'subtract': return x - y;
    }
  };

  const result = compute(a, b);

  useEffect(() => {
    if (result === target) onComplete?.();
  }, [result, target, onComplete]);

  const signature = op === 'add' ? 'add(a, b)' : op === 'multiply' ? 'multiply(a, b)' : 'subtract(a, b)';
  const body = op === 'add' ? 'return a + b;' : op === 'multiply' ? 'return a * b;' : 'return a - b;';

  const code = `
function ${signature} {
  ${body}
}

const answer = ${signature}; // with a = ${a}, b = ${b}
// answer = ${result} (target: ${target})
`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 12, flexWrap: 'wrap' }}>
        <label className="row" style={{ gap: 6 }}>
          <span className="muted">a</span>
          <input type="range" min={0} max={10} value={a} onChange={e => setA(Number(e.target.value))} />
          <span className="badge">{a}</span>
        </label>
        <label className="row" style={{ gap: 6 }}>
          <span className="muted">b</span>
          <input type="range" min={0} max={10} value={b} onChange={e => setB(Number(e.target.value))} />
          <span className="badge">{b}</span>
        </label>
      </div>
      <div className="muted">Adjust parameters to make the function return the target.</div>
    </div>
  );
}

