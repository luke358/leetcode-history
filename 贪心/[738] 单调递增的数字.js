/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  let nums = String(n).split('').map(v => +v);

  let flag = Infinity
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i - 1] > nums[i]) {
      flag = i
      nums[i - 1]--
    }
  }
  for (let i = flag; i < nums.length; i++) {
    nums[i] = 9
  }
  return +nums.join('')
};