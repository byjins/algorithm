const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")


const [N, M] = input[0].split(' ').map(Number);

// 인접 리스트 생성 (객체 기반)
const graph = {};

// 노드 초기화
for (let i = 1; i <= N; i++) {
    graph[i] = [];
}

// 간선 정보 반영
for (let i = 1; i <= M; i++) {
    const [u, v] = input[i].split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
}

// 3. 방문 배열 초기화
const visited = Array(N + 1).fill(false);

// 4. DFS 함수 정의
function dfs(graph, v, visited){
    visited[v] = true;

    for(let node of graph[v]){
        // 노드를 방문하지 않았다면
        if(!visited[node]){
            dfs(graph, node, visited);
        }
    }
}

let answer = 0;
for(let i=1; i<=N; i++){
    if(!visited[i]){
        dfs(graph, i, visited);
        answer++;
    }
}

console.log(answer);