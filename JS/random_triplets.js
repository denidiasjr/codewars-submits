// https://www.codewars.com/kata/53f40dff5f9d31b813000774/train/javascript

const recoverSecret = function(triplets) {
  
  const charsMap = new Map();

  // Create dependency graph
  triplets.forEach(triplet => {
    triplet.forEach((char, index) => {
      const nextChar = triplet[index + 1];

      if (nextChar === undefined) {
        return;
      }

      let nodeChar = charsMap.get(char);
      let nodeNextChar = charsMap.get(nextChar);

      if (nodeChar === undefined) {
        nodeChar = charsMap.set(char, new Node(char)).get(char);
      }

      if (nodeNextChar === undefined) {
        nodeNextChar = charsMap.set(nextChar, new Node(nextChar)).get(nextChar);
      }

      nodeNextChar.previousChars.add(nodeChar);
    });
  });

  // TODO: Walking graph to reveal string
};

function Node(char) {
  this.char = char;
  this.previousChars = new Set([]);
}

const secret1 = "whatisup";
const triplets = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"]
];

console.log(recoverSecret(triplets));
