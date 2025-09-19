import React, { useEffect, useState } from 'react';

export default function IfElseVisualizer({ onComplete }: { onComplete?: () => void }) {
  const [condition, setCondition] = useState(false);
  useEffect(() => {
    if (condition) onComplete?.();
  }, [condition, onComplete]);

  const code = `if (isSunny) {\n  goOutside();\n} else {\n  readBook();\n}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row">
        <label className="row" style={{ gap: 8 }}>
          <input type="checkbox" checked={condition} onChange={e => setCondition(e.target.checked)} />
          <span>isSunny = {String(condition)}</span>
        </label>
      </div>
      <div className="row" style={{ gap: 16 }}>
        <div className="card" style={{ flex: 1, borderColor: condition ? '#22c55e' : '#334155' }}>
          <div className="title">Then branch</div>
          <div>{condition ? 'goOutside()' : '...'}</div>
        </div>
        <div className="card" style={{ flex: 1, borderColor: !condition ? '#22c55e' : '#334155' }}>
          <div className="title">Else branch</div>
          <div>{!condition ? 'readBook()' : '...'}</div>
        </div>
      </div>
      <div className="muted">Toggle the condition to choose a path. Conditionals run one branch or the other.</div>
    </div>
  );
}

