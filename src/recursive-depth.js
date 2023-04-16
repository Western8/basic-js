const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {

    if (Array.isArray(arr)) {
      let depCur = 0;
      arr.forEach(item => {
        let depInner = this.calculateDepth(item);
        depCur = Math.max(depCur, depInner);
      });
      return 1 + depCur;

    } else {
      return 0;
    }
  }
}

module.exports = {
  DepthCalculator
};
