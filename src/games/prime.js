import mainFun from '../index.js';

import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'; // проверка на четность

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getRandomPrime = () => {
  let num = 0;
  while (!isPrime(num)) {
    num = generateRandomNumber(0, 10000);
  }
  return num;
};
const primeGame = () => {
  const variant = [generateRandomNumber(0, 100), getRandomPrime()];
  const neededNum = variant[generateRandomIndex(variant)];
  const question = neededNum;
  const correctAnswer = isPrime(neededNum) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  mainFun(description, primeGame);
};
