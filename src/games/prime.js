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

//функция самой игры
const primeGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("Answer \"yes\" if given number is prime. Otherwise answer \"no\".");

  function askQuestion() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    const isCorrect = (isPrime(randomNumber) && answer.toLowerCase() === "yes") ||
                     (!isPrime(randomNumber) && answer.toLowerCase() === "no");
    
    if (isCorrect) {
      console.log("Correct!");
      return true;
    } else {
      console.log("Incorrect!");
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  let roundCount = 3;
  while (roundCount > 0) {
    if (!askQuestion()) {
      roundCount = 3;
    } else {
      roundCount--;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

primeGame();

export default primeGame; 