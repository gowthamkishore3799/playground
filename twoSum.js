/**
 * To find the sum of two numbers which adds up to the target
 *
 *
 * Basically, we have two solutions
 *
 * Worst case: Run a nested for loop
 * Best case: Subtract target with an element in array and add it in hashmap, the result of subtraction, if its already in hashmap, it means its in array
 *
 *
 *
 */


const twoSum = function(nums, target) {
    const hashMap = new Map();
    for(let i =0; i< nums.length; i++){
        let diff = target - nums[i]
        if(hashMap.has(diff)){
            return [hashMap.get(diff), i]
        } else {
            hashMap.set(nums[i],i)
        }
    }
};


console.log(twoSum([2,7,11,15], 9))