/**
 * @param {number[][]} intervals
 * @return {number}
 */
 var eraseOverlapIntervals = function (intervals) {
  if(intervals.length === 0) return 0;
  intervals.sort((a, b) => a[1] - b[1])

  let count = 1;
  let end = intervals[0][1]
  for (let i = 1; i < intervals.length; i++) {
    // 一直保持右边界不重叠
    if(end <= intervals[i][0]) {
      end = intervals[i][1];
      count = count + 1;
    }
  }
  return intervals.length - count;
};