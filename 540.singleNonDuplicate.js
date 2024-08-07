var singleNonDuplicate = function (arr) {
  let low = 0;
  let high = arr.length - 1;
  let ans = 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) {
      return arr[mid];
    } else if (
      (mid % 2 == 0 && arr[mid] == arr[mid + 1]) ||
      (mid % 2 == 1 && arr[mid] == arr[mid - 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
};

let arr = [3, 3, 7, 7, 10, 11, 11];

console.log(singleNonDuplicate(arr));
