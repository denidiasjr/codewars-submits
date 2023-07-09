// https://www.codewars.com/kata/58235a167a8cb37e1a0000db

const numberOfPairs = (gloves) => {
  const glovesCounter = gloves.reduce((accum, value) => {
    !accum[value] ? accum[value] = 1 : accum[value]++;
    return accum;
  }, {});

  return Object.values(glovesCounter).reduce((accum, value) => (
    accum + Math.floor(value / 2)
  ), 0);
};

console.log(numberOfPairs(["red","green","red","blue","blue"]));
console.log(numberOfPairs(["red","red","red","red","red","red"]));
console.log(numberOfPairs(['red','red']));
console.log(numberOfPairs(['red','green','blue']));
console.log(numberOfPairs(['gray','black','purple','purple','gray','black']));