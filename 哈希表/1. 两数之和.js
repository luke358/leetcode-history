/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  if (map.has(target - nums[i])) {
    return [i, map.get(target - nums[i])]
  } else {
    map.set(nums[i], i);
  }
};