/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  var traversal = (root, p, q) => {
    if(root  === p || root === q || root === null) return root;

    let left = traversal(root.left, p, q);
    let right = traversal(root.right, p, q);

    if(left && right) return root;
    /**
     *                    1
     *                  /   \
     *                 2     3
     *               / \    / \
     *              4   5  6   7
     *   此时找 2,4两个的公共组件，先递归左边 1 -> 2, 此时卡主了，直接返回 2，
     *   然后 遍历右边 2 -> 5, 没有找到 回溯到根节点 root，此时 left = 2, right = null
     *   然后从根节点遍历右子树， 1 -> 3 -> 6，没找到回溯到 3
     *   然后 3 -> 7，没找到回溯到 root 根节点
     *   此时 right 还是 null
     *   然后遍历右边没有 4 这个元素，最后返回 2
     */
    // 左边走完没有，走到右边匹配到了，但是右边没有走到底，既然左边已经检测过了没有，那么右边下边肯定有另一个元素
    if(!left && right) return right;
    /**
     *                    1
     *                  /   \
     *                 2     3
     *               / \    / \
     *              4   5  6   7
     *   此时找 3,7两个的公共组件，先递归左边 1 -> 2 -> 4 -> 5, 然后回溯到root节点， 返回 left 为 null
     *   然后 1 -> 3 此时卡主了，右边找到了元素，直接返回结果
     */
    // 右边走完没有，走到左边匹配到了，但是左边没有走到底，既然右边已经检测过来，那么左边下边肯定有另一个元素
    if(left && !right) return left;

    return null;
  }

  return traversal(root, p, q);
};