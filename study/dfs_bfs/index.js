// 그래프 객체 생성
const createGraph = (edges) => {
    const graph = {};

    // 모든 노드에 대해 빈 배열 초기화
    edges.forEach(([from, to]) => {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
    });

    // 간선 정보 추가
    edges.forEach(([from, to]) => {
        graph[from].push(to);
    });

    return graph;
};

const dfs = (here, visited = new Set()) => {
    if(visited.has(here)) return
    visited.add(here);
    graph[here].forEach(e => dfs(e, visited))
}

const bfs = (start) => {
    const visited = new Set();
    const queue = [start];
    visited.add(start);

    while(queue.length > 0) {
        const here = queue.shift();

        for(const next of graph[here]) {
            if(!visited.has(next)) {
                visited.add(next);
                queue.push(next);
            }
        }
    }
}