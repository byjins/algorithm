const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim();

const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(97 + i));


alphabet.forEach((letter, i) => {
    alphabet[i] = input.indexOf(letter)
})

console.log(alphabet.join(" "))