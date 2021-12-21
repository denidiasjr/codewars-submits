// https://www.codewars.com/kata/52b757663a95b11b3d00062d

function longestConsec(strarr, k) {
    
    var longestString = "";

    if (strarr < k){
        return "";
    }

    for (var i = 0; i < strarr.length; i++){
        
        var currentString = "";

        // Check if size is over
        if ((i+k) > strarr.length ){
            return longestString;
        }

        // Generate current string
        for (var j = i; j < (i + k); j++){
            currentString += strarr[j];
        }

        // Check if current string is the longest
        if (currentString.length > longestString.length){
            longestString = currentString;
        }
    }

    return longestString;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));