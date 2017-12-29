function toWeirdCase(string){
    return string.split(' ').map( (x,i) => x.split('').map( (x,i) => (i % 2 == 0) ? x.toUpperCase() : x.toLowerCase()  ).join('') ).join(' ');
}

console.log(toWeirdCase('Deni Dias da Silva Junior'));
