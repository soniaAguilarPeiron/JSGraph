var Graph = require('../js/Graph');
var Node = require('../js/Node');

function GetNewGraphFromJSON () {
}
    /**
     * Creates a new graph from JSON data.
     * @param data json content with nodes
     * @returns {Graph}
     */
 /**
  *
  */
GetNewGraphFromJSON.get = function (data) {
        const graph = new Graph();
        data.forEach((nodeData) => {
            graph.addNode(new Node(...Object.values(nodeData)));
        });
        return graph;
};
module.exports = GetNewGraphFromJSON;