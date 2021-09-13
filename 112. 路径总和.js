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
 * @param {number} targetSum
 * @return {boolean}
 */

// 小小递归 可笑可笑
var hasPathSum = function (root, targetSum) {
	return getPath(root, targetSum);
};

function getPath(root, targetSum) {
	if (!root) return false;
	if (!root.left && !root.right && root.val === targetSum) {
		return true;
	}
	return getPath(root.left, targetSum - root.val) || getPath(root.right, targetSum - root.val);
}

// 小小队列 可笑可笑
var hasPathSum = function (root, targetSum) {
	if (!root) return false;
	let path = [root.val]; // 保存答案
	let queue = [root]; // 保存当前节点

	while (queue.length) {
		let cur = queue.shift();
		let curSum = path.shift();
		if (curSum === targetSum && !cur.left && !cur.right) return true;
		if (cur.left) {
			queue.push(cur.left);
			path.push(+curSum + +cur.left.val)
		}
		if (cur.right) {
			queue.push(cur.right);
			path.push(+curSum + +cur.right.val)
		}
	}
	return false;
};