import mainFun from '../index.js'

import { getNumber } from '../randomsnum.js'

const description = 'Find the greatest common divisor of given numbers.';


// eslint-disable-next-line no-unused-vars
function getNod (number1, number2) {
  return (number2 === 0 ? number1 : getNod(number2, number1 % number2));
}

function playRound() {
  const number1 = getNumber(1, 100);
  const number2 = getNumber(1, 100);
  const answer = getNumber(number1, number2);
  const expression = `${number1} ${number2}`;
  return [expression, String(answer)];
}

export default () => {
  mainFun(playRound, description);
};