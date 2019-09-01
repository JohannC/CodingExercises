function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
}


function isBinarySearchTree(node) {
    if (node.left === undefined && node.right === undefined)
        return true;
    else if (node.left !== undefined) {
        let isLeftBinarySearchTree = node.left.data <= node.data && isBinarySearchTree(node.left);
        if (node.right !== undefined) {
            let isRightBinarySearchTree = node.right.data > node.data && isBinarySearchTree(node.right);
            return isLeftBinarySearchTree && isRightBinarySearchTree;
        } else {
            return isLeftBinarySearchTree;
        }
    }
    else return false;
}

Tree1Valid = new Node(1);
Tree1UnValid = new Node(1, undefined, new Node(60));

Tree2Valid = new Node(50, new Node(10), new Node(60));
Tree2UnValid = new Node(50, new Node(60), new Node(10));// depth 1

Tree3Valid = new Node(50, new Node(40, new Node(30), new Node(45)), new Node(60, new Node(55))); //depth 3
Tree3Unvalid = new Node(50, new Node(60, new Node(30), new Node(45)), new Node(60, new Node(5))); //depth 3

console.log(isBinarySearchTree(Tree1Valid));
console.log(isBinarySearchTree(Tree1UnValid));

console.log(isBinarySearchTree(Tree2Valid));
console.log(isBinarySearchTree(Tree2UnValid));

console.log(isBinarySearchTree(Tree3Valid));
console.log(isBinarySearchTree(Tree3Unvalid));