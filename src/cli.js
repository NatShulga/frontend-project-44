import readlineSync from "readline-sync";

export default function greetUser() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  if (name === "Tirion") {
    console.log("Hello, Tirion!");
  } else {
    console.log("Hello!");
  }
}
