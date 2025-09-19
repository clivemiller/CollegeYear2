import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import EventLoopVisualizer from '../../components/EventLoopVisualizer';

const eventLoopLesson: Lesson = {
  id: 'event-loop',
  title: 'Event Loop: Microtasks vs Macrotasks',
  description: 'Understand how JavaScript schedules and runs asynchronous work.',
  steps: [
    { id: 'intro', title: 'Queues and ordering', kind: 'content', render: () => (
      <ConceptCard title="Execution order">
        The call stack runs synchronous code. Completed async operations schedule tasks: microtasks (Promise callbacks) run before macrotasks (setTimeout) on each turn of the loop.
      </ConceptCard>
    ) },
    { id: 'visualize', title: 'Schedule and step', kind: 'interactive', render: ({ complete }) => (
      <EventLoopVisualizer onComplete={complete} />
    ) },
  ],
};

export default eventLoopLesson;

