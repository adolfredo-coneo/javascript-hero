console.log('Challenge 3***************************');
const dolphinsRound1 = 97;
const dolphinsRound2 = 112;
const dolphinsRound3 = 80;
const koalasRound1 = 109;
const koalasRound2 = 95;
const koalasRound3 = 50;
const dolphinsAverage = (dolphinsRound1 + dolphinsRound2 + dolphinsRound3) / 3;
const koalasAverage = (koalasRound1 + koalasRound2 + koalasRound3) / 3;
if (dolphinsAverage > koalasAverage && dolphinsAverage >= 100) {
  console.log('Dolphins win! ', dolphinsAverage);
} else if (dolphinsAverage < koalasAverage && koalasAverage >= 100) {
  console.log('Koalas win! ', koalasAverage);
} else if (dolphinsAverage >= 100 && koalasAverage >= 100) {
  console.log("It's a tie! ", dolphinsAverage, koalasAverage);
} else {
  console.log('No winner!');
}
