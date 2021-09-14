/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
	let post_idx;
	const idx_map = new Map();
	const helper = (in_left, in_right) => {
		if (in_left > in_right) return null;

		let rootVal = postorder[post_idx];
		let root = new TreeNode(rootVal);

		let index = idx_map.get(rootVal);

		post_idx--;
		root.right = helper(index + 1, in_right);

		root.left = helper(in_left, index - 1);
		return root;
	}

	// 从后序遍历的最后一个元素开始
	post_idx = postorder.length - 1;

	// 建立（元素，下标）键值对的哈希表
	inorder.forEach((val, idx) => {
		idx_map.set(val, idx);
	});
	return helper(0, inorder.length - 1);
};