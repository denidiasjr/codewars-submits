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
  walkGraph(charsMap);
};

function walkGraph(charsMap) {
  const secret = "";

  while (charsMap.size > 0) {
    let selectedChar;

    // Get last item with last char dependency, or get item with no dependency
    if (secret.length === 0) {
      charSelected = getEmptyDependency(charsMap);
    } else {
      charSelected = getCharDependency(charsMap, secret[secret.length - 1]);
    }
  }
}

function getEmptyDependency(charsMap) {
  for (let char of charsMap.keys()) {
    const previousChars = charsMap.get(char).previousChars.values();
    console.log(previousChars);
    charsMap.delete(char);
  }
}

function getCharDependency(charsMap, selectedChar) {
  for (let char of charsMap.keys()) {
    const previousChars = charsMap.get(char).previousChars.entries();
    console.log(previousChars);
    charsMap.delete(char);
  }
}

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
