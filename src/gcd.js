import readlineSync from "readline-sync";

import playCalcGame from "./index.js";

const description = "Find the greatest common divisor of given numbers.";

function gcdGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  console.log(description);

  let correctAnswersCount = 0;
  let wrongAnswer = false;

  while (correctAnswersCount < 3 && !wrongAnswer) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const correctAnswer = getGreatestCommonDivisor(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) === correctAnswer) {
      console.log("Correct!");
      correctAnswersCount++;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      wrongAnswer = true;
    }
  }

  if (!wrongAnswer) {
    console.log(`Congratulations, ${name}!`);
  }
}

const getRandomNumber = () => {
  return Math.floor(Math.random() * 100) + 1;
};

const getGreatestCommonDivisor = (number1, number2) => {
  while (number2 !== 0) {
    const remainder = number1 % number2;
    number1 = number2;
    number2 = remainder;
  }
  return number1;
};

export default () => {
  playCalcGame(description, gcdGame);
};
