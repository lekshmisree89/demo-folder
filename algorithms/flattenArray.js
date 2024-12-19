//Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains 
//integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. 
//This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

// Examples
// flatten([1, [2, 3], 4, [5, [6, 7]], 8], 1) ➞ [1, 2, 3, 4, 5, [6, 7], 8]func



function flattenArr(arr,n){

    let result =[];
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i]) && n>0){//z
            result.push(...flattenArr(arr[i],n-1));//recursion to flatten the array ... is used to spread the array
        }else{
            result.push(arr[i]);
        }
    }
    return result;
}
 
console.log(flattenArr([1, [2, 3], 4, [5, [6, 7]], 8], 1));//[1, 2, 3, 4, 5, [6, 7], 8]