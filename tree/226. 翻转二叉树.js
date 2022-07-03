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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  var invert = (root) => {
    if (!root) return;
    if (root.left) invert(root.left);
    if (root.right) invert(root.right);
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
  }
  invert(root);
  return root;
};


// stack
var invertTree1 = function (root) {

  let stack = [];
  if(root) stack.push(root);
  while(stack.length) {
    let cur = stack.pop();
    if(cur.right) stack.push(cur.right);
    if(cur.left) stack.push(cur.left);
    let tmp = cur.left;
    cur.left = cur.right;
    cur.right = tmp;
  }
  return root;
};