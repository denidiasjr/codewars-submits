
// My solution
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

// Best solution
function validParentheses(string){
    var tokenizer = /[()]/g, // ignores characters in between; parentheses are
        count = 0,           // pretty useless if they're not grouping *something*
        token;
    while(token = tokenizer.exec(string), token !== null){
       if(token == "(") {
          count++;
       } else if(token == ")") {
          count--;
          if(count < 0) {
             return false;
          }
       }
    }
    return count == 0;
 }

console.log(validParentheses('(())((()())())'));