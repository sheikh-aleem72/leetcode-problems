const nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];
function mergeSortedArr(nums1, nums2, m, n) {
  let i = 2,
    j = n - 1,
    k = 5;
  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k] = nums2[j];
      k--;
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
      k--;
    }
  }
  while (i >= 0) {
    nums1[k] = nums1[i];
    i--;
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

mergeSortedArr(nums1, nums2, 3, nums2.length);
console.log(nums1);

// Without using an extra array.
function mergeSortedWithoutExtraArray(nums1, nums2, m, n) {
  let i = 0,
    j = 0,
    k = 0;
  let result = new Array(n + m);
  while (i < m && j < n) {
    if (nums1[i] <= nums2[j]) {
      result[k] = nums1[i];
      i++;
      k++;
    } else {
      result[k] = nums2[j];
      j++;
      k++;
    }
  }
  while (i < m) {
    result[k] = nums1[i];
    i++;
    k++;
  }
  while (j < n) {
    result[k] = nums2[j];
    j++;
    k++;
  }
  k = 0;
  while (k < m + n) {
    nums1[k] = result[k];
    k++;
  }
}
