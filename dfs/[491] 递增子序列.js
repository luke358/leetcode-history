/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
  let path = [];
  let res = [];
  var backtrace = (index) => {
    if(path.length > 1) {
      res.push([...path]);
    }
    let used = [];
    for(let i = index; i< nums.length; i++) {
      if(used[nums[i]]) continue;
      if(path.length > 0 && path[path.length - 1] > nums[i]) continue;
      used[nums[i]] = true;
      path.push(nums[i]);
      backtrace(i + 1);
      path.pop();
    }
  }
  backtrace(0);
  return res;
};