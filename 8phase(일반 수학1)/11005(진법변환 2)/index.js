const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")

const CHANGE_AMOUNT  = [0.25,0.1,0.05,0.01]

input.shift();

const data = input.map(price => price / 100)


const resultArr = data.map(item => {
    let local = item;
    const answer = [];

    CHANGE_AMOUNT.forEach(unit => {
        const integerPart = Math.floor(local / unit);
        local = Math.round((local % unit) * 100) / 100;
        answer.push(integerPart);
    })

    return answer;
})

console.log(resultArr.join("\n").replaceAll(",", " "))

