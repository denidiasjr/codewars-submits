// https://www.codewars.com/kata/54da5a58ea159efa38000836/

const findOdd = (list) => {
  const listOfOccurences = list.reduce((accum, value) => {
    !accum[value] ? accum[value] = 1 : accum[value]++;
    return accum
  }, {});

  return Object.entries(listOfOccurences).reduce((accum, value) => {
    accum = (accum === null && value[1] % 2 !== 0) ? Number(value[0]) : accum;
    return accum;
  }, null);
}

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]));
console.log(findOdd([1,1,2]));
console.log(findOdd([7]));
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));
console.log(findOdd([3,3,1]));