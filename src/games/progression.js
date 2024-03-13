import playCalcGame from '../games/index.js;'

import { getNumber, getIndex } from '../randomsnum.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';


const getProgression = (start, length, step) => {
  const progression = [];
  for (let i = start; progression.length < length; i += step) {
    progression.push(i);
  }
  return progression;
};
const playRound = () => {
  const start = getNumber(0, 100);
  const length = getNumber(5, 10);
  const step = getNumber(1, 10);
  const progression = getProgression(start, length, step);
  const indexMissingNumber = getIndex(progression);
  const correctAnswer = progression[indexMissingNumber].toString();
  progression[indexMissingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  playCalcGame(playRound, description);
};