// Write code to create a function that accepts 
//a string and returns an object containing the number 
//of times each character appears in the string

var characterCount = function(str) {
    return str.split('').reduce((acc, char) => {//split the string into an array of characters, 
        //then reduce the array to an object
        if (acc[char]) {//acc is the accumulator object
            acc[char]++;//
            //if the character is already in the object, increment the count
        } else {
            acc[char] = 1;//
        }
        return acc;
    }
    , {});
}
console.log(characterCount('hello')); // { h: 1, e: 1, l: 2, o: 1 }


// var characterCount = function(str) {
//     const count = {};
//     for (let i = 0; i < str.length; i++) {
//        const currentChar = str[i];
//          if (!count[currentChar]) {
//             count[currentChar] = 1;
//         }
//         else {
//             count[currentChar]++;
//         }
//     return count;
// }
// console.log(characterCount('hello')); // { h: 1, e: 1, l: 2, o: 1 }