const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 입력 처리
const N = parseInt(input[0]);
const coords = input.slice(1).map((line) => {
    const [x, y] = line.split(" ").map(Number);
    return [x, y];
});

// 퀵정렬 함수 정의
const quickSort = (arr) => {
    if (arr.length <= 1) return arr;

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const equal = [];

    for (const point of arr) {
        if (point[0] < pivot[0] || (point[0] === pivot[0] && point[1] < pivot[1])) {
            left.push(point);
        } else if (point[0] > pivot[0] || (point[0] === pivot[0] && point[1] > pivot[1])) {
            right.push(point);
        } else {
            equal.push(point);
        }
    }

    return [...quickSort(left), ...equal, ...quickSort(right)];
};

// 정렬 실행
const sortedCoords = quickSort(coords);

// 결과 출력
console.log(sortedCoords.map((coord) => coord.join(" ")).join("\n"));
