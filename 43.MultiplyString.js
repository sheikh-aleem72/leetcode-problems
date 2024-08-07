function mulStr(num1, num2) {
  let res = [];
  let zeroes = "";
  let z = new Array(num1.length).fill(0).join("");
  let sum = 0;
  for (let i = 1; i <= num2.length; i++) {
    if (num2[i] == 0) res.push(z);
    else {
      res.push(num1 * num2[num2.length - i]);
    }
  }
  let p = [];
  for (let i = 0; i < res.length; i++) {
    if (i == 0) {
      sum += res[i];
      p.push(sum);
    } else {
      sum += parseInt(res[i] + (zeroes = zeroes + "0"));
      p.push(sum);
    }
  }
  console.log(p);
  return `${sum}`;
}
console.log(mulStr("123456789", "987654321"));
