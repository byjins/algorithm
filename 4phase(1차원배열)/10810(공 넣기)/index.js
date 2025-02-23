const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

// N개의 바구니를 가지고 있음
// 바구니에는 공 1개만
const N = input[0][0];

input.shift();

// 공을 담을 바구니
const bucket = new Array(N).fill(0);

// 공을 넣는 방법
input.forEach((el) => {
    const [start, end, ballNum] = el;
    for(let i = start; i <= end; i++){
        bucket[i-1] = ballNum;
    }
})

console.log(bucket.join(" "));