// TODO: Import `basicmath.js`

import mathOperation from './basicmath.js';


// TODO: Capture the values passed from the command line 
//into these three variables: `operation`, `numOne` and `numTwo`

const operation  = process.argv [2];

const numOne = Number(process.argv[3]);
const numTwo = Number(process.argv[4]);

// TODO: Create a `switch` statement that accepts an
// `operation` parameter

switch(operation){
    case 'sum':
        console.log(mathOperation.sum(numOne, numTwo));
        break;
    case 'difference':
        console.log(mathOperation.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(mathOperation.product(numOne, numTwo));
        break;
    case 'quotient':
        console.log(mathOperation.quotient(numOne, numTwo));
        break;
    default:{
        console.log('error');
    }


}
// and each `case` uses the corresponding `maths` method

// to perform each math operation on the two numbers, `numOne` and `numTwo`
