const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));


const computer = input.shift()[0];
const network = input.shift()[0];

// 감염 컴퓨터 개수
let count = 0;

// 인접 리스트 생성 (객체 기반)
const graph = {};

// 노드 초기화
for (let i = 1; i <= computer; i++) {
    graph[i] = [];
}

// 간선 정보 반영
for (const connection of input) {
    const [computerA, computerB] = connection;

    // 양방향 연결 (A <-> B)
    graph[computerA].push(computerB);
    graph[computerB].push(computerA);
}

// 3. 방문 배열 초기화
const visited = Array(network + 1).fill(false);


// 4. DFS 함수 정의
function dfs(graph, v, visited){
    visited[v] = true;
    count++;

    for(let node of graph[v]){
        // 노드를 방문하지 않았다면
        if(!visited[node]){
            dfs(graph, node, visited);
        }
    }
}

dfs(graph, 1, visited);

console.log(count - 1);
