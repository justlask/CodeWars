/*
Array.diff
6kyu

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/

// with reduce
function array_diff(a, b) {
  return a.reduce((result, element) => {
    if (!b.includes(element)) {
    result.push(element) 
    }
    return result
  }, [])
}

// with .forEach
function array_diff(a, b) {
  let result = []
  a.forEach(element => {
    if (!b.includes(element)) result.push(element)
  })
  return result
}


// with .filter
function array_diff(a, b) {
  return a.filter(element => !b.includes(element))
}