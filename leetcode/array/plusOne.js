// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const result = [...digits];
    let index = digits.length - 1;

    while (index >= 0) {
        if (result[index] !== 9) {
            result[index]++;
            break;
        }
        
        if (index === 0) {
            result[index] = 1;
            result[digits.length] = 0;
            break;
        }

        result[index] = 0;
        index--;
    }

    return result;
};

console.log(plusOne([1,2,3]));
console.log(plusOne([4,3,2,1]));
console.log(plusOne([1]));
console.log(plusOne([9]));
console.log(plusOne([1,9,9]));
console.log(plusOne([9,9,9]));
console.log(plusOne([4,5,9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));