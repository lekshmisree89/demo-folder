const inquirer = require('inquirer');
const fs = require('fs');

// Prompts for user input
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'Where are you located?',
    },
    {
      type: 'input',
      name: 'bio',
      message: 'Write a short bio:',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'Enter your LinkedIn URL:',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub URL:',
    },
  ])
  .then((answers) => {
    // HTML template with user data
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portfolio of ${answers.name}</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f4f4f9;
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: white;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      color: #333;
    }
    .bio {
      margin: 20px 0;
      font-size: 18px;
      color: #555;
    }
    .links a {
      display: inline-block;
      margin-right: 10px;
      text-decoration: none;
      color: #0077b5;
    }
    .links a.github {
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>${answers.name}</h1>
    <h2>Location: ${answers.location}</h2>
    <p class="bio">${answers.bio}</p>
    <div class="links">
      <a href="${answers.linkedin}" target="_blank">LinkedIn</a>
      <a href="${answers.github}" target="_blank" class="github">GitHub</a>
    </div>
  </div>
</body>
</html>
    `;

    // Write the HTML file
    fs.writeFile('portfolio.html', htmlContent, (err) => {
      if (err) {
        console.error('Error writing the file', err);
      } else {
        console.log('Portfolio HTML generated successfully!');
      }
    });
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });

 