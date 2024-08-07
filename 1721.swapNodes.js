/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let fast = head;
  let i = 1;
  while (i < k) {
    fast = fast.next;
    i++;
  }
  let a = fast;

  let slow = head;
  while (fast.next != null) {
    fast = fast.next;
    slow = slow.next;
  }

  let temp = slow.val;
  slow.val = a.val;
  a.val = temp;

  return head;
};
