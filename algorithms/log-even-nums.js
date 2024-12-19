// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
  for (var i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
};
logEvenNums(40);

// Alternatively, this problem could have been solved by incrementing i by 2 instead of 1

// var logEvenNums = function (num) {
//   for (var i = 0; i <= num; i += 2) {
//     console.log(i);
//   }
// };
function logOdd(number){
for (let i =1; i <= number; i++){
  if(i % 2 !== 0){
    console.log(i); 

  }
}
  }
 logOdd(15);