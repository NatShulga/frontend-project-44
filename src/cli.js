// eslint-disable-next-line no-multiple-empty-lines

import readlineSync from 'readline-sync';

export default function greetUser() {
  // eslint-disable-next-line no-console
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  // eslint-disable-next-line no-console
  console.log(`Hello, ${name}!`);
  return name;
}
