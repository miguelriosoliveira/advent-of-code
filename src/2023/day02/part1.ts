import fs from 'fs';
import readline from 'readline';

const MAX_CUBES = {
	red: 12,
	green: 13,
	blue: 14,
} as const;

export async function part1(filePath: string): Promise<number> {
	const rl = readline.createInterface({
		input: fs.createReadStream(filePath),
		crlfDelay: Number.POSITIVE_INFINITY,
	});

	let idsSum = 0;

	for await (const line of rl) {
		const [game, cubes] = line.split(': ');
		const gameId = Number(game.split(' ').at(-1));
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

		const isPossible = Object.entries(MAX_CUBES).every(
			([color, count]) => cubesReveal[color] <= count,
		);

		idsSum += isPossible ? gameId : 0;
	}

	return idsSum;
}
