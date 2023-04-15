const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {

  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");

  let newArr = [];
  arr.forEach(function(item, index, array) {

    switch(item) {
      case '--double-next': 
        if (array[index + 1]) {
          newArr.push(array[index + 1]);
        }
        break;
      case '--double-prev': 
        if (array[index - 1]) {
          newArr.push(array[index - 1]);
        }
        break;
      case '--discard-next': 
        arr[index + 1] = false;
        break;
      case '--discard-prev': 
        newArr.pop();
        break;
      default : newArr.push(item);
    }

  })

  newArr = newArr.filter(item => item);

  return newArr;
}

module.exports = {
  transform
};
