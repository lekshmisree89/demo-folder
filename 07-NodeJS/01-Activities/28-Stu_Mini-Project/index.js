//DEPENDENCIES
import inquirer from 'inquirer';
import fs from 'fs';

inquirer
  .prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your name?',
    
    },
    {
    type: 'input',
    name: 'location',
    message: 'What is your location?',
    
  },
  {
    type: 'input',
    name: 'bio',
    message: 'Write a short bio here about you',
  },
  {
    type: 'input',
    name: 'linkedin',
    message: 'Please enter your LinkedIn URL:',
  },
  {
    type: 'input',
    name: 'github',
    message: 'please enter your GitHub URL:',
  },

  ])
  
  .then((response) =>{
    console.log(response);
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel ="stylesheet" href="styles.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"><title>Dmini project nodejs</title>
</head>
<body>
    <h1>Hi my name is ${response.username}</h1>
    <p>My location is  ${response.location}</p>
    <div class ="container">
    <div class ="bio">
        ${response.bio}
        <div>
    </div class="link">
    <h3>MY LINKEDIN :</h3>
        <a href=" ${response.linkedin}">Linkedin URL</a>
        <br>
        <h3>MY GITHUB :</h3>
        <a href = "${response.github}">Github URL</a>
    </div>
   </div>
</body>
</html>`
;

   fs.writeFile('template.html',htmlContent,(err)=>
  
      err ? console.error(err) : console.log('Success!')
   )
  
  
    })
  
    .catch((error) => {
      console.error('An error has  occurred', error);
    });