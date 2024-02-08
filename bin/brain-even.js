#!/usr/bin/env node

import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question("May I have your name? ");
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctCount = 0;

while (correctCount < 3) {
  const randomNumber = Math.floor(Math.random() * 20) + 1;
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question("Your answer: ");

  const isEven = randomNumber % 2 === 0;
  const correctAnswer = isEven ? "yes" : "no";

  if (userAnswer === correctAnswer) {
    console.log("Correct!");
    correctCount++;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
    );
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctCount === 3) {
  console.log(`Congratulations, ${name}!`);
}

export default readlineSync;
