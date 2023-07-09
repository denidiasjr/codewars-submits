// https://www.codewars.com/kata/54d81488b981293527000c8f

const sumPairs = (listOfNumbers, sumValue) => {
  
  const matchNumbers = new Map();
  let chosenNumbers;

  for (let i = 0; i < listOfNumbers.length; i++) {
    const numberDiff = sumValue - listOfNumbers[i];

    if (matchNumbers.has(listOfNumbers[i])) {
      chosenNumbers = [matchNumbers.get(listOfNumbers[i]), listOfNumbers[i]];
      break;
    } 
    
    matchNumbers.set(numberDiff, listOfNumbers[i]);
  }

  return chosenNumbers;
}

console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
console.log(sumPairs([4, 3, 2, 3, 4], 6));
console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([11, 3, 7, 5], 10));