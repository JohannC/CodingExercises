class Vertex {
    constructor(key, ...args) {
        this.key = key;
        this.visited = false;
        this.adjacentVertexes = [];
        this.distance = 0;
        this.parent = null;
    }

    addAdjacentVertex(vertex, cost) {
        this.adjacentVertexes.push({ vertex, cost })
    }
}

function main() {
    let matrix1 = [[1, 1, 1], [1, 0, 1], [0, 9, 1]];
    let vertexList = computeVertexList(matrix1)
    BFS(vertexList, coordsToKey(0, 0));
    getPath(vertexList, coordsToKey(2, 1))
    getDistance(vertexList, coordsToKey(2, 1))
}
main();

function getPath(vertexList, vertexKeyTo) {
    let result = [];
    result.push(vertexKeyTo);
    let vertex = vertexList[vertexKeyTo]
    while (vertex.parent !== null) {
        result.unshift(vertex.parent.key);
        vertex = vertex.parent
    }
    return result;
}

function getDistance(vertexList, vertexKeyTo) {
    return vertexList[vertexKeyTo].distance
}

function BFS(vertexList, startingVertexKey) {
    let queue = [];
    queue.push(vertexList[startingVertexKey]);
    while (queue.length !== 0) {
        let vertex = queue.shift();
        vertex.adjacentVertexes.map(adjVertexInfos => {
            if (!adjVertexInfos.vertex.visited) {
                adjVertexInfos.vertex.distance = vertex.distance + 1;
                adjVertexInfos.vertex.parent = vertex
                queue.push(adjVertexInfos.vertex);
            }
        })
        vertex.visited = true;
    }
}

function coordsToKey(i, j) {
    return "{" + i + "," + j + "}";
}

function computeVertexList(matrix) {
    let vertexList = {};
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            vertexList[coordsToKey(i, j)] = new Vertex(coordsToKey(i, j));
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (i - 1 >= 0 && matrix[i - 1][j] > 0) vertexList[coordsToKey(i, j)].addAdjacentVertex(vertexList[coordsToKey(i - 1, j)], 1);
            if (j - 1 >= 0 && matrix[i][j - 1] > 0) vertexList[coordsToKey(i, j)].addAdjacentVertex(vertexList[coordsToKey(i, j - 1)], 1);
            if (i + 1 < matrix.length && matrix[i + 1][j] > 0) vertexList[coordsToKey(i, j)].addAdjacentVertex(vertexList[coordsToKey(i + 1, j)], 1);
            if (j + 1 < matrix[i].length && matrix[i][j + 1] > 0) vertexList[coordsToKey(i, j)].addAdjacentVertex(vertexList[coordsToKey(i, j + 1)], 1);
        }
    }

    return vertexList;
}

// [1, 1, 1]
// [1, 0, 1]
// [0, 9, 1]