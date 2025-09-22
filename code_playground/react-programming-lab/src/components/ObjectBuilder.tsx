import React, { useEffect, useMemo, useState } from 'react';

type Entry = { key: string; value: string };

export default function ObjectBuilder({
  targetKeys = ['name', 'age', 'role'],
  onComplete,
}: {
  targetKeys?: string[];
  onComplete?: () => void;
}) {
  const [entries, setEntries] = useState<Entry[]>([{ key: '', value: '' }]);
  const keys = useMemo(() => entries.map(e => e.key).filter(Boolean), [entries]);
  const missing = targetKeys.filter(k => !keys.includes(k));

  useEffect(() => { if (missing.length === 0) onComplete?.(); }, [missing, onComplete]);

  const code = `const obj = {\n${entries
    .filter(e => e.key)
    .map(e => `  ${JSON.stringify(e.key)}: ${JSON.stringify(e.value)},`)
    .join('\n')}\n};`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      {entries.map((e, idx) => (
        <div key={idx} className="row" style={{ gap: 6 }}>
          <input placeholder="key" value={e.key} onChange={ev => setEntries(es => es.map((x, i) => i === idx ? { ...x, key: ev.target.value } : x))} />
          <input placeholder="value" value={e.value} onChange={ev => setEntries(es => es.map((x, i) => i === idx ? { ...x, value: ev.target.value } : x))} />
          <button className="btn" onClick={() => setEntries(es => es.filter((_, i) => i !== idx))}>Remove</button>
        </div>
      ))}
      <div className="row" style={{ gap: 6 }}>
        <button className="btn" onClick={() => setEntries(es => [...es, { key: '', value: '' }])}>+ Add field</button>
        <span className="badge">Need keys: {missing.length ? missing.join(', ') : 'All set ✓'}</span>
      </div>
    </div>
  );
}

