/**
 * @param {string} s
 * @return {number[]}
 */
 var partitionLabels = function (s) {
  let last = {}
  for (let i = 0; i < s.length; i++) {
    last[s[i]] = i;
  }
  let right = 0;
  let res = [];
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, last[s[i]]);
    if (right === i) {
      res.push(i - left + 1);
      left = i + 1;
    }
  }
  return res;
};