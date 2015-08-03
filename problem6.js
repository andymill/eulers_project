// euler's project
// problem 6
// Andy Miller 2015

/* The sum of the squares of the first ten natural numbers is,
12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers
and the square of the sum is 3025 − 385 = 2640. Find the difference between the sum of the squares
of the first one hundred natural numbers and the square of the sum. */


// make array of natural numbers
function makeArray(length){
    var array = [];
    for (var i = 1; i <= length; i++){
        array.push(i);
    }
    return array; 
}

oneHundred = makeArray(100);
console.log(oneHundred);

// use map to square each number
var squares = oneHundred.map(function(num) {
  return Math.pow(num,2)}); 

// use reduce to sum an array
var sumOfSquares = squares.reduce(function(a, b) {
  return a + b});

// use reduce to sum an array and then square it
var sum = oneHundred.reduce(function(a, b) {
  return a + b});

var squaredSum = Math.pow(sum,2);

console.log(squaredSum - sumOfSquares);
