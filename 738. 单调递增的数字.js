/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
	let arr = n.toString().split('').map(v => +v)
	let i = 1;
	// 从前往后找到后一位比前一位大的
	while (i < arr.length && arr[i] >= arr[i - 1]) i++;
	if (i < arr.length) {
		// 把找到的进行减一
		// while 的原因是因为 可能前一位和后一位相等，减完之后前面还会出现这种情况，所以还要继续检测前面的  例： 11122221
		while (i > 0 && arr[i] < arr[i - 1]) {
			arr[i - 1]--;
			i--;
		}
		// 后面的置为九
		for (i = i + 1; i < arr.length; i++) {
			arr[i] = 9;
		}
	}
	return arr.join('')
};