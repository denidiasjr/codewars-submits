// https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/

const chooseBestSum = (t, k, ls) => {
  if (ls.length < k) {
    return null;
  }

  const getClosestValue = (values, valueToReach) => {
    return values.filter((value) => value <= valueToReach).sort((a, b) => b - a)[0] || null;
  }

  let sameDistanceFound = false;

  const sumOfValues = (levelsRemaining, nextValues, accum = 0) => {
    if (levelsRemaining === 0 || sameDistanceFound) {
      return accum;
    }
    
    if (nextValues.length === 0) {
      return null;
    }

    const valuesSum = [];

    for (let i = 0; i < nextValues.length; i++) {
      if (sameDistanceFound) {
        break;
      }

      valuesSum.push(
        sumOfValues(levelsRemaining - 1, nextValues.slice(i + 1), accum + nextValues[i])
      );
    }

    const closestValue = getClosestValue(valuesSum, t);

    if (t === closestValue) {
      sameDistanceFound = true;
    }

    return closestValue;
  }

  return sumOfValues(k, ls);
}

console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));