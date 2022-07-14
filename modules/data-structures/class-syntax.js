// recall the class keyword
// - a class is a blueprint for creating objects with pre-defined properties and methods
// - in js we implement data structures as classes


// *HOW CLASSES ARE USED W/R/T DATA STRUCTURES* //

class DataStructure {
  constructor(){
    // default properties
  }
  instanceMethod() {
    // what should each object created from this class do?
  }
}

/*
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.year = year
  }
}

let firstStudent = new Student("Colt", "Cabana")
let secondStudent = new Student("Colt", "Steele")

secondStudent.year = 4

console.log(secondStudent) */

// instance methods 
/*
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName
    this.lastName = lastName
    this.year = year
    this.tardies = 0
    this.scores = []
  }
  fullName() {
    return `Your full name is ${this.firstName} is ${this.lastName}`
  }
  markLate() {
    this.tardies += 1
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`
  }
  addScore(score) {
    this.scores.push(score)
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce(function (a, b) {
      return a + b
    })
    return sum/this.scores.length
  }
}

let firstStudent = new Student("Colt", "Cabana")
let secondStudent = new Student("Colt", "Steele")

console.log(firstStudent.fullName())
console.log(firstStudent.markLate())
console.log(secondStudent.scores)
console.log(secondStudent.addScore(89)) */

// class methods
// - we define class methods with the static keyword
// -- static methods are called without instatiating their class and cannot be called through a class instance. static methods are often used to create utility functions for an application
class Student {
  constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName    
  }
  fullName() {
    return `Your full name is ${this.firstName} is ${this.lastName}`
  }
  static enrollStudents(...students) {
    // code will not relate to a specific instance
    return "enrolling students"
  }
}

let firstStudent = new Student("Colt", "Cabana")
let secondStudent = new Student("Colt", "Steele")

// static methods are called with the class name dot method
Student.enrollStudents([firstStudent, secondStudent])

class Point {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  static distance(a, b) {
    const dx = a.x - b.x
    const dy = a.y - b.y
    return Math.hypot(dx, dy)
  }
}

const p1 = new Point(5, 5)
const p2 = new Point(10, 10) 

console.log(Point.distance(p1, p2))

