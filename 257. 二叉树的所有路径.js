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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
	let res = [];
	let path = [];

	if (!root) return res;
	traverse(root, res, path)
	return res;
};

function traverse(root, res, path) {
	path.push(root.val)

	// 到叶子节点了 开始处理路径
	if (!root.left && !root.right) {
		// 空一个出来， 因为这个后面不需要 ->
		let p = ''
		for (let i = 0; i < path.length - 1; i++) {
			p += path[i];
			p += '->'
		}
		p += path[path.length - 1];
		res.push(p);
	}

	if (root.left) {
		traverse(root.left, res, path);
		// 回滚
		path.pop()
	}

	if (root.right) {
		traverse(root.right, res, path);
		path.pop()
	}
}