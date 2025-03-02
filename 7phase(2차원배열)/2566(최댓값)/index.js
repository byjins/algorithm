const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const max = Math.max(...input.flat());
let answer = '';

for(let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if(input[i][j] === max){
            answer += `${max}\n${i + 1} ${j+ 1}`
            break;
        }
    }
    if(answer){
        break;
    }
}

console.log(answer);
