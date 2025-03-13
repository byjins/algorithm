const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const end = input[0][0];
const targetNum = input[0][1];
const arr = input[1];
let startIndex = 0;
let endIndex = 0;
let currentSum = 0 ;
let count = 0;

while (endIndex < end) {
    // endIndex를 오른쪽으로 이동시키면서 currentSum에 값을 더함
    currentSum += arr[endIndex];

    // 현재 합이 목표값보다 크면 startIndex를 이동시켜 합을 줄임
    while (currentSum > targetNum && startIndex <= endIndex) {
        currentSum -= arr[startIndex];
        startIndex++;
    }

    // 목표값과 합이 같으면 경우의 수 카운트
    if (currentSum === targetNum) {
        count++;
    }

    // endIndex를 오른쪽으로 이동
    endIndex++;
}

console.log(count);
