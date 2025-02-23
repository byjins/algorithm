// 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const testCases= input[0][0];
const array = input.slice(1);

for(let i = 0; i < testCases; i++){
    const [a, b] = array[i];
    console.log(a + b);
}
