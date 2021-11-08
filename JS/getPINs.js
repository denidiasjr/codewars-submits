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

  let expectations = [];
  const observedArray = observed.split('');

  observedArray.forEach((enterNumber, index) => {
    if (index === 0) {
      return expectations.push(...possibilitiesByNumber[enterNumber]);
    } 

    let nextNumberSequence = [];

    expectations.forEach(expectedNumber => {
      nextNumberSequence = [
        ...nextNumberSequence,
        ...possibilitiesByNumber[enterNumber].map(possibleNumber => 
          `${expectedNumber}${possibleNumber}`
        )
      ];
    });

    expectations = nextNumberSequence;
  });

  return expectations;
}

console.log(getPINs("369"))