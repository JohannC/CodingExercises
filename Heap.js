class Heap {
    constructor(compareCallback) {
        if (compareCallback === undefined) {
            this.compare = (a, b) => a - b;
        } else {
            this.compare = compareCallback;
        }
        this.heap = [];
    }

    push(element) {
        this.heap.push(element);
        let indexChild = this.heap.length - 1
        let indexParent = this._getParentIndex(indexChild);
        while (indexParent >= 0) {
            if (this.compare(this.heap[indexParent], this.heap[indexChild]) > 0) {
                this._swap(indexChild, indexParent);
                indexChild = indexParent
                indexParent = this._getParentIndex(indexChild);
            } else {
                break;
            }
        }
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    pop() {
        const result = this.heap[0];
        this._swap(0, this.heap.length - 1);
        this.heap.pop();
        let parentIndex = 0;
        while (parentIndex < this.heap.length) {
            let leftLeafIndex = this._getLeftLeafIndex(parentIndex);
            let rightLeafIndex = this._getRightLeafIndex(parentIndex);
            let maxIndex;
            if (this.compare(this.heap[leftLeafIndex], this.heap[rightLeafIndex]) > 0) {
                maxIndex = rightLeafIndex;
            } else {
                maxIndex = leftLeafIndex;
            }
            if (this.compare(this.heap[parentIndex], this.heap[maxIndex]) > 0) {
                this._swap(parentIndex, maxIndex);
                parentIndex = maxIndex;
            } else {
                break;
            }
        }
        return result;
    }

    size() {
        return this.heap.length;
    }

    toArray() {
        return this.heap.slice();
    }

    _swap(i, j) {
        let temp = this.heap[i];
        this.heap[i] = this.heap[j];
        this.heap[j] = temp;
    }

    _getParentIndex(i) {
        if (i % 2 === 0) {
            return (i - 2) / 2
        } else {
            return (i - 1) / 2
        }
    }

    _getLeftLeafIndex(i) {
        return 2 * i + 1;
    }

    _getRightLeafIndex(i) {
        return 2 * i + 2;
    }
}

let heap = new Heap();

heap.push(10);
heap.push(20);
heap.push(50);
heap.push(8);
heap.push(15);
heap.push(25);
heap.push(5);
heap.push(1);

console.log(heap.peek());
console.log(heap.pop());

console.log(heap.peek());
console.log(heap.pop());

console.log(heap.peek());
console.log(heap.pop());

console.log(heap.peek());
console.log(heap.pop());

console.log(heap.peek());
console.log(heap.pop());