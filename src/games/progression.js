import mainFun from '../index.js';

import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?'; // арифметическая прогрессия

const getProgression = (startNumber, length, step) => {
  let currentNumber = startNumber;
  const result = [startNumber];
  for (let i = 0; i < length; i += 1) {
    currentNumber += step;
    result.push(currentNumber);
  }
  return result;
};

const generateRound = () => {
  const start = generateRandomNumber(0, 100);
  const length = generateRandomNumber(5, 10);
  const step = generateRandomNumber(1, 10);
  const progression = getProgression(start, length, step);
  const indexMissingNumber = generateRandomIndex(progression);
  const correctAnswer = progression[indexMissingNumber].toString();
  progression[indexMissingNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => {
  mainFun(description, generateRound);
};
