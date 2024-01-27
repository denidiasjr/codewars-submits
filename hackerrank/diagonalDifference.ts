// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

function diagonalDifference(arr: number[][]): number {
    let leftToRightSum = 0;
    let rightToLeftSum = 0;
    let y = arr.length - 1;

    for (let i = 0; i < arr.length; i++) {
        leftToRightSum += arr[i][i];
        rightToLeftSum += arr[i][y];
        y--;
    }

    return Math.abs(leftToRightSum - rightToLeftSum);
}

console.log(diagonalDifference([
    [1,2,3],
    [4,5,6],
    [9,8,9]
]))