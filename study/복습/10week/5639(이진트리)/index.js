const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
    .trim()


class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    // 노드 삽입 메서드
    insert(value) {
        if (value < this.value) {
            if (this.left === null) {
                this.left = new Node(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (this.right === null) {
                this.right = new Node(value);
            } else {
                this.right.insert(value);
            }
        }
    }
}

// 트리 구성
const root = new Node(input[0]);
for (let i = 1; i < input.length; i++) {
    root.insert(input[i]);
}

// 후위 순회 함수
function postOrder(node) {
    if (node === null) return;
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.value);
}

// 후위 순회 실행
postOrder(root);
