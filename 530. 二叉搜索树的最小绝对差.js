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

// 前序递归
var getMinimumDifference = function (root) {
	let res = Infinity;
	let pre = null;
	const traversal = (root) => {
		if (!root) return;
		traversal(root.left)
		if (pre) {
			res = Math.min(res, root.val - pre.val);
		}
		pre = root;
		traversal(root.right);
	}
	traversal(root);
	return res;
};

// 前序迭代
var getMinimumDifference = function (root) {
	let res = Infinity;
	let stack = []
	let cur = root;
	let pre = null;
	while (cur || stack.length) {
		if (cur) {
			stack.push(cur);
			cur = cur.left;
		} else {
			cur = stack.pop();
			if (pre) {
				res = Math.min(res, cur.val - pre.val);
			}
			pre = cur;
			cur = cur.right;
		}
	}

	return res;
};