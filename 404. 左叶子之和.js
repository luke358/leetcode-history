// 递归

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
	if (!root) return 0;

	let leftVal = sumOfLeftLeaves(root.left);
	let rightVal = sumOfLeftLeaves(root.right);

	let midVal = 0;
	if (root.left && !root.left.left && !root.left.right) {
		midVal = root.left.val;
	}

	return midVal + leftVal + rightVal;
};

// 迭代
var sumOfLeftLeaves = function (root) {
	if (!root) return 0;

	let queue = [root];
	let sum = 0;
	while (queue.length) {
		let cur = queue.shift();

		if (cur.left && !cur.left.left && !cur.left.right) {
			sum += cur.left.val;
		}
		cur.left && queue.push(cur.left);
		cur.right && queue.push(cur.right);
	}
	return sum;
};