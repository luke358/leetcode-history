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


// 来个小小的递归
var findBottomLeftValue = function (root) {
	let leftVal;
	let maxLen = 0;
	traversal = function (cur, leftLen) {
		// 是叶子节点就可以赋值了
		if (!cur.left && !cur.right) {
			// 这里确保是第一次进来的时候才赋值， 因为在同等深度下， 左边的先进来， 这个时候 leftLen 和 maxLen 已经相等了， 就不会执行了
			if (leftLen > maxLen) {
				maxLen = leftLen;
				leftVal = cur.val
			}
		}

		cur.left && traversal(cur.left, leftLen + 1);
		cur.right && traversal(cur.right, leftLen + 1);
	}
	traversal(root, 1)
	return leftVal;
};