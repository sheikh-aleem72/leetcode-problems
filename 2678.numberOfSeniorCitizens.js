/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function (details) {
  let seniorCitizens = 0;

  details.forEach((str) => {
    let age = str[11] + str[12];
    if (age > 60) seniorCitizens++;
  });

  return seniorCitizens;
};
