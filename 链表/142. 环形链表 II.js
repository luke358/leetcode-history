/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let cur = head
  let set = new Set()
  while (cur) {
    if (set.has(cur)) return cur;
    else set.add(cur)
    cur = cur.next;
  }
  return null;
};