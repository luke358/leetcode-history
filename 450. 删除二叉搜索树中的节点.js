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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
	if (!root) return root;
	if (root.val === key) {
		if (!root.left) return root.right;

		else if (!root.right) return root.left;

		else {
			let cur = root.right;
			while (cur.left) cur = cur.left;
			cur.left = root.left;
			root = root.right
			return root;
		}
	}
	if (root.val > key) root.left = deleteNode(root.left, key);
	if (root.val < key) root.right = deleteNode(root.right, key);

	return root;

};