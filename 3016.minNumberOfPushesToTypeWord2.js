/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function (word) {
  const arr = new Array(26).fill(0);

  for (let i = 0; i < word.length; i++) {
    arr[word.charCodeAt(i) - 97]++;
  }

  arr.sort((a, b) => a - b);

  let count = 0;
  let minKeyPressed = 0;

  for (let i = 25; i >= 0; i--) {
    let val = arr[i] * (Math.floor(count / 8) + 1);
    minKeyPressed += val;
    count++;
  }

  return minKeyPressed;
};
