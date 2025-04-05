const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()
    .split("\n")
    .map((el) => el.split(" ").map(Number));

const mapArea = input.shift()[0];

const directions = [
    [0, 1],
    [1, 0],
];

function jumpking(map) {
    const queue = [];
    const visited = Array.from({ length: mapArea }, () => Array(mapArea).fill(false));

    queue.push([0, 0]);
    visited[0][0] = true;

    while (queue.length > 0) {
        const [y, x] = queue.shift();
        const jump = map[y][x];

        if (jump === -1) {
            console.log("HaruHaru");
            return;
        }

        for (const [dy, dx] of directions) {
            const ny = y + dy * jump;
            const nx = x + dx * jump;

            if (ny >= 0 && ny < mapArea && nx >= 0 && nx < mapArea && !visited[ny][nx]) {
                queue.push([ny, nx]);
                visited[ny][nx] = true;
            }
        }
    }

    console.log("Hing");
}

jumpking(input);