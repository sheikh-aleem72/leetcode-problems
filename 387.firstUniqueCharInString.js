/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let hashMap = {};

  // Populate the frequency map
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] !== undefined) {
      hashMap[s[i]]++;
    } else {
      hashMap[s[i]] = 1;
    }
  }

  // Find the first unique character
  for (let i = 0; i < s.length; i++) {
    if (hashMap[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
