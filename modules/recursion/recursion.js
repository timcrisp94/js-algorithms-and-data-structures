// recursion is a process (a function in our case) that calls itself
//  - often seen in traversal : document.getElementById, DOM traversal, object traversal

// The call stack - any time a function is invoked it's placed at the top of the call stack (pushed)
//  - when js sees return, or the function completes, the function is removed from the call stack (pop)

// When we write recursive functions, we keep pushing new functions onto the call stack

// Recursive Function Game Plan
// 1. Base Case - condition when the recursion ends
// 2. Different Input - the recursive function calls a different piece of data each time
//  - think of Martin and the Dragon

function countDown(num) {
  if (num <= 0) {
    console.log ("all done")
    return
  }
  console.log(num)
  num--
  countDown(num)
}

countDown(3)
// condition, print 3
// countDown(2)
// condition, print 2
// countDown(1)
// condition, print 1
// countDown(0)
// condition is true, print "all done"

function sumRange(num) {
  if (num === 1) return 1
  return num + sumRange(num - 1)
}

// factorial
// ex. factorial 4 = 4 * 3 * 2 * 1

// iterative
// function factorial(num) {
//   let total = 1
//   for (let i = num; i > 1; i--) {
//     total *= i
//   }
//   return total
// }

// recursive
function factorial(num) {
  if (num === 1) return 1
  return num * factorial(num - 1)
}

console.log(factorial(4))

/*

RECURSION PITFALLS

- no base case, or base case is incorrect
- returning the wrong thing, or getting to return
- stack over flow

*/

// helper method recursion

function collectOdds(arr) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return
    }
    if (helperInput[0] % 2 !==0) {
      result.push(helperInput[0])
    }
    helper(helperInput.slice(1))
  }
  helper(arr)
  return result
}

// pure recursion
//  - for arrays, use methods like slice, the spread operator, and concat that make copies of arrays
//  - remember strings are immutable so use methods like slice, substring to make copies
//  - to make copies of objects use Object.assign or the spread operator

function collectOddsPR(arr) {
  let newArr = []

  if (arr.length === 0) return newArr
  if (arr[0] % 2 !== 0) newArr.push(arr[0])

  newArr = newArr.concat(collectOddsPR(arr.slice(1)))
  return newArr
}