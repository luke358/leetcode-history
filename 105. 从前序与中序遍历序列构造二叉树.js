/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
	let postIndex = 0;

	let rootMap = new Map();
	inorder.forEach((val, index) => { rootMap.set(val, index) });

	const helper = (leftIndex, rightIndex) => {
		if (leftIndex > rightIndex) return null;

		let rootVal = preorder[postIndex];
		let root = new TreeNode(rootVal);

		postIndex++;
		let index = rootMap.get(rootVal);

		root.left = helper(leftIndex, index - 1)
		root.right = helper(index + 1, rightIndex);

		return root
	}

	return helper(0, inorder.length - 1)
};