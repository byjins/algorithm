const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

// 바구나 개수
const N = input[0][0]

input.shift();
const bucket = Array.from({ length: N }, (_, i) => i + 1);


input.forEach(el => {
    const [a,b] = el;
    const tempA = bucket[b-1];
    const tempB = bucket[a-1];
    bucket[a-1] = tempA;
    bucket[b-1] = tempB;
})

console.log(bucket.join(" "));

