import path from 'path';
import { part2 } from './part2';

const inputsDir = path.resolve(__dirname, './inputs/');

describe('#day02 - part two', () => {
	it('should resolve to 2286', async () => {
		const filePath = path.resolve(inputsDir, './example-input-1.txt');
		await expect(part2(filePath)).resolves.toBe(2286);
	});

	it('should answer the AoC question (part two)', async () => {
		const filePath = path.resolve(inputsDir, './input.txt');
		await expect(part2(filePath)).resolves.toBe(71585); // added after discovering the answer
	});
});
