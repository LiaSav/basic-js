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
function repeater(str, options) {
  let result = '';
  const repeatTimes = options.repeatTimes || 1,
    addition = options.addition !== undefined ? String(options.addition) : '',
    additionRepeatTimes = options.additionRepeatTimes || 1,
    additionSeparator = options.additionSeparator || '|',
    separator = options.separator || '+';

  for (let i = 1; i <= repeatTimes; i++) {
    let subStr = '';

    for (let j = 1; j <= additionRepeatTimes; j++) {
      subStr += addition;

      if (j < additionRepeatTimes) {
        subStr += additionSeparator;
      }
    }

    result += str + subStr;

    if (i < repeatTimes) {
      result += separator;
    }
  } return result;
}

module.exports = {
  repeater
};
