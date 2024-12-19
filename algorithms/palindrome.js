

 function palindrome (str){
     var  newstr = str.split('').reverse().join('')
     if (newstr=== str){
        return true
     }
     return false


  }
console.log(palindrome('mallu'));

function palindrome(str) {

    let newstr = str.split('').reverse().join('')
    if (newstr === str) {
        return (`${newstr} is  a palindrome`)

    }
    return (`${newstr} is not  a palindrome`)

}

console.log(palindrome('malayalam'))
console.log(palindrome('malayaaalkdlam'))


  function isPalindrome(str){
    var palindrome = str.split('').reverse().join('')
    if (palindrome === str){
        return true
  }
  return false;
}
 console.log(isPalindrome('racecarwe'));
// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. 

// --- Examples:
//   palindrome("kayak") === true
//   palindrome("madam") === true
//   palindrome("codingmoney") === false
