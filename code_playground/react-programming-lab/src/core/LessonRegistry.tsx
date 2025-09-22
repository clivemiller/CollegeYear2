import { Lesson } from './LessonTypes';
import demoLesson from '../lessons/demo';
import functionsLesson from '../lessons/functions';
import arraysLesson from '../lessons/arrays-foundations';
import objectsLesson from '../lessons/objects-immutability';
import booleanLesson from '../lessons/boolean-logic';
import nestedLoops from '../lessons/nested-loops';
import recursionLesson from '../lessons/recursion-basics';
import sortingLesson from '../lessons/sorting-algorithms';
import binaryLesson from '../lessons/binary-search';
import eventLoopLesson from '../lessons/event-loop';
import reductionLesson from '../lessons/data-reduction';
import hofLesson from '../lessons/higher-order-functions';

export const LessonList: Lesson[] = [
  demoLesson,
  functionsLesson,
  arraysLesson,
  objectsLesson,
  booleanLesson,
  nestedLoops,
  recursionLesson,
  sortingLesson,
  binaryLesson,
  eventLoopLesson,
  reductionLesson,
  hofLesson,
];

export function getLessonById(id: string): Lesson | undefined {
  return LessonList.find(l => l.id === id);
}

export function LessonListSidebar() {
  return null; // reserved for future dynamic sidebar features
}
