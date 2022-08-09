/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function (n) {
  // dp1 = 1
  // dp2 = 2
  // dp3 = 5  dp[2] * dp[0] + dp[1] * dp[1] + dp[2] ) dp[0]
  //          i        i - j 
  // dpn = dp[n-1] * dp[0] + dp[n-2] * dp[1] + dp[n-3] * dp[2] 
  //  +.... + dp[0] * dp[n-1]
  const dp = Array(n + 1).fill(0)
  dp[0] = 1
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }
  return dp[n]
};