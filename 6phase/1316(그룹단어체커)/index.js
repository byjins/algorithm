const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

let answer = Number(input[0]);
input.shift();


input.forEach((str) => {

    for(let i =0; i <= str.length; i++){
        if(str[i] !== str[i+1] && !!str.slice(i+1).includes(str[i])){
            answer--;
            break;
        }
    }
})

console.log(answer);