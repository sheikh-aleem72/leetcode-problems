/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  if (nums.length == 0) return false;
  if (nums[0] == target) return true;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return true;
    } else if (nums[mid] >= nums[low]) {
      if (nums[mid] == nums[low]) {
        low = low + 1;
      } else if (nums[low] <= target && target < nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      if (target > nums[mid] && target <= nums[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
