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

    throw new NotImplementedError('Not implemented');

    let sum = 0;
/*
    if (Array.isArray(arr)) {
      arr.reduce(function(sum, item) {
        depInner = this.calculateDepth(item, dep);
        return 1 + depInner
      }, 0)
    } else {
      return 0;
    }
    */


    if (Array.isArray(arr)) {
      arr.forEach(item => {
        let depInner = this.calculateDepth(item);
        return 1 + depInner;
      });
    } else {
      return 0;
    }



    return sum;
/*
    //let dep = 1;
    dep++;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        let depInner = this.calculateDepth(item, dep);
        //dep = Math.max(dep, depInner);
      }
    });
    return dep;
    */
  }
}

module.exports = {
  DepthCalculator
};
