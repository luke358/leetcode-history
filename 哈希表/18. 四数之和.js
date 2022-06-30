/*
给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：

0 <= a, b, c, d < n
a、b、c 和 d 互不相同
nums[a] + nums[b] + nums[c] + nums[d] == target
你可以按 任意顺序 返回答案 。

输入：nums = [1,0,-1,0,-2,2], target = 0
输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]

输入：nums = [2,2,2,2,2], target = 8
输出：[[2,2,2,2]]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if(j > i + 1 && nums[j] === nums[j - 1]) continue;
      let left = j + 1, right = nums.length - 1;
      while (left < right) {
        if(nums[i] + nums[j] + nums[left] + nums[right] > target) {
          right--;
        } else if(nums[i] + nums[j] + nums[left] + nums[right] < target) {
          left++;
        } else {
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          while(left < right && nums[left] === nums[left + 1]) left++;
          while(left < right && nums[right] === nums[right + 1]) right--;
          left++;
          right--;
        }
      }
    }
  }
  return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0));