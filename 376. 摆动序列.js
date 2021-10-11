/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
	if (nums.length <= 1) return 1;
	let curDiff = 0;
	let preDiff = 0;
	let res = 1;
	// 找峰值
	for (let i = 0; i < nums.length; i++) {
		curDiff = nums[i + 1] - nums[i];
		// 1  3   2
		// 这个时候 3 属于一个峰值
		// preDiff = 1 - 3
		// curDiff = 3 - 2
		// 3 1 2
		// 这个时候 1 属于一个峰值
		// preDiff = 3 - 1
		// curDiff = 1 - 2
		if ((curDiff > 0 && preDiff <= 0) || (curDiff < 0 && preDiff >= 0)) {
			res++;
			preDiff = curDiff;
		}
	}
	return res;

};