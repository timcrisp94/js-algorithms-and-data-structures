// doubly linked lists contain a next and a previous
// - compared to a singly linked list, you can traverse a doubly backwards easily
// - more memory, and thus more flexibility, but, more memory
// * great example of a doubly linked list is your browser history

/* -- doubly linked list Big O --

    - time - 
- insertion - O(1)
- removal - O(1) - not the case for singly linked list which is O(n)
- searching - O(n) - technically O(n/2)
- access - O(n)

    

*/

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
  insert(index, val) {
    if (index < 0 || index >this.length) return false
    if (index === 0) return !!this.unshift(val)
    if (index === this.length) return !!this.push(val)

    let newNode = new Node(val)
    let beforeNode = this.get(index - 1)
    let afterNode = beforeNode.next
    
    beforeNode.next = newNode, newNode.prev = beforeNode
    newNode.next = afterNode, afterNode.prev = newNode
    this.length++
    return true
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    
    let removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}


let list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")



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
// console.log(list.insert(3, "Tonks"), list)
// console.log(list.remove(1), list)
// console.log(list)