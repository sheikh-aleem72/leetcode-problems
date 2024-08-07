var isPerfectSquare = function (num) {
  let low = 1;
  let high = num;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid * mid == num) {
      return ans;
    } else if (mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  if (ans == -1) {
    return false;
  } else {
    return true;
  }
};
