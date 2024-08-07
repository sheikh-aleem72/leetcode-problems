/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let f = {};
  for (let i = 0; i < nums.length; i++) {
    if (f[nums[i]]) f[nums[i]] += 1;
    else f[nums[i]] = 1;
  }
  console.log(f.length);
  for (let i = 0; i < f.length; i++) {
    if (f[nums[i]] > 1) return true;
    else {
      f[nums[i]] -= 1;
      if (f[nums[i]] == 0) delete f[nums[i]];
    }
  }
  return Object.keys(f).length > 0;
};

console.log(containsDuplicate([1, 2, 3, 4]));
