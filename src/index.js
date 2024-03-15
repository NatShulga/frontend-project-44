<<<<<<< HEAD
import readlineSync from 'readline-sync';

const mainFun = (description, exercise) => {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${userName}!`);
  // eslint-disable-next-line no-console
  console.log(description);

  const rounds = 3;

  if (typeof exercise !== 'function') {
    // eslint-disable-next-line no-console
    console.log('Error: Exercise is not a function');
    return;
  }

  for (let i = 0; i < rounds; i += 1) {
    const questionResult = exercise();
    // eslint-disable-next-line no-console
    console.log('Question:', questionResult[0]);
    const answerUser = readlineSync.question('Your answer: ');

    const rightAnswer = questionResult[1];

    if (answerUser !== rightAnswer) {
      // eslint-disable-next-line no-console
      console.log(`"${answerUser}" is wrong answer ;(. Correct answer was "${rightAnswer}". \nLet's try again, ${userName}!`);
      return;
    }
    // eslint-disable-next-line no-console
    console.log('Correct!');
  }

  // eslint-disable-next-line no-console
  console.log(`Congratulations, ${userName}!`);
};

// const exerciseFunction = () => {};

export default mainFun;
=======
import readlineSync from 'readline-sync';

const mainFun = (description, exercise) => {
    console.log('Welcome to the Brain Games!');
    
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log(description);
    
    const rounds = 3;
    
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
  
// const exerciseFunction = () => {};

export default mainFun;
>>>>>>> f5f1f64046a9f5b09dddd15f3bc7c38681279ae9
