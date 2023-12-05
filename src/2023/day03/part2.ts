import fs from 'fs';
import readline from 'readline';

export async function part2(filePath: string): Promise<number> {
	const rl = readline.createInterface({
		input: fs.createReadStream(filePath),
		crlfDelay: Number.POSITIVE_INFINITY,
	});

	const lines: string[] = [];
	for await (const line of rl) {
		lines.push(line);
	}

	const allPartNumbers: number[] = [];

	lines.forEach((line, i) => {
		const prev = lines[i - 1] || '';
		const next = lines[i + 1] || '';

		const partNumbers = Array.from(line.matchAll(/\d+/g))
			.map(({ 0: number, index }) => {
				const start = Math.max(index! - 1, 0);
				const end = index! + number.length + 1;
				return {
					number,
					searchStr: prev.slice(start, end) + line.slice(start, end) + next.slice(start, end),
				};
			})
			.filter(({ searchStr }) => searchStr.search(/[^\w\d.]/) >= 0)
			.map(({ number }) => Number(number));

		allPartNumbers.push(...partNumbers);
	});

	return allPartNumbers.reduce((sum, number) => sum + number, 0);
}
