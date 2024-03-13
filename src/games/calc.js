import mainFun from '../index.js';

import { getIndex, getNumber } from '../randomsnum.js';


const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = () => {
  
  const operator = operators[getIndex(0, operators.length - 1)];
  const number1 = getNumber(1, 20);
  const number2 = getNumber(1, 20);

  return `${number1} ${operator} ${number2}`;
};

const generateRound = () => {
  const number1 = getNumber(10);
  const number2 = getNumber(10);

  const chosenOperator = operators[getNumber(3)];

  const answer = calc(number1, chosenOperator, number2);
  const expression = `${number1} ${chosenOperator} ${number2}`;
  return [expression, String(answer)];
};

export default () => mainFun(description, generateRound); 

