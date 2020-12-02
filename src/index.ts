import { taskOnePartOne, taskOnePartTwo } from "./1";
import { taskTwoPartOne, taskTwoPartTwo } from "./2";

const tasks = [2];

async function main() {
  if (tasks.includes(1)) {
    console.log(`----- TASK 1 -----`);
    const resultOne = await taskOnePartOne();
    console.log(`Result 1: ${resultOne}`);
    const resultTwo = await taskOnePartTwo();
    console.log(`Result 2: ${resultTwo}`);
  }

  if (tasks.includes(2)) {
    console.log(`----- TASK 2 -----`);
    const resultOne = await taskTwoPartOne();
    console.log(`Result 1: ${resultOne}`);
    const resultTwo = await taskTwoPartTwo();
    console.log(`Result 2: ${resultTwo}`);
  }
}

void main();
