/*
String incrementer
5kyu

Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:
foo -> foo1
foobar23 -> foobar24
foo0042 -> foo0043
foo9 -> foo10
foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.

*/


function incrementString (strng) {
  // // return incrementedString
  // let str = strng.split(/[0-9]+/)[0]
  // let num = Number(strng.split(/[a-zA-Z]+/)[1])
  // if (strng === undefined) return 1
  // else {
  //   num +=1
  //   console.log(str.concat(String(num)))
  // }
    // return incrementedString
    let str = strng.split(/[0-9]+$/)[0]
    let num = strng.split(/^[a-zA-Z]+/)[1]
    if (strng === "") console.log(1)
    else if (num.includes(0))  console.log(num.split(/[[0]*1-9+]/))
    else console.log(str.concat(Number(num)+1))
}


incrementString("foobar000") //, "foobar001");
incrementString("foo") //, "foo1");
incrementString("foobar001") //, "foobar002");
incrementString("foobar99")//, "foobar100");
incrementString("foobar099")//, "foobar100");
incrementString("")//, "1");