var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = nums.length;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid - 1;
    }
  }
  return ans;
};
