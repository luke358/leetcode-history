/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let path = [];
  let res = [];
  let used = [];
  var dfs = () => {
    if (path.length === nums.length) {
      res.push([...path]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if(i > 0 && nums[i] === nums[i - 1] && used[i - 1] === false) 
        continue;
      if(used[i]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs();
      used[i] = false;
      path.pop();
    }
  }
  dfs();

  return res;
};