/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = Array(nums.length).fill(0);

  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], [nums[1]])
  // 1 2 3 1
  // dp0 1
  // dp1 2
  // dp2 4
  // dp3 4 || 2 + 1
  // dp[2] = dp[0] + nums[2] || dp[1]
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};