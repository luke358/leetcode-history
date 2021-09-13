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

// 先来个简简单单的层序遍历
var findBottomLeftValue = function (root) {
	let queue = [root];
	let val;
	while(queue.length) {
		let len = queue.length;
		for(let i=0;i< len;i++) {
			let cur = queue.shift();
			if (i === 0) val = cur.val
			cur.left && queue.push(cur.left);
			cur.right && queue.push(cur.right);
		}
	}
	return val;
};