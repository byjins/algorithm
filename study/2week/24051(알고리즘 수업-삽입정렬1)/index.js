const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [arrLength, target] = input[0];
const arr = input[1];

let saveCount = 0;
let result = -1; // K번째 저장된 수를 저장할 변수 (기본값 -1)

for (let i = 1; i < arrLength; i++) {
    let newItem = arr[i];
    let loc = i - 1;

    // 정렬된 부분과 비교하며 뒤로 밀기
    while (loc >= 0 && newItem < arr[loc]) {
        arr[loc + 1] = arr[loc];
        saveCount++;

        if (saveCount === target) {
            result = arr[loc + 1]; // K번째 저장된 수 저장
            break;
        }

        loc--;
    }

    // 새로운 위치에 삽입 (마지막 위치일 때도 처리)
    if (loc + 1 !== i) {
        arr[loc + 1] = newItem;
        saveCount++;

        if (saveCount === target) {
            result = arr[loc + 1];
            break;
        }
    }
}

// 결과 출력
console.log(result);
