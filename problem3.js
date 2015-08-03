// eulers project
// problem 3
// Andy Miller 2015

/* The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ? */

function factorial(num){
  var i = 2; 
    while (i < num - 1 && (!(num / i === 0))){
        i++; 
        if (num % i === 0){
            return factorial(num / i);
      	  }
        } 
    return num;
};
console.log(factorial(600851475143));