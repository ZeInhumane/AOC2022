
import { readFileSync } from "node:fs";

const poggies = readFileSync("day4.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

const part1 = () => {
    poggies.map((x) => {
        let [elf1, elf2] = x.split(",");
        
        console.log(elf1)

        // console.log(x);
    });
}

part1();