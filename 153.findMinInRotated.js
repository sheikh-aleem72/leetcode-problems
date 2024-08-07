var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let ans = 0;

  if (nums.length == 1) return nums[0];

  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] > nums[high]) {
      low = mid + 1; // Discard left half
    } else {
      high = mid; // Discard right half excluding mid;
    }
  }

  return nums[low];
};
