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
 * @param {number} targetSum
 * @return {boolean}
 */

// 小小递归 可笑可笑
var hasPathSum = function (root, targetSum) {
	return getPath(root, targetSum);
};

function getPath(root, targetSum) {
	if (!root) return false;
	if (!root.left && !root.right && root.val === targetSum) {
		return true;
	}
	return getPath(root.left, targetSum - root.val) || getPath(root.right, targetSum - root.val);
}