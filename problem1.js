// euler's project
// problem 1
// Andy Miller 2015

/* If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.*/


function findMultiples(a,b){
    var multiples = [];
    while (b > 0) {
        b = --b;
        if (b % a === 0) {
            multiples.push(b);
        }
    }
  return multiples 
}

multiplesOfThree = findMultiples(3,1000);
multiplesOfFive = findMultiples(5,1000);

function isInArray(value, array) {
  return array.indexOf(value) > -1;
}

// merge the two arrays and delete duplicates
function mergeArrays(array1, array2){
    array3 = []
    for (var i = 0; i < array1.length; i++) {
        //check to see if element is in second array
        if (!(isInArray(array1[i], array2))) {
            array3.push(array1[i]);
        }
    }
    return array3.concat(array2);
}

// sum final array
multiplesOfThreeAndFive = mergeArrays(multiplesOfThree, multiplesOfFive);
