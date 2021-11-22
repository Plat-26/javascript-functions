function seed() {
  const values = [];
  for(let i = 0; i < arguments.length; i++) {
      values[i] = arguments[i];
  }
  return values;
}

function same([x, y], [j, k]) {
  return x == j && y == k;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  for(let i = 0; i < this.length; i++) {
    if (this[i][0] == cell[0] && this[i][1] == cell[1]) {
      return true;
    }
  } 
  return false;
}

const printCell = (cell, state) => {
  if(contains.call(state, cell)) {
    return unescape('\u25A3');
  } else {
    return unescape('\u25A2');
  }
};

const corners = (state = []) => {
  if(state.length == 0) {
    return [[0, 0], [0, 0]];
  } else {
    return [
            [arguments[arguments.length - 1][0], arguments[0][1]], 
            [arguments[0][0], arguments[arguments.length - 1][1]]
          ];
  }
};

const printCells = (state) => {};

const getNeighborsOf = ([x, y]) => {
  //create an array
  //keep track of x and y index to avoid spill
  //populate array as x and y varies 
  //return the array
};

const getLivingNeighbors = (cell, state) => {};

const willBeAlive = (cell, state) => {};

const calculateNext = (state) => {};

const iterate = (state, iterations) => {};

const main = (pattern, iterations) => {};

const startPatterns = {
    rpentomino: [
      [3, 2],
      [2, 3],
      [3, 3],
      [3, 4],
      [4, 4]
    ],
    glider: [
      [-2, -2],
      [-1, -2],
      [-2, -1],
      [-1, -1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 2],
      [2, 3]
    ],
    square: [
      [1, 1],
      [2, 1],
      [1, 2],
      [2, 2]
    ]
  };
  
  const [pattern, iterations] = process.argv.slice(2);
  const runAsScript = require.main === module;
  
  if (runAsScript) {
    if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
      main(pattern, parseInt(iterations));
    } else {
      console.log("Usage: node js/gameoflife.js rpentomino 50");
    }
  }
  
  exports.seed = seed;
  exports.same = same;
  exports.contains = contains;
  exports.getNeighborsOf = getNeighborsOf;
  exports.getLivingNeighbors = getLivingNeighbors;
  exports.willBeAlive = willBeAlive;
  exports.corners = corners;
  exports.calculateNext = calculateNext;
  exports.printCell = printCell;
  exports.printCells = printCells;
  exports.startPatterns = startPatterns;
  exports.iterate = iterate;
  exports.main = main;