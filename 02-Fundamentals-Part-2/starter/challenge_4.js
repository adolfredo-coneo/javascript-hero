console.log('***Challenge #4***');
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [],
  totals = [];

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

console.log(`Average Tip: ${calcAverage(tips)}`);
console.log(`Average Total: ${calcAverage(totals)}`);
