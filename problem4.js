// euler's project
// problem 4
// Andy Miller 2015

/* A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

// brute force is you iterate and check .. feels like nested for loops

function isPalindrome(checkMe){
    pal = checkMe.toString(); 
    // must be even length
    if (pal.length % 2 === 0) {
        // compare each element 
        for (var i = 0; i < pal.length / 2; i++){
            if (!(pal[i] === pal[(pal.length - 1) - i])) {
              return false; 
            } 
        }
      return true; 
    } else {
      return false; 
    }
}

// make and array of all products of 3 digit numbrs
var bigArray = [];
for (var i = 999; i > 0; i--) {
    for (var j = 999; j > 0; j--){
        bigArray.push(i*j); 
    }
}

// filter array for palindromes
var palindromes = bigArray.filter(isPalindrome);
console.log(Math.max.apply(Math, palindromes));
