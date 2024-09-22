import inquirer from 'inquirer';
import colors from 'colors';

inquirer
  .prompt([
    {
        type: 'input',
        name: 'text',
        message: 'What text would you like to log?',
    
    },
    {
        type: 'input',
        name: 'whyText',
        message: 'Why?',
    
    },
    {
        type:'list',
        name:'selectedColor',
        message:"What color would you like to use?",
        choices:["red", "blue", "green", "yellow", "cyan",  "magenta"],
    },
  ])
  .then((answers) => {
    
    console.log(colors[answers.selectedColor](answers.text));

    // Use user feedback for... whatever!!
  })

  .catch((error) => {
    console.log(error); 
    if (error.isTtyError) {
       
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });