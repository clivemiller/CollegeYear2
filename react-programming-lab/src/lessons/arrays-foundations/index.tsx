import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import ArrayTransformPlayground from '../../components/ArrayTransformPlayground';

const arraysLesson: Lesson = {
  id: 'arrays-foundations',
  title: 'Arrays: Map, Filter, Reduce',
  description: 'Practice transforming arrays and aggregating values with map/filter/reduce.',
  steps: [
    {
      id: 'intro',
      title: 'Transforming data',
      kind: 'content',
      render: () => (
        <ConceptCard title="Array transformations">
          Map changes each item, filter keeps only some items, and reduce combines items into a single value. Together these are a powerful toolkit for data processing.
        </ConceptCard>
      ),
    },
    {
      id: 'map',
      title: 'Map: adjust values',
      kind: 'interactive',
      render: ({ complete }) => (
        <ArrayTransformPlayground initial={[2, 4, 6]} targetSum={15} onComplete={complete} />
      ),
    },
    {
      id: 'filter',
      title: 'Filter: keep larger items',
      kind: 'interactive',
      render: ({ complete }) => (
        <ArrayTransformPlayground initial={[1, 5, 3, 8]} targetSum={16} onComplete={complete} />
      ),
    },
    {
      id: 'combine',
      title: 'Combine map + filter',
      kind: 'interactive',
      render: ({ complete }) => (
        <ArrayTransformPlayground initial={[3, 1, 7, 2]} targetSum={18} onComplete={complete} />
      ),
    },
  ],
};

export default arraysLesson;

