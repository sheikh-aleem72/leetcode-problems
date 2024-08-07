function lowerBound(potions, spell, success) {
  let low = 0;
  let high = potions.length - 1;
  let y = Math.ceil(success / spell);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (potions[mid] >= y) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return potions.length - low;
}

var successfulPairs = function (spells, potions, success) {
  let pairs = [];
  potions.sort((a, b) => a - b); // Using built-in sort for efficiency

  for (let i = 0; i < spells.length; i++) {
    let res = lowerBound(potions, spells[i], success);
    pairs.push(res);
  }
  return pairs;
};
