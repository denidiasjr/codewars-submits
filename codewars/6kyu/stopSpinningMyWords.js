// https://www.codewars.com/kata/5264d2b162488dc400000001

function spinWords(){
    return spinWords.arguments[0].split(' ').map((x,i) => x.length >= 5 ? x.split('').reverse().join('') : x ).join(' ');    
}

console.log(spinWords('Hey fellow warriors'));