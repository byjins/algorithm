const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()


function findSteps(N) {
    if (N === 1) return 1;

    let layer = 1;
    let maxHouse = 1;

    while (maxHouse < N) {
        maxHouse += 6 * layer;
        layer++;
    }

    return layer;
}

console.log(findSteps(input));
