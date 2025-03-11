const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

input.shift()
const range = input[0];
const arr = input.slice(1);
const sumRange = [];
const answer = [];

// 구간합 생성
range.forEach((value, i) => {
    if(i === 0){
        sumRange.push(value)
        return;
    }

    sumRange.push(value + sumRange[i - 1])
})

arr.forEach(arr => {
    const [start, end] = arr;
    answer.push(sumRange[end-1] - (sumRange[start-2] ?? 0));
})


console.log(answer.join("\n"));