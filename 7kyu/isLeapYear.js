// https://www.codewars.com/kata/526c7363236867513f0005ca/train/javascript

function isLeapYear(year) {
    if (year % 4 !== 0) {
        return false;
    }

    if (year % 100 !== 0) {
        return true;
    }

    return (year % 400 === 0); 
}