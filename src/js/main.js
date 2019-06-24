var Node = require('./Node');
var Graph = require('./Graph');
var getGraph = require('./GetGraph');
var graphData = require('../../graphData.json');
window.GraphView = require('./graphView');

function generateGraph() {
    window.graph = getGraph.get(graphData);
}

generateGraph();



