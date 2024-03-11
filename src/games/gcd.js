
//import playCalcGame from "./index.js"; - импорт этой функции подменяет игру
import readlineSync from "readline-sync";

//const description = "Find the greatest common divisor of given numbers.";

// Функция для генерации случайного числа в заданном диапазоне
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Функция для вычисления наибольшего общего делителя (НОД) двух чисел
const getGreatestCommonDivisor = (number1, number2) => {
  while (number2 !== 0) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
};

const gcdGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswersCount = 0;
  let wrongAnswer = false;

  while (correctAnswersCount < 3 && !wrongAnswer) {
    const number1 = generateRandomNumber(1, 100);
    const number2 = generateRandomNumber(1, 100);
    const correctAnswer = getGreatestCommonDivisor(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
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
};

export default gcdGame;
