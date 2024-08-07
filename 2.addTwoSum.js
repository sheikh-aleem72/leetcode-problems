/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Brute force approach. Space Complexity - O(n), Time Complexity O(n2)
var addTwoNumbers = function (l1, l2) {
  let sum1 = [];
  let sum2 = [];
  while (l1 != null || l2 != null) {
    if (l1 != null) {
      sum1.unshift(l1.val);
      l1 = l1.next;
    }
    if (l2 != null) {
      sum2.unshift(l2.val);
      l2 = l2.next;
    }
  }

  let sum = BigInt(sum1.join("")) + BigInt(sum2.join(""));

  sum = sum.toString().split("");
  let len = sum.length - 1;

  let sumNode = new ListNode(-1);
  let temp = sumNode;
  for (let i = len; i >= 0; i--) {
    temp.next = new ListNode(sum[i]);
    temp = temp.next;
  }

  let result = sumNode.next;
  sumNode.next = null;
  return result;
};

// Optimized code. Space Complexity - O(1), Time Complexity - O(n)
var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) l1 = l1.next;
    if (l2 !== null) l2 = l2.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummyHead.next;
};
