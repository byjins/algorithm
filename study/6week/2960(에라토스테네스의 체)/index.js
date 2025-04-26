const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);


function findKthErasedNumber(N, K) {
    // N까지의 숫자 배열 생성
    const numbers = Array.from({ length: N + 1 }, (_, i) => i);
    let count = 0;

    for (let i = 2; i <= N; i++) {
        if (numbers[i] === 0) continue; // 이미 지워진 수는 건너뜀

        for (let j = i; j <= N; j += i) {
            if (numbers[j] !== 0) {
                count++;
                if (count === K) {
                    return numbers[j];
                }
                numbers[j] = 0; // 수를 지움
            }
        }
    }
}

console.log(findKthErasedNumber(input[0], input[1]))
