/*
给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

输入: nums = [1,1,1,2,2,3], k = 2
输出: [1,2]

输入: nums = [1], k = 1
输出: [1]

[1,2]
2
[1,2]
*/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  const res = []
  let arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);
  console.log(arr);
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0])
  }
  return res;
};
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));