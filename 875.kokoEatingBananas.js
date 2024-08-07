function canEatAllBananas(piles, h, mid) {
  let totalHoursBykoko = 0;

  for (let i = 0; i < piles.length; i++) {
    totalHoursBykoko += Math.ceil(piles[i] / mid);
  }

  return totalHoursBykoko <= h;
}

function kokoEatBanana(piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let ans = 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (canEatAllBananas(piles, h, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return mid;
}
