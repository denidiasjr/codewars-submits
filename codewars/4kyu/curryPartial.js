//https://www.codewars.com/kata/53cf7e37e9876c35a60002c9/train/javascript

function curryPartial(fn, ...args) {
  
  if (args.length >= fn.length) {
    return fn.apply(this, args);
  } 
  
  return function(...newArgs) {
    return curryPartial.apply(this, [fn, ...args.concat(newArgs)])
  }
}

const a = 1;
const b = 2;
const c = 3;

function add(a, b, c) {
  return a + b + c;
}

// Examples of use
console.log(curryPartial(add)(a)(b)(c))
console.log(curryPartial(add, a)(b)(c))
console.log(curryPartial(add, a)(b, c))
console.log(curryPartial(add, a, b, c))
console.log(curryPartial(add, a, b, c, 20))
console.log(curryPartial(add)(a, b, c))
console.log(curryPartial(add)()(a, b, c))
console.log(curryPartial(add)()(a)()()(b, c))
console.log(curryPartial(add)()(a)()()(b, c, 5, 6, 7))
console.log(curryPartial(curryPartial(curryPartial(add, a), b), c))
console.log(curryPartial(curryPartial(add, a, b), c))
console.log(curryPartial(curryPartial(add, a), b, c))
console.log(curryPartial(curryPartial(add, a), b)(c))
console.log(curryPartial(curryPartial(add, a)(b), c))
console.log(curryPartial(curryPartial(curryPartial(add, a)), b, c))