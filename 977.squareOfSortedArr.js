function s(nums) {
  for (let i = 0; i < nums.length; ++i) {
    nums[i] = nums[i] * nums[i];
    for (let j = 0; j < nums.length; ++j) {}
  }
}

let nums = [-4, -1, 0, 3, 10];
s(nums);
console.log(nums);
