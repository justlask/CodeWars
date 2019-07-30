/*
Sum of two lowest positive integers
7kyu

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/




// Lazy solution
function sumTwoSmallestNumbers(numbers) {  
  //Code here
  numbers.sort(function (a,b) {return a - b})
  return numbers[0] + numbers[1]
}


//Longways with es6 destructuring
function sumTwoSmallestNumbers(numbers) {
  let count = 0;
  while (count < numbers.length) {
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > numbers[i+1]) {
        [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]]
      }
    }
    count++
  }
  return numbers[0] + numbers[1]
}

