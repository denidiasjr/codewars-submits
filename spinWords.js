
// My Solution
function spinWords(){
    return spinWords.arguments[0].split(' ').map((x,i) => x.length >= 5 ? x.split('').reverse().join('') : x ).join(' ');    
}

// Best solution
function spinWords(words){
    return words.split(' ').map(function (word) {
      return (word.length > 4) ? word.split('').reverse().join('') : word;
    }).join(' ');
}

console.log(spinWords('Hey fellow warriors'));