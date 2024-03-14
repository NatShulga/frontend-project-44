import mainFun from '../index.js';

import { getIndex, getNumber } from '../randomsnum.js';

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
  const number1 = getNumber(0, 10);
  const number2 = getNumber(0, 10);
  const chosenOperator = operators[getIndex(operators)];
  const answer = calc(number1, chosenOperator, number2);
  const expression = `${number1} ${chosenOperator} ${number2}`;
  return [expression, String(answer)];
};

export default () => mainFun(description, generateRound); 

