import { Lesson } from '../../core/LessonTypes';
import ConceptCard from '../../components/ConceptCard';
import AnimatedBox from '../../components/AnimatedBox';
import FunctionPlayground from '../../components/FunctionPlayground';

const functionsLesson: Lesson = {
  id: 'functions-parameters',
  title: 'Functions & Parameters',
  description: 'Understand function calls, parameters, and return values through interactive tasks.',
  estimatedMinutes: 10,
  steps: [
    {
      id: 'intro',
      title: 'What are functions?',
      kind: 'content',
      render: () => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Functions">
            Functions are reusable blocks of code. You give them inputs (parameters), and they may give you back an output (return value).
          </ConceptCard>
          <div className="row" style={{ gap: 16 }}>
            <AnimatedBox pulse />
            <AnimatedBox color="#22c55e" />
          </div>
        </div>
      ),
    },
    {
      id: 'call-return',
      title: 'Calls and Returns',
      kind: 'interactive',
      render: ({ complete }) => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Call and Return">
            A function runs when you call it. It can return a value for you to use.
          </ConceptCard>
          <FunctionPlayground target={7} op="add" onComplete={complete} />
        </div>
      ),
    },
    {
      id: 'parameters',
      title: 'Parameters Change Behavior',
      kind: 'interactive',
      render: ({ complete }) => (
        <div className="col" style={{ gap: 12 }}>
          <ConceptCard title="Parameters">
            Parameters let you change what a function does without changing the function body.
          </ConceptCard>
          <FunctionPlayground target={12} op="multiply" onComplete={complete} />
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
            How to call functions, how parameters affect results, and how return values are produced.
          </ConceptCard>
          <div className="card">
            <div className="title">Practice ideas</div>
            <ul>
              <li>Try building a function that computes the area of a rectangle.</li>
              <li>Swap operations and targets to explore more outputs.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ],
};

export default functionsLesson;

