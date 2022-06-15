const calcAverage = (...scores) => {
  const sum = scores.reduce((acc, curr) => acc + curr, 0);
  return sum / scores.length;
};

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}) `);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) `);
  } else {
    console.log('No winner!');
  }
};

const averageDolphins = calcAverage(85, 54, 41);
const averageKoala = calcAverage(23, 34, 27);

console.log(averageDolphins, averageKoala);
checkWinner(averageDolphins, averageKoala);
