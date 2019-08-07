/*
Disemvowel Trolls
7 kyu

Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

*/

//with regex
function disemvowel(str) {
  return str.replace(/[aeiou]/ig, "")
}


//without regex
function disemvowel(str) {
  let result = ""
  let vowels = "aeiou"
  for (let i = 0; i < str.length; i++) {
    let element = str[i]
    if (!vowels.includes(element.toLowerCase())) result += element
  }
  return result
}