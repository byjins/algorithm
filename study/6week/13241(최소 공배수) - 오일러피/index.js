const [a, b] = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split(" ")
    .map(BigInt);

function gcd(x, y) {
    while (y !== 0n) {
        [x, y] = [y, x % y];
    }
    return x;
}

function lcm(x, y) {
    return (x * y) / gcd(x, y);
}

console.log(lcm(a, b).toString());
