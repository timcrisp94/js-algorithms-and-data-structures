// selection sort is similar to bubble sort, but instead places smaller values
// time - 0(n^2) - slightly more efficient than bubble, but not terribly efficient

/* selection sort pseudocode
- store the first element as the smallest value
- compare this to the next item in the array until you find the smallest number
- if a smaller number is found, designate the smaller number to be the new min and continue until the end of the array
- the minimum is not the initial value you began with, swap the two values
- repeate unti the array is sorted
*/

const numbers = [5, 7, 3, 2, 1]

function selectionSort(arr) {  
  for (let i = 0; i < arr.length; i++) {
    let min = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    if (i !== min ) {
    let temp = arr[i]
    arr[i] = arr[min]
    arr[min] = temp
    }
  }
  return arr
}

console.log(selectionSort(numbers))