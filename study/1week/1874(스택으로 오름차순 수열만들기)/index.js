const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

const arr = input.slice(1);
const stackArr = [];
let count = 1;
let answer = '';
let result = false;

for(let i = 0; i < arr.length; i++){
    const v = arr[i];
    if(v >= count){
        while(v >= count){
            stackArr.push(count++);
            answer += '+\n';
        }
        stackArr.pop();
        answer += '-\n';
    }else {
        const popNum = stackArr.pop();
        if(popNum > v) {
            result = true;
        }else{
            answer +='-\n'
        }
    }
}

console.log(result ? "NO" : answer);