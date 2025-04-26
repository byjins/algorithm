const [a,b] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(Number);

// 유클리드 호제법
function gcd(x, y) {
    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
}

// 최소공배수
function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

console.log(gcd(a, b));
console.log(lcm(a, b));
