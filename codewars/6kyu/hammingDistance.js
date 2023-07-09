// https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

const hamming = (a, b) => (
	Array.from(a).reduce((accum, value, index) => (
    value !== b[index] ? (accum + 1) : accum
  ), 0)
)

console.log(hamming("I like turtles","I like turkeys"));
console.log(hamming("Hello World","Hello World"));