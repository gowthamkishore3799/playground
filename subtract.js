/**
 * To determine the subtraction of numbers without using a - operator
 * @param a
 * @param b
 * @returns {*}
 */
var getSubtract = function(a, b) {
   return (a+ (~b+1))
};






console.log(getSubtract(5,4))



