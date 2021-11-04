const points = [[10, 16], [2, 8], [1, 6], [7, 12]]

/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
	points.sort((a, b) => a[0] - b[0])
	let res = 1
	for (let i = 1; i < points.length; i++) {
		if(points[i][0] > points[i-1][1]) {
			res++
		} else {
			// 更新最小有边界
			points[i][1] = Math.min(points[i-1][1], points[i][1]);
		}
	}
	console.log(points);
	return res
};
console.log(findMinArrowShots(points));