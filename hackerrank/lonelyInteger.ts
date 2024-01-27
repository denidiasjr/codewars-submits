// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

function lonelyinteger(a: number[]): number {
    return a.reduce((result, value) => result ^ value);
}

console.log(lonelyinteger([1,2,3,4,3,2,1]));