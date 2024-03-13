import playCalcGame from '../games/index.js;'

//import readlineSync from 'readline-sync';

import { getNumber } from '../randomsnum.js';


const description = 'Answer "yes" if the number is even, otherwise answer "no".';

// Функция для проверки чётности числа
const isEven = (num) => num % 2 === 0;

// Функция для генерации случайного числа от 1 до 100
//const getNumber = () => Math.floor(Math.random() * 100) + 1;
//console.log("Welcome to the Brain Games!");
//const name = readlineSync.question("May I have your name? ");
//console.log(`Hello, ${name}!`);
//console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

// Функция для задания вопроса и обработки ответа 
const playRound = () => {
  const number = getNumber(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

export default () => {
  playCalcGame(playRound, description);
};



//export default () => {
  //playCalcGame(description, playRound());
//};

