/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  // 包含头结点 不包含尾结点
  const x1 = robRange(nums, 0, nums.length - 2)
  // 不包含头结点 包含尾结点
  const x2 = robRange(nums, 1, nums.length - 1)

  return Math.max(x1, x2)
};
function robRange(nums, start, end) {
  if (start === end) return nums[start]
  const dp = Array(nums.length).fill(0)

  dp[start] = nums[start]
  dp[start + 1] = Math.max(nums[start + 1], nums[start])

  for (let i = start + 2; i <= end; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[end]
}