/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  let res = [];
  let path = [];
  var backtrack = (index) => {
    if (path.length > 4) return;
    if (path.length === 4 && index === s.length) {
      res.push(path.join('.'));
      return;
    }
    for (let i = index; i < s.length; i++) {
      let str = s.slice(index, i + 1);
      // 结束条件 start
      if (str.length > 3 || Number(str) > 255) break;
      if (str.length > 1 && str[0] === '0') break;
      // 结束条件 end

      path.push(str);
      backtrack(i + 1)
      path.pop();
    }
  }
  backtrack(0);

  return res;
};