// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function splitStrings(str) {

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

console.log(splitStrings("abcdef"));