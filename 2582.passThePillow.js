// My brute force approach. Solve the problem with O(n) time complexity.
/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function (n, time) {
  let i = 1;
  let person = 1;
  while (i <= time) {
    if (person == n) {
      while (person > 1 && i <= time) {
        person--;
        i++;
      }
    } else {
      person++;
      i++;
    }
  }
  return person;
};

// The more optimized solution for this problem is with time complexity O(1)
var passThePillow = function (n, time) {
  let cycle = 2 * (n - 1);
  let remainder = time % cycle;

  if (remainder < n) {
    return remainder + 1;
  } else {
    return 2 * n - remainder - 1;
  }
};
