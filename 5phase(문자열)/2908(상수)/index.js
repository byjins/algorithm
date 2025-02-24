const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")

const reverseArr = input.map(v => Number(v.split("").reverse().join("")));

console.log(Math.max(...reverseArr));
