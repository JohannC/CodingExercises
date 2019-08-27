function heapify(arr, i, last) {
    let queue = [];
    queue.push(i);
    while (queue.length !== 0) {
        let i = queue.shift();
        let l = (i * 2 + 1 <= last) ? i * 2 + 1 : null;
        let r = (i * 2 + 2 <= last) ? i * 2 + 2 : null;
        let biggest = i;
        if (arr[l] > arr[i]) biggest = l;
        if (arr[r] > arr[biggest]) biggest = r;
        swap(arr, i, biggest)
        if (l !== null) queue.push(l);
        if (r !== null) queue.push(r);
    }
}

function swap(arr, i, j) {
    if (j === i) return;
    arr[i] += arr[j];
    arr[j] = arr[i] - arr[j];
    arr[i] -= arr[j]
}

function heapSort(array) {
    for (let i = Math.floor(array.length / 2) - 1; i >= 0; --i) {
        heapify(array, i, array.length - 1);
    }
    for (let i = array.length - 1; i >= 0; i--) {
        swap(array, i, 0);
        heapify(array, 0, i - 1)
    }
}

/*** Tree representation ***
       (9)
      /   \
   (2)     (1)
   / \     / \
 (4) (8) (5) (9)
***************************/
let arr1 = [9, 2, 1, 4, 8, 5, 9];
console.log(arr1);
heapSort(arr1)
console.log(arr1);

let arr2 = [9, 2, 1, 4, 8, 5, 8, 1000, 56, 78, 10, 2, 89, 2, 7];
heapSort(arr2)
console.log(arr2);

