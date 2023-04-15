const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let arr = matrix.map((item) => item.filter(item2 => String(item2) === '^^'));
  console.log('arr ', arr);  
  arr = arr.filter(item => item.length > 0);
  let res = arr.reduce((sum, item) => (sum + item.length), 0);
  return res;
}

module.exports = {
  countCats
};