/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let totalDrunkedBottles = numBottles;
  let emptyBottlesCount = numBottles;
  while (emptyBottlesCount >= numExchange) {
    let newBottles = Math.floor(emptyBottlesCount / numExchange);
    totalDrunkedBottles += newBottles;
    emptyBottlesCount = newBottles + (emptyBottlesCount % numExchange);
  }

  return totalDrunkedBottles;
};
