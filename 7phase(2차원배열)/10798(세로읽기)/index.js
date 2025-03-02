const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

const maxLengthArr = input.map(str => str.length);
const maxLength = Math.max(...maxLengthArr)

let answer = '';

for(let i = 0; i < maxLength; i++) {
    for(let j = 0; j < 5; j++) {
        if(input[j][i]){
            answer += input[j][i];
        }
    }
}

console.log(answer)
