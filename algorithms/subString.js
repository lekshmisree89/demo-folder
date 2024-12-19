//Given a string s, find the length of the longest substring without repeating characters.

//Example 1:
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.

//Example 2:
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.


//Example 3:

//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.

//Example 4:
//Input: s = ""
//Output: 0

  function subString(s){
    let longest = 0;
    let seen = { };
    let start = 0;
    for (let i = 0; i < s.length; i++){//'bbb' 
      let char = s[i];//e
      if(seen[char]){// seen[char]=1
        start = Math.max(start, seen[char]);
      
        //return the largest number between start and seen[char]
        //if the character is seen before, we will start from the next character
      }
      longest = Math.max(longest, i - start + 1);//i - start + 1 is the length of the substring
      seen[char] = i + 1; 
    }
    return (longest );

  }
    console.log(subString("aruuupan"));//3
 