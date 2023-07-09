// https://www.codewars.com/kata/51675d17e0c1bed195000001

function largestFiveDigits(digits) {
  
    // Gambiarra para converter em string
    digits = ""+digits;

    var maiorValor = 0;

    for (var i = 0; i + 4 < digits.length; i++){
        var valor = parseInt(digits.substring(i,i+5));
        if (valor > maiorValor){
            maiorValor = valor;
        }        
    }

    return maiorValor;
}

console.log(largestFiveDigits(1234567890));