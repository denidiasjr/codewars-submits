// https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three

function caesarCipher(s: string, k: number): string {
    const alphabetStartAndEnd = 'AZaz';
    const alphabetSize = 26;
    const limitLetters = {
        'A': alphabetStartAndEnd.charCodeAt(0),
        'Z': alphabetStartAndEnd.charCodeAt(1),
        'a': alphabetStartAndEnd.charCodeAt(2),
        'z': alphabetStartAndEnd.charCodeAt(3),
    };

    const isUpperCaseRange = (charCode: number) => {
        return (limitLetters['A'] <= charCode) && (charCode <= limitLetters['Z']);
    }

    const isLowerCaseRange = (charCode: number) => {
        return (limitLetters['a'] <= charCode) && (charCode <= limitLetters['z']);
    }

    return s.split('').reduce((cipherText, char) => {
        const charCode = char.charCodeAt(0);

        if (isUpperCaseRange(charCode)) {
            const firstLetter = limitLetters['A'];
            // My first formula (works until 73)
            // const shift = (charCode + k) % firstLetter % alphabetSize;
            // The correct formula (works well in all cases)
            const shift = (charCode - firstLetter + k) % alphabetSize;
            return cipherText + String.fromCharCode(firstLetter + shift);
        }

        if (isLowerCaseRange(charCode)) {
            const firstLetter = limitLetters['a'];
            const shift = (charCode - firstLetter + k) % alphabetSize;
            return cipherText + String.fromCharCode(firstLetter + shift);
        }

        return cipherText + char;
    }, '');
}

console.log(caesarCipher('abcdefghijklmnopqrstuvwxyz', 52));
console.log(caesarCipher('middle-Outz', 2));