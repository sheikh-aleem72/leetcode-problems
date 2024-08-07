// Sort an array in O(nlogn) time. i.e. merge sort
/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(left, right) {
  let i = 0,
    j = 0,
    k = 0;
  let m = left.length;
  let n = right.length;
  let result = new Array(m + n);

  while (i < m && j < n) {
    if (left[i] <= right[j]) {
      result[k] = left[i];
      i++;
      k++;
    } else {
      result[k] = right[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    result[k] = left[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = right[j];
    j++;
    k++;
  }
  return result;
}

function mergeHelper(arr, start, end) {
  if (start == end) {
    return [arr[start]];
  }
  let mid = parseInt((start + end) / 2);
  let left = mergeHelper(arr, start, mid);
  let right = mergeHelper(arr, mid + 1, end);
  return merge(left, right);
}

var sortArray = function (nums) {
  return mergeHelper(nums, 0, nums.length - 1);
};
