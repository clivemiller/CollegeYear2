import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import AnimatedBox from '../../components/AnimatedBox';
import CounterPlayground from '../../components/CounterPlayground';
import IfElseVisualizer from '../../components/IfElseVisualizer';
import ForLoopVisualizer from '../../components/ForLoopVisualizer';

const demoLesson: Lesson = {
  id: 'demo-basics',
  title: 'Programming Basics: Variables, Conditionals, Loops',
  description: 'A quick, interactive tour through core building blocks of programming.',
  estimatedMinutes: 10,
  steps: [
    {
      id: 'intro',
      title: 'What you will learn',
      kind: 'content',
      render: () => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Concepts">
            You will interact with three fundamental ideas: variables (storing values), conditionals (choosing a path), and loops (repeating steps).
          </ConceptCard>
          <div className="row" style={{ gap: 16 }}>
            <AnimatedBox pulse />
            <AnimatedBox color="#22c55e" />
            <AnimatedBox color="#f59e0b" />
          </div>
        </div>
      ),
    },
    {
      id: 'variables',
      title: 'Variables and State',
      kind: 'interactive',
      render: ({ complete }) => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Variables">
            Variables store data. Updating a variable changes the program state.
          </ConceptCard>
          <CounterPlayground target={5} onComplete={complete} />
        </div>
      ),
    },
    {
      id: 'conditionals',
      title: 'Conditionals (if / else)',
      kind: 'interactive',
      render: ({ complete }) => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Conditionals">
            Programs make decisions. If a condition is true, run one branch; otherwise, run another.
          </ConceptCard>
          <IfElseVisualizer onComplete={complete} />
        </div>
      ),
    },
    {
      id: 'loops',
      title: 'Loops',
      kind: 'interactive',
      render: ({ complete }) => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Loops">
            Loops repeat a block of code. Watch the iterations light up.
          </ConceptCard>
          <ForLoopVisualizer n={6} speedMs={350} onComplete={complete} />
        </div>
      ),
    },
    {
      id: 'wrap-up',
      title: 'Wrap up',
      kind: 'content',
      render: () => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="You learned">
            Variables track changing values, conditionals choose between paths, and loops repeat work efficiently.
          </ConceptCard>
          <div className="card">
            <div className="title">Next steps</div>
            <ul>
              <li>Try changing loop length or speed in the code.</li>
              <li>Build your own step using the reusable components.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ],
};

export default demoLesson;

