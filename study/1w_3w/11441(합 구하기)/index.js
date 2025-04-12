const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const N = input.shift();
const M = input.shift();
input.shift();
let answer = '';

const sumRange = []

M.forEach((v, i) => {
      if(i === 0){
          sumRange.push(v)
          return
      }

      sumRange.push(sumRange[i-1] + M[i]);
})


input.forEach(([i, j]) => {
    const sum = sumRange[j-1] - (sumRange[i-2] ?? 0);

    answer += sum +'\n'
})

console.log(answer);