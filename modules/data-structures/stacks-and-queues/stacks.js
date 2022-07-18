/*
stacks - last in first out
- like a stack of books
- or, THE CALL STACK, undo/redo

* stacks are a concept 

BIG O of stacks
- insertion - O(1)
- removal - O(1)
- searching - O(n)
- access - O(n)

*/

// creating a stack with an array
// - using push and pop, fr

// let stack = []
// stack.push("google")
// stack.push("instagram")
// stack.push("youtube")
// console.log(stack)
// stack.pop()
// stack.push("amazon")

// shift, unshift
// * less efficient as we need to reassign indeces

// stack.unshift("create new file")
// stack.unshift("resized file")
// stack.unshift("cloned")
// stack.shift()
// stack.shift()
// console.log(stack)

// * linked list are far more efficient for stacks *
//  - we will notice that push and pop here are the same as shift and unshift in a singly linked list

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Stack {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  push(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    } else {
      let temp = this.first
      this.first = newNode
      this.first.next = temp
    }
    return ++this.size
  }
  pop() {
    if (!this.first) return null
    let temp = this.first
    if (this.first = this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.value
  }
}



let stack = new Stack()

stack.push("first")
stack.push("second")
stack.push("third")
console.log(stack.pop())
console.log(stack)