// bubble sort - algo where the largest values bubble to the top
// time - O(n^2)

// es5
function swapOld(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

// es2015
const swap = (arr, idx1, idx2) => {
  [arr[idx1]], [arr[idx2]] = [arr[idx2]], [arr[idx1]]
}

// pseudocode
//  - start looping with a variable i at the end of the array towards the beginning
//  - start an inner loop with a variable j from the beginning until i -1
//  - if arr[j] is greater thar arr [j + 1], swap those two values, return sorted array

// const numbers = [43, 5, 17, 83, 42]

// very rudimentary
// function bubbleSort(arr) {  
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(arr, arr[j], arr[j + 1])
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

// a little more optimized
// function bubbleSort(arr) {  
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log(arr, arr[j], arr[j + 1])
//       if (arr[j] > arr[j + 1]) {
//         // swap
//         let temp = arr[j]
//         arr[j] = arr[j + 1]
//         arr[j + 1] = temp
//       }
//     }
//   }
//   return arr
// }

const numbers = [4, 1, 2, 3]

// optimized with noSwaps
function bubbleSort(arr) {
  let noSwaps  
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

console.log(bubbleSort(numbers))