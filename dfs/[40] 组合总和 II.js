/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
  let res = [];
  let path = [];
  candidates.sort((a, b) => a - b);
  var track = (index = 0, sum = 0) => {
    if (sum === target) {
      res.push([...path]);
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if(i > index && candidates[i] === candidates[i - 1]) continue;
      if(candidates[i] > target - sum) break;

      path.push(candidates[i]);
      track(i + 1, sum + candidates[i]);
      path.pop();
    }
  }

  track();

  return res;
};