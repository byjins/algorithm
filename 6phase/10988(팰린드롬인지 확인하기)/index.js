const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("")

const ANSWER = [...input];
const REVERSE = input.reverse();

console.log(ANSWER.every((str, i) => str === REVERSE[i]) ? 1 : 0);


// 나은 정답?
const ANSWER = [...input].join("");
const REVERSE = input.reverse().join("");

console.log(ANSWER === REVERSE);