let input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().split('\n');
const testCase = input.shift();
let M, N, K, graph;

const dfs = (x, y) => {
    // 현재 위치를 방문 처리
    graph[x][y] = 0;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, 1, -1];

    // 인접한 위치 탐색
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        // 범위 내이고 배추가 있으면 재귀 호출
        if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny]) {
            dfs(nx, ny);
        }
    }
};

// 필요한 지렁이 마리 수 체크하는 함수
const howManyWorms = () => {
    let answer = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (graph[i][j]) {
                answer++;
                dfs(i, j);
            }
        }
    }
    console.log(answer);
};

for (let i = 0; i < testCase; i++) {
    // [가로길이, 세로길이, 배추가 심어져 있는 위치의 개수]
    [M, N, K] = input.shift().split(' ').map(Number);

    // 밭 크기와 동일한 그래프(초기값 0으로 채워진 2차원 배열) 생성
    graph = Array.from(Array(N), () => Array(M).fill(0));

    // 배추 위치 입력값받아 배추있는 자리에 1로 표시
    for (let j = 0; j < K; j++) {
        const [x, y] = input[j].split(' ').map(Number);
        graph[y][x] = 1;
    }

    // 필요한 지렁이 마리 수 출력하는 함수 호출
    howManyWorms();

    // 첫 번째 예제 출력값 호출 후, 다음 케이스로 넘어가기
    input = input.slice(K);
}
