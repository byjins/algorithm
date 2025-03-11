const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()


const line = (2 ** input) + 1;

console.log(line ** 2);
