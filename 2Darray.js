function same(nums) {
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === nums[i + 1]) {
      return "Array includes same values";
    }
  }
}

function contain(nums) {
  let twoDArr = [];
  for (let i = 0; i < nums.length; ++i) {
    if (twoDArr.includes(nums[i])) {
      for (let j = 0; j < twoDArr[i].length; j++) {
        twoDArr[i][j].push(nums[i]);
      }
    } else {
      twoDArr.push(nums[i]);
    }
  }
  console.log(twoDArr);
}

const nums = [1, 2, 3, 2, 3, 5, 5, 3, 6, 3, 4];

console.log(contain(nums));
