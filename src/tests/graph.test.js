var Node = require('../js/Node');
var Graph = require('../js/Graph');
var getGraph = require('../js/GetGraph');

describe('Graph', () => {
    var graph;
    var data = 
    [
      {"node": "A", "edges": ["B","D","I"]},
      {"node": "B", "edges":["C"]},
      {"node": "C", "edges":[]},
      {"node": "D", "edges":["E"]},
      {"node": "E", "edges":["F"]},
      {"node": "F", "edges":["G"]},
      {"node": "G", "edges":["H"]},
      {"node": "H", "edges":[]},
      {"node": "I", "edges":["J"]},
      {"node": "J", "edges":["E"]}
    ];

    beforeEach(() => {
        graph = getGraph.get(data);
    });


   it('method getRoute', () => {
        let isRouted;
        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['C']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['D']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['H']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['J']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['E']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['A'],graph.nodes['C']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['I'],graph.nodes['J']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['I'],graph.nodes['E']);
        expect(isRouted).toBe(true);

        isRouted = graph.getRoute(graph.nodes['I'],graph.nodes['H']);
        expect(isRouted).toBe(true);
        
        isRouted = graph.getRoute(graph.nodes['I'],graph.nodes['D']);
        expect(isRouted).toBe(false);
        
        isRouted = graph.getRoute(graph.nodes['C'],graph.nodes['B']);
        expect(isRouted).toBe(false);
        
        isRouted = graph.getRoute(graph.nodes['F'],graph.nodes['C']);
        expect(isRouted).toBe(false);

   });

});