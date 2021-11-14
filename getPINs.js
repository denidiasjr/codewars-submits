// https://www.codewars.com/kata/5263c6999e0f40dee200059d

// My Solution
function getPINs(observed) {

  const possibilitiesByNumber = [
    ['8', '0'],
    ['1', '2', '4'],
    ['1', '2', '3', '5'],
    ['2', '3', '6'],
    ['1', '4', '5', '7'],
    ['2', '4', '5', '6', '8'],
    ['3', '5', '6', '9'],
    ['4', '7', '8'],
    ['5', '7', '8', '9', '0'],
    ['6', '8', '9']
  ];

  return observed.split('').reduce((currentSequence, enterNumber, index) => {
    if (index === 0) {
      return possibilitiesByNumber[enterNumber];
    } 

   return currentSequence.reduce((nextSequence, expectedNumber) => [
        ...nextSequence,
        ...possibilitiesByNumber[enterNumber].map(possibleNumber => 
          `${expectedNumber}${possibleNumber}`
        )
    ], []);
  }, []);
}

// Best solution
function getPINs(observed) {
  return observed.split('')
  .map( t => ({
    '0': [ '0', '8' ],
    '1': [ '1', '2', '4' ],
    '2': [ '1', '2', '3', '5' ],
    '3': [ '2', '3', '6' ],
    '4': [ '1', '4', '5', '7' ],
    '5': [ '2', '4', '5', '6', '8' ],
    '6': [ '3', '5', '6', '9' ],
    '7': [ '4', '7', '8' ],
    '8': [ '5', '7', '8', '9', '0' ],
    '9': [ '6', '8', '9' ]
  }[t]))
  .reduce((pre, cur)=> [].concat.apply([], pre.map(t => cur.map(g => t + g))));
}
