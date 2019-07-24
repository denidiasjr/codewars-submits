// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

const recoverSecret = function(triplets) {

    // Tentativa 1: Percorrer cada vetor de trás pra frente
    let secret = triplets.reduce((acum, triplet) => {
      
      triplet.slice().reverse().forEach((char, index) => {
        
        
      });

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

recoverSecret(triplets);