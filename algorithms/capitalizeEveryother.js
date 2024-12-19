function capitalizeEveryother(str) {
  return str.split('').map((char, i) => {
    return i % 2 === 0 ? char.toUpperCase() : char;
  }).join('');
}

console.log(capitalizeEveryother('hello')); // 'HeLlO'

function capital(string){
    let result ='';

    for(let i = 0; i < string.length; i++){
        if(i % 2 === 0){
            result += string[i].toUpperCase();
        }else{
            result += string[i].toLowerCase();
        }
    }
    return result;
}
console.log(capital('HELLOWORLD'));//HeLlO