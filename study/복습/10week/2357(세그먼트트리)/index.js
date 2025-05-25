const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const arr = input.slice(1, N + 1).map(Number);
const queries = input.slice(N + 1).map(line => line.split(' ').map(Number));

const size = 1 << Math.ceil(Math.log2(N));
const minTree = Array(size * 2).fill(Infinity);
const maxTree = Array(size * 2).fill(-Infinity);

// 세그먼트 트리 초기화
for (let i = 0; i < N; i++) {
    minTree[size + i] = arr[i];
    maxTree[size + i] = arr[i];
}
for (let i = size - 1; i > 0; i--) {
    minTree[i] = Math.min(minTree[i * 2], minTree[i * 2 + 1]);
    maxTree[i] = Math.max(maxTree[i * 2], maxTree[i * 2 + 1]);
}

// 구간 쿼리 함수
function query(tree, left, right, func, defaultValue) {
    left += size - 1;
    right += size - 1;
    let result = defaultValue;
    while (left <= right) {
        if (left % 2 === 1) result = func(result, tree[left++]);
        if (right % 2 === 0) result = func(result, tree[right--]);
        left = Math.floor(left / 2);
        right = Math.floor(right / 2);
    }
    return result;
}

// 쿼리 처리 및 출력
const output = queries.map(([a, b]) => {
    const minVal = query(minTree, a, b, Math.min, Infinity);
    const maxVal = query(maxTree, a, b, Math.max, -Infinity);
    return `${minVal} ${maxVal}`;
});

console.log(output.join('\n'));
