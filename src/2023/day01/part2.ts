import fs from "fs";
import readline from "readline";

type Match = [group: string, match: keyof typeof NUMBERS];

const NUMBERS = {
  "1": 1,
  one: 1,
  "2": 2,
  two: 2,
  "3": 3,
  three: 3,
  "4": 4,
  four: 4,
  "5": 5,
  five: 5,
  "6": 6,
  six: 6,
  "7": 7,
  seven: 7,
  "8": 8,
  eight: 8,
  "9": 9,
  nine: 9,
} as const;

const NUMBER_REGEX = new RegExp(`(?=(${Object.keys(NUMBERS).join("|")}))`, "g");

export async function part2(filePath: string): Promise<number> {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  let calibrationSum = 0;

  for await (const line of rl) {
    const match = Array.from(line.matchAll(NUMBER_REGEX));

    const [, firstNumberKey] = match.at(0) as Match;
    const [, secondNumberKey] = match.at(-1) as Match;

    calibrationSum += NUMBERS[firstNumberKey] * 10 + NUMBERS[secondNumberKey];
  }

  return calibrationSum;
}
