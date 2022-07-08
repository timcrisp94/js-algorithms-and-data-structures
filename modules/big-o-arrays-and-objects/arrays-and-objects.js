// objects

let instructor = {
  firstName: "Kelly",
  isInstructor: true,
  favoriteNumbers: [1, 2, 3, 4]
}

/*
Big O of Objects
- Insertion, Removal, Access/Update : O(1)
- Searching : O(N)

Big O of Object Methods
- keys, values, entries : O(n)
- hasOwnProperty : O(1)
*/

// arrays

let names = ["michael", "melissa", "andrea"]
let values = [true, {}, [], 2, "awesome"]

/*
recall : arrays are ordered

Big O of Arrays
- Insertion, Removal : depends
- Searching : O(N)
- Access : O(1)
-- access = names[0]

Insertion : using .push() : O(1)
  - using .unshift() : O(N) bc we need to reindex existing elements
Same for Removal : .pop() : O(1), .shift() : O(N)

Big O of Array Methods
- concat : O(N)
- slice, splice : O(N)
- sort : O(N * log N)
- forEach, map, reduce, filter, etc : O(N)
*/









/*
*/
/*
*/