/*
    给你一个 m * n 的矩阵，矩阵中的数字 各不相同 。请你按 任意 顺序返回矩阵中的所有幸运数。

    幸运数是指矩阵中满足同时下列两个条件的元素：
        在同一行的所有元素中最小
        在同一列的所有元素中最大

    链接：https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix
 */

/*
    时间复杂度  O(mn)
    空间复杂度 O(m+n)
 */
var luckyNumbers = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  // 先进行一个简单的存储
  // 把每一行最小的，每一列最大的分别找出来
  const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER); // 存储每一行最小的
  const maxCol = new Array(n).fill(0); // 存储每一列最大的
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 找出第 i 行 最小的数据
      minRow[i] = Math.min(minRow[i], matrix[i][j]);
      // 找出 第 j 列 最大的数据
      maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
    }
  }
  const res = []
  // 遍历矩阵， 是否和之前找打的相等
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
        if(minRow[i] === matrix[i][j] && maxCol[j] === matrix[i][j]) {
            res.push(matrix[i][j])
        }
    }
  }
  return res;
};
