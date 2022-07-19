class Node {
  constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

class BinarySearchTree {
  constructor(){
      this.root = null;
  }
  insert(value){
      var newNode = new Node(value);
      if(this.root === null){
          this.root = newNode;
          return this;
      }
      var current = this.root;
      while(true){
          if(value === current.value) return undefined;
          if(value < current.value){
              if(current.left === null){
                  current.left = newNode;
                  return this;
              }
              current = current.left;
          } else {
              if(current.right === null){
                  current.right = newNode;
                  return this;
              } 
              current = current.right;
          }
      }
  }
  find(value) {
    if (this.root === null) return false
    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        return true
      }
    }
    return false
  }
  BFS() {
    let node = this.root
    let visited = []
    let queue = []
    queue.push(node)

    while(queue.length) {
      node = queue.shift()
      visited.push(node.value)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return visited
  }
  DFSPreOrder() {
    let data = []    
    function traverse(node) {
      data.push(node.value)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
  DFSPostOrder() {
    let data = []    
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node.value)
    }
    traverse(this.root)
    return data
  }
  DFSInOrder() {
    let data = []    
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node.value)
      if (node.right) traverse(node.right)      
    }
    traverse(this.root)
    return data
  }
}

// breadth first
// iterate
// - create a queue and a variable to store values of nodes visited
// - place root in the queue, loop

const tree = new BinarySearchTree()
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(20)
tree.insert(3)
tree.insert(8)

console.log(tree.DFSInOrder())

// depth first - preorder
// recursive
// - create a variable to store values of nodes visited
// - store root of the bst in a variable called current
// write a helper function that accepts a node
//  - push the value of the node to the variable storing values
//  - if the node has a left, call helper with left property of the node
//  - if the node has a right, " "
// invoke helper with current variable
// return array of values

// depth first - post order
// literally the same as preorder, just push to data after the if statements

// depth first - in order
// literally the same as post order, just push data after the left if statement

/*
when to use breadth first, depth first
time complexity is O(n) for all
-depth first does not requre the same space as breadth first, so a wide tree would be best handled by depth first
-breadth first for a long, deeper tree


*/