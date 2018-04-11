// My Solution
var palindromeChainLength = function(n) {
    
    let chain = 0;

    while (String(n).split('').reverse().join('') != n){
        chain++;
        n += Number(String(n).split('').reverse().join(''));
    }

    return chain;
};

// Best Solution
var palindromeChainLength  = function(n) {  
    var x = parseInt( (""+n).split('').reverse().join('') );
    if(n != x){
      return 1 + palindromeChainLength (n + x);
    }
    return 0;
};