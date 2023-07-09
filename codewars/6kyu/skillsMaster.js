// https://www.codewars.com/kata/648f2033d52f51608e06c458/train/javascript

function countSkills(tree, required) {
    const skillsNeededToLearn = new Set(required);

    required.forEach(skill => {
        let skillRequired = tree[skill];

        while (!skillsNeededToLearn.has(skillRequired)) {
            skillsNeededToLearn.add(skillRequired)
            skillRequired = tree[skillRequired];
        }
    });

    return skillsNeededToLearn.size;
}

console.log(countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 4, 5 ])));
console.log(countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 6 ])));
console.log(countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set()));
console.log(countSkills([ 0, 0, 0, 1, 3, 3, 2 ], new Set([ 1, 2 ])));