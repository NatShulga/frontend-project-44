<<<<<<< HEAD
import readlineSync from 'readline-sync';

export default function greetUser() {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  return name;
}
=======
import readlineSync from "readline-sync";

export default function greetUser() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
}
>>>>>>> f5f1f64046a9f5b09dddd15f3bc7c38681279ae9
