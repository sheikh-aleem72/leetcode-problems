var moveZeroes = function (nums) {
  if (nums.length < 1) return nums;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
    }
  }
  let i = 0;
  while (nums[i] < 1) {
    nums.push(nums.shift());
  }
};

let arr = [0, 1, 0, 3, 12];
moveZeroes(arr);
console.log(arr);
