const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

input.shift();

input.forEach((str, index) => {
    input[index] = str[0] + str[str.length -1];
})

console.log(input.join("\n"));

