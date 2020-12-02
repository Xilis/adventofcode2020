import { promises as fs } from "fs";

export async function readFile(filePath: string) {
  return fs.readFile(filePath, "binary");
}

export async function splitFileIntoLines(filePath: string) {
  const file = await readFile(filePath);

  const array = file.split("\n");

  // Remove empty line added by webstorm :D
  if (array[array.length - 1] === "") {
    array.pop();
  }
  return array;
}
