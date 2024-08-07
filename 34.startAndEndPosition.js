function findPosition(arr, target) {
  function findFirst(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let firstPos = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] == target) {
        firstPos = mid;
        right = mid - 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return firstPos;
  }

  function findLast(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let lastPos = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] == target) {
        lastPos = mid;
        left = mid + 1;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return lastPos;
  }

  let firstPosition = findFirst(arr, target);
  if (firstPosition == -1) {
    return [-1, -1];
  }
  let lastPosition = findLast(arr, target);
  return [firstPosition, lastPosition];
}

const arr = [5, 7, 7, 8, 8, 10];
const target = 8;

console.log(findPosition(arr, target));
