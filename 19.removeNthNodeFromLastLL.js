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
  let fast = head;
  let i = 0;
  while (i < n && fast != null) {
    fast = fast.next;
    i++;
  }

  if (fast == null) {
    let newHead = head.next;
    head.next = newHead;
    return newHead;
  }

  let slow = head;

  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next;
  }

  let nodeToDel = slow.next;
  slow.next = nodeToDel.next;
  nodeToDel.next = null;
  return head;
};
