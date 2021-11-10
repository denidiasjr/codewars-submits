// My solution
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

// console.log(sumPairs([10,5,2,3,7,5], 10));
// console.log(sumPairs([4, 3, 2, 3, 4], 6));
// console.log(sumPairs([0, 0, -2, 3], 2));
console.log(sumPairs([11, 3, 7, 5], 10));