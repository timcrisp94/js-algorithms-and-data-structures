// doubly linked lists contain a next and a previous
// - compared to a singly linked list, you can traverse a doubly backwards easily
// - more memory, and thus more flexibility, but, more memory

class Node {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }  
  push(val) {
    let newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
    return this
  }
  pop() {
    if (!this.tail) return undefined
    let poppedNode = this.tail
    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null
      poppedNode.prev = null
    }
    this.length--
    return poppedNode
  }
  shift() {
    if (!this.head) return undefined
    let oldHead = this.head
    if (this.length === 1) {
      this.head = null
      this.tail = null
    }
    this.head = oldHead.next
    this.head.prev = null
    oldHead.next = null
    this.length--
    return oldHead
  }
  unshift(val) {
    let newNode = new Node(val)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }
  get(index) {
    if (index < 0 || index >= this.length) return null
    let counter, current
    if (index <= this.length / 2) {
      counter = 0
      current = this.head
      while (counter != index) {
        current = current.next
        counter++
      }      
    } else {
      counter = this.length - 1
      current = this.tail
      while(counter != index) {
        current = current.prev
        counter--
      }
    }
    return current
  }
  set(index, val) {
    let foundNode = this.get(index)
    if (foundNode) {
      foundNode.val = val
      return true
    }
    return false
  }
}


let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
console.log(list.unshift("hagrid"), list)
console.log(list.set(3, "bubba"), list)


// console.log(list.push(99))
// console.log(list.push(100))
// console.log(list.push(101))
// console.log(list.pop())
// console.log(list)
// console.log(list)
// console.log(list.shift())
// console.log(list)
// console.log(list.shift())
// console.log(list.shift())
// console.log(list)