function isPrimitive(n) {
  if (n <= 1)
  {
    return false;
  }
  let limit = (n / 2).toFixed();
  for (let i = 2; i < limit; i += 1)
  {
    if (n % i === 0) return false;
  }

  return true;

}
var countPrimes = function (n) {
  let c = (n / 2).toFixed();
  let result = 0;
  for (let index = 0; index <= n; index++)
  {
    if (isPrimitive(index)) result += 1;
  }
  return result;
};

console.log(countPrimes(97))