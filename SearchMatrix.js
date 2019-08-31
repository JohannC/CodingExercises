function searchMatrix(matrix, n) {
    if (n === matrix[0][0]) return [0,0];
    let low = new Point(0, 0);
    let high = new Point(matrix[0].length - 1, matrix.length - 1);
    while (low.x <= high.x && low.y <= high.y) {
        let mid = computeMid(matrix, low, high);
        if (matrix[mid.y][mid.x] === n) {
            return [mid.y, mid.x]
        } else if (isInside(matrix, n, mid.x, mid.y) && !isInside(matrix, n, mid.x - 1, mid.y - 1)) {
            return searchLineAndColumnBelow(matrix, n, mid.x, mid.y)
        } else if (!isInside(matrix, n, mid.x, mid.y) && isInside(matrix, n, mid.x + 1, mid.y + 1)) {
            return searchLineAndColumnBelow(matrix, n, mid.x + 1, mid.y + 1)
        }
        else if (matrix[mid.y][mid.x] < n) low = new Point(mid.x + 1, mid.y + 1);
        else high = new Point(mid.x - 1, mid.y - 1);
    }
}

function computeMid(matrix, low, high) {
    let mid = new Point(Math.floor((low.x + high.x) / 2), Math.floor((low.y + high.y) / 2));
    if (mid.x === 0) mid.x = 1;
    if (mid.y === 0) mid.y = 1;
    if (mid.x === matrix[0].length - 1) mid.x = matrix[0].length - 2;
    if (mid.y === matrix.length - 1) mid.y = matrix.length - 2;
    return mid;
}

function searchLineAndColumnBelow(matrix, n, x, y) {
    let result;
    result = searchColumn(matrix, n, x, y)
    if (result === -1) return searchLine(matrix, n, x, y);
    else return searchColumn(matrix, n, x, y);
}

function Point(x, y) {
    this.x = x;
    this.y = y;
}

function isInside(matrix, n, x, y) {
    return n <= matrix[y][x];
}

function searchColumn(matrix, n, x, y) {
    let low = 0;
    let high = y;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (matrix[mid][x] === n) return [mid, x]
        else if (matrix[mid][x] < n) low = mid + 1
        else high = mid - 1;;
    }
    return -1;
}

function searchLine(matrix, n, x, y) {
    let low = 0;
    let high = x;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (matrix[y][mid] === n) return [y, mid];
        else if (matrix[y][mid] < n) low = mid + 1
        else high = mid - 1;;
    }
    return -1;
}
/*
[
[01, 03, 05, 08, 10, 35, 55], 
[05, 08, 12, 15, 20, 40, 59],
[10, 15, 20, 24, 29, 49, 66],
[16, 20, 28, 35, 39, 52, 71],
[25, 30, 35, 41, 43, 57, 77]
]
*/
console.log(searchMatrix([[01, 03, 05, 08, 10, 35, 55], [05, 08, 12, 15, 20, 40, 59], [10, 15, 20, 24, 29, 49, 66], [16, 20, 28, 35, 39, 52, 71], [25, 30, 35, 41, 43, 57, 77]], 55));



