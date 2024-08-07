var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  let low = 0,
    high = m * n - 1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let row = Math.floor(mid / n); // formula for calculating current row is index/n;
    let col = mid % n; // formula for calculating current col is index%n;
    if (matrix[row][col] == target) {
      return true;
    } else if (matrix[row][col] <= target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
};

let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 3;
