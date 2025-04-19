const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const SET = [
    300, 60, 10
]

let num = input;
const answer = [];

if (input % 10 !== 0) {
    console.log(-1);
    return;
}


SET.forEach((time) => {
    answer.push(Math.floor(num / time));
    num = num % time;
})

console.log(answer.join(" "))
