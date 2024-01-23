// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

function checkMagazine(magazine: string[], note: string[]): void {
    // Write your code here
    const magazineCopy = [...magazine];
    let result = 'Yes';

    for (let i = 0; i < note.length; i++) {
        const magazineIndex = magazineCopy.findIndex(word => word === note[i]);
        if (magazineIndex < 0) {
            result = 'No';
            break;
        }

        magazineCopy.splice(magazineIndex, 1);
    }

    console.log(result);
}

checkMagazine(['give', 'me', 'one', 'grand', 'today', 'night'], ['give', 'one', 'grand', 'today']);
checkMagazine(['two', 'times', 'three', 'is', 'not', 'four'], ['two', 'times', 'two', 'is', 'four']);
checkMagazine(['ive', 'got', 'a', 'lovely', 'bunch', 'of', 'coconuts'], ['ive', 'got', 'some', 'coconuts']);