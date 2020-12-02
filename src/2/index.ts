import { splitFileIntoLines } from "../helpers";

export async function taskTwoPartOne() {
  const lines = await splitFileIntoLines(__dirname + "/input.txt");

  let validPasswords = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // @ts-ignore
    const [rule, password] = line.split(": ");
    // @ts-ignore
    const [repeat, char] = rule.split(" ");
    // @ts-ignore
    const [min, max] = repeat.split("-");

    let charCount = 0;
    // @ts-ignore
    for (const charInPassword of password) {
      if (charInPassword === char) {
        charCount++;
      }
    }
    if (charCount >= Number(min) && charCount <= Number(max)) {
      validPasswords++;
    }
  }

  return validPasswords;
}

export async function taskTwoPartTwo() {
  const lines = await splitFileIntoLines(__dirname + "/input.txt");

  let validPasswords = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // @ts-ignore
    const [rule, password] = line.split(": ");
    // @ts-ignore
    const [repeat, char] = rule.split(" ");
    // @ts-ignore
    const [min, max] = repeat.split("-");

    let correctPassword = true;

    // @ts-ignore
    if (password[+min - 1] === char && password[+max - 1] === char) {
      correctPassword = false;
    } else {
      // @ts-ignore
      if (password[+min - 1] !== char && password[+max - 1] !== char) {
        correctPassword = false;
      }
    }
    if (correctPassword) {
      validPasswords++;
    }
  }

  return validPasswords;
}
