//Anagram Check:
//Given two strings, check to see if they are anagrams. 
//An anagram is when the two strings can be written using the exact same 
//letters (so you can just rearrange the letters to get a different phrase or word).

function anagramCheck(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }
    let frequencyCounter1 = {};//object to store the frequency of each character in the string
    let frequencyCounter2 = {};//object to store the frequency of each character in the string
    for(let val of str1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        //if the character is not in the object, add it to the object
    }
    for(let val of str2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }
    for(let key in frequencyCounter1){
        if(!(key in frequencyCounter2)){
            return false;
        }
        if(frequencyCounter2[key] !== frequencyCounter1[key]){
            return false;
        }
    }
    return true;
}

console.log(anagramCheck("kels", "leks"));//true