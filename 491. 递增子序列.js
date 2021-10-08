/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
	let res = [];
	let path = [];
	back(0);
	return res;
	function back(startIndex) {
		// 如果 path 里面有数据了就说明找到了一个序列
		if (path.length > 1) {
			res.push(path.slice());
		}
		// 把使用过的数据放到该数组
		let used = [];
		for (let i = startIndex; i < nums.length; i++) {
			// path 里面存在数据 的情况下：
			// 1. 如果后面一个比前面一个小， 那么跳过
			// 2. 如果这个数据用过， 那么 跳过
			// 注： 如果在同一层 中使用过那么就不能再使用了， 
			// 为什么呢？ 
			// 因为 当前这个数如果使用了， 那么这个数所有的组合其实已经存在的，那么你这个数就属于多余的了， 所以直接跳过
			if ((path.length > 0 && nums[i] < path[path.length - 1]) || used[nums[i] + 100]) {
				continue;
			}
			// 使用后设置为 true
			used[nums[i] + 100] = true;
			// 放入 path 中
			path.push(nums[i]);
			// 下标走到下一个
			back(i + 1);
			// 回溯
			path.pop()
		}
	}
};