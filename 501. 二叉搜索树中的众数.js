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