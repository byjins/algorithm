const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

input.shift();
const answer = []

input.forEach(([count, str]) => {
    const NumCount = Number(count);
    let resultString = '';
    for(let i = 0; i < str.length; i++){
        resultString += str.charAt(i).repeat(NumCount);
    }
    answer.push(resultString);
})

console.log(answer.join("\n"));