/**
 * To Add the numbers without using + or - operator.
 * @param a
 * @param b
 * @returns {*}
 */
var getSum = function(a, b) {
    while(b!=0){
        let carry = a&b;
        a = a^b;
        b = carry<<1;
    }
    return a;
};

console.log(getSum(4,11))

