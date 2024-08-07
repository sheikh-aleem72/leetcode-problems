/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let i = 0;
  while (i < s.length) {
    if (stack.length == 0) {
      stack.push(s[i]);
    } else if (
      (s[i] == ")" && stack[stack.length - 1] == "(") ||
      (s[i] == "}" && stack[stack.length - 1] == "{") ||
      (s[i] == "]" && stack[stack.length - 1] == "[")
    ) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
    i++;
  }

  return stack.length == 0;
};
