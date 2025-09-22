import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import BinarySearchVisualizer from '../../components/BinarySearchVisualizer';

const binaryLesson: Lesson = {
  id: 'binary-search',
  title: 'Binary Search',
  description: 'Divide and conquer a sorted array by halving the search range each step.',
  steps: [
    { id: 'intro', title: 'Half the search space', kind: 'content', render: () => (
      <ConceptCard title="Why binary search is fast">
        Each comparison halves the remaining space. This leads to logarithmic time complexity.
      </ConceptCard>
    ) },
    { id: 'visualize', title: 'Find the target', kind: 'interactive', render: ({ complete }) => (
      <BinarySearchVisualizer array={[1,3,5,7,9,11,13]} target={11} onComplete={complete} />
    ) },
  ],
};

export default binaryLesson;

