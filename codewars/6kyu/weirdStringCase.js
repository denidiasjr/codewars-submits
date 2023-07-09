// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function toWeirdCase(string){
    return string.split(' ').map( (x,i) => x.split('').map( (x,i) => (i % 2 == 0) ? x.toUpperCase() : x.toLowerCase()  ).join('') ).join(' ');
}

console.log(toWeirdCase('Deni Dias da Silva Junior'));