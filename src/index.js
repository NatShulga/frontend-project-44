import readlineSync from "readline-sync";

const playCalcGame = () => {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
  console.log("What is the result of the expression?");

  const operators = ["+", "-", "*"];
  const getRandomOperator = () =>
    operators[Math.floor(Math.random() * operators.length)];
  const getRandomNumber = () => Math.floor(Math.random() * 100);

  const calculateExpression = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      default:
        return null;
    }
  };

  const playRound = () => {
    const num1 = getRandomNumber();
    const num2 = getRandomNumber();
    const operator = getRandomOperator();
    const correctAnswer = calculateExpression(num1, num2, operator);

    console.log(`Question: ${num1} ${operator} ${num2}`);
    const userAnswer = readlineSync.question("Your answer: ");

    if (Number(userAnswer) !== correctAnswer) {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    console.log("Correct!");
    return true;
  };

  for (let i = 0; i < 3; i += 1) {
    if (!playRound()) {
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default playCalcGame;
