// This problem is also known as Josephus problem.

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// The below approach takes O(n+n2) time and O(n) space;
var findTheWinner = function (n, k) {
  let list = [];
  for (let i = 1; i <= n; i++) {
    list.push(i);
  }

  let index = 0;
  while (list.length > 1) {
    index = (index + (k - 1)) % list.length;
    list.splice(index, 1);
  }

  return list[0];
};
