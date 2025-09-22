import React from 'react';

export default function StepNavigator({ total, current, onPrev, onNext, nextDisabled }: {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
}) {
  return (
    <div className="col" style={{ gap: 12 }}>
      <div className="title">Navigate</div>
      <div className="row" style={{ justifyContent: 'space-between' }}>
        <button className="btn" onClick={onPrev} disabled={current === 0}>Previous</button>
        <div className="badge">{current + 1} / {total}</div>
        <button className="btn primary" onClick={onNext} disabled={current === total - 1 || !!nextDisabled}>Next</button>
      </div>
      <div className="muted">Tip: Complete interactive steps to unlock Next.</div>
    </div>
  );
}
