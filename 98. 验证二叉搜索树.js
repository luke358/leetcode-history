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
 * @return {boolean}
 */
var isValidBST = function (root) {

	const checkBST = (root, lower, upper) => {
		if (!root) return true;
		if (root.val <= lower || root.val >= upper) {
			return false;
		}
		return checkBST(root.left, lower, root.val) && checkBST(root.right, root.val, upper);
	}
	return checkBST(root, -Infinity, Infinity)
};



// 先序遍历 + 循环
var isValidBST = function (root) {
	let res = []
	const traversal = (root) => {
		if (!root) return;
		traversal(root.left)
		res.push(root.val)
		traversal(root.right)
	}
	traversal(root);
	for (let i = 1; i < res.length; i++) {
		if (res[i] <= res[i - 1]) return false
	}
	return true;
};

// 迭代先序
var isValidBST = function (root) {

	let cur = root;
	let stack = [];
	let pre = null;
	while (cur || stack.length) {
		if (cur) {
			stack.push(cur);
			cur = cur.left
		} else {
			cur = stack.pop();

			if (pre && cur.val <= pre.val) return false;
			pre = cur;
			cur = cur.right;
		}
	}
	return true;
};
