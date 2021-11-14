// My Solution
function solution(list){
    
    let currentSequence = [list[0]];
    let solution = [];
    
    for (var index = 1; index < list.length; index++){
        
        if ((currentSequence[currentSequence.length-1]) - (list[index]) === -1){
            currentSequence.push(list[index]);
        } else {
            if (currentSequence.length == 1){
                solution.push(currentSequence[0]);
            } else if (currentSequence.length == 2){
                solution.push(currentSequence[0]);
                solution.push(currentSequence[1]);
            } else {
                solution.push(currentSequence[0]+'-'+currentSequence[currentSequence.length-1]);
            }
            currentSequence = [list[index]];
        }
    }

    if (currentSequence.length == 1){
        solution.push(currentSequence[0]);
    } else if (currentSequence.length == 2){
        solution.push(currentSequence[0]);
        solution.push(currentSequence[1]);
    } else {
        solution.push(currentSequence[0]+'-'+currentSequence[currentSequence.length-1]);
    }

    return solution.join();
}

// Best Solution
function solution(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }