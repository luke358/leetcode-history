/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
 var uniquePathsWithObstacles = function (obstacleGrid) {
  const dp = Array(obstacleGrid.length).fill().map(_ => Array(obstacleGrid[0].length).fill(0))
  let flag = false
  for (let i = 0; i < dp.length; i++) {
    // 如果第一行有一个被堵住，后面的都是 0
    if (obstacleGrid[i][0] === 1 || flag) {
      dp[i][0] = 0
      flag = true
    }
    else dp[i][0] = 1
  }
  flag = false
  for (let i = 0; i < dp[0].length; i++) {
    // 如果第一列有一个被堵住，后面的都是 0
    if (obstacleGrid[0][i] === 1 || flag) {
      dp[0][i] = 0
      flag = true
    }
    else dp[0][i] = 1
  }
  for (let i = 1; i < obstacleGrid.length; i++) {
    for (let j = 1; j < obstacleGrid[0].length; j++) {
      if (obstacleGrid[i][j] === 1) dp[i][j] = 0
      else dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[obstacleGrid.length - 1][obstacleGrid[0].length - 1]
};