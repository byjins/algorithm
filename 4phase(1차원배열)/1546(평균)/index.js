const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const testCount = input[0];
const array = input[1];

const maxScore = Math.max(...array);


const newScore = array.map(score => score / maxScore * 100).reduce((a,b) => a + b) / testCount;

console.log(newScore)