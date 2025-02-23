// 본격적으로 for문 문제를 풀기 전에 주의해야 할 점이 있다. 입출력 방식이 느리면 여러 줄을 입력받거나 출력할 때 시간초과가 날 수 있다는 점이다.
// 빠른 A+B를 만들자

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCases = input.shift();

let answer = "";
for (let i = 0; i < testCases; i++) {
    const [num1, num2] = input[i].split(" ").map((item) => +item);
    answer += num1 + num2 + "\n";
}

console.log(answer);
