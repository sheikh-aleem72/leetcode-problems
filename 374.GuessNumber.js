var guessNumber = function (n) {
  let low = 1,
    high = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (guess(mid) == 0) {
      return mid;
    } else if (guess(mid) == -1) {
      high = mid - 1; // right half discard
    } else if (guess(mid) == 1) {
      low = mid + 1;
    }
  }
};
