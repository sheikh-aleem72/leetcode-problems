var reverseWords = function (s) {
  s = s.trim();
  let arr = s.split(" ");
  let StringWithoutSpace = [];
  for (let k = 0; k < arr.length; k++) {
    if (arr[k] != "") StringWithoutSpace.push(arr[k]);
  }
  let i = 0,
    j = StringWithoutSpace.length - 1;
  while (i < j) {
    let temp = StringWithoutSpace[i];
    StringWithoutSpace[i] = StringWithoutSpace[j];
    StringWithoutSpace[j] = temp;
    i++;
    j--;
  }
  return StringWithoutSpace.join(" ");
};

// More optimized way
var reverseWords2 = function (s) {
  let StringWithoutSpace = s.trim().split(/\s+/);
  let i = 0,
    j = StringWithoutSpace.length - 1;
  while (i < j) {
    let temp = StringWithoutSpace[i];
    StringWithoutSpace[i] = StringWithoutSpace[j];
    StringWithoutSpace[j] = temp;
    i++;
    j--;
  }
  return StringWithoutSpace.join(" ");
};
