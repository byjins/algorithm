const input = +require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()

const repeatNum = 2 * input - 1;

for(let i = 1; i <= repeatNum; i+=2){
    console.log(" ".repeat(input - i / 2) +'*'.repeat(i));
    if(i === repeatNum){
        for(let j = repeatNum - 2; j >= 1; j-=2){
            console.log(" ".repeat(input - j / 2) +'*'.repeat(j));
        }
    }
}