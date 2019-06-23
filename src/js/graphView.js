
function GraphView() {
}

/**
 * Stattic method to update html table with graph data.
 */
GraphView.updateTable = function updateTable(){
	const table = document.getElementById("graphTable");
	for (let node in graph.nodes){
		if (graph.nodes.hasOwnProperty(node)) {
			let row = table.insertRow(0);	
			let parentCell = row.insertCell(0);
			parentCell.innerHTML = node + " ---> ";
			graph.nodes[node].edges.forEach(
				(conectedNode) => {
					let cell = row.insertCell(1);
					cell.innerHTML = conectedNode;
			});
		}
	}
	};

/**
 * Static method to check keypress in andle input text nodes
 */
GraphView.checkText = function checkText(event){
		const charCode = (window.event.keyCode || event.wich);
		const key = String.fromCharCode(charCode).toUpperCase();
		const elem = document.getElementById(window.event.currentTarget.id);
		if (key.match(/^[A-Z]/)) {
			elem.value=key;
			//activate span ok
		} else {
			event.preventDefault();
			elem.value = '';
			//activate span no ok
		}
	};

/**
 * Static method to show the result message
 */
GraphView.showResult = function showResult (isRouted) {
	const finalResult = document.getElementById('finalResult');
	finalResult.classList.remove('found','notFound');
	const [message,className] = (isRouted) 
		? ["Yes, there is a route","found"] 
		: ["No, there isn't a route","notFound"];
	finalResult.innerHTML = message;
	finalResult.classList.add(className);
};
/**
 * Static method to handle getRoute button click 
 */
GraphView.handleClick = function handleClick() {
	const fromNode = document.getElementById('nodeFrom').value.trim();
	const toNode = document.getElementById('nodeTo').value.trim();
    const isRouted = graph.getRoute(graph.nodes[fromNode],graph.nodes[toNode]);
    GraphView.showResult(isRouted);
};
module.exports = GraphView;
