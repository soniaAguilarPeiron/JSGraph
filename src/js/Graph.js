
/**
 * Directed Graph Constructor 
 * 
 */
function Graph (){
	this.nodes = {};
}

/**
 * Add Node 
 * @param node {Node}
 */
Graph.prototype.addNode = function(node) {
	this.nodes[node.value] = {value: node.value, edges:[]};
};

/**
 * Add directed edge from nodeA to nodeB
 * @param nodeA {Node}
 * @param nodeB {Node}
 */
Graph.prototype.addDirectedEdge = function(nodeA,nodeB) {
	this.nodes[nodeA.value].edges.push(nodeB.value);

};

// Algorithm used to traverse the 'a' children graph :breadth-first search.
// Complexity O(V + E)
/**
 * Returns if is there a route from node a to node b
 * @param a {Node}
 * @param b {Node}
 * @returns {bolean}
 */

 Graph.prototype.getRoute = function(a,b) {

    if (!a || !b || !this.nodes[a.value] || !this.nodes[b.value]) return false;
    var nodesVisited = new Set();
    var nodesToVisitQueue = [a.value]; 
   
    while (nodesToVisitQueue.length > 0) {
        var nodeVisited = this.nodes[nodesToVisitQueue.shift()];
        if (nodeVisited.value === b.value) return true;
        nodesVisited.add(nodeVisited.value);
        nodeVisited.edges && nodeVisited.edges.forEach(
            function (neighbour){
                if (!nodesVisited.has(neighbour))
                    nodesToVisitQueue.push(neighbour);}
                );
    }
    return false;
};

module.exports = Graph;