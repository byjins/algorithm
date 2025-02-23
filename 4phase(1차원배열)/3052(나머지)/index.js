const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const answer = input.map((v) => v % 42);

console.log([...new Set(answer)].length);
