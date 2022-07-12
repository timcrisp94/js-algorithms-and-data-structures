// all intermediate patterns have a time complexity of O(n log(n))

// merge sort 
// - O(n)
// exploits the fact that arrays of 0 or 1 are always sorted
// works by decomposing an array into smaller arrays or 0 or 1 elements and then builds back up

const numbers = [8, 3, 5, 4, 7, 6, 1, 2]

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right))
}

function merge(left, right) {
  let result = [], leftIndex = 0, rightIndex = 0

  // concatenate values into result array in order
  while(leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  // concat to retrieve the remaining value in either right or left
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

console.log(mergeSort([21, 12, 2, 18, 25]))