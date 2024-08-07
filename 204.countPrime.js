function isPrime(n) {
  if (n < 2 || n % 2 == 0) return false;
  if (n == 2) return true;

  let i = 3;
  while (i * i <= n) {
    if (n % i == 0) return false;
    i += 2;
  }
  return true;
}

var countPrimes = function (n) {
  if (n <= 2) return 0;
  let count = 1;
  for (let i = 3; i < n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
};

let n = 10000;
console.log(countPrimes(n));
