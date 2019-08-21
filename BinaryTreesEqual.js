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

Tree = new Node("1", new Node("1.1", new Node("1.1.1"), new Node("1.1.2")), new Node("1.2", null, new Node("1.2.1")));
TreeEqual = new Node("1", new Node("1.1", new Node("1.1.1"), new Node("1.1.2")), new Node("1.2", null, new Node("1.2.1")));
TreeDifferentStructure = new Node("1", new Node("1.1", new Node("1.1.1")), new Node("1.2", null, new Node("1.2.1")));
TreeDifferentValue = new Node("1", new Node("1.1", new Node("1.1.a"), new Node("1.1.b")), new Node("1.2", null, new Node("1.2.a")));
TreeDifferentStructureAndValue = new Node("1", new Node("1.1", new Node("1.1.a")), new Node("1.2", null, new Node("1.2.a")));

areTreesEqual = (node1, node2) => {
    if (node1.value !== node2.value)
        return false;
    else if (node1.value === node2.value && !node1.hasKids() && !node2.hasKids())
        return true;
    else if (node1.hasBothNodes() && node2.hasBothNodes())
        return areTreesEqual(node1.leftNode, node2.leftNode) && areTreesEqual(node1.rightNode, node2.rightNode);
    else if (node1.hasOnlyLeftNode() && node2.hasOnlyLeftNode())
        return areTreesEqual(node1.leftNode, node2.leftNode);
    else if (node1.hasOnlyRightNode() && node2.hasOnlyRightNode())
        return areTreesEqual(node1.rightNode, node2.rightNode);
    else
        return false; 
}


console.log(areTreesEqual(Tree, TreeEqual)); //true
console.log(areTreesEqual(Tree, TreeDifferentStructure)); //false
console.log(areTreesEqual(Tree, TreeDifferentValue)); //false
console.log(areTreesEqual(Tree, TreeDifferentStructureAndValue)); //false
