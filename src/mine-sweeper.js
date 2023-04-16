const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  res = matrix.map((item, index, array) => {
    return item.map((item2, index2, array2) => {
      let count = 0;
      count += (matrix[index-1]) ? ((matrix[index-1][index2-1]) ? Number(matrix[index-1][index2-1]) : 0) : 0;
      count += (matrix[index-1]) ? ((matrix[index-1][index2]) ? Number(matrix[index-1][index2]) : 0) : 0;
      count += (matrix[index-1]) ? ((matrix[index-1][index2+1]) ? Number(matrix[index-1][index2+1]) : 0) : 0;
      count += (matrix[index][index2-1]) ? Number(matrix[index][index2-1]) : 0;
      count += (matrix[index][index2+1]) ? Number(matrix[index][index2+1]) : 0;
      count += (matrix[index+1]) ? ((matrix[index+1][index2-1]) ? Number(matrix[index+1][index2-1]) : 0) : 0;
      count += (matrix[index+1]) ? ((matrix[index+1][index2]) ? Number(matrix[index+1][index2]) : 0) : 0;
      count += (matrix[index+1]) ? ((matrix[index+1][index2+1]) ? Number(matrix[index+1][index2+1]) : 0) : 0;
      return count;
    })
  })
  return res;
}

module.exports = {
  minesweeper
};
