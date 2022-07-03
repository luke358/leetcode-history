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
 var isSymmetric = function(root) {
  if(!root) return true;
  var tree = (left, right) => {
      if(!left && !right) return true
      else if(!left || !right) return false;
      else if(left.val !== right.val) return false;

      let inside = tree(left.right, right.left);
      let outside = tree(left.left, right.right);

      return inside && outside;
  }

  return tree(root.left, root.right);
};