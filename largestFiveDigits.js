
// My solution
function solution(digits){
  
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

// Best solution
function solution(digits){
    if (digits.length <= 5) return Number(digits);
    return Math.max(Number(digits.substr(0, 5)), solution(digits.substr(1)));
}

console.log(solution(1234567890));