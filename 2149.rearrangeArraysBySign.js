var rearrangeArray = (nums) => {
  let output = [];
  //   let pos = [];
  //   let neg = [];
  //   for (let i = 0; i < nums.length; ++i) {
  //     if (nums[i] > 0) pos.push(nums[i]);
  //     else neg.push(nums[i]);
  //   }
  //   output.push(pos.shift());
  //   for (let i = 0; i < nums.length - 1; ++i) {
  //     if (output[i] > 0) output.push(neg.shift());
  //     else output.push(pos.shift());
  //   }
  //   return output;
  let pos = 2;
  let neg = 1;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] > 0) {
      output.push(nums[i]);
      nums.splice(i, 1);
      break;
    }
  }
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] < 0) {
      output[neg] = nums[i];
      neg += 2;
    }
    if (nums[i] > 0) {
      output[pos] = nums[i];
      pos += 2;
    }
  }
  return output;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
console.log(rearrangeArray([1, -1]));
