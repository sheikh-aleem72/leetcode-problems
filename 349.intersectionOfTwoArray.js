/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let n2 of nums2) {
    set.add(n2);
  }

  let list = [];

  for (let n1 of nums1) {
    if (set.has(n1)) {
      list.push(n1);
      set.delete(n1);
    }
  }

  return list;
};
