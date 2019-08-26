/* User input
[[1,1,1,3,2],
 [1,2,3,2,1]
 [1,1,3,1,2]
 [4,2,1,2,4]]
 Compute the biggest group of neighboring numbers that are equal
 => 6
*/

let matrix = [[1, 1, 1, 3, 2], [1, 2, 3, 2, 1], [1, 1, 3, 1, 2], [4, 2, 1, 2, 4]];
console.log(computeBiggestGroupSize(matrix));

function computeBiggestGroupSize(matrix) {
    let visitedMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        visitedMatrix[i] = [];
        for (let j = 0; j < matrix[i].length; j++) {
            visitedMatrix[i][j] = false;
        }
    }
    //time O(n) space O(n)
    let biggetGroupSize = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (!visitedMatrix[i][j]) {
                let groupeSize = countGroup(i, j, matrix, visitedMatrix);
                biggetGroupSize = (biggetGroupSize > groupeSize) ? biggetGroupSize : groupeSize;
            }
        }
    }
    //time O(n)
    return biggetGroupSize;
}

function LinkedListElement(value, nextElement, prevElement) {
    this.value = value;
    this.nextElement = nextElement;
    this.prevElement = prevElement;
}

function LinkedList() {
    this.head = undefined
    this.tail = undefined;

    this.addFirst = (value) => {
        if (this.head === undefined) {
            this.head = new LinkedListElement(value);
            this.tail = this.head;
        } else {
            let newElement = new LinkedListElement(value, this.head);
            this.head.prevElement = newElement;
            this.head = newElement;
        }
    }

    this.removeLast = () => {
        let element = this.tail;
        if (this.tail === this.head) {
            this.tail = undefined;
            this.head = undefined;
        } else {
            this.tail = element.prevElement;
        }
        return element;
    }

    this.isEmpty = () => {
        return this.tail === undefined;
    }
}

function countGroup(i, j, matrix, visitedMatrix) {
    let groupeSize = 0;
    let queue = new LinkedList();
    queue.addFirst([i,j])
    while (!queue.isEmpty()) {
        const el = queue.removeLast();
        const i = el.value[0];
        const j = el.value[1];
        if (!visitedMatrix[i][j]){
            visitedMatrix[i][j] = true;
            groupeSize++;
            getEqualsUnvisitedNeigbors(i, j, matrix, visitedMatrix).map(x => queue.addFirst(x))
        }
    }
    return groupeSize;
}

function getEqualsUnvisitedNeigbors(i, j, matrix, visitedMatrix) {
    let neithbors = [];
    //north
    if (i - 1 >= 0 && matrix[i][j] === matrix[i - 1][j]) {
        neithbors.push([i - 1, j]);
    }
    //south
    if (i + 1 < visitedMatrix.length && matrix[i][j] === matrix[i + 1][j]) {
        neithbors.push([i + 1, j]);
    }
    //west
    if (j - 1 >= 0  && matrix[i][j] === matrix[i][j - 1]) {
        neithbors.push([i, j - 1]);
    }
    //east
    if (j + 1 <= visitedMatrix[i].length && matrix[i][j] === matrix[i][j + 1]) {
        neithbors.push([i, j + 1]);
    }
    return neithbors;
}
