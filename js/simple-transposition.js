//Simple Transposition
// 6kyu


// Simple transposition is a basic and simple cryptography technique. We make 2 rows and put first a letter in the Row 1, the second in the Row 2, third in Row 1 and so on until the end. Then we put the text from Row 2 next to the Row 1 text and thats it.

// Complete the function that recieves a string and encrypt it with this simple transposition.



function simpleTransposition(text) {
  let arr = [[],[]]
  
  let anew = text.split("").forEach((letter, i) => {
    if (i % 2 === 0) arr[0].push(letter)
    else arr[1].push(letter)
  })
   return arr[0].join("") + arr[1].join("")
}


function simpleTransposition(text) {
  let first = ""
  let second = ""
  
  for (let i = 0; i < text.length; i++) {
    (i % 2 === 0) ? first += text[i] : second += text[i]
  }

  return first + second
}