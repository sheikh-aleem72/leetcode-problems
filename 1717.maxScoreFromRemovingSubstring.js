var maximumGain = function (s, x, y) {
  let score = 0;
  let arr = s.split("");
  let i = 0;
  while (i < arr.length) {
    if (arr[i] == "b" && arr[i + 1] == "a") {
      score += y;
      arr.splice(i, 2);
      i = 0;
    }
    i++;
  }
  let j = 0;
  while (j < arr.length) {
    if (arr[j] == "a" && arr[j + 1] == "b") {
      score += x;
      arr.splice(j, 2);
      j = 0;
    }
    j++;
  }
  return score;
};

let s = "cdbcbbaaabab";
console.log(maximumGain(s, 4, 5));
