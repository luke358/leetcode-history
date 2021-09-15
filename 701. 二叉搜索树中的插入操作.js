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
var insertIntoBST = function (root, val) {
	if (!root) {
		return new TreeNode(val);
	}
	if (val < root.val) {
		root.left = insertIntoBST(root.left, val);
	}
	if (val > root.val) {
		root.right = insertIntoBST(root.right, val);
	}
	return root;
};

// 迭代版本
var insertIntoBST = function (root, val) {
	if (!root) {
		return new TreeNode(val);
	}
	let cur = root;
	let pre = root
	while (cur) {
		pre = cur;
		if (cur.val > val) cur = cur.left;
		else cur = cur.right;
	}
	if (val > pre.val) pre.right = new TreeNode(val);
	else pre.left = new TreeNode(val);
	return root;
};