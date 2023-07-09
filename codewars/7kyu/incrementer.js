// https://www.codewars.com/kata/590e03aef55cab099a0002e8

const incrementer = (nums) => (
  nums.map((val, index) => {
    let sum = val + index + 1;
    if (sum >= 10) {
      const sumAsArray = String(sum).split('');
      return Number(sumAsArray[sumAsArray.length - 1]);
    }
    return sum;
  })
);

console.log(incrementer([1, 2, 3]));
console.log(incrementer([4, 6, 9, 1, 3]));