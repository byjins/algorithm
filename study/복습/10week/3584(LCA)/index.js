const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let T = parseInt(input[0]);
let line = 1;

for (let t = 0; t < T; t++) {
    const N = parseInt(input[line++]);

    const adj = Array.from({ length: N + 1 }, () => []);
    const parent = Array(N + 1).fill(0);
    const depth = Array(N + 1).fill(0);
    const hasParent = Array(N + 1).fill(false);

    // 트리 구성
    for (let i = 0; i < N - 1; i++) {
        const [u, v] = input[line++].split(' ').map(Number);
        adj[u].push(v);
        hasParent[v] = true;
    }

    // 루트 찾기
    let root = 0;
    for (let i = 1; i <= N; i++) {
        if (!hasParent[i]) {
            root = i;
            break;
        }
    }

    // DFS로 depth와 parent 기록
    function dfs(node, d) {
        depth[node] = d;
        for (const child of adj[node]) {
            parent[child] = node;
            dfs(child, d + 1);
        }
    }

    dfs(root, 0);

    // LCA 찾기
    let [a, b] = input[line++].split(' ').map(Number);

    // depth 같게 맞추기
    while (depth[a] > depth[b]) {
        a = parent[a];
    }
    while (depth[b] > depth[a]) {
        b = parent[b];
    }

    // 공통 조상 만날 때까지 올리기
    while (a !== b) {
        a = parent[a];
        b = parent[b];
    }

    console.log(a);
}
