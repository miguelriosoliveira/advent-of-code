import path from 'path';
import { part1 } from './part1';

const inputsDir = path.resolve(__dirname, './inputs/');

describe('#day01 - part one', () => {
	it('should resolve to 142', async () => {
		const filePath = path.resolve(inputsDir, './example-input-1.txt');
		await expect(part1(filePath)).resolves.toBe(142);
	});

	it('should answer the AoC question (part one)', async () => {
		const filePath = path.resolve(inputsDir, './input.txt');
		await expect(part1(filePath)).resolves.toBe(54940); // added after discovering the answer
	});
});
