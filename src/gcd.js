
import playCalcGame from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

function gcdGame() {
  let correctAnswersCount = 0;
  let wrongAnswer = false;

  while (correctAnswersCount < 3 && !wrongAnswer) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const answer = getGreatestCommonDivisor(number1, number2);
    const expression = `${number1} ${number2}`;
    return [expression, String(answer)];
  };
};
const getGreatestCommonDivisor = (number1, number2) => {
  while (number2 !== 0) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
};

export default () => {
  playCalcGame(description, gcdGame);
};
