const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const inDegree = Array(N + 1).fill(0);
const adj = Array.from({ length: N + 1 }, () => []);
const semester = Array(N + 1).fill(1);

// 간선 정보 세팅
for (let i = 1; i <= M; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    adj[a].push(b);    // a를 듣고 b를 들을 수 있음
    inDegree[b]++;     // b의 선수과목 수 증가
}

// 큐 초기화: 선수과목이 없는 과목부터 시작
const queue = [];
for (let i = 1; i <= N; i++) {
    if (inDegree[i] === 0) queue.push(i);
}

// 위상정렬
while (queue.length > 0) {
    const cur = queue.shift();

    for (const next of adj[cur]) {
        inDegree[next]--;
        // 선수과목 중 가장 늦게 들은 학기 + 1로 갱신
        semester[next] = Math.max(semester[next], semester[cur] + 1);

        if (inDegree[next] === 0) {
            queue.push(next);
        }
    }
}

// 결과 출력
console.log(semester.slice(1).join(' '));
