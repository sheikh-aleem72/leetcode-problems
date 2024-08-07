/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
  if (nums.length <= 4) return 0;

  nums.sort((a, b) => a - b);
  let n = nums.length;
  let minDiff = Infinity;

  minDiff = Math.min(minDiff, nums[n - 1] - nums[3]);
  minDiff = Math.min(minDiff, nums[n - 2] - nums[2]);
  minDiff = Math.min(minDiff, nums[n - 3] - nums[1]);
  minDiff = Math.min(minDiff, nums[n - 4] - nums[0]);

  return minDiff;
};
