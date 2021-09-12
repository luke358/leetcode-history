
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

// 递归
var countNodes = function (root) {
	return getNodeSum(root);
};

function getNodeSum(root) {
	if (!root) return 0
	let leftNodeSum = getNodeSum(root.left);
	let rightNodeSUm = getNodeSum(root.right);

	return leftNodeSum + rightNodeSUm + 1;
}

// 层序遍历