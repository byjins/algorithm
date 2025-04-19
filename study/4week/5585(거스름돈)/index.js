const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

const SET = [
    500, 100, 50, 10, 5, 1
]

let bill = 1000 - input;
let count = 0;

SET.forEach((money) => {

    const result =  Math.floor(bill / money);
    if(result !== 0){
        bill = bill % money;
        count += result;
    }
})

console.log(count)
