// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/578/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const indexes = new Set();
    let hasNumberDuplicated = false;
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const isSameNumber = start !== end && nums[start] === nums[end];
        const alreadyHasNumber = indexes.has(nums[start]) || indexes.has(nums[end]);

        if (isSameNumber || alreadyHasNumber) {
            hasNumberDuplicated = true;
            break;
        }
        
        indexes.add(nums[start]);
        indexes.add(nums[end]);
        start++;
        end--;
    };

    return hasNumberDuplicated;
};

console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
console.log(containsDuplicate([0,4,5,0,3,6]));
console.log(containsDuplicate([1000000000,1000000000,11]));