
import readlineSync from "readline-sync";
import playGcdGame from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

function gcdGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log(description);

  let correctAnswersCount = 0;
  let wrongAnswer = false;

  while (correctAnswersCount < 3 && !wrongAnswer) {
    const number1 = Math.floor(Math.random() * 100) + 1;
    const number2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = getGreatestCommonDivisor(number1, number2);

    console.log("What is the result of the expression?");
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      wrongAnswer = true;
    }
  }

  if (!wrongAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
}
const getGreatestCommonDivisor = (number1, number2) => {
  while (number2 !== 0) {
    [number1, number2] = [number2, number1 % number2];
  }
  return number1;
};

export default () => {
  playGcdGame(description, gcdGame);
};

