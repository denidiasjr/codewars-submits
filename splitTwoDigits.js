
// My solution
function solution(str){

    var result = [];

    for (var i = 0; i < str.length; i = i+2){
        if (typeof str[i+1] == 'undefined'){
            result.push(str[i]+"_");
            return result;
        } else {
            result.push(str[i]+str[i+1]);
        }
    }

    return result;
}

// Best solution
function solution(str) {
    return (str.length % 2 ? str + '_' : str).match(/../g);
}

console.log(solution("abcdef"));