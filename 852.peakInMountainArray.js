var peakIndexInMountainArray = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  if (arr.length == 1) return 0;
  while (low < high) {
    // loop wil run till low < high.
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] < arr[mid + 1]) {
      // The peak might be in decreasing/left part.
      low = mid + 1;
    } else {
      high = mid; // Mid will become high.
    }
  }
  return low;
};
