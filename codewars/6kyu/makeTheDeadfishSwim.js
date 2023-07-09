// https://www.codewars.com/kata/51e0007c1f9378fa810002a9

const parse = (data) => {
  let calculatedValue = 0;
  return data.split('').reduce((accum, value) => {

    switch (value) {
      case 'i':
        calculatedValue++;
        break;
      case 'd':
        calculatedValue--;
        break;
      case 's':
        calculatedValue = calculatedValue ** 2;
        break;
      case 'o':
        return [...accum, calculatedValue];
      default:
        break;
    }

    return accum;
  }, []);
};

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));