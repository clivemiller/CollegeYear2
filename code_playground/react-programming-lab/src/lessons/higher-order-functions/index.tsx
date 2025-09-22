import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import ArrayTransformPlayground from '../../components/ArrayTransformPlayground';

const hofLesson: Lesson = {
  id: 'higher-order-functions',
  title: 'Higher-Order Functions',
  description: 'Functions that take or return other functions enable flexible pipelines.',
  steps: [
    { id: 'intro', title: 'Compose behavior', kind: 'content', render: () => (
      <ConceptCard title="Functions as values">
        Pass functions to map/filter/reduce to tailor behavior. Compose small functions to build powerful pipelines.
      </ConceptCard>
    ) },
    { id: 'compose', title: 'Compose a pipeline', kind: 'interactive', render: ({ complete }) => (
      <ArrayTransformPlayground initial={[1,2,3,4,5]} targetSum={24} onComplete={complete} />
    ) },
  ],
};

export default hofLesson;

