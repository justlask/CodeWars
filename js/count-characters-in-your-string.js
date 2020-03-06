// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

/*

The main idea is to count all the occurring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

What if the string is empty ? Then the result should be empty object literal { }

For C#: Use a Dictionary<char, int> for this kata!

*/

function count (string) {  
  let counts = {}
  // The function code should be here
  for (let i = 0; i < string.length; i++) {
    if (!counts[string[i]]) counts[string[i]] = 1
    else counts[string[i]] += 1
  }
   return counts;
}