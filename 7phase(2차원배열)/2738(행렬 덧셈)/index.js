const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [n, m] = input[0];
input.shift();

const a = input.slice(0, n);
const b = input.slice(n);

const answer = [];

for(let i = 0; i < n; i++){
    const temp = [];
    for(let j = 0; j < m; j++){
        const ab = a[i][j] + b[i][j];
        temp.push(ab);
    }
    answer.push(temp);
}

console.log(answer.join("\n").replaceAll(",", " "));
