// ex
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`) // ~ 1.2 sec 

function addUpTo2(n) {
  return n * (n + 1) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`) // ~ .000028 sec

// Operation one has multiple assignments and additions per iteration; Operation two has three operations

// Two is O(1), constant
// One is O(n), linear

// two for loops - O(n)
// a for loop and a nested for loop - 0(n^2), quadratic

/*

Constants don't matter

O(2n) = O(n)
O(500) = O(1)
O(13n^2) = O(n^2)

Smaller Terms don't matter

O(n + 10) = O(n)
O(n^2 + 5n) = O(n^2)

Shorthand
1. Arithmetic operations are constant O(1)
2. Variable assignment is constant
3. Accessing elements in an array using an index or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens in the loop (almost always liner)

*/

/*  -- SPACE COMPLEXITY --

How much memory do we need to allocate in order to run the code in our algorithm

- Rules -

-Most primitives are constant space
-Strings require O(n) space (where n is the string length)
-Reference types are generall O(n), where n is the length (for arrays, objects) 
*/

function sum(arr) {
  let total = 0
  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
}

// in this function we have two variables; the loop does not affect space
// this function takes up O(1) space

function double(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i])
  }
  return newArr
}

// newArr contains n numbers
// this function takes O(n) space