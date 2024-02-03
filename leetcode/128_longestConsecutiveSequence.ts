// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
    const values = new Set(nums);
    let longestSequence = 0;

    if (nums.length === 0) {
        return 0;
    }

    const getIncrementSequence = (currentValue: number, sum: number = 0): number => {
        const hasValue = values.has(currentValue);

        if (!hasValue) {
            return sum;
        }

        values.delete(currentValue);
        return getIncrementSequence(currentValue + 1, sum + 1);
    };

    function getDecrementSequence(currentValue: number, sum: number = 0): number {
        const hasValue = values.has(currentValue);

        if (!hasValue) {
            return sum;
        }

        values.delete(currentValue);
        return getDecrementSequence(currentValue - 1, sum + 1);
    }

    for (const value of values.keys()) {
        const countDecrement = getDecrementSequence(value - 1);
        const countIncrement = getIncrementSequence(value + 1);
        const currentSequence = countDecrement + countIncrement + 1;
        values.delete(value);

        if (currentSequence > longestSequence) {
            longestSequence = currentSequence;
        }
    }

    return longestSequence;
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,2,0,1]));
console.log(longestConsecutive([0,1,2,3,4,5,6,7,8]));
console.log(longestConsecutive([0]));
console.log(longestConsecutive([0,0]));
console.log(longestConsecutive([]));