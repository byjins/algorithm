const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const BUCKET_SIZE = input[0][0];

input.shift();
const bucket = Array.from(({length:BUCKET_SIZE}), (_,i) => i+1);


input.forEach((el) => {
    const [start,end] = el;
    const sliceArr = bucket.slice(start-1, end).reverse();
    bucket.splice(start-1, sliceArr.length, ...sliceArr);
})

console.log(bucket.join(" "))