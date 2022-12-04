import { readFileSync } from "node:fs";

const elves = readFileSync("day1.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

const part1 = () => {
    const sumArray = elves.map((x) => x.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));
    console.log(Math.max(...sumArray));
}

const part2 = () => {
    const sumArray = elves.map((x) => x.split("\n").reduce((acc, cur) => acc + parseInt(cur), 0));
    sumArray.sort((a, b) => b - a);
    console.log(sumArray.slice(0, 3).reduce((acc, cur) => acc + cur, 0));
}

part1()
part2()
