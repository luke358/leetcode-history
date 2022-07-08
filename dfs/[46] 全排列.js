/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  let path = [];
  let res = [];
  let used = {};
  var backtrace = () => {
    if(path.length === nums.length) {
      res.push([...path]);
    }
    for(let i=0; i<nums.length; i++) {
      if(used[i]) continue;
      used[i] = true;
      path.push(nums[i]);
      backtrace(used);
      path.pop();
      used[i] = false;
    }
  }
  backtrace();
  return res;
  
};