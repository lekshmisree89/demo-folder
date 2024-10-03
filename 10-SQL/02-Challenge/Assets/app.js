import inquirer from 'inquirer';  // ES module import
import { viewDepartments } from './department.js';  // Import the function using ES module syntax

async function start() {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: ['View all departments', 'Exit'],
    }
  ]);

  switch (answers.action) {
    case 'View all departments':
      await viewDepartments();  // Call the imported function
      break;

    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }
}

// Start the application
start();
