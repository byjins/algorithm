const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

input.shift();

const LIST = input.shift();
const x = input[0][0];

function countSubArrSumOfX(arr, x) {
    arr.sort((a, b) => a - b);

    let count = 0;
    let left = 0;
    let right =  arr.length -1;

    while(left < right){
        const sum = arr[left] + arr[right];

        if(sum === x){
            count++
            left++;
            right--;
        }else if(sum < x){
            left++;
        }else if(sum > x){
            right--;
        }
    }
    return count;
}


console.log(countSubArrSumOfX(LIST, x))