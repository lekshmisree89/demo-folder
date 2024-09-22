import inquirer from 'inquirer';
import 'colors';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?'.brightMagenta,
      name: 'username',
    },
    {
    type: 'list',
    name: 'communication',
    message: 'What is your preferred method of communication?'.brightMagenta,
    choices: ['Email', 'Phone', 'Text'],
  },
  {
    type: 'checkbox',
    name: 'languages',
    message: 'What languages do you know?'.brightMagenta,
    choices:['JavaScript', 'Python', 'C++'],
  },

  ])
  .then((response) =>{
  console.log(response);
  const data = JSON.stringify(response,null," /s");
 fs.writeFile('log.txt',data,(err)=>

    err ? console.error(err) : console.log('Success!')
 )


  })

  .catch((error) => {
    console.error('An error occurred:', error);
  });