// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

function timeConversion(s: string): string {
    const timeMatch = s.match(/^(\d\d):\d\d:\d\d(AM|PM)$/);

    if (!timeMatch) {
        return s;
    }

    const hours = timeMatch[1];
    const period = timeMatch[2];
    const convertedTime = s.replace(period, '');
    const hoursRegex = /^\d\d/;

    if (period === 'AM') {
        return hours === '12' ? convertedTime.replace(hoursRegex, '00') : convertedTime;
    } 
    
    return hours !== '12' ? convertedTime.replace(hoursRegex, `${(Number(hours) + 12)}`) : convertedTime;
}

console.log(timeConversion('12:01:17AM'));
console.log(timeConversion('12:12:43AM'));
console.log(timeConversion('12:40:03PM'));
console.log(timeConversion('05:09:57PM'));
console.log(timeConversion('07:55:43PM'));

