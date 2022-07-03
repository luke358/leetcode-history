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
 var maxDepth = function(root) {
    
  var getDepth = (root, count = 0) => {
      if(!root) return count;
      let leftDepth = getDepth(root.left, count+1)
      let rightDepth = getDepth(root.right, count+1)

      return Math.max(leftDepth, rightDepth);
  }
  return getDepth(root);
};

// 层序
var maxDepth1 = function(root) {
  let res = 0;
  if(!root) return res;
  let stack = [root]
  while(stack.length) {
    let len =stack.length;
    res++
    while(len--) {
      let cur = stack.pop();
      if(cur.left) stack.unshift(cur.left);
      if(cur.right) stack.unshift(cur.right);
    }
  }  
  return res;
};