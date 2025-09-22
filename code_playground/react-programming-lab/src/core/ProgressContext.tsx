import React, { createContext, useContext, useMemo, useState } from 'react';

type ProgressState = Record<string, number>; // lessonId -> step index

type ProgressAPI = {
  getStep: (lessonId: string) => number;
  setStep: (lessonId: string, idx: number) => void;
};

const ProgressCtx = createContext<ProgressAPI | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [progress, setProgress] = useState<ProgressState>({});
  const api = useMemo<ProgressAPI>(() => ({
    getStep: (id) => progress[id] ?? 0,
    setStep: (id, idx) => setProgress(p => ({ ...p, [id]: idx })),
  }), [progress]);
  return <ProgressCtx.Provider value={api}>{children}</ProgressCtx.Provider>;
}

export function useProgress() {
  const ctx = useContext(ProgressCtx);
  if (!ctx) throw new Error('ProgressContext missing');
  return ctx;
}

