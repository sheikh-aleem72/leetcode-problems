/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Brute force. TC - O(n), SC - O(n)
var mergeNodes = function (head) {
  let dummyHead = new ListNode(-1);
  let newHead = dummyHead;
  let curr = head;
  let sum = 0;

  while (curr != null) {
    if (curr.val == 0 && sum != 0) {
      newHead.next = new ListNode(sum);
      sum = 0;
      newHead = newHead.next;
    } else {
      sum += curr.val;
    }
    curr = curr.next;
  }
  return dummyHead.next;
};

// This approach solve it in SC - O(1)
var mergeNodes = function (head) {
  let curr = head.next; // Skip the initial zero
  let sum = 0;
  let prev = head;

  while (curr !== null) {
    if (curr.val === 0) {
      prev.next.val = sum; // Update the next node after prev
      sum = 0;
      prev = prev.next; // Move prev to the next node
    } else {
      sum += curr.val;
    }
    curr = curr.next;
  }

  prev.next = null; // Ensure the list is terminated correctly

  return head.next;
};
