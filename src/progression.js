import readlineSync from "readline-sync";

import playCalcGame from './index.js';

const generateProgression = (start, diff, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    const num = start + diff * i;
    progression.push(num);
  }
  return progression;
};

const hideElement = (progression, index) => {
  const hiddenProgression = [...progression];
  hiddenProgression[index] = "..";
  return hiddenProgression;
};

const playBrainProgression = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What number is missing in the progression?");

  let correctAnswers = 0;
  const maxAttempts = 3;
  const minStart = 1;
  const maxStart = 100;
  const minDiff = 2;
  const maxDiff = 10;
  const minLength = 5;
  const maxLength = 10;

  while (correctAnswers < maxAttempts) {
    const start =
      Math.floor(Math.random() * (maxStart - minStart + 1)) + minStart;
    const diff = Math.floor(Math.random() * (maxDiff - minDiff + 1)) + minDiff;
    const length =
      Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    const hiddenIndex = Math.floor(Math.random() * length);
    const progression = generateProgression(start, diff, length);
    const hiddenProgression = hideElement(progression, hiddenIndex);
    const question = hiddenProgression.join(" ");
    const correctAnswer = String(progression[hiddenIndex]);

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (userAnswer === correctAnswer) {
      console.log("Correct!");
      correctAnswers += 1;
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default () => { playCalcGame(description, playBrainProgression) };