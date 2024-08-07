/**
 * @param {string} s
 * @return {string}
 */
class Stack {
  #arr;
  constructor() {
    this.#arr = [];
  }

  push(val) {
    this.#arr.push(val);
  }
  pop() {
    return this.#arr.pop();
  }
  peek() {
    return this.#arr[this.#arr.length - 1];
  }

  isEmpty() {
    if (this.#arr.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

// The following approach takes O(n2) time complexity
var reverseParentheses = function (s) {
  let st = new Stack();
  let res = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(" || s[i] != ")") {
      st.push(s[i]);
    } else {
      let list = [];
      while (!st.isEmpty() && st.peek() != "(") {
        list.push(st.pop());
      }
      st.pop();
      for (let i = 0; i < list.length; i++) {
        st.push(list[i]);
      }
    }
  }

  while (!st.isEmpty()) {
    res.unshift(st.pop());
  }

  return res.join("");
};

// This approach takes only O(2n) time complexity.
var reverseParentheses = function (s) {
  let st = new Stack();
  let res = "";
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") {
      st.push(i);
    } else if (s[i] == ")") {
      arr[i] = st.peek();
      arr[st.pop()] = i;
    }
  }

  let dir = 1;
  let i = 0;

  while (i < s.length) {
    if (s[i] == "(" || s[i] == ")") {
      i = arr[i];
      dir *= -1;
    } else {
      res += s[i];
    }
    i += dir;
  }

  return res;
};
