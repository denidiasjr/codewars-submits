// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

// Only five items
function miniMaxSum(arr: number[]): void {
    const sum = arr.reduce((total, value) => total + value, 0);        
    let maximum = -1;
    let minimum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        const diff = sum - arr[i];
        if (diff >= maximum) {
            maximum = diff;
        } 
        
        if (diff <= minimum) {
            minimum = diff;
        }
    }

    console.log(minimum, maximum);
}

// If has unlimited array length
function miniMaxSumUnlimited(arr: number[]): void {
    let maximum = -1;
    let minimum = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;        
        for (let y = 0; y < arr.length; y++) {
            if (i === y) {
                continue;
            }
            sum += arr[y];
        }
        if (sum >= maximum) {
            maximum = sum;
        }
        
        if (sum <= minimum) {
            minimum = sum;
        }
    }

    console.log(minimum, maximum);
}

miniMaxSum([1, 3, 5, 7, 9]);
miniMaxSum([1, 2, 3, 4, 5]);
