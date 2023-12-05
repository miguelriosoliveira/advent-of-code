import fs from 'fs';
import readline from 'readline';

export async function part2(filePath: string): Promise<number> {
	const rl = readline.createInterface({
		input: fs.createReadStream(filePath),
		crlfDelay: Number.POSITIVE_INFINITY,
	});

	let powerSum = 0;

	for await (const line of rl) {
		const [, cubes] = line.split(': ');
		const cubesReveal = cubes
			.split('; ')
			.flatMap(revealLine => revealLine.split(', '))
			.map(revealLine => revealLine.split(' '))
			.map<[number, string]>(([count, color]) => [Number(count), color])
			.reduce<Record<string, number>>(
				(acc, [count, color]) => ({
					...acc,
					[color]: Math.max(acc[color] || count, count),
				}),
				{},
			);

		powerSum += Object.values(cubesReveal).reduce((sum, count) => sum * count, 1);
	}

	return powerSum;
}
