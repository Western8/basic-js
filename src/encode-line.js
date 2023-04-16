const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let res = '';
  let count = 1;
  arr.forEach((item, index) => {
    if (arr[index+1] === item) {
      count++;
    } else {
      res = res + ((count > 1) ? (String(count) + arr[index-1]) : item);
      count = 1;
    }
  });

  return res;
}

module.exports = {
  encodeLine
};
