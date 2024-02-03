// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/727/


/**
 * Lessons learned: it was better if done using only one while loop with the J moving forward
 * To change the previous i value. 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let j = 1;

    for (let i = 0; i <= nums.length; i++) {
        while (nums[j] === nums[i]) {
            j++;
        }

        nums[i + 1] = nums[j];

        if (nums[i + 1] === undefined) {
            nums.length = (i + 1);
            break;
        }
    }

    return nums.length;
};

console.log(removeDuplicates([1,1,2,2,2,3,4,5,5,6,8,8]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
