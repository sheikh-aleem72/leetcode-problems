var lengthOfLongestSubstring = function (s) {
  let subStr = "";
  let i = 0;
  let str = "";
  while (i < s.length) {
    let str = "";
    if (str.includes(s[i])) {
      if (subStr.length < str.length) subStr = str;
      str = "";
    } else {
      str += s[i];
    }
    i++;
  }

  return subStr.length;
};

console.log(lengthOfLongestSubstring("abcabcac"));
