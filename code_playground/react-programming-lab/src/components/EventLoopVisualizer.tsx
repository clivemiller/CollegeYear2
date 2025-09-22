import React, { useState } from 'react';

type Task = { id: number; kind: 'micro' | 'macro'; label: string };

export default function EventLoopVisualizer({ onComplete }: { onComplete?: () => void }) {
  const [micro, setMicro] = useState<Task[]>([]);
  const [macro, setMacro] = useState<Task[]>([]);
  const [log, setLog] = useState<string[]>([]);
  const [nextId, setNextId] = useState(1);

  const queue = (kind: Task['kind'], label: string) => {
    const t: Task = { id: nextId, kind, label };
    setNextId(id => id + 1);
    (kind === 'micro' ? setMicro : setMacro)(qs => [...qs, t]);
  };

  const tick = () => {
    // Microtasks run before macrotasks
    if (micro.length > 0) {
      const [t, ...rest] = micro;
      setMicro(rest);
      setLog(l => [...l, `micro: ${t.label}`]);
      if (rest.length === 0 && macro.length === 0) onComplete?.();
      return;
    }
    if (macro.length > 0) {
      const [t, ...rest] = macro;
      setMacro(rest);
      setLog(l => [...l, `macro: ${t.label}`]);
      if (rest.length === 0 && micro.length === 0) onComplete?.();
      return;
    }
  };

  const code = `// Enqueue tasks and step the loop\nPromise.then(...) -> microtask\nsetTimeout(...) -> macrotask\n// Next tick runs all microtasks before a macrotask`;

  return (
    <div className="col" style={{ gap: 12 }}>
      <pre className="code">{code}</pre>
      <div className="row" style={{ gap: 8, flexWrap: 'wrap' }}>
        <button className="btn" onClick={() => queue('micro', 'then')}>Queue micro (then)</button>
        <button className="btn" onClick={() => queue('macro', 'timeout')}>Queue macro (timeout)</button>
        <button className="btn" onClick={tick}>Step tick</button>
      </div>
      <div className="row" style={{ gap: 16, alignItems: 'flex-start' }}>
        <div className="card" style={{ flex: 1 }}>
          <div className="title">Microtasks</div>
          <div className="row" style={{ gap: 6, flexWrap: 'wrap' }}>
            {micro.map(t => <span key={t.id} className="badge">{t.label}#{t.id}</span>)}
          </div>
        </div>
        <div className="card" style={{ flex: 1 }}>
          <div className="title">Macrotasks</div>
          <div className="row" style={{ gap: 6, flexWrap: 'wrap' }}>
            {macro.map(t => <span key={t.id} className="badge">{t.label}#{t.id}</span>)}
          </div>
        </div>
      </div>
      <div className="card">
        <div className="title">Execution Log</div>
        <div className="col" style={{ gap: 6 }}>
          {log.map((l, i) => <div key={i} className="muted">{l}</div>)}
        </div>
      </div>
      <div className="muted">Microtasks always run to completion before the next macrotask.</div>
    </div>
  );
}

