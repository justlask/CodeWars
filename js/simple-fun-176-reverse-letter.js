/*
Simple Fun #176: Reverse Letter
7 kyu

Task
Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".

Input/Output
[input] string str

A string consists of lowercase latin letters, digits and symbols.

[output] a string

*/

//with regex
function reverseLetter(str) {
  //coding and coding..
  str = str.replace(/[^a-z]/ig, "")
  return str.split("").reverse().join("")
}

// without regex
function reverseLetter(str) {
  //coding and coding..
  let alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result = ""
  str = str.split("").reverse().join("")
  for (let i = 0; i < str.length; i++) {
    let element = str[i]
    
    if (alphabet.includes(element)) result += element
  }
  return result
}