const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

const GRADE_SET = {
    'A+':4.5,
    'A0':4.0,
    'B+':3.5,
    'B0':3.0,
    'C+':2.5,
    'C0':2.0,
    'D+':1.5,
    'D0':1.0,
    'F': 0

}
const filteredArr = input.filter(([, , grade]) => !(grade === 'P'));

const rating = filteredArr.map(([,rate,]) => Number(rate)).reduce((a,b) => a + b, 0);
const sum = filteredArr.map(([, score,grade]) => GRADE_SET[grade] * Number(score)).reduce((a,b) => a + b, 0);

console.log(sum / rating);