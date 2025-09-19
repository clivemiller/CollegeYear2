import React, { useEffect, useMemo, useState } from 'react';

export default function ArrayTransformPlayground({
  initial = [1, 2, 3, 4, 5],
  targetSum,
  onComplete,
}: {
  initial?: number[];
  targetSum?: number;
  onComplete?: () => void;
}) {
  const [op, setOp] = useState<'add' | 'mul'>('add');
  const [k, setK] = useState(1);
  const [filterOn, setFilterOn] = useState(false);
  const [threshold, setThreshold] = useState(0);

  const mapped = useMemo(() => initial.map(n => (op === 'add' ? n + k : n * k)), [initial, op, k]);
  const transformed = useMemo(() => (filterOn ? mapped.filter(n => n >= threshold) : mapped), [mapped, filterOn, threshold]);
  const sum = useMemo(() => transformed.reduce((a, b) => a + b, 0), [transformed]);

  useEffect(() => {
    if (targetSum !== undefined && sum === targetSum) onComplete?.();
  }, [sum, targetSum, onComplete]);

  const code = `const arr = [${initial.join(', ')}];\nconst ${op === 'add' ? 'mapFn = (x) => x + ' + k : 'mapFn = (x) => x * ' + k};\nconst mapped = arr.map(mapFn);\n${filterOn ? `const filtered = mapped.filter(x => x >= ${threshold});\n` : ''}const result = ${filterOn ? 'filtered' : 'mapped'};\nconst sum = result.reduce((a, b) => a + b, 0); // = ${sum}`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
        <label className="row" style={{ gap: 6 }}>
          <span className="muted">map</span>
          <select value={op} onChange={e => setOp(e.target.value as any)}>
            <option value="add">+k</option>
            <option value="mul">*k</option>
          </select>
          <input type="range" min={-5} max={5} value={k} onChange={e => setK(Number(e.target.value))} />
          <span className="badge">k = {k}</span>
        </label>
        <label className="row" style={{ gap: 6 }}>
          <input type="checkbox" checked={filterOn} onChange={e => setFilterOn(e.target.checked)} />
          <span>filter x ≥</span>
          <input type="number" value={threshold} onChange={e => setThreshold(Number(e.target.value || 0))} style={{ width: 64 }} />
        </label>
        {targetSum !== undefined && <span className="badge">target sum = {targetSum}</span>}
      </div>
      <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
        {transformed.map((n, i) => (
          <div key={i} className="badge">{n}</div>
        ))}
        <div className="badge" style={{ borderColor: '#22c55e' }}>∑ = {sum}</div>
      </div>
      <div className="muted">Tune the map and filter to achieve the goal.</div>
    </div>
  );
}

