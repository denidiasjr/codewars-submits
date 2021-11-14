// My solution
function solution(string) {
    let phrase = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase() && i != 0){
            phrase += ' ';
        }
        phrase += string[i];
    }
    return phrase;   
}

// Best solution
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));  
}

console.log(solution('DeniDiasDaSilvaJunior'));