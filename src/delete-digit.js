const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nStr = n.toString();
  let arr = [];

  for (let i = 0; i < nStr.length; i += 1) {
    const nSliced = nStr.slice(0, i) + nStr.slice(i + 1);
    const nNum = Number(nSliced);
    arr.push(nNum);
  }
  
  let nMax = Math.max(...arr);
  return nMax;
}

module.exports = {
  deleteDigit
};
