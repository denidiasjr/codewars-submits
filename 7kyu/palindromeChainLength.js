// https://www.codewars.com/kata/525f039017c7cd0e1a000a26

var palindromeChainLength = function(n) {
    let chain = 0;
    while (String(n).split('').reverse().join('') != n){
        chain++;
        n += Number(String(n).split('').reverse().join(''));
    }

    return chain;
};
