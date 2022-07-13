// radix sort 
// radix sort is an algo that does not use comparison; it exploits the fact that larger numbers contain more information
// radix is an integer sort

// time complexity is O(nk)
// - where n = the length of the array, k = number of digits(average)
// number of times we sort is equal to the number of digits in the largest number
// * though it's argued that it's actually quasilinear O(n * log(n))

// space complexity = O(n + k)

// radix helpers
// getDigit(num, place) - returns the digit in num at the given place value

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

console.log(getDigit(7323, 2))

// digitCount(num) - returns the number of digits

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// mostDigits - given an array of numbers, return the number of digits in the largest number of the list

function mostDigits(arr) {
  let maxDigits = 0
  for (let num of arr) {
    maxDigits = Math.max(maxDigits, digitCount(num))
  }
  return maxDigits
}

console.log(mostDigits([43, 555, 6666, 1]))

// radix pseudocode
/*
- define a function that accepts list of numbers
- get mostDigits
- loop from k=0 up to mostDigits
- for each iteration of the loop
  - create buckets for each digit(0 to 9)
  - place each number in the corresponding bucked based on its kth digit
- replace our existing array with the values in the buckets
- return list at the end
*/

function radixSort(arr) {
  const maxDigitCount = mostDigits(arr)
  
  for (let k = 0; k < maxDigitCount; k++) {
    let buckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k)
      buckets[digit].push(arr[i])
    }
    arr = [].concat(...buckets)
  }
  return arr
}

console.log(radixSort([1, 10, 5342, 678, 65, 112, 100944]))