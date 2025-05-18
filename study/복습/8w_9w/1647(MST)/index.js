const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

// 초기화
const parent = Array.from({ length: n + 1 }, (_, i) => i);

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
        return true;
    }
    return false;
}

edges.sort((a, b) => a[2] - b[2]);

let totalCost = 0;
let maxEdgeCost = 0;

for (const [a, b, cost] of edges) {
    if (union(a, b)) {
        totalCost += cost;
        maxEdgeCost = cost;
    }
}

console.log(totalCost - maxEdgeCost);
