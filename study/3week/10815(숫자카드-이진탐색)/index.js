const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString().trim().split('\n');

const cards = input[1].split(' ').map(Number).sort((a, b) => a - b); // 정렬
const targets = input[3].split(' ').map(Number); // 찾을 곳

// 이진 탐색 함수
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return 1;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }

    return 0;
}

// M개의 숫자에 대해 각각 이진 탐색 수행
const result = targets.map(target => binarySearch(cards, target));
console.log(result.join(' '));
