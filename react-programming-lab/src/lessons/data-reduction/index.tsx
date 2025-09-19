import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import ArrayTransformPlayground from '../../components/ArrayTransformPlayground';

const reductionLesson: Lesson = {
  id: 'data-reduction',
  title: 'Data Reduction: Summaries & Totals',
  description: 'Use reduce (and friends) to condense arrays into meaningful summaries.',
  steps: [
    { id: 'intro', title: 'Reduce explained', kind: 'content', render: () => (
      <ConceptCard title="Reduce in practice">
        Reduce takes an accumulator and each item and returns a single value. Sum, product, min/max are all reductions.
      </ConceptCard>
    ) },
    { id: 'sum', title: 'Targeted sum', kind: 'interactive', render: ({ complete }) => (
      <ArrayTransformPlayground initial={[4,2,7,1]} targetSum={20} onComplete={complete} />
    ) },
  ],
};

export default reductionLesson;

