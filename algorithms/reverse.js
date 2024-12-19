//reverse String
var str = "hello";
function reverseString(str) 
{
    return str.split("").reverse().join("");
}

console.log(reverseString(str));

 function reverseString(str) {
    let reversed = '';
    for(let i =0;i<str.length;i++){
        reversed = str[i] + reversed;//reversed = h, e+h, l+eh, l+leh, o+lleh, olleh
    }



    return reversed;

 }



    console.log(reverseString('lek'));



     function reverseString(str) {
        let reversed = '';
        for(let char of str){//for of loop to iterate over the string
            reversed = char + reversed;
        }
    
    
        return reversed;
    
     }  

        console.log(reverseString('appu nair'));



        var arr =[1,2,3,4,5,6,7,8,9,10];
        console.log(arr.reverse());

        console.log(arr.split().join(""));
         
 
           
function reverseString(str){
  let reverse ='';

  for(char of str){
      reverse =char + reverse;

              
  } return (`${reverse} is the reversed string`)
}

console.log(reverseString('appu'));

let array =[1,2,3,4,5,6,7,8,9];
  array.reverse();
  

    console.log(array);
    array.join(" ");
    console.log(array);

    
