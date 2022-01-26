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
var minCameraCover = function (root) {
	let result = 0
	var traversal = function (root) {
		if (root === null) return 2;

		let left = traversal(root.left)
		let right = traversal(root.right)

		if (left === 2 && right === 2) {
			return 0
		}

		if (left === 0 || right === 0) {
			result++
			return 1
		}

		if (left === 1 || right === 1) {
			return 2
		}
	}
	if (traversal(root) === 0) {
		result++
	}
	return result;
};

