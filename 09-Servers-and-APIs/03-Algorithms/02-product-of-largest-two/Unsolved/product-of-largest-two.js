// Write code to create a function that
// accepts an array of numbers, finds the largest two numbers, and returns the product of the two
//
var productOfLargestTwo = function(arr) {
   for (var i = 0; i < arr.length; i++) {
       for (var j = 0; j < arr.length; j++) {
           if (arr[j] > arr[j + 1]) {//if the current element is 
            //greater than the next element
               var temp = arr[j];//swap the two elements
               arr[j] = arr[j + 1];//swap the two elements
               arr[j + 1] = temp;//swap the two elements
           }
       }
    }
    return arr[arr.length - 1] * arr[arr.length - 2];//return the product of the two largest numbers
}

console.log(productOfLargestTwo([2, 8,9,6])); // 12
 var productOfLargestTwo = function(arr) {
    arr.sort((a, b) => a - b);//sort the array in ascending order
    return arr[arr.length - 1] * arr[arr.length - 2];//return the product of the two largest numbers
}

