const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]); // 도시 수
const M = parseInt(input[1]); // 여행 계획에 포함된 도시 수
const adj = input.slice(2, 2 + N).map(line => line.split(' ').map(Number));
const plan = input[2 + N].split(' ').map(x => parseInt(x) - 1); // 0-indexed

const parent = Array.from({ length: N }, (_, i) => i);

function find(x) {
    if (parent[x] !== x) {
        parent[x] = find(parent[x]); // 경로 압축
    }
    return parent[x];
}

function union(a, b) {
    const rootA = find(a);
    const rootB = find(b);
    if (rootA !== rootB) {
        parent[rootB] = rootA;
    }
}

// 연결 정보 바탕으로 union 수행
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (adj[i][j] === 1) {
            union(i, j);
        }
    }
}

// 여행 경로의 모든 도시가 같은 루트를 가지는지 확인
const root = find(plan[0]);
const isConnected = plan.every(city => find(city) === root);

console.log(isConnected ? 'YES' : 'NO');
