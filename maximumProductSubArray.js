/**
 * To find the maximum product sub array
 *
 *
 *
 */
var maxProduct = function(nums) {
    let max =nums[0] , min = nums[0], maxProduct = nums[0];
    for(let i=1; i< nums.length; i++){
        if(nums[i] <0){
            [max, min] = [min, max];
        }
        max = Math.max(nums[i], max* nums[i])
        min = Math.min(nums[i], min*nums[i])


        maxProduct = Math.max(max, maxProduct);

    }

    return maxProduct
}

console.log(maxProduct([2,3,-2,4]))
