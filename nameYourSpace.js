// https://www.codewars.com/kata/514b6c44a337752e67000077/train/javascript

// My Solution
function namespace(root, path, value) {

  // Split path into keys
  const keys = path.split('.');

  // If no value, we need to return the data
  if (value === undefined) {
    return keys.reduce((acc, current) => {

      // If in some point, the path returns undefined, return undefined forever
      if (acc === undefined) {
        return acc;
      }

      return acc[current];

    }, root);
  }

  // If has value, we need to set it on the path
  keys.reduce((acc, current, index) => {

    // If its not the last path but its undefined, set an object to it.
    // Otherwise, just return it to the next step. 
    if (index !== keys.length - 1) {
      if (acc[current] === undefined) {
        acc[current] = {};
      }

      return acc[current];
    }

    // If its the last path, set the value to it
    acc[current] = value;
    return acc[current];
  }, root);
}

// Clever solution
function namespace(root, path, value) {
  return path.split('.').reduce(function (prev, key, i, arr) {
    if (i == arr.length - 1)
      return value ? (prev[key] = value) : prev[key];
    return (prev[key] = {});
  }, root);
}

// Best practices solution
function namespace(root, path, value) {
  var fn = arguments.length < 3 ? get : set;

  return fn.apply(null, arguments);
}

function get(root, path) {
  return path.split(".").reduce(function (root, piece) {
    return root && root[piece];
  }, root);
}

function set(root, path, value) {
  var split = path.split(".")
    , last = split.pop()
    , nest;

  nest = split.reduce(function (root, piece) {
    return root[piece] || (root[piece] = {});
  }, root);

  return nest[last] = value;
}

const stuff = {};
console.log(namespace(stuff, 'moreStuff.name', 'the stuff'))