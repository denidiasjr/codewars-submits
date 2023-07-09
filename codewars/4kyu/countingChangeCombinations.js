// https://www.codewars.com/kata/541af676b589989aed0009e7/

const countChange = (money, coins) => {

  const getRecursiveAmount = (coinsRemaining, currentTotal = 0) => {
    if ((coinsRemaining.length === 0) || currentTotal >= money) {
      return currentTotal === money ? 1 : 0;
    }

    const amountChanges = coinsRemaining.reduce((accum, coin, i) => {
      const coinsToCalculate = (coin + currentTotal < money) 
        ? coinsRemaining.slice(i) 
        : coinsRemaining.slice(i + 1);

      return accum + getRecursiveAmount(coinsToCalculate, coin + currentTotal)
    }, 0);
    
    return amountChanges;
  }

  return getRecursiveAmount(coins);
}

console.log(countChange(4, [1,2]));
console.log(countChange(10, [5,2,3]));
console.log(countChange(11, [5,7]));