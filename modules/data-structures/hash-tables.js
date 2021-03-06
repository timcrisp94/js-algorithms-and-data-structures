/*
*/

// simple hash function
// function hash(key, arrayLen) {
//   let total = 0
//   for (let char of key) {
//     // map "a" to 1, "b" to 2, etc
//     let value = char.charCodeAt(0) - 96
//     total = (total + value) % arrayLen
//   }
//   return total
// }

// console.log(hash("pink", 10)) // 0
// console.log(hash("yellow", 10)) // 2
// console.log(hash("orange", 10)) // 0, uh oh
// clusters
// also not 0(1)

// simple hash improved
// function hash(key, arrayLen) {
//   let total = 0
//   / / prime numbers help us avoid collisions
//   let WEIRD_PRIME = 31
//   for (let i = 0; i < Math.min(key.length, 100); i++) {
//     let char = key[i]
//     let value = char.charCodeAt(0) - 96
//     total = (total * WEIRD_PRIME + value) % arrayLen
//   }
//   return total
// }

// console.log(hash("hello", 13)) // 7
// console.log(hash("hi", 13)) // 10
// console.log(hash("goodbye", 13)) // 9
// better but still, how do we handle collisions?

// separate chaining - with separate chaining at each index in our array we store values using a more sophisticated data structure
// linear probing - when we find a collision, we search through the array to find the next empty slot 

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    let WEIRD_PRIME = 31

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total 
  }
  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = []
    }
    this.keyMap[index].push([key, value])
  }
  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined
  }
  values() {
    let valuesArr = []
    for (let i =0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1])
          }
        }
      }
    }
    return valuesArr
  }
  keys() {
    let keysArr = []
    for (let i =0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0])
          }
        }
      }
    }
    return keysArr
  }
}

let ht = new HashTable()
ht.set("yellow", "orange")
console.log(ht.keys())
console.log(ht.values())