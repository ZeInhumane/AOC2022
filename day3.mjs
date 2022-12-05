import { readFileSync } from "node:fs";
import { intersection } from "./Utils.mjs";

const rucksack = readFileSync("day3.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

const a_code = 'a'.charCodeAt(0);
const A_code = 'A'.charCodeAt(0);
const part1 = () => {
    let t1 = performance.now()
    let poggies = rucksack.map((x) => {
        const partOne = x.slice(0, x.length / 2)
        const partTwo = x.slice(x.length / 2, x.length)

        let same = (partOne.match(new RegExp('[' + partTwo + ']', 'g')) || [])[0];
        if (/[a-z]/.test(same)) {
            return same.charCodeAt(0) - a_code + 1;
        } else {
            return same.charCodeAt(0) - A_code + 27;
        }
    })
    console.log(poggies.reduce((acc, cur) => acc + cur, 0));
    let t2 = performance.now()
    console.log(t2 - t1)
}

const part2 = () => {
    let sum = 0;
    for (let i = 0; i < rucksack.length; i += 3) {
        const backpacks = [[...rucksack[i]], [...rucksack[i + 1]], [...rucksack[i + 2]]];

        let set = new Set(backpacks[0]);
        let intersection = backpacks[1].filter((x) => set.has(x));

        set = new Set(intersection);
        intersection = backpacks[2].filter((x) => set.has(x));

        const same = [...new Set(intersection)];
        if(/[a-z]/.test(same[0])) {
            sum += same[0].charCodeAt(0) - a_code + 1;

        } else {
            sum += same[0].charCodeAt(0) - A_code + 27;
        }
    }
    console.log(sum);
}

part1();
part2();