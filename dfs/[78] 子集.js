/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = [];
  let path = [];
  var backtrace = (index) => {
    res.push([...path]);

    for(let i = index; i< nums.length; i++) {
      path.push(nums[i]);
      backtrace(i + 1);
      path.pop();
    }
  }

  backtrace(0);
  return res;
};