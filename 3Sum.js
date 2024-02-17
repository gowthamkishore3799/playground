/**
 * To find the 3 sum of numbers,
 *
 *
 * Worst case, use nested for loops
 * Other approach is to use a two pointer problem.
 *
 */


const threeSum = function(nums){
    nums = nums.sort((a,b)=>{
        return a-b;
    })

    const result = []

    let hashMap = new Map()
    for (let i=0; i< nums.length-2; i++){
        let left = i+1;
        let right = nums.length-1;



        while(left<right){
            let sum = nums[i]+ nums[left]+nums[right];
            if(sum===0 && !hashMap.has(`${nums[i]}${nums[left]}${nums[right]}`)){
                hashMap.set(`${nums[i]}${nums[left]}${nums[right]}`, true)
                result.push([nums[i], nums[left], nums[right]])
            } else if(sum>0){
                right--;
            } else {
                left++;
            }
        }
    }
    return result
}


console.log(threeSum( [-1,0,1,2,-1,-4]))