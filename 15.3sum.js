/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((x, y) => x - y);
  let res = [];
  if (nums.length < 3) return res;
  let n = nums.length;
  for (let c = 0; c < n; c++) {
    if (nums[i] > 0) break;
    let low = c + 1;
    let high = n - 1;
    if (c == 0 || nums[c] != nums[c - 1]) {
      while (i < j) {
        let sum = nums[i] + nums[j] + nums[c];
        if (sum > 0 || nums[high] === nums[high + 1])
          high--; // If  the sum is greater than 0 then reduce high or if current high is equal to previous high than it may create duplicate triplets thats why reduce high.
        else if (sum < 0 && nums[low] === nums[low - 1])
          low++; // If sum is less than 0 and current low is equal to previous low then increase low, because if the sum is less than 0 then the low must be too small therefore we need to increase low, and if the current low and previous low is same then it can create duplicate triplets.
        else {
          res.push([nums[c], nums[i], nums[j]]);
          high--;
          low++;
        }
      }
    }
  }
  return res;
};

let s = threeSum([1, -1, -1, 0]);
console.log(s);
