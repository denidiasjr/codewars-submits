// https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function(number) {
  number = ""+number;

  if (number.indexOf('.') == -1){
    return Number.parseInt(number);
  }

  floatNumber = number[number.indexOf('.')+1];


  if (floatNumber >= 5){
    return Number.parseInt(number.substring(0,number.indexOf('.')))+1;
  } else {
    return Number.parseInt(number.substring(0,number.indexOf('.')));
  }
};
  
Math.ceil = function(number) {
  number = ""+number;

  if (number.indexOf('.') == -1){
    return Number.parseInt(number);
  } else {
    return Number.parseInt(number.substring(0,number.indexOf('.')))+1;
  }
};
  
Math.floor = function(number) {
  return Number.parseInt(number);
};

console.log(Math.ceil(2.1));