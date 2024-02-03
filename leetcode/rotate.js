// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k %= nums.length;
    const reverse = (start, end) => {
        while (start < end) {
            const changeableNumber = nums[end];
            nums[end] = nums[start];
            nums[start] = changeableNumber;
            start++;
            end--;
        }
    }

    reverse(0, nums.length - 1);
    reverse(0, k - 1);
    reverse(k, nums.length - 1);
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([1,2], 3));
console.log(rotate([-1,-100,3,99], 2));