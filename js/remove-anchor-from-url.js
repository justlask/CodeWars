/*
Remove anchor from URL
7 kyu

Complete the function/method so that it returns the url with anything after the anchor (#) removed.

Examples:

// returns 'www.codewars.com'
removeUrlAnchor('www.codewars.com#about')

// returns 'www.codewars.com?page=1' 
removeUrlAnchor('www.codewars.com?page=1')

*/

//Lazy Answer
function removeUrlAnchor(url){
  // TODO: complete
  return url.split("#")[0]
}



//Long answer without split
function removeUrlAnchor(url) {
  // TODO: complete
  let noAnchor = ""
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== "#") {
      noAnchor += url[i]
    }
    else return noAnchor
  }
  return noAnchor
}