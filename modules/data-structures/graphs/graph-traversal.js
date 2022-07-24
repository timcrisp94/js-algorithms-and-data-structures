/*

the key with graph traversal is that we only want to visit each vertex one

depth first traversal : we move from one node to its lesser neighbors
- we must then remember where we've been

depth first recursive pseudocode
dfsr(vertex):
  if vertex is empty return (base case)
  add vertex to results list
  mark vertex as visited
  for each neighbor in vertex's neighbors
    if neighbor has not been visited
      recursively call dfs on neighbor

depth first iterative pseudocode
dfsi(start)
  let s be a stack
  s.push(start)
  while s is not empty
    vertex = s.pop()
    if vertex is not labeled as discovered
      visit vertex (add to result list)
      label vertex discovered
      for each of vertex's neighbors, n do s.push(n)

breadth first traversal : 
  create a queue and place the starting vertex in it
  create an array to store the nodes visited
  create an object to store nodes visited
  mark starting v as visited
  loop as long as there is something in the queue
  remove the first vertex from the queue and push it into the visited array
  loop over each vertex in the adjacency list for each node
  mark as visisted and enqueue that vertex
  return array of visited nodes


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
  depthFirstIterative(start){
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while(stack.length){
        currentVertex = stack.pop();
        result.push(currentVertex);

        this.adjacencyList[currentVertex].forEach(neighbor => {
           if(!visited[neighbor]){
               visited[neighbor] = true;
               stack.push(neighbor)
           } 
        });
    }
    return result;
  }
  breadthFirst(start){
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    visited[start] = true;

    while(queue.length){
        currentVertex = queue.shift();
        result.push(currentVertex);       

        this.adjacencyList[currentVertex].forEach(neighbor => {
            if(!visited[neighbor]){
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        });
    }
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
console.log(g.depthFirstIterative("A"))
console.log(g.breadthFirst("A"))

// class Graph {
//   constructor() {
//     this.adjacencyList = {}
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
//   }
//   addEdge(vertex1, vertex2) {
//     if (this.adjacencyList[vertex1]) {
//       this.adjacencyList[vertex1].push(vertex2)
//       this.adjacencyList[vertex2].push(vertex1)
//     }
//   }
//   removeEdge(vertex1, vertex2) {
//     if (this.adjacencyList[vertex1]) {
//       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//         v => v !== vertex2
//       )
//       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//         v => v !== vertex1
//       )
//     }
//   }
//   removeVertex(vertex) {
//     if (this.adjacencyList[vertex]) {
//       const adjacentVertex = this.adjacencyList[vertex].pop()
//       this.removeEdge(vertex, adjacentVertex)
//     }
//     delete this.adjacencyList[vertex]
//   }
//   depthFirstRecursive(vertex) {
//     const result = []
//     const visited = {}
//     const adjacencyList = this.adjacencyList

//     function dfs(start) {
//       if (!vertex) return null
//       // set vertex into visited
//       visited[vertex] = true
//       result.push(vertex)

//       adjacencyList[vertex].forEach(neighbor => {
//         if (!visited[neighbor]) {
//           return dfs(neighbor)
//         }
//       })
//       dfs(start)
//       return result
//     }
    
//   }
// }





// let g = new Graph();

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")


// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B","D")
// g.addEdge("C","E")
// g.addEdge("D","E")
// g.addEdge("D","F")
// g.addEdge("E","F")
// g.depthFirstRecursive("A")




// const g = new Graph()
// g.addVertex("Hadley")
// g.addVertex("Lily")
// g.addVertex("Chloe")
// g.addVertex("Buddy")
// g.addVertex("Pip")
// g.addEdge("Hadley", "Lily")
// g.addEdge("Hadley", "Chloe")
// g.addEdge("Lily", "Chloe")
// g.addEdge("Hadley", "Buddy")
// g.addEdge("Lily", "Buddy")
// g.addEdge("Hadley", "Pip")
// console.log(g.dfsRecursive("Hadley"))