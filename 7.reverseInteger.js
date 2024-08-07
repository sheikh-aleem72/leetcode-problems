/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if ((x >= 0 && x < 10) || (x <= 0 && x > -10)) return x;

  let n = 0;
  if (x < 0) n = -x;
  else n = x;
  let len = n.toString().length;
  let rev = "";

  let i = 0;
  while (i < len) {
    rev += n % 10;
    n = Math.floor(n / 10);
    i++;
  }

  rev = parseInt(rev);
  if (rev > 2147483648) return 0;

  if (x < 0) return -rev;
  return rev;
};

function rev(x) {
  let rev = 0;
  const sign = x < 0 ? -1 : 1;
  x = Math.abs(x);

  while (x != 0) {
    rev = rev * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  rev *= sign;

  if (rev > 2 ** 31 - 1 || rev < -(2 ** 31)) return 0;
  return rev;
}
