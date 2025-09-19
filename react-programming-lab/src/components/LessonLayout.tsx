import React, { useEffect, useMemo, useState } from 'react';
import { getLessonById } from '../core/LessonRegistry';
import { useProgress } from '../core/ProgressContext';
import StepNavigator from './StepNavigator';
import SuccessBanner from './SuccessBanner';

export default function LessonLayout({ params }: { params: { lessonId: string } }) {
  const { lessonId } = params;
  const lesson = getLessonById(lessonId);
  const progress = useProgress();

  if (!lesson) return <div className="card">Lesson not found.</div>;
  const idx = progress.getStep(lesson.id);
  const step = lesson.steps[idx];
  const pct = Math.round(((idx) / (lesson.steps.length - 1)) * 100);

  const [completed, setCompleted] = useState(false);
  useEffect(() => { setCompleted(false); }, [lesson.id, idx]);

  const content = useMemo(() => step.render({
    complete: () => setCompleted(true)
  }), [step]);

  return (
    <div className="col" style={{ gap: 16 }}>
      <div className="card">
        <div className="row" style={{ justifyContent: 'space-between' }}>
          <div>
            <div className="title">{lesson.title}</div>
            <div className="muted">{lesson.description}</div>
          </div>
          <div className="col" style={{ minWidth: 240 }}>
            <div className="row" style={{ justifyContent: 'space-between' }}>
              <span className="muted">Progress</span>
              <span className="badge">{pct}%</span>
            </div>
            <div className="progress-bar"><div className="progress-fill" style={{ ['--pct' as any]: `${pct}%` }} /></div>
          </div>
        </div>
      </div>

      <div className="row" style={{ alignItems: 'stretch' }}>
        <div style={{ flex: 1 }} className="card">
          <div className="title">Step {idx + 1}: {step.title}</div>
          <div style={{ marginTop: 12 }}>{content}</div>
          {step.kind === 'interactive' && (
            <div style={{ marginTop: 12 }}>
              {completed ? (
                <div className="badge" style={{ borderColor: '#22c55e' }}>✓ Step complete — you can click Next</div>
              ) : (
                <div className="muted">Complete the interaction to enable Next.</div>
              )}
            </div>
          )}
        </div>
        <div style={{ width: 320 }} className="card">
          <StepNavigator
            total={lesson.steps.length}
            current={idx}
            onPrev={() => progress.setStep(lesson.id, Math.max(0, idx - 1))}
            onNext={() => progress.setStep(lesson.id, Math.min(lesson.steps.length - 1, idx + 1))}
            nextDisabled={step.kind === 'interactive' && !completed}
          />
          {idx === lesson.steps.length - 1 && (
            <div style={{ marginTop: 12 }}>
              <SuccessBanner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
