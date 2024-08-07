/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function (arr, k) {
  const hashTable = {};
  const strArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (hashTable[arr[i]]) {
      hashTable[arr[i]] += 1;
    } else {
      hashTable[arr[i]] = 1;
    }
  }

  for (let str in hashTable) {
    if (hashTable[str] == 1) {
      strArr.push(str);
    }
  }

  if (strArr.length < k) return "";
  return strArr[k - 1];
};
