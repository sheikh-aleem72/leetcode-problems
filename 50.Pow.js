/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function helper(x, n) {
  if (x == 0) return 0;
  if (n == 0) return 1;

  let res = helper(x, Math.floor(n / 2));
  res = res * res;
  if (n % 2 == 0) return res;
  else return x * res;
}

function myPow(x, n) {
  if (n < 0) {
    return 1 / helper(x, Math.abs(n));
  } else {
    return helper(x, n);
  }
}

console.log(myPow(2, 8));
