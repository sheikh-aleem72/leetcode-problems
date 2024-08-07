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
    this.#arr.pop();
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
var removeStars = function (s) {
  let st = new Stack();
  let i = 0;
  while (i < s.length) {
    if (s[i] != "*") {
      st.push(s[i]);
    } else if (s[i] == "*" && !st.isEmpty()) {
      st.pop();
    }
    i++;
  }

  let result = "";
  while (!st.isEmpty()) {
    let ch = st.peek();
    st.pop();
    result = ch + result;
  }
  return result;
};
