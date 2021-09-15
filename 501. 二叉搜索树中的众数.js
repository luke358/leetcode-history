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
 * @return {number[]}
 */
var findMode = function (root) {
	let map = new Map();

	const searchBST = (root, map) => {
		if (!root) return;
		map.set(root.val, (map.get(root.val) || 0) + 1);

		searchBST(root.left, map);
		searchBST(root.right, map);
	}
	searchBST(root, map);

	let res = []
	let arr = Array.from(map).sort((a, b) => b[1] - a[1]);
	res[0] = arr[0][0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i][1] === arr[0][1]) res.push(arr[i][0])
		else break;
	}

	return res;
};


var findMode = function (root) {
	let count = 0;
	let maxCount = 0;
	let pre = null;
	let res = []
	const searchBST = (root) => {
		if (!root) return;

		searchBST(root.left);

		if (!pre) {
			count = 1;
		} else if (pre.val === root.val) {
			count++;
		} else {
			count = 1;
		}
		pre = root;
		if (count === maxCount) {
			res.push(root.val)
		}
		if (count > maxCount) {
			maxCount = count
			res = [root.val];
		}
		searchBST(root.right);
	}
	searchBST(root);

	return res;
};