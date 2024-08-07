/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

// Pw solution.
var buildArray = function (target, n) {
  const ans = [];
  let i = 1;
  for (const element of target) {
    while (i < element) {
      ans.push("Push");
      ans.push("Pop");
      i++;
    }
    ans.push("Push");
    i++;
  }

  return ans;
};

// my solution
var buildArray = function (target, n) {
  let stack = [];
  let i = 0;
  let stream = 1;
  let list = [];
  while (stream <= n) {
    stack.push(stream);
    list.push("Push");
    if (stack[stack.length - 1] == target[target.length - 1]) {
      return list;
    }
    if (stack[stack.length - 1] != target[i]) {
      stack.pop();
      list.push("Pop");
    } else {
      i++;
    }
    stream++;
  }

  return list;
};
