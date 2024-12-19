// Write code to return the the number of vowels in `str`

function vowelCount(str) {

  let result = 0;

  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < str.length; i++) {

    let letter = str[i].toLowerCase();
    if (letter === 'a' ||
      letter === 'e' ||
      letter === 'i' ||
      letter === 'o' ||
      letter === 'u') {
      result = result + 1;
    }
  }


  return result;


}




var vowelCount = function(str) {
  var result = 0;
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var i = 0; i < str.length; i++) {
    var letter = str[i].toLowerCase();

    if (vowels.indexOf(letter) !== -1) { 
      result += 1;
    }
  }

  return result;

};

console.log(vowelCount('hello'));
console.log(vowelCount('aaaaa'));


