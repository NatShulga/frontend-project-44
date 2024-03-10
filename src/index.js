import readlineSync from "readline-sync";

const playCalcGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  const operators = ["+", "-", "*"];

  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const calculateExpression = (num1, num2, operator) => {
    const operations = {
      '+': num1 + num2,
      '-': num1 - num2,
      '*': num1 * num2
    };
    return operations[operator];
  };

  for (let i = 0; i < 3; i++) {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = operators[Math.floor(Math.random() * operators.length)];
    const correctAnswer = calculateExpression(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;
