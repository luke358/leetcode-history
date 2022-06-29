/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function (head, n) {
  let ret = new ListNode(0, head),
      slow = fast = ret;
  while(n--) fast = fast.next;
  // fase.next 让 fast 多走一步，使 slow 指向要删除的上一个
  while(fast.next) {
      slow = slow.next;
      fast = fast.next;
  }
  slow.next = slow.next.next;
  return ret.next;
};