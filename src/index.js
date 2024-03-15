import readlineSync from 'readline-sync';

const rounds = 3;

const mainFun = (description, exercise) => {
  console.log('Welcome to the Brain Games!');

const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  if (typeof exercise !== 'function') {
    console.log('Error: Exercise is not a function');
    return;
  }

  for (let i = 0; i < rounds; i += 1) {
    const questionResult = exercise();
    console.log('Question:', questionResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    const rightAnswer = questionResult[1];

    if (answerUser !== rightAnswer) {
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default mainFun;
