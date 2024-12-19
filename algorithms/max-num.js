// Write code to return the largest number in the given array

function maxNum(arr){

let max = arr[0];

for (let i=0;i<arr.length;i++){
  

  let currentNum = arr[i];
  if(currentNum>max){

    max= currentNum;
  }
}


return max;



}

console.log(maxNum([1,89,87,655,43]));