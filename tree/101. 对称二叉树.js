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

// stack
var isSymmetric1 = function(root) {
  if(!root) return true;
  let stack = [root.right, root.left];

  while(stack.length) {
      let left = stack.pop();
      let right = stack.pop();

      if(!left && !right) continue;
      else if(!left || !right) return false;
      else if(left.val !== right.val) return false;

      stack.push(left.right);
      stack.push(right.left);
      stack.push(left.left);
      stack.push(right.right);
  }

  return true;
};