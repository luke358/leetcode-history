/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function (points) {
  if(points.length === 0) return 0;
  points.sort((a, b) => {
    return a[0] - b[0]
  })
  let result = 1;
  for (let i = 1; i < points.length; i++) {
    if(points[i][0] > points[i - 1][1]) {
      result++;
    } else {
      // 控制右边界包括所有已经穿过的气球
      // [1, 5]
      // [2, 4]
      // 取 4, 以此类推，一直保持右边界包括所有的气球
      points[i][1] = Math.min(points[i - 1][1], points[i][1]);
    }
  }
  return result;
};