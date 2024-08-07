/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

function canFindLargestSumWithMid(nums, mid, k) {
  let totalSum = 0;
  let subArrayCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (totalSum + nums[i] > mid) {
      subArrayCount++;
      totalSum = 0;
    }

    totalSum += nums[i];
  }
  subArrayCount++;
  return subArrayCount <= k;
}
var splitArray = function (nums, k) {
  let totalSum = 0;
  let maxWeight = Math.max(...nums);

  for (let i = 0; i < nums.length; i++) {
    totalSum += nums[i];
  }

  let low = maxWeight;
  let high = totalSum;
  let ans = 0;

  if (k == 1) return high;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (canFindLargestSumWithMid(nums, mid, k)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
