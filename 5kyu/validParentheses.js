// https://www.codewars.com/kata/52774a314c2333f0a7000688

function validParentheses(parens){
    
    var check = 0;
    for (var i = 0; i < parens.length; i++){
        
        if (parens[i] == '('){
            check++;
        } else {
            check--;
        }

        if (check < 0){
            return false;
        }
    }

    return check == 0 ? true : false;
}

console.log(validParentheses('(())((()())())'));