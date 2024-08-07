function sum(nums, mid) {
  let totalSum = 0;
  for (let i = 0; i < nums.length; i++) {
    totalSum += Math.ceil(nums[i] / mid);
  }
  return totalSum;
}
var smallestDivisor = function (nums, threshold) {
  let low = 1;
  let high = Math.max(...nums);
  let ans = high;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (sum(nums, mid) <= threshold) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

let nums = [1, 2, 5, 9];
let threshold = 6;
console.log(smallestDivisor(nums, threshold));
