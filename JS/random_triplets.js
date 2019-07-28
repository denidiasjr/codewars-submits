// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

const recoverSecret = function(triplets) {

    // Tentativa 1: Percorrer cada vetor de trás pra frente
    let secret = triplets.reduce((acumTotal, triplet) => {

      let largestIndexFromTriplet = -1;

      let currentTriplet = triplet.reduce((acumTriplet, char) => {

        const currentIndex = acumTriplet.indexOf(char);

        if (largestIndexFromTriplet === -1 && currentIndex === -1) {
          acumTriplet.push(char);
          largestIndexFromTriplet = acumTriplet.length - 1;
          return acumTriplet;
        }

        if (largestIndexFromTriplet === -1 && currentIndex >= 0) {
          largestIndexFromTriplet = currentIndex;
          return acumTriplet;
        }

        if (currentIndex === -1) {
          acumTriplet.splice(largestIndexFromTriplet + 1, 0, char);
          largestIndexFromTriplet = currentIndex;
          return acumTriplet;
        }

        if (currentIndex > largestIndexFromTriplet) {
          acumTriplet.splice(currentIndex, 1);
          acumTriplet.splice(largestIndexFromTriplet + 1, 0, char);
          largestIndexFromTriplet = currentIndex;
          return acumTriplet;
        }

        if (currentIndex < largestIndexFromTriplet) {
          const removedChar = acumTriplet.splice(largestIndexFromTriplet, 1)[0];
          acumTriplet.splice(currentIndex, 0, removedChar);
          largestIndexFromTriplet = currentIndex + 1;
          return acumTriplet;
        }

        largestIndexFromTriplet = currentIndex;
        return acumTriplet;

      }, acumTotal);

      return currentTriplet;

    }, []);

    return secret.join('');
}


const secret1 = "whatisup"
const triplets = [
  ['t','u','p'],
  ['w','h','i'],
  ['t','s','u'],
  ['a','t','s'],
  ['h','a','p'],
  ['t','i','s'],
  ['w','h','s']
]

console.log(recoverSecret(triplets));