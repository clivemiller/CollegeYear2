import React from 'react';

export type StepContext = {
  complete: () => void;
};

export type LessonStep = {
  id: string;
  title: string;
  kind: 'content' | 'interactive';
  render: (ctx: StepContext) => React.ReactNode;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  steps: LessonStep[];
  estimatedMinutes?: number;
};

