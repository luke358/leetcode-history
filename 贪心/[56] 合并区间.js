/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function (intervals) {
  if (intervals.length === 0) return []
  intervals.sort((a, b) => a[0] - b[0]);
  let res = []
  let flag = false
  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i - 1][0], end = intervals[i - 1][1];
    while(i < intervals.length && intervals[i][0] <= end) {
      end = Math.max(end, intervals[i][1]);
      if(i === intervals.length - 1) flag = true;
      i++;
    }
    res.push([start, end])
  }
  if (!flag) {
    res.push([intervals[intervals.length - 1][0], intervals[intervals.length - 1][1]]);
  }
  return res;
};