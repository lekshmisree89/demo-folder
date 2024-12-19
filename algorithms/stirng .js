function processString(input) {
  // Result array to simulate a dynamic string builder
  const result = [];

  // Iterate through each character of the input string
  for (const char of input) {
    if (char === '*') {
      // If '*' is encountered, remove the last character from result if available
      if (result.length > 0) {
        result.pop();
      }
    } else {
      // Otherwise, push the character onto the result array
      result.push(char);
    }
  }

  // Join the array into a string and return the result
  return result.join('');
}

// Example usage
const inputString = "abc*de*f*";
const result = processString(inputString);
console.log(result); // Output: "ad"
