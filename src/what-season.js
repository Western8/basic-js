const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }

  try {
    date.toLocaleString();
    let month = date.getMonth();
    if (typeof month !== 'number') {
      throw new Error('Invalid date!');
    }
    if (!(Number.isInteger(month))) {
      throw new Error('Invalid date!');
    }
    if ((month >= 2) && (month <= 4)) {
      return 'spring';
    } else if ((month >= 5) && (month <= 7)) {
      return 'summer';
    } else if ((month >= 8) && (month <= 10)) {
      return 'autumn';
    } else if (month >= 0) {
      return 'winter';
    }

  } catch(err) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
