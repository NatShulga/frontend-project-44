
import playCalcGame from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

const gcdGame = () => {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const answer = getGreatestCommonDivisor(number1, number2);
    console.log(`Question: ${number1} ${number2}`);
    return { description, question, answer };
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
