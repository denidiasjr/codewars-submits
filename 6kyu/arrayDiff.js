// https://www.codewars.com/kata/523f5d21c841566fde000009

const arrayDiff = (a, b) => a.filter(value => !b.includes(value));

console.log(arrayDiff([1,2,3], [1,2]));
console.log(arrayDiff([1,8,2], []));
console.log(arrayDiff([3,4], [3]));
console.log(arrayDiff([], [4,5]));
console.log(arrayDiff([1,2,2,2,3],[2]));