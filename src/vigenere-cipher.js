const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(str, key) {

    if ((!str) || (!key)) {
      throw new Error("Incorrect arguments!");
    }

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let table = [];
    let res = '';

    for (let k = 0; k < 26; k++) {
      let row = [];
      for (let n = 0; n < 26; n++) {
        row.push(alpha2[n + k]);
      }
      table.push(row);
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let strArr = str.split('');

    let repeat = Math.ceil(str.length / key.length);
    key = key.repeat(repeat);
    let k = 0;
    let keyArr = [];
    strArr.forEach(item => {
      if (alpha.includes(item)) {
        keyArr.push(key[k]);
        k++;
      } else {
        keyArr.push(item);
      }
    });

    let newStrArr = [];
    newStrArr = strArr.map((item, index) => {
      let numRow = alpha.indexOf(item);
      let numCol = alpha.indexOf(keyArr[index]);
      if (numRow >= 0) {
        return table[numRow][numCol];
      } else {
        return item;
      }
    });

    if (!this.direct) {
      newStrArr.reverse();
    }
    res = newStrArr.join('');
    return res;
  }

  decrypt(str, key) {

    if ((!str) || (!key)) {
      throw new Error("Incorrect arguments!");
    }

    const alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const alpha2 = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let table = [];
    let res = '';

    for (let k = 0; k < 26; k++) {
      let row = [];
      for (let n = 0; n < 26; n++) {
        row.push(alpha2[n + k]);
      }
      table.push(row);
    }

    str = str.toUpperCase();
    key = key.toUpperCase();
    let strArr = str.split('');

    let repeat = Math.ceil(str.length / key.length);
    key = key.repeat(repeat);
    let k = 0;
    let keyArr = [];
    strArr.forEach(item => {
      if (alpha.includes(item)) {
        keyArr.push(key[k]);
        k++;
      } else {
        keyArr.push(item);
      }
    });

    let newStrArr = [];
    newStrArr = strArr.map((item, index) => {
      if (alpha.includes(item)) {
        let numRow = alpha.indexOf(keyArr[index]);
        let numCol = table[numRow].indexOf(item);
        return alpha[numCol]
      } else {
        return item;
      }
    });

    if (!this.direct) {
      newStrArr.reverse();
    }
    res = newStrArr.join('');
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};