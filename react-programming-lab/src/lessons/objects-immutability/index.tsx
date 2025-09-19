import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import ObjectBuilder from '../../components/ObjectBuilder';

const objectsLesson: Lesson = {
  id: 'objects-immutability',
  title: 'Objects & Immutability',
  description: 'Build and update objects safely, understand mutation vs. copying.',
  steps: [
    {
      id: 'intro',
      title: 'Objects represent entities',
      kind: 'content',
      render: () => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Objects">
            Objects collect related key/value pairs. Adding or removing keys changes the shape of your data. Copying objects avoids side effects from mutation.
          </ConceptCard>
          <div className="code">{`const user = { name: 'Ada', role: 'admin' };\nconst copy = { ...user, role: 'viewer' }; // immutably updated`}</div>
        </div>
      ),
    },
    {
      id: 'build',
      title: 'Build the required object',
      kind: 'interactive',
      render: ({ complete }) => <ObjectBuilder targetKeys={["name","age","role"]} onComplete={complete} />,
    },
    {
      id: 'immutability',
      title: 'Why immutability?',
      kind: 'content',
      render: () => (
        <ConceptCard title="Immutability helps predictability">
          When state is copied instead of mutated, React can detect changes more reliably and time-travel debugging becomes possible.
        </ConceptCard>
      ),
    },
  ],
};

export default objectsLesson;

