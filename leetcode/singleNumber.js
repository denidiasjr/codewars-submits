// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/549/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    return nums.reduce((result, value) => result ^ value, 0);
};

console.log(singleNumber([2,2,1]));
console.log(singleNumber([4,1,2,1,2]));
console.log(singleNumber([1]));