const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const max = input[0][0];
let endIndex = input[0][1];
const arr = input[1];
let maxSum;
let currentSum = 0;

// 윈도우
for(let i =0; i < endIndex; i++){
    currentSum += arr[i];
}

maxSum = currentSum;

for (let i = endIndex; i < max; i++) {
    // 윈도우를 한 칸 오른쪽으로 이동시킴 (끝값 추가, 시작값 제거)
    currentSum += arr[i] - arr[i - endIndex];

    // 최대 합을 갱신
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
}

console.log(maxSum);
