
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

// 层序遍历   注意 这个时候不需要分左右， 所以直接用 栈 就可以了
var countNodes = function (root) {
	if (!root) return 0;

	let stack = [root];

	let nodeSum = 0
	while (stack.length) {
		let len = stack.length;
		while (len--) {
			let cur = stack.pop();
			nodeSum++;
			cur.left && stack.push(cur.left);
			cur.right && stack.push(cur.right);
		}
	}
	return nodeSum;
};

// 利用完全二叉树的性质
