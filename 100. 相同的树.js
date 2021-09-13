
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// 递归
var isSameTree = function (p, q) {
	if (!p && !q) return true;
	if (!p || !q) return false;

	return compare(p, q);
};

function compare(left, right) {
	// 左边没有 右边有
	if (!left && right) return false;
	// 右边没有 左边有
	else if (left && !right) return false;
	// 两边都没有
	else if (!left && !right) return true;
	// 两边都有 并且值不相等
	else if (left.val !== right.val) return false;

	// 两边都有 并且值相等
	let outside = compare(left.left, right.left);
	let inside = compare(left.right, right.right);

	return outside && inside;
}