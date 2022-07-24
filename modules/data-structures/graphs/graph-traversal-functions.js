// class Graph {
//   constructor() {
//     this.adjacencyList = {}
//   }
//   addVertex(vertex) {
//     if (!this.adjacencyList[vertex]) {
//       this.adjacencyList[vertex] = []
//     }
//   }
//   addEdge(vertex1, vertex2) {
//     if (this.adjacencyList[vertex1]) {
//       this.adjacencyList[vertex1].push(vertex2)
//       this.adjacencyList[vertex2].push(vertex1)
//     } 
//   }
// }

// const graph = new Graph()
// console.log(graph.adjacencyList) // { Hadley: [] }

// graph.addVertex("Hadley")
// graph.addVertex("Lily")
// graph.addEdge("Hadley", "Lily")
// console.log(graph.adjacencyList) // { Hadley: [ 'Lily' ], Lily: [ 'Hadley' ] }

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
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
    } 
  }
  depthFirstSearch(start) {
    const result = []
    const visited = {}
    const adjacencyList = this.adjacencyList

    function dfs(vertex) {
      if (!vertex) return null
      visited[vertex] = true
      result.push(vertex)

      adjacencyList[vertex].forEach(friend => {
        if (!visited[friend]) {
          return dfs(friend)
        }
      })
    }
    dfs(start)
    return result
  }
}

const graph = new Graph()
graph.addVertex("Hadley")
graph.addVertex("Lily")

// console.log(graph.adjacencyList) // { Hadley: [ 'Lily' ], Lily: [ 'Hadley' ] }


graph.addVertex("Chloe")
graph.addVertex("Buddy")
graph.addVertex("Pip")
graph.addVertex("Lily")
graph.addEdge("Hadley", "Lily")
graph.addEdge("Hadley", "Chloe")
graph.addEdge("Lily", "Chloe")
graph.addEdge("Hadley", "Buddy")
graph.addEdge("Lily", "Buddy")
graph.addEdge("Hadley", "Pip")

console.log(graph.adjacencyList) 
/*
{
  Hadley: [ 'Lily', 'Chloe', 'Buddy', 'Pip' ],
  Lily: [ 'Hadley', 'Chloe', 'Buddy' ],
  Chloe: [ 'Hadley', 'Lily' ],
  Buddy: [ 'Hadley', 'Lily' ],
  Pip: [ 'Hadley' ]
}
*/

console.log(graph.depthFirstSearch("Hadley"))
// [ 'Hadley', 'Lily', 'Chloe', 'Buddy', 'Pip' ]