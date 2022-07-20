/*
- a graph data structure is a collection of nodes and connections
-- a finite set of vertices or nodes or points, together with a set of unordered pairs (connections, edges) of these vertices for an undirected graph, or a set of ordered pairs for a directed graph

- note that vertices is interchangable with nodes

USES OF GRAPHS
- social networks
- location / mapping
- routing
- recommendations

graphs are cool - think about social networks, your connections, their connections; or think of actors and their movies; or the gd internet
- on a map, places are nodes, roads are connections
- "people also watched," "people you may know"

- an undirected graph has no direction in its connections
-- ex. a facebook friendship is two-way, you can both look at each other's profiles

- a directed graph is usually indicated by arrows on its connections
-- ex. i can follow someone on instagram and see their posts in my feed, but if they don't follow me, i won't be in their feed

- an unweighted graph does not have a value assigned to its edges
- a weighted graph has a value assigned to its edges
-- ex. a map will have distance values assigned to its edges

we represent graphs with:
- adjacency matrix
- adjacency list 
-- list takes up less space
-- iterate faster over a list
-- looking up a specific edge is much faster on a matrix

- the biggest advantage of lists is that most real world isn't jam-packed with connections
*/

class Graph {
  constructor() {
    this.adjacencyList = {}
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
    this.adjacencyList[vertex] = []
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2)
    this.adjacencyList[vertex2].push(vertex1)
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      v => v !== vertex2
    )
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      v => v !== vertex1
    )
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop()
      this.removeEdge(vertex, adjacentVertex)
    }
    delete this.adjacencyList[vertex]
  }
}

const g = new Graph()
// g.addVertex("Tokyo")
// g.addVertex("Dallas")
// g.addVertex("Aspen")
// g.addEdge("Dallas", "Tokyo")
// console.log(g)
// g.removeEdge("Dallas", "Tokyo")
// console.log(g)


g.addVertex("Tokyo")
g.addVertex("Dallas")
g.addVertex("Aspen")
g.addEdge("Dallas", "Tokyo")
g.addEdge("Dallas", "Aspen")
console.log(g)
g.removeVertex("Dallas")
console.log(g)