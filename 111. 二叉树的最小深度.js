
/**
 * 首先，如果要是最小深度那么左右节点必须都为空
 * 所以，如果存在左子树或者右子树，就还要继续往下走
 */
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
var minDepth = function (root) {
	return getDepth(root);
};

function getDepth(root) {
	if (!root) return 0;
	if(!root.left && root.right) {
		return 1 + getDepth(root.right);
	}

	if(!root.right && root.left) {
		return 1 + getDepth(root.right);
	}

	return 1 + Math.min(getDepth(root.left), getDepth(root.right));
}

