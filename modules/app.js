// quick sort
//  - also works with recursion
//  - selecting one element ("pivot"), comparing elements to the left and right

// time complexity is O(log(n)) - worst case is O(n^2) but only if we pick a crappy pivot

// pseudocode for quick sort 
/*
-- Pivot Helper 
- given an array, designate an element as the pivot
- it should then rearrange the elements in the array so that all values less than the pivot are moved to the left of the pivot, or greater values to the right
- the order of the elements on either side of the pivot doesn't matter
- helper should do this in place; it should not create a new array
- helper should return the index of the pivot

- pivot should be chosen so that it's roughly the median value in the data set
- position of the pivot will affect 

*/

function pivot(arr, start = 0) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= arr.length - 1; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }

  // Swap the pivot from the start the swapPoint
  swap(arr, start, swapIdx);
  return swapIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1){
  if(left < right){
      let pivotIndex = pivot(arr, left, right) //3
      //left
      quickSort(arr, left, pivotIndex - 1);
      //right
      quickSort(arr, pivotIndex + 1, right);
    }
   return arr;
} 
         
console.log(quickSort([100,-3,2,4,6,9,1,2,5,3,23]))