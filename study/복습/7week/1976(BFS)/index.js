const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = parseInt(input[0]); // 도시 수
const M = parseInt(input[1]); // 여행 계획 도시 수
const adj = input.slice(2, 2 + N).map(line => line.split(' ').map(Number));
const plan = input[2 + N].split(' ').map(x => parseInt(x) - 1); // 0-indexed

const visited = Array(N).fill(false);

function dfs(v) {
    visited[v] = true;
    for (let i = 0; i < N; i++) {
        if (adj[v][i] === 1 && !visited[i]) {
            dfs(i);
        }
    }
}

dfs(plan[0]); // 여행 경로의 첫 도시에서 시작

const isConnected = plan.every(city => visited[city]);
console.log(isConnected ? 'YES' : 'NO');
