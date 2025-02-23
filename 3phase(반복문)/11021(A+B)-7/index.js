//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

// output
// 각 테스트 케이스마다 "Case #x: "를 출력한 다음, A+B를 출력한다. 테스트 케이스 번호는 1부터 시작한다.

const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const TEST_CASE = input.shift();

for(let i = 0; i < TEST_CASE; i++){
    const [a, b] = input[i];
    console.log(`Case #${i + 1}: ${a + b}`);
}
