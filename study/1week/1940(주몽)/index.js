const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const end = input[0][0]
const targetNum = input[1][0];
const arr = input[2].sort((a,b) => a-b);
let startIndex = 0;
let endIndex = end - 1;
let count = 0;


while(startIndex < endIndex){
    const sum = arr[startIndex] + arr[endIndex];

    if(sum < targetNum){
        startIndex++
    }else if(sum > targetNum){
        endIndex--;
    }else{
        count++;
        startIndex++;
        endIndex--;
    }
}

console.log(count);