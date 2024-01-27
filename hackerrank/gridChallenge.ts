// https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four

function gridChallenge(grid: string[]): string {
    let result = 'YES';
    const gridReordered = grid.map(
        text => text.split('')
                    .map(letter => letter.charCodeAt(0))
                    .sort((a, b) => a - b)
    );

    for (let y = 0; y < gridReordered[0].length; y++) {
        for (let x = 0; x < gridReordered.length - 1; x++) {
            if (gridReordered[x][y] > gridReordered[x + 1][y]) {
                result = 'NO';
                break;
            }
        };

        if (result === 'NO') {
            break;
        }
    };

    return result;
};

console.log(gridChallenge(['abc', 'ade', 'efg']));
console.log(gridChallenge(['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']));
console.log(gridChallenge(['abc', 'lmp', 'qrt']));
console.log(gridChallenge(['mpxz', 'abcd', 'wlmf']));
console.log(gridChallenge(['abc', 'hjk', 'mpq', 'rtv']));