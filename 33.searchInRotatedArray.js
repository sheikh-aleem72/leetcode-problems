/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let ans = -1;

  if (nums.length == 0) return -1;
  if (nums[0] == target) return 0;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] >= nums[low]) {
      if (target >= nums[low] && target < nums[mid]) {
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
  return ans;
};

const nums = [3, 1];
const target = 1;

console.log(search(nums, target));
