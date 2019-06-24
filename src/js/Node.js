//a constructor for adding a node to the graph
/**
 * Node constructor
 * @params Node value {string}
 */
function Node(value, edges){ 
	console.log('abans',value ,edges);
    this.value = value,
    this.edges = edges.slice();
};

/**
 * Adds node to the array of edges
 * @param {Node} node to connect
 */
Node.prototype.addEdge = function(node) {
	this.edges.push(node);
};
  
module.exports = Node;

