const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");


console.log(input[1].split("").map(Number).reduce((a,b) => a+b));