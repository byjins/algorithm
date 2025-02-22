// 영수증에 적힌,
// 구매한 각 물건의 가격과 개수
// 구매한 물건들의 총 금액
// 을 보고, 구매한 물건의 가격과 개수로 계산한 총 금액이 영수증에 적힌 총 금액과 일치하는지 검사해보자.

// 첫 번째 줄엔 물건 총합
// 두 번째 줄엔 물건의 종류 수
// 이후 각 물건의 가격 a와 갯수 b를 줌


const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const total = input[0][0];
const count = input[1][0];
const list = input.slice(2);
let sum = 0;

list.forEach((el) => {
    sum += el[0] * el[1];
})

if(total === sum && count === list.length) console.log("Yes");
else console.log("No");
