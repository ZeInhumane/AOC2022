
import { readFileSync } from "node:fs";
import { LinkedList, Node } from "./LinkedList.mjs";

const rockPaperScissors = readFileSync("day2.txt", { encoding: "utf-8" })
    .replace(/\r/g, "")
    .trim()
    .split("\n\n");

// 1 for rock, 2 for paper, 3 for scissors
const mapValues = {
    "X": "A",
    "Y": "B",
    "Z": "C",
}

const numericalValue = {
    "A": 1,
    "B": 2,
    "C": 3,
}

const part11 = (params) => {
    let points = 0;
    params = params.split(" ");
    let player1 = params[0];
    let player2 = mapValues[params[1]];

    let myList = new LinkedList();
    const a = new Node('A')
    const b = new Node('B')
    const c = new Node('C')
    myList.head = a
    a.next = b
    b.next = c
    c.next = a;

    myList.getAt(numericalValue[player1] - 1).next == myList.getAt(numericalValue[player2] - 1) ? points += 6 : points += 0;
    if (player1 === player2) {
        points += 3;
    }

    points += numericalValue[player2];
    return points;
}

const part22 = (params) => {
    params = params.split(" ");
    let player1 = params[0];
    let player2 = params[1];

    const left = numericalValue[player1];

	if (player2 === 'X') {
		// Lose
		let right = left - 1 || 3;
		return right;
	} else if (player2 === 'Y') {
		// Draw
		return left + 3;
	} else {
		// Win
		let right = (left + 1) % 3 || 3;
		return right + 6;
	}
}

const part1 = rockPaperScissors.map((x) => x.split("\n").reduce((acc, cur) => acc + part11(cur), 0));

const part2 = rockPaperScissors.map((x) => x.split("\n").reduce((acc, cur) => acc + part22(cur), 0));


console.log(part1)
console.log(part2)
