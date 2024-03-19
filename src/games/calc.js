import mainFun from '../index.js';

import { generateRandomIndex, generateRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';// результат выражения

const operators = ['+', '-', '*'];

const calc = (number1, operator, number2) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return null;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 10);
  const number2 = generateRandomNumber(0, 10);
  const chosenOperator = operators[generateRandomIndex(operators)];
  const answer = calc(number1, chosenOperator, number2);
  const expression = `${number1} ${chosenOperator} ${number2}`;
  return [expression, String(answer)];
};

export default () => mainFun(description, generateRound);
