
import { readFileSync } from "node:fs";

const poggies = readFileSync("day4.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");

const part1 = () => {
    let count = 0;
    poggies.map((x) => {
        let [elf1, elf2] = x.split(",");
        let [a, b] = elf1.split("-");
        let [c, d] = elf2.split("-");

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        d = parseInt(d);

        if (a <= c && d <= b || c <= a && b <= d) {
            count++
        }
    });
    console.log(count);
}

const part2 = () => {
    let count = 0;
    poggies.map((x) => {
        let [elf1, elf2] = x.split(",");
        let [a, b] = elf1.split("-");
        let [c, d] = elf2.split("-");

        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        d = parseInt(d);

        if (b < c && d > a || d < a && b > c) {
            count++;
        }
    });
    console.log(1000 - count);
}

part1();
part2();