class Stack {
  #a;

  constructor() {
    this.#a = [];
  }

  push(val) {
    this.#a.push(val);
  }

  pop() {
    this.#a.pop();
  }

  peek() {
    return this.#a[this.#a.length - 1];
  }

  isEmpty() {
    if (this.#a.length == 0) {
      return true;
    } else {
      return false;
    }
  }
}

var asteroidCollision = function (a) {
  let st = new Stack();
  let i = 0;

  while (i < a.length) {
    if (st.isEmpty()) {
      st.push(a[i]);
      i++;
    } else {
      if (st.peek() > 0 && a[i] < 0) {
        if (Math.abs(st.peek()) === Math.abs(a[i])) {
          st.pop();
          i++;
        } else {
          if (Math.abs(st.peek()) > Math.abs(a[i])) {
            i++;
          } else {
            while (
              !st.isEmpty() &&
              st.peek() > 0 &&
              a[i] < 0 &&
              Math.abs(st.peek()) < Math.abs(a[i])
            ) {
              st.pop();
            }
          }
        }
      } else {
        st.push(a[i]);
        i++;
      }
    }
  }

  let result = [];
  while (!st.isEmpty()) {
    result.push(st.peek());
    st.pop();
  }

  return result.reverse();
};

console.log(asteroidCollision([5, 10, -5]));
