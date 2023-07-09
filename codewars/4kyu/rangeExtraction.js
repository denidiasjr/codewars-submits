// https://www.codewars.com/kata/51ba717bb08c1cd60f00002f

function rangeExtraction(list) {
    
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
