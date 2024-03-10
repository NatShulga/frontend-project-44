import readlineSync from "readline-sync";
import playCalcGame from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

function gcdGame() {
  let correctAnswersCount = 0;
  let wrongAnswer = false;

  while (correctAnswersCount < 3 && !wrongAnswer) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const correctAnswer = getGreatestCommonDivisor(number1, number2);
    const question = `${number1} ${number2}`;
    const userAnswer = readlineSync.question(`${question}\nYour answer: `);

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again!`);
      wrongAnswer = true;
    }
  }

  if (!wrongAnswer) {
    console.log(`Congratulations!`);
  }
}
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
