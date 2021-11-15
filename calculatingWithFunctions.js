// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// My Solution
const numberFunction = (numberSelected, operationFunction) => 
  operationFunction ? operationFunction(numberSelected) : numberSelected;

const zero = (f) => numberFunction(0, f);
const one = (f) => numberFunction(1, f);
const two = (f) => numberFunction(2, f);
const three = (f) => numberFunction(3, f);
const four = (f) => numberFunction(4, f);
const five = (f) => numberFunction(5, f);
const six = (f) => numberFunction(6, f);
const seven = (f) => numberFunction(7, f);
const eight = (f) => numberFunction(8, f);
const nine = (f) => numberFunction(9, f);

const plus = (numberB) => (numberA) => numberA + numberB;
const minus = (numberB) => (numberA) => numberA - numberB;
const times = (numberB) => (numberA) => numberA * numberB;
const dividedBy = (numberB) => (numberA) => Math.floor(numberA / numberB);

// Best Solution
var n = function(digit) {
  return function(op) {
    return op ? op(digit) : digit;
  }
};
var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }

console.log(seven(times(five())));
console.log(four(plus(nine())));
console.log(eight(minus(three())));
console.log(two(dividedBy(six())));