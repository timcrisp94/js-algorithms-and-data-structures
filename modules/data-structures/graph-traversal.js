/*

the key with graph traversal is that we only want to visit each vertex one

depth first traversal : we move from one node to its lesser neighbors
- we must then remember where we've been

depth first recursive pseudocode
dfs(vertex):
  if vertex is empty return (base case)
  add vertex to results list
  mark vertex as visited
  for each neighbor in vertex's neighbors
    if neighbor has not been visited
      recursively call dfs on neighbor

depth 

breadth first traversal : 


our graph looks like this :

      A
    /   \
   B     C
   |     |
   D --- E
    \   /
      F
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
  depthFirstRecursive(start){
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex){
        if(!vertex) return null;
        // set visited[vertex] to true
        visited[vertex] = true;
        // push to our result array
        result.push(vertex);
        // move to that vertex's neighbor
        adjacencyList[vertex].forEach(neighbor => {
          // if we have not visited this neighbor
            if(!visited[neighbor]){
              // run dfs on this neighbor
                return dfs(neighbor)
            }
        });
    })(start);

    return result;
  }

}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")


console.log(g.depthFirstRecursive("A"))