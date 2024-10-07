// Write code to return the largest number in the given array
let  arr=[20,9,3,23, 10];
let  maxNum = function (arr) {
   //at first the max is first number in arr;
    // let max = arr[0];
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] > max) {
    //     max = arr[i];
    //     }
    // };
    // return max;

    return Math.max(...arr);
};

console.log(maxNum(arr));
