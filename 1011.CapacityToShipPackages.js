function canShipWithMidWeightWithinDdays(weights, mid, days) {
  let daysCount = 0;
  let totalWeight = 0;
  for (let i = 0; i < weights.length; i++) {
    if (totalWeight + weights[i] > mid) {
      daysCount++;
      totalWeight = 0;
    }
    totalWeight += weights[i];
  }

  return daysCount < days;
}

var shipWithinDays = function (weights, days) {
  let low = Math.max(...weights);
  let high = 0;
  for (let i = 0; i < weights.length; i++) {
    high += weights[i];
  }
  let ans = high;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canShipWithMidWeightWithinDdays(weights, mid, days)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};

let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let days = 5;

console.log(shipWithinDays(weights, days));
