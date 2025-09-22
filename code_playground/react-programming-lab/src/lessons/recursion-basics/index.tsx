import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import RecursionVisualizer from '../../components/RecursionVisualizer';

const recursionLesson: Lesson = {
  id: 'recursion-basics',
  title: 'Recursion Basics',
  description: 'Build intuition about base cases, recursive cases, and the call stack.',
  steps: [
    { id: 'intro', title: 'Base and recursive cases', kind: 'content', render: () => (
      <ConceptCard title="Two parts of recursion">
        A base case stops the recursion. The recursive case reduces the problem. Visualize the call stack depth and the unwind phase.
      </ConceptCard>
    ) },
    { id: 'visualize', title: 'Factorial stack', kind: 'interactive', render: ({ complete }) => (
      <RecursionVisualizer n={5} onComplete={complete} />
    ) },
  ],
};

export default recursionLesson;

