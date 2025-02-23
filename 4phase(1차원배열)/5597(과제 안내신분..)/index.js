const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const NUM_SET = Array.from(({length: 30}), (_, i) => i + 1);

const answer = [];

NUM_SET.forEach(v => {
    if(!input.includes(v)) {
        answer.push(v);
    }
})

console.log(`${Math.min(...answer)}
${Math.max(...answer)}`)