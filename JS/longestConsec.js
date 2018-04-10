// My solution
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

// Best Solution
function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2));