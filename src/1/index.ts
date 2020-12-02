import { splitFileIntoLines } from "../helpers";

export async function taskOnePartOne() {
  const numbers = await splitFileIntoLines(__dirname + "/input.txt");

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) {
        continue;
      } else {
        const firstNumber = Number(numbers[i]);
        const secondNumber = Number(numbers[j]);

        const sum = firstNumber + secondNumber;
        if (sum === 2020) {
          return firstNumber * secondNumber;
        }
      }
    }
  }
  return 0;
}

export async function taskOnePartTwo() {
  const numbers = await splitFileIntoLines(__dirname + "/input.txt");

  for (let i = 0; i < numbers.length; i++) {
    const firstNumber = Number(numbers[i]);

    for (let j = 0; j < numbers.length; j++) {
      const secondNumber = Number(numbers[j]);

      for (let k = 0; k < numbers.length; k++) {
        const thirdNumber = Number(numbers[k]);
        if (j === i || j === k || i === k) {
          continue;
        } else {
          const sum = firstNumber + secondNumber + thirdNumber;

          if (sum === 2020) {
            return firstNumber * secondNumber * thirdNumber;
          }
        }
      }
    }
  }
  return 0;
}
