// fs is a Node standard library package for reading and writing files
import fs from 'fs';

// TODO: Complete the `writeToLog` function such that 
//it will take in data and use it to write to a file called `
//log.txt`.

const writeToLog = (message) => {
  fs.appendFile('log.txt',message,(err)=>{
    if (err) {
      console.log('error');
    } else {
      console.log('success');
    }
  }
)};

// the `addFunc` function will add two values that are passed in
const addFunc = (x, y) => {
  let message;

  // This conditional validates whether the correct amount of 
  //inputs have been provided
  if (y === undefined) {
    message = 'Error: Incorrect number of arguments passed';
    // TODO: Set the `message` variable to a string 
    //that explains that an incorrect number of 
    //arguments have been passed in.

    writeToLog(message);
    // TODO: Call the `writeToLog` function 
    //and pass in the `message` as an argument.

  } else {
    const num1 = Number.parseInt(x);
    const num2 = Number.parseInt(y);


    // TODO: Set the `message` variable to the `num1` and num2`
    // TODO: Call the `writeToLog` function and pass 
    //in the `message` as an argument.
   
      const sum = num1 + num2;
      // Set the `message` variable to the 
      //sum of `num1` and `num2`
      message = `sum is  ${sum}`;
    }
  

writeToLog(message);
}
// call the `addFunc` passing in a number and a string.
addFunc(process.argv[2], process.argv[3]);
