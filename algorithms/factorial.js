// Write code to create a function that returns the factorial of `num`
//3! = 3 * 2 * 1 = 6
//4! = 4 * 3 * 2 * 1 = 24
//(0,1,2)
// var factorial = function(num) {
//        let result = 1;//variable to store the result
//     for (let i = num; i >0; i--) {
//         result = i*result;//i=4, result = 1, 4*1=4, 3*4=12, 2*12=24, 1*24=24
//     }   
//     return result;
// }
// console.log(factorial(4));

// console.log(factorial(3));



function factorial(num){

     let result = 1;
      for (let i=num; i>0;i--){
        result = i*result
      }

      return result;

}

console.log(factorial(0));
