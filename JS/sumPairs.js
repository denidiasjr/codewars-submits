// First solution (didn't  worked by performance issues)
const sumPairs = (listOfNumbers, sumValue) => {
  let indexToJump = 1;
  let turn = 1;
  let chosenNumbers;

  while ((turn < listOfNumbers.length)) {
    for (let i = 0; i < listOfNumbers.length - turn; i++) {
      if (listOfNumbers[i] + listOfNumbers[i + indexToJump] === sumValue) {
        chosenNumbers = [listOfNumbers[i], listOfNumbers[i + indexToJump]];
        break;
      }
    }

    if (chosenNumbers) {
      break;
    }
    
    turn++;
    indexToJump++;
  }

  return chosenNumbers;
}

// Final solution
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

// Best solution
const sumPairs = function(ints, s) {
  const seen = {}
  for (let i = 0; i < ints.length; ++i) {
    if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
    seen[ints[i]] = true
  }
}

// console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));
// console.log(sumPairs([4, 3, 2, 3, 4], 6));
// console.log(sumPairs([0, 0, -2, 3], 2));
// console.log(sumPairs([11, 3, 7, 5], 10));