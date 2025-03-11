const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" "));

const dnaSet = input[2].map(Number);
const strLength = Number(input[0][0]);
const checkStrLength = Number(input[0][1]);
const str = input[1][0].split("");

let checkDna = [0, 0, 0, 0];
let answer = 0;

// 첫 번째 윈도우 초기 설정
for (let i = 0; i < checkStrLength; i++) {
    addDna(str[i]);
}

// 첫 번째 윈도우가 유효한지 체크
if (isValid()) answer++;

// 슬라이딩 윈도우 적용
for (let i = checkStrLength; i < strLength; i++) {
    addDna(str[i]);          // 새로 들어온 문자 추가
    removeDna(str[i - checkStrLength]); // 윈도우에서 빠진 문자 제거
    if (isValid()) answer++; // 조건 만족 여부 확인
}

console.log(answer);

// DNA 문자 카운트 함수
function addDna(char) {
    switch (char) {
        case "A": checkDna[0]++; break;
        case "C": checkDna[1]++; break;
        case "G": checkDna[2]++; break;
        case "T": checkDna[3]++; break;
    }
}

function removeDna(char) {
    switch (char) {
        case "A": checkDna[0]--; break;
        case "C": checkDna[1]--; break;
        case "G": checkDna[2]--; break;
        case "T": checkDna[3]--; break;
    }
}

// 조건을 만족하는지 검사
function isValid() {
    return dnaSet.every((v, i) => checkDna[i] >= v);
}
