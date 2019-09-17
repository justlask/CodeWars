/*
Mexican Wave
6kyu
In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.
*/


function wave(word){
  // Code here
  let wave = []
  for(let i = 0; i < word.length; i++) {
    if (word[i] !== " ") wave.push(word.slice(0,i) + word[i].toUpperCase() + word.slice(i+1,word.length))  
  }
  return wave
}


// result = ["Hello", "hEllo", "heLlo", "helLo", "hellO"];
console.log(wave("hello"));

//result = ["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"];
//wave("codewars")

//result = [];
//wave("")

//result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
//wave("two words")

//result = [" Gap ", " gAp ", " gaP "];
//wave(" gap ")