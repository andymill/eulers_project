// euler's project
// problem 5
// Andy Miller 2015

/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */

function isDivisibleBy(num, max){
    for (var i = 1; i <= max; i++){
        if (num % i !== 0){
            return false; 
        }
    }
    return true; 
}

function main(){
  var breakPoint = 1225224000;
  var i=1000000; 
  while (i<breakPoint && !(isDivisibleBy(i, 20))){
      i++;
  }
  return i; 
}
         
console.log(main());
