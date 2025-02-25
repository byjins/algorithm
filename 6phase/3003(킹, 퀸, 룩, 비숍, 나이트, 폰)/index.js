const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

const CHESS = [1,1,2,2,2,8];

console.log(input.map((value, i) =>  CHESS[i] - value ).join(" "));
