// https://leetcode.com/problems/number-of-islands/

function numIslands(grid: string[][]): number {
    // The places visited will be stored as 'x,y'.
    const placesVisited = new Set();
    let numberOfIslands = 0;

    if (grid.length === 0) {
        return 0;
    }

    const rowsLength = grid.length;
    const columnsLength = grid[0].length;

    const markIslandBoundaries = (row: number, column: number) => {
        const currentPlace = `${row},${column}`;
        const hasPlaceBeenVisited = placesVisited.has(currentPlace);
        const isOutOfBounds = (
            row < 0 ||
            column < 0 ||
            row >= rowsLength ||
            column >= columnsLength ||
            grid[row][column] === '0'
        );

        if (hasPlaceBeenVisited || isOutOfBounds) {
            return;
        }

        placesVisited.add(currentPlace);
        markIslandBoundaries(row - 1, column);
        markIslandBoundaries(row + 1, column);
        markIslandBoundaries(row, column + 1);
        markIslandBoundaries(row, column - 1);
    };

    for (let row = 0; row < rowsLength; row++) {
        for (let column = 0; column < columnsLength; column++) {
            const currentPlace = `${row},${column}`;
            const hasPlaceBeenVisited = placesVisited.has(currentPlace);
            const hasLand = grid[row][column] === '1';

            if (hasLand && !hasPlaceBeenVisited) {
                markIslandBoundaries(row, column);
                numberOfIslands++;
            }
        }
    }

    return numberOfIslands;
};

/**
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
 */

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]));
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]));