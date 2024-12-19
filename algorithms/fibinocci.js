
// create a function that returns the nth number in the fibonacci sequence
//Fibonacci sequence is the series of numbers where each number is the sum of the two preceding numbers.

function fibonacci(n) {
    if (n <= 1) return n;//if n is less than or equal to 1, return n
    return fibonacci(n - 1) + fibonacci(n - 2);//
}

console.log(fibonacci(4));//3
