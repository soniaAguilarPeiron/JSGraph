var Node = require('./Node');
var Graph = require('./Graph');
window.GraphView = require('./GraphView');

function generateGraph() {
    window.graph = new Graph();
    var nodes = [];
    nodes.push(new Node('A'));//0
    nodes.push(new Node('B'));//1
    nodes.push(new Node('C'));//2
    nodes.push(new Node('D'));//3
    nodes.push(new Node('E'));//4
    nodes.push(new Node('F'));//5
    nodes.push(new Node('G'));//6
    nodes.push(new Node('H'));//7
    nodes.push(new Node('I'));//8
    nodes.push(new Node('J'));//9

    nodes.forEach(function(node){
        graph.addNode(node);});

    graph.addDirectedEdge(nodes[0],nodes[1]);
    graph.addDirectedEdge(nodes[1],nodes[2]);
    graph.addDirectedEdge(nodes[0],nodes[3]);
    graph.addDirectedEdge(nodes[3],nodes[4]);
    graph.addDirectedEdge(nodes[4],nodes[5]);
    graph.addDirectedEdge(nodes[5],nodes[6]);
    graph.addDirectedEdge(nodes[6],nodes[7]);
    graph.addDirectedEdge(nodes[0],nodes[8]);
    graph.addDirectedEdge(nodes[8],nodes[9]);
    graph.addDirectedEdge(nodes[9],nodes[4]);

}

generateGraph();



