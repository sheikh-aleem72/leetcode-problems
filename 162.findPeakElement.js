var findPeakElement = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  if (arr.length == 1) return 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid; // if the current element is peak
    } else if (arr[mid] > arr[mid + 1] && mid - 1 < 0) {
      return mid; // if the rightmost element is peak
    } else if (arr[mid] > arr[mid - 1] && mid + 1 > arr.length - 1) {
      return mid; // if the left most element is peak
    } else if (arr[mid] < arr[mid + 1]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};
