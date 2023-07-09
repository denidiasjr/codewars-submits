// https://www.codewars.com/kata/5208f99aee097e6552000148

function breakCamelCase(string) {
    let phrase = '';
    for (var i = 0; i < string.length; i++){
        if (string[i] == string[i].toUpperCase() && i != 0){
            phrase += ' ';
        }
        phrase += string[i];
    }
    return phrase;   
}

console.log(breakCamelCase('DeniDiasDaSilvaJunior'));