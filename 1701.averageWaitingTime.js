/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
  let i = 0;
  let waitingTime = 0;
  let startTime = 1;
  while (i < customers.length) {
    let j = 0;
    if (customers[i][j] > startTime) {
      startTime = customers[i][j];
    }

    waitingTime += startTime + customers[i][j + 1] - customers[i][j];
    startTime += customers[i][j + 1];
    i++;
  }

  return waitingTime / customers.length;
};
