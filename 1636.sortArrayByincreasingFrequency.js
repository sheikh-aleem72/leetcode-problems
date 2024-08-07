/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const hashTable = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashTable[nums[i]]) {
      hashTable[nums[i]] += 1;
    } else {
      hashTable[nums[i]] = 1;
    }
  }

  nums.sort((a, b) => {
    if (hashTable[a] == hashTable[b]) {
      return b - a;
    }

    return hashTable[a] - hashTable[b];
  });

  return nums;
};
