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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {


	const getNum = (root, val) => {
		if (!root || root.val == val) return root;
		if (root.val > val) {
			return getNum(root.left, val);
		}
		if (root.val < val) {
			return getNum(root.right, val);
		}
		return null
	}

	return getNum(root, val)
};