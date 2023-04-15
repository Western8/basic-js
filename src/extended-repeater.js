const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options = {
                'repeatTimes': 1,
                'separator': '+',
                'addition': '',
                'additionRepeatTimes': 1,
                'additionSeparator': '|',
               }) {
  let res = '';
  let arr = [];
  let arrAdd = [];

  additionRepeatTimes = options.additionRepeatTimes || 1;
  for (let k = 1; k <= additionRepeatTimes; k++) {
    addition = options.addition || ( (typeof options.addition === 'undefined') ? '' : options.addition);
    arrAdd.push(String(addition));
  }
  additionSeparator = options.additionSeparator || '|';
  let strAdd = arrAdd.join(additionSeparator);

  repeatTimes = options.repeatTimes || 1;
  for (let k = 1; k <= repeatTimes; k++) {
    arr.push(String(str) + String(strAdd));
  }
  separator = options.separator || '+';
  res = arr.join(separator);

  return res;
}

module.exports = {
  repeater
};
