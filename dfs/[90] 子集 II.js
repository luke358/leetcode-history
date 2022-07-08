/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  if(!nums.length) return;
  nums.sort((a, b) => a - b);
  let res = [];
  let path = [];
  var backtrace = (index) => {
    res.push([...path]);

    for(let i = index;i<nums.length;i++) {
      if(i > index && nums[i] === nums[i - 1]) continue;
      path.push(nums[i]);
      backtrace(i + 1);
      path.pop();
    }
  }
  backtrace(0);
  return res;
};