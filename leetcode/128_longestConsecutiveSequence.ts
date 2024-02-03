// https://leetcode.com/problems/longest-consecutive-sequence/description/

function longestConsecutive(nums: number[]): number {
    const valuesVisited = new Map<number, boolean>();
    let longestSequence = 0;

    if (nums.length === 0) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        valuesVisited.set(nums[i], false);
    }

    const getIncrementSequence = (value: number, sum: number = 0): number => {
        const hasValueBeenVisited = valuesVisited.get(value);
        const valueExists = hasValueBeenVisited !== undefined;

        if (!valueExists || hasValueBeenVisited) {
            return sum;
        }
        
        valuesVisited.set(value, true);
        return getIncrementSequence(value + 1, sum + 1);
    };

    function getDecrementSequence(value: number, sum: number = 0): number {
        const hasValueBeenVisited = valuesVisited.get(value);
        const valueExists = hasValueBeenVisited !== undefined;


        if (!valueExists || hasValueBeenVisited) {
            return sum;
        }

        valuesVisited.set(value, true);
        return getDecrementSequence(value - 1, sum + 1);
    }

    for (const value of valuesVisited.keys()) {
        const hasValueBeenVisited = valuesVisited.get(value);
        if (!hasValueBeenVisited) {
            const countDecrement = getDecrementSequence(value - 1);
            const countIncrement = getIncrementSequence(value + 1);
            const currentSequence = countDecrement + countIncrement + 1;

            if (currentSequence > longestSequence) {
                longestSequence = currentSequence;
            }
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