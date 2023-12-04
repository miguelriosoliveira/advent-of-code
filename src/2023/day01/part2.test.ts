import path from 'path';
import { part2 } from './part2';

const inputsDir = path.resolve(__dirname, './inputs/');

describe('#day01 - part two', () => {
	it('should resolve to 281', async () => {
		const filePath = path.resolve(inputsDir, './example-input-2.txt');
		await expect(part2(filePath)).resolves.toBe(281);
	});

	it('should answer the AoC question (part two)', async () => {
		const filePath = path.resolve(inputsDir, './input.txt');
		await expect(part2(filePath)).resolves.toBe(54208); // added after discovering the answer
	});
});
