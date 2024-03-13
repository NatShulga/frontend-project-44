import mainFun from "../index.js";

import readlineSync from "readline-sync";

import { getNumber } from "../randomsnum.js";

const description =
  'Answer "yes" if given number is prime. Otherwise answer "no".'; //простое ли число

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  function askQuestion() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    if (
      (isPrime(getNumber) && answer.toLowerCase() === "yes") ||
      (!isPrime(getNumber) && answer.toLowerCase() === "no")
    ) {
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
    askQuestion();
  }

  askQuestion();
};

export default () => {
  mainFun(description, primeGame);
};
