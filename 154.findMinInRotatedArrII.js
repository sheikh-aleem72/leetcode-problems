/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;

  // Handle edge case where array length is 1
  if (nums.length === 1) return nums[0];

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] > nums[high]) {
      // The minimum element is in the right part
      low = mid + 1;
    } else if (nums[mid] < nums[high]) {
      // The minimum element is in the left part
      high = mid; // If we set high = mid - 1, then low and high can cross each other which results in termination of loop. And since our condition is low<high we need to keep low < high so that low can point to min element.
    } else {
      // nums[mid] == nums[high], reduce high by 1
      high--; // It helps to remove one duplicate from search space.
    }
  }

  return nums[low];
};
