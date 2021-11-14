function validSolution(board){
    
    // Check by line and column
    for (var i = 0; i < board.length; i++){

        var countLine = [0,0,0,0,0,0,0,0,0];
        var countColumn = [0,0,0,0,0,0,0,0,0];

        var grid = 0;
        
        for (var j = 0; j < board.length; j++){

            countLine[board[i][j]-1]++;
            countColumn[board[j][i]-1]++;
        }       

        if (countLine.join('') != '111111111' || countColumn.join('') != '111111111'){
            return false;
        } 
    }

    // Check by grid 3x3
    for (var gridI = 0; gridI < 9; gridI = gridI + 3){

        for (var gridJ = 0; gridJ < 9; gridJ = gridJ + 3){

            var countGrid = [0,0,0,0,0,0,0,0,0];

            for (var i = gridI; i < gridI + 3; i++){
                for (var j = gridJ; j < gridJ + 3; j++){
                    
                    countGrid[board[i][j]-1]++;
                }
            }

            if (countGrid.join('') != '111111111'){
                return false;
            }
        }
    }

    return true;
}

// Best solution
function validSolution(board){
    var validSet = s => s.size == 9 && !s.has(0);
    var rowSet = i => board[i].reduce((s,v) => s.add(v), new Set());
    var columnSet = i => board.reduce((s,v) => s.add(v[i]), new Set());
    var boxSet = ([r,c]) => board.slice(r,r+3).reduce((s,v) => v.slice(c,c+3).reduce((s,v) => s.add(v), s), new Set());
    var boxCorner = i => [Math.floor(i / 3) * 3,(i % 3) * 3];
    for (var i = 0; i < 9; i++)
      if ( !validSet(rowSet(i)) || !validSet(columnSet(i)) || !validSet(boxSet(boxCorner(i))) )
        return false;
    return true;
}

console.log(validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2], 
    [6, 7, 2, 1, 9, 0, 3, 4, 8],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
  ]));