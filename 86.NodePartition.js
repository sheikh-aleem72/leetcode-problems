/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

// We have solved this problem using quick sort partition method, where nodes with value less than x are attatched to d1 node which also maintain a t1(tail) node, and all values greater than x are attatched to d2 node which also maintain a t2(tail) node. This continues till current node becomes null, after this d2.next is attatched to t1.next and d1.next is assigned with null, and d1.next is assigned to new node result with d1.next is assigned with null. Returning result.
var partition = function (head, x) {
  let d1 = new ListNode(-1);
  let d2 = new ListNode(-1);

  let t1 = d1;
  let t2 = d2;

  let curr = head;
  while (curr != null) {
    let temp = curr;
    curr = curr.next;
    temp.next = null;

    if (temp.val < x) {
      t1.next = temp;
      t1 = t1.next;
    } else {
      t2.next = temp;
      t2 = t2.next;
    }
  }

  t1.next = d2.next;
  d2.next = null;

  let result = d1.next;
  d1.next = null;
  return result;
};
