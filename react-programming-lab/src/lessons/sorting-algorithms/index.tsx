import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import SortingVisualizer from '../../components/SortingVisualizer';

const sortingLesson: Lesson = {
  id: 'sorting-algorithms',
  title: 'Sorting Algorithms: Bubble Sort',
  description: 'See how a simple comparison-based sort works by stepping through swaps.',
  steps: [
    { id: 'intro', title: 'Comparisons and swaps', kind: 'content', render: () => (
      <ConceptCard title="Bubble sort intuition">
        Repeatedly compare adjacent elements and swap if out of order. Each pass moves a larger element toward the end.
      </ConceptCard>
    ) },
    { id: 'visualize', title: 'Step through the algorithm', kind: 'interactive', render: ({ complete }) => (
      <SortingVisualizer data={[5,3,8,1,4]} onComplete={complete} />
    ) },
  ],
};

export default sortingLesson;

