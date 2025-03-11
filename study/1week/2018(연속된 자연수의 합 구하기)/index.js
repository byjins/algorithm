const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()


let count = 1;
let start_index = 1;
let end_index = 1;
let sum = 1;

while(end_index !== input){
    if(sum === input){
        count++;
        end_index++;
        sum += end_index;
    }else if(sum > input){
        sum = sum - start_index;
        start_index++;
    }else{
        end_index++;
        sum += end_index;
    }
}

console.log(count);