import fs from 'fs';
import readline from 'readline';

function isNumeric(c: string): boolean {
  return !Number.isNaN(Number(c));
}

export async function part1(filePath: string): Promise<number> {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Number.POSITIVE_INFINITY,
  });

  let calibrationSum = 0;

  for await (const line of rl) {
    const chars = line.split('');

    const firstNumber = chars.find(c => isNumeric(c)) || '0';
    const secondNumber = chars.findLast(c => isNumeric(c)) || '';

    calibrationSum += Number(firstNumber + secondNumber);
  }

  return calibrationSum;
}
