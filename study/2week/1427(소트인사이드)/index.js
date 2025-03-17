const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("")
    .map(Number)


for(let i = 0; i < input.length; i++){
    let max = i;

    for(let j = i + 1; j < input.length; j++){
        if(input[j] > input[max]){
            max = j;
        }
    }

    if(input[i] < input[max]){
        let temp = input[i];
        input[i] = input[max];
        input[max] = temp;
    }
}

console.log(input.join(""));