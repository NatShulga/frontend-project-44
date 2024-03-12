import readlineSync from "readline-sync";

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

  function askQuestion() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");
    const isAnswerCorrect = (isPrime(randomNumber) && answer.toLowerCase() === "yes") ||
      (!isPrime(randomNumber) && answer.toLowerCase() === "no");
    return isAnswerCorrect;
  }

  let correctAnswersCount = 0;
  while (correctAnswersCount < 3) {
    if (askQuestion()) {
      correctAnswersCount++;
      console.log("Correct!");
    } else {
      console.log("Incorrect!");
    }
  }

  console.log(`Congratulations, ${name}!`);
};

primeGame();

export default primeGame; 