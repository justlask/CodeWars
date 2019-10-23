// Numericals of a String
// 6 kyu



// You are given an input string.

// For each symbol in the string if it's the first character occurence, replace it with a '1', else replace it with the amount of times you've already seen it...

// But will your code be performant enough?

// Examples:
// input   =  "Hello, World!"
// result  =  "1112111121311"

// input   =  "aaaaaaaaaaaa"
// result  =  "123456789101112"
// There might be some non-ascii characters in the string.



function numericals(s){
  let freq = {}
 return s.split("").map(elem => {
   if (freq[elem]) {
     freq[elem] += 1
     return freq[elem]
   }
   else {
   freq[elem] = 1
   return freq[elem]
   }
 }).join("")
}