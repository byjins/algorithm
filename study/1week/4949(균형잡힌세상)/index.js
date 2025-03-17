const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n");

// 마지막 온점 제거
input.pop();

const answer = [];

for (const str of input) {
    const stack = [];
    if(str.trim().length === 1 && str.trim() === '.') {
        answer.push('yes');
        continue;
    }

    for(let i = 0; i < str.length; i++) {
        if(checkStr(str[i])){
            if(stack.length >= 1 && checkPair(stack[stack.length - 1], str[i])){
                stack.pop();
            }else{
                stack.push(str[i]);
            }
        }
    }


    if(!stack.length){
        answer.push('yes');
    }else{
        answer.push('no');
    }
}

function checkStr(str){
    return ['[',']','(',')'].includes(str);
}

function checkPair(stackStr, str){
    switch (stackStr){
        case '[':
            return str === ']';
        case '(':
            return str === ')'
        default:
            return false;
    }
}

console.log(answer.join("\n"));
