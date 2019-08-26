//Check if two binary trees are identical or not | Iterative & Recursive

class Node {
    constructor(value, leftNode, rightNode) {
        this.value = value;
        this.leftNode = leftNode;
        this.rightNode = rightNode;
    }

    setLeftNode(leftNode) {
        this.leftNode = leftNode;
    }

    setRightNode(rightNode) {
        this.rightNode = rightNode;
    }

    hasKids() {
        return this.hasRightNode() || this.hasLeftNode();
    }

    hasRightNode() {
        return !!this.rightNode;
    }

    hasOnlyRightNode() {
        return this.hasRightNode() && !this.hasLeftNode();
    }

    hasOnlyLeftNode() {
        return !this.hasRightNode() && this.hasLeftNode();
    }

    hasLeftNode() {
        return !!this.leftNode;
    }

    hasBothNodes() {
        return !!this.leftNode && !!this.rightNode;
    }
}

TreeDepth1 = new Node("1");// depth 1
TreeDepth2 = new Node("1", new Node("1.1"), new Node("1.2"));// depth 1
TreeDepth3 = new Node("1", new Node("1.1", new Node("1.1.1"), new Node("1.1.2")), new Node("1.2", null, new Node("1.2.1"))); //depth 3
TreeDepth4 = new Node("1", 
    new Node("1.1", 
        new Node("1.1.1"), 
        new Node("1.1.2", 
            new Node("1.1.2.1")
        )
    ), 
    new Node("1.2", 
        null, 
        new Node("1.2.1")
    )
); // depth 4
TreeDepth5 = new Node("1", new Node("1.1", new Node("1.1.1"), new Node("1.1.2", new Node("1.1.2.1"))), new Node("1.2", null, new Node("1.2.1", new Node("1.2.1.1", new Node("1.2.1.1.1"), new Node("1.2.1.1.2"))))); // depth 5

getDepth = (node, acc) => {
    if (acc === undefined) acc = 0;
    ++acc;

    if (!node.hasKids()) {
        return acc;
    } else if (node.hasLeftNode() && node.hasRightNode()) {
        let accLeft = getDepth(node.leftNode, acc);
        let accRight = getDepth(node.rightNode, acc);
        return Math.max(accLeft, accRight);
    } else if (node.hasOnlyLeftNode()) {
        return  getDepth(node.leftNode, acc);
    } else if (node.hasOnlyRightNode()) {
        return  getDepth(node.rightNode, acc);
    }
}


console.log(getDepth(TreeDepth1)); //true
console.log(getDepth(TreeDepth2)); //false
console.log(getDepth(TreeDepth3)); //false
console.log(getDepth(TreeDepth4)); //false
console.log(getDepth(TreeDepth5)); //false