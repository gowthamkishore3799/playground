var productExceptSelf = function(nums) {

    let leftMultiplication = [], rightMultiplication = [];

    leftMultiplication[0] = 1;
    rightMultiplication[nums.length-1] = 1
    for(let i=1; i<nums.length; i++){
        leftMultiplication[i] = leftMultiplication[i-1] * nums[i-1];
    }


    for(let i=nums.length-2; i>=0; i--){
        console.log(i)
        rightMultiplication[i] = rightMultiplication[i+1] * nums[i+1] ;
        console.log(rightMultiplication[i])
    }


    let multiplication = []

    for(let i =0; i< nums.length; i++){
        multiplication[i] = leftMultiplication[i] * rightMultiplication[i]
    }
    console.log(multiplication)
}

console.log(productExceptSelf([-1,1,0,-3,3]))