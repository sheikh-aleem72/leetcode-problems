function customFilter(arr, fn) {
  let retArr = [];
  let res = 0;
  for (let i = 0; i < arr.length; ++i) {
    res = fn(arr[i]);
    if (res) retArr.push(arr[i]);
  }
  return retArr;
}

const arr = [0, 10, 20, 30];
const res = customFilter(arr, (e) => {
  return e > 10;
});
console.log(res);
