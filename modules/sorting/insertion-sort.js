// insertion sort - builds up gradually by creating a larger left portion which is always sorted
// also O(n^2)

/*
- start with arr[1]
- compare arr[1] with arr [0] and swap if necessary
- move to the next element, if it is in the incorrect position, iterate through the sorted elements and insert in the correct place
- repeat until the array is sorted
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    let j = i - 1
    while((j >= 0) && (currentVal < arr[j])) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))