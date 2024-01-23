// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function plusMinus(arr: number[]): void {
    const total = arr.length;
    let positives = 0;
    let negatives = 0;
    let zeros = 0;

    arr.forEach(value => {
        if (value > 0) {
            positives++;
        } else if (value < 0) {
            negatives++;
        } else {
            zeros++;
        }
    });

    console.log((positives / total).toFixed(6));
    console.log((negatives / total).toFixed(6));
    console.log((zeros / total).toFixed(6));
}

plusMinus([1, 1, 0, -1, -1]);
plusMinus([-4, 3, -9, 0, 4, 1]);