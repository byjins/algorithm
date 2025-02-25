const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .toUpperCase()
    .split("")



const result = input.reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;

    return acc
}, {})

const maxValue = Math.max(...Object.values(result));

const maxKeys = Object.entries(result)
    .filter(([key, value]) => value === maxValue)
    .map(([key]) => key);

console.log(maxKeys.length > 1 ? '?' : maxKeys.join(""))
