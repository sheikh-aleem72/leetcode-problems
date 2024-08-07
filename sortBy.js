function sortBy(arr, fn) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; ++i) {
    s = fn(arr[i]);
    sortedArr.push(arr[i]);
  }
  sortedArr.sort();
  return sortedArr;
}

const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
const res = sortBy(arr, (n) => n.x);
console.log(res);
