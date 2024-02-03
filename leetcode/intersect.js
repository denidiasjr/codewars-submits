// https://leetcode.com/explore/featured/card/top-interview-questions-easy/92/array/674/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numbersFromArray1 = {};
    const numbersFromArray2 = {};
    const result = [];

    nums1.forEach(num => {
        if (numbersFromArray1[`${num}`] === undefined) {
            numbersFromArray1[`${num}`] = 0;
        }

        numbersFromArray1[`${num}`]++
    });

    nums2.forEach(num => {
        if (numbersFromArray2[`${num}`] === undefined) {
            numbersFromArray2[`${num}`] = 0;
        }

        numbersFromArray2[`${num}`]++
    });

    Object.entries(numbersFromArray1).forEach(([key, valueFromArray1]) => {
        const valueFromArray2 = numbersFromArray2[key];

        if (!valueFromArray2) {
            return;
        }

        const numberOfOcurrences = valueFromArray1 > valueFromArray2 ? valueFromArray2 : valueFromArray1;


        for (let i = 0; i < numberOfOcurrences; i++) {
            result.push(Number(key));
        }

    });

    return result;
};

console.log(intersect([1,2,2,1], [2,2]));
console.log(intersect([4,9,5], [9,4,9,8,4]));
console.log(intersect(
    [43,85,49,2,83,2,39,99,15,70,39,27,71,3,88,5,19,5,68,34,7,41,84,2,13,85,12,54,7,9,13,19,92], 
    [10,8,53,63,58,83,26,10,58,3,61,56,55,38,81,29,69,55,86,23,91,44,9,98,41,48,41,16,42,72,6,4,2,81,42,84,4,13]
));


