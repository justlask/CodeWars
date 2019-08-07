/*
Sort array by string length
7kyu

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

*/


// with .sort
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length - b.length)
};


// without .sort
function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  let count = 0
  while (count < array.length) {
    for (let i = 0; i < array.length-1; i++) {
      if (array[i].length > array[i+1].length) {
        [array[i], array[i+1]] = [array[i+1], array[i]]
      }
    }
    count++
  }
  return array
};
