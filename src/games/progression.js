import mainFun from "../index.js;";

import { getNumber, getIndex } from "../randomsnum.js";

const description = "What number is missing in the progression?"; //арифметическая прогрессия

const getProgression = (startNumber, length, step) => {
  let currentNumber = startNumber;
  const result = [startNumber];
  for (let i = 0; i < length; i += 1) {
    currentNumber += step;
    result.push(currentNumber);
  }
  return result;
};

const generateRound = () => {
  const progressionLength = getNumber(5, 9);
  const progressionStep = getNumber(2, 10);
  const firstNumber = getNumber(1, 100);
  const progression = getProgression(
    firstNumber,
    progressionLength,
    progressionStep
  );
  const randomElement = getIndex(0, progression.length - 1);
  const answer = progression[randomElement];
  progression[randomElement] = "..";
  const expression = progression.join(" ");
  return [expression, String(answer)];
};

export default () => {
  mainFun(description, generateRound);
};
