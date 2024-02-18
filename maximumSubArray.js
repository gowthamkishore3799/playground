/**
 * To find the maximum sub array in js
 *
 * Either a number can be maximum or the sum of previous numbers be maximum
 * It can be solved using two pointer or dp as well
 *
 *
 * Two pointer :::===>>>
 *
 * @param nums
 */
const maxSubArray = function(nums) {
    let max = Number.MIN_SAFE_INTEGER;
    let currentMax = 0




    for(let num of nums){
        currentMax = Math.max(num, currentMax+num)
        max = Math.max(currentMax, max);
    }
    return max;
}


console.log(maxSubArray([5,4,-1,7,8]))
