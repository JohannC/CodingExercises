class Vertex {
    constructor(key, distance) {
        this.key = key;
        this.visited = false;
        this.edges = [];
        this.distance = Infinity;
        this.parent = null;
    }

    addEdge(edge) {
        this.edges.push(edge)
    }
}

class Edge{
    constructor(vertexDestination, distance){
        this.vertexDestination = vertexDestination;
        this.distance = distance;
    }
}

//  A B C D E
//A 0 5 + 2 + 
//B 5 0 5 + +
//C + 5 0 + 1
//D 2 + + 0 1
//E + + 1 1 0
//A D E C with cost of 5

function main() {
    
    let matrix1 = [[0, 5, -1, 2, -1], [5, 0, 5, -1, -1], [-1, 5, 0, -1, 1], [2, -1, -1, 0, 1], [-1, -1, 1, 1, 0]];
    let vertexList = computeVertexList(matrix1);
    setStartingPoint(vertexList[0]);
    dijkstra(vertexList)
    console.log(getPath(vertexList, 2));
    console.log(getDistance(vertexList, 2));
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

function setStartingPoint(vertex) {
    return vertex.distance = 0;
}

function getDistance(vertexList, vertexKeyTo) {
    return vertexList[vertexKeyTo].distance
}

function dijkstra(vertexList) {
    let queue = vertexList.slice();
    while (queue.length !== 0) {
        let vertex = getMinDistanceVertex(queue);
        queue = queue.filter(x => x !== vertex);
        vertex.edges.map(edge => {
            if (edge.vertexDestination.distance > vertex.distance + edge.distance) {
                edge.vertexDestination.distance = vertex.distance + edge.distance;
                edge.vertexDestination.parent = vertex
            }
        })
        vertex.visited = true;
    }
}

function getMinDistanceVertex(vertexListQueue) {
    let vertexDistanceMin = Infinity;
    let minVertex;
    for (let i = 0; i < vertexListQueue.length; i++) {
        if (vertexListQueue[i].distance <= vertexDistanceMin){
            vertexDistanceMin = vertexListQueue[i].distance;
            minVertex = vertexListQueue[i];
        }
    }
    return minVertex;
}

function computeVertexList(matrix) {
    let vertexList = []
    for (let i = 0; i < matrix.length; i++) {
        if (vertexList[i] === undefined) vertexList[i] = new Vertex(i);
        for (let j = 0; j < matrix.length; j++) {
            if (j !== i && matrix[i][j] !== -1) {
                if (vertexList[j] === undefined) vertexList[j] = new Vertex(j);
                let adjVertex = vertexList[j]
                vertexList[i].addEdge(new Edge(adjVertex, matrix[i][j]));
            }
        }
    }
    return vertexList;
}