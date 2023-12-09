import fs from 'fs';
import readline from 'readline';

function mapNumbers(numbersStr: string): number[] {
	return Array.from(numbersStr.matchAll(/\d+/g)).map(([number]) => Number(number));
}

export async function part1(filePath: string): Promise<number> {
	const rl = readline.createInterface({
		input: fs.createReadStream(filePath),
		crlfDelay: Number.POSITIVE_INFINITY,
	});

	const lines: string[] = [];
	for await (const line of rl) {
		lines.push(line);
	}

	let sum = 0;

	lines.forEach(line => {
		const [winners, myNumbers] = line.slice(8).split(' | ').map(mapNumbers);
		const myWinners = myNumbers.filter(num => winners.includes(num));
		if (myWinners.length > 0) {
			sum += 2 ** (myWinners.length - 1);
		}
	});

	return sum;
}
