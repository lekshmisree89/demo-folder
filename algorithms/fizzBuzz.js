//Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example//



function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
        console.log('Fizz Buzz');
        } else if (i % 3 === 0) {
        console.log(`${i} Fizz`);
        } else if (i % 5 === 0) {
        console.log(`${i} Buzz`);
        } else {
        console.log(i);
        }
    }
    }
  fizzBuzz(15);

  function fizz(arr){
    for (let i=1;i<arr.length;i++){
        if(i% 15 === 0){
            console.log('Fizz Buzz');
        }
        else if(i% 3 === 0){
            console.log('Fizz');
        }
        else if(i% 5 === 0){
            console.log('Buzz');
        }
        else{
            console.log(`${i} is not fizz or buzz`)

    }
  }
}

fizz([1,2,3,4,5,6,7,8,9,10,15]);