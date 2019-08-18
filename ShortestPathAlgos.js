function BFS(matrix, i, j) {
    let { nodes, adj } = mazeToGraph(matrix);

    let nodesVisited = new Set();
    let nodesToVisit = [];
    let nodeToParent = {};
    let nodeToDistance = {}

    // Init
    let key = coordToKey(i, j);
    nodesToVisit.push(key);
    nodeToParent[key] = null;
    nodeToDistance[key] = 0;

    while (nodesToVisit.length !== 0) {
        let node = nodesToVisit.shift();
        adj[node].map(neighbour => {
            let key = coordToKey(...neighbour);
            if (nodesVisited.has(key)) return;
            else {
                nodesToVisit.push(key);
                nodeToParent[key] = node;
                nodeToDistance[key] = nodeToDistance[node] + 1;
            }
        })
        nodesVisited.add(node);
    }
    return { nodeToParent, nodeToDistance }
}

function dijkstra(matrix, i, j) {
    let { nodes, adj } = mazeToGraph(matrix);

    let nodeToParent = {};
    let nodeToDistance = {}

    //Init
    let key = coordToKey(i, j);
    let nodesToVisit = nodes.slice();
    nodeToParent[key] = null;
    for (let i = 0; i < nodes.length; ++i) {
        nodeToDistance[nodes[i]] = Infinity;
    }
    nodeToDistance[key] = 0;

    while (nodesToVisit.length !== 0) {
        let node = extractMinKey(nodeToDistance, nodesToVisit);
        nodesToVisit = nodesToVisit.filter(x => x !== node);
        adj[node].map(neighbour => {
            let newDistance = nodeToDistance[node] + 1; /* to replace by edge weigh */
            if (newDistance < nodeToDistance[neighbour]) {
                nodeToDistance[neighbour] = newDistance;
                nodeToParent[neighbour] = node;
            }
        });
    }

    return { nodeToParent, nodeToDistance };
}

function extractMinKey(nodeToDistance, nodesToVisit) {
    let min = Infinity;
    let key = null
    for (let i = 0; i < nodesToVisit.length; ++i) {
        if (nodeToDistance[nodesToVisit[i]] <= min) {
            min = nodeToDistance[nodesToVisit[i]];
            key = nodesToVisit[i];
        }
    }
    return key;
}

function getPath(nodeToParent, destinationKey) {
    let path = [];
    path.push(destinationKey);
    while (path[path.length - 1] != null) {
        path.push(nodeToParent[path[path.length - 1]])
    }
    path.pop();
    return path.reverse();
}

function mazeToGraph(matrix) {
    let adj = {};
    let nodes = [];
    for (let i = 0; i < matrix.length; ++i) {
        for (let j = 0; j < matrix[i].length; ++j) {
            nodes.push(coordToKey(i, j));
            adj[coordToKey(i, j)] = getNeighbours(matrix, i, j);
        }
    }
    return { nodes, adj }
}

const coordToKey = (i, j) => "" + i + "," + j

function getNeighbours(matrix, i, j) {
    let neighbours = [];
    if (i - 1 >= 0 && matrix[i - 1][j] !== 0) neighbours.push([i - 1, j]);
    if (i + 1 < matrix.length && matrix[i + 1][j] !== 0) neighbours.push([i + 1, j]);
    if (j - 1 >= 0 && matrix[i][j - 1] !== 0) neighbours.push([i, j - 1]);
    if (j + 1 < matrix[i].length && matrix[i][j + 1] !== 0) neighbours.push([i, j + 1]);
    return neighbours;
}

let matrix1 = [[1, 1, 1], [1, 0, 1], [0, 9, 1]];
let result1 = BFS(matrix1, 0, 0);
console.log(getPath(result1.nodeToParent, coordToKey(2,1)));

let result2  = dijkstra(matrix1, 0, 0);
console.log(getPath(result2.nodeToParent, coordToKey(2,1)));
