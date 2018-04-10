// My solution
var sum_pairs=function(ints, s){
    
    var k = 1;

    while (k < ints.length){
        
        for (var i = 0; i < ints.length; i++){
            
            if ((i+k) >= ints.length){
                break;
            }

            if ((ints[i]+ints[i+k]) == s){
                return [ints[i],ints[i+k]];
            }   
        }
        k++;
    }
}

console.log(sum_pairs([10,5,2,3,7,5],10));