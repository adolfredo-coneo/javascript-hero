const calcBMI = function () {
  this.bmi = this.mass / this.height ** 2;
  return this.bmi;
};

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI,
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI,
};

mark.calcBMI();
john.calcBMI();
function getHigherBMI(mark, john) {
  if (mark.bmi > john.bmi) {
    return `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`;
  } else if (john.bmi > mark.bmi) {
    return `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName.fullName}'s (${mark.fullName.bmi})`;
  } else {
    return 'They have the same BMI';
  }
}

console.log(getHigherBMI(mark, john));
