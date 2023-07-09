// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

/**
 * Lessons learned: I could use Math.max and run the array once summing if (i+1 - i) is
 * greater than 0
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let sum = 0;
    let i = 0;
    let j;

    while (i < prices.length) {
        if (prices[i] < prices[i + 1]) {
            sum = sum - prices[i];
            j = i + 1;

            while ((prices[j] <= prices[j + 1]) || j === prices.length) {
                j++;
            }

            sum = sum + prices[j];
            i = j + 1;
        } else {
            i++;
        }
    }

    return sum;
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,1,3,5,3,4,6]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));   