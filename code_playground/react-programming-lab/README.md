# React Programming Lab

Interactive, animated React + TypeScript app to teach core programming concepts with reusable lesson components.

## Features

- Lesson engine: steps, progress, and completion
- Reusable interactive components: counter (variables), if/else visualizer, loop visualizer
- Simple hash router (no external router dependency)
- Clean UI with subtle animations and progress tracking
- Scalable lesson authoring via TypeScript modules

## Project Structure

- `index.html` – entry HTML
- `src/main.tsx` – React bootstrap
- `src/App.tsx` – layout, sidebar, routes
- `src/core` – router, lesson types, progress state, registry
- `src/components` – reusable interactive building blocks
- `src/lessons/demo` – demo lesson (variables, conditionals, loops)

## Getting Started

Requirements: Node 18+ recommended.

```
npm install
npm run dev
```

The app opens at http://localhost:5173

## Authoring New Lessons

1. Create a new folder in `src/lessons/<your-lesson>` with an `index.ts` exporting a `Lesson`.
2. Compose `steps` using either content or interactive steps:
   - Content: return any React nodes
   - Interactive: render a component and call `ctx.complete()` when the learner succeeds
3. Register the lesson in `src/core/LessonRegistry.tsx` by adding it to `LessonList`.

Example snippet:

```
import { Lesson } from '../../core/LessonTypes';
import CounterPlayground from '../../components/CounterPlayground';

const myLesson: Lesson = {
  id: 'my-variables',
  title: 'Variables Deep Dive',
  description: 'Practice variables with interactive tasks',
  steps: [
    { id: 'intro', title: 'Intro', kind: 'content', render: () => <>Welcome!</> },
    { id: 'task1', title: 'Reach 3', kind: 'interactive', render: ({ complete }) => (
        <CounterPlayground target={3} onComplete={complete} />
      )
    }
  ],
};
export default myLesson;
```

## Notes

- The app avoids heavy dependencies and works with Vite + React + TS.
- Animations are CSS-based; you can expand with SVG or canvas as needed.
- For real deployments, consider adding ESLint/Prettier and tests.

