//Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution,
//and you may not use the same element twice.


//You can return the answer in any order.

// Find the two numbers from an array whose sum is equal to a given target
//number
//Example 1:
 function twoSum(nums, target) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
        if(nums[i] + nums[j] === target){
            return `${nums[i]} , ${nums[j]}`
        }
        }
    }
}
console.log(twoSum([3,2,4 ],6)); // [0, 1]

