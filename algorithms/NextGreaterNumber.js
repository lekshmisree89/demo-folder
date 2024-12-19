function findNextGreaterNumber(n) {
    const digits = n.toString().split("").map(Number);
    //45668=>[4,5,6,6,8]
  
    // Step 1: Find the first digit (pivot) that is smaller than the digit to its right, from right to left
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
      i--;//i=2
    }
  
    // If no such digit exists, the number is the largest permutation
    if (i < 0) {
      return "not possible";
    }
  
    // Step 2: Find the smallest digit on the right of `digits[i]` that is greater than `digits[i]`
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }
  
    // Step 3: Swap `digits[i]` and `digits[j]`
    [digits[i], digits[j]] = [digits[j], digits[i]];
  
    // Step 4: Reverse the digits to the right of `i` to get the smallest possible number
    const result = [
      ...digits.slice(0, i + 1),
      ...digits.slice(i + 1).reverse(),
    ].join("");
  
    return result;
  }
  
  // Example usage:
  console.log(findNextGreaterNumber(218765)); // Output: 251678
  console.log(findNextGreaterNumber(4321));   // Output: "not possible"
  console.log(findNextGreaterNumber(1234));   // Output: 1243
  console.log(findNextGreaterNumber(45668));  
  