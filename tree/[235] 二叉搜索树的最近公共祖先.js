/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
 *                    5
 *                  /   \
 *                 2     7
 *               / \    / \
 *              1   3  6   8
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function (root, p, q) {
  var traversal = (root, p, q) => {
    if (root === null) return root;

    if (root.val > p.val && root.val > q.val) {
      let left = traversal(root.left, p, q);
      if (left) return left;
    }

    if (root.val < p.val && root.val < q.val) {
      let right = traversal(root.right, p, q);
      if (right) return right;
    }
    return root
  }

  return traversal(root, p, q);
};