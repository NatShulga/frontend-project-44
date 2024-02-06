import readlineSync from "readline-sync";

export default function greetUser() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  if (name === "John") {
    console.log("Hello, John!");
  } else {
    console.log("Hello!");
  }
}
