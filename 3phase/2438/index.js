// 별찍기

// *
// **
// ***
// ****
// *****

const fs = require('fs');
const input = +fs.readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString();


for(let i = 1; i<= input; i++){
    console.log('*'.repeat(i));
}
