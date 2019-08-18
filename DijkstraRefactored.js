class Vertex {
    constructor(key) {
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

class Edge {
    constructor(vertexDestination, distance) {
        this.vertexDestination = vertexDestination;
        this.distance = distance;
    }
}

class Graph {
    constructor(matrix, startingVertexKey) {
        this.vertexList = this._computeVertexList(matrix);
        this._setStartingPoint(this.vertexList[startingVertexKey]);
    }

    dijkstra() {
        let queue = this.vertexList.slice();
        while (queue.length !== 0) {
            let vertex = this._getMinDistanceVertex(queue);
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

    getPath(vertexKeyTo) {
        let result = [];
        result.push(vertexKeyTo);
        let vertex = this.vertexList[vertexKeyTo]
        while (vertex.parent !== null) {
            result.unshift(vertex.parent.key);
            vertex = vertex.parent
        }
        return result;
    }

    getDistance(vertexKeyTo) {
        return this.vertexList[vertexKeyTo].distance
    }

    _computeVertexList(matrix){
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

    _getMinDistanceVertex(vertexListQueue) {
        let vertexDistanceMin = Infinity;
        let minVertex;
        for (let i = 0; i < vertexListQueue.length; i++) {
            if (vertexListQueue[i].distance <= vertexDistanceMin) {
                vertexDistanceMin = vertexListQueue[i].distance;
                minVertex = vertexListQueue[i];
            }
        }
        return minVertex;
    }

    _setStartingPoint(vertex) {
        return vertex.distance = 0;
    }
}

//  0 1 2 3 4
//0 0 5 + 2 + 
//1 5 0 5 + +
//2 + 5 0 + 1
//3 2 + + 0 1
//4 + + 1 1 0
//     (0)
//   5 / \ 2
//   (1)  (3)
// 5 /     \ 1
// (2)_____(4)
//      1
//Shortest way from 0 to 2 => 0 3 4 2 with a cost of 5

let matrix = [[0, 5, -1, 2, -1], [5, 0, 5, -1, -1], [-1, 5, 0, -1, 1], [2, -1, -1, 0, 1], [-1, -1, 1, 1, 0]];
let graph = new Graph(matrix, 0);
graph.dijkstra();
console.log(graph.getPath(2));
console.log(graph.getDistance(2));
