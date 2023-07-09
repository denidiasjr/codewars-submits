// https://www.codewars.com/kata/525f50e3b73515a6db000b83

function createPhoneNumber(numbers){
    numbers = numbers.join('');
    return "("+numbers.substring(0,3)+") "+numbers.substring(3,6)+"-"+numbers.substring(6);
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));