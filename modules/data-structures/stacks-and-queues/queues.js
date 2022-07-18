/*
queues - first in, first out
- examples (other than yr Netflix queue)
  - background tasks
  - printing / task processing

BIG O for queues
- insert - O(1)
- remove - O(1)
- searching - O(N)
- accessing - O(N)
*/

// building a queue with an array

let q = []
q.push("first")
q.push("second")
q.push("third")
q.shift() // -> "first"
console.log(q)

// or
q.unshift("first")
q.unshift("second")
q.unshift("third")
q.pop()
console.log(q)

// linked list - add to the end, remove from the beginning
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Queue {
  constructor() {
    this.first = null
    this.last = null
    this.size = 0
  }
  enqueue(val) {
    let newNode = new Node(val)
    if (!this.first) {
      this.first = newNode
      this.last = newNode
    }
    else {
      this.last.next = newNode
      this.last = newNode
    }
    return ++this.size
  }
  dequeue() {
    if (!this.first) return null
    let temp = this.first
    if (this.first = this.last) {
      this.last = null
    }
    this.first = this.first.next
    this.size--
    return temp.val
  }
}

let queue = new Queue()

queue.enqueue("first")
queue.enqueue("second")
queue.enqueue("third")
queue.dequeue()
console.log(queue)