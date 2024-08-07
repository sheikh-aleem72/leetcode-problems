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

// Brute force approach.
var middleNode = function (head) {
  let temp = head;
  let len = 1;
  while (temp.next != null) {
    temp = temp.next;
    len++;
  }

  let middle = Math.floor(len / 2);
  let i = 0;
  let curr = head;
  while (i < middle) {
    curr = curr.next;
    i++;
  }

  return curr;
};

// slow and fast pointer approach
var middleNode = function (head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};
