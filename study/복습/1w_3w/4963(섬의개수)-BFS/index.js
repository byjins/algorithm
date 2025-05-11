const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));



    function countIslands(map, w, h) {
    const visited = Array.from({ length: h }, () => Array(w).fill(false));
    const dx = [-1, -1, -1, 0, 0, 1, 1, 1]; // 8방향 이동 (좌상, 상, 우상, 좌, 우, 좌하, 하, 우하)
    const dy = [-1, 0, 1, -1, 1, -1, 0, 1];
    let count = 0;

    const bfs = (x, y) => {
        const queue = [[x, y]];
        visited[y][x] = true;

        while (queue.length > 0) {
            const [curX, curY] = queue.shift();

            for (let i = 0; i < 8; i++) {
                const nx = curX + dx[i];
                const ny = curY + dy[i];

                if (nx >= 0 && nx < w && ny >= 0 && ny < h && map[ny][nx] === 1 && !visited[ny][nx]) {
                    visited[ny][nx] = true;
                    queue.push([nx, ny]);
                }
            }
        }
    };

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            if (map[y][x] === 1 && !visited[y][x]) {
                bfs(x, y);
                count++;
            }
        }
    }

    return count;
}

while (input.length > 0) {
    const [w, h] = input.shift();

    // 입력의 마지막인 0 0을 만나면 종료
    if (w === 0 && h === 0) break;

    // 지도 정보 읽기
    const map = [];
    for (let j = 0; j < h; j++) {
        map.push(input.shift());
    }

    // 섬 개수 계산 및 출력
    console.log(countIslands(map, w, h));
}
