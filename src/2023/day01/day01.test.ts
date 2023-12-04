import path from "path";
import { part1 } from "./part1";
import { part2 } from "./part2";

const inputsDir = path.resolve(__dirname, "./inputs/");

describe("#day01", () => {
  describe("part one", () => {
    it("should resolve to 142", async () => {
      const filePath = path.resolve(inputsDir, "./example-input-1.txt");
      await expect(part1(filePath)).resolves.toBe(142);
    });

    it("should answer the AoC question (part one)", async () => {
      const filePath = path.resolve(inputsDir, "./input.txt");
      const part1Answer = await part1(filePath);
      console.log({ answer_1: part1Answer });
      expect(part1Answer).toBe(54940); // added after discovering the answer
    });
  });

  describe("part two", () => {
    it("should resolve to 281", async () => {
      const filePath = path.resolve(inputsDir, "./example-input-2.txt");
      await expect(part2(filePath)).resolves.toBe(281);
    });

    it("should answer the AoC question (part two)", async () => {
      const filePath = path.resolve(inputsDir, "./input.txt");
      const part2Answer = await part2(filePath);
      console.log({ answer_2: part2Answer });
      expect(part2Answer).toBe(54208); // added after discovering the answer
    });
  });
});
