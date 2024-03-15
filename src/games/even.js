import mainFun from '../index.js';

import { getNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';// проверка на четность

// Функция для проверки чётности числа
const isEven = (num) => {
  const result = (num % 2 === 0);
  return result;
};

const getQuestionAndAnswer = () => {
  const number = getNumber(1, 20);
  const question = number;
  const result = isEven(number) ? 'yes' : 'no';
  return [question, result];
};

export default () => {
  mainFun(description, getQuestionAndAnswer);
};
