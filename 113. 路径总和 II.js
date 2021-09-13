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
 * @return {number[][]}
 */

// 小递归
var pathSum = function (root, targetSum) {
	let res = []
	if (!root) return res;

	let getPath = function (root, targetSum, arr) {
		if (!root) return false;
		if (!root.left && !root.right && root.val === targetSum) {
			res.push([...arr, root.val])
		}

		root.left && getPath(root.left, targetSum - root.val, [...arr, root.val]);
		root.right && getPath(root.right, targetSum - root.val, [...arr, root.val]);
	}

	getPath(root, targetSum, []);

	return res;
};