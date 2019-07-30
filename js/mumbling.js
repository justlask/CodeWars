/*
Mumbling
7kyu

This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/



function accum(s) {
	// your code
  let mumble = []
  for (let i = 0; i < s.length; i++) {
    mumble.push(s[i].toUpperCase());
    for (let j = 0; j < i; j++) {
      mumble[i] += s[i].toLowerCase();
    }
  }
  return mumble.join('-')
}