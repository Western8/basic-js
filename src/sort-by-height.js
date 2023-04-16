const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let res = [];
  let minus = [];
  arr.forEach((item,index) => {
    if (item === -1) {minus.push(index)}
  });

  res = arr.filter(item => (item !== -1));
  res.sort((a,b) => {
    if (a > b) {return 1}
    else {return -1}
  });

  minus.forEach(item => {
    res.splice(item, 0, -1);
  })

  return res;
}

module.exports = {
  sortByHeight
};
