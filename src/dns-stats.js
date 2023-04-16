const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let arr = [];
  let res = {};

  domains.forEach(item => {
    let str = '';
    ind = item.lastIndexOf(('.'));
    while (ind >= 0) {
      let dom = item.substring(ind);
      str = str + dom;
      arr.push(str);
      item = item.substring(0, ind);
      ind = item.lastIndexOf(('.'));
    }
    arr.push(str + "." + item);
  });

  arr.forEach(item => {
    if (res[item]) {
      ++res[item];
    } else {
      res[item] = 1;
    }
  });

  return res;

}

module.exports = {
  getDNSStats
};
