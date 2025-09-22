import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import NestedLoopGrid from '../../components/NestedLoopGrid';

const nestedLoops: Lesson = {
  id: 'nested-loops',
  title: 'Nested Loops & Traversal',
  description: 'Visualize how nested loops traverse a 2D grid and consider complexity.',
  steps: [
    { id: 'intro', title: 'Grid traversal', kind: 'content', render: () => (
      <ConceptCard title="Rows then columns">
        A nested loop visits each cell. The outer loop controls rows; the inner loop walks columns for each row.
      </ConceptCard>
    ) },
    { id: 'walk', title: 'Walk the grid', kind: 'interactive', render: ({ complete }) => (
      <NestedLoopGrid rows={3} cols={5} onComplete={complete} />
    ) },
  ],
};

export default nestedLoops;

