//  //var char  ='abccdcslfewccccc';

// // //maps and objects can be used here

// // function maxChar(str){
// //      const charmap ={};
// // for (let char of str){
// //      if (charmap[char]){
// //         charmap[char]=charmap[char] + 1
// //      }else{
// //         charmap[char] =1
// //      }

// //      }return charmap

// // }


// //  console.log(maxChar('arung23223umar'))

// function maxChar(str) {
//     const charMap = {}
//     let max = 0
//     let maxChar = ''
//     for (let char of str) {
//         if (charMap[char]) {//charMap[char] is the value of the key cha
//             charMap[char] = charMap[char] + 1
//         } else {
//             charMap[char] = 1
//         }
//     }
//     for (let key in charMap) {
//         if (charMap[key] > max) {
//             max = charMap[key]
//             maxChar = key
//         }
//     }
//     return maxChar
// }




//console.log(maxChar('appu'));

function maxChar(str) {
    charMap = {};
    max = 0;
    maxChar = '';
    for (let char of str) {
        if (charMap[char]) {
            charMap[char]++;


        } else {
            charMap[char] = 1;
        }



    }
    for (let key in charMap) {
        if (charMap[key] > max) {
            max = charMap[key];
            maxChar = key;
        }

    }return maxChar;
}

    console.log(maxChar('123345444444'));