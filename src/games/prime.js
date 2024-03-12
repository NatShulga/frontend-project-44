import readlineSync from "readline-sync";

//функция проверки числа на простоту
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");

  const playRound = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question("Your answer: ");
    
    const correctAnswer = isPrime(randomNumber) ? "yes" : "no";
    
    if (userAnswer.toLowerCase() === correctAnswer) {
      console.log("Correct!");
      return true;
    } else {
      console.log(`Incorrect! Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  };

  let wrongAnswersCount = 0;
while (wrongAnswersCount < 3) {
if (!playRound()) {
++wrongAnswersCount;
}
}

if (wrongAnswersCount === 3) {
console.log(`Congratulations, ${name}!`);
}
};

export default primeGame;