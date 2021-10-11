/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
	let result = -Infinity;
	let curSum = 0;
	for (let i = 0; i < nums.length; i++) {
		curSum += nums[i];
		// 如果count取到最大值了，及时记录下来
		if (curSum > result) {
			result = curSum;
		}
		if (curSum < 0) curSum = 0;
	}
	return result;
};