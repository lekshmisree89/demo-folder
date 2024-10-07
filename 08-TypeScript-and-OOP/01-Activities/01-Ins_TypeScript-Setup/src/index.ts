import inquirer from 'inquirer';

// Recursive function to calculate the nth Fibonacci number
const fibonacci = (n: number): number => {
    if (n <= 0) return 0;   // Base case for n = 0
    if (n === 1) return 1;   // Base case for n = 1
    return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
};

// Function to prompt user for input
const getInput = async (): Promise<void> => {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'nth',
            message: 'Enter the position of the Fibonacci sequence (n):',
            validate: (input) => {
                const value = parseInt(input);
                return !isNaN(value) && value >= 0 ? true : 'Please enter a valid non-negative integer.';
            },
        },
    ]);

    const n = parseInt(answers.nth);
    const result = fibonacci(n);
    console.log(`The ${n}th element of the Fibonacci sequence is: ${result}`);
};

// Start the application
getInput();
