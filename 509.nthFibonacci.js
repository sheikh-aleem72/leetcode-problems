/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  if (n == 1 || n == 0) return n;
  return fib(n - 1) + fib(n - 2);
};

// This is the solution using Dynamic Programming and is  more optimal when n is too big.
// Top-down approach(Memoisation)
var dp = new Array(10005);
function f(n) {
  if (n == 1 || n == 0) return n;
  if (dp[n] != -1) return dp[n];
  return (dp[n] = fib(n - 1) + fib(n - 2));
}
var fib = function (n) {
  dp.fill(-1);
  return f(n);
};

// Bottom-up Approach(tabulation);
var fib = function (n) {
  let tabulation = new Array(n);
  tabulation[0] = 0;
  tabulation[1] = 1;
  for (let i = 2; i <= n; i++) {
    tabulation[i] = tabulation[i - 1] + tabulation[i - 2];
  }
  return tabulation[n];
};
