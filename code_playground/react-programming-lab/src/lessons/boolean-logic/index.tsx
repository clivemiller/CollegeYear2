import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import TruthTable from '../../components/TruthTable';

const booleanLesson: Lesson = {
  id: 'boolean-logic',
  title: 'Boolean Logic & Truth Tables',
  description: 'Understand AND/OR/NOT/XOR and how conditions combine.',
  steps: [
    { id: 'intro', title: 'Logic building blocks', kind: 'content', render: () => (
      <ConceptCard title="AND, OR, NOT, XOR">
        Complex conditions are built from a few core operators. Get comfortable predicting their outputs.
      </ConceptCard>
    ) },
    { id: 'and', title: 'AND exercise', kind: 'interactive', render: ({ complete }) => (
      <TruthTable goal="A && B" targetRow={{ A: true, B: true }} onComplete={complete} />
    ) },
    { id: 'xor', title: 'XOR exercise', kind: 'interactive', render: ({ complete }) => (
      <TruthTable goal="A ^ B" targetRow={{ A: true, B: false }} onComplete={complete} />
    ) },
  ],
};

export default booleanLesson;

