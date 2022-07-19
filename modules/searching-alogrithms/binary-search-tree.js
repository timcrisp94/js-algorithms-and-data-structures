const states = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Federated States of Micronesia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Marshall Islands','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming']

// binary search algo
// - accepts a sorted array and a value
// - create a left pointer at the start of the array, a right at the end
// - while the left pointer comes before the right pointer
  // - create a pointer in the middle
  // if you find the value ypu want, retun
  // if the value is too small, move the left pointer up
  // too large, right pointer down
// if value is not in array, return -1

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function binarySearch(arr, value) {
  let start = arr[0]
  let end = arr.at(-1)
  let middle = Math.floor((start + end) / 2)
  
  while(arr[middle] !== value && start <= end) {
    if (value < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    } 
  }
  return arr[middle] === value ? middle : -1
}

console.log(binarySearch(numbers, 16))
console.log(binarySearch(numbers, 5))
console.log(binarySearch(numbers, 2))

// O (log n)