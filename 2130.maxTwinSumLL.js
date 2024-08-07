// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var pairSum = function (head) {
  let part1 = head;
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let part2 = slow;
  let prev = null;

  while (part2 != null) {
    let next = part2.next;
    part2.next = prev;
    prev = part2;
    part2 = next;
  }

  let twinSum = Number.MIN_SAFE_INTEGER;
  while (part1 != null && prev != null) {
    let sum = part1.val + prev.val;
    if (sum > twinSum) {
      twinSum = sum;
    }
    part1 = part1.next;
    prev = prev.next;
  }

  return twinSum;
};

let head = new ListNode(5);
head.next = new ListNode(4);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
// head.next.next.next.next = new ListNode(5);

console.log(pairSum(head));
