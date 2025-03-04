const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")


console.log(parseInt(input[0], Number(input[1])));
