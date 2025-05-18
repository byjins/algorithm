const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m, k, x] = input[0].split(" ").map(Number);
const graph = Array.from({ length: n + 1 }, () => []);
const distance = Array(n + 1).fill(Infinity);

for (let i = 1; i <= m; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push([dist, node]) {
        this.heap.push([dist, node]);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return top;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    _heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent][0] <= this.heap[i][0]) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    _heapifyDown() {
        let i = 0;
        const len = this.heap.length;
        while (true) {
            const left = i * 2 + 1;
            const right = i * 2 + 2;
            let smallest = i;

            if (left < len && this.heap[left][0] < this.heap[smallest][0]) smallest = left;
            if (right < len && this.heap[right][0] < this.heap[smallest][0]) smallest = right;

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}

function dijkstra(start) {
    const pq = new MinHeap();
    distance[start] = 0;
    pq.push([0, start]);

    while (!pq.isEmpty()) {
        const [dist, now] = pq.pop();

        if (distance[now] < dist) continue;

        for (const next of graph[now]) {
            const cost = dist + 1; // 모든 간선의 비용이 1
            if (cost < distance[next]) {
                distance[next] = cost;
                pq.push([cost, next]);
            }
        }
    }
}

dijkstra(x);

const result = [];
for (let i = 1; i <= n; i++) {
    if (distance[i] === k) {
        result.push(i);
    }
}

if (result.length === 0) {
    console.log(-1);
} else {
    result.sort((a, b) => a - b);
    console.log(result.join("\n"));
}
