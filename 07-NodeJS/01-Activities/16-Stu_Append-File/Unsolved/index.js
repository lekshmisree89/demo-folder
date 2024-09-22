// TODO: What are we importing?// import node library package

import fs from 'fs';

// TODO: Add comments to explain each of the three arguments 
//of appendFile()
//logtxt :file path where data needs to be appended.process.argv[2] is the data and 
//the third argument passed via the command line.err() is call back fn
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works//same as if else 
  // in a singel line of code
  err ? console.error(err) : console.log('Commit logged!')
);
 