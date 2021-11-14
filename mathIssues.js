// My solution
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

// Best solution
Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

console.log(Math.ceil(2.1));