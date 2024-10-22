// Write code to return the the number of vowels in `str`

 //vowels- aeiou
var vowelCount = function(str) {
let vowels = 'aeiou'.toLowerCase();
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i]) === true) {
        count++;
    }
};
return count;
};

console.log(vowelCount("ahellaaa")); // 2


//using regular expression

var vowelCount = function(str) {
    return str.match(/[aeiou]/gi).length;
}
