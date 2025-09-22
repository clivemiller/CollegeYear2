import React, { useEffect, useMemo, useState } from 'react';

export default function TruthTable({
  goal = 'A && B',
  targetRow = { A: true, B: true },
  onComplete,
}: {
  goal?: 'A && B' | 'A || B' | '!A' | 'A ^ B';
  targetRow?: { A: boolean; B: boolean };
  onComplete?: () => void;
}) {
  const [A, setA] = useState(false);
  const [B, setB] = useState(false);

  const compute = useMemo(() => {
    const and = A && B;
    const or = A || B;
    const notA = !A;
    const xor = (A && !B) || (!A && B);
    return { and, or, notA, xor };
  }, [A, B]);

  useEffect(() => { if (A === targetRow.A && B === targetRow.B) onComplete?.(); }, [A, B, targetRow, onComplete]);

  const code = `const A = ${A};\nconst B = ${B};\nA && B = ${compute.and}\nA || B = ${compute.or}\n!A = ${compute.notA}\nA ^ B = ${compute.xor}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 12 }}>
        <label className="row" style={{ gap: 6 }}>
          <input type="checkbox" checked={A} onChange={e => setA(e.target.checked)} /> A
        </label>
        <label className="row" style={{ gap: 6 }}>
          <input type="checkbox" checked={B} onChange={e => setB(e.target.checked)} /> B
        </label>
        <span className="badge">Goal: set {`{A:${String(targetRow.A)}, B:${String(targetRow.B)}}`}</span>
      </div>
      <div className="muted">Toggle inputs and observe boolean expressions.</div>
    </div>
  );
}

