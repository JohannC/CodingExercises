class Vertex {
    constructor(data) {
        this.data = data
        this.edges = [];
    }

    addEdge(edge){
        this.edges.push(edge)
    }
}

class Edge {
    constructor(recipient) {
        this.recipient = recipient;
    }
}

function isGraph(vertex){
    let queue = [];
    let visited = new Map();
    queue.push(vertex);
    while(queue.length > 0){
        let actualVertex = queue.shift();
        if (visited.has(actualVertex)) return true;
        else visited.set(actualVertex, true);
        queue = [...queue, ...actualVertex.edges];
    }
    return false;
}

let v1 = new Vertex("v1");
let v2 = new Vertex("v2");
let v3 = new Vertex("v3");
let v4 = new Vertex("v4");
let v5 = new Vertex("v5");
let v6 = new Vertex("v6");
v1.addEdge(v2);
v1.addEdge(v3);
v2.addEdge(v4);
v2.addEdge(v5);
v3.addEdge(v6);
v6.addEdge(v1);
console.log("This is a graph, its has a cycle, isGraph(t1) has returned: "+isGraph(v1));

let t1 = new Vertex("t1");
let t2 = new Vertex("t2");
let t3 = new Vertex("t3");
let t4 = new Vertex("t4");
let t5 = new Vertex("t5");
let t6 = new Vertex("t6");
t1.addEdge(t2);
t1.addEdge(t3);
t2.addEdge(t4);
t2.addEdge(t5);
t3.addEdge(t6);
console.log("This tree is not a graph, it has no cycle, isGraph(t1) has returned: "+isGraph(t2));