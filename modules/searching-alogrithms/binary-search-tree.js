
// binary search algo
// - accepts a sorted array and a value
// - create a left pointer at the start of the array, a right at the end
// - while the left pointer comes before the right pointer
  // - create a pointer in the middle
  // if you find the value ypu want, retun
  // if the value is too small, move the left pointer up
  // too large, right pointer down
// if value is not in array, return -1
console.log('hi')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function binarySearch(arr, value) {
  let start = arr[0]
  let end = arr.at(-1)
  let middle = Math.floor((start + end) / 2)

  while (arr[middle] !== value && start <= end) {
    if (value < arr[middle]) end = middle - 1
    else start = middle + 1
    middle = Math.floor((start + end) / 2)
  }
  return arr[middle] === value ? middle : -1
}

console.log(binarySearch(numbers, 16))
console.log(binarySearch(numbers, 5))
console.log(binarySearch(numbers, 2))

// O (log n)