const intervals = [[1, 2], [2, 3], [3, 4], [1, 3]]

/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
	if(intervals.length === 0) return 0
	intervals.sort((a, b) => a[1] - b[1])

	let count = 1 // 记录非交叉区间的个数
	let end = intervals[0][1]
	for (let i = 1; i < intervals.length; i++) {
		// 没重叠
		if(end <= intervals[i][0]) {
			end = intervals[i][1]
			count++;
		}
	}
	return intervals.length - count;
};

console.log(eraseOverlapIntervals(intervals));