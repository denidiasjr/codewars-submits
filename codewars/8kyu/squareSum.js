// https://www.codewars.com/kata/515e271a311df0350d00000f/

const squareSum = (numbers) => numbers.reduce((accum, value) => accum + (value ** 2), 0);

console.log(squareSum([1, 2, 2]));