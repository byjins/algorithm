const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const graph = Array.from({ length: N + 1 }, () => Array(N + 1).fill(Infinity));

// 자기 자신으로 가는 경로는 0
for (let i = 1; i <= N; i++) {
    graph[i][i] = 0;
}

// 초기화
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a][b] = 1;
    graph[b][a] = 1;
}

for (let k = 1; k <= N; k++) {
    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= N; j++) {
            if (graph[i][j] > graph[i][k] + graph[k][j]) {
                graph[i][j] = graph[i][k] + graph[k][j];
            }
        }
    }
}

// 각 사람의 케빈 베이컨 수 계산
let minSum = Infinity;
let answer = -1;

for (let i = 1; i <= N; i++) {
    const sum = graph[i].slice(1).reduce((a, b) => a + b, 0);
    if (sum < minSum) {
        minSum = sum;
        answer = i;
    }
}

console.log(answer);
