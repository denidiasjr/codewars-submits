// https://www.codewars.com/kata/5269452810342858ec000951

// My Solution
const isValidCoordinates = (coordinates) => {
  if (!/^\-?\d+\.?\d*, \-?\d+\.?\d*$/.test(coordinates)) {
    return false;
  }

  const [latitude, longitude] = coordinates.split(', ').map(value => Number(value));

  if (latitude < -90 || latitude > 90 || longitude < -180 || longitude > 180) {
    return false;
  }

  return true;
}

// Best Solution
function isValidCoordinates(coordinates){
  var match = coordinates.match(/^[-]?(\d+(?:\.\d+)?), [-]?(\d+(?:\.\d+)?)$/);
  if (!match) { return false; }
  var lat = Math.abs(parseFloat(match[1]));
  var lng = Math.abs(parseFloat(match[2]));
  return lat >= 0 && lat <= 90 && lng >= 0 && lng <= 180;
}

// Clever Solution
function isValidCoordinates(coordinates){
  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/.test(coordinates)
}

// True
console.log(isValidCoordinates('-23, 25'));
console.log(isValidCoordinates('24.53525235, 23.45235'));
console.log(isValidCoordinates('04, -23.234235'));
console.log(isValidCoordinates('43.91343345, 143'));
console.log(isValidCoordinates('4, -3'));

// False
console.log(isValidCoordinates('23.234, - 23.4234'));
console.log(isValidCoordinates('2342.43536, 34.324236'));
console.log(isValidCoordinates('N23.43345, E32.6457'));
console.log(isValidCoordinates('99.234, 12.324'));
console.log(isValidCoordinates('6.325624, 43.34345.345'));
console.log(isValidCoordinates('0, 1,2'));
console.log(isValidCoordinates('0.342q0832, 1.2324'));
