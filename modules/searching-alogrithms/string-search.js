// naive string search
// - count the number of times a character appears in a string

// define a function string search that takes two strings
// - loop over the longer string
// - loop over the shorter string
  // if the characters dont match, return inner looop
  // if the characters match keep going
  // if you find a match, increment the counter


function stringSearch(long, short) {
  let counter = 0

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i + j] !== short[j]) {
        break
      }
      if (j === short.length - 1) {
        counter++
      }
    }
  }
  return counter
}


console.log(stringSearch("lorie loled", "lol"))