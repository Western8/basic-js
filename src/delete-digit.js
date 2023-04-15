const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let res  = 0;
  arr.forEach((item, index, array) => {
    let newArr = Array.from(array);
    let delArr = newArr.splice(index, 1);
    let num = +newArr.join('');
    res = Math.max(res, num);
  })

  return res;
}

module.exports = {
  deleteDigit
};
