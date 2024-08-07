/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */

function canFormAtleastPpairsWithAtmostMidDifference(nums, mid, p) {
  let count = 0;
  let i = 0;
  while (i < nums.length - 1) {
    if (nums[i + 1] - nums[i] <= mid) {
      count++;
      i += 2;
    } else {
      i++;
    }
  }
  return count >= p;
}
var minimizeMax = function (nums, p) {
  nums.sort((a, b) => a - b);
  let low = 0;
  let high = nums[nums.length - 1];
  let ans = 0;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canFormAtleastPpairsWithAtmostMidDifference(nums, mid, p)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
