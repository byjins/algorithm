const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const edges = [];

// 간선 정보 저장
for (let i = 1; i <= m; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    edges.push({ from: a, to: b, cost: c });
}

const INF = Infinity;
const dist = Array(n + 1).fill(INF);
dist[1] = 0; // 시작 정점은 1번

for (let i = 1; i < n; i++) {
    for (const { from, to, cost } of edges) {
        if (dist[from] !== INF && dist[to] > dist[from] + cost) {
            dist[to] = dist[from] + cost;
        }
    }
}

// 음수 사이클
for (const { from, to, cost } of edges) {
    if (dist[from] !== INF && dist[to] > dist[from] + cost) {
        console.log(-1);
        return;
    }
}


let result = '';
for (let i = 2; i <= n; i++) {
    result += (dist[i] === INF ? -1 : dist[i]) + '\n';
}
console.log(result.trim());
