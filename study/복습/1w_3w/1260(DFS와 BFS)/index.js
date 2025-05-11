const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const [N, M, V] = input.shift();
const edges = input;


// 그래프 객체 생성
const createGraph = (edges) => {
    const graph = {};

    // 노드 번호 1부터 N까지 모두 초기화 (입력에 없는 노드도 포함)
    for (let i = 1; i <= N; i++) {
        graph[i] = [];
    }

    // 양방향 노드
    edges.forEach(([from, to]) => {
        graph[from].push(to);
        graph[to].push(from);
    });

    // 마지막에 모든 인접 리스트 정렬하기
    Object.keys(graph).forEach(node => {
        graph[node].sort((a, b) => a - b);
    });

    return graph;
};

const graph = createGraph(edges);
let dfsResult = [];
let bfsResult = [];

const dfs = (here, visited = new Set()) => {
    if(visited.has(here)) return
    visited.add(here);
    dfsResult.push(here);
    graph[here].forEach(e => dfs(e, visited))
}

const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while(queue.length > 0) {
        const here = queue.shift();
        bfsResult.push(here)
        for(const next of graph[here]) {
            if(!visited.has(next)) {
                visited.add(next);
                queue.push(next);
            }
        }
    }
}

dfs(V);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
