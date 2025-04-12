const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const N = input.shift()[0];
const NODE = input.shift();
const targetNode = input.shift()[0];

// 객체 형식의 인접 리스트
const graph = {};
let root = -1;

// 그래프 초기화
for (let j = 0; j < N; j++) {
    graph[j] = [];
}

// 부모-자식 관계 설정 및 루트 노드 찾기
NODE.forEach((node, i) => {
    if (node === -1) {
        root = i; // 루트 노드 저장
    } else {
        graph[node].push(i); // 부모 노드에 자식 노드 추가
    }
});

// 노드와 그 서브트리를 삭제하는 함수
const removeSubtree = (node) => {
    // 노드가 존재하지 않으면 종료
    if (!graph[node]) return;

    // 자식 노드들도 재귀적으로 삭제
    const children = [...graph[node]];
    for (const child of children) {
        removeSubtree(child);
    }

    // 해당 노드 삭제
    delete graph[node];

    // 다른 노드들의 자식 목록에서도 해당 노드 제거
    for (const key in graph) {
        if (graph[key]) {
            graph[key] = graph[key].filter(child => child !== node);
        }
    }
};

// 리프 노드 세기
const countLeafNodes = () => {
    let leafCount = 0;

    const dfs = (node) => {
        // 노드가 삭제되었거나 존재하지 않으면 종료
        if (!graph[node]) return;

        // 자식이 없으면 리프 노드
        if (graph[node].length === 0) {
            leafCount++;
            return;
        }

        // 자식 노드 순회
        for (const child of graph[node]) {
            dfs(child);
        }
    };

    // 루트에서 시작하여 DFS 수행
    dfs(root);

    return leafCount;
};

// 결과 계산
if (targetNode === root) {
    // 루트 노드 삭제 시 트리 전체가 삭제됨
    console.log(0);
} else {
    // 타겟 노드와 그 서브트리 삭제
    removeSubtree(targetNode);

    // 남은 트리에서 리프 노드 개수 세기
    const result = countLeafNodes();
    console.log(result);
}
