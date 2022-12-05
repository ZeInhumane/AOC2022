
import { readFileSync } from "node:fs";

const poggies = readFileSync("day3.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n");