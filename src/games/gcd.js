import mainFun from '../index.js';

import { getNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';// наибольший делитель для чисел

const getGcd = (a, b) => {
if (a < b) return getGcd(b, a);
if (b === 0) return a;
return getGcd(b, a % b);
};

const getQuestionAndAnswer = () => {
const number1 = getNumber(1, 20);
const number2 = getNumber(1, 20);

const question = `${number1} ${number2}`;
const result = getGcd(number1, number2).toString();

return [question, result];
};

export default () => {
  mainFun(description, getQuestionAndAnswer);
};
