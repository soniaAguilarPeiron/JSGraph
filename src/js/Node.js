//a constructor for adding a node to the graph
/**
 * Node constructor
 */
function Node(value){  
    this.value = value,
    this.edges = [];
};

/**
 * Adds node to the array of edges
 * @param {Node} node to connect
 */
Node.prototype.addEdge = function(node) {
	this.edges.push(node);
};
  
module.exports = Node;

