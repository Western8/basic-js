const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let num = 0;
  matrix[0].forEach((item, index) => {
    for (let k = 0; k < matrix.length; k++) {
      el = matrix[k][index];
      if (el > 0) {
        num += el;
      } else {
        break;
      }
    }
  });

  return num;
}

module.exports = {
  getMatrixElementsSum
};


let res = getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
])
console.log('res ', res);
