/**
 * Problem to find the max profit i can make by selling the stock
 *
 * best case : Two pointer solution
 * worst case: nested for loop
 * Example:  [7,1,5,3,6,4]
 *
 *
 * @param prices
 */
var maxProfit = function(prices) {
    let left = 0, right = left+1;

    let maxProfit = 0

    while(right< prices.length){
        if(prices[left] > prices[right]){
            left=right;
            right = left+1;
        } else {
            maxProfit = Math.max(maxProfit, (prices[right]-prices[left]))
            right++
        }
    }
    return maxProfit
}


console.log(maxProfit([7,1,5,3,6,4]))