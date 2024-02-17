/**
 * To identify if there are any duplicates in the function
 *
 * Worst case is : to use nested loop
 * Best case is to use hashmap
 * @param nums
 */


var containsDuplicate = function(nums) {
    if(nums.length<=1){
        return false
    }
    const numHasHMap = new Map();


    for(let num of nums){
        if(numHasHMap.has(num)) return true
        else numHasHMap.set(num, true)
    }

    return false
}

console.log(containsDuplicate([1,2,3]))