import playCalcGame from '../games/index.js';

import { getNumber, getIndex } from '../randomsnum.js';


const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = (number1, number2, operator) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return null;
  }
};

const generateRound = () => {
  const number1 = getNumber(1, 10);
  const number2 = getNumber(number1, 10);
  const chosenOperator = operators[getIndex(0, operators.length - 1)];
  const answer = calc(number2, number1, chosenOperator);
  const expression = `${number2} ${chosenOperator} ${number1}`;
  return [expression, String(answer)];
};

export default () => playCalcGame(description, generateRound);

